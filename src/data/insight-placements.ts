/**
 * Insight placements: the routing table between published insights and the
 * "insights layer" sections that carry them across the site.
 *
 * Permanent rule: every insight published in src/data/insights.ts shows up in
 * two places automatically. The home page takes the newest four (see
 * src/pages/index.astro), and every layer below pulls the newest articles whose
 * category matches its `categories` list. That is why selection is by category
 * and date rather than by a hand-written slug list: a new article lands on the
 * relevant pages the moment it is added to the insights array, with no page
 * edits. Use `pinned` only for an evergreen anchor a page cannot do without,
 * and keep it to one slug so new work still surfaces. Set `balance` when a
 * layer claims categories that answer different questions, so a burst of
 * articles in one category cannot push the other off the layer.
 *
 * Adding a layer to a new page: add an entry here, then render
 * <InsightsLayer placement="<key>" /> on that page. Adding a new category to
 * insights.ts means checking which layers should claim it.
 */
import { insights, type Insight } from './insights';

export interface InsightPlacement {
  /** The route that renders this layer. Kept for the record and for audits. */
  route: string;
  /** Mono eyebrow above the layer heading. */
  eyebrow: string;
  /** Heading, rendered before the serif-italic emphasis. */
  heading: string;
  /** Closing words of the heading, set in serif italic. */
  emphasis: string;
  /** One-line standfirst explaining why these articles sit on this page. */
  intro: string;
  /** Insight categories this page claims, in order of relevance. */
  categories: string[];
  /** Evergreen anchors placed first. Keep to one so new work still shows. */
  pinned?: string[];
  /**
   * Reserve one slot for the newest article of each category, in list order,
   * before filling the rest by date.
   */
  balance?: boolean;
  /** Cards rendered. Three fits the grid on every host page. */
  limit: number;
}

export const insightPlacements = {
  /* Buying decision. Cost method and the model comparison. */
  pricing: {
    route: '/pricing',
    eyebrow: 'Further reading',
    heading: 'Read before you',
    emphasis: 'budget',
    intro:
      'Where the numbers on this page come from. What a unit costs as volume rises, what a quoted price actually includes, and how to weigh one way of buying production against another.',
    categories: ['Cost', 'Buying models'],
    /* Two different buyer questions: keep one of each on the layer. */
    balance: true,
    limit: 3,
  },

  /* Brand-side buyers. Rights, labeling and provenance decide what ships. */
  brands: {
    route: '/solutions/brands',
    eyebrow: 'Further reading',
    heading: 'What legal asks',
    emphasis: 'first',
    intro:
      'Labeling rules, provenance metadata and talent releases decide what a brand is allowed to publish. These notes cover what holds up through a real pipeline and what quietly falls off it.',
    categories: ['Rights', 'Content Rights'],
    limit: 3,
  },

  /* Video lane. Cost of a usable shot, model capability, sound, spatial. */
  aiVideo: {
    route: '/solutions/ai-production/video',
    eyebrow: 'Further reading',
    heading: 'Notes from the',
    emphasis: 'edit',
    intro:
      'What a usable shot really costs once the discarded takes are counted, what current video models can carry on their own, and where sound and spatial work decide whether a scene is believed.',
    categories: ['AI Video', '3D & Spatial'],
    /* Filed under Cost, so the categories above miss it. */
    pinned: ['all-in-cost-of-ai-video'],
    limit: 3,
  },

  /* Image lane. Catalog cost, e-commerce and performance imagery. */
  aiImage: {
    route: '/solutions/ai-production/image',
    eyebrow: 'Further reading',
    heading: 'Before the next',
    emphasis: 'shoot',
    intro:
      'What product imagery costs per SKU once a catalog scales, and how generative work has reshaped e-commerce and performance content, from marketplace tiles to synthetic talent.',
    categories: ['eCommerce', 'Performance', 'AI Avatars'],
    /* Filed under Cost, so the categories above miss it. */
    pinned: ['product-photography-cost-per-sku'],
    limit: 3,
  },

  /* Studio method. The long-form version of how the pipeline runs. */
  aiExcellence: {
    route: '/the-studio/ai-excellence',
    eyebrow: 'Further reading',
    heading: 'How the work gets',
    emphasis: 'made',
    intro:
      'The studio method in longer form. When to shoot and when to generate, why quality stopped being the argument, and what AIGC production involves once the prompt is done.',
    categories: ['Production', 'Creative Strategy', 'AI Foundations', 'Agentic AI'],
    limit: 3,
  },

  /* Marketplace buyers. Platform specs first, then what a catalog costs. */
  ecommerce: {
    route: '/services/design/ecommerce',
    eyebrow: 'Further reading',
    heading: 'Check the spec before the',
    emphasis: 'batch',
    intro:
      'Marketplace image specs, counted across published sources and dated, because the platforms gate their own rule text. Read these before a catalog is shot to a number nobody has confirmed.',
    categories: ['Platform specs', 'Cost'],
    /* Nine spec pages are queued behind this one. Keep a cost article visible. */
    balance: true,
    limit: 3,
  },
} satisfies Record<string, InsightPlacement>;

export type InsightPlacementKey = keyof typeof insightPlacements;

/**
 * Resolve a placement to its articles. Pinned anchors come first. With
 * `balance`, the newest article of each claimed category is reserved next.
 * Remaining slots fill with the newest matching insights. `insights` is
 * maintained newest first, so array order is the date order and the unpinned
 * picks are returned in that order.
 */
export function insightsForPlacement(key: InsightPlacementKey): Insight[] {
  const placement: InsightPlacement = insightPlacements[key];
  const anchors = (placement.pinned ?? [])
    .map((slug) => insights.find((item) => item.slug === slug))
    .filter((item): item is Insight => item !== undefined)
    .slice(0, placement.limit);
  const chosen = new Set(anchors.map((item) => item.slug));
  const matches = insights.filter(
    (item) => placement.categories.includes(item.category) && !chosen.has(item.slug),
  );

  if (placement.balance) {
    for (const category of placement.categories) {
      if (chosen.size >= placement.limit) break;
      const newest = matches.find((item) => item.category === category && !chosen.has(item.slug));
      if (newest) chosen.add(newest.slug);
    }
  }

  for (const item of matches) {
    if (chosen.size >= placement.limit) break;
    chosen.add(item.slug);
  }

  return [...anchors, ...matches.filter((item) => chosen.has(item.slug))];
}
