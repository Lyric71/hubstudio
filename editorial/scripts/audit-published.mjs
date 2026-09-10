#!/usr/bin/env node
/**
 * Audits every published insight against the things the draft checker cannot
 * see, because they only exist after conversion: the article page, the
 * insights.ts entry, and the relationship between them.
 *
 *   node editorial/scripts/audit-published.mjs
 *
 * It exists because a draft can pass check-draft.mjs and still publish wrong.
 * Two real defects it caught: an article whose nine attributions rendered as
 * display serif inside the quote instead of as source lines, because that
 * draft ran "Source:" on mid-sentence rather than starting a line with it;
 * and a silent no-op in the publisher that wrote a page with no matching
 * insights.ts entry behind it.
 *
 * Exits non-zero when it finds something, so it can gate a commit.
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const src = readFileSync('src/data/insights.ts', 'utf8');
const entries = [...src.matchAll(/\{\s*slug: '([^']+)',[\s\S]*?\n  \},/g)].map((m) => ({ slug: m[1], block: m[0] }));

function field(block, key) {
  const re = new RegExp(key + String.raw`:\s*\n?\s*'((?:[^'\\]|\\.)*)'`);
  const m = block.match(re);
  return m ? m[1] : undefined;
}

let issues = 0;
const say = (s, m) => { console.log(`  ISSUE  ${s}: ${m}`); issues++; };

console.log(`insights.ts entries: ${entries.length}`);
const seen = new Set();

for (const { slug, block } of entries) {
  if (seen.has(slug)) say(slug, 'duplicate slug in insights.ts');
  seen.add(slug);

  const img = field(block, 'image');
  if (!img) say(slug, 'no image field');
  else if (!existsSync(path.join('public', img.replace(/^\//, '')))) say(slug, `hero missing on disk: ${img}`);

  const alt = field(block, 'imageAlt');
  if (!alt || alt.length < 40) say(slug, `alt text too short or missing (${alt ? alt.length : 0} chars)`);

  const mt = field(block, 'metaTitle');
  if (mt && mt.length > 60) say(slug, `metaTitle ${mt.length} chars, over 60`);
  const md = field(block, 'metaDescription');
  if (md && md.length > 160) say(slug, `metaDescription ${md.length} chars, over 160`);

  const page = `src/pages/resources/insights/${slug}.astro`;
  if (!existsSync(page)) { say(slug, 'no article page'); continue; }

  const html = readFileSync(page, 'utf8');
  const slugProp = html.match(/slug="([^"]+)"/);
  if (!slugProp || slugProp[1] !== slug) say(slug, 'page slug prop mismatch');
  if (!/class="standfirst"/.test(html)) say(slug, 'no standfirst paragraph');
  if (/—/.test(html)) say(slug, 'em dash in page');
  if (/[一-鿿]/.test(html)) say(slug, 'Han characters in page');
  if (/^\s*CTA:/m.test(html)) say(slug, 'raw CTA line leaked into body');
  if (/<!--/.test(html)) say(slug, 'HTML comment leaked into page');
  if (/\*\*/.test(html)) say(slug, 'unconverted markdown bold');
  if (/^\s*\|/m.test(html)) say(slug, 'unconverted markdown table');

  const ev = (html.match(/<blockquote class="evidence">/g) || []).length;
  const srcs = (html.match(/<p class="source">/g) || []).length;
  if (ev && srcs < ev) say(slug, `${ev} evidence quotes but only ${srcs} source lines`);

  for (const m of html.matchAll(/href="(\/[^"#]*)"/g)) {
    const u = m[1];
    if (existsSync(`src/pages${u}.astro`) || existsSync(`src/pages${u}/index.astro`)) continue;
    // A parent directory holding a [slug].astro serves this path dynamically.
    const parent = `src/pages${u.slice(0, u.lastIndexOf('/'))}`;
    const dynamic = existsSync(parent) &&
      readdirSync(parent).some((f) => /^\[.+\]\.astro$/.test(f));
    if (!dynamic) say(slug, `dead internal link ${u}`);
  }
}

/* index.astro is the listing page, not an article. */
for (const f of readdirSync('src/pages/resources/insights')) {
  if (!f.endsWith('.astro') || f === 'index.astro') continue;
  const s = f.replace(/\.astro$/, '');
  if (!seen.has(s)) say(s, 'page exists but has no insights.ts entry');
}

/* A future publish date reads as a mistake to anyone looking at the page. The
   calendar dates in the briefs are planned slots, not the day work shipped. */
const today = new Date().toISOString().slice(0, 10);
for (const { slug, block } of entries) {
  const d = field(block, 'dateISO');
  if (d && d > today) say(slug, `publish date ${d} is in the future`);
}

console.log(issues ? `\n${issues} issue(s) found` : '\nNo issues.');
process.exit(issues ? 1 : 0);
