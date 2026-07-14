/**
 * Acceptance tests for the pricing core (src/lib/pricing).
 *
 * These are the cases from section 15 of the build spec, run against the exact
 * module the site imports, so a change to a rate, a multiplier, or the math
 * shows up here before it shows up in a client's quote.
 *
 *   node --experimental-strip-types scripts/test-pricing.mjs
 *   npm run test:pricing
 */

import {
  computeQuote,
  emptyOrderAddons,
  emptyRow,
  normalizeInputs,
} from '../src/lib/pricing/quote.ts';
import { formatMoney } from '../src/lib/pricing/format.ts';

let failures = 0;

/**
 * Money comparison. The spec's expected figures carry rounding from its own
 * worked examples (it prints 8,314.41 where 5 x 1662.88 is 8,314.40), so a
 * tolerance of two cents accepts them without loosening the math: the core
 * itself keeps full precision, and every displayed figure below is exact.
 */
function near(actual, expected, label) {
  report(Math.abs(actual - expected) <= 0.02, label, actual.toFixed(2), expected.toFixed(2));
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

/** `n` images, all Low, no add-ons, unless `rows` overrides a row by index. */
function images(n, rows = {}) {
  return Array.from({ length: n }, (_, i) => ({ ...emptyRow(), ...(rows[i] ?? {}) }));
}

/** Order-level quantities, everything zero unless named. */
function orderAddons(overrides = {}) {
  return { ...emptyOrderAddons(), ...overrides };
}

console.log('\nT1. 5 images, all Low, Option A, no add-ons, account manager off');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5),
    orderAddons: orderAddons(),
  });
  near(q.imageProduction.cny, 8314.41, 'production CNY');
  near(q.total.cny, 8314.41, 'total CNY');
  is(formatMoney(q.total, 'CNY'), '¥8,314', 'display CNY');
  is(formatMoney(q.total, 'USD'), '$1,226', 'display USD');
  is(formatMoney(q.total, 'EUR'), '€1,077', 'display EUR');
}

console.log('\nT2. 5 images, all Low, Option B, no add-ons, account manager off');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'B',
    perImage: images(5),
    orderAddons: orderAddons(),
  });
  near(q.total.cny, 9660.6, 'total CNY');
  is(formatMoney(q.total, 'CNY'), '¥9,661', 'display CNY');
  is(formatMoney(q.total, 'USD'), '$1,425', 'display USD');
  is(formatMoney(q.total, 'EUR'), '€1,251', 'display EUR');
}

console.log('\nT3. Complexity multiplies the per-image production price');
{
  const high = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5, { 0: { complexity: 'High' } }),
    orderAddons: orderAddons(),
  });
  near(high.imageLines[0].production.cny, 3325.77, 'one High image (1662.88 x 2.0)');

  const medium = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5, { 0: { complexity: 'Medium' } }),
    orderAddons: orderAddons(),
  });
  near(medium.imageLines[0].production.cny, 2494.32, 'one Medium image (1662.88 x 1.5)');
}

console.log('\nT4. 5 images, Option A, complexity High, Medium, Medium, Low, Low');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5, {
      0: { complexity: 'High' },
      1: { complexity: 'Medium' },
      2: { complexity: 'Medium' },
    }),
    orderAddons: orderAddons(),
  });
  near(q.imageProduction.cny, 11640.17, 'production CNY (1662.88 x 7.0)');
}

console.log('\nT5. 5 images Low, Option A, 1 extra size on image 1');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5, { 0: { extraSizes: 1 } }),
    orderAddons: orderAddons(),
  });
  near(q.optionalAddOns.cny, 273.31, 'add-ons CNY (one unit, not one per image)');
  near(q.total.cny, 8587.72, 'total CNY');
  near(q.imageLines[1].addOns.cny, 0, 'image 2 carries nothing');
}

console.log('\nT6. 5 images Low, Option A, 1 pack shot, 3 retouch rounds, 2 logos');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5),
    orderAddons: orderAddons({ productShotPacks: 1, extraRetouchRounds: 3, logo: 2 }),
  });
  near(q.productShot.cny, 2500, 'product shot CNY (flat)');
  near(q.retouch.cny, 819.92, 'retouch CNY (3 x 273.31, never x images)');
  near(q.postProduction.cny, 546.61, 'post-production CNY (2 x 273.31)');
  near(q.total.cny, 12180.94, 'total CNY');
  is(formatMoney(q.total, 'CNY'), '¥12,181', 'display CNY');
}

console.log('\nT7. T1 with the dedicated account manager on');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5),
    orderAddons: orderAddons(),
    dedicatedAccountManager: true,
  });
  near(q.subtotal.cny, 8314.41, 'subtotal CNY');
  near(q.accountManagerUplift.cny, 2494.32, 'uplift CNY (30% of the whole subtotal)');
  near(q.total.cny, 10808.73, 'total CNY');
  is(formatMoney(q.total, 'CNY'), '¥10,809', 'display CNY');
}

console.log('\nT8. The uplift covers the whole subtotal, not just production');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    perImage: images(5, { 0: { extraSizes: 1 } }),
    orderAddons: orderAddons({ productShotPacks: 1, extraRetouchRounds: 1, badge: 1 }),
    dedicatedAccountManager: true,
  });
  near(q.accountManagerUplift.cny, q.subtotal.cny * 0.3, 'uplift is 30% of subtotal');
  near(q.total.cny, q.subtotal.cny * 1.3, 'total is subtotal + uplift');
}

console.log('\nT9. Rows beyond the image count are ignored');
{
  const q = computeQuote({
    numberOfImages: 5,
    deliveryOption: 'A',
    // A sixth row, High and loaded with add-ons, left from a bigger order.
    perImage: [
      ...images(5),
      { complexity: 'High', extraSizes: 3, upscales: 3, threeDAngles: 3 },
    ],
    orderAddons: orderAddons(),
  });
  is(q.imageLines[5].ignored, true, 'row 6 is marked ignored');
  near(q.imageLines[5].production.cny, 0, 'row 6 produces nothing');
  near(q.total.cny, 8314.41, 'total is unchanged by the ignored row');
}

console.log('\nT10. Validation and input controls');
{
  is(normalizeInputs({ numberOfImages: 4 }).numberOfImages, 5, 'below MOQ clamps to 5');
  is(normalizeInputs({ numberOfImages: 0 }).numberOfImages, 5, 'zero clamps to 5');
  is(normalizeInputs({ numberOfImages: -3 }).numberOfImages, 5, 'negative clamps to 5');
  is(normalizeInputs({ numberOfImages: 7.8 }).numberOfImages, 7, 'fraction floors');
  is(normalizeInputs({ numberOfImages: 8 }).perImage.length, 8, 'grid grows to the count');
  is(normalizeInputs({ deliveryOption: 'Z' }).deliveryOption, 'A', 'bad option falls to A');
  is(
    normalizeInputs({ perImage: images(5, { 0: { complexity: 'Extreme' } }) }).perImage[0]
      .complexity,
    'Low',
    'unknown complexity falls to Low',
  );
  is(
    normalizeInputs({ perImage: images(5, { 0: { upscales: -2 } }) }).perImage[0].upscales,
    0,
    'negative quantity clamps to 0',
  );

  const q = computeQuote({ numberOfImages: 5, perImage: images(5) });
  is(formatMoney(q.optionalAddOns, 'CNY'), '-', 'zero money displays as a hyphen');
}

console.log(
  failures === 0
    ? '\nAll pricing acceptance tests passed.\n'
    : `\n${failures} pricing test(s) failed.\n`,
);
process.exit(failures === 0 ? 0 : 1);
