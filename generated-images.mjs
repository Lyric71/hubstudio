#!/usr/bin/env node
// Scratch orchestrator: generate the Insights image series via WaveSpeed,
// then convert each to an optimised webp under public/Images/.
// Filename matches the git-ignored `generated-*` pattern, so this file is
// scratch and never committed. Run once: `node generated-images.mjs`.

import 'dotenv/config';
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'openai/gpt-image-2/text-to-image';
const API_KEY = process.env.WAVESPEED_API_KEY;
const POLL_TIMEOUT_S = 200;
const CONCURRENCY = 4;

// Shared photographic direction, per hubstudio-image-style-guide.md.
const STYLE =
  'Editorial conceptual still-life photography of the 2024 to 2026 campaign era, ' +
  'in the spirit of Carl Kleiner clean geometry and Hiroshi Sugimoto stillness. ' +
  'Shot on a full-frame camera with an 85mm prime lens at f/4. A single soft ' +
  'directional light from camera left, casting one long natural shadow. ' +
  'Warm-shadow colour grade like Kodak Portra 400 film, gently desaturated ' +
  'mid-tones, the black point lifted slightly, subtle film grain across the ' +
  'whole frame. Matte real-world surfaces with visible texture: plaster, raw ' +
  'paper, clay, concrete, sand. No glossy plastic, no digital glow, no lens ' +
  'flare, no impossible reflections. Restrained palette of warm cream ' +
  'off-white, deep navy ink-blue, and one burnt-orange vermilion accent. ' +
  'Generous empty negative space for typography, composed on the rule of ' +
  'thirds, cropped tighter than comfortable. No text, no lettering, no logos.';

