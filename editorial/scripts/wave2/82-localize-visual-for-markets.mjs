// editorial/scripts/wave2/82-localize-visual-for-markets.mjs
export default {
  id: "82",
  date: "2026-10-29",
  family: "howto",
  template: "howto",
  brief: true,
  status: "not_started",
  cluster: "How-to",
  contentType: "How-to guide",
  readerStage: "practitioner",
  slug: "localize-visual-for-markets",
  h1: "How to localize one visual for several markets",
  query: "localize images for different markets",
  secondary: [
    "image localization",
    "translate text in image",
    "adapt ad creative for different countries",
    "localize product images for international markets",
  ],
  verdict:
    "CONCEPTUAL. Localization vendors and image-translation tools rank with 'why it matters' essays (colors, symbols, right-to-left layouts) and a pitch; none gives a production method: what to keep in a master, what to render per market, and how to keep text editable.",
  words: 1700,
  angle:
    "Build the visual to be localized before you make it: a clean master with no words in it, text added per market as an editable layer, and casting or setting changed only where the market needs it. This guide is the production method, shown in the hubStudio app, with the cases where rendering the text into the image is the better call.",
  mustInclude: [
    "The decision in the first screen: text as an overlay versus text rendered in the image, as a table (edit cost, legibility, languages, when to use)",
    "The clean master: render or edit without words; leave space for the longest language (French and German run longer than English, Chinese shorter): say so as a layout rule, not a statistic",
    "Overlay route: the free Image editor's Text panel (font, size, outline or soft shadow) per market, saved as a copy whose name you set per market",
    "Rendered route: the ChatGPT Image engines write legible text inside the picture; the Legible text inside an image skill shapes Improve with AI; check every character",
    "Casting and setting: Edit an image with source pictures to change the scene or the person per market while keeping the product",
    "Legal lines that change by market (language requirements, retouching labels, price-claim wording) as a pointer to the Europe localization piece",
    "Keep each market's versions under one Campaign; send each version to that market's reviewer through Validation",
    "Fonts that carry accents and non-Latin scripts: check diacritics and Chinese characters render before saving",
  ],
  doNot: [
    "Name any localization vendor, image-translation tool or competitor",
    "Print character-expansion percentages unless a dated, methodical source is found; otherwise state the layout rule only",
    "Print a hubStudio amount",
    "Use Han characters in the English body; describe Chinese layouts in words",
    "Use an em dash or numbered cards",
  ],
  stats: [
    "No market statistic required; any text-expansion figure needs a published source with method, or is cut",
    "App facts: create-an-image.md, assets-library.md (Image editor Text, Save), skills.md, campaigns.md, validation.md",
  ],
  assets: [
    "Overlay versus rendered table",
    "Per-market change list table: element (headline, legal line, casting, setting, product), keep or change, how",
    "Existing captures: image-editor-draw, image-editor-save",
  ],
  links: [
    ["Readable text in AI images", "/resources/how-to/readable-text-in-ai-images"],
    ["Transcreation as a production line", "/resources/insights/transcreation-as-a-production-line"],
    ["Localizing one campaign for Europe", "/resources/insights/europe-campaign-localization"],
    ["Consistent character in AI images and video", "/resources/how-to/consistent-character-ai-images-video"],
    ["Campaigns", "/app/campaigns"],
  ],
  seoTitle: "How to Localize One Visual for Several Markets",
  seoDesc:
    "Localize one visual for several markets: a clean master, text as an editable layer or rendered in, casting and setting per market, legal lines checked.",
  faqs: [
    "How do I localize an image for different countries?",
    "Should I put text in the image or add it on top?",
    "Can AI translate the text inside an image?",
    "What should change in a visual from one market to another?",
    "How do I keep localized versions organized?",
    "Do fonts support accents and Chinese characters?",
  ],
  cta: "Create your account",
  notes:
    "The Europe localization piece (id 64, October 12) publishes before this one: link it. If it is not live at drafting, the reference stays plain text per settled fallback 5.",
};
