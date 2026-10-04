/**
 * Languages and addresses of the site (no Vite feature here: astro.config.mjs
 * imports this file for the sitemap).
 *
 * How a French or Chinese page is made (see core.ts for the engine):
 *   1. src/middleware.ts sees /fr/tarifs, finds its English page (/pricing)
 *      and stores locale + English path in Astro.locals;
 *   2. the catch-all route src/pages/[locale]/[...path].astro (or a small file
 *      under src/pages/fr|zh for on-demand pages) rewrites to /pricing, so the
 *      English page renders with Astro.url = /pricing and every component
 *      works unchanged;
 *   3. the middleware translates the finished HTML with the page dictionary
 *      (src/i18n/dict/<locale>/pages/<page>.json), the shared one
 *      (dict/<locale>/common.json) and the client-script one (dict/<locale>/js.json).
 *
 * Writing English copy: nothing changes. Run `npm run i18n -- extract` with
 * the dev server up; it lists the new sentences in every dictionary, and
 * `npm run i18n -- check` fails until each one is translated.
 */
import { FR_PATHS, ON_DEMAND } from './routes';

export const LOCALES = ['en', 'fr', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** <html lang>, JSON-LD inLanguage and hreflang. */
export const HTML_LANG: Record<Locale, string> = { en: 'en', fr: 'fr', zh: 'zh-CN' };
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', fr: 'fr_FR', zh: 'zh_CN' };
/** Names in the language switcher, each in its own language. */
export const LOCALE_NAMES: Record<Locale, string> = { en: 'English', fr: 'Français', zh: '中文' };

export const isLocale = (v: unknown): v is Locale => (LOCALES as readonly unknown[]).includes(v);

const trim = (p: string) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p || '/');

const FR_TO_EN = new Map(Object.entries(FR_PATHS).map(([en, fr]) => [fr, en]));

/** English paths that exist in every language. */
export const TRANSLATED_PATHS = Object.keys(FR_PATHS);

export const isOnDemand = (enPath: string) => ON_DEMAND.has(enPath);

/** Address of an English page in `locale`; null when it has no translation. */
export function pathIn(enPath: string, locale: Locale): string | null {
  const en = trim(enPath);
  if (locale === 'en') return en;
  if (!(en in FR_PATHS)) return null;
  if (locale === 'fr') return FR_PATHS[en];
  return en === '/' ? '/zh' : `/zh${en}`;
}

/** Locale and English page behind any address, or null for an unknown one. */
export function resolvePath(path: string): { locale: Locale; enPath: string } | null {
  const p = trim(path);
  const seg = p.split('/')[1];
  if (seg === 'fr') {
    const en = FR_TO_EN.get(p);
    return en ? { locale: 'fr', enPath: en } : null;
  }
  if (seg === 'zh') {
    const en = trim(p.slice(3) || '/');
    return en in FR_PATHS ? { locale: 'zh', enPath: en } : null;
  }
  return { locale: 'en', enPath: p };
}

/**
 * Rewrite an internal link for a localized page. External links, files,
 * anchors, API routes and pages without a translation are left alone.
 */
export function localizeHref(href: string, locale: Locale, site: string): string {
  if (locale === 'en') return href;
  let rest = href;
  let origin = '';
  if (href.startsWith(site)) {
    origin = site;
    rest = href.slice(site.length) || '/';
  }
  if (!rest.startsWith('/') || rest.startsWith('//')) return href;
  const m = rest.match(/^([^?#]*)(.*)$/)!;
  const path = trim(m[1]);
  if (/\.[a-z0-9]{2,5}$/i.test(path) || path.startsWith('/api/')) return href;
  if (resolvePath(path)?.locale !== 'en') return href; // already localized
  const target = pathIn(path, locale);
  return target ? origin + target + m[2] : href;
}

/** hreflang alternates of an English page (empty when it is English only). */
export function alternates(enPath: string, site: string): { lang: string; href: string }[] {
  if (!(trim(enPath) in FR_PATHS)) return [];
  const abs = (p: string) => (p === '/' ? site : site + p);
  const out = LOCALES.map((l) => ({ lang: HTML_LANG[l], href: abs(pathIn(enPath, l)!) }));
  out.push({ lang: 'x-default', href: abs(trim(enPath)) });
  return out;
}

/** Dictionary file id of an English page: '/' -> 'home', '/roles/ceo' -> 'roles/ceo'. */
export const pageId = (enPath: string) => (trim(enPath) === '/' ? 'home' : trim(enPath).slice(1));
