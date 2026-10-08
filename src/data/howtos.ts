/**
 * How-to guides: single source of truth for the /resources/how-to index and
 * every guide page. Each guide page imports HowtoLayout and passes its slug;
 * the layout reads meta from here. Order: newest first.
 */

export type HowtoTone = 'orange' | 'navy';

export interface Howto {
  /** URL segment under /resources/how-to/ */
  slug: string;
  /** Short topic label shown as the eyebrow / card tag. */
  category: string;
  /** Accent treatment for the card tag and hero rule. */
  tone: HowtoTone;
  /** On-page H1 and card headline. */
  title: string;
  /** One-line standfirst under the title. */
  deck: string;
  /** Human-readable publish date. */
  date: string;
  /** ISO publish date for schema + <time>. */
  dateISO: string;
  /** ISO last-modified date for schema; falls back to dateISO when unset. */
  dateModifiedISO?: string;
  /** e.g. "8 min read" */
  readingTime: string;
  author: string;
  /** <title> for the guide page. */
  metaTitle: string;
  metaDescription: string;
  /** Hero / card image path under /public. */
  image: string;
  /** Descriptive alt text for the image. */
  imageAlt: string;
}

export const howtos: Howto[] = [
  {
    slug: 'product-photo-to-lifestyle-image',
    image: '/Images/howto-product-photo-to-lifestyle-image.webp',
    imageAlt:
      'An amber dropper bottle with a blank cream label stands on a pale limestone shelf in morning window light, in front of a taped print of the same bottle shot on white.',
    category: 'Image editing',
    tone: 'orange',
    title: 'How to turn a product photo into a lifestyle image',
    deck: 'A plain packshot can become a believable scene without a reshoot. The method: lock the product, brief the edit, run several engines, check every result.',
    date: 'October 8, 2026',
    dateISO: '2026-10-08',
    readingTime: '11 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to turn a product photo into a lifestyle image | hubStudio',
    metaDescription:
      'Turn a supplier packshot into a believable lifestyle scene without a reshoot: what stays fixed, the brief, several engines, the fixes and a QA list.',
  },
  {
    slug: 'ai-white-background-packshot',
    image: '/Images/howto-ai-white-background-packshot.webp',
    imageAlt:
      'A hand nudges an amber dropper bottle with a blank label into place on a white paper sweep in a cluttered studio corner, a phone on a tripod behind it.',
    category: 'Image generation',
    tone: 'navy',
    title: 'AI White-Background Product Photos That Pass',
    deck: 'Amazon, Google and Shopify set different main-image rules. One AI packshot can clear all three if you build it to the overlap.',
    date: 'October 8, 2026',
    dateISO: '2026-10-08',
    readingTime: '10 min read',
    author: 'Cyril Drouin',
    metaTitle: 'AI White-Background Product Photos That Pass | hubStudio',
    metaDescription:
      'Make an AI product photo on a white background that passes Amazon, Google and Shopify: the rules side by side, the method in the app, the checks.',
  },
  {
    slug: 'long-video-to-shorts',
    image: '/Images/howto-long-video-to-shorts.webp',
    imageAlt:
      'A young editor seen from behind holds a phone showing a tight vertical crop of a man speaking, while the same interview plays wide and out of focus on the monitor behind it, in warm window light.',
    category: 'Short video',
    tone: 'orange',
    title: 'Turn a long video into Shorts, Reels and TikToks',
    deck: 'One interview, webinar or podcast can fill a week of vertical clips. How to pick the moments, then hook, frame, caption and post each one.',
    date: 'October 8, 2026',
    dateISO: '2026-10-08',
    readingTime: '9 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Turn a long video into Shorts, Reels and TikToks | hubStudio',
    metaDescription:
      'Cut an interview, webinar or podcast into vertical clips: the moments, the hook, 9:16 framing, word-by-word captions and each platform\'s length limit.',
  },
  {
    slug: 'vertical-video-ad-from-product-image',
    image: '/Images/howto-vertical-video-ad-from-product-image.webp',
    imageAlt:
      'A white serum bottle on a travertine block in low window light, beside a phone in a tripod clamp, a tall print of the same bottle taped to a worn oak table, and tracing paper ruled with rectangles.',
    category: 'Video generation',
    tone: 'navy',
    title: 'How to make an AI video ad from a product image',
    deck: 'One product still, one 9:16 ad: the frame, the camera move, sound, a length each placement takes, an end card, and each network\'s own specs.',
    date: 'October 8, 2026',
    dateISO: '2026-10-08',
    readingTime: '12 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to make an AI video ad from a product image | hubStudio',
    metaDescription:
      'Make a 9:16 AI video ad from one product image: start frame, camera move, sound, length, end card, plus Reels, TikTok and Shorts ad specs.',
  },
  {
    slug: 'consistent-character-ai-images-video',
    image: '/Images/howto-consistent-character-ai-images-video.webp',
    imageAlt:
      'An art director\'s hand holds a loupe over a printed contact sheet of portraits of the same young woman in a rust overshirt, on a worn wooden desk in low window light.',
    category: 'Image and video generation',
    tone: 'orange',
    title: 'How to Keep a Consistent Character in AI Images',
    deck: 'One face in every image and clip: build a reference sheet, reuse a fixed description, feed references within each engine\'s limit, then check for drift.',
    date: 'October 8, 2026',
    dateISO: '2026-10-08',
    readingTime: '11 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to Keep a Consistent Character in AI Images | hubStudio',
    metaDescription:
      'Keep a mascot, model or presenter the same across AI images and video: reference sheet, fixed descriptor, reference limits per engine, drift check.',
  },
  {
    slug: 'chatgpt-image-2-product-prompting-guide',
    image: '/Images/howto-chatgpt-image-2-product-prompting-guide.webp',
    imageAlt:
      'A hand holding a red pencil beside three printed proofs of an amber dropper bottle on a worn wooden table, one label circled in red, with the real bottle standing next to the prints.',
    category: 'Image generation',
    tone: 'navy',
    title: 'ChatGPT Image 2 Prompts for Product Images',
    deck: 'What OpenAI documents for ChatGPT Image 2, what our six test runs showed, and the product prompts that hold up for packshots, scenes and labels.',
    date: 'October 8, 2026',
    dateISO: '2026-10-08',
    readingTime: '11 min read',
    author: 'Cyril Drouin',
    metaTitle: 'ChatGPT Image 2 Prompts for Product Images | hubStudio',
    metaDescription:
      'OpenAI\'s documented specs for ChatGPT Image 2, a prompt formula for packshots, lifestyle shots and text on pack, six logged test runs and a QA list.',
  },
  {
    slug: 'readable-text-in-ai-images',
    image: '/Images/howto-readable-text-in-ai-images.webp',
    imageAlt:
      'A production lead leans over a wooden studio table in warm window light, checking a large printed poster proof through a brass loupe, with a ruler, a red pencil and an enamel mug beside her.',
    category: 'Image generation',
    tone: 'orange',
    title: 'AI image with text: how to make it readable',
    deck: 'Engines can now letter a poster or a label. Here\'s when to let them, when to set the words yourself, and how to proof them.',
    date: 'October 8, 2026',
    dateISO: '2026-10-08',
    readingTime: '9 min read',
    author: 'Cyril Drouin',
    metaTitle: 'AI image with text: how to make it readable | hubStudio',
    metaDescription:
      'Text inside an AI image: when the engine can render it, when to add it in an editor, prompt blocks, a proofing checklist and what each maker documents.',
  },
  {
    slug: 'nano-banana-prompting-guide',
    image: '/Images/howto-nano-banana-prompting-guide.webp',
    imageAlt:
      'Over the shoulder of a creative director in a dark studio, a monitor shows a short typed prompt beside the product photograph the model rendered from it.',
    category: 'Image generation',
    tone: 'navy',
    title: 'Prompt Nano Banana like a creative director',
    deck: 'Google stress-tested its own image models for weeks and published what it learned. Here is the working version: the specs that matter, the five frameworks, and the layer that has to sit around the prompt before anything ships.',
    date: 'August 12, 2026',
    dateISO: '2026-08-12',
    readingTime: '9 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to Prompt Nano Banana 2 and Nano Banana Pro | hubStudio',
    metaDescription:
      'Google’s prompting frameworks for Nano Banana 2 and Nano Banana Pro, rebuilt as a working method: specs, formulas, and the QA a brand asset needs.',
  },
  {
    slug: 'nano-banana-pro-photo-editing',
    image: '/Images/howto-nano-banana-pro.jpg',
    imageAlt:
      'A designer’s hand rests on a paper sketchbook beside a phone showing the same logo rendered cleanly, in warm side light.',
    category: 'Image editing',
    tone: 'orange',
    title: 'Edit photos like a pro with Nano Banana Pro',
    deck: 'A practical pass through Gemini 3 Pro’s new image model: sketch to render, relight, re-angle, upscale, and localize text inside the frame.',
    date: 'December 18, 2025',
    dateISO: '2025-12-18',
    dateModifiedISO: '2026-10-08',
    readingTime: '7 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to Edit Photos with Nano Banana Pro (Gemini 3 Pro) | hubStudio',
    metaDescription:
      'A practical how-to on Nano Banana Pro inside Gemini 3 Pro: turning sketches into renders, relighting scenes, upscaling, and localizing text inside images.',
  },
  {
    slug: 'notebooklm-decks-and-infographics',
    image: '/Images/howto-notebooklm-decks-infographics.jpg',
    imageAlt:
      'A marketer at a studio table holds up one slide from a printed deck, with annotated sticky notes and a laptop showing a notebook-style interface.',
    category: 'Decks & infographics',
    tone: 'navy',
    title: 'NotebookLM for decks and infographics, shipped on brand',
    deck: 'Turn briefs, URLs, and transcripts into shippable decks and infographics, with the QA loop and brand layer that keep them trustworthy.',
    date: 'December 14, 2025',
    dateISO: '2025-12-14',
    readingTime: '8 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to Use NotebookLM for Decks and Infographics On Brand | hubStudio',
    metaDescription:
      'A step-by-step guide to NotebookLM Studio for shippable decks and infographics: source packs, prompt patterns, brand templates, and a QA loop.',
  },
  {
    slug: 'ai-search-content-systems-win',
    image: '/Images/howto-ai-search-content-systems.jpg',
    imageAlt:
      'A person works at a sunlit desk, hands on the keyboard, looking at a results page where a small video tile sits above the blue links.',
    category: 'AI Search',
    tone: 'orange',
    title: 'Move from SEO pages to AI-ready content systems',
    deck: 'AI search rewrites the rules. A working guide to the content formats that earn visibility now, and how to build the systems behind them.',
    date: 'December 7, 2025',
    dateISO: '2025-12-07',
    readingTime: '6 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to Build AI-Ready Content Systems for AI Search | hubStudio',
    metaDescription:
      'AI search prioritizes video, tools, and structured content. A practical guide for content teams shifting from text-heavy SEO pages to AI-ready systems.',
  },
];

/** Look up a single guide by slug. Throws at build time if missing. */
export function getHowto(slug: string): Howto {
  const found = howtos.find((h) => h.slug === slug);
  if (!found) throw new Error(`Unknown how-to slug: ${slug}`);
  return found;
}

/** The next `count` guides after the given slug, wrapping around the list. */
export function relatedHowtos(slug: string, count = 3): Howto[] {
  const index = howtos.findIndex((h) => h.slug === slug);
  const rest = [...howtos.slice(index + 1), ...howtos.slice(0, index)];
  return rest.slice(0, count);
}
