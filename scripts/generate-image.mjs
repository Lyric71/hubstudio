#!/usr/bin/env node
// WaveSpeed text-to-image CLI. Submit a prompt, poll for the result, save the file.
//
// Usage:
//   npm run gen -- "a futuristic city skyline at sunset"
//   node scripts/generate-image.mjs "a red fox in snow" --quality=high --resolution=2k
//   node scripts/generate-image.mjs "hero banner" --aspect-ratio=16:9 --out=public/Images/hero.png
//
// Output:
//   Default filename is generated-<timestamp>.<format> in the repo root: that
//   pattern is git-ignored (scratch output). Pass --out= to write a kept file;
//   writing into public/Images/ means the pre-commit optimizer picks it up.
//
// Requires WAVESPEED_API_KEY in .env. See integrate-wavespeed-api.md.

import "dotenv/config";
import { writeFile } from "node:fs/promises";
import process from "node:process";

const API_URL = "https://api.wavespeed.ai/api/v3";
const MODEL = "openai/gpt-image-2/text-to-image";
const POLL_TIMEOUT_S = 240; // 240s for CLI/batch under parallel load

const API_KEY = process.env.WAVESPEED_API_KEY;

function parseArgs(argv) {
  const opts = {
    quality: "medium", // low | medium | high
    resolution: "1k", // 1k | 2k | 4k
    aspectRatio: "1:1", // 1:1 3:2 2:3 3:4 4:3 4:5 5:4 9:16 16:9 21:9
    format: "png", // saved-file extension only
    out: null,
  };
  const words = [];
  for (const a of argv) {
    if (a.startsWith("--quality=")) opts.quality = a.slice(10);
    else if (a.startsWith("--resolution=")) opts.resolution = a.slice(13);
    else if (a.startsWith("--aspect-ratio=")) opts.aspectRatio = a.slice(15);
    else if (a.startsWith("--format=")) opts.format = a.slice(9);
    else if (a.startsWith("--out=")) opts.out = a.slice(6);
    else if (a.startsWith("--")) {
      console.error(`Unknown flag: ${a}`);
      process.exit(2);
    } else {
      words.push(a);
    }
  }
  opts.prompt = words.join(" ").trim();
  return opts;
}

// Wrap fetch with retries on transient network errors. The poll loop fires
// ~90 sequential requests per image; a single dropped connection should not
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

  if (!API_KEY) {
    console.error("WAVESPEED_API_KEY is not set. Add it to .env.");
    process.exit(1);
  }
  if (!opts.prompt) {
    console.error(
      'Usage: npm run gen -- "<prompt>"  [--quality=low|medium|high]' +
        " [--resolution=1k|2k|4k] [--aspect-ratio=16:9] [--format=png] [--out=path.png]",
    );
    process.exit(1);
  }

  console.log(`Prompt: "${opts.prompt}"`);
  console.log(
    `Model:  ${MODEL}  (${opts.quality}, ${opts.resolution}, ${opts.aspectRatio})`,
  );

  // Step 1: submit the task.
  const submitRes = await fetchRetry(`${API_URL}/${MODEL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: opts.prompt,
      aspect_ratio: opts.aspectRatio,
      resolution: opts.resolution,
      quality: opts.quality,
    }),
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
  process.stdout.write("Generating");
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
      const filename = opts.out || `generated-${Date.now()}.${opts.format}`;
      await writeFile(filename, buffer);
      console.log(
        `\nSaved: ${filename}  (${(buffer.length / 1024).toFixed(0)} KB)`,
      );
      return;
    }
    if (status === "failed") {
      console.error(
        "\nGeneration failed:",
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
