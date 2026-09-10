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
 * and keep it to one slug so new work still surfaces.
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
      'Where the numbers on this page come from. Unit cost as volume rises, what an in-house team actually costs to run, and how to compare one production partner against another.',
    categories: ['Cost', 'Buying models'],
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

  /* Video lane. Model capability, sound, and the move into spatial. */
  aiVideo: {
    route: '/solutions/ai-production/video',
    eyebrow: 'Further reading',
    heading: 'Notes from the',
    emphasis: 'edit',
    intro:
      'What the current generation of video models can carry on its own, why sound decides whether a shot is believed, and how promptable 3D is changing the shot list.',
    categories: ['AI Video', '3D & Spatial'],
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
} satisfies Record<string, InsightPlacement>;

export type InsightPlacementKey = keyof typeof insightPlacements;

/**
 * Resolve a placement to its articles: pinned anchors first, then the newest
 * matching insights. `insights` is maintained newest first, so array order is
 * the date order and no sorting is needed here.
 */
export function insightsForPlacement(key: InsightPlacementKey): Insight[] {
  const placement: InsightPlacement = insightPlacements[key];
  const picked: Insight[] = [];
  const seen = new Set<string>();

  for (const slug of placement.pinned ?? []) {
    const anchor = insights.find((item) => item.slug === slug);
    if (anchor) {
      picked.push(anchor);
      seen.add(anchor.slug);
    }
  }

  for (const item of insights) {
    if (picked.length >= placement.limit) break;
    if (seen.has(item.slug)) continue;
    if (!placement.categories.includes(item.category)) continue;
    picked.push(item);
    seen.add(item.slug);
  }

  return picked.slice(0, placement.limit);
}
