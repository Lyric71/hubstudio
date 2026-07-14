/**
 * The pricing core: pure functions, no DOM, no framework, no side effects.
 *
 * It takes a Quote input object and returns a breakdown carrying CNY, USD, and
 * EUR for every line and for the total. The same module runs on the server
 * (first paint, and the no-JS fallback) and in the browser (live recalculation),
 * and `npm run test:pricing` exercises it directly, without a UI.
 *
 * Every rate and multiplier comes from config.ts. Nothing is hard-coded here.
 * All arithmetic is done in CNY at full precision: CNY is never rounded before
 * converting, and rounding happens once, at display time (see format.ts).
 */

import {
  ORDER_ADDONS,
  PER_IMAGE_ADDONS,
  PRICING,
  type Complexity,
  type DeliveryOption,
  type OrderAddonId,
  type OrderAddonSpec,
  type PerImageAddonId,
  type PricingConfig,
} from './config.ts';

/* --- Inputs -------------------------------------------------------------- */

/** One image: its complexity, and the add-ons bought for it alone. */
export interface ImageRow extends Record<PerImageAddonId, number> {
  complexity: Complexity;
}

export interface QuoteInputs {
  numberOfImages: number;
  deliveryOption: DeliveryOption;
  /**
   * One row per image. Rows past `numberOfImages` are kept (so shrinking an
   * order and growing it again does not destroy what was typed) but never
   * priced.
   */
  perImage: ImageRow[];
  /** Order-level quantities, keyed by option id. */
  orderAddons: Record<OrderAddonId, number>;
  dedicatedAccountManager: boolean;
}

/** A fresh image row: Low complexity, no add-ons. */
export function emptyRow(): ImageRow {
  return { complexity: 'Low', extraSizes: 0, upscales: 0, threeDAngles: 0 };
}

/** Every order-level quantity at zero. */
export function emptyOrderAddons(): Record<OrderAddonId, number> {
  const addons = {} as Record<OrderAddonId, number>;
  for (const addon of ORDER_ADDONS) addons[addon.id] = 0;
  return addons;
}

export const DEFAULT_INPUTS: QuoteInputs = {
  numberOfImages: PRICING.minimumImages,
  deliveryOption: 'A',
  perImage: Array.from({ length: PRICING.minimumImages }, emptyRow),
  orderAddons: emptyOrderAddons(),
  dedicatedAccountManager: false,
};

/** Coerce a value to an integer at or above `min`, falling back to `min`. */
function toCount(value: unknown, min: number): number {
  const n = Math.floor(Number(value));
  return Number.isFinite(n) && n >= min ? n : min;
}

/** Coerce to a known complexity level, defaulting to the cheapest. */
function toComplexity(value: unknown, config: PricingConfig): Complexity {
  return typeof value === 'string' && value in config.complexityMultiplier
    ? (value as Complexity)
    : 'Low';
}

/**
 * Clamp raw input (a form, a URL query, a JSON payload) into a valid quote: the
 * image count sits at or above the minimum order quantity, every quantity is a
 * non-negative integer, and every choice field lands on a known value. No
 * downstream code has to defend against a fraction, a negative, an order below
 * the MOQ, or a typo in a dropdown.
 */
