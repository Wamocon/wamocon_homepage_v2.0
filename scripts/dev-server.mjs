// Local dev server that serves the static Astro build AND the /api/lead endpoint.
// This lets you test the contact forms in a real browser locally.
//
// 1. Make sure .env has GRAPH_REFRESH_TOKEN (run scripts/graph-auth.mjs first).
// 2. npm run build
// 3. node scripts/dev-server.mjs
// 4. Open http://localhost:4321/zusammenarbeit/ or /karriere/

import http from 'http';
import { readFile, stat } from 'fs/promises';
import { resolve, extname, join } from 'path';

process.loadEnvFile('.env');

const { default: handler } = await import('../api/lead.js');

const PORT = process.env.PORT || 4321;
const DIST = resolve('dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

function createResponse(nodeRes) {
  let statusCode = 200;
  return {
    setHeader(name, value) {
      nodeRes.setHeader(name, value);
    },
    status(code) {
      statusCode = code;
      return {
        json(body) {
          nodeRes.writeHead(statusCode, { 'Content-Type': 'application/json' });
          nodeRes.end(JSON.stringify(body));
        },
      };
    },
  };
}

async function resolveFile(urlPath) {
  let safePath = urlPath.split('?')[0];
  safePath = decodeURIComponent(safePath);

  const candidates = [];
  const base = join(DIST, safePath);

  if (safePath.endsWith('/')) {
    candidates.push(join(base, 'index.html'));
  } else {
    candidates.push(base);
    candidates.push(base + '.html');
    candidates.push(join(base, 'index.html'));
  }

  for (const file of candidates) {
    try {
      const s = await stat(file);
      if (s.isFile()) return file;
    } catch {
      // try next
    }
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  // API endpoint
  if (req.url === '/api/lead' && req.method === 'POST') {
    try {
      let raw = '';
      for await (const chunk of req) raw += chunk;
      const body = raw ? JSON.parse(raw) : {};
      await handler({ method: 'POST', body }, createResponse(res));
    } catch (err) {
      console.error('[dev-server] api error', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Server error' }));
    }
    return;
  }

  // Static files
  const file = await resolveFile(req.url);
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Not found');
  }

  try {
    const data = await readFile(file);
    const type = MIME[extname(file)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  } catch (err) {
    console.error('[dev-server] static error', err);
    res.writeHead(500);
    res.end('Server error');
  }
});

server.listen(PORT, () => {
  console.log(`Local server running at http://localhost:${PORT}`);
  console.log('Test forms at:');
  console.log(`  http://localhost:${PORT}/zusammenarbeit/`);
  console.log(`  http://localhost:${PORT}/karriere/`);
});
