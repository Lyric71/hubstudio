/**
 * Display layer for money. Pure, and the only place rounding is allowed.
 *
 * The rules it enforces, from the spec:
 *   - Currency order everywhere: CNY first, then USD, then EUR.
 *   - Whole numbers with thousands separators, e.g. Y8,314 / $1,226 / E1,077.
 *   - A zero amount renders as a single hyphen, never as a 0.
 *   - A fee with no published price renders as "On request".
 * CNY is canonical and is never rounded before converting: USD and EUR are each
 * computed from the full-precision CNY figure, and rounding happens here, once,
 * for display only.
 *
 * Language: the calculator also serves /fr/tarifs/calculateur and
 * /zh/pricing/calculator. Every formatter takes an optional number locale
 * (digits, separators, dates) and the text it writes goes through an optional
 * Translate function (t() in the browser). Both default to English, so a caller
 * that passes neither gets exactly the English output.
 */

import type { Money } from './quote.ts';

/** BCP 47 tag used for numbers and dates, by page language. */
export const NUMBER_LOCALE = { en: 'en-US', fr: 'fr-FR', zh: 'zh-CN' } as const;

/** A number locale the calculator formats in. */
export type NumberLocale = (typeof NUMBER_LOCALE)[keyof typeof NUMBER_LOCALE];

/**
 * Turns an English template into the page's language and fills its {name}
 * placeholders. Each template is a whole sentence or label, never a fragment.
 */
export type Translate = (english: string, vars?: Record<string, string | number>) => string;

/** The English Translate: placeholders filled, nothing else changed. */
export const fillTemplate: Translate = (english, vars) =>
  vars
    ? english.replace(/\{(\w+)\}/g, (whole, name: string) => (name in vars ? String(vars[name]) : whole))
    : english;

export type Currency = 'CNY' | 'USD' | 'EUR';

/** CNY first, then USD, then EUR. This order holds wherever the three appear. */
export const CURRENCIES: Currency[] = ['CNY', 'USD', 'EUR'];

/** The currency the quotation opens in. */
export const DEFAULT_CURRENCY: Currency = 'USD';

/** True for any string that names a currency we display. */
export function isCurrency(value: unknown): value is Currency {
  return CURRENCIES.includes(value as Currency);
}

/** The full name of a currency, for the selector. */
export const CURRENCY_NAME: Record<Currency, string> = {
  CNY: 'Chinese yuan',
  USD: 'US dollar',
  EUR: 'Euro',
};

const SYMBOL: Record<Currency, string> = {
  CNY: '¥',
  USD: '$',
  EUR: '€',
};

/** The symbol a currency prints with, e.g. for a column header. */
export function symbolOf(currency: Currency): string {
  return SYMBOL[currency];
}

/** A whole-number amount with thousands separators, e.g. "8,314". */
function whole(amount: number, locale: NumberLocale): string {
  return Math.round(amount).toLocaleString(locale, { maximumFractionDigits: 0 });
}

/** The amount of `money` in one currency, unrounded. */
export function amountIn(money: Money, currency: Currency): number {
  if (currency === 'CNY') return money.cny;
  return currency === 'USD' ? money.usd : money.eur;
}

/**
 * One amount, ready to print. A zero collapses to a hyphen, so an empty line
 * reads as empty rather than as something priced at nothing.
 */
export function formatMoney(money: Money, currency: Currency, locale: NumberLocale = 'en-US'): string {
  const amount = amountIn(money, currency);
  if (Math.round(amount) === 0) return '-';
  return SYMBOL[currency] + whole(amount, locale);
}

/**
 * A unit price. A zero unit price is not free: it means the fee depends on the
 * job and is quoted case by case.
 */
export function formatUnit(
  money: Money,
  currency: Currency,
  onRequest: boolean,
  locale: NumberLocale = 'en-US',
  tr: Translate = fillTemplate,
): string {
  return onRequest ? tr('On request') : formatMoney(money, currency, locale);
}

/** A percentage as a client-facing label, e.g. "+30%". */
export function formatUplift(pct: number): string {
  return `+${Math.round(pct * 100)}%`;
}

/** A complexity multiplier as a label, e.g. "x1.5" ("x1,5" in French). */
export function formatMultiplier(multiplier: number, locale: NumberLocale = 'en-US'): string {
  return `x${multiplier.toLocaleString(locale, { maximumFractionDigits: 10, useGrouping: false })}`;
}

/** Quotation date, e.g. "July 14, 2026". */
export function formatDate(date: Date, locale: NumberLocale = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
