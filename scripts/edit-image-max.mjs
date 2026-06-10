#!/usr/bin/env node
// WaveSpeed image-edit CLI, MAX-QUALITY variant of edit-image.mjs.
// Same submit + poll flow, but the defaults are pinned to the model's ceiling:
// quality=high and resolution=4k. The poll window is widened to 600s because
// the top tier, plus a large base64 input image, is the slowest to render.
// You can still pass --quality / --resolution to dial it back down.
//
// Usage:
//   npm run edit:max -- public/Images/hero.png "make the sky a warm sunset"
//   node scripts/edit-image-max.mjs in.png --prompt-file=p.txt --out=public/Images/out.png
//
// The first non-flag word that exists as a readable file is treated as an input
// image; you can pass several. Everything else is the edit prompt.
//
// Output:
//   Default filename is edited-<timestamp>.<format> in the repo root: that
//   pattern is git-ignored (scratch output). Pass --out= to write a kept file;
//   writing into public/Images/ means the pre-commit optimizer picks it up.
//
// Requires WAVESPEED_API_KEY in .env. See integrate-wavespeed-api.md.

import "dotenv/config";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const API_URL = "https://api.wavespeed.ai/api/v3";
const MODEL = "openai/gpt-image-2/edit";
const POLL_TIMEOUT_S = 600; // top tier (high/4k) + large input is slow

const API_KEY = process.env.WAVESPEED_API_KEY;

const MIME_BY_EXT = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
};

function parseArgs(argv) {
  const opts = {
    quality: "high", // MAX: low | medium | high
    resolution: "4k", // MAX: 1k | 2k | 4k
    aspectRatio: null, // optional; omit to keep the input image's shape
    format: "png", // saved-file extension only
    out: null,
  };
  const words = [];
  const images = [];
  for (const a of argv) {
    if (a.startsWith("--quality=")) opts.quality = a.slice(10);
    else if (a.startsWith("--resolution=")) opts.resolution = a.slice(13);
    else if (a.startsWith("--aspect-ratio=")) opts.aspectRatio = a.slice(15);
    else if (a.startsWith("--format=")) opts.format = a.slice(9);
    else if (a.startsWith("--out=")) opts.out = a.slice(6);
    else if (a.startsWith("--image=")) images.push(a.slice(8));
    else if (a.startsWith("--prompt-file=")) opts.promptFile = a.slice(14);
    else if (a.startsWith("--")) {
      console.error(`Unknown flag: ${a}`);
      process.exit(2);
    } else if (existsSync(a) && MIME_BY_EXT[path.extname(a).toLowerCase()]) {
      // A bare arg that resolves to a readable image file is an input image,
      // not a prompt word. Explicit --image= always wins if you need a word
      // that happens to collide with a filename.
      images.push(a);
    } else {
      words.push(a);
    }
  }
  opts.prompt = words.join(" ").trim();
  opts.images = images;
  return opts;
}

// Read the prompt from a file when --prompt-file= is given. Lets you pass a
// long, multi-line prompt full of quotes/backticks without fighting the shell.
async function resolvePrompt(opts) {
  if (opts.promptFile) {
    const fromFile = (await readFile(opts.promptFile, "utf8")).trim();
    // Any bare words on the command line append to (override-extend) the file.
    opts.prompt = [fromFile, opts.prompt].filter(Boolean).join("\n\n");
  }
}

// Read a local image and return a base64 data URI the API accepts in place of
// a hosted URL. Keeps the workflow fully local: no need to upload first.
async function toDataUri(file) {
  const ext = path.extname(file).toLowerCase();
  const mime = MIME_BY_EXT[ext];
  if (!mime) {
    throw new Error(`Unsupported image type: ${file} (use png/jpg/webp/avif/gif)`);
  }
  const buf = await readFile(file);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

// Wrap fetch with retries on transient network errors. The poll loop fires
// many sequential requests per image; a single dropped connection should not
// kill an otherwise healthy job. Each attempt gets its own abort timeout so a
// stalled connection fails fast and is retried, instead of hanging for minutes
// on the OS-level TCP timeout and defeating the retry logic.
const FETCH_TIMEOUT_MS = 60_000;
async function fetchRetry(url, options = {}, retries = 4) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
    } catch (err) {
      lastErr = err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 800 * (attempt + 1)));
      }
    }
  }
  throw lastErr;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  await resolvePrompt(opts);

  if (!API_KEY) {
    console.error("WAVESPEED_API_KEY is not set. Add it to .env.");
    process.exit(1);
  }
  if (opts.images.length === 0) {
    console.error(
      "No input image found. Pass a path to an existing picture, e.g.\n" +
        '  npm run edit:max -- public/Images/hero.png "make the sky a warm sunset"',
    );
    process.exit(1);
  }
  if (!opts.prompt) {
    console.error(
      'Usage: npm run edit:max -- <image> [more-images] "<edit prompt>"' +
        " [--quality=low|medium|high] [--resolution=1k|2k|4k]" +
        " [--aspect-ratio=16:9] [--format=png] [--out=path.png]",
    );
    process.exit(1);
  }

  console.log(`Prompt: "${opts.prompt}"`);
  console.log(`Input:  ${opts.images.join(", ")}`);
  console.log(
    `Model:  ${MODEL}  (${opts.quality}, ${opts.resolution}` +
      `${opts.aspectRatio ? `, ${opts.aspectRatio}` : ""})`,
  );

  const images = await Promise.all(opts.images.map(toDataUri));

  // Step 1: submit the task.
  const body = {
    prompt: opts.prompt,
    images,
    resolution: opts.resolution,
    quality: opts.quality,
  };
  if (opts.aspectRatio) body.aspect_ratio = opts.aspectRatio;

  const submitRes = await fetchRetry(`${API_URL}/${MODEL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const submitData = await submitRes.json().catch(() => ({}));
  if (submitData.code !== 200 || !submitData.data?.id) {
    console.error(
      "Submit failed:",
      submitData.message || JSON.stringify(submitData),
    );
    process.exit(1);
  }
  const taskId = submitData.data.id;
  console.log(`Task submitted: ${taskId}`);

  // Step 2: poll once per second until completed or failed.
  process.stdout.write("Editing");
  for (let i = 0; i < POLL_TIMEOUT_S; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    process.stdout.write(".");

    const statusRes = await fetchRetry(`${API_URL}/predictions/${taskId}/result`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const statusData = await statusRes.json().catch(() => ({}));
    const status = statusData.data?.status;

    if (status === "completed") {
      const imageUrl = statusData.data.outputs?.[0];
      if (!imageUrl) {
        console.error("\nCompleted but no output URL returned.");
        process.exit(1);
      }
      const imgRes = await fetchRetry(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      const filename = opts.out || `edited-${Date.now()}.${opts.format}`;
      await writeFile(filename, buffer);
      console.log(
        `\nSaved: ${filename}  (${(buffer.length / 1024).toFixed(0)} KB)`,
      );
      return;
    }
    if (status === "failed") {
      console.error(
        "\nEdit failed:",
        statusData.data?.error || "unknown error",
      );
      process.exit(1);
    }
  }

  console.error(`\nTimed out after ${POLL_TIMEOUT_S}s.`);
  process.exit(1);
}

main().catch((err) => {
  console.error("\nError:", err.message);
  process.exit(1);
});
