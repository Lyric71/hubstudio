/**
 * Live settings for both calculators.
 *
 * The two config files (config.ts, video-config.ts) hold the DEFAULTS. This
 * module layers three things on top of them, in order:
 *
 *   1. defaults, from source
 *   2. overrides, saved from /pricing/calculator/settings into Vercel KV
 *   3. exchange rates, fetched from a free public source and cached
 *
 * `loadPricingConfigs()` returns the resolved configs. The calculator page calls
 * it on every request (it is server-rendered), passes the result into the pure
 * cores, and ships the same object to the browser, so the client math and the
 * server math are always using the identical numbers.
 *
 * Nothing here is required for the calculators to work: with no KV and no
 * network, both fall back to the defaults in source, which is the behaviour that
 * matters when the tool has to work at all costs.
 */

import { PRICING, type Complexity, type PricingConfig } from './config.ts';
import { VIDEO_PRICING, type VideoPricingConfig } from './video-config.ts';

/* --- Overrides ----------------------------------------------------------- */

/**
 * What the settings page is allowed to change. Everything is optional: an absent
 * field means "keep the default". Rates only, never structure: the shape of the
 * pricing model is code, not data.
 */
export interface PricingOverrides {
  image?: {
    basePerImageA?: number;
    basePerImageB?: number;
    designerHour?: number;
    productShotPack?: number;
    accountManagerUpliftPct?: number;
    minimumImages?: number;
    complexityMultiplier?: Partial<Record<Complexity, number>>;
  };
  video?: {
    rateAccountManager?: number;
    rateJuniorCreativeDirector?: number;
    rateAigcProducer?: number;
    rateDesigner?: number;
    rateEditor?: number;
    pmPercent?: number;
    averageSecondsPerSequence?: number;
    keyframesPerSequence?: number;
    includedRevisionRounds?: number;
    costPerImageGenUsd?: number;
    costPerVideoClipGenUsd?: number;
    imageGensPerKeyframe?: number;
    videoClipGensPerSequence?: number;
    gensPerRevisionRound?: number;
    engineUsdToCny?: number;
    productShotPack?: number;
    complexityMultiplier?: Partial<Record<Complexity, number>>;
  };
  /** Manual FX, used only when the live rate is unavailable or pinned off. */
  fx?: {
    usdPerCny?: number;
    eurPerCny?: number;
    /** True to hold these rates and stop fetching live ones. */
    pinned?: boolean;
  };
}

/** Live exchange rates, with the moment and the source they came from. */
export interface FxSnapshot {
  usdPerCny: number;
  eurPerCny: number;
  /** ISO timestamp of the fetch. */
  fetchedAt: string;
  /** Where the numbers came from, shown to whoever is editing settings. */
  source: string;
}

export interface ResolvedPricing {
  image: PricingConfig;
  video: VideoPricingConfig;
  overrides: PricingOverrides;
  fx: FxSnapshot | null;
  /** True when settings are persisted; false when KV is not connected. */
  persisted: boolean;
}

/* --- Storage (Vercel KV / Upstash Redis REST) ---------------------------- */

const KV_URL = import.meta.env.KV_REST_API_URL;
const KV_TOKEN = import.meta.env.KV_REST_API_TOKEN;

const SETTINGS_KEY = 'pricing:overrides';
const FX_KEY = 'pricing:fx';

/** How long a fetched rate is trusted before we go and ask again. */
const FX_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

/** Settings persist only once the KV integration is connected. */
export function kvConfigured(): boolean {
  return Boolean(KV_URL && KV_TOKEN);
}

async function kv(command: (string | number)[]): Promise<unknown> {
  const res = await fetch(KV_URL as string, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(command),
  });
  if (!res.ok) throw new Error(`KV ${res.status}`);
  const json = (await res.json()) as { result: unknown };
  return json.result;
}

