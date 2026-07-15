/**
 * Pricing configuration for the AIGC product-VIDEO quotation tool.
 *
 * Sibling of config.ts (which prices images). Same discipline: this file is the
 * only place money lives, and nothing below is hard-coded into a formula.
 *
 * The video model is built from hours, not from a flat per-unit price. A video
 * is a sequence of shots; length drives the shot count, which drives the
 * per-shot work. Creative work does NOT scale with length. See
 * VIDEO_DERIVATION for the build-up, which is internal and never rendered.
 *
 * CNY is the base currency and the canonical total. USD and EUR are display
 * conversions only.
 */

import type { Complexity } from './config.ts';

export type { Complexity };

/** The master delivery format. A display choice: it carries no price impact. */
export type MasterFormat = '16:9' | '9:16' | '1:1';

export const MASTER_FORMATS: { id: MasterFormat; note: string }[] = [
  { id: '16:9', note: 'Landscape. The most common default.' },
  { id: '9:16', note: 'Vertical, for feeds and stories.' },
  { id: '1:1', note: 'Square.' },
];

/** People-cost table, CNY per hour, agency markup (2.15) included. */
export interface VideoRates {
  accountManager: number;
  juniorCreativeDirector: number;
  /** Motion / video AIGC producer (AIGC tech specialist). */
  aigcProducer: number;
  designer: number;
  editor: number;
}

/** What the generation engine costs, before it is converted to CNY. */
export interface EngineCost {
  costPerImageGenUsd: number;
  costPerVideoClipGenUsd: number;
  imageGensPerKeyframe: number;
  keyframesPerSequence: number;
  videoClipGensPerSequence: number;
  gensPerRevisionRound: number;
  /** Revision rounds included in the base price. */
  includedRevisionRounds: number;
  /** CNY per 1 USD, used to price the engine only. */
  usdToCny: number;
}

/** Hours per unit of work. The unit is named in each key. */
export interface VideoHours {
  briefKickoffAm: number;
  creativeTreatmentJcd: number;
  keyframesDesignerPerSequence: number;
  aiSceneProducerPerSequence: number;
  compositingEditorPerVideo: number;
  revisionsEditorPerVideo: number;
  deliveryEditorPerVideo: number;
}

export interface VideoPricingConfig {
  rates: VideoRates;
  hours: VideoHours;
  engine: EngineCost;
  /**
   * Project management is mandatory and billed as a share of production time.
   * It is distributed into each part in proportion to that part's non-AM hours,
   * so a longer video carries proportionally more of it.
   */
  pmPercent: number;
  /** One sequence (shot) is worth this many seconds of finished video. */
  averageSecondsPerSequence: number;
  complexityMultiplier: Record<Complexity, number>;
  /** Flat price of one product shot / pack shot pack (5 products). CNY. */
  productShotPack: number;
  minimumVideos: number;
  defaultLengthSeconds: number;
  fx: { usdPerCny: number; eurPerCny: number };
}

export const VIDEO_PRICING: VideoPricingConfig = {
  rates: {
    accountManager: 341.63,
    juniorCreativeDirector: 314.3,
    aigcProducer: 273.31,
    designer: 273.31,
    editor: 300.64,
  },
  hours: {
    briefKickoffAm: 1.0,
    creativeTreatmentJcd: 5.0,
    keyframesDesignerPerSequence: 1.5,
    aiSceneProducerPerSequence: 3.0,
    compositingEditorPerVideo: 4.0,
    revisionsEditorPerVideo: 4.0,
    deliveryEditorPerVideo: 1.5,
  },
  engine: {
    costPerImageGenUsd: 0.1,
    costPerVideoClipGenUsd: 0.5,
    imageGensPerKeyframe: 4,
    keyframesPerSequence: 2,
    videoClipGensPerSequence: 6,
    gensPerRevisionRound: 3,
    includedRevisionRounds: 2,
    usdToCny: 6.78,
  },
  pmPercent: 0.25,
  averageSecondsPerSequence: 5,
  complexityMultiplier: { Low: 1.0, Medium: 1.5, High: 2.0 },
  productShotPack: 2500,
  minimumVideos: 1,
  defaultLengthSeconds: 30,
  // The video rate card quotes its own FX. Kept here rather than shared with the
  // image config so each tool matches the spec it was priced from.
  fx: { usdPerCny: 0.1475, eurPerCny: 0.1289 },
};

