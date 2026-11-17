// Local test server: serves the site and runs the /api functions, like Vercel does.
// Usage: node --env-file=.env dev-server.mjs   (or: npm run local)
// For local testing only; deploy with Vercel for production.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const routes = { '/api/create-order': 'create-order.js', '/api/verify-payment': 'verify-payment.js' };

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (routes[url.pathname]) {
    let raw = '';
    for await (const chunk of req) raw += chunk;
    req.body = raw;
    res.status = code => { res.statusCode = code; return res; };
    res.json = obj => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(obj)); return res; };
    const handler = (await import(pathToFileURL(join(root, 'api', routes[url.pathname])).href)).default;
    return handler(req, res);
  }

  const path = normalize(join(root, url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname)));
  const blocked = !path.startsWith(root) || /[\\/](\.env|\.git|api)([\\/]|$)/.test(path.slice(root.length));
  try {
    if (blocked) throw new Error('blocked');
    const data = await readFile(path);
    res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(port, () => console.log(`Booking site running at http://localhost:${port}`));
