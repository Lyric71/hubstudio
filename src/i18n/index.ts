/**
 * Dictionaries of the site, plus everything in paths.ts. See paths.ts for
 * how a French or Chinese page is made.
 */
export * from './paths';
import type { Locale } from './paths';
import { pageId as _pageId } from './paths';

/* ------------------------------------------------------------------ */
/* Dictionaries                                                        */
/* ------------------------------------------------------------------ */

type Dict = Record<string, string>;

const FILES = import.meta.glob<Dict>('./dict/*/**/*.json', { eager: true, import: 'default' });

const byFile = (locale: Locale, rel: string): Dict => FILES[`./dict/${locale}/${rel}.json`] ?? {};

export function dictionaryFor(locale: Locale, enPath: string): (key: string) => string | undefined {
  const page = byFile(locale, `pages/${_pageId(enPath)}`);
  const common = byFile(locale, 'common');
  return (key) => page[key] || common[key] || undefined;
}

/** Strings the client scripts ask for through window.__i18n. */
export const scriptStrings = (locale: Locale): Dict => byFile(locale, 'js');

/**
 * Translate one sentence of server code (API errors, the captcha question)
 * from the shared dictionary; English when there is no translation.
 */
export function tr(locale: Locale, en: string): string {
  if (locale === 'en') return en;
  return byFile(locale, 'server')[en] || byFile(locale, 'common')[en] || en;
}
