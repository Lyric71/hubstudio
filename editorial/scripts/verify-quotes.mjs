import { readFileSync } from 'node:fs';

/* Every blockquote in a draft must appear verbatim, said text and Source line
   both, in the cleared evidence of its research file. Whitespace and blockquote
   prefixes are normalized on both sides. */
const [draftPath, researchPath] = process.argv.slice(2);
const norm = (s) => s.replace(/^\s*>\s?/gm, '').replace(/\s+/g, ' ').trim();

const draft = readFileSync(draftPath, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
const research = norm(readFileSync(researchPath, 'utf8'));

const blocks = [];
let cur = [];
for (const line of draft.split(/\r?\n/)) {
  if (/^\s*>/.test(line)) cur.push(line);
  else if (cur.length) { blocks.push(cur.join('\n')); cur = []; }
}
if (cur.length) blocks.push(cur.join('\n'));

let misses = 0;
for (const b of blocks) {
  const t = norm(b);
  const at = t.search(/\bSource:/);
  const said = at === -1 ? t : t.slice(0, at).trim();
  const src = at === -1 ? '' : t.slice(at).trim();
  const saidOk = research.includes(said);
  const srcOk = !src || research.includes(src);
  if (!saidOk || !srcOk) {
    misses++;
    console.log(`MISS (${!saidOk ? 'said' : ''}${!saidOk && !srcOk ? '+' : ''}${!srcOk ? 'source' : ''}): ${said.slice(0, 90)}`);
  }
}
console.log(`${blocks.length} blockquotes, ${misses} not verbatim in research`);
process.exit(misses ? 1 : 0);
