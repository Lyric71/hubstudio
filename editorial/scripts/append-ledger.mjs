#!/usr/bin/env node
/**
 * Appends the "Ledger rows to append" section of a research file to
 * editorial/sources/verified-sources.md, under one dated heading per brief.
 *
 * Research agents run in parallel, so they write their new ledger rows into
 * their own research file instead of editing the ledger. This script is the
 * single writer. It refuses to append the same brief twice.
 *
 *   node editorial/scripts/append-ledger.mjs --brief 39 --slug turnaround-days-not-weeks
 */
import { readFileSync, appendFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const EDITORIAL = path.resolve(HERE, '..');
const LEDGER = path.join(EDITORIAL, 'sources', 'verified-sources.md');

const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
};
const brief = arg('brief');
const slug = arg('slug');
if (!brief || !slug) {
  console.error('usage: node editorial/scripts/append-ledger.mjs --brief <id> --slug <slug>');
  process.exit(2);
}

const research = readFileSync(path.join(EDITORIAL, 'research', `${slug}.md`), 'utf8');
const lines = research.split(/\r?\n/);
const start = lines.findIndex((l) => /^##\s+Ledger rows to append/i.test(l));
if (start === -1) {
  console.error(`${slug}: no "## Ledger rows to append" section`);
  process.exit(1);
}
let end = lines.findIndex((l, i) => i > start && /^##\s/.test(l));
if (end === -1) end = lines.length;

const body = lines.slice(start + 1, end).join('\n').trim();
const marker = `(ledger rows from brief ${brief}, ${slug})`;
if (readFileSync(LEDGER, 'utf8').includes(marker)) {
  console.log(`brief ${brief}: already in the ledger, nothing appended`);
  process.exit(0);
}
// U+2014 named by codepoint so this file stays clean of the character itself.
if (body.includes('—')) {
  console.error(`${slug}: ledger rows contain an em dash`);
  process.exit(1);
}

appendFileSync(
  LEDGER,
  `\n\n## Added 2026-09-10 ${marker}\n\nCopied from the research file's own ledger section, which carries the full claims table and reasons.\n\n${body}\n`,
  'utf8',
);
console.log(`brief ${brief}: ${body.split('\n').length} lines appended to the ledger`);
