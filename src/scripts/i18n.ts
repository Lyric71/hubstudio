/**
 * Translation of the English text that client scripts write at runtime.
 *
 * On a French or Chinese page the middleware puts the dictionary
 * src/i18n/dict/<locale>/js.json in window.__i18n at the top of <head>; on an
 * English page there is none and every string stays English. A new string
 * passed to t() gets its key, with an empty value, in both js.json files.
 *
 * Inline scripts (is:inline) cannot import this file: they carry the one-line
 * fallback `const t = (s) => (window.__i18n && window.__i18n[s]) || s;`.
 */

declare global {
  interface Window {
    __i18n?: Record<string, string>;
  }
}

export type PageLang = 'en' | 'fr' | 'zh';

/**
 * Translate a whole English sentence, then fill its {placeholders}:
 * t('Page {n} of {pages}', { n: 2, pages: 5 }). English when there is no translation.
 */
export function t(english: string, vars?: Record<string, string | number>): string {
  const dict = typeof window !== 'undefined' ? window.__i18n : undefined;
  const text = (dict && dict[english]) || english;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (whole, name: string) => (name in vars ? String(vars[name]) : whole));
}

/** Language of the page, read from <html lang> (set by the middleware). */
export function pageLang(): PageLang {
  const lang = (typeof document !== 'undefined' ? document.documentElement.lang : '').toLowerCase();
  if (lang.startsWith('fr')) return 'fr';
  if (lang.startsWith('zh')) return 'zh';
  return 'en';
}

/** BCP 47 tag for numbers, prices and dates on this page. */
export function numberLocale(): 'en-US' | 'fr-FR' | 'zh-CN' {
  const lang = pageLang();
  return lang === 'fr' ? 'fr-FR' : lang === 'zh' ? 'zh-CN' : 'en-US';
}
