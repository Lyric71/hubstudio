/**
 * generate-llms-full.mjs: build public/llms-full.txt, a single plain-text dump
 * of every published insight and how-to guide for AI crawlers that consume the
 * llmstxt.org llms-full format.
 *
 * Wired to the `prebuild` npm script, so the file is regenerated before every
 * build. It is deliberately defensive: any failure logs a warning and exits 0,
 * so a content hiccup can never break the deploy (the site just ships without a
 * refreshed llms-full.txt).
 *
 * Needs Node >= 22.6 (run with --experimental-strip-types to import the .ts
 * data files directly).
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.hubstudio.ai';
const TARGET = join(ROOT, 'public', 'llms-full.txt');

/** Strip an Astro article page down to readable plain text. */
function pageToText(src) {
  let s = src.replace(/^---[\s\S]*?\n---\n/, '');
  const slot = s.match(
    /<(?:Article|Howto)Layout[^>]*>([\s\S]*)<\/(?:Article|Howto)Layout>/,
  );
  if (slot) s = slot[1];
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n');
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n');
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n- $1');
  s = s.replace(/<\/(?:p|blockquote|div)>/gi, '\n\n');
  s = s.replace(/<[^>]+>/g, '');
  s = s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rarr;/g, '->')
    .replace(/&nbsp;/g, ' ');
  return s
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function buildEntry(kind, item) {
  const dir = kind === 'insight' ? 'insights' : 'how-to';
  const pagePath = join(
    ROOT,
    'src',
    'pages',
    'resources',
    dir,
    `${item.slug}.astro`,
  );
  const url = `${SITE}/resources/${dir}/${item.slug}`;
  let body = '';
  try {
    body = pageToText(await readFile(pagePath, 'utf8'));
  } catch (err) {
    console.warn(`llms-full: could not read ${pagePath} (${err.message})`);
  }
  const label = kind === 'insight' ? 'Insight' : 'How-to guide';
  return [
    `# ${item.title}`,
    '',
    `Source: ${url}`,
    `Type: ${label} | Category: ${item.category} | Published: ${item.date} | Author: ${item.author}`,
    '',
    item.deck,
    '',
    body,
  ].join('\n');
}

async function main() {
  let insights = [];
  let howtos = [];
  try {
    ({ insights } = await import(
      pathToFileURL(join(ROOT, 'src/data/insights.ts')).href
    ));
    ({ howtos } = await import(
      pathToFileURL(join(ROOT, 'src/data/howtos.ts')).href
    ));
  } catch (err) {
    console.warn(`llms-full: could not import content data (${err.message}); skipping.`);
    return;
  }

  const header = [
    '# hubStudio: Full Content',
    '',
    '> Full text of every hubStudio insight essay and how-to guide, gathered',
    '> for AI assistants. hubStudio is a creative production house pairing real',
    `> studio craft with deep AIGC expertise. Canonical site: ${SITE}`,
    '',
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
    '---',
    '',
  ].join('\n');

  const parts = [];
  for (const item of insights) parts.push(await buildEntry('insight', item));
  for (const item of howtos) parts.push(await buildEntry('howto', item));

  const out = `${header}${parts.join('\n\n---\n\n')}\n`;
  await writeFile(TARGET, out, 'utf8');
  console.log(
    `llms-full: wrote ${TARGET} (${insights.length} insights, ${howtos.length} guides, ${out.length} chars).`,
  );
}

main()
  .catch((err) => console.warn(`llms-full: generation skipped (${err.message}).`))
  .finally(() => process.exit(0));
