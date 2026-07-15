/**
 * Save pricing settings (`POST /api/settings/save`).
 *
 * Gated by the settings session cookie: an unauthenticated request is refused
 * before a single number is read, because this endpoint is the only thing on the
 * site that can change what work costs.
 *
 * Two actions:
 *   save    persist the submitted rates as overrides
 *   refresh pull the exchange rate from the public source right now
 *   reset   drop every override and go back to the defaults in source
 */
import type { APIRoute } from 'astro';
import { isAuthed } from '../../../lib/settings-gate';
import {
  refreshFx,
  saveOverrides,
  type PricingOverrides,
} from '../../../lib/pricing/settings';

export const prerender = false;

const PAGE = '/pricing/calculator/settings';

/** A submitted number, or undefined when the field was left empty. */
function num(form: FormData, key: string): number | undefined {
  const raw = ((form.get(key) as string) ?? '').trim();
  if (raw === '') return undefined;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? value : undefined;
}

export const POST: APIRoute = async ({ request, redirect }) => {
  if (!(await isAuthed(request))) {
    return redirect(`${PAGE}?error=1`, 303);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(`${PAGE}?saved=0`, 303);
  }

  const action = ((form.get('action') as string) ?? 'save').trim();

  try {
    if (action === 'refresh') {
      const fx = await refreshFx();
      return redirect(`${PAGE}?${fx ? 'refreshed=1' : 'refreshed=0'}`, 303);
    }

    if (action === 'reset') {
      await saveOverrides({});
      return redirect(`${PAGE}?saved=1`, 303);
    }

    const overrides: PricingOverrides = {
      image: {
        basePerImageA: num(form, 'image.basePerImageA'),
        basePerImageB: num(form, 'image.basePerImageB'),
        designerHour: num(form, 'image.designerHour'),
        productShotPack: num(form, 'image.productShotPack'),
        // Entered as a percentage, stored as a fraction.
        accountManagerUpliftPct: pct(num(form, 'image.accountManagerUpliftPct')),
        minimumImages: num(form, 'image.minimumImages'),
        complexityMultiplier: {
          Low: num(form, 'image.multLow'),
          Medium: num(form, 'image.multMedium'),
          High: num(form, 'image.multHigh'),
        },
      },
      video: {
        rateAccountManager: num(form, 'video.rateAccountManager'),
        rateJuniorCreativeDirector: num(form, 'video.rateJuniorCreativeDirector'),
        rateAigcProducer: num(form, 'video.rateAigcProducer'),
        rateDesigner: num(form, 'video.rateDesigner'),
        rateEditor: num(form, 'video.rateEditor'),
        pmPercent: pct(num(form, 'video.pmPercent')),
        averageSecondsPerSequence: num(form, 'video.averageSecondsPerSequence'),
        keyframesPerSequence: num(form, 'video.keyframesPerSequence'),
        includedRevisionRounds: num(form, 'video.includedRevisionRounds'),
        costPerImageGenUsd: num(form, 'video.costPerImageGenUsd'),
        costPerVideoClipGenUsd: num(form, 'video.costPerVideoClipGenUsd'),
        imageGensPerKeyframe: num(form, 'video.imageGensPerKeyframe'),
        videoClipGensPerSequence: num(form, 'video.videoClipGensPerSequence'),
        gensPerRevisionRound: num(form, 'video.gensPerRevisionRound'),
        engineUsdToCny: num(form, 'video.engineUsdToCny'),
        productShotPack: num(form, 'video.productShotPack'),
        complexityMultiplier: {
          Low: num(form, 'video.multLow'),
          Medium: num(form, 'video.multMedium'),
          High: num(form, 'video.multHigh'),
        },
      },
      fx: {
        usdPerCny: num(form, 'fx.usdPerCny'),
        eurPerCny: num(form, 'fx.eurPerCny'),
        pinned: form.get('fx.pinned') === 'on',
      },
    };

    await saveOverrides(overrides);
    return redirect(`${PAGE}?saved=1`, 303);
  } catch {
    // The only realistic failure is KV not being connected.
    return redirect(`${PAGE}?saved=0`, 303);
  }
};

/** A percentage from the form (30) as the fraction the config wants (0.3). */
function pct(value: number | undefined): number | undefined {
  return value === undefined ? undefined : value / 100;
}
