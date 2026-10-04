// Copy the hubStudio help center into this site.
//
// The articles are written next to the app's code, in the BearingBridge
// repository (hubstudio-site/help/*.md, with their captures in
// hubstudio-site/help/images/). This script brings them here so /help can be
// built without that repository:
//   - the Markdown goes to src/content/help/, its links rewritten for the
//     site (create-an-image.md#options -> /help/create-an-image#options,
//     index.md -> /help, images/x.png -> /Images/help/x.webp);
//   - every capture is re-encoded to WebP in public/Images/help/, at most
//     1600 px wide. A French or Chinese capture (images/x.fr.png,
//     images/x.zh.png, from scripts/captures/help.mjs) becomes x.fr.webp or
//     x.zh.webp beside x.webp, and is listed in src/i18n/localized-images.json
//     so the /fr and /zh help pages show it (src/middleware.ts).
// Files that no longer exist upstream are removed here too.
//
// Run: npm run help:sync [-- <path to hubstudio-site/help>] [--images-only]
// Default source: ../BearingBridgeIntelligence/hubstudio-site/help
// --images-only syncs the captures alone and leaves src/content/help as it is.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const imagesOnly = args.includes('--images-only');
const srcArg = args.find((a) => !a.startsWith('--'));
const src = resolve(srcArg ?? join(root, '..', 'BearingBridgeIntelligence', 'hubstudio-site', 'help'));
const mdOut = join(root, 'src', 'content', 'help');
const imgOut = join(root, 'public', 'Images', 'help');
const listFile = join(root, 'src', 'i18n', 'localized-images.json');
const IMG_URL = '/Images/help/';

if (!existsSync(src)) {
  console.error(`✗ No help folder at ${src}`);
  process.exit(1);
}
mkdirSync(mdOut, { recursive: true });
mkdirSync(imgOut, { recursive: true });

// x.png -> x.webp, x.fr.png -> x.fr.webp.
const webp = (name) => `${basename(name, extname(name))}.webp`;

function rewrite(md) {
  return md
    // Captures: images/x.png -> /Images/help/x.webp (body and frontmatter).
    .replace(/(^|[("\s])images\/([\w.-]+\.(?:png|jpe?g|webp))/g, (_, pre, f) => `${pre}${IMG_URL}${webp(f)}`)
    // The index is the hub page.
    .replace(/\]\(index\.md(#[^)]*)?\)/g, (_, hash = '') => `](/help${hash})`)
    // Article to article.
    .replace(/\]\(([\w-]+)\.md(#[^)]*)?\)/g, (_, slug, hash = '') => `](/help/${slug}${hash})`);
}

let articles = [];
if (!imagesOnly) {
  articles = readdirSync(src).filter((f) => f.endsWith('.md'));
  for (const f of articles) writeFileSync(join(mdOut, f), rewrite(readFileSync(join(src, f), 'utf8')));
  for (const f of readdirSync(mdOut)) if (!articles.includes(f)) rmSync(join(mdOut, f));
}

const imgSrc = join(src, 'images');
const images = existsSync(imgSrc) ? readdirSync(imgSrc).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)) : [];
// A capture is encoded again only when its source is newer than the WebP
// here: an untouched capture keeps its bytes (no diff from a sync).
for (const f of images) {
  const out = join(imgOut, webp(f));
  if (existsSync(out) && statSync(out).mtimeMs >= statSync(join(imgSrc, f)).mtimeMs) continue;
  await sharp(join(imgSrc, f))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(join(imgOut, webp(f)));
}
const kept = new Set(images.map(webp));
for (const f of readdirSync(imgOut)) if (!kept.has(f)) rmSync(join(imgOut, f));

// The localized captures the middleware may serve: x.fr.webp / x.zh.webp
// whose English x.webp is here too. Entries of other folders stay.
const localized = [...kept]
  .filter((f) => /\.(fr|zh)\.webp$/.test(f) && kept.has(f.replace(/\.(fr|zh)\.webp$/, '.webp')))
  .map((f) => `${IMG_URL}${f}`);
const listed = existsSync(listFile) ? JSON.parse(readFileSync(listFile, 'utf8')) : [];
const next = [...listed.filter((u) => !u.startsWith(IMG_URL)), ...localized].sort();
writeFileSync(listFile, `${JSON.stringify(next, null, 2)}\n`);

const counts = { fr: localized.filter((u) => u.endsWith('.fr.webp')).length, zh: localized.filter((u) => u.endsWith('.zh.webp')).length };
console.log(
  `✓ ${imagesOnly ? 'images only, articles left as they are; ' : `${articles.length} articles and `}` +
    `${images.length} captures from ${src} (French ${counts.fr}, Chinese ${counts.zh})`,
);

// A synced article is a page of this site: it ships in French and Chinese in
// the same commit (src/i18n/TRANSLATING.md). Name what is still to do.
if (!imagesOnly) {
  const routes = readFileSync(join(root, 'src', 'i18n', 'routes.ts'), 'utf8');
  const start = routes.indexOf('const HELP');
  const help = start < 0 ? '' : routes.slice(start, routes.indexOf('};', start));
  const noRoute = articles
    .map((f) => f.replace(/\.md$/, ''))
    .filter((slug) => slug !== 'index' && !new RegExp(`(?:'${slug}'|(?<![\w-])${slug}(?![\w-]))\s*:`).test(help));
  if (noRoute.length) console.log(`✗ no French address yet in the HELP map of src/i18n/routes.ts: ${noRoute.join(', ')}`);
  console.log(
    'Next, before the commit: npm run i18n:local -- extract --context .i18n-work/ctx, translate what\n' +
      'npm run i18n:tx -- pending fr / zh lists (three passes), then npm run i18n:local -- check.',
  );
}