export function normalizeInputs(
  raw: Partial<QuoteInputs>,
  config: PricingConfig = PRICING,
): QuoteInputs {
  const numberOfImages = toCount(raw.numberOfImages, config.minimumImages);

  // The grid always covers at least the images being priced; anything the
  // caller typed beyond that is preserved, not truncated.
  const length = Math.max(numberOfImages, raw.perImage?.length ?? 0);
  const perImage: ImageRow[] = Array.from({ length }, (_, i) => {
    const row = raw.perImage?.[i];
    const clean = emptyRow();
    clean.complexity = toComplexity(row?.complexity, config);
    for (const addon of PER_IMAGE_ADDONS) {
      clean[addon.id] = toCount(row?.[addon.id], 0);
    }
    return clean;
  });

  const orderAddons = emptyOrderAddons();
  for (const addon of ORDER_ADDONS) {
    orderAddons[addon.id] = toCount(raw.orderAddons?.[addon.id], 0);
  }

  return {
    numberOfImages,
    deliveryOption: raw.deliveryOption === 'B' ? 'B' : 'A',
    perImage,
    orderAddons,
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
  return {
    cny,
    usd: cny * config.fx.usdPerCny,
    eur: cny * config.fx.eurPerCny,
  };
}

/* --- Result -------------------------------------------------------------- */

/** One image, priced: its production cost and its own add-ons. */
export interface ImageLine {
  /** Zero-based index; the image number is index + 1. */
  index: number;
  row: ImageRow;
  /** Base per-image price x the complexity multiplier. */
  production: Money;
  /** The add-ons bought for this image alone. */
  addOns: Money;
  /** True when the row sits beyond the image count and is not priced. */
  ignored: boolean;
}

/** One priced order-level line. */
export interface OrderLine {
  spec: OrderAddonSpec;
  quantity: number;
  unit: Money;
  line: Money;
  /** True when the fee is not published and has to be quoted case by case. */
  onRequest: boolean;
}

export interface Quote {
  inputs: QuoteInputs;
  /** Base (Low-complexity) per-image price of each option, for comparison. */
  basePerImage: Record<DeliveryOption, Money>;
  /** The grid, one entry per row, ignored rows included. */
  imageLines: ImageLine[];
  /** Sum of production across priced images. */
  imageProduction: Money;
  /** Sum of per-image add-ons across priced images. */
  optionalAddOns: Money;
  orderLines: OrderLine[];
  productShot: Money;
  retouch: Money;
  postProduction: Money;
  /** Everything above, before the account-manager uplift. */
  subtotal: Money;
  accountManagerUplift: Money;
  total: Money;
}

/**
 * Price a project. The one entry point: give it inputs, get every number the
 * quotation needs, each already expressed in CNY, USD, and EUR.
 */
export function computeQuote(
  rawInputs: Partial<QuoteInputs>,
  config: PricingConfig = PRICING,
): Quote {
  const inputs = normalizeInputs(rawInputs, config);
  const n = inputs.numberOfImages;
  const base = config.basePerImage[inputs.deliveryOption];

  // Per image: the complexity multiplier scales the whole production price, and
  // the add-ons are summed from what that one image asked for. Nothing here is
  // multiplied by the image count.
  const imageLines: ImageLine[] = inputs.perImage.map((row, index) => {
    const ignored = index >= n;
    const production = ignored ? 0 : base * config.complexityMultiplier[row.complexity];
    const addOns = ignored
      ? 0
      : PER_IMAGE_ADDONS.reduce((sum, addon) => sum + row[addon.id] * addon.unitCny, 0);
    return {
      index,
      row,
      production: convert(production, config),
      addOns: convert(addOns, config),
      ignored,
    };
  });

  const imageProductionCny = imageLines.reduce((sum, l) => sum + l.production.cny, 0);
  const optionalAddOnsCny = imageLines.reduce((sum, l) => sum + l.addOns.cny, 0);

  const orderLines: OrderLine[] = ORDER_ADDONS.map((spec) => {
    const quantity = inputs.orderAddons[spec.id];
    return {
      spec,
      quantity,
      unit: convert(spec.unitCny, config),
      line: convert(spec.unitCny * quantity, config),
      onRequest: spec.unitCny === 0,
    };
  });

  /** Sum of the order-level lines that roll up into one quotation line. */
  const groupTotal = (group: OrderAddonSpec['group']): number =>
    orderLines
      .filter((l) => l.spec.group === group)
      .reduce((sum, l) => sum + l.line.cny, 0);

  const productShotCny = groupTotal('productShot');
  const retouchCny = groupTotal('retouch');
  const postProductionCny = groupTotal('postProduction');

  const subtotalCny =
    imageProductionCny +
    optionalAddOnsCny +
    productShotCny +
    retouchCny +
    postProductionCny;

  // The uplift lands on the WHOLE subtotal: production, add-ons, pack shots,
  // retouch, and post-production all included.
  const upliftCny = inputs.dedicatedAccountManager
    ? subtotalCny * config.accountManagerUpliftPct
    : 0;

  return {
    inputs,
    basePerImage: {
      A: convert(config.basePerImage.A, config),
      B: convert(config.basePerImage.B, config),
    },
    imageLines,
    imageProduction: convert(imageProductionCny, config),
    optionalAddOns: convert(optionalAddOnsCny, config),
    orderLines,
    productShot: convert(productShotCny, config),
    retouch: convert(retouchCny, config),
    postProduction: convert(postProductionCny, config),
    subtotal: convert(subtotalCny, config),
    accountManagerUplift: convert(upliftCny, config),
    total: convert(subtotalCny + upliftCny, config),
  };
}
