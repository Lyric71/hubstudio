/**
 * The captures of the app on this site's pages (public/Images/app, listed in
 * src/data/app-shots.ts), in French and Chinese: x.fr.webp and x.zh.webp
 * beside x.webp, same size, same crop, same encoding as the English file.
 *
 *   node scripts/captures/app.mjs [fr|zh ...] [--only <name>,<name>]
 *
 * Three sources, as for the English set:
 *   - a crop of the localized help capture (scripts/captures/help.mjs, run
 *     first): the editors, Validation;
 *   - the help shot taken again for the site, 1424 px wide so the app's main
 *     column is 1128 px as it was for the English crops, with every price and
 *     credit line hidden (the site never publishes rates; the English files
 *     painted those lines over with the background);
 *   - a shot of its own at 2x (Explore with the menu, the Image anonymizer
 *     with a picture read, the Shorts autopilot card), cropped and brought
 *     back to 1x.
 * Then src/i18n/localized-images.json lists every localized file found.
 *
 * Not taken: menu (no page uses it).
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { HELP_IMAGES, SITE_ROOT, capture, click, listLocalized, run, sharp } from './lib.mjs';
import { shots as helpShots } from './help.mjs';

const PUBLIC = join(SITE_ROOT, 'public', 'Images', 'app');
const help = Object.fromEntries(helpShots.map((s) => [s.name, s]));

/** Prices and credit lines out of the picture: hidden, and cut from the engine menus. */
const NO_PRICES = {
  css: '.cn-facts, .ex-price, [data-ig-priceline], [data-sc-visual-price], .sa-cost { visibility: hidden !important; }',
  steps: async (page) => {
    await page.evaluate(() => {
      for (const o of document.querySelectorAll('select option')) {
        // The amount with its sign before ($1.20) or after it (1,20 $, French).
        if (/[$¥€]\s?\d|\d\s?[$¥€]/.test(o.text)) o.text = o.text.replace(/\s*·\s*[^·]*(?:[$¥€]\s?\d|\d\s?[$¥€]).*$/, '');
      }
    });
  },
};

/** The app's main column as wide as for the English crops (1128 px). */
const NARROW = 1424;
const MAIN = (top, bottom) => [260, top, 1412, bottom];

const shots = [
  // A crop of a help shot taken again at 1424 px, prices hidden.
  { name: 'explore', from: 'explore-gallery', width: NARROW, crop: MAIN(76, 594) },
  { name: 'imageStudio', from: 'create-an-image-studio', width: NARROW, crop: MAIN(76, 520) },
  { name: 'videoStudio', from: 'create-a-video-studio', width: NARROW, crop: MAIN(76, 828) },
  { name: 'history', from: 'history-page', width: NARROW, crop: MAIN(76, 386) },
  { name: 'library', from: 'assets-library-page', width: NARROW, crop: MAIN(76, 996) },
  { name: 'libraryActions', from: 'assets-library-actions', width: NARROW },
  { name: 'linkedin', from: 'linkedin-brief', width: NARROW, crop: MAIN(76, 900) },
  { name: 'instagram', from: 'instagram-picture', width: NARROW, crop: MAIN(76, 858) },
  { name: 'facebook', from: 'facebook-brief', width: NARROW, crop: MAIN(76, 900) },
  { name: 'tiktok', from: 'tiktok-brief', width: NARROW, crop: MAIN(76, 846) },
  { name: 'tiktokVideo', from: 'tiktok-video', width: NARROW, crop: MAIN(76, 874) },
  { name: 'x', from: 'x-brief', width: NARROW, crop: MAIN(76, 852) },
  { name: 'xKnobs', from: 'x-knobs', width: NARROW },
  { name: 'validationSend', from: 'validation-send-dialog' },
  { name: 'skillsCatalog', from: 'skills-catalog', width: NARROW, crop: MAIN(76, 900) },
  { name: 'mySkills', from: 'skills-my-skills', width: NARROW, crop: MAIN(76, 852) },
  { name: 'teamClients', from: 'your-team-clients', width: NARROW },
  { name: 'teamInvite', from: 'your-team-invite', width: NARROW },
  { name: 'connections', from: 'account-and-sign-in-my-connections', width: NARROW, crop: MAIN(76, 730) },

  // The localized help capture itself, cropped or whole.
  { name: 'validation', file: 'validation-page', crop: [0, 68, 1440, 452] },
  { name: 'clientSpace', file: 'client-space-home', crop: [0, 68, 1440, 386] },
  { name: 'editorEffects', file: 'image-editor-effects' },
  { name: 'editorCrop', file: 'image-editor-crop' },
  { name: 'editorDraw', file: 'image-editor-draw' },
  { name: 'editorSave', file: 'image-editor-save' },
  { name: 'editorSocial', file: 'image-editor-social', quality: 86 },
  { name: 'videoFormat', file: 'video-editor-format', quality: 86 },
  { name: 'videoSocial', file: 'video-editor-social', quality: 86 },
  { name: 'videoSave', file: 'video-editor-save', quality: 86 },

  // Shots of their own, at 2x, brought back to 1x.
  { name: 'exploreApp', own: { route: '/explore', dpr: 2, steps: (p) => p.waitForTimeout(2500) }, crop: [0, 65, 1440, 570], quality: 86 },
  {
    name: 'anonymizer',
    own: { route: '/files/tools/image-anonymizer', dpr: 2, upload: { input: '[data-img-input]', file: 'glass-skin-campaign.jpg' } },
    crop: [272, 85, 1424, 785],
    quality: 86,
  },
  {
    name: 'shortsSettings',
    own: {
      ...help['shorts-autopilot-settings'],
      dpr: 2,
      css: '.sa-cost { display: none !important; }',
    },
    crop: [272, 85, 1424, 685],
    quality: 86,
  },
].map((s) => ({ ...s, out: (lang) => join(PUBLIC, lang === 'en' ? `${s.name}.webp` : `${s.name}.${lang}.webp`) }));

