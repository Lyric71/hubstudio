/**
 * Pricing configuration for the AIGC product-image quotation tool.
 *
 * This file is the ONLY place money lives. Every constant below is a current
 * live value; editing them here changes the calculator everywhere, because both
 * the server render and the browser import this same module.
 *
 * CNY is the base currency. USD and EUR are conversions, display only:
 *   USD = CNY / cnyPerUsd
 *   EUR = (CNY / cnyPerUsd) * eurPerUsd
 *
 * Internal cost mechanics (labor hours, hourly rates, AI token cost) are
 * deliberately absent from the client-facing surface. The resolved rates below
 * already bake them in; see PRICING_DERIVATION for the audit trail, which is
 * kept here for regeneration and is never rendered on the page.
 */

export interface FxRates {
  /** CNY per 1 USD. */
  cnyPerUsd: number;
  /** EUR per 1 USD. */
  eurPerUsd: number;
}

export interface PricingConfig {
  /** Per-project fixed fee, by delivery option. CNY. */
  fixedBase: { A: number; B: number };
  /** Per-image fee, by delivery option. CNY. */
  perImage: { A: number; B: number };
  /** Uplift applied to the subtotal when a dedicated account manager is added. */
  accountManagerUpliftPct: number;
  fx: FxRates;
}

export const PRICING: PricingConfig = {
  // Option A: AI scenes + product generated together (product added later is B).
  fixedBase: { A: 923.48, B: 778.7 },
  // Option A bakes integration into 3 retouch rounds; Option B is manual
  // product placement plus 3 retouch rounds, so it carries a higher per-image.
  perImage: { A: 821.27, B: 1235.29 },
  accountManagerUpliftPct: 0.3,
  fx: { cnyPerUsd: 6.7768, eurPerUsd: 0.8759 },
};

/** The two ways a product can be put into a scene. */
export type DeliveryOption = 'A' | 'B';

export interface DeliveryOptionSpec {
  id: DeliveryOption;
  name: string;
  /** One-line client-facing summary shown next to the choice. */
  summary: string;
  /** The constraint the client must understand before choosing. */
  caveat: string;
}

export const DELIVERY_OPTIONS: DeliveryOptionSpec[] = [
  {
    id: 'A',
    name: 'AI scene and product together',
    summary:
      'The scene and the product are generated together. Faster and cheaper, and scene creativity is wide open.',
    caveat:
      'The product may not be a perfect copy and can look slightly different from real life.',
  },
  {
    id: 'B',
    name: 'AI scene, real product placed in by hand',
    summary:
      'The scenes are built first, then your real product is placed into them by hand. The product looks exactly right.',
    caveat:
      'Scene creativity is more limited: we can only work with the exact angle and quality of the photos you send.',
  },
];

/** An optional line the client can add to the quotation. */
export interface AddonSpec {
  id: AddonId;
  label: string;
  /** What the client is buying, in plain language. */
  note: string;
  /** Unit price in CNY. A zero price means the fee is quoted on request. */
  unitCny: number;
  /** True when the unit price is charged for every image in the project. */
  perImage: boolean;
  /** Label for the quantity being counted (used as the input's unit hint). */
  unit: string;
}

export type AddonId =
  | 'extraConcepts'
  | 'extraRetouchRounds'
  | 'extraSizes'
  | 'threeDProducts'
  | 'productShoots';

/**
 * Add-on scaling is a pricing rule, not a UI detail, so it is declared here:
 * extra retouch rounds and extra sizes multiply by the image count; extra
 * concepts, 3D angle extraction, and product shoots do not.
 */
export const ADDONS: AddonSpec[] = [
  {
    id: 'extraConcepts',
    label: 'Extra scene concept',
    note: 'One more scene idea to choose from, beyond the ten included.',
    unitCny: 273.31,
    perImage: false,
    unit: 'concepts',
  },
  {
    id: 'extraRetouchRounds',
    label: 'Extra retouch round',
    note: 'One more round of fixes on every image, beyond the three included.',
    unitCny: 546.61,
    perImage: true,
    unit: 'rounds',
  },
  {
    id: 'extraSizes',
    label: 'Extra delivery size',
    note: 'One more size or crop of every image, beyond the one included.',
    unitCny: 409.96,
    perImage: true,
    unit: 'sizes',
  },
  {
    id: 'threeDProducts',
    label: '3D angle extraction',
    note: 'We pull the angles we need from a 3D model you provide, per product.',
    unitCny: 273.31,
    perImage: false,
    unit: 'products',
  },
  {
    id: 'productShoots',
    label: 'Product shoot',
    note: 'We photograph the product for you when you have no usable photos.',
    unitCny: 0,
    perImage: false,
    unit: 'shoots',
  },
];

/** The standard scope, included in every project at no extra cost. */
export const INCLUDED: string[] = [
  '10 situation concepts presented, you choose one scene per image',
  'Your product placed into the chosen scene',
  '3 rounds of retouch per image',
  '1 delivery size per image',
  'Direct chat with your dedicated designer (English or Chinese)',
  'You provide high-quality photos of your product',
];

/** Quotation validity and payment terms, shown in the footer. */
export const TERMS = {
  validityDays: 30,
  depositPct: 50,
} as const;

/**
 * Internal only. How the resolved rates above were derived, kept so the numbers
 * can be regenerated when labor rates or FX move. Never rendered to the client.
 *
 * Client hourly rates, agency markup included (CNY): account manager 341.63/h,
 * designer 273.31/h.
 *
 * Labor: briefing and kickoff 1h AM per project; creative direction is
 * client-provided and not included. Option A concepts plus product together,
 * 2h designer per project. Option B concepts only (scenes, no product), 1.5h
 * designer per project. Option A product integration is already inside the
 * concepts, 0h. Option B manual product placement, 1.5h designer per image.
 * Retouch, 3 rounds x 1h = 3h designer per image.
 *
 * AI generation cost (small additive, about 0.68 USD per generation): scene
 * generations 4 per concept x 10 concepts = 40 per project. Option A product
 * generations are baked into the concept batch, per project; Option B is
 * minimal per image; retouch is 2 per image.
 *
 * Resolved: fixedBaseA = briefing + 2h designer + scene gens = 923.48.
 * fixedBaseB = briefing + 1.5h designer + scene gens = 778.70.
 * perImageA = 0h integration + 3h retouch + retouch gens = 821.27.
 * perImageB = 1.5h placement + 3h retouch + product gens + retouch gens = 1235.29.
 * Add-on units are designer hours: concept 1h = 273.31; retouch round 2h =
 * 546.61; size 1.5h = 409.96; 3D 1h = 273.31.
 */
export const PRICING_DERIVATION = {
  hourlyCny: { accountManager: 341.63, designer: 273.31 },
} as const;
