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
//     1600 px wide.
// Files that no longer exist upstream are removed here too.
//
// Run: npm run help:sync [-- <path to hubstudio-site/help>]
// Default source: ../BearingBridgeIntelligence/hubstudio-site/help
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const src = resolve(process.argv[2] ?? join(root, '..', 'BearingBridgeIntelligence', 'hubstudio-site', 'help'));
const mdOut = join(root, 'src', 'content', 'help');
const imgOut = join(root, 'public', 'Images', 'help');

if (!existsSync(src)) {
  console.error(`✗ No help folder at ${src}`);
  process.exit(1);
}
mkdirSync(mdOut, { recursive: true });
mkdirSync(imgOut, { recursive: true });

const webp = (name) => `${basename(name, extname(name))}.webp`;

function rewrite(md) {
  return md
    // Captures: images/x.png -> /Images/help/x.webp (body and frontmatter).
    .replace(/(^|[("\s])images\/([\w.-]+\.(?:png|jpe?g|webp))/g, (_, pre, f) => `${pre}/Images/help/${webp(f)}`)
    // The index is the hub page.
    .replace(/\]\(index\.md(#[^)]*)?\)/g, (_, hash = '') => `](/help${hash})`)
    // Article to article.
    .replace(/\]\(([\w-]+)\.md(#[^)]*)?\)/g, (_, slug, hash = '') => `](/help/${slug}${hash})`);
}

const articles = readdirSync(src).filter((f) => f.endsWith('.md'));
for (const f of articles) writeFileSync(join(mdOut, f), rewrite(readFileSync(join(src, f), 'utf8')));
for (const f of readdirSync(mdOut)) if (!articles.includes(f)) rmSync(join(mdOut, f));

const imgSrc = join(src, 'images');
const images = existsSync(imgSrc) ? readdirSync(imgSrc).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)) : [];
for (const f of images) {
  await sharp(join(imgSrc, f))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(join(imgOut, webp(f)));
}
const kept = new Set(images.map(webp));
for (const f of readdirSync(imgOut)) if (!kept.has(f)) rmSync(join(imgOut, f));

console.log(`✓ ${articles.length} articles and ${images.length} captures from ${src}`);
