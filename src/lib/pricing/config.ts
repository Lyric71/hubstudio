/**
 * Pricing configuration for the AIGC product-image quotation tool.
 *
 * This file is the ONLY place money lives: rates, multipliers, FX. Nothing is
 * hard-coded in a formula. Editing a constant here changes the calculator
 * everywhere, because the server render and the browser import this same module.
 *
 * The model is fully PER IMAGE. There is no project fee and no setup fee. Each
 * image carries a base production price (set by the delivery option), scaled by
 * a complexity multiplier, plus whatever add-ons that one image needs.
 *
 * CNY is the base currency and the canonical total. USD and EUR are display
 * conversions only:
 *   USD = CNY * usdPerCny
 *   EUR = CNY * eurPerCny
 *
 * Internal cost mechanics (labor hours, hourly rates, AI token cost) never reach
 * the client-facing surface. The resolved rates below bake them in; see
 * PRICING_DERIVATION for the audit trail, which is never rendered.
 */

export interface FxRates {
  /** Value of 1 CNY in USD. Live from a currency source; treated as an input. */
  usdPerCny: number;
  /** Value of 1 CNY in EUR. */
  eurPerCny: number;
}

/** The scene decides complexity, never the product. */
export type Complexity = 'Low' | 'Medium' | 'High';

export interface ComplexitySpec {
  id: Complexity;
  /** Multiplier applied to the base per-image production price. */
  multiplier: number;
  /** What earns this level, in the client's terms. */
  note: string;
}

export interface PricingConfig {
  /** Base production price per image at Low complexity, by delivery option. */
  basePerImage: { A: number; B: number };
  /** One designer hour: the unit behind every hourly add-on. CNY. */
  designerHour: number;
  /** Flat price of one product shot / pack shot pack. CNY. */
  productShotPack: number;
  /** Uplift applied to the pre-uplift subtotal for a dedicated account manager. */
  accountManagerUpliftPct: number;
  /** Minimum order quantity, in images. */
  minimumImages: number;
  /** Price multiplier per complexity level. */
  complexityMultiplier: Record<Complexity, number>;
  fx: FxRates;
}

export const PRICING: PricingConfig = {
  basePerImage: { A: 1662.88, B: 1932.12 },
  designerHour: 273.31,
  productShotPack: 2500,
  accountManagerUpliftPct: 0.3,
  minimumImages: 5,
  complexityMultiplier: { Low: 1.0, Medium: 1.5, High: 2.0 },
  fx: { usdPerCny: 0.1475, eurPerCny: 0.1295 },
};

/**
 * Complexity is scored by the SCENE, not the product. Size variations are
 * mechanical resizes of one master and are never scored: they are an add-on.
 * A reference mix, from Sonepar Wave 4 and 5: 3 Low, 13 Medium, 19 High across
 * 35 key visuals.
 */
export const COMPLEXITIES: ComplexitySpec[] = [
  {
    id: 'Low',
    multiplier: PRICING.complexityMultiplier.Low,
    note: 'Colored, graphic, or white background, or an easy generative element. Background generation plus a simple composite.',
  },
  {
    id: 'Medium',
    multiplier: PRICING.complexityMultiplier.Medium,
    note: 'The product in a realistic everyday environment (office, parking, hallway, residential). It must look believably installed: matching perspective, scale, and shadows.',
  },
  {
    id: 'High',
    multiplier: PRICING.complexityMultiplier.High,
    note: 'Difficult conditions: night scenes with luminaire glow, snow or weather effects, hand-and-plug interaction, or multi-product compositions. Heavy compositing plus retouch.',
  },
];

/** The two ways a product gets into a scene. */
export type DeliveryOption = 'A' | 'B';

export interface DeliveryOptionSpec {
  id: DeliveryOption;
  name: string;
  summary: string;
  caveat: string;
}

export const DELIVERY_OPTIONS: DeliveryOptionSpec[] = [
  {
    id: 'A',
    name: 'AI-generated scenes',
    summary: 'Fast, and the scene is wide open creatively.',
    caveat: 'Minor imperfections are possible: the product may look slightly different from real life.',
  },
  {
    id: 'B',
    name: 'Real product placed by hand',
    summary: 'Exact: your real product is placed into the generated scene by hand.',
    caveat: 'Limited by your photos: we can only work with the angle and quality you send.',
  },
];

/* --- Per-image add-ons ---------------------------------------------------- */

export type PerImageAddonId = 'extraSizes' | 'upscales' | 'threeDAngles';

export interface PerImageAddonSpec {
  id: PerImageAddonId;
  label: string;
  note: string;
  /** Unit price in CNY: one designer hour. */
  unitCny: number;
}

/**
 * Entered per image, in the grid. These never auto-multiply by the image count:
 * the client itemizes each image and the totals come from summing the grid.
 * A size variation is a mechanical resize of one master, which is why it is an
 * add-on here rather than something complexity is allowed to score.
 */
