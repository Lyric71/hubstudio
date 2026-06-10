#!/usr/bin/env node
// One-off batch driver for the 10 Bloomsbury background edits.
// Composes each prompt, drives scripts/edit-image-max.mjs (high/4k) against
// Model1.jpg with a concurrency cap, then converts each PNG output to an
// optimized WebP under public/Images/debeers/ and removes the PNG.
//
//   node scripts/_bloomsbury-run.mjs
//
// Scratch file (underscore prefix); delete after the run.

import { spawn } from "node:child_process";
import { mkdir, writeFile, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const SRC = "public/Images/debeers/Model1.jpg";
const OUT_DIR = "public/Images/debeers"; // 2000px thumbnails (pre-commit optimizes these)
const FULL_DIR = "public/debeers-full"; // original-quality enlarge/download (outside the optimizer)
const SCRATCH = "scripts/_bloomsbury";
const CONCURRENCY = 2;

const SUBJECT =
  "Keep the woman completely unchanged and identical to the input image: her " +
  "face, facial features, gaze direction, downward-looking expression, skin, " +
  "both arms and hands and their exact positions (one hand raised to her hair, " +
  "the other resting forward), her long flowing dark hair, the crisp white silk " +
  "shirt with its collar and rolled cuffs, and all diamond butterfly jewelry " +
  "(earrings, necklace, bracelet, ring) must remain exactly the same in shape, " +
  "size, position, sparkle, and color. Only the background and the surrounding " +
  "setting change.\n\n" +
  "Remove the black surface/area from the input image entirely and replace it " +
  "with the newly created background described below. The black foreground panel " +
  "she leans on must be fully replaced: no black block, dark slab, or black " +
  "border should remain.\n\n" +
  "Preserve exactly: warm light-medium East Asian complexion with peachy-golden " +
  "undertones, highlights #E5C4A8, mid-tones #D4A988, soft shadows #B8896A; " +
  "naturally luminous smooth skin with gentle dewy highlights on the cheekbones, " +
  "nose bridge and forehead; soft warmth across the cheeks. Deep espresso brown " +
  "to near-black hair (#2A1B12 to #4A3324) with warm reddish-chestnut highlights " +
  "(#6B4528), glossy and flowing. Soft natural rosy-nude coral-pink lips " +
  "(#C08570). Crisp warm ivory-to-white silk shirt (#F5F0E8 to #FFFFFF). Cool " +
  "silver / white-gold jewelry with brilliant white diamond pave (#FFFFFF " +
  "sparkle), butterfly motifs.";

const TAIL =
  "Aspect ratio 16:9. Exterior only. No red brick. No black panel remaining. Do " +
  "not alter the subject's coloring, skin tone, clothing, jewelry, pose, or " +
  "features in any way.\n\n" +
  "Avoid: black panel, black slab, black block, black border, dark foreground, " +
  "red brick, red brickwork, interior, indoors, altered face, different person, " +
  "changed skin tone, lighter or paler skin, modified jewelry, different " +
  "clothing, distorted features, new pose, repositioned hands, oversaturated " +
  "skin, plastic skin, washed-out colors.";

const ITEMS = [
  {
    id: "bloomsbury-garden-square",
    setting:
      "New setting: seat her at a small round outdoor cafe table in a Bloomsbury garden square; the pale stone tabletop replaces the removed black panel beneath her resting arm. Behind her, elegant cream-painted Georgian stucco townhouses (#EDE3D2) with white-trimmed sash windows and black wrought-iron railings, framed by leafy green plane trees (#6E7D4E), all softly blurred at a shallow depth of field. Soft overcast daylight with gentle warm tones matching her existing warm lighting. Refined editorial fashion photography.",
  },
  {
    id: "bloomsbury-townhouse-balcony",
    setting:
      "New setting: seat her at a small round bistro table on a wrought-iron Bloomsbury balcony terrace; the pale stone tabletop replaces the removed black panel beneath her resting arm. Behind her, a black iron balustrade (#1C1C1C), pale Portland stone facade (#E8E0D0), and the green canopy of garden-square trees (#6E7D4E) below, softly blurred at shallow depth of field. Soft diffused morning light with warm undertones. Elegant editorial style.",
  },
  {
    id: "bloomsbury-british-museum",
    setting:
      "New setting: seat her near the British Museum's neoclassical colonnade in Bloomsbury; a pale stone balustrade or step replaces the removed black panel beneath her resting arm. Behind her, tall fluted limestone columns (#E4DAC8) and pale stone steps with a hint of green from nearby trees, softly blurred at shallow depth of field. Soft overcast daylight, gentle warm tones. Luxury editorial photography.",
  },
  {
    id: "bloomsbury-cafe-terrace",
    setting:
      "New setting: seat her at a round marble bistro table on an outdoor cafe terrace in Bloomsbury; the pale marble tabletop replaces the removed black panel beneath her resting arm. Behind her, a softly blurred cream awning (#EDE3D2), potted bay trees and greenery (#6E7D4E), and pale stone paving (#D8CEBE), all at shallow depth of field. Soft overcast daylight with gentle warm tones. Intimate editorial mood.",
  },
  {
    id: "bloomsbury-russell-square",
    setting:
      "New setting: seat her on the pale weathered-wood top rail of a park bench in Russell Square, Bloomsbury; the bench's light wooden surface replaces the removed black panel beneath her resting arm (avoid a dark bench). Behind her, lush mature plane trees and manicured lawns (#6E7D4E to #5A6B42) softly blurred and dappled with gentle light, at shallow depth of field. Soft warm overcast daylight. Serene editorial photography.",
  },
  {
    id: "bloomsbury-pergola",
    setting:
      "New setting: seat her at a pale stone or white-painted table beneath a white-painted garden pergola in a Bloomsbury square; the pale tabletop replaces the removed black panel beneath her resting arm. Behind her, softly blurred climbing greenery and wisteria (#6E7D4E), pale stone planters (#D8CEBE), and white-painted timber framing (#F2EDE3), at shallow depth of field. Warm soft daylight filtering through leaves. Serene editorial mood.",
  },
  {
    id: "bloomsbury-golden-hour",
    setting:
      "New setting: place her on a Bloomsbury townhouse balcony at golden hour; a warm-lit pale stone or painted-iron balcony ledge replaces the removed black panel beneath her resting arm. Behind her, warm-lit pale stone facades (#EAD9BE) and soft tree silhouettes glowing in low golden sunlight (#E6B877), softly blurred at shallow depth of field. Cinematic warm editorial photography.",
  },
  {
    id: "bloomsbury-hotel-steps",
    setting:
      "New setting: seat her on the pale stone entrance steps of an elegant Bloomsbury boutique hotel; a pale stone step or balustrade replaces the removed black panel beneath her resting arm. Behind her, softly blurred white-painted columns and portico (#EDE6DA), brass door fixtures (#B5945A), and a stone urn of white flowers, at shallow depth of field. Soft warm overcast daylight. Luxury editorial style.",
  },
  {
    id: "bloomsbury-mews",
    setting:
      "New setting: place her leaning on a pale-painted window ledge or low stone wall in a charming Bloomsbury mews; the pale ledge replaces the removed black panel beneath her resting arm. Behind her, softly blurred pale-painted mews houses (#E3D8C6) in cream, soft grey, and pastel sage, set on light cobblestones (#C9C0B2) with climbing greenery (#6E7D4E), at shallow depth of field. Soft overcast daylight, gentle warmth. Refined editorial photography.",
  },
  {
    id: "bloomsbury-conservatory",
    setting:
      "New setting: place her on a balcony beside a Bloomsbury glass conservatory; a small white iron table or pale ledge replaces the removed black panel beneath her resting arm. Behind her, soft reflections in tall glass panes, white-painted iron frames (#F2EDE3), and lush potted greenery (#5F7044), softly blurred at shallow depth of field. Soft bright overcast daylight with warm undertones. Airy editorial mood.",
  },
];

function runChild(item) {
  return new Promise(async (resolve) => {
    const promptFile = path.join(SCRATCH, `${item.id}.txt`);
    const pngOut = path.join(SCRATCH, `${item.id}.png`);
    await writeFile(promptFile, `${SUBJECT}\n\n${item.setting}\n\n${TAIL}\n`);

    const args = [
      "scripts/edit-image-max.mjs",
      SRC,
      `--prompt-file=${promptFile}`,
      "--aspect-ratio=16:9",
      `--out=${pngOut}`,
    ];
    console.log(`[start]  ${item.id}`);
    const child = spawn("node", args, { stdio: ["ignore", "pipe", "pipe"] });
    let tail = "";
    const grab = (b) => {
      tail = (tail + b.toString()).slice(-400);
    };
    child.stdout.on("data", grab);
    child.stderr.on("data", grab);
    child.on("close", (code) => {
      console.log(`[done ${code}] ${item.id}`);
      if (code !== 0) console.log(`         ...${tail.trim().slice(-200)}`);
      resolve({ item, pngOut, ok: code === 0 });
    });
  });
}

// From the generated 4k PNG produce three tiers:
//   - original: the untouched model PNG at native resolution (Download button)
//   - full:     native-resolution WebP, fast to load (enlarge preview)
//   - thumb:    optimized WebP <=2000px wide (grid thumbnail)
// original + full live under /debeers-full/ (outside the optimizer); the scratch
// PNG is then removed.
async function toWebp(pngOut, id) {
  try {
    await stat(pngOut);
  } catch {
    return { id, converted: false };
  }
  const buf = await readFile(pngOut);

  const origOut = path.join(FULL_DIR, `${id}.png`);
  await writeFile(origOut, buf);

  const fullOut = path.join(FULL_DIR, `${id}.webp`);
  await sharp(buf).webp({ quality: 95, effort: 6 }).toFile(fullOut);

  const thumbOut = path.join(OUT_DIR, `${id}.webp`);
  await sharp(buf)
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(thumbOut);

  await rm(pngOut);
  const os = (await stat(origOut)).size;
  const fs = (await stat(fullOut)).size;
  const ts = (await stat(thumbOut)).size;
  console.log(
    `[out]    ${id}: original ${(os / 1024 / 1024).toFixed(1)} MB, full ${(fs / 1024).toFixed(0)} KB, thumb ${(ts / 1024).toFixed(0)} KB`,
  );
  return { id, converted: true };
}

async function main() {
  await mkdir(SCRATCH, { recursive: true });
  await mkdir(FULL_DIR, { recursive: true });

  // Optional id filter from argv: rerun only the named items (retry helper).
  const only = new Set(process.argv.slice(2));
  const items = only.size ? ITEMS.filter((i) => only.has(i.id)) : ITEMS;

  // Simple concurrency pool over the children.
  const queue = [...items];
  const results = [];
  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      results.push(await runChild(item));
    }
  }
  await Promise.all(
    Array.from({ length: CONCURRENCY }, () => worker()),
  );

  console.log("\nConverting to WebP...");
  for (const r of results) {
    if (r.ok) await toWebp(r.pngOut, r.item.id);
    else console.log(`[skip]   ${r.item.id} (generation failed)`);
  }

  const ok = results.filter((r) => r.ok).length;
  console.log(`\nFinished: ${ok}/${items.length} generated.`);
}

main().catch((e) => {
  console.error("Fatal:", e.message);
  process.exit(1);
});