async function kvGet<T>(key: string): Promise<T | null> {
  if (!kvConfigured()) return null;
  try {
    const raw = (await kv(['GET', key])) as string | null;
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

async function kvSet(key: string, value: unknown): Promise<void> {
  if (!kvConfigured()) throw new Error('Settings storage is not connected.');
  await kv(['SET', key, JSON.stringify(value)]);
}

/** The saved overrides, or an empty set. */
export async function getOverrides(): Promise<PricingOverrides> {
  return (await kvGet<PricingOverrides>(SETTINGS_KEY)) ?? {};
}

/** Persist a full set of overrides. Throws when KV is not connected. */
export async function saveOverrides(overrides: PricingOverrides): Promise<void> {
  await kvSet(SETTINGS_KEY, overrides);
}

/* --- Exchange rates ------------------------------------------------------ */

/**
 * Frankfurter: the European Central Bank's published reference rates, free, no
 * key, no rate limit worth worrying about. It is queried server-side (from the
 * Vercel function, never from the visitor's browser), so it stays out of the
 * page's critical path and is unaffected by any firewall in front of a client.
 */
const FX_ENDPOINT = 'https://api.frankfurter.app/latest?from=CNY&to=USD,EUR';
const FX_SOURCE = 'European Central Bank, via frankfurter.app';

/** Fetch the live rate. Returns null on any failure: a stale or default rate
 *  always beats a broken page. */
async function fetchFx(): Promise<FxSnapshot | null> {
  try {
    const res = await fetch(FX_ENDPOINT, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { rates?: { USD?: number; EUR?: number } };
    const usd = json.rates?.USD;
    const eur = json.rates?.EUR;
    if (typeof usd !== 'number' || typeof eur !== 'number') return null;
    if (!(usd > 0) || !(eur > 0)) return null;
    return {
      usdPerCny: usd,
      eurPerCny: eur,
      fetchedAt: new Date().toISOString(),
      source: FX_SOURCE,
    };
  } catch {
    return null;
  }
}

/**
 * The rate to price with, refreshed when it is older than the TTL. Called on
 * every calculator page load: a cached rate is returned immediately, and only a
 * stale one triggers a fetch, so the page never waits on the network twice in
 * the same six hours.
 */
export async function getFx(pinned: boolean): Promise<FxSnapshot | null> {
  const cached = await kvGet<FxSnapshot>(FX_KEY);
  if (pinned) return cached;

  const age = cached ? Date.now() - Date.parse(cached.fetchedAt) : Infinity;
  if (cached && Number.isFinite(age) && age < FX_TTL_MS) return cached;

  const fresh = await fetchFx();
  if (!fresh) return cached; // stale beats nothing
  if (kvConfigured()) {
    try {
      await kvSet(FX_KEY, fresh);
    } catch {
      // Not being able to cache it is not a reason not to use it.
    }
  }
  return fresh;
}

/** Force a refresh, ignoring the TTL. Used by the settings page's button. */
export async function refreshFx(): Promise<FxSnapshot | null> {
  const fresh = await fetchFx();
  if (fresh && kvConfigured()) {
    try {
      await kvSet(FX_KEY, fresh);
    } catch {
      /* ignore */
    }
  }
  return fresh;
}

/* --- Resolution ---------------------------------------------------------- */

/** A number if it is a usable one, otherwise the fallback. */
function num(value: number | undefined, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0
    ? value
    : fallback;
}

/** Apply overrides and live FX to the image defaults. */
export function resolveImageConfig(
  overrides: PricingOverrides,
  fx: FxSnapshot | null,
): PricingConfig {
  const o = overrides.image ?? {};
  const rates = effectiveFx(overrides, fx);
  return {
    ...PRICING,
    basePerImage: {
      A: num(o.basePerImageA, PRICING.basePerImage.A),
      B: num(o.basePerImageB, PRICING.basePerImage.B),
    },
    designerHour: num(o.designerHour, PRICING.designerHour),
    productShotPack: num(o.productShotPack, PRICING.productShotPack),
    accountManagerUpliftPct: num(
      o.accountManagerUpliftPct,
      PRICING.accountManagerUpliftPct,
    ),
    // An order minimum below 1 would let a client quote nothing.
    minimumImages: Math.max(1, Math.floor(num(o.minimumImages, PRICING.minimumImages))),
    complexityMultiplier: {
      Low: num(o.complexityMultiplier?.Low, PRICING.complexityMultiplier.Low),
      Medium: num(o.complexityMultiplier?.Medium, PRICING.complexityMultiplier.Medium),
      High: num(o.complexityMultiplier?.High, PRICING.complexityMultiplier.High),
    },
    fx: rates,
  };
}

/** Apply overrides and live FX to the video defaults. */
export function resolveVideoConfig(
  overrides: PricingOverrides,
  fx: FxSnapshot | null,
): VideoPricingConfig {
  const o = overrides.video ?? {};
  const d = VIDEO_PRICING;
  return {
    ...d,
    rates: {
      accountManager: num(o.rateAccountManager, d.rates.accountManager),
      juniorCreativeDirector: num(
        o.rateJuniorCreativeDirector,
        d.rates.juniorCreativeDirector,
      ),
      aigcProducer: num(o.rateAigcProducer, d.rates.aigcProducer),
      designer: num(o.rateDesigner, d.rates.designer),
      editor: num(o.rateEditor, d.rates.editor),
    },
    engine: {
      ...d.engine,
      costPerImageGenUsd: num(o.costPerImageGenUsd, d.engine.costPerImageGenUsd),
      costPerVideoClipGenUsd: num(
        o.costPerVideoClipGenUsd,
        d.engine.costPerVideoClipGenUsd,
      ),
      imageGensPerKeyframe: num(o.imageGensPerKeyframe, d.engine.imageGensPerKeyframe),
      keyframesPerSequence: num(o.keyframesPerSequence, d.engine.keyframesPerSequence),
      videoClipGensPerSequence: num(
        o.videoClipGensPerSequence,
        d.engine.videoClipGensPerSequence,
      ),
      gensPerRevisionRound: num(o.gensPerRevisionRound, d.engine.gensPerRevisionRound),
      includedRevisionRounds: num(
        o.includedRevisionRounds,
        d.engine.includedRevisionRounds,
      ),
      usdToCny: num(o.engineUsdToCny, d.engine.usdToCny),
    },
    pmPercent: num(o.pmPercent, d.pmPercent),
    // A zero here would divide by zero when deriving the shot count.
    averageSecondsPerSequence: Math.max(
      1,
      num(o.averageSecondsPerSequence, d.averageSecondsPerSequence),
    ),
    productShotPack: num(o.productShotPack, d.productShotPack),
    complexityMultiplier: {
      Low: num(o.complexityMultiplier?.Low, d.complexityMultiplier.Low),
      Medium: num(o.complexityMultiplier?.Medium, d.complexityMultiplier.Medium),
      High: num(o.complexityMultiplier?.High, d.complexityMultiplier.High),
    },
    fx: effectiveFx(overrides, fx),
  };
}

/**
 * The rates to price with. A pinned override wins over the live rate, a live
 * rate wins over the default, and the default is always there to catch a fall.
 * Both calculators share one pair of rates: a CNY is a CNY.
 */
function effectiveFx(
  overrides: PricingOverrides,
  fx: FxSnapshot | null,
): { usdPerCny: number; eurPerCny: number } {
  const manual = overrides.fx ?? {};
  if (manual.pinned) {
    return {
      usdPerCny: num(manual.usdPerCny, PRICING.fx.usdPerCny),
      eurPerCny: num(manual.eurPerCny, PRICING.fx.eurPerCny),
    };
  }
  return {
    usdPerCny: fx ? fx.usdPerCny : num(manual.usdPerCny, PRICING.fx.usdPerCny),
    eurPerCny: fx ? fx.eurPerCny : num(manual.eurPerCny, PRICING.fx.eurPerCny),
  };
}

/**
 * Everything the calculator page needs: both configs, fully resolved, plus the
 * rate snapshot behind them. Refreshes the exchange rate when it has gone stale,
 * which is what makes the rates current on page load.
 */
export async function loadPricingConfigs(): Promise<ResolvedPricing> {
  const overrides = await getOverrides();
  const fx = await getFx(Boolean(overrides.fx?.pinned));
  return {
    image: resolveImageConfig(overrides, fx),
    video: resolveVideoConfig(overrides, fx),
    overrides,
    fx,
    persisted: kvConfigured(),
  };
}