const JOBS = [
  {
    name: 'insights-hero',
    aspect: '16:9',
    scene:
      'A wide architectural still life on a vast pale concrete plane. An ' +
      'arrangement of sculptural geometric forms at varying scale: cubes, ' +
      'ovoids, faceted polyhedra, flat slabs, and one tall hand-folded paper ' +
      'form, composed like a quiet designed model city. Most forms are matte ' +
      'cream and deep navy ink-blue; two or three carry a single burnt-orange ' +
      'accent face. One strong low light rakes across from the left, throwing ' +
      'long parallel shadows. Objects fill the left two-thirds; the right ' +
      'third is open empty space.',
  },
  {
    name: 'insight-ai-search-content-systems',
    aspect: '3:2',
    scene:
      'A raw concrete tabletop. On the left third, a stack of thin cream ' +
      'paper sheets pressed almost completely flat into one dense inert ' +
      'wafer. On the right third, a single sheet of the same cream paper ' +
      'folded by hand into a tall upright three-dimensional sculptural form ' +
      'that stands and casts one long shadow. The standing form has one ' +
      'hand-painted burnt-orange edge. The quiet contrast between the ' +
      'flattened stack and the dimensional standing object is the subject.',
  },
  {
    name: 'insight-luxury-ai-content-systems',
    aspect: '3:2',
    scene:
      'A small refined still life. A single matte navy ink-blue geometric ' +
      'object, a smooth ovoid, resting on a low cream plaster plinth, partly ' +
      'revealed from behind a softly draped panel of cream linen that ' +
      'occupies the left of the frame. One fine burnt-orange thread lies ' +
      'across the plinth. The mood is quiet, controlled and expensive, with ' +
      'deep stillness and shadow.',
  },
  {
    name: 'insight-promptable-3d-content-operations',
    aspect: '3:2',
    scene:
      'A pale concrete surface. At the upper right stands a single solid ' +
      'burnt-orange faceted polyhedron, the master object, lit so its facets ' +
      'read clearly. Laid flat across the rest of the surface in a calm grid ' +
      'are nine cream paper cut-out silhouettes of that same polyhedron, each ' +
      'a flat variant of the dimensional original. One dimensional object ' +
      'generating its flat variations is the subject.',
  },
  {
    name: 'insight-where-language-ai-delivers',
    aspect: '3:2',
    scene:
      'A set of modular matte cream plaster blocks with precisely carved ' +
      'slots, arranged on a concrete surface. One burnt-orange block is ' +
      'fitted exactly into a deep navy ink-blue recess, the join clean and ' +
      'perfect. Two or three loose cream blocks sit slightly apart, set ' +
      'aside. The subject is precise fit: the right piece seated exactly ' +
      'where it belongs.',
  },
  {
    name: 'insight-ai-sound-for-video',
    aspect: '3:2',
    scene:
      'A concrete surface seen from a low three-quarter angle. A sculptural ' +
      'set of concentric rings cut from cream paper ripples outward from a ' +
      'single small navy ink-blue sphere, like a sound wave frozen into ' +
      'physical form. One of the outer rings is edged in burnt orange. The ' +
      'expanding ripple made visible is the subject.',
  },
  {
    name: 'insight-geo-vs-seo',
    aspect: '3:2',
    scene:
      'A tabletop of fine pale sand. Scattered loosely across the foreground, ' +
      'a dozen identical small cream pebbles. Set apart on a low cream ' +
      'plaster plinth in the upper third, a single deep navy ink-blue stone. ' +
      'One clean precise burnt-orange line is drawn in the sand leading ' +
      'straight from the scattered pebbles to the navy stone on its plinth. ' +
      'The single chosen object, recommended over the many, is the subject.',
  },
  {
    name: 'insight-three-years-of-genai-ecommerce',
    aspect: '3:2',
    scene:
      'Three low cream plaster plinths in a row on a concrete floor, evenly ' +
      'spaced and receding slightly. The left plinth holds a rough raw lump ' +
      'of cream clay. The middle plinth holds a half-refined navy ink-blue ' +
      'geometric form. The right plinth holds a fully resolved precise ' +
      'burnt-orange faceted object. A progression from raw material to ' +
      'finished form across the three plinths is the subject.',
  },
  {
    name: 'insight-aigc-adoption-curve',
    aspect: '3:2',
    scene:
      'A smooth ascending ramp built from stacked matte cream plaster blocks, ' +
      'rising from the lower left to the upper right of the frame against a ' +
      'plain cream wall. The blocks step upward like a clean curve. The ' +
      'single highest block at the top of the rise is burnt orange; the ' +
      'shadowed sides of the lower blocks read deep navy. An architectural ' +
      'ascending form, calm and confident.',
  },
  {
    name: 'insight-without-creatives-aigc-is-nothing',
    aspect: '3:2',
    scene:
      'A real human hand with warm natural skin, visible texture, knuckles ' +
      'and small imperfections, anatomically correct with four fingers and ' +
      'one thumb in a relaxed natural pose, entering from the right of the ' +
      'frame at the wrist. The hand is caught mid-gesture, deliberately ' +
      'placing a single burnt-orange geometric block among an arrangement of ' +
      'matte cream and deep navy blocks on a concrete surface. The authoring ' +
      'hand is the clear subject. A documentary in-studio feel.',
  },
  {
    name: 'insight-adobe-ai-mistake',
    aspect: '3:2',
    scene:
      'A concrete floor. Lying on its side in the foreground, a fragment of ' +
      'a fluted classical column cast in cream plaster, hollow and chalky, ' +
      'clearly an artifact of an older era. Standing upright behind it, clean ' +
      'and new, a solid burnt-orange monolithic rectangular block with one ' +
      'deep navy shadowed face. An old architectural form and a new ' +
      'architectural form in the same frame, observed plainly.',
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function submit(prompt, aspect) {
  const res = await fetch(`${API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio: aspect,
      resolution: '2k',
      quality: 'high',
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (data.code !== 200 || !data.data?.id) {
    throw new Error(`submit failed: ${data.message || JSON.stringify(data)}`);
  }
  return data.data.id;
}

async function poll(taskId) {
  for (let i = 0; i < POLL_TIMEOUT_S; i++) {
    await sleep(1000);
    const res = await fetch(`${API_URL}/predictions/${taskId}/result`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const data = await res.json().catch(() => ({}));
    const status = data.data?.status;
    if (status === 'completed') {
      const url = data.data.outputs?.[0];
      if (!url) throw new Error('completed but no output url');
      return url;
    }
    if (status === 'failed') {
      throw new Error(`generation failed: ${data.data?.error || 'unknown'}`);
    }
  }
  throw new Error(`timed out after ${POLL_TIMEOUT_S}s`);
}

async function runJob(job) {
  const prompt = `${job.scene}\n\n${STYLE}`;
  const taskId = await submit(prompt, job.aspect);
  const url = await poll(taskId);
  const imgRes = await fetch(url);
  const raw = Buffer.from(await imgRes.arrayBuffer());
  const out = `public/Images/${job.name}.webp`;
  const webp = await sharp(raw)
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toBuffer();
  await writeFile(out, webp);
  return { name: job.name, kb: Math.round(webp.length / 1024) };
}

async function main() {
  if (!API_KEY) {
    console.error('WAVESPEED_API_KEY is not set in .env');
    process.exit(1);
  }
  const queue = [...JOBS];
  const results = [];
  const failures = [];
  async function worker() {
    while (queue.length) {
      const job = queue.shift();
      process.stdout.write(`  start  ${job.name}\n`);
      try {
        const r = await runJob(job);
        results.push(r);
        process.stdout.write(`  done   ${r.name}  (${r.kb} KB)\n`);
      } catch (err) {
        failures.push({ name: job.name, error: err.message });
        process.stdout.write(`  FAIL   ${job.name}  ${err.message}\n`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`\n${results.length} generated, ${failures.length} failed.`);
  if (failures.length) {
    for (const f of failures) console.log(`  ${f.name}: ${f.error}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
