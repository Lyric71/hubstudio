#!/usr/bin/env node
// WaveSpeed text-to-image CLI. Submit a prompt, poll for the result, save the file.
//
// Usage:
//   npm run gen -- "a futuristic city skyline at sunset"
//   node scripts/generate-image.mjs "a red fox in snow" --quality=1K --format=png
//   node scripts/generate-image.mjs "hero banner" --out=public/Images/hero.png
//
// Output:
//   Default filename is generated-<timestamp>.<format> in the repo root — that
//   pattern is git-ignored (scratch output). Pass --out= to write a kept file;
//   writing into public/Images/ means the pre-commit optimizer picks it up.
//
// Requires WAVESPEED_API_KEY in .env. See integrate-wavespeed-api.md.

import "dotenv/config";
import { writeFile } from "node:fs/promises";
import process from "node:process";

const API_URL = "https://api.wavespeed.ai/api/v3";
const MODEL = "google/nano-banana-2/text-to-image";
const POLL_TIMEOUT_S = 120; // 120s for CLI/batch per the integration guide

const API_KEY = process.env.WAVESPEED_API_KEY;

function parseArgs(argv) {
  const opts = { quality: "1K", format: "png", out: null };
  const words = [];
  for (const a of argv) {
    if (a.startsWith("--quality=")) opts.quality = a.slice(10);
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

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (!API_KEY) {
    console.error("WAVESPEED_API_KEY is not set. Add it to .env.");
    process.exit(1);
  }
  if (!opts.prompt) {
    console.error(
      'Usage: npm run gen -- "<prompt>"  [--quality=1K] [--format=png] [--out=path.png]',
    );
    process.exit(1);
  }

  console.log(`Prompt: "${opts.prompt}"`);
  console.log(`Model:  ${MODEL}  (${opts.quality}, ${opts.format})`);

  // Step 1 — submit the task.
  const submitRes = await fetch(`${API_URL}/${MODEL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: opts.prompt,
      output_format: opts.format,
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

  // Step 2 — poll once per second until completed or failed.
  process.stdout.write("Generating");
  for (let i = 0; i < POLL_TIMEOUT_S; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    process.stdout.write(".");

    const statusRes = await fetch(`${API_URL}/predictions/${taskId}/result`, {
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
      const imgRes = await fetch(imageUrl);
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
