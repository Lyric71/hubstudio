/**
 * The video pricing core: pure functions, no DOM, no framework, no side effects.
 *
 * It takes a Quote input object and returns an itemized breakdown, every line
 * carrying CNY, USD, and EUR. The same module runs on the server (first paint,
 * and the no-JS fallback) and in the browser, and `npm run test:pricing`
 * exercises it directly.
 *
 * Every rate, hour, and multiplier comes from video-config.ts. Nothing is
 * hard-coded here. All arithmetic is done in CNY at full precision: CNY is never
 * rounded before converting, and rounding happens once, at display.
 */

import {
  VIDEO_ADDONS,
  VIDEO_PRICING,
  type Complexity,
  type MasterFormat,
  type VideoAddonId,
  type VideoAddonSpec,
  type VideoPricingConfig,
} from './video-config.ts';
import type { Money } from './quote.ts';
import { fillTemplate, type Translate } from './format.ts';

/* --- Inputs -------------------------------------------------------------- */

export interface VideoQuoteInputs {
  numberOfVideos: number;
  /** Finished duration of one video, in seconds. This is the primary driver. */
  videoLengthSeconds: number;
  complexity: Complexity;
  /** Display choice only: it has no price impact. */
  masterFormat: MasterFormat;
  addOns: Record<VideoAddonId, number>;
}

/** Every add-on quantity at zero. */
export function emptyVideoAddOns(): Record<VideoAddonId, number> {
  const addOns = {} as Record<VideoAddonId, number>;
  for (const addon of VIDEO_ADDONS) addOns[addon.id] = 0;
  return addOns;
}

export const DEFAULT_VIDEO_INPUTS: VideoQuoteInputs = {
  numberOfVideos: VIDEO_PRICING.minimumVideos,
  videoLengthSeconds: VIDEO_PRICING.defaultLengthSeconds,
  complexity: 'Low',
  masterFormat: '16:9',
  addOns: emptyVideoAddOns(),
};

/** Coerce to an integer at or above `min`, falling back to `min`. */
function toCount(value: unknown, min: number): number {
  const n = Math.floor(Number(value));
  return Number.isFinite(n) && n >= min ? n : min;
}

/** Clamp raw input into a valid quote. No caller has to defend against a
 *  fraction, a negative, a zero-length video, or a typo in a dropdown. */
export function normalizeVideoInputs(
  raw: Partial<VideoQuoteInputs>,
  config: VideoPricingConfig = VIDEO_PRICING,
): VideoQuoteInputs {
  const addOns = emptyVideoAddOns();
  for (const addon of VIDEO_ADDONS) {
    addOns[addon.id] = toCount(raw.addOns?.[addon.id], 0);
  }
  const complexity =
    typeof raw.complexity === 'string' && raw.complexity in config.complexityMultiplier
      ? (raw.complexity as Complexity)
      : 'Low';
  const masterFormat: MasterFormat =
    raw.masterFormat === '9:16' || raw.masterFormat === '1:1' ? raw.masterFormat : '16:9';

  return {
    numberOfVideos: toCount(raw.numberOfVideos, config.minimumVideos),
    // A video must have a length: one second is the floor, not zero.
    videoLengthSeconds: toCount(raw.videoLengthSeconds, 1),
    complexity,
    masterFormat,
    addOns,
  };
}

/* --- Currency ------------------------------------------------------------ */

/** One CNY amount in all three display currencies, at the video FX rates. */
export function convertVideo(
  cny: number,
  config: VideoPricingConfig = VIDEO_PRICING,
): Money {
  return {
    cny,
    usd: cny * config.fx.usdPerCny,
    eur: cny * config.fx.eurPerCny,
  };
}

/* --- Result -------------------------------------------------------------- */

/** One itemized line of the quotation. */
export interface VideoLine {
  label: string;
  /** How the line was arrived at, in the client's terms. */
  detail: string;
  amount: Money;
}

export interface VideoAddonLine {
  spec: VideoAddonSpec;
  quantity: number;
  unit: Money;
  line: Money;
}

