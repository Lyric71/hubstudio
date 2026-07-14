/**
 * The pricing core: pure functions, no DOM, no framework, no side effects.
 *
 * Everything the calculator knows how to compute lives here so the same math
 * runs on the server (first paint, and the no-JS fallback) and in the browser
 * (live recalculation), and so it can be exercised directly by
 * `npm run test:pricing` without a UI.
 *
 * All arithmetic is done in CNY at full precision. Rounding happens once, at
 * the very end, and only for display (see format.ts).
 */

import {
  ADDONS,
  PRICING,
  type AddonId,
  type AddonSpec,
  type DeliveryOption,
  type PricingConfig,
} from './config.ts';

/* --- Inputs -------------------------------------------------------------- */

export interface QuoteInputs {
  numberOfImages: number;
  deliveryOption: DeliveryOption;
  /** Add-on quantities, keyed by add-on id. Integers, zero or more. */
  addons: Record<AddonId, number>;
  dedicatedAccountManager: boolean;
}

export const DEFAULT_INPUTS: QuoteInputs = {
  numberOfImages: 1,
  deliveryOption: 'A',
  addons: {
    extraConcepts: 0,
    extraRetouchRounds: 0,
    extraSizes: 0,
    threeDProducts: 0,
    productShoots: 0,
  },
  dedicatedAccountManager: false,
};

/** Coerce a value to an integer at or above `min`, falling back to `min`. */
function toCount(value: unknown, min: number): number {
  const n = Math.floor(Number(value));
  return Number.isFinite(n) && n >= min ? n : min;
}

/**
 * Clamp raw input (a form, a URL query, a JSON payload) into a valid quote.
 * The image count is at least 1 and add-on quantities are integers at or above
 * zero, so no downstream code has to defend against a negative or a fraction.
 */
export function normalizeInputs(raw: Partial<QuoteInputs>): QuoteInputs {
  const addons = { ...DEFAULT_INPUTS.addons };
  for (const addon of ADDONS) {
    addons[addon.id] = toCount(raw.addons?.[addon.id], 0);
  }
  return {
    numberOfImages: toCount(raw.numberOfImages, 1),
    deliveryOption: raw.deliveryOption === 'B' ? 'B' : 'A',
    addons,
    dedicatedAccountManager: Boolean(raw.dedicatedAccountManager),
  };
}

/* --- Currency ------------------------------------------------------------ */

export interface Money {
  cny: number;
  usd: number;
  eur: number;
}

/** One CNY amount expressed in all three display currencies. */
export function convert(cny: number, config: PricingConfig = PRICING): Money {
  const usd = cny / config.fx.cnyPerUsd;
  return { cny, usd, eur: usd * config.fx.eurPerUsd };
}

/* --- Result -------------------------------------------------------------- */

/** One priced add-on row: what it costs per unit and what it costs here. */
export interface AddonLine {
  spec: AddonSpec;
  quantity: number;
  /** Unit price, before any multiplication by the image count. */
  unit: Money;
  /** Quantity x unit x (image count when the add-on scales per image). */
  line: Money;
  /** True when the fee is not published and has to be quoted case by case. */
  onRequest: boolean;
}

export interface Quote {
  inputs: QuoteInputs;
  /** Both option totals, so the client can see what the other choice costs. */
  optionTotals: Record<DeliveryOption, Money>;
  imageProduction: Money;
  addonLines: AddonLine[];
  addons: Money;
  subtotal: Money;
  accountManagerUplift: Money;
  total: Money;
  /** Total divided by the image count. Zero when there are no images. */
  perImage: Money;
}

/**
 * Price a project. The one entry point: give it normalized inputs, get every
 * number the quotation needs, each already expressed in CNY, USD, and EUR.
 */
export function computeQuote(
  rawInputs: Partial<QuoteInputs>,
  config: PricingConfig = PRICING,
): Quote {
  const inputs = normalizeInputs(rawInputs);
  const n = inputs.numberOfImages;

  const optionATotal = config.fixedBase.A + config.perImage.A * n;
  const optionBTotal = config.fixedBase.B + config.perImage.B * n;
  const imageProduction = inputs.deliveryOption === 'A' ? optionATotal : optionBTotal;

  const addonLines: AddonLine[] = ADDONS.map((spec) => {
    const quantity = inputs.addons[spec.id];
    const multiplier = spec.perImage ? n : 1;
    return {
      spec,
      quantity,
      unit: convert(spec.unitCny, config),
      line: convert(spec.unitCny * quantity * multiplier, config),
      onRequest: spec.unitCny === 0,
    };
  });

  const addons = addonLines.reduce((sum, l) => sum + l.line.cny, 0);
  const subtotal = imageProduction + addons;
  const uplift = inputs.dedicatedAccountManager
    ? subtotal * config.accountManagerUpliftPct
    : 0;
  const total = subtotal + uplift;

  return {
    inputs,
    optionTotals: {
      A: convert(optionATotal, config),
      B: convert(optionBTotal, config),
    },
    imageProduction: convert(imageProduction, config),
    addonLines,
    addons: convert(addons, config),
    subtotal: convert(subtotal, config),
    accountManagerUplift: convert(uplift, config),
    total: convert(total, config),
    // Guarded against a zero image count even though normalizeInputs forbids
    // it, so the module never returns NaN to a caller that skipped validation.
    perImage: convert(n === 0 ? 0 : total / n, config),
  };
}
