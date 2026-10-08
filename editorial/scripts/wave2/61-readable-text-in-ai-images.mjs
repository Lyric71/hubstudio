// editorial/scripts/wave2/61-readable-text-in-ai-images.mjs
export default {
  id: '61',
  date: '2026-10-08',
  family: 'howto',
  template: 'howto',
  brief: true,
  status: 'not_started',
  cluster: 'How-to',
  contentType: 'How-to guide',
  readerStage: 'practitioner',
  slug: 'readable-text-in-ai-images',
  h1: 'How to make an AI image with text people can read',
  query: 'AI image with text',
  secondary: [
    'AI image generator text accurate',
    'how to add text to AI images',
    'AI poster with readable text',
  ],
  verdict:
    'Tool landing pages, vendor blogs and forum threads rank; none gives a rule for when to render text in the image and when to overlay it, none cites what the engine makers themselves document, and none carries a proofing checklist.',
  words: 1500,
  angle:
    'Text inside a generated image (a poster headline, a label, a sign) used to come out garbled; current engines render it, within limits their makers state themselves. When to render text in the image and when to add it afterwards in the Image editor (text, logo, watermark) for exact brand type, legal lines and translations. Engine claims only from the makers\' own documentation (OpenAI, Google, Black Forest Labs, ByteDance) for engines offered in the app. Localizing text for other languages as a use case, global.',
  mustInclude: [
    'A decision table: render in the image against overlay in the Image editor',
    'Prompt example blocks quoting the exact text, a font description and the placement',
    'A proofing checklist: spelling, kerning and spacing, numbers, legal lines, logo, size at final placement',
    'A table of which engines in the app document text rendering, with the maker caveat and the source',
    'The Legible text inside an image skill from the Catalog and the Image editor Text and Picture panels, described only from src/content/help',
    'Localizing the text for other markets as a use case, with the maker caveat on translation',
  ],
  doNot: [
    'Name or allude to any competitor; engine makers offered inside the app are not competitors',
    'Print any price, rate or amount, hubStudio or engine maker',
    'Claim the Image editor loads a custom brand font: the help center does not document it',
    'Rank engines on text quality: report what each maker documents, nothing more',
    'Say credits; the app runs on a prepaid balance',
  ],
  stats: [
    'OpenAI prompting guide, April 21, 2026: put literal text in quotes or ALL CAPS, spell tricky words letter by letter, medium or high quality for small text',
    'OpenAI image generation guide, read October 8, 2026: GPT Image models can still struggle with precise text placement and clarity',
    'Google DeepMind Nano Banana Pro model page, read October 8, 2026: may struggle with accurate spelling; translation may struggle with grammar, spelling, cultural nuances or idiomatic phrases',
    'Google Gemini API image generation documentation, last updated October 6, 2026: 15 languages listed for best performance',
    'ByteDance Seed, July 8, 2026: Seedream 5.0 Pro renders over ten languages, still room to improve in finer-grained text rendering',
  ],
  assets: [
    'Hero image: public/Images/howto-readable-text-in-ai-images.webp',
    'Existing localized captures only: /Images/help/image-editor-draw.webp (a caption on a picture) if the publish step embeds one',
  ],
  links: [
    ['How-to guides', '/resources/how-to'],
    ['Assets Library page', '/app/library'],
    ['Image editor page', '/app/image-tools'],
    ['engines page', '/app/engines'],
    ['ad creative design service', '/services/design/ad-creative'],
    ['transcreation article', '/resources/insights/transcreation-as-a-production-line'],
  ],
  seoTitle: 'AI image with text: how to make it readable',
  seoDesc:
    'Text inside an AI image: when the engine can render it, when to add it in an editor, prompt blocks, a proofing checklist and what each maker documents.',
  faqs: [
    'Can AI image generators spell text correctly?',
    'Which AI image generator is best for text?',
    'How do I get exact words into an AI image?',
    'Should I add text to an AI image afterwards instead?',
    'Can AI translate the text inside an image?',
    'Can I use my brand font in an AI image?',
  ],
  cta: 'Create your account',
  notes:
    'Working H1 "How to put readable text inside an AI image" amended so the H1 carries the primary query (SPEC.md, SEO). Brief link "/app/library with the Image editor" amended: the Image editor has its own page at /app/image-tools; both are linked. The Catalog skill is named "Legible text inside an image" in the help center, so the body uses that name.',
};
