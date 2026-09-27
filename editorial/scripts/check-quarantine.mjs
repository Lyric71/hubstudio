#!/usr/bin/env node
/**
 * Competitor gate: every domain a research file quarantines is turned into its
 * name stem, and the draft's publishable body is searched for that stem.
 *
 *   node editorial/scripts/check-quarantine.mjs <draft.md> <research.md>
 */
import { readFileSync } from 'node:fs';

const [draftPath, researchPath] = process.argv.slice(2);
/* Only the quarantine and do-not-publish sections: cited sources elsewhere in
   the research file are named on purpose. */
const researchLines = readFileSync(researchPath, 'utf8').split(/\r?\n/);
const blocked = (title) => /quarantin|do not publish/i.test(title);
let parent = false;
let inBlock = false;
const research = researchLines
  .filter((line) => {
    const h = line.match(/^(#{2,4})\s+(.*)/);
    if (h && h[1] === '##') inBlock = parent = blocked(h[2]);
    else if (h) inBlock = parent || blocked(h[2]);
    return inBlock;
  })
  .join('\n');
const body = readFileSync(draftPath, 'utf8')
  .replace(/^---[\s\S]*?\n---\n/, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .toLowerCase();

/* Platforms, regulators and public bodies the pages may name. */
const allowed = new Set([
  'amazon', 'tmall', 'taobao', 'jd', 'douyin', 'tiktok', 'meta', 'facebook', 'instagram',
  'wechat', 'weibo', 'xiaohongshu', 'rednote', 'youtube', 'google', 'openai', 'gov', 'cac',
  'samr', 'nmpa', 'iso', 'arxiv', 'wikipedia', 'news', 'xinhuanet', 'people', 'europa',
  'eur-lex', 'acquisition', 'whitehouse', 'copyright', 'ftc', 'asa', 'ipa', 'isba', 'wfanet',
  'ana', 'aicp', 'bls', 'nist', 'w3', 'itu', 'ebu', 'bsigroup', 'iab', 'hubstudio', 'alibaba',
  'kuaishou', 'baidu', 'bilibili', 'zhihu', 'sohu', 'qq', 'tencent', 'bytedance', 'oceanengine',
  'microsoft', 'apple', 'nvidia', 'adobe', 'box',
]);

const domains = [...research.matchAll(/\b([a-z0-9-]+)\.(?:com|co|io|ai|net|org|cn|studio|app|so|co\.uk|com\.cn|me|tv|agency)\b/gi)]
  .map((m) => m[1].toLowerCase())
  .filter((s) => s.length > 3 && !allowed.has(s));
/* Stems that are ordinary English words or the page's own subject (salary.com,
   copy.ai) only count when written with a domain ending. OmniHuman-1 is a
   model name; its quarantined domain is a look-alike site. */
const commonWords = new Set([
  'salary', 'copy', 'simple', 'sync', 'color', 'arena', 'omnihuman-1',
]);
const hits = [...new Set(domains)].filter((stem) => {
  const name = stem.replace(/[-]/g, '[- ]?');
  const pattern = commonWords.has(stem) ? `\\b${name}\\.[a-z]{2,}\\b` : `\\b${name}\\b`;
  return new RegExp(pattern).test(body);
});
for (const h of hits) console.log(`  quarantined name on page: ${h}`);
console.log(`${new Set(domains).size} quarantined stems checked, ${hits.length} found on the page`);
process.exit(hits.length ? 1 : 0);
