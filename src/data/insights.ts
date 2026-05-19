/**
 * Insights: single source of truth for the /resources/insights index and
 * every article page. Each article page imports ArticleLayout and passes its
 * slug; the layout reads meta from here. Order: newest first.
 */

export type InsightTone = 'orange' | 'navy';

export interface Insight {
  /** URL segment under /resources/insights/ */
  slug: string;
  /** Short topic label shown as the eyebrow / card tag. */
  category: string;
  /** Accent treatment for the card tag and hero rule. */
  tone: InsightTone;
  /** On-page H1 and card headline. */
  title: string;
  /** One-line standfirst under the title. */
  deck: string;
  /** Human-readable publish date. */
  date: string;
  /** ISO publish date for schema + <time>. */
  dateISO: string;
  /** e.g. "6 min read" */
  readingTime: string;
  author: string;
  /** <title> for the article page. */
  metaTitle: string;
  metaDescription: string;
  /** Hero / card image path under /public. */
  image: string;
  /** Descriptive alt text for the image. */
  imageAlt: string;
}

export const insights: Insight[] = [
  {
    slug: 'ai-search-content-systems',
    image: '/Images/insight-ai-search-content-systems.webp',
    imageAlt:
      'A flattened stack of cream paper beside a single upright folded paper form casting a long shadow on raw concrete.',
    category: 'AI Search',
    tone: 'orange',
    title: 'If your content can be summarized, it will lose',
    deck: 'Why AI search is forcing a new content system, and what content leaders should build instead.',
    date: 'December 24, 2025',
    dateISO: '2025-12-24',
    readingTime: '6 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Why AI Search Is Forcing a New Content System | hubStudio',
    metaDescription:
      'AI search is rewriting SEO. As Google prioritises video, tools, and structured content, brands must shift from text-heavy pages to AI-ready content systems.',
  },
  {
    slug: 'luxury-ai-content-systems',
    image: '/Images/insight-luxury-ai-content-systems.webp',
    imageAlt:
      'A matte navy ovoid resting on a cream plinth, half-revealed from behind a draped panel of cream linen.',
    category: 'Luxury & AI',
    tone: 'navy',
    title: "Luxury's quiet AI phase is ending",
    deck: 'Content systems are the real test of creative intelligence, and luxury will move on its own terms.',
    date: 'December 24, 2025',
    dateISO: '2025-12-24',
    readingTime: '6 min read',
    author: 'Cyril Drouin',
    metaTitle: "Luxury's Quiet AI Phase Is Ending | hubStudio",
    metaDescription:
      'Luxury brands are not slow on AI, they are selective. The real test is building AI-native content systems that protect brand equity, creativity, and control.',
  },
  {
    slug: 'promptable-3d-content-operations',
    image: '/Images/insight-promptable-3d-content-operations.webp',
    imageAlt:
      'A solid burnt-orange faceted polyhedron beside a calm grid of flat cream paper cut-outs of the same shape.',
    category: '3D & Spatial',
    tone: 'orange',
    title: 'Promptable 3D is here, and content operations are about to go spatial',
    deck: 'When 3D becomes a reusable master asset, the winners build the QA and creative direction that scale.',
    date: 'December 13, 2025',
    dateISO: '2025-12-13',
    readingTime: '8 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Promptable 3D and the Spatial Shift in Content Operations | hubStudio',
    metaDescription:
      'Promptable 3D shifts production from one-off assets to reusable 3D objects. The winners build the QA and creative direction that scale.',
  },
  {
    slug: 'where-language-ai-delivers',
    image: '/Images/insight-where-language-ai-delivers.webp',
    imageAlt:
      'A burnt-orange block fitted precisely into a deep navy recess among carved cream plaster blocks.',
    category: 'Language AI',
    tone: 'navy',
    title: 'Beyond the hype: where language AI actually delivers',
    deck: 'Language models were oversold as universal solutions. Pointed at the right work, they transform content teams.',
    date: 'December 7, 2025',
    dateISO: '2025-12-07',
    readingTime: '7 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Where Language AI Actually Delivers for Content Teams | hubStudio',
    metaDescription:
      'Language models have been oversold as universal solutions. Applied to the right creative challenges, AI transforms content teams through focused execution.',
  },
  {
    slug: 'ai-sound-for-video',
    image: '/Images/insight-ai-sound-for-video.webp',
    imageAlt:
      'Concentric rings of cream paper rippling outward from a small navy sphere, like a sound wave frozen in place.',
    category: 'AI Video',
    tone: 'orange',
    title: 'Turning AI video up to 10: how AI video learns to sound alive',
    deck: 'AI video looks sharp but often sounds flat. New audio models let us add Foley-grade sound to AIGC at scale.',
    date: 'November 21, 2025',
    dateISO: '2025-11-21',
    readingTime: '6 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Foley-Grade Audio for AI Video at Scale | hubStudio',
    metaDescription:
      'AI video looks good but often sounds flat. New AI sound models let hubStudio add Foley-grade audio to AIGC at production scale.',
  },
  {
    slug: 'geo-vs-seo',
    image: '/Images/insight-geo-vs-seo.webp',
    imageAlt:
      'Scattered cream pebbles and a single navy stone on a plinth, joined by one burnt-orange line drawn in sand.',
    category: 'Search & GEO',
    tone: 'navy',
    title: "The search revolution you're not preparing for",
    deck: 'Traditional SEO ranked for clicks. GEO optimises for AI recommendation and trust.',
    date: 'November 17, 2025',
    dateISO: '2025-11-17',
    readingTime: '6 min read',
    author: 'Cyril Drouin',
    metaTitle: 'GEO vs SEO: How AI Search Rewrites the Rules | hubStudio',
    metaDescription:
      'Google search is fading fast. ChatGPT, Perplexity, and AI Overviews now control visibility. GEO optimises for AI recommendation and trust.',
  },
  {
    slug: 'three-years-of-genai-ecommerce',
    image: '/Images/insight-three-years-of-genai-ecommerce.webp',
    imageAlt:
      'Three plinths in a row holding a raw clay lump, a half-formed navy shape, and a finished burnt-orange object.',
    category: 'eCommerce',
    tone: 'orange',
    title: 'Three years of GenAI: how eCommerce transformed',
    deck: 'GenAI democratised the tools but not the expertise, and creative intelligence matters more than ever.',
    date: 'November 16, 2025',
    dateISO: '2025-11-16',
    readingTime: '7 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Three Years of GenAI: How eCommerce Transformed | hubStudio',
    metaDescription:
      'Three years after ChatGPT launched, eCommerce content production transformed completely. GenAI democratised the tools but not the expertise.',
  },
  {
    slug: 'aigc-adoption-curve',
    image: '/Images/insight-aigc-adoption-curve.webp',
    imageAlt:
      'An ascending ramp of stacked cream plaster blocks rising to a single burnt-orange block at the top.',
    category: 'Production',
    tone: 'navy',
    title: 'The AIGC adoption curve: why creative leaders are rethinking production',
    deck: 'How brands produce 7x more content at 60% of previous budgets, without compromising quality.',
    date: 'November 10, 2025',
    dateISO: '2025-11-10',
    readingTime: '7 min read',
    author: 'Cyril Drouin',
    metaTitle: 'The AIGC Adoption Curve for Content Leaders | hubStudio',
    metaDescription:
      "Traditional production can't keep pace with modern marketing. How brands use AIGC strategy to produce 7x more content at 60% of previous budgets.",
  },
  {
    slug: 'without-creatives-aigc-is-nothing',
    image: '/Images/insight-without-creatives-aigc-is-nothing.webp',
    imageAlt:
      'A human hand placing a burnt-orange block among an arrangement of cream and navy blocks on concrete.',
    category: 'Creative Strategy',
    tone: 'orange',
    title: 'Without creatives, AIGC is nothing',
    deck: 'Platforms provide the tools. Creatives provide the meaning. Creative strategy always comes first.',
    date: 'November 7, 2025',
    dateISO: '2025-11-07',
    readingTime: '5 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Without Creatives, AIGC Is Nothing | hubStudio',
    metaDescription:
      'Platforms provide the tools. Creatives provide the meaning. AI can format and publish instantly, but it cannot decide what truly matters.',
  },
  {
    slug: 'adobe-ai-mistake',
    image: '/Images/insight-adobe-ai-mistake.webp',
    imageAlt:
      'A toppled cream plaster classical column fragment beside an upright, clean burnt-orange monolithic block.',
    category: 'Industry',
    tone: 'navy',
    title: "Why Adobe didn't miss the AI revolution, it just chose the wrong side",
    deck: 'Adobe chose aggregation over innovation. AI-native production changed the architecture of content creation.',
    date: 'October 14, 2025',
    dateISO: '2025-10-14',
    readingTime: '6 min read',
    author: 'Cyril Drouin',
    metaTitle: 'Adobe, AI, and the End of the Creative Suite Era | hubStudio',
    metaDescription:
      'Adobe chose aggregation over innovation. AI-native production rebuilt content creation from first principles, and the architecture has shifted.',
  },
];

/** Look up a single insight by slug. Throws at build time if missing. */
export function getInsight(slug: string): Insight {
  const found = insights.find((i) => i.slug === slug);
  if (!found) throw new Error(`Unknown insight slug: ${slug}`);
  return found;
}

/** The next `count` insights after the given slug, wrapping around the list. */
export function relatedInsights(slug: string, count = 3): Insight[] {
  const index = insights.findIndex((i) => i.slug === slug);
  const rest = [...insights.slice(index + 1), ...insights.slice(0, index)];
  return rest.slice(0, count);
}
