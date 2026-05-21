/**
 * One-off: converts the oversized PNGs flagged in the SEO audit to WebP and
 * deletes unused raster assets. Heroes are capped at 2000px wide, inline
 * images at 1600px, per the image-optimization rule in CLAUDE.md.
 *
 *   node scripts/convert-audit-images.mjs
 */
import sharp from 'sharp';
import { existsSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = (p) => join(root, 'public', p);

const convert = [
  { from: 'Images/pricing-hero.png', to: 'Images/pricing-hero.webp', max: 2000 },
  { from: 'Images/aigc-glossary-hero.png', to: 'Images/aigc-glossary-hero.webp', max: 2000 },
  { from: 'Images/pricing-asset.png', to: 'Images/pricing-asset.webp', max: 1600 },
  { from: 'Images/pricing-project.png', to: 'Images/pricing-project.webp', max: 1600 },
  { from: 'Images/pricing-subscription.png', to: 'Images/pricing-subscription.webp', max: 1600 },
];

for (const { from, to, max } of convert) {
  const src = pub(from);
  if (!existsSync(src)) {
    console.warn('skip (missing):', from);
    continue;
  }
  const meta = await sharp(src).metadata();
  let pipe = sharp(src);
  if (meta.width && meta.width > max) pipe = pipe.resize({ width: max });
  await pipe.webp({ quality: 80 }).toFile(pub(to));
  unlinkSync(src);
  const out = await sharp(pub(to)).metadata();
  console.log(`converted ${from} -> ${to} (${out.width}x${out.height})`);
}

// Unused raster assets: not referenced anywhere in src/.
const remove = [
  'Images/pricing-project-tall.png',
  'Images/pricing-asset-tall.png',
  'AgencyLogos/beyondbridge.png',
  'AgencyLogos/Logo-ChinaWebFoundry-light.png',
];
for (const p of remove) {
  const f = pub(p);
  if (existsSync(f)) {
    unlinkSync(f);
    console.log('removed (unused):', p);
  }
}
