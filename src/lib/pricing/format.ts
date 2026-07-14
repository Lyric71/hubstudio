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
 */

import type { Money } from './quote.ts';

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
function whole(amount: number): string {
  return Math.round(amount).toLocaleString('en-US', { maximumFractionDigits: 0 });
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
export function formatMoney(money: Money, currency: Currency): string {
  const amount = amountIn(money, currency);
  if (Math.round(amount) === 0) return '-';
  return SYMBOL[currency] + whole(amount);
}

/**
 * A unit price. A zero unit price is not free: it means the fee depends on the
 * job and is quoted case by case.
 */
export function formatUnit(money: Money, currency: Currency, onRequest: boolean): string {
  return onRequest ? 'On request' : formatMoney(money, currency);
}

/** A percentage as a client-facing label, e.g. "+30%". */
export function formatUplift(pct: number): string {
  return `+${Math.round(pct * 100)}%`;
}

/** A complexity multiplier as a label, e.g. "x1.5". */
export function formatMultiplier(multiplier: number): string {
  return `x${multiplier}`;
}

/** Quotation date, e.g. "July 14, 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
