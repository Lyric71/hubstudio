#!/usr/bin/env node
// Build the pictures of the contact follow-up email (src/lib/contact-followup.ts):
// its app screenshots and its header logo.
//
// Usage:
//   node scripts/build-email-shots.mjs
//
// Email clients are not browsers: Outlook on Windows shows no WebP, so the
// email cannot point at the site's /Images/app/*.webp captures. This script
// re-encodes the ones the email uses, in English, French and Chinese, as JPG
// in public/Images/email/, at most 1200px wide (shown at 600px, sharp on a
// retina screen). Run it again whenever one of those captures is retaken.

import { existsSync } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/** Capture of public/Images/app/ -> name in public/Images/email/. Keep in step with contact-followup.ts. */
const SHOTS = {
  explore: "generate",
  editorSocial: "edit",
  campaigns: "campaigns",
  publishStep: "publish",
};
const LOCALES = ["", ".fr", ".zh"];
const MAX_WIDTH = 1200;

const root = path.resolve(import.meta.dirname, "..");
const from = path.join(root, "public", "Images", "app");
const to = path.join(root, "public", "Images", "email");
await mkdir(to, { recursive: true });

let failed = false;
for (const [capture, name] of Object.entries(SHOTS)) {
  for (const locale of LOCALES) {
    const src = path.join(from, `${capture}${locale}.webp`);
    const out = path.join(to, `${name}${locale}.jpg`);
    if (!existsSync(src)) {
      console.error(`missing capture: ${path.relative(root, src)}`);
      failed = true;
      continue;
    }
    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(out);
    const { width, height } = await sharp(out).metadata();
    const kb = Math.round((await stat(out)).size / 1024);
    console.log(`${path.relative(root, out)}  ${width}x${height}  ${kb} KB`);
  }
}
// The logo of the email header: the cream wordmark flattened onto the header's
// navy, so the picture carries its own background. A transparent logo vanishes
// when a dark mode (Gmail on iOS, Outlook.com) recolors the band behind it.
const logo = path.join(to, "logo.png");
await sharp(path.join(root, "public", "logo", "hubstudio-logo-dark.png"))
  .flatten({ background: "#0e1f4e" })
  .png({ compressionLevel: 9 })
  .toFile(logo);
console.log(`${path.relative(root, logo)}  ${Math.round((await stat(logo)).size / 1024)} KB`);

if (failed) process.exit(1);
