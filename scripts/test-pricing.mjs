/**
 * Acceptance tests for the pricing core (src/lib/pricing).
 *
 * These are the cases from the quotation tool spec, run against the exact
 * module the site imports, so a change to a rate or to the math shows up here
 * before it shows up in a client's quote.
 *
 *   node --experimental-strip-types scripts/test-pricing.mjs
 *   npm run test:pricing
 */

import { computeQuote, normalizeInputs } from '../src/lib/pricing/quote.ts';
import { formatMoney, formatUnit } from '../src/lib/pricing/format.ts';

let failures = 0;

/** Money comparison: equal to the cent. */
function near(actual, expected, label) {
  const ok = Math.abs(actual - expected) < 0.005;
  report(ok, label, actual.toFixed(2), expected.toFixed(2));
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

/** Quantities for a quote, defaulting every add-on to zero. */
function addons(overrides = {}) {
  return {
    extraConcepts: 0,
    extraRetouchRounds: 0,
    extraSizes: 0,
    threeDProducts: 0,
    productShoots: 0,
    ...overrides,
  };
}

console.log('\n1. Default: 1 image, Option A, no add-ons, account manager off');
{
  const q = computeQuote({ numberOfImages: 1, deliveryOption: 'A', addons: addons() });
  near(q.total.cny, 1744.75, 'total CNY');
  near(q.total.usd, 257.46, 'total USD');
  is(formatMoney(q.total, 'CNY'), 'CNY 1,745', 'display CNY');
  is(formatMoney(q.total, 'USD'), '$257', 'display USD');
  is(formatMoney(q.total, 'EUR'), 'EUR 226', 'display EUR');
}

console.log('\n2. 1 image, Option B, no add-ons, account manager off');
{
  const q = computeQuote({ numberOfImages: 1, deliveryOption: 'B', addons: addons() });
  near(q.total.cny, 2013.99, 'total CNY');
  near(q.total.usd, 297.19, 'total USD');
  is(formatMoney(q.total, 'CNY'), 'CNY 2,014', 'display CNY');
  is(formatMoney(q.total, 'USD'), '$297', 'display USD');
  is(formatMoney(q.total, 'EUR'), 'EUR 260', 'display EUR');
}

console.log('\n3. 3 images, Option B, 2 extra concepts, account manager on');
{
  const q = computeQuote({
    numberOfImages: 3,
    deliveryOption: 'B',
    addons: addons({ extraConcepts: 2 }),
    dedicatedAccountManager: true,
  });
  near(q.imageProduction.cny, 4484.57, 'image production CNY');
  near(q.addons.cny, 546.62, 'add-ons CNY');
  near(q.subtotal.cny, 5031.19, 'subtotal CNY');
  near(q.accountManagerUplift.cny, 1509.36, 'account manager uplift CNY');
  near(q.total.cny, 6540.55, 'total CNY');
  // The spec's worked example prints USD 965.15, having rounded an intermediate
  // (it shows image production as 4484.58, where 778.70 + 1235.29 x 3 is
  // 4484.57). Full precision, which the spec itself mandates, gives 965.14 from
  // the same CNY total. Both display as $965.
  near(q.total.usd, 6540.55 / 6.7768, 'total USD');
  is(formatMoney(q.total, 'CNY'), 'CNY 6,541', 'display CNY');
  is(formatMoney(q.total, 'USD'), '$965', 'display USD');
  near(q.perImage.cny, 6540.55 / 3, 'per-image CNY');
}

console.log('\n4. Add-on scaling: retouch and sizes multiply by images, others do not');
{
  const base = { numberOfImages: 4, deliveryOption: 'A' };
  const line = (q, id) => q.addonLines.find((l) => l.spec.id === id).line.cny;

  const retouch = computeQuote({ ...base, addons: addons({ extraRetouchRounds: 2 }) });
  near(line(retouch, 'extraRetouchRounds'), 546.61 * 2 * 4, 'extra retouch x images');

  const sizes = computeQuote({ ...base, addons: addons({ extraSizes: 2 }) });
  near(line(sizes, 'extraSizes'), 409.96 * 2 * 4, 'extra sizes x images');

  const concepts = computeQuote({ ...base, addons: addons({ extraConcepts: 2 }) });
  near(line(concepts, 'extraConcepts'), 273.31 * 2, 'extra concepts, flat');

  const threeD = computeQuote({ ...base, addons: addons({ threeDProducts: 2 }) });
  near(line(threeD, 'threeDProducts'), 273.31 * 2, '3D angle extraction, flat');

  const shoots = computeQuote({ ...base, addons: addons({ productShoots: 2 }) });
  near(line(shoots, 'productShoots'), 0, 'product shoot, no published fee');
}

console.log('\n5. Validation and edge cases');
{
  is(normalizeInputs({ numberOfImages: 0 }).numberOfImages, 1, 'zero images clamps to 1');
  is(normalizeInputs({ numberOfImages: -5 }).numberOfImages, 1, 'negative clamps to 1');
  is(normalizeInputs({ numberOfImages: 2.7 }).numberOfImages, 2, 'fraction floors');
  is(
    normalizeInputs({ addons: addons({ extraSizes: -3 }) }).addons.extraSizes,
    0,
    'negative add-on clamps to 0',
  );
  is(normalizeInputs({ deliveryOption: 'Z' }).deliveryOption, 'A', 'bad option falls to A');

  const q = computeQuote({ numberOfImages: 1, deliveryOption: 'A', addons: addons() });
  is(formatMoney(q.addons, 'CNY'), '-', 'zero money displays as a hyphen');
  const shoot = q.addonLines.find((l) => l.spec.id === 'productShoots');
  is(
    formatUnit(shoot.unit, 'CNY', shoot.onRequest),
    'On request',
    'zero-fee shoot displays On request',
  );
}

console.log(
  failures === 0
    ? '\nAll pricing acceptance tests passed.\n'
    : `\n${failures} pricing test(s) failed.\n`,
);
process.exit(failures === 0 ? 0 : 1);
