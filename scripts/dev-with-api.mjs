/**
 * Local preview WITH the serverless functions.
 *
 * `astro dev` and `astro preview` only serve the static site — they do not run
 * anything in api/, so the chat widget gets a 404 and shows a generic error.
 * This server serves dist/ and dispatches /api/* to the same handlers Vercel
 * uses, so the assistant can be tested exactly as it will behave in production.
 *
 *   npm run build          # produce dist/ + the knowledge base
 *   npm run dev:api        # then open http://localhost:4321
 */
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PORT = Number(process.env.PORT || 4321);

// Vercel injects env vars for you; locally we read .env ourselves.
const envFile = join(ROOT, '.env');
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon',
  '.xml': 'application/xml', '.txt': 'text/plain', '.woff2': 'font/woff2',
};

const handlers = new Map();
async function getHandler(name) {
  if (!handlers.has(name)) {
    const file = join(ROOT, 'api', `${name}.js`);
    if (!existsSync(file)) return null;
    const mod = await import(`file://${file}`);
    handlers.set(name, mod.default);
  }
  return handlers.get(name);
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname.startsWith('/api/')) {
    const name = url.pathname.slice(5).replace(/\/$/, '');
    const handler = await getHandler(name);
    if (!handler) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: false, error: `No api/${name}.js` }));
    }
    let raw = '';
    for await (const chunk of req) raw += chunk;
    try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }

    // Minimal shim over the Vercel response API used by our handlers.
    const shim = {
      _status: 200,
      status(code) { this._status = code; return this; },
      setHeader(k, v) { res.setHeader(k, v); return this; },
      json(obj) {
        res.writeHead(this._status, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(obj));
        return this;
      },
    };
    try {
      await handler(req, shim);
    } catch (err) {
      console.error(`[api/${name}]`, err.message);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Handler threw' }));
      }
    }
    return;
  }

  let file = join(DIST, decodeURIComponent(url.pathname));
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) {
    file = join(DIST, '404.html');
    if (!existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(readFileSync(file));
  }
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
}).listen(PORT, () => {
  const ready = Boolean(process.env.AI_API_KEY && process.env.AI_BASE_URL);
  console.log(`\n  site + /api  →  http://localhost:${PORT}`);
  console.log(`  chat assistant: ${ready ? 'configured' : 'DISABLED (set AI_API_KEY and AI_BASE_URL in .env)'}\n`);
});
