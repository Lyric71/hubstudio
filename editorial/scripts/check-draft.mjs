#!/usr/bin/env node
/**
 * Mechanical half of the definition of done in editorial/SPEC.md.
 *
 *   node editorial/scripts/check-draft.mjs editorial/output/<slug>.md
 *
 * Checks what a script can check: counts, banned characters, structure,
 * required blocks. It cannot check whether a competitor is alluded to, whether
 * a figure is real, or whether the cadence pass actually ran. Those stay human.
 *
 * Exit 0 when every hard check passes, 1 otherwise. Warnings do not fail.
 */

import { readFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node editorial/scripts/check-draft.mjs <draft.md>');
  process.exit(2);
}

const raw = readFileSync(file, 'utf8');
const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
if (!fm) {
  console.error('FAIL  no YAML frontmatter found');
  process.exit(1);
}
const [, frontmatter, afterFm] = fm;

const field = (name) => {
  const m = frontmatter.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'));
  return m ? m[1].trim() : null;
};

// Body = everything after frontmatter, minus HTML comments (the three appended
// blocks and the section labels), which never count toward the target.
const body = afterFm.replace(/<!--[\s\S]*?-->/g, '');
const comments = afterFm.match(/<!--[\s\S]*?-->/g) || [];

// Prose only: drop table rows and headings so we can report both numbers.
const prose = body
  .split(/\r?\n/)
  .filter((l) => !/^\s*\|/.test(l) && !/^\s*#/.test(l))
  .join('\n');

const words = (s) => (s.trim().match(/\S+/g) || []).length;

const results = [];
const hard = (ok, label, detail) => results.push({ ok, label, detail, hard: true });
const soft = (ok, label, detail) => results.push({ ok, label, detail, hard: false });

// ---- banned characters
// U+2014 is matched by codepoint so this file stays clean of the character.
const emdash = (body.match(/—/g) || []).length;
hard(emdash === 0, 'No em dash (U+2014)', `${emdash} found`);

const emdashAnywhere = (raw.match(/—/g) || []).length;
hard(emdashAnywhere === 0, 'No em dash in the whole file, comments included', `${emdashAnywhere} found`);

// No Han characters at all in a published English article, glosses included.
// The project rule in .claude/CLAUDE.md allows them only in zh-* locale content
// and makes no exception for terminology, and every article published before
// this system existed carries none. Romanize instead: "the explicit label,
// xianshi biaoshi". See "Project wins over runbook" in editorial/CLAUDE.md.
const han = [...raw.matchAll(/[一-鿿]+/g)];
hard(han.length === 0, 'No Han characters (romanize Chinese terms instead)',
  han.length ? `${han.length} found: ${[...new Set(han.map((m) => m[0]))].slice(0, 6).join(' ')}` : 'none');

// Full-width punctuation is banned in English copy by the same rule.
const fullWidth = [...raw.matchAll(/[　-〿！-～]/g)];
hard(fullWidth.length === 0, 'No full-width punctuation',
  fullWidth.length ? `${fullWidth.length} found` : 'none');

// ---- money
const dollars = [...body.matchAll(/\$[\d,]+/g)].map((m) => m[0]);
soft(dollars.length === 0, 'No dollar figure (each hit needs a category range and a date)', dollars.length ? dollars.join(', ') : 'none');

// ---- SEO ceilings
const title = field('title') || '';
const desc = field('description') || '';
const excerpt = field('excerpt') || '';
hard(title.length > 0 && title.length <= 52, 'Title <= 52 chars', `${title.length}`);
hard(desc.length > 0 && desc.length <= 152, 'Meta description <= 152 chars', `${desc.length}`);
hard(words(excerpt) > 0 && words(excerpt) <= 25, 'Excerpt <= 25 words', `${words(excerpt)}`);
hard(!!field('slug'), 'Slug present', field('slug') || 'missing');
hard(!!field('template'), 'Template present', field('template') || 'missing');

// ---- structure
const h1 = (body.match(/^# .+$/gm) || []).length;
hard(h1 === 1, 'Exactly one H1', `${h1}`);

const h2s = (body.match(/^## .+$/gm) || []).map((h) => h.replace(/^##\s*/, ''));
soft(h2s.length >= 5, 'At least five H2 sections', `${h2s.length}`);

const tables = (body.match(/^\s*\|\s*-{2,}/gm) || []).length;
hard(tables >= 2, 'At least two tables', `${tables}`);

const wideTable = body.split(/\r?\n/).some((l) => /^\s*\|/.test(l) && (l.match(/\|/g) || []).length - 1 > 5);
soft(!wideTable, 'No table wider than five columns', wideTable ? 'one table exceeds five columns' : 'ok');

// No summary or conclusion section.
const badHeading = h2s.find((h) => /^(in )?(summary|conclusion|final thoughts|wrapping up|to conclude|key takeaways)/i.test(h.trim()));
hard(!badHeading, 'No summary or conclusion section', badHeading || 'none');

// Ends on the CTA, before the appended comment blocks.
hard(/CTA:\s*\S/.test(body), 'CTA line present', (body.match(/CTA:\s*(.+)/) || [])[1] || 'missing');
const lastProse = body.trim().split(/\r?\n/).filter(Boolean).pop() || '';
hard(/^CTA:/.test(lastProse.trim()), 'File ends on the CTA', lastProse.slice(0, 60));

// ---- required appended blocks
const joined = comments.join('\n');
hard(/FEATURE IMAGE/.test(joined), 'Feature image block present');
hard(/<!--\s*SCHEMA/.test(joined), 'Schema block present');
hard(/<!--\s*ASSET BRIEF/.test(joined), 'Asset brief block present');
hard(/RESEARCH FILE:/.test(joined), 'Asset brief names the research file');

// Image path must follow this repo's convention, not the spec's.
const imgPath = joined.match(/public\/Images\/insight-[a-z0-9-]+\.webp/);
hard(!!imgPath, 'Hero image path follows public/Images/insight-<slug>.webp', imgPath ? imgPath[0] : 'missing or wrong');
if (imgPath && field('slug')) {
  hard(imgPath[0] === `public/Images/insight-${field('slug')}.webp`, 'Hero image path matches the slug', imgPath[0]);
}

// ---- links
const mdLinks = (body.match(/\[[^\]]+\]\([^)]+\)/g) || []).length;
hard(mdLinks === 0, 'No markdown links in body copy', `${mdLinks} found`);
const assetLinks = (joined.match(/->\s*\//g) || []).length;
hard(assetLinks >= 3, 'At least three internal links listed in the asset brief', `${assetLinks}`);

// ---- citations
// Group consecutive "> " lines into one blockquote. A citation spans several
// lines, so splitting per line would report each line as its own quote.
const quotes = [];
let cur = null;
for (const line of body.split(/\r?\n/)) {
  if (/^\s*>/.test(line)) {
    cur = cur === null ? line : `${cur}\n${line}`;
  } else if (cur !== null) {
    quotes.push(cur);
    cur = null;
  }
}
if (cur !== null) quotes.push(cur);
const unsourced = quotes.filter((q) => !/Source:/i.test(q));
hard(unsourced.length === 0, 'Every blockquote carries a Source line', unsourced.length ? `${unsourced.length} without one` : `${quotes.length} sourced`);
const undated = quotes.filter((q) => /Source:/i.test(q) && !/\b(19|20)\d{2}\b/.test(q));
hard(undated.length === 0, 'Every citation carries a year', undated.length ? `${undated.length} undated` : 'all dated');

// ---- decorative ordinals at the start of a list item or table row
const ordinal = body.split(/\r?\n/).find((l) => /^\s*[-*]\s*(0\d|\d)[.)]?\s*$/.test(l) || /^\s*\|\s*0\d\s*\|/.test(l));
hard(!ordinal, 'No decorative ordinal in a repeated block', ordinal || 'none');

// ---- counts, reported not gated
const bodyWords = words(body);
const proseWords = words(prose);

console.log(`\n  ${file}\n`);
let failed = 0;
for (const r of results) {
  const mark = r.ok ? 'pass' : r.hard ? 'FAIL' : 'warn';
  if (!r.ok && r.hard) failed++;
  console.log(`  ${mark.padEnd(5)} ${r.label}${r.detail ? `  (${r.detail})` : ''}`);
}

console.log(`\n  Body words, with tables : ${bodyWords}`);
console.log(`  Prose only             : ${proseWords}`);
console.log(`  Body chars             : ${body.replace(/\s+/g, ' ').trim().length}`);
console.log(`  Blockquote citations   : ${quotes.length}`);
console.log(`  H2 sections            : ${h2s.length}`);
console.log(`  Tables                 : ${tables}`);

console.log(`\n  Not checkable by script, still required:`);
console.log(`    no competitor named, described or alluded to`);
console.log(`    every figure traced back to the research file (R8)`);
console.log(`    iteration 7 ran as the cadence variant`);
console.log(`    hero image passed the AI-tells checklist\n`);

if (failed) {
  console.error(`  ${failed} hard check(s) failed.\n`);
  process.exit(1);
}
console.log('  All hard checks passed.\n');
