#!/usr/bin/env node
/**
 * Fails when published content carries a TODO, FIXME, TBD or TKTK marker, or
 * placeholder copy. A publishing job closes every item inside its own run (see
 * "No TODO leaves a run" in editorial/CLAUDE.md), so a marker on a live page
 * means a run broke that rule, and the build stops here instead of shipping it.
 *
 *   node scripts/check-content-todo.mjs            check every published surface
 *   node scripts/check-content-todo.mjs <file>...  check only these files
 *
 * Wired into `prebuild`, so `npm run build` (the publish step, and Vercel)
 * refuses to build over a marker. Also run as `npm run content:todo`.
 *
 * What counts as published content, and nothing else:
 *   - src/pages/resources/insights/*.astro, the template below the frontmatter
 *     fence (the fence holds code, and code comments are not content);
 *   - the string data in src/data/insights.ts (comment lines skipped);
 *   - src/content/help/*.md, the help center as synced;
 *   - editorial/output/*.md, the drafts every insight page is built from,
 *     appended blocks included, because the publish step reads them.
 * Code comments in application source are deliberately out of scope.
 */

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Uppercase markers only: "todo" in running prose is a word, "TODO" is a flag. */
export const MARKER = /\b(TODO|FIXME|TBD|TKTK)\b|lorem ipsum|\[(?:citation needed|placeholder|tk)\]/;

/** Returns [{ line, text }] for every line of `text` carrying a marker. */
export function findMarkers(text) {
  const hits = [];
  text.split(/\r?\n/).forEach((l, i) => {
    if (MARKER.test(l)) hits.push({ line: i + 1, text: l.trim().slice(0, 160) });
  });
  return hits;
}

const list = (dir, ext) =>
  existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(ext)).map((f) => path.join(dir, f)) : [];

/** The part of a file that is content, with line numbers kept true to the file. */
function contentOf(file, raw) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  if (rel.endsWith('.astro')) {
    // Blank out the frontmatter fence: it is code.
    const m = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
    return m ? m[0].replace(/[^\n]/g, '') + raw.slice(m[0].length) : raw;
  }
  if (rel === 'src/data/insights.ts') {
    // Keep string data, drop comment lines.
    return raw
      .split(/\r?\n/)
      .map((l) => (/^\s*(\/\/|\/\*|\*)/.test(l) ? '' : l))
      .join('\n');
  }
  return raw;
}

export function publishedFiles() {
  return [
    ...list(path.join(ROOT, 'src', 'pages', 'resources', 'insights'), '.astro'),
    path.join(ROOT, 'src', 'data', 'insights.ts'),
    ...list(path.join(ROOT, 'src', 'content', 'help'), '.md'),
    ...list(path.join(ROOT, 'editorial', 'output'), '.md'),
  ].filter((f) => existsSync(f));
}

export function check(files) {
  const failures = [];
  for (const file of files) {
    const raw = readFileSync(file, 'utf8');
    for (const hit of findMarkers(contentOf(path.resolve(file), raw))) {
      failures.push(`${path.relative(ROOT, path.resolve(file))}:${hit.line}  ${hit.text}`);
    }
  }
  return failures;
}

const norm = (p) => (process.platform === 'win32' ? path.resolve(p).toLowerCase() : path.resolve(p));
const isMain = !!process.argv[1] && norm(process.argv[1]) === norm(fileURLToPath(import.meta.url));
if (isMain) {
  const args = process.argv.slice(2);
  const files = args.length ? args : publishedFiles();
  const failures = check(files);
  if (failures.length) {
    console.error(`\n  Published content carries ${failures.length} TODO-style marker(s):\n`);
    for (const f of failures) console.error(`  ${f}`);
    console.error(
      '\n  Close each item in this run: research it to the source standard or cut the claim.' +
        '\n  Never ship a marker. See "No TODO leaves a run" in editorial/CLAUDE.md.\n',
    );
    process.exit(1);
  }
  console.log(`content:todo  ${files.length} published file(s), no TODO-style marker.`);
}
