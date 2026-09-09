#!/usr/bin/env node
/**
 * Logs one AI-answer observation to editorial/measurement/ai-answers.csv.
 *
 * Infrastructure item 7, the half no rank tracker can do. AI visibility has to
 * be measured by running the prompt and reading the answer, because "named"
 * and "cited" are different outcomes and only one of them is a link.
 *
 *   node editorial/scripts/log-ai-answer.mjs \
 *     --prompt 3 --surface chatgpt --named yes --cited no \
 *     --competitors "two unnamed studios, one platform" \
 *     --note "answer led with subscription pricing"
 *
 * Flags:
 *   --prompt      the prompt number from measurement/queries.md (1 to 25)
 *   --surface     chatgpt | ai-overviews | ai-mode | perplexity | claude
 *   --named       yes | no    hubStudio appears in the answer text
 *   --cited       yes | no    hubstudio.ai appears as a linked source
 *   --position    optional, where in the answer the mention sits (1 = first)
 *   --competitors optional, free text. NEVER record a company name here: this
 *                 file is committed, and the standing rule covers the log too.
 *                 Describe the shape of the answer instead.
 *   --note        optional, free text
 *   --date        optional, defaults to today
 *
 * --summary prints the current standing instead of logging.
 */

import { existsSync, mkdirSync, readFileSync, appendFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'measurement');
const FILE = path.join(DIR, 'ai-answers.csv');
const HEADER = 'date,prompt,surface,named,cited,position,competitors,note';
const SURFACES = ['chatgpt', 'ai-overviews', 'ai-mode', 'perplexity', 'claude'];

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith('--')) continue;
    const key = argv[i].slice(2);
    const val = argv[i + 1];
    if (val === undefined || val.startsWith('--')) { out[key] = true; continue; }
    out[key] = val;
    i++;
  }
  return out;
}

const cell = (v) => (/[",\n]/.test(v ?? '') ? `"${String(v).replace(/"/g, '""')}"` : (v ?? ''));

function parseLine(line) {
  const out = [];
  let cur = '', quoted = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (quoted) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') quoted = false;
      else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

mkdirSync(DIR, { recursive: true });
if (!existsSync(FILE)) writeFileSync(FILE, HEADER + '\n', 'utf8');

const args = parseArgs(process.argv.slice(2));

if (args.summary) {
  const lines = readFileSync(FILE, 'utf8').trim().split(/\r?\n/).slice(1).filter(Boolean);
  if (!lines.length) {
    console.log('\n  No observations logged yet.\n  Run the 25 prompts in editorial/measurement/queries.md across five surfaces.\n');
    process.exit(0);
  }
  const rows = lines.map((l) => {
    const c = parseLine(l);
    return { date: c[0], prompt: c[1], surface: c[2], named: c[3] === 'yes', cited: c[4] === 'yes' };
  });
  const bySurface = {};
  for (const r of rows) {
    bySurface[r.surface] ??= { runs: 0, named: 0, cited: 0 };
    bySurface[r.surface].runs++;
    if (r.named) bySurface[r.surface].named++;
    if (r.cited) bySurface[r.surface].cited++;
  }
  console.log(`\n  AI-answer visibility, ${rows.length} observations\n`);
  console.log(`  ${'surface'.padEnd(15)} ${'runs'.padStart(5)} ${'named'.padStart(6)} ${'cited'.padStart(6)}`);
  for (const [s, v] of Object.entries(bySurface)) {
    console.log(`  ${s.padEnd(15)} ${String(v.runs).padStart(5)} ${String(v.named).padStart(6)} ${String(v.cited).padStart(6)}`);
  }
  const named = rows.filter((r) => r.named).length;
  const cited = rows.filter((r) => r.cited).length;
  console.log(`\n  Named in ${named} of ${rows.length}. Cited in ${cited} of ${rows.length}.`);
  console.log(`  Named without cited is a real outcome, not a miss: it moves deals without a link.\n`);
  process.exit(0);
}

const errors = [];
const prompt = Number(args.prompt);
if (!Number.isInteger(prompt) || prompt < 1 || prompt > 25) errors.push('--prompt must be 1 to 25');
if (!SURFACES.includes(args.surface)) errors.push(`--surface must be one of: ${SURFACES.join(', ')}`);
if (!['yes', 'no'].includes(args.named)) errors.push('--named must be yes or no');
if (!['yes', 'no'].includes(args.cited)) errors.push('--cited must be yes or no');
if (args.cited === 'yes' && args.named === 'no') {
  // Possible, but rare enough that it is usually a logging slip.
  console.error('  Note: cited without named is unusual. Confirm the answer really links hubstudio.ai without naming hubStudio.');
}

if (errors.length) {
  console.error('\n  ' + errors.join('\n  '));
  console.error('\n  Usage: node editorial/scripts/log-ai-answer.mjs --prompt 3 --surface chatgpt --named yes --cited no');
  console.error('         node editorial/scripts/log-ai-answer.mjs --summary\n');
  process.exit(2);
}

const date = args.date || new Date().toISOString().slice(0, 10);
const row = [date, prompt, args.surface, args.named, args.cited, args.position || '', args.competitors || '', args.note || '']
  .map(cell)
  .join(',');

appendFileSync(FILE, row + '\n', 'utf8');
console.log(`  logged: prompt ${prompt} on ${args.surface}, named ${args.named}, cited ${args.cited}`);