export const PER_IMAGE_ADDONS: PerImageAddonSpec[] = [
  {
    id: 'extraSizes',
    label: 'Extra size',
    note: 'One more size or crop of that image, resized from the master.',
    unitCny: PRICING.designerHour,
  },
  {
    id: 'upscales',
    label: 'Upscale',
    note: 'One higher resolution of that image, beyond the 2K it ships at.',
    unitCny: PRICING.designerHour,
  },
  {
    id: 'threeDAngles',
    label: '3D angle',
    note: 'A specific angle extracted from your 3D product model, for that image.',
    unitCny: PRICING.designerHour,
  },
];

/* --- Order-level options -------------------------------------------------- */

export type OrderAddonId =
  | 'productShotPacks'
  | 'extraRetouchRounds'
  | 'logo'
  | 'text'
  | 'badge'
  | 'priceTag';

export interface OrderAddonSpec {
  id: OrderAddonId;
  label: string;
  note: string;
  /** Unit price in CNY. A zero price means the fee is quoted on request. */
  unitCny: number;
  /** The quantity's unit, used in the input's accessible name. */
  unit: string;
  /** Which quotation line this option rolls up into. */
  group: 'productShot' | 'retouch' | 'postProduction';
}

/**
 * Entered once for the whole quote, never per image. A retouch round covers the
 * order rather than each image, a pack shot is physical photography that stands
 * apart from the AI work, and the post-production items are one designer hour
 * each. Background changes and shadow or reflection work are NOT here: they are
 * part of standard retouch and are already included.
 */
export const ORDER_ADDONS: OrderAddonSpec[] = [
  {
    id: 'productShotPacks',
    label: 'Product shot / pack shot',
    note: 'Physical photography, separate from the AI images. One pack covers 5 products, 5 pictures each, post-production included. Five products is the minimum, so one pack.',
    unitCny: PRICING.productShotPack,
    unit: 'packs',
    group: 'productShot',
  },
  {
    id: 'extraRetouchRounds',
    label: 'Extra retouch round',
    note: 'One more round of fixes across the whole order, beyond the three included per image.',
    unitCny: PRICING.designerHour,
    unit: 'rounds',
    group: 'retouch',
  },
  {
    id: 'logo',
    label: 'Add a logo or brand mark',
    note: 'Your mark laid onto the finished image.',
    unitCny: PRICING.designerHour,
    unit: 'items',
    group: 'postProduction',
  },
  {
    id: 'text',
    label: 'Add text or a caption',
    note: 'Copy set onto the finished image.',
    unitCny: PRICING.designerHour,
    unit: 'items',
    group: 'postProduction',
  },
  {
    id: 'badge',
    label: 'Add a promotional badge',
    note: 'A Sale or New badge, composed onto the image.',
    unitCny: PRICING.designerHour,
    unit: 'items',
    group: 'postProduction',
  },
  {
    id: 'priceTag',
    label: 'Add a price or price tag',
    note: 'A price tag set onto the image.',
    unitCny: PRICING.designerHour,
    unit: 'items',
    group: 'postProduction',
  },
];

/** The standard scope, included in every image at no extra cost. */
export const INCLUDED: string[] = [
  'Situation concepts presented, and you pick one scene per image',
  'Your product placed into the chosen scene',
  '3 rounds of retouch per image',
  '1 delivery size per image, generated at up to 2K resolution',
  'Direct chat with your dedicated designer',
  'Background changes, shadows, and reflections, as part of standard retouch',
];

/** What the client owes us for the work to be possible at all. */
export const CLIENT_PROVIDES = 'You provide high-quality photos of your product.';

/** Quotation validity and payment terms, shown in the footer. */
export const TERMS = {
  validityDays: 30,
  depositPct: 50,
} as const;

/**
 * Internal only. How the base per-image prices were derived, kept so they can be
 * regenerated when labor rates or FX move. Never rendered to the client.
 *
 * Rate card (CNY, includes the 2.15 agency markup): designer 273.31/h, account
 * manager 341.63/h.
 *
 * The build-up is per image, all designer labor. Hours per image (Option A /
 * Option B): briefing and kickoff 1 / 1; situation concepts 2 / 1.5; product
 * integration or manual placement 0 / 1.5; retouch and edit 3 / 3.
 *
 * AI generation cost is about 0.678 CNY per generation (0.10 USD at about 6.78
 * CNY per USD): concept proposals 4 per concept x 5 concepts; final-image
 * generation 12 (Option A) or background 6 (Option B); retouch 2 per image.
 *
 * Result:
 *   Option A = 6h x 273.31 + engine (concepts 13.56 + final image 8.13 +
 *              retouch 1.36) = 1662.88
 *   Option B = 7h x 273.31 + engine (concepts 13.56 + background 4.07 +
 *              retouch 1.36) = 1932.12
 *
 * One add-on unit is one designer hour, 273.31. The complexity multiplier scales
 * the whole per-image production price, not just the labor part of it.
 */
export const PRICING_DERIVATION = {
  hourlyCny: { designer: 273.31, accountManager: 341.63 },
  agencyMarkup: 2.15,
  generationCny: 0.678,
} as const;
