#!/usr/bin/env node
/**
 * Updates one row in editorial/schedule.csv. The daily runner calls this
 * rather than rewriting the CSV by hand, so quoting and column order stay
 * correct and a half-finished edit cannot corrupt the file.
 *
 *   node editorial/scripts/set-status.mjs --brief 17 --status image_ready \
 *        [--researched 2026-09-09] [--drafted 2026-09-09] \
 *        [--quality 2026-09-09] [--image 2026-09-09] [--published 2026-09-09] \
 *        [--reviewed "name"] [--note "text"] [--append-note "text"]
 *
 * --brief takes the brief_id. --slug is accepted as an alternative.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCHEDULE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'schedule.csv');

const VALID = ['not_started', 'researched', 'drafted', 'quality_passed', 'image_ready', 'published', 'blocked'];

const FLAG_TO_COLUMN = {
  status: 'status',
  researched: 'researched_on',
  drafted: 'drafted_on',
  quality: 'quality_passed_on',
  image: 'image_generated_on',
  published: 'published_on',
  reviewed: 'reviewed_by',
  note: 'notes',
};

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

function parseLine(line) {
  const out = [];
  let cur = '';
  let quoted = false;
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

const cell = (v) => (/[",\n]/.test(v ?? '') ? `"${String(v).replace(/"/g, '""')}"` : (v ?? ''));

const args = parseArgs(process.argv.slice(2));
if (!args.brief && !args.slug) {
  console.error('Usage: node editorial/scripts/set-status.mjs --brief <id> --status <status> [dates...]');
  process.exit(2);
}
if (args.status && !VALID.includes(args.status)) {
  console.error(`Invalid status "${args.status}". One of: ${VALID.join(', ')}`);
  process.exit(2);
}

const lines = readFileSync(SCHEDULE, 'utf8').split(/\r?\n/);
const header = parseLine(lines[0]);
const idx = Object.fromEntries(header.map((h, i) => [h, i]));

let found = 0;
const out = [lines[0]];
for (const line of lines.slice(1)) {
  if (!line.trim()) continue;
  const cells = parseLine(line);
  const match = args.brief
    ? cells[idx.brief_id] === String(args.brief)
    : cells[idx.output_file] === `output/${args.slug}.md`;
  if (!match) { out.push(line); continue; }
  found++;
  for (const [flag, col] of Object.entries(FLAG_TO_COLUMN)) {
    if (args[flag] !== undefined && args[flag] !== true) cells[idx[col]] = args[flag];
  }
  if (args['append-note']) {
    const prior = cells[idx.notes];
    cells[idx.notes] = prior ? `${prior} ${args['append-note']}` : args['append-note'];
  }
  out.push(header.map((_, i) => cell(cells[i])).join(','));
  console.log(`${cells[idx.brief_id]}  ${cells[idx.working_h1].slice(0, 55)}`);
  console.log(`  status ${cells[idx.status]}  researched ${cells[idx.researched_on] || '-'}  drafted ${cells[idx.drafted_on] || '-'}  quality ${cells[idx.quality_passed_on] || '-'}  image ${cells[idx.image_generated_on] || '-'}  published ${cells[idx.published_on] || '-'}`);
}

if (!found) {
  console.error(`No row matched ${args.brief ? `brief ${args.brief}` : `slug ${args.slug}`}.`);
  process.exit(1);
}
writeFileSync(SCHEDULE, out.join('\n') + '\n', 'utf8');
