#!/usr/bin/env node
// MAX-QUALITY wrapper around generate-image.mjs (OpenAI Images).
//
// OpenAI has no free resolution dial the way the old provider did: the ceiling
// is quality=high at the largest size the aspect ratio allows. This wrapper
// just pins those defaults and forwards everything else, so there is one
// implementation to maintain instead of two near-identical copies.
//
// Usage:
//   npm run gen:max -- "a futuristic city skyline at sunset"
//   node scripts/generate-image-max.mjs "hero banner" --aspect-ratio=16:9 --out=public/Images/hero.png
//
// Any flag you pass wins over the maxed default.

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

const has = (name) => args.some((a) => a === `--${name}` || a.startsWith(`--${name}=`));
const defaults = [];
if (!has("quality")) defaults.push("--quality=high");
if (!has("resolution") && !has("size")) defaults.push("--resolution=4k");

const child = spawn(
  process.execPath,
  [path.join(here, "generate-image.mjs"), ...defaults, ...args],
  { stdio: "inherit" },
);
child.on("exit", (code) => process.exit(code ?? 1));