/** The complexity guide shown next to the selector. */
export interface VideoComplexitySpec {
  id: Complexity;
  multiplier: number;
  /** What earns this level. */
  note: string;
  /** Green, amber, red: the level should be readable before it is read. */
  tone: 'low' | 'medium' | 'high';
}

export const VIDEO_COMPLEXITIES: VideoComplexitySpec[] = [
  {
    id: 'Low',
    multiplier: VIDEO_PRICING.complexityMultiplier.Low,
    note: 'Simple motion: a single product on a clean or graphic background, a straightforward camera move, minimal effects. Few keyframes, few generation attempts.',
    tone: 'low',
  },
  {
    id: 'Medium',
    multiplier: VIDEO_PRICING.complexityMultiplier.Medium,
    note: 'The product in a realistic everyday environment, with believable motion, transitions, and pacing to music. More keyframes and more generation passes per shot.',
    tone: 'medium',
  },
  {
    id: 'High',
    multiplier: VIDEO_PRICING.complexityMultiplier.High,
    note: 'Difficult conditions: night or weather, hand-and-product interaction, complex camera moves, or multi-product scenes. Heavy generation, compositing, and revision.',
    tone: 'high',
  },
];

/* --- Add-ons -------------------------------------------------------------- */

export type VideoAddonId =
  | 'socialCutDowns'
  | 'reframeCrop'
  | 'reframeRegen'
  | 'extraSequences'
  | 'extraRevisionRounds'
  | 'extraLanguageSubtitles'
  | 'productShotPacks';

export interface VideoAddonSpec {
  id: VideoAddonId;
  label: string;
  note: string;
  unit: string;
  /**
   * True when the unit price is derived from the video being quoted (the native
   * reframe is a full re-render, so it costs a whole production subtotal and
   * therefore moves with length). Everything else is a fixed unit price.
   */
  derived?: boolean;
}

/**
 * Add-on quantities are explicit: they are NEVER multiplied by complexity, and
 * never by the number of videos. What the client types is what they buy.
 */
export const VIDEO_ADDONS: VideoAddonSpec[] = [
  {
    id: 'socialCutDowns',
    label: 'Social cut-down',
    note: 'A short cut of the film for social. One keyframe unit (a start and an end frame) plus editor time.',
    unit: 'cut-downs',
  },
  {
    id: 'reframeCrop',
    label: 'Reframe, crop-based',
    note: 'A 9:16 or 1:1 version made by smart-cropping the existing footage. Cheap, and it keeps the footage, but going wide to tall loses roughly 60% of the frame width.',
    unit: 'reframes',
  },
  {
    id: 'reframeRegen',
    label: 'Reframe, natively regenerated',
    note: 'A 9:16 or 1:1 version re-rendered at the target aspect ratio, because cropping would discard too much of the frame. It costs a full production pass, so it moves with the length of the video.',
    unit: 'reframes',
    derived: true,
  },
  {
    id: 'extraSequences',
    label: 'Extra sequence',
    note: 'One more shot: its keyframes and its AI scene generation.',
    unit: 'sequences',
  },
  {
    id: 'extraRevisionRounds',
    label: 'Extra revision round',
    note: 'One more round of edits beyond the two included, with the generation it needs.',
    unit: 'rounds',
  },
  {
    id: 'extraLanguageSubtitles',
    label: 'Extra language subtitles',
    note: 'One more subtitle language, delivered as an .srt file.',
    unit: 'languages',
  },
  {
    id: 'productShotPacks',
    label: 'Product shot / pack shot',
    note: 'Physical photography of the product, when you have no usable references. One pack covers 5 products.',
    unit: 'packs',
  },
];

