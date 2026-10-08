// editorial/scripts/wave2/69-stock-photos-vs-ai-images.mjs
export default {
  id: "69",
  date: "2026-10-15",
  family: "comparison",
  template: "insight",
  brief: true,
  status: "not_started",
  cluster: "Comparisons",
  contentType: "Comparison",
  readerStage: "budget-holder",
  slug: "stock-photos-vs-ai-images",
  h1: "Stock photos or AI-generated images for product content: cost, rights, speed",
  query: "stock photos vs AI images",
  secondary: [
    "are AI generated images copyrighted",
    "stock photo license for commercial use",
    "can I use AI images for my products",
    "AI product images vs stock photography cost",
  ],
  verdict:
    "PARTISAN. Nearly every ranking page is written by a generator or a stock seller arguing its own side; they compare generic website imagery, not product content, and none sets out the rights position from the copyright office's own text or the fact that neither route shows your actual product.",
  words: 2000,
  angle:
    "For product content the real question is not stock or AI but whether the picture has to show your product. Stock cannot show your SKU at all; generation from a text prompt cannot either, but editing your own product photo into a new scene can. This page compares the three ways of working (licensed stock, generated from words, generated from your own product photo) on cost structure, rights, exclusivity, speed and fidelity, without naming any library or tool.",
  mustInclude: [
    "Decision table in the first screen: ways of working (licensed stock, text-to-image, editing your own product photo) against cost structure, rights, exclusivity, speed, product fidelity",
    "Stock licensing explained at category level: royalty-free versus rights-managed, standard versus extended licenses, editorial-only images, indemnity caps, no exclusivity on most licenses",
    "Rights in generated images from the primary text: the US Copyright Office report on copyrightability (January 2025) and the human-authorship requirement; point to the copyright and AI page",
    "Labeling: generated images may carry disclosure duties (EU AI Act labeling piece for Europe)",
    "Fidelity: a generated product must match the real one (label, color, proportions); editing your own photo keeps the product and changes the scene",
    "In the hubStudio app: Image studio text to image or Edit an image with up to four source pictures (engine dependent), the price shown before every run, a failed run never charged, every render in History with its prompt and engine",
    "When stock still wins: real events, real places, documentary images, and anything that must be a photograph of the real world",
  ],
  doNot: [
    "Name any stock library, generator, agency or competitor",
    "Quote a named library's price; category-level ranges only, attributed to category and date",
    "Print any hubStudio amount or per-image rate, or call the money anything but a prepaid balance in real currency",
    "State that AI images cannot be copyrighted in all cases; say what the Copyright Office says, as production practice, not legal advice",
    "Use an em dash",
  ],
  stats: [
    "Stock license cost bands by license type, from published price pages collected on a stated date, category level only, no vendor named; cut if no clean method",
    "US Copyright Office, Copyright and Artificial Intelligence Part 2: Copyrightability (January 2025), copyright.gov, quote the human-authorship conclusion",
    "Thaler v. Perlmutter appellate decision (2025), from the court's own opinion, only if needed",
    "Per-run price structure of the app: described, never quantified",
  ],
  assets: [
    "Decision table: way of working by criterion, five columns maximum",
    "Rights table: who owns what, exclusivity, indemnity, disclosure, by way of working",
    "Cost structure table: what you pay for (license, per run, shoot), when, and what is never charged",
  ],
  links: [
    ["Copyright and AI", "/resources/copyright-and-ai"],
    ["Shoot it or generate it", "/resources/insights/shoot-it-or-generate-it"],
    ["Product photography cost per SKU", "/resources/insights/product-photography-cost-per-sku"],
    ["EU AI Act labeling for brand content", "/resources/insights/eu-ai-act-labeling-brand-content"],
    ["Create in the hubStudio app", "/app/create"],
  ],
  seoTitle: "Stock Photos vs AI Images for Product Content",
  seoDesc:
    "Licensed stock, AI from a prompt, or AI from your own product photo: cost structure, rights, exclusivity, speed and product fidelity, compared.",
  faqs: [
    "Is it cheaper to use AI images or stock photos?",
    "Can I copyright an AI-generated image?",
    "Can I use AI-generated images commercially?",
    "Can AI show my actual product?",
    "Are stock photos exclusive to my brand?",
    "Do I have to label AI-generated product images?",
  ],
  cta: "Create your account",
  notes:
    "Comparison: ways of working only, no named company. Rights section carries the not-legal-advice line.",
};
