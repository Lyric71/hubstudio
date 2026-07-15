/**
 * Acceptance tests for the VIDEO pricing core (src/lib/pricing/video-*).
 *
 * These are the cases from section 17 of the video build spec, run against the
 * exact module the site imports.
 *
 *   node --experimental-strip-types scripts/test-pricing-video.mjs
 *   npm run test:pricing
 */

import {
  computeVideoQuote,
  emptyVideoAddOns,
  normalizeVideoInputs,
  sequencesFor,
} from '../src/lib/pricing/video-quote.ts';
import { formatMoney } from '../src/lib/pricing/format.ts';

let failures = 0;

/**
 * The spec's expected figures carry rounding from its own worked examples (it
 * prints a base of 15,867.83 where the constants give 15,867.89), so money
 * comparisons allow a small tolerance. The core keeps full precision, and every
 * displayed figure asserted below is exact.
 */
function near(actual, expected, label, tolerance = 0.2) {
  report(
    Math.abs(actual - expected) <= tolerance,
    label,
    actual.toFixed(2),
    expected.toFixed(2),
  );
}

function is(actual, expected, label) {
  report(Object.is(actual, expected), label, String(actual), String(expected));
}

function report(ok, label, actual, expected) {
  if (ok) {
    console.log(`  ok   ${label}`);
  } else {
    failures++;
    console.log(`  FAIL ${label}: got ${actual}, expected ${expected}`);
  }
}

/** A quote input, defaulting to the spec's reference video. */
function quote(overrides = {}) {
  return computeVideoQuote({
    numberOfVideos: 1,
    videoLengthSeconds: 30,
    complexity: 'Low',
    masterFormat: '16:9',
    addOns: emptyVideoAddOns(),
    ...overrides,
  });
}

console.log('\nT1. 1 video, 30s (6 shots), Low, no add-ons');
{
  const q = quote();
  is(q.sequences, 6, '30 seconds is 6 shots');
  near(q.creativeSubtotal.cny, 2340, 'creative subtotal CNY', 0.5);
  near(q.productionSubtotal.cny, 13528, 'production subtotal CNY', 0.5);
  near(q.total.cny, 15868, 'total CNY', 0.5);
  is(formatMoney(q.total, 'CNY'), '¥15,868', 'display CNY');
  is(formatMoney(q.total, 'USD'), '$2,341', 'display USD');
  is(formatMoney(q.total, 'EUR'), '€2,045', 'display EUR');
}

console.log('\nT2. T1 but Medium (x1.5)');
{
  const q = quote({ complexity: 'Medium' });
  near(q.total.cny, 23802, 'total CNY', 0.5);
  is(formatMoney(q.total, 'CNY'), '¥23,802', 'display CNY');
}

console.log('\nT3. T1 but High (x2.0)');
{
  const q = quote({ complexity: 'High' });
  // The spec prints 31,735 from its rounded base (15,867.83 x 2 = 31,735.66,
  // which itself rounds to 31,736). Full precision gives 31,735.79. Both round
  // to the same displayed figure.
  near(q.total.cny, 31735.79, 'total CNY');
  is(formatMoney(q.total, 'CNY'), '¥31,736', 'display CNY');
}

console.log('\nT4. 1 video, 60s (12 shots), Low');
{
  const q = quote({ videoLengthSeconds: 60 });
  is(q.sequences, 12, '60 seconds is 12 shots');
  near(q.creativeSubtotal.cny, 2340, 'creative subtotal is unchanged', 0.5);
  near(q.productionSubtotal.cny, 23368, 'production subtotal CNY', 0.5);
  near(q.total.cny, 25708, 'total CNY', 0.5);
}

console.log('\nT5. Sequences are rounded up from length');
{
  is(sequencesFor(30), 6, '30s -> 6');
  is(sequencesFor(45), 9, '45s -> 9');
  is(sequencesFor(60), 12, '60s -> 12');
  is(sequencesFor(31), 7, '31s -> 7 (a part-shot is a shot)');
  is(sequencesFor(1), 1, '1s -> 1');
}

console.log('\nT6. Creative is independent of length');
{
  const short = quote({ videoLengthSeconds: 30 });
  const long = quote({ videoLengthSeconds: 60 });
  near(
    short.creativeSubtotal.cny,
    long.creativeSubtotal.cny,
    'creative is the same at 30s and 60s',
    0.001,
  );
  near(short.creativeSubtotal.cny, 2340, 'and it is 2,340', 0.5);
}