/** The standard scope, included in every video at no extra charge. */
export const VIDEO_INCLUDED: string[] = [
  'Sequence keyframes: a start and an end frame for every shot',
  'AI scene generation, with the product kept accurate to your references',
  'Compositing and edit: clean transitions, pacing to music, motion text and subtitles',
  'Two rounds of revisions, on the edit, the text, and the timing',
  'One master in the format you choose, with and without text, plus English .srt subtitles and a thumbnail',
  'A dedicated account manager throughout, with project management included',
];

/** What the client owes us for any of it to be possible. */
export const VIDEO_CLIENT_PROVIDES =
  'You provide good-quality product references (images, specs, or a sample) and a brief.';

/**
 * The limits, stated plainly, because a client who learns them late learns them
 * badly. Shown on the page.
 */
export const VIDEO_LIMITATIONS: string[] = [
  'Not pixel-perfect: a product recreated from references can vary in fine texture, finish, and exact brand colors.',
  'A 2D image provided from a handful of angles cannot be reliably inverted into 3D, so unseen angles stay unseen.',
  'Logos and on-pack text may distort and need retouch.',
  'Motion is not perfectly stable, especially in longer clips.',
  'This is not a functional demo: the engine follows what things look like, not how they work, so real product actions may not obey physics.',
  'Complex or multi-product scenes are harder, and people and hands remain difficult.',
  'Output quality depends on the quality of the references you give us.',
  'Two revision rounds refine the edit, the text, and the timing. They cannot re-engineer the product detail underneath the source material.',
  'Ownership and disclosure: AI-only material may not be copyrightable in some markets, and the EU AI Act requires AI content to be labelled.',
  'Regulated claims (food, supplements, cosmetics, electronics, and anything aimed at children) must be client-supplied, client-approved, and never AI-generated.',
];

/**
 * Internal only. How the price per video is derived, kept so it can be
 * regenerated when a rate moves. Never rendered to the client.
 *
 * All labor hours x role rate (which already includes the 2.15 agency markup),
 * plus the AIGC engine cost. Everything is linear in `sequences`:
 *
 *   basePricePerVideo = CREATIVE + PRODUCTION_FIXED
 *                     + sequences * MARGINAL_PER_SEQUENCE
 *
 * CREATIVE (flat, does not scale with length):
 *   brief and kickoff 1h AM + treatment/storyboard 5h junior creative director
 *   + PM 25% of the 5 non-AM creative hours = 2340.17
 *
 * PRODUCTION_FIXED (flat, per video):
 *   edit 4h editor + revisions (4h editor + AIGC 20.34) + delivery 1.5h editor
 *   + the per-video share of PM (25% of 9.5 non-AM hours) = 3687.79
 *
 * MARGINAL_PER_SEQUENCE:
 *   keyframes (1.5h designer + AIGC 5.42) + AI scene (3h AIGC producer + AIGC
 *   20.34) + the per-sequence share of PM (25% of 4.5 non-AM hours) = 1639.99
 *
 * At 6 shots (30 seconds): 2340.17 + 3687.79 + 6 x 1639.99 = 15,867.89.
 * Complexity then multiplies that, the video count multiplies the result, and
 * add-ons are added after, untouched by either.
 *
 * The engine costs are priced in USD and converted at 6.78: a keyframe shot
 * costs 4 x 2 x 0.10 x 6.78 = 5.42, an AI scene shot 6 x 0.50 x 6.78 = 20.34,
 * and a revision round 3 x 0.50 x 6.78 = 10.17.
 */
export const VIDEO_DERIVATION = {
  agencyMarkup: 2.15,
  pmNote: 'PM is 25% of production time, split across the parts by their non-AM hours.',
} as const;
