#!/usr/bin/env node
// Fetch a previously submitted WaveSpeed task by ID and save the output.
//
// Usage:
//   node scripts/fetch-image-result.mjs <taskId> <outputPath>
//
// Polls up to 8 minutes; saves the returned bytes to outputPath.

import "dotenv/config";
import { writeFile } from "node:fs/promises";
import process from "node:process";

const API_URL = "https://api.wavespeed.ai/api/v3";
const POLL_TIMEOUT_S = 480;
const API_KEY = process.env.WAVESPEED_API_KEY;

async function main() {
  const [taskId, outPath] = process.argv.slice(2);
  if (!API_KEY) {
    console.error("WAVESPEED_API_KEY is not set.");
    process.exit(1);
  }
  if (!taskId || !outPath) {
    console.error("Usage: node scripts/fetch-image-result.mjs <taskId> <outputPath>");
    process.exit(1);
  }

  process.stdout.write(`Fetching ${taskId} -> ${outPath} `);
  for (let i = 0; i < POLL_TIMEOUT_S; i++) {
    const r = await fetch(`${API_URL}/predictions/${taskId}/result`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const j = await r.json().catch(() => ({}));
    const status = j.data?.status;
    if (status === "completed") {
      const url = j.data.outputs?.[0];
      if (!url) {
        console.error("\nNo output URL.");
        process.exit(1);
      }
      const img = await fetch(url);
      const buf = Buffer.from(await img.arrayBuffer());
      await writeFile(outPath, buf);
      console.log(`\nSaved ${outPath} (${(buf.length / 1024).toFixed(0)} KB)`);
      return;
    }
    if (status === "failed") {
      console.error(`\nFailed: ${j.data?.error || "unknown"}`);
      process.exit(1);
    }
    process.stdout.write(".");
    await new Promise((r) => setTimeout(r, 2000));
  }
  console.error(`\nTimed out after ${POLL_TIMEOUT_S * 2}s.`);
  process.exit(1);
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
