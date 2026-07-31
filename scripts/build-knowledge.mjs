/**
 * Builds the chatbot's knowledge base from the BUILT website.
 *
 * The bot must answer only from wamocon.com, so the source of truth is the
 * rendered HTML in dist/ rather than the content modules — whatever a visitor
 * can read is exactly what the assistant can cite, in all three languages.
 *
 * Output: api/_knowledge.json  (committed, so the serverless function has it at
 * deploy time without depending on build ordering on Vercel).
 *
 * Run:  npm run build:knowledge      (or `npm run build`, which chains it)
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, 'api', '_knowledge.json');

/** Pages that carry no useful answer material. */
const SKIP = ['/404/', '/danke/', '/en/thank-you/', '/tr/tesekkurler/', '/berber-siparis/', '/berber-veri-koruma/'];

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (entry.endsWith('.html')) acc.push(p);
  }
  return acc;
}

/** Strip everything that is not visible prose. */
function extractText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    // Keep block boundaries so sentences do not run together.
    .replace(/<\/(p|div|section|li|h[1-6]|td|tr|article|figcaption|dd|dt)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/[ \t ]+/g, ' ')
    .replace(/\n\s*\n+/g, '\n')
    .trim();
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function titleOf(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  if (!m) return '';
  // Page titles are SEO strings ("WAMOCON | IT-Testmanagement & ..."). The chat
  // widget shows these as source links, so keep only the distinctive part.
  let t = decodeEntities(m[1]).split('|').map((s) => s.trim()).filter(Boolean);
  let label = t.length > 1 ? t.find((s) => !/^WAMOCON/i.test(s)) || t[0] : t[0] || '';
  label = label.replace(/\s*[–-]\s*WAMOCON.*$/i, '').trim();
  return label.length > 42 ? label.slice(0, 41).trimEnd() + '…' : label;
}

function langOf(html, url) {
  const m = html.match(/<html[^>]*\blang="([a-z]{2})"/i);
  if (m) return m[1];
  if (url.startsWith('/en/')) return 'en';
  if (url.startsWith('/tr/')) return 'tr';
  return 'de';
}

/**
 * Split into retrievable chunks. Paragraph-sized pieces keep each chunk
 * self-contained, which matters because the model may only see a handful.
 */
function chunk(text, maxChars = 700) {
  const paras = text.split('\n').map((s) => s.trim()).filter((s) => s.length > 40);
  const out = [];
  let buf = '';
  for (const p of paras) {
    if ((buf + ' ' + p).length > maxChars && buf) {
      out.push(buf.trim());
      buf = p;
    } else {
      buf = buf ? `${buf} ${p}` : p;
    }
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

const files = walk(DIST);
const pages = [];
let chunkCount = 0;

for (const file of files) {
  const rel = relative(DIST, file).split(sep).join('/');
  const url = '/' + rel.replace(/index\.html$/, '');
  if (SKIP.includes(url)) continue;

  const html = readFileSync(file, 'utf8');
  const lang = langOf(html, url);
  const title = titleOf(html);

  // Body only — drop the header/footer chrome that repeats on every page and
  // would otherwise dominate retrieval.
  const bodyMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const text = extractText(bodyMatch ? bodyMatch[1] : html);
  const chunks = chunk(text).filter((c) => c.length > 60);
  if (!chunks.length) continue;

  pages.push({ url, lang, title, chunks });
  chunkCount += chunks.length;
}

pages.sort((a, b) => a.url.localeCompare(b.url));

const payload = {
  generatedAt: new Date().toISOString(),
  site: 'https://www.wamocon.com',
  pageCount: pages.length,
  chunkCount,
  pages,
};

writeFileSync(OUT, JSON.stringify(payload), 'utf8');

const byLang = pages.reduce((a, p) => ((a[p.lang] = (a[p.lang] || 0) + 1), a), {});
console.log(
  `knowledge base: ${pages.length} pages (${Object.entries(byLang).map(([l, n]) => `${l}:${n}`).join(' ')}), ` +
    `${chunkCount} chunks, ${(JSON.stringify(payload).length / 1024).toFixed(0)} KB -> api/_knowledge.json`
);
