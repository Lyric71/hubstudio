// editorial/scripts/wave2/99-flux-kontext-editing-guide.mjs
export default {
  id: "99",
  date: "2026-11-18",
  family: "engine",
  template: "howto",
  brief: true,
  status: "not_started",
  cluster: "Engine guides",
  contentType: "Engine guide",
  readerStage: "practitioner",
  slug: "flux-kontext-editing-guide",
  h1: "FLUX.1 Kontext for image editing: a working guide",
  query: "flux kontext prompts",
  secondary: [
    "flux kontext pro vs max",
    "flux kontext edit prompt examples",
    "flux kontext character consistency",
    "flux kontext change text in image",
  ],
  verdict:
    "Black Forest Labs' own prompting docs rank near the top, surrounded by node-workflow tutorials and reseller guides; none applies the maker's rules to product edits (background swaps, colorways, label text) or says how Pro and Max differ for that work.",
  words: 1800,
  angle:
    "Kontext edits by instruction: name what changes, say what stays. Its failures come from vague verbs and from asking for too much in one pass. Apply Black Forest Labs' own prompting rules to product work (background swaps, colorways, prop removal, text on packaging) in short, successive passes.",
  mustInclude: [
    "Black Forest Labs' editing prompt rules from docs.bfl.ai: be specific, state what to preserve, quote the text to change, go step by step",
    "Pro and Max as Black Forest Labs describes them",
    "In the app, per the help center: FLUX.1 Kontext Pro and Max do text to image and edit, from one source image, Standard quality, PNG or JPG; they change exactly what you name and keep the rest",
    "Five product edits with prompts: a background swap, a colorway, a removed prop, new packaging text, a relight",
    "Iterating: edit, check, edit the result again; History to reuse a prompt",
    "When another edit engine in the app fits better: several source pictures (up to four on engines that take them), or a mask on the ChatGPT Image engines",
  ],
  doNot: [
    "Cite any source but Black Forest Labs for a capability",
    "Name node tools, resellers or tool vendors",
    "Print a price",
    "Use an em dash",
  ],
  stats: [
    "BFL docs: the Kontext prompting guide and the model pages for Pro and Max",
    "App facts: create-an-image.md",
  ],
  assets: [
    "Edit prompt table: edit, weak prompt, strong prompt",
    "Pro and Max table, per Black Forest Labs",
    "Five prompt blocks",
  ],
  links: [
    ["Nano Banana Pro photo editing", "/resources/how-to/nano-banana-pro-photo-editing"],
    ["readable text in AI images", "/resources/how-to/readable-text-in-ai-images"],
    ["product photo to lifestyle image", "/resources/how-to/product-photo-to-lifestyle-image"],
    ["engines page", "/app/engines"],
    ["AI image production", "/solutions/ai-production/image"],
  ],
  seoTitle: "FLUX.1 Kontext Prompts for Image Editing",
  seoDesc:
    "How to prompt FLUX.1 Kontext Pro and Max for product edits: name the change, protect the rest, quote the text, iterate. Five worked examples.",
  faqs: [
    "How do I write a FLUX Kontext prompt?",
    "What is the difference between FLUX.1 Kontext Pro and Max?",
    "Can FLUX Kontext change text in an image?",
    "How do I keep the rest of the image unchanged in Kontext?",
    "Can FLUX Kontext change a product background?",
    "Can Kontext edit several images at once?",
  ],
  cta: "Create your account",
  notes: "Black Forest Labs' own docs only. FLUX.1 Kontext Pro and Max are in the app.",
};
