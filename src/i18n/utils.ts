// Routing + translation helpers. This file is portable: keep it as-is for a
// new project, rewrite the slugMap / prefixMap entries in page-slugs.ts and
// the strings in ui.ts.

import { ui, locales, defaultLocale, type Locale, type UIKey } from './ui';
import { slugMap, prefixMap } from './page-slugs';

/** Drop a trailing slash (except root) and treat '' as '/'. */
function normalize(path: string): string {
  let p = path;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p === '' ? '/' : p;
}

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Locale implied by the first path segment; defaultLocale when there is none. */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1] ?? '';
  return isLocale(seg) ? seg : defaultLocale;
}

/** Remove a leading /<locale> segment, returning the path without it. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/');
  if (parts[1] && isLocale(parts[1])) {
    return normalize('/' + parts.slice(2).join('/'));
  }
  return normalize(pathname);
}

/** Resolve any localized path back to its canonical English path. */
export function toCanonical(path: string): string {
  const p = normalize(path);

  for (const loc of Object.keys(slugMap) as Locale[]) {
    for (const [en, localized] of Object.entries(slugMap[loc] ?? {})) {
      if (normalize(localized) === p) return normalize(en);
    }
  }

  for (const loc of Object.keys(prefixMap) as Locale[]) {
    for (const [en, localized] of Object.entries(prefixMap[loc] ?? {})) {
      const lp = normalize(localized);
      if (p === lp || p.startsWith(lp + '/')) {
        return normalize(en + p.slice(lp.length));
      }
    }
  }

  return stripLocale(p);
}

/**
 * Round-trip a URL into `locale` using native per-locale slugs:
 * `/about` <-> `/fr/qui-nous-sommes`. Unknown slugs fall back to the locale
 * home so a language switcher never 404s.
 */
export function localizePath(path: string, locale: Locale): string {
  const en = toCanonical(path);
  if (locale === defaultLocale) return en;

  const map = slugMap[locale] ?? {};
  if (map[en]) return normalize(map[en]);

  const prefixes = prefixMap[locale] ?? {};
  for (const [enPrefix, localizedPrefix] of Object.entries(prefixes)) {
    const ep = normalize(enPrefix);
    if (en === ep || en.startsWith(ep + '/')) {
      return normalize(localizedPrefix + en.slice(ep.length));
    }
  }

  return `/${locale}`;
}

/**
 * Locales in which `path` genuinely exists as its own page; the default
 * locale is always included. A non-default locale counts only when
 * page-slugs.ts maps the canonical English path (directly or via a prefix).
 * Drives hreflang: an English-only page emits no alternates rather than
 * pointing every other locale at a fallback home.
 */
export function getTranslatedLocales(path: string): Locale[] {
  const en = toCanonical(path);
  const result: Locale[] = [defaultLocale];

  for (const locale of locales) {
    if (locale === defaultLocale) continue;

    const map = slugMap[locale] ?? {};
    if (en in map) {
      result.push(locale);
      continue;
    }

    const prefixes = prefixMap[locale] ?? {};
    for (const enPrefix of Object.keys(prefixes)) {
      const ep = normalize(enPrefix);
      if (en === ep || en.startsWith(ep + '/')) {
        result.push(locale);
        break;
      }
    }
  }

  return result;
}

/**
 * Returns a `t()` bound to `locale`. Supports `{placeholder}` interpolation
 * and falls back to the English string for any key missing in the locale.
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey, params: Record<string, string | number> = {}): string {
    const dict = ui[locale] as Record<string, string>;
    const fallback = ui[defaultLocale] as Record<string, string>;
    const str = dict[key] ?? fallback[key] ?? key;
    return str.replace(/\{(\w+)\}/g, (_match, name: string) =>
      name in params ? String(params[name]) : `{${name}}`,
    );
  };
}
