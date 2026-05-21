/**
 * Generates the default Open Graph / social share image at
 * public/og-default.png (1200x630, the format X, LinkedIn, WeChat, Slack
 * and Facebook expect). Re-run after a brand or tagline change:
 *
 *   node scripts/generate-og-image.mjs
 *
 * The hubStudio wordmark is composited from the existing cream-on-dark logo
 * so the brand lockup stays pixel-crisp regardless of the host's fonts.
 */
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="82%" cy="94%" r="62%">
      <stop offset="0%" stop-color="#e94e1b" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#e94e1b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0e1633"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g transform="translate(1004 78) scale(3.4)">
    <path d="M16 4 28 11 16 18 4 11Z" fill="#e94e1b"/>
    <path d="M4 11 16 18 16 31 4 24Z" fill="#1e3a8a"/>
    <path d="M28 11 16 18 16 31 28 24Z" fill="#0e1f4e"/>
  </g>
  <text x="82" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">A production house</text>
  <text x="82" y="404" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">built for what content</text>
  <text x="82" y="478" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">has <tspan font-family="Georgia, serif" font-style="italic" font-weight="400" fill="#e94e1b">become</tspan>.</text>
  <rect x="84" y="540" width="46" height="3" fill="#e94e1b"/>
  <text x="148" y="552" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="500" fill="#f0ede9">Real studio craft and deep AIGC expertise · hubstudio.ai</text>
</svg>`;

const base = sharp(Buffer.from(svg)).png();

const logoPath = join(root, 'public', 'logo', 'hubstudio-logo-dark.png');
const composite = [];
if (existsSync(logoPath)) {
  const logo = await sharp(logoPath).resize({ width: 300 }).png().toBuffer();
  composite.push({ input: logo, top: 80, left: 82 });
} else {
  console.warn('logo not found, OG image ships without the wordmark lockup');
}

await sharp(await base.toBuffer())
  .composite(composite)
  .png()
  .toFile(join(root, 'public', 'og-default.png'));

console.log('Wrote public/og-default.png (1200x630)');