const enSize = async (name) => {
  const m = await sharp(join(PUBLIC, `${name}.webp`)).metadata();
  return { width: m.width, height: m.height };
};

/** Bring a capture to the English file's exact size: cut what is over, fill what is short with the edge color. */
async function toSize(buf, size) {
  const m = await sharp(buf).metadata();
  let img = sharp(buf);
  if (m.width > size.width || m.height > size.height) {
    img = sharp(await img.extract({ left: 0, top: 0, width: Math.min(m.width, size.width), height: Math.min(m.height, size.height) }).toBuffer());
  }
  const n = await img.metadata();
  if (n.width < size.width || n.height < size.height) {
    const { data } = await sharp(await img.toBuffer()).raw().toBuffer({ resolveWithObject: true });
    const ch = n.channels;
    const background = { r: data[0], g: data[1], b: data[2], alpha: ch === 4 ? data[3] / 255 : 1 };
    img = sharp(await img.extend({ right: size.width - n.width, bottom: size.height - n.height, background }).toBuffer());
  }
  if (m.width !== size.width || m.height !== size.height) console.log(`  fitted ${m.width}x${m.height} to ${size.width}x${size.height}`);
  return img.toBuffer();
}

async function make(browser, shot, lang) {
  const size = await enSize(shot.name);
  let buf;
  let k = 1;
  if (shot.file) {
    const f = join(HELP_IMAGES, `${shot.file}.${lang}.png`);
    if (!existsSync(f)) throw new Error(`no ${f}: run help.mjs first`);
    buf = readFileSync(f);
  } else if (shot.from) {
    const h = help[shot.from];
    // A card or a dialog: the English file's size, centered on it, so a
    // shorter or longer translation keeps the frame (page pixels around it,
    // never a painted band).
    const box = h.element
      ? (page) => page.locator(h.element).first().boundingBox()
      : h.clip;
    const fitted = async (page) => {
      const r = await box(page);
      return {
        x: Math.max(0, Math.round(r.x - (size.width - r.width) / 2)),
        y: Math.max(0, Math.round(r.y - (size.height - r.height) / 2)),
        width: size.width,
        height: size.height,
      };
    };
    buf = await capture(browser, { ...h, width: shot.width ?? 1440, element: undefined, clip: shot.crop ? undefined : fitted }, lang, NO_PRICES);
  } else {
    k = shot.own.dpr ?? 1;
    buf = await capture(browser, shot.own, lang, NO_PRICES);
  }
  if (shot.crop) {
    const [x0, y0, x1, y1] = shot.crop;
    buf = await sharp(buf).extract({ left: x0 * k, top: y0 * k, width: (x1 - x0) * k, height: (y1 - y0) * k }).toBuffer();
  }
  if (k !== 1) buf = await sharp(buf).resize({ width: size.width }).toBuffer();
  buf = await toSize(buf, size);
  return sharp(buf).webp({ quality: shot.quality ?? 84, effort: 6 }).toBuffer();
}

await run(shots, make);
const n = listLocalized(PUBLIC, '/Images/app/');
console.log(`localized-images.json: ${n} files under /Images/app/`);
