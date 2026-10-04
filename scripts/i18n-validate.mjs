/**
 * Validate one dictionary file against the house rules, for translators.
 *
 *   node --experimental-strip-types scripts/i18n-validate.mjs <fr|zh> <dict.json> [<context.json>]
 *
 * With a context file (written by `npm run i18n -- extract --context`), also
 * checks the dictionary holds exactly the page's own (non-shared) sentences.
 */
import { readFileSync } from 'node:fs';
import { problems } from './i18n-rules.mjs';

const [locale, file, context] = process.argv.slice(2);
const dict = JSON.parse(readFileSync(file, 'utf8'));
const out = [];
if (context) {
  const ctx = JSON.parse(readFileSync(context, 'utf8'));
  const want = new Set(ctx.units.filter((u) => !u.common).map((u) => u.key));
  for (const k of want) if (!(k in dict)) out.push(`missing key: ${k.slice(0, 100)}`);
  for (const k of Object.keys(dict)) if (!want.has(k)) out.push(`key not on the page: ${k.slice(0, 100)}`);
}
for (const [k, v] of Object.entries(dict)) {
  if (!v) out.push(`empty: ${k.slice(0, 100)}`);
  else for (const p of problems(k, v, locale)) out.push(`${p}\n    EN ${k.slice(0, 140)}\n    ${locale.toUpperCase()} ${v.slice(0, 140)}`);
}
if (out.length) {
  console.log(out.join('\n'));
  console.error(`\n✗ ${out.length} problem(s)`);
  process.exit(1);
}
console.log(`✓ ${Object.keys(dict).length} entries clean`);
