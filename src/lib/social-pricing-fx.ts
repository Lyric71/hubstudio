/**
 * Weekly FX conversion & formatting for Social Network retainers & add-ons on `/pricing`.
 *
 * - English (`/pricing`) displays USD (`$`).
 * - French (`/fr/tarifs`) displays Euro (`EUR` / `€`).
 * - Chinese (`/zh/pricing`) displays Chinese Yuan (`CNY` / `¥`).
 *
 * Conversion rates are checked and updated weekly via `scripts/update-weekly-pricing.mjs`
 * (and refreshed client-side if the 7-day window has elapsed).
 */

import socialFxData from '../data/social-fx.json';

export type SocialCurrency = 'USD' | 'EUR' | 'CNY';

export interface SocialFxRates {
  USD: number;
  EUR: number;
  CNY: number;
}

export interface SocialFxSnapshot {
  base: 'USD';
  rates: SocialFxRates;
  fxDate: string;
  checkedAt: string;
  nextCheckDue: string;
  updateCadence: 'weekly';
  source: string;
}

export const SOCIAL_FX: SocialFxSnapshot = socialFxData as SocialFxSnapshot;

/** Map page locale to its target display currency. */
export function socialCurrencyForLocale(locale?: string): SocialCurrency {
  if (locale === 'fr' || locale?.startsWith('fr')) return 'EUR';
  if (locale === 'zh' || locale?.startsWith('zh')) return 'CNY';
  return 'USD';
}

/**
 * Clean rounding for converted retainer and add-on amounts:
 * - Amounts >= 200 round to nearest 10 (e.g. 1,602.27 -> 1,600; 12,016.98 -> 12,020).
 * - Amounts < 200 round to nearest integer (e.g. 31.16 -> 31; 80.11 -> 80).
 */
export function roundSocialAmount(raw: number): number {
  if (raw >= 200) return Math.round(raw / 10) * 10;
  return Math.round(raw);
}

/** Convert a USD amount into the target currency using the weekly FX rates. */
export function convertUsdToSocialCurrency(
  usd: number,
  currency: SocialCurrency,
  rates: SocialFxRates = SOCIAL_FX.rates,
): number {
  if (currency === 'USD') return Math.round(usd);
  const rate = currency === 'EUR' ? rates.EUR : rates.CNY;
  return roundSocialAmount(usd * rate);
}

/** Format a numeric amount in USD (`$1,800`), EUR (`1 600 €`), or CNY (`¥12,020`). */
export function formatSocialCurrencyAmount(
  amount: number,
  currency: SocialCurrency,
): string {
  const n = Math.round(amount);
  if (currency === 'EUR') {
    const formatted = n.toLocaleString('fr-FR', { maximumFractionDigits: 0 }).replace(/\s/g, '\u00a0');
    return `${formatted}\u00a0€`;
  }
  if (currency === 'CNY') {
    const formatted = n.toLocaleString('en-US', { maximumFractionDigits: 0 });
    return `¥${formatted}`;
  }
  const formatted = n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  return `$${formatted}`;
}

/** Extract a numeric USD value from a price string such as `"$1,800"` or `"$1,500/month"`, or null if percentage. */
export function parseUsdPriceString(priceStr: string): number | null {
  const m = /\$([0-9][0-9,]*)/.exec(priceStr);
  if (!m) return null;
  const parsed = Number(m[1].replace(/,/g, ''));
  return Number.isFinite(parsed) ? parsed : null;
}

/**
 * Replace any `$X,XXX` USD amount inside a price string with the converted
 * localized currency amount (`EUR` for `fr`, `CNY` for `zh`, `USD` for `en`).
 */
export function localizePriceText(
  text: string,
  locale?: string,
  rates: SocialFxRates = SOCIAL_FX.rates,
): string {
  const currency = socialCurrencyForLocale(locale);
  if (currency === 'USD') return text;
  return text.replace(/\$([0-9][0-9,]*)/g, (match, numPart: string) => {
    const usd = Number(numPart.replace(/,/g, ''));
    if (!Number.isFinite(usd)) return match;
    const converted = convertUsdToSocialCurrency(usd, currency, rates);
    return formatSocialCurrencyAmount(converted, currency);
  });
}
