// editorial/scripts/wave2/100-wan-3-guide.mjs
export default {
  id: "100",
  date: "2026-11-19",
  family: "engine",
  template: "howto",
  brief: true,
  status: "not_started",
  cluster: "Engine guides",
  contentType: "Engine guide",
  readerStage: "practitioner",
  slug: "wan-3-guide",
  h1: "Wan 3.0 for product and social video",
  query: "wan 3.0 prompts",
  secondary: [
    "wan 3.0 prompt guide",
    "wan 3.0 reference video",
    "wan 3.0 30 second video",
    "wan 3.0 first and last frame",
  ],
  verdict:
    "Model resellers and aggregators rank, several restating early-access figures (30 seconds, up to 20 references) with no link to Alibaba; their prompt advice is sound (references first, a timed shot list, sound in the prompt) but none applies it to products or says where long clips fail.",
  words: 1800,
  angle:
    "Wan 3.0 runs long: 2 to 30 seconds in the app, fed with pictures, clips and a sound file. A 30-second prompt directs time, not a picture. But it is among the slower engines, and a long clip can time out after billing. The guide: when to go long, how to time the shot list, when to cut it in two. From Alibaba's own documentation.",
  mustInclude: [
    "What Wan 3.0 is, from Alibaba's own pages (Tongyi Wanxiang and Alibaba Cloud Model Studio docs, Chinese-language first)",
    "In the app, per the help center: 2 to 30 seconds; 480p, 720p or 1080p; no sound switch; a start and last frame, or references up to 10 pictures, 5 clips and 1 sound file; the Adaptive shape that follows what you attach",
    "Timing: Wan 3.0 is among the slower engines, so keep its clips short; a clip over 15 seconds can fail after being billed, and the form warns",
    "Prompt structure for long clips: references bound first, global rules, a timed shot list, sound lines",
    "Three worked prompts: a 6-second product loop, a 15-second social ad, a 30-second sequence with the timeout risk stated",
  ],
  doNot: [
    "Cite reseller or aggregator limits: the app's limits come from the help center, the model's from Alibaba",
    "Name a reseller",
    "Print a price",
    "Use an em dash or Han characters (romanize Chinese source names)",
  ],
  stats: [
    "Alibaba Cloud Model Studio and Tongyi Wanxiang docs for capabilities, sound behavior and prompt guidance",
    "App limits: create-a-video.md",
  ],
  assets: [
    "Settings table in the app",
    "Timed shot-list template",
    "Three prompt blocks",
  ],
  links: [
    ["Seedance 2.5 guide", "/resources/how-to/seedance-2-5-guide"],
    ["Kling 3.0 product video guide", "/resources/how-to/kling-3-product-video-guide"],
    ["product video with generated sound", "/resources/how-to/product-video-with-sound"],
    ["engines page", "/app/engines"],
    ["short video service", "/services/design/short-video"],
  ],
  seoTitle: "Wan 3.0 Prompts for Product and Social Video",
  seoDesc:
    "How to prompt Wan 3.0 for product video: references first, a timed shot list up to 30 seconds, sound lines, and when a long clip should be split.",
  faqs: [
    "How do I write a Wan 3.0 prompt?",
    "How long can a Wan 3.0 video be?",
    "Can Wan 3.0 use reference images and video?",
    "Does Wan 3.0 generate sound?",
    "Why does my Wan 3.0 render time out?",
    "Is Wan 3.0 good for product videos?",
  ],
  cta: "Create your account",
  notes: "Alibaba's own docs only. Wan 3.0 is in the app. Answer the sound FAQ from Alibaba's docs plus the app's no-switch fact.",
};