export interface VideoQuote {
  inputs: VideoQuoteInputs;
  /** Shots, derived from length: ceil(seconds / secondsPerSequence). */
  sequences: number;
  creativeLines: VideoLine[];
  creativeSubtotal: Money;
  productionLines: VideoLine[];
  productionSubtotal: Money;
  /** Creative + production, for one video, before complexity. */
  basePerVideo: Money;
  complexityMultiplier: number;
  /** Base price x the complexity multiplier. */
  adjustedPerVideo: Money;
  /** Adjusted price x the number of videos. */
  videoProduction: Money;
  addOnLines: VideoAddonLine[];
  addOnsTotal: Money;
  total: Money;
}

/** The engine cost of each unit of generation, in CNY. */
function engineCosts(config: VideoPricingConfig) {
  const e = config.engine;
  return {
    /** Keyframes for one shot: a start and an end frame. */
    keyframesPerSequence:
      e.imageGensPerKeyframe * e.keyframesPerSequence * e.costPerImageGenUsd * e.usdToCny,
    /** AI scene generation for one shot. */
    aiScenePerSequence: e.videoClipGensPerSequence * e.costPerVideoClipGenUsd * e.usdToCny,
    /** One revision round. */
    perRevisionRound: e.gensPerRevisionRound * e.costPerVideoClipGenUsd * e.usdToCny,
  };
}

/** Shots in a video of this length. Always rounded up: a part-shot is a shot. */
export function sequencesFor(
  seconds: number,
  config: VideoPricingConfig = VIDEO_PRICING,
): number {
  return Math.ceil(Math.max(1, seconds) / config.averageSecondsPerSequence);
}

/**
 * Price a video project. The one entry point: inputs in, every number the
 * quotation needs out, each already expressed in CNY, USD, and EUR.
 *
 * `tr` writes the line labels and details: English by default, t() in the
 * browser on a French or Chinese page. Each one is a whole template.
 */
