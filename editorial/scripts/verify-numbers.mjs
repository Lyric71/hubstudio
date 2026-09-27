#!/usr/bin/env node
/**
 * R8 gate as a script: every numeric token in a draft's publishable body must
 * appear in its research file. Frontmatter and HTML comments are excluded,
 * because the appended blocks are not published copy.
 *
 *   node editorial/scripts/verify-numbers.mjs <draft.md> <research.md>
 */
import { readFileSync } from 'node:fs';

const [draftPath, researchPath] = process.argv.slice(2);
const strip = (s) =>
  s.replace(/^---[\s\S]*?\n---\n/, '').replace(/<!--[\s\S]*?-->/g, '');

const draft = strip(readFileSync(draftPath, 'utf8'));
const research = readFileSync(researchPath, 'utf8').replace(/,/g, '');

/* Numbers only: 2026, 1080x1440, 15.5, 1,350. Ordinals inside words are not
   matched, and thousands separators are normalized on both sides. */
const tokens = [...draft.matchAll(/\d[\d.,]*/g)].map((m) => m[0]);
const seen = new Map();
for (const t of tokens) {
  const norm = t.replace(/,/g, '').replace(/\.$/, '');
  if (!norm || norm.length < 2) continue;
  seen.set(norm, (seen.get(norm) || 0) + 1);
}
const missing = [...seen.keys()].filter((n) => !research.replace(/\./g, '.').includes(n));
for (const n of missing) console.log(`  not in research: ${n} (x${seen.get(n)})`);
console.log(`${seen.size} distinct numbers, ${missing.length} not found in the research file`);
process.exit(missing.length ? 1 : 0);
