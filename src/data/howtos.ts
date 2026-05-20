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
    slug: 'nano-banana-pro-photo-editing',
    image: '/Images/howto-nano-banana-pro.jpg',
    imageAlt:
      'A designer’s hand rests on a paper sketchbook beside a phone showing the same logo rendered cleanly, in warm side light.',
    category: 'Image editing',
    tone: 'orange',
    title: 'Edit photos like a pro with Nano Banana Pro',
    deck: 'A practical pass through Gemini 3 Pro’s new image model: sketch to render, relight, re-angle, upscale, and localise text inside the frame.',
    date: 'December 18, 2025',
    dateISO: '2025-12-18',
    readingTime: '7 min read',
    author: 'Cyril Drouin',
    metaTitle: 'How to Edit Photos with Nano Banana Pro (Gemini 3 Pro) | hubStudio',
    metaDescription:
      'A practical how-to on Nano Banana Pro inside Gemini 3 Pro: turning sketches into renders, relighting scenes, upscaling, and localising text inside images.',
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
      'AI search prioritises video, tools, and structured content. A practical guide for content teams shifting from text-heavy SEO pages to AI-ready systems.',
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