console.log('\nT7. T1 + 2 product-shot packs');
{
  const q = quote({ addOns: { ...emptyVideoAddOns(), productShotPacks: 2 } });
  near(q.addOnsTotal.cny, 5000, 'add-ons CNY', 0.01);
  near(q.total.cny, 20868, 'total CNY', 0.5);
}

console.log('\nT8. T1 + 1 extra sequence add-on');
{
  const q = quote({ addOns: { ...emptyVideoAddOns(), extraSequences: 1 } });
  near(q.addOnsTotal.cny, 1256, 'add-ons CNY', 0.5);
  near(q.total.cny, 17124, 'total CNY', 0.5);
}

console.log('\nT9. 2 videos, 30s, Medium, no add-ons');
{
  const q = quote({ numberOfVideos: 2, complexity: 'Medium' });
  near(q.total.cny, 47604, 'total CNY', 0.5);
}

console.log('\nT10. Add-on unit prices match the reference values');
{
  const q = quote();
  const unit = (id) => q.addOnLines.find((l) => l.spec.id === id).unit.cny;
  near(unit('socialCutDowns'), 1017, 'social cut-down', 0.5);
  near(unit('reframeCrop'), 601, 'crop-based reframe', 0.5);
  near(unit('reframeRegen'), 13528, 'native reframe is a full production pass', 0.5);
  near(unit('extraSequences'), 1256, 'extra sequence', 0.5);
  near(unit('extraRevisionRounds'), 611, 'extra revision round', 0.5);
  near(unit('extraLanguageSubtitles'), 301, 'extra language subtitles', 0.5);
  near(unit('productShotPacks'), 2500, 'product shot pack', 0.01);

  // The native reframe is derived from the video being quoted, so it grows.
  const long = quote({ videoLengthSeconds: 60 });
  near(
    long.addOnLines.find((l) => l.spec.id === 'reframeRegen').unit.cny,
    23368,
    'native reframe at 60s is the 60s production subtotal',
    0.5,
  );
}

console.log('\nT11. Add-ons are untouched by complexity and by the video count');
{
  const addOns = { ...emptyVideoAddOns(), extraSequences: 1, productShotPacks: 1 };
  const base = quote({ addOns });
  const complex = quote({ addOns, complexity: 'High' });
  const many = quote({ addOns, numberOfVideos: 4 });
  near(complex.addOnsTotal.cny, base.addOnsTotal.cny, 'complexity does not scale add-ons', 0.001);
  near(many.addOnsTotal.cny, base.addOnsTotal.cny, 'video count does not scale add-ons', 0.001);
}

console.log('\nT12. The master format carries no price impact');
{
  const wide = quote({ masterFormat: '16:9' });
  const tall = quote({ masterFormat: '9:16' });
  near(wide.total.cny, tall.total.cny, '16:9 and 9:16 cost the same', 0.001);
}

console.log('\nT13. Validation and input controls');
{
  is(normalizeVideoInputs({ numberOfVideos: 0 }).numberOfVideos, 1, 'zero videos clamps to 1');
  is(normalizeVideoInputs({ numberOfVideos: -2 }).numberOfVideos, 1, 'negative clamps to 1');
  is(normalizeVideoInputs({ videoLengthSeconds: 0 }).videoLengthSeconds, 1, 'zero length clamps to 1');
  is(normalizeVideoInputs({ videoLengthSeconds: 12.7 }).videoLengthSeconds, 12, 'length floors');
  is(normalizeVideoInputs({ complexity: 'Extreme' }).complexity, 'Low', 'unknown complexity falls to Low');
  is(normalizeVideoInputs({ masterFormat: '4:3' }).masterFormat, '16:9', 'unknown format falls to 16:9');
  is(
    normalizeVideoInputs({ addOns: { ...emptyVideoAddOns(), reframeCrop: -4 } }).addOns
      .reframeCrop,
    0,
    'negative add-on clamps to 0',
  );

  const q = quote();
  is(formatMoney(q.addOnsTotal, 'CNY'), '-', 'zero money displays as a hyphen');
}

console.log(
  failures === 0
    ? '\nAll video pricing acceptance tests passed.\n'
    : `\n${failures} video pricing test(s) failed.\n`,
);
process.exit(failures === 0 ? 0 : 1);
