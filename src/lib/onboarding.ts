/**
 * The onboarding offer (`/services/onboarding`), in two steps: the booking
 * form first (`/services/onboarding/book`, posting to /api/onboarding), then
 * payment on the page the form lands on (`/thank-you/onboarding`).
 *
 * The offer: 500 USD, one payment, at least four hours of live sessions (the
 * team set up with the customer, its people trained), then three months of
 * free support. 250 USD of it goes back into the team's wallet in the app,
 * spent like any other money in it. That is the reason to buy, so the pages
 * lead with it.
 */
import type { Locale } from '../i18n/index';

/**
 * The payment, one live Payment Link per language, each in the currency its
 * page shows (round local prices, not conversions). Picked by the locale of
 * the page being rendered (Astro.locals.locale). The copy never names the
 * payment provider.
 *
 * - en: 500 USD, by card or Alipay.
 * - fr: 500 EUR, by card only (Alipay takes no euros).
 * - zh: 3,500 CNY, by bank card, Alipay or WeChat Pay.
 *
 * The 250 back (250 USD, 250 EUR, 1,750 CNY on the pages) is added to the
 * team's wallet by us once the payment is in, not by the payment itself.
 */
export const ONBOARDING_PAY: Record<Locale, string> = {
  en: 'https://buy.stripe.com/aFa4gycAzfyadwZ4tZ5kk03',
  fr: 'https://buy.stripe.com/9B6fZg7gfadQ9gJgcH5kk04',
  zh: 'https://buy.stripe.com/6oU3cu0RR3PsdwZ6C75kk05',
};

/** The booking form, step one. English address: pages localize it. */
export const ONBOARDING_BOOK = { label: 'Book onboarding', href: '/services/onboarding/book' };

/** Where a sent booking lands: step two, the payment. */
export const ONBOARDING_THANKS = '/thank-you/onboarding';

/**
 * The languages a session can run in: values the API whitelists, the label
 * the form shows, and the name the email gives. The labels say "In French"
 * rather than "French" because the shared dictionary already holds "French"
 * as a nationality (the team pages), which would read "France" on /fr.
 */
export const SESSION_LANGUAGES: { value: string; label: string; name: string }[] = [
  { value: 'en', label: 'In English', name: 'English' },
  { value: 'fr', label: 'In French', name: 'French' },
  { value: 'zh', label: 'In Chinese', name: 'Chinese' },
];

/** "Already on hubStudio?": whether the team exists yet. */
export const TEAM_STATUS: { value: string; label: string }[] = [
  { value: 'yes', label: 'Yes, we have a team' },
  { value: 'no', label: 'Not yet' },
];

/** Field caps, shared by the form's maxlength and the API's checks. */
export const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 160,
  company: 120,
  website: 200,
  people: 1000,
};

export const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * The dates a booking may ask for, as ISO days: from yesterday in UTC (so a
 * visitor east of UTC can still pick their tomorrow) to about four months
 * ahead. The form sets the same bounds in the browser; the API enforces them.
 */
export function bookingBounds(now = Date.now()): { min: string; max: string } {
  const DAY = 86_400_000;
  const midnight = new Date(now).setUTCHours(0, 0, 0, 0);
  const iso = (ms: number) => new Date(ms).toISOString().slice(0, 10);
  return { min: iso(midnight - DAY), max: iso(midnight + 120 * DAY) };
}
