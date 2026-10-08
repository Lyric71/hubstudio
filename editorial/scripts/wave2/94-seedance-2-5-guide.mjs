// editorial/scripts/wave2/94-seedance-2-5-guide.mjs
export default {
  id: "94",
  date: "2026-11-11",
  family: "engine",
  template: "howto",
  brief: true,
  status: "not_started",
  cluster: "Engine guides",
  contentType: "Engine guide",
  readerStage: "practitioner",
  slug: "seedance-2-5-guide",
  h1: "Seedance 2.5 for product and social video",
  query: "seedance prompts",
  secondary: [
    "seedance 2.5 prompt guide",
    "seedance 2.5 reference video",
    "seedance 2.0 vs 2.5",
    "seedance multi shot prompt",
  ],
  verdict:
    "Reseller and aggregator platforms rank with prompt formulas that mostly agree (subject, action, scene, camera, audio, under a hundred words) but cite nothing from ByteDance; none handles references in volume or the 30-second ceiling for product work.",
  words: 1800,
  angle:
    "Seedance 2.5 is the engine for long, referenced clips: up to 30 seconds, and in the app up to 30 pictures, 10 clips and 2 sound files. That changes the prompt: bind the references first, then direct time shot by shot. From ByteDance's own documentation, applied to products, with 1.0 Pro Fast and 2.0 placed beside it.",
  mustInclude: [
    "What Seedance 2.5 is and what changed from 2.0, from ByteDance's own pages (Seed, Volcano Engine or BytePlus model docs, Chinese-language first)",
    "The three Seedance engines in the app, per the help center: 1.0 Pro Fast (2 to 12 seconds, start image, no sound); 2.0 (4 to 15 seconds, up to 4K, start and last frame or references up to 9 pictures, 3 clips, 1 sound file); 2.5 (4 to 30 seconds, 480p to 1080p, start and last frame or references up to 30 pictures, 10 clips, 2 sound files, Adaptive shape)",
    "Prompt structure per ByteDance's docs, and how its docs say to refer to each reference in the prompt",
    "Long clips: a clip over 15 seconds can time out after being billed, and the form warns; when to split instead",
    "Three worked prompts: a product reference turntable, a multi-shot social ad, a UGC-style vertical",
    "Failure modes and fixes: rushed motion from a second action, packaging drift, conflicting references",
  ],
  doNot: [
    "Cite a reseller or an aggregator",
    "Use any app limit not in the help center, or any model capability not on ByteDance's pages",
    "Print a price",
    "Use an em dash or Han characters (romanize Chinese source names)",
  ],
  stats: [
    "Model capabilities and prompt guidance: ByteDance Seed pages and Volcano Engine or BytePlus model docs",
    "App limits: create-a-video.md",
  ],
  assets: [
    "Three-engine table: length, resolution, inputs, sound",
    "Prompt anatomy with reference binding",
    "Three prompt blocks",
  ],
  links: [
    ["Kling 3.0 product video guide", "/resources/how-to/kling-3-product-video-guide"],
    ["Veo 3.1 Fast guide", "/resources/how-to/veo-3-1-fast-guide"],
    ["vertical video ad from a product image", "/resources/how-to/vertical-video-ad-from-product-image"],
    ["engines page", "/app/engines"],
    ["AI video production", "/solutions/ai-production/video"],
  ],
  seoTitle: "Seedance 2.5 Prompts for Product and Social Video",
  seoDesc:
    "How to prompt Seedance 2.5: reference binding, shot-by-shot timing up to 30 seconds, sound, and where 1.0 Pro Fast and 2.0 fit, with three examples.",
  faqs: [
    "How do I write a Seedance prompt?",
    "What is new in Seedance 2.5?",
    "How long can a Seedance 2.5 video be?",
    "How many reference images can Seedance use?",
    "Seedance 2.0 or 2.5: which should I use?",
    "Does Seedance generate sound?",
  ],
  cta: "Create your account",
  notes: "ByteDance's own documentation only. Seedance 1.0 Pro Fast, 2.0 and 2.5 are in the app.",
};
