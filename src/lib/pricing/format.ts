/**
 * Display layer for money. Pure, and the only place rounding is allowed.
 *
 * The rules it enforces, from the spec:
 *   - CNY is the base currency and is shown first.
 *   - Amounts render as whole numbers with thousands separators.
 *   - A zero amount renders as a single hyphen, never as a 0.
 *   - A fee that is not published renders as "On request".
 * Rounding is display only: the full-precision CNY value is what every
 * intermediate calculation carries.
 */

import type { Money } from './quote.ts';

export type Currency = 'CNY' | 'USD' | 'EUR';

/** CNY first: the base currency leads, and USD and EUR are conversions from it. */
export const CURRENCIES: Currency[] = ['CNY', 'USD', 'EUR'];

/** The currency the quotation opens in. Clients read it in USD by default. */
export const DEFAULT_CURRENCY: Currency = 'USD';

/** True for any string that names a currency we display. */
export function isCurrency(value: unknown): value is Currency {
  return CURRENCIES.includes(value as Currency);
}

const PREFIX: Record<Currency, string> = {
  CNY: 'CNY ',
  USD: '$',
  EUR: 'EUR ',
};

/** A whole-number amount with thousands separators, e.g. "1,745". */
function whole(amount: number): string {
  return Math.round(amount).toLocaleString('en-US', { maximumFractionDigits: 0 });
}

/** The amount of `money` in one currency, unrounded. */
export function amountIn(money: Money, currency: Currency): number {
  if (currency === 'CNY') return money.cny;
  return currency === 'USD' ? money.usd : money.eur;
}

/**
 * One amount, ready to print. A zero collapses to a hyphen so an empty line
 * reads as empty rather than as a priced-at-nothing line.
 */
export function formatMoney(money: Money, currency: Currency): string {
  const amount = amountIn(money, currency);
  if (Math.round(amount) === 0) return '-';
  return PREFIX[currency] + whole(amount);
}

/** The same amount in all three currencies, CNY first. */
export function formatAll(money: Money): string[] {
  return CURRENCIES.map((c) => formatMoney(money, c));
}

/**
 * An add-on unit price. A zero unit price is not free: it means the fee depends
 * on the job and is quoted case by case.
 */
export function formatUnit(money: Money, currency: Currency, onRequest: boolean): string {
  return onRequest ? 'On request' : formatMoney(money, currency);
}

/** A percentage as a client-facing label, e.g. "+30%". */
export function formatUplift(pct: number): string {
  return `+${Math.round(pct * 100)}%`;
}

/** Quotation date, e.g. "July 13, 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
