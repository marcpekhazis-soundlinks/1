#!/usr/bin/env node
// Local dev server for the SoundLinks phonics app.
//
// It does two things:
//   1. Serves the static app, same as `npx serve` or `python3 -m http.server`.
//   2. Exposes a tiny write-back API (POST /__admin/save-word) that the
//      in-app admin content-management mode (see the "ADMIN MODE" section
//      of src/phonics-app.js) uses to persist word edits, archives, and
//      restores straight into src/phonics-app.js on disk — real, permanent,
//      git-diffable file changes instead of browser-only localStorage.
//
// Run with `npm run admin` (or `node scripts/dev-server.js`) instead of
// `npx serve` while curating content, then open http://localhost:5173.
// Admin mode is hidden by default; toggle it with the small dot in the
// footer or the Ctrl+Alt+A shortcut. Everything works with plain
// `npx serve` too — only the write-back requests will fail there, which
// admin mode reports on screen rather than silently losing edits.

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const WORDS_FILE = path.join(ROOT, 'src', 'phonics-app.js');
const PORT = process.env.PORT || 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
};

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const relativePath = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const filePath = path.normalize(path.join(ROOT, relativePath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME_TYPES[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  });
}

function jsStringLiteral(value) {
  return JSON.stringify(String(value));
}

// Rewrites exactly one `{ word: ... }` entry inside the WORDS array in
// src/phonics-app.js, leaving every other character in the file untouched
// so an admin edit shows up as a single-line, reviewable git diff instead
// of reformatting the whole word list.
function patchWordLine(source, originalWord, updated) {
  const startMarker = 'const WORDS = [';
  const start = source.indexOf(startMarker);
  if (start === -1) throw new Error('Could not find "const WORDS = [" in phonics-app.js');
  const end = source.indexOf('\n];', start);
  if (end === -1) throw new Error('Could not find the end of the WORDS array');

  const before = source.slice(0, start);
  const block = source.slice(start, end);
  const after = source.slice(end);

  const lineRegex = /^(\s*)\{\s*word:\s*(['"])((?:\\.|(?!\2)[\s\S])*)\2/;
  let found = false;
  const patchedLines = block.split('\n').map((line) => {
    const match = line.match(lineRegex);
    if (!match) return line;
    const currentWord = match[3].replace(/\\(.)/g, '$1');
    if (currentWord !== originalWord) return line;
    found = true;

    const indent = match[1];
    let entry = `${indent}{ word: ${jsStringLiteral(updated.word)}, arabic: ${jsStringLiteral(updated.arabic)}, hint: ${jsStringLiteral(updated.hint)}, visual: ${jsStringLiteral(updated.visual)}, level: ${Number(updated.level)}`;
    if (updated.archived) entry += ', archived: true';
    if (updated.svg) entry += `, svg: ${jsStringLiteral(updated.svg)}`;
    // `say` (a TTS pronunciation-fix respelling) and `longAIndices` (a
    // highlight override) aren't in the edit form — they're admin data
    // curated at the code level, not through this UI — but the write-back
    // still has to carry them through unchanged, or saving any other field
    // on a word like "ate" or "vase" would silently delete its `say` fix.
    if (updated.say) entry += `, say: ${jsStringLiteral(updated.say)}`;
    if (updated.longAIndices) entry += `, longAIndices: ${JSON.stringify(updated.longAIndices)}`;
    if (updated.sentence) entry += `, sentence: ${jsStringLiteral(updated.sentence)}`;
    entry += ' },';
    return entry;
  });

  if (!found) throw new Error(`Word "${originalWord}" was not found in the WORDS array (maybe it changed since the page loaded — try reloading)`);
  return before + patchedLines.join('\n') + after;
}

function handleSaveWord(req, res) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > 2_000_000) req.destroy();
  });
  req.on('end', () => {
    try {
      const payload = JSON.parse(body);
      const { originalWord, word } = payload;
      if (!originalWord || !word || !word.word || !word.visual || !word.level) {
        throw new Error('Request is missing required word fields');
      }

      const source = fs.readFileSync(WORDS_FILE, 'utf8');
      const patched = patchWordLine(source, originalWord, word);

      // Validate before touching the real file: write the patched source to
      // a throwaway copy and run `node --check` on it, so a bad edit (e.g.
      // pasted-in SVG that breaks string escaping) can never corrupt
      // src/phonics-app.js.
      const tmpFile = path.join(path.dirname(WORDS_FILE), `.tmp-admin-check-${process.pid}.js`);
      fs.writeFileSync(tmpFile, patched, 'utf8');
      try {
        execFileSync(process.execPath, ['--check', tmpFile]);
      } finally {
        fs.unlinkSync(tmpFile);
      }

      fs.writeFileSync(WORDS_FILE, patched, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/__admin/save-word') {
    handleSaveWord(req, res);
    return;
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405);
    res.end('Method not allowed');
    return;
  }
  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`SoundLinks dev server (with admin write-back) running at http://localhost:${PORT}`);
  console.log('Admin content-management mode can now save edits directly to src/phonics-app.js.');
});