export function computeVideoQuote(
  rawInputs: Partial<VideoQuoteInputs>,
  config: VideoPricingConfig = VIDEO_PRICING,
  tr: Translate = fillTemplate,
): VideoQuote {
  const inputs = normalizeVideoInputs(rawInputs, config);
  const { rates, hours, pmPercent } = config;
  const engine = engineCosts(config);
  const shots = sequencesFor(inputs.videoLengthSeconds, config);
  const money = (cny: number) => convertVideo(cny, config);

  /* Creative. Flat per video: none of it scales with length. */
  const briefCny = hours.briefKickoffAm * rates.accountManager;
  const treatmentCny = hours.creativeTreatmentJcd * rates.juniorCreativeDirector;
  // Project management is mandatory, billed as a share of the non-AM hours in
  // the part it sits in. Creative's non-AM hours are the treatment hours.
  const pmCreativeHours = pmPercent * hours.creativeTreatmentJcd;
  const pmCreativeCny = pmCreativeHours * rates.accountManager;

  const creativeLines: VideoLine[] = [
    {
      label: tr('Brief and kickoff'),
      detail: tr('{hours} h account manager', { hours: hours.briefKickoffAm }),
      amount: money(briefCny),
    },
    {
      label: tr('Creative treatment and storyboard'),
      detail: tr('{hours} h creative director', { hours: hours.creativeTreatmentJcd }),
      amount: money(treatmentCny),
    },
    {
      label: tr('Project management'),
      detail: tr('{percent}% of the creative time', { percent: Math.round(pmPercent * 100) }),
      amount: money(pmCreativeCny),
    },
  ];
  const creativeCny = briefCny + treatmentCny + pmCreativeCny;

  /* Production. Per-shot work scales with the shot count; the rest does not. */
  const keyframesPerShotCny =
    hours.keyframesDesignerPerSequence * rates.designer + engine.keyframesPerSequence;
  const aiScenePerShotCny =
    hours.aiSceneProducerPerSequence * rates.aigcProducer + engine.aiScenePerSequence;
  const keyframesCny = shots * keyframesPerShotCny;
  const aiSceneCny = shots * aiScenePerShotCny;
  const compositingCny = hours.compositingEditorPerVideo * rates.editor;
  const revisionAigcCny = engine.perRevisionRound * config.engine.includedRevisionRounds;
  const revisionsCny = hours.revisionsEditorPerVideo * rates.editor + revisionAigcCny;
  const deliveryCny = hours.deliveryEditorPerVideo * rates.editor;

  // Production's non-AM hours: the per-video ones, plus the per-shot ones times
  // the shot count. A longer video therefore carries proportionally more PM.
  const perVideoNonAmHours =
    hours.compositingEditorPerVideo +
    hours.revisionsEditorPerVideo +
    hours.deliveryEditorPerVideo;
  const perSequenceNonAmHours =
    hours.keyframesDesignerPerSequence + hours.aiSceneProducerPerSequence;
  const pmProductionHours =
    pmPercent * (perVideoNonAmHours + shots * perSequenceNonAmHours);
  const pmProductionCny = pmProductionHours * rates.accountManager;

  const one = shots === 1;
  const productionLines: VideoLine[] = [
    {
      label: tr('Sequence keyframes'),
      detail: one
        ? tr('1 shot, a start and an end frame each')
        : tr('{shots} shots, a start and an end frame each', { shots }),
      amount: money(keyframesCny),
    },
    {
      label: tr('AI scene generation'),
      detail: one ? tr('1 shot') : tr('{shots} shots', { shots }),
      amount: money(aiSceneCny),
    },
    {
      label: tr('Compositing and edit'),
      detail: tr('{hours} h editor, per video', { hours: hours.compositingEditorPerVideo }),
      amount: money(compositingCny),
    },
    {
      label: tr('{rounds} revision rounds', { rounds: config.engine.includedRevisionRounds }),
      detail: tr('Edit, text, and timing'),
      amount: money(revisionsCny),
    },
    {
      label: tr('Delivery'),
      detail: tr('Masters, subtitles, thumbnail'),
      amount: money(deliveryCny),
    },
    {
      label: tr('Project management'),
      detail: tr('{percent}% of the production time', { percent: Math.round(pmPercent * 100) }),
      amount: money(pmProductionCny),
    },
  ];
  const productionCny =
    keyframesCny +
    aiSceneCny +
    compositingCny +
    revisionsCny +
    deliveryCny +
    pmProductionCny;

  /* Complexity multiplies the base price of one video, and nothing else. */
  const baseCny = creativeCny + productionCny;
  const multiplier = config.complexityMultiplier[inputs.complexity];
  const adjustedCny = baseCny * multiplier;
  const videoProductionCny = adjustedCny * inputs.numberOfVideos;

  /* Add-ons. Explicit quantities: never scaled by complexity or video count. */
  const unitFor = (id: VideoAddonId): number => {
    switch (id) {
      case 'socialCutDowns':
        // One keyframe unit (start and end frame), plus editor time.
        return keyframesPerShotCny + 2 * rates.editor;
      case 'reframeCrop':
        return 2 * rates.editor;
      case 'reframeRegen':
        // A native re-render at the target ratio costs a whole production pass,
        // so this unit moves with the length of the video being quoted.
        return productionCny;
      case 'extraSequences':
        return keyframesPerShotCny + aiScenePerShotCny;
      case 'extraRevisionRounds':
        return 2 * rates.editor + engine.perRevisionRound;
      case 'extraLanguageSubtitles':
        return 1 * rates.editor;
      case 'productShotPacks':
        return config.productShotPack;
    }
  };

  const addOnLines: VideoAddonLine[] = VIDEO_ADDONS.map((spec) => {
    const quantity = inputs.addOns[spec.id];
    const unit = unitFor(spec.id);
    return {
      spec,
      quantity,
      unit: money(unit),
      line: money(unit * quantity),
    };
  });
  const addOnsCny = addOnLines.reduce((sum, l) => sum + l.line.cny, 0);

  return {
    inputs,
    sequences: shots,
    creativeLines,
    creativeSubtotal: money(creativeCny),
    productionLines,
    productionSubtotal: money(productionCny),
    basePerVideo: money(baseCny),
    complexityMultiplier: multiplier,
    adjustedPerVideo: money(adjustedCny),
    videoProduction: money(videoProductionCny),
    addOnLines,
    addOnsTotal: money(addOnsCny),
    total: money(videoProductionCny + addOnsCny),
  };
}
