/**
 * French and Chinese pages: find the English page behind the address, let it
 * render, then translate the HTML. See src/i18n/paths.ts for the whole flow.
 *
 * The middleware runs twice for a translated page (Astro.rewrite runs it
 * again for the English route); the second pass sees locals.locale already
 * set and only hands over.
 */
import { defineMiddleware } from 'astro:middleware';
import { applyDictionary } from './i18n/core';
import {
  HTML_LANG,
  dictionaryFor,
  localizeHref,
  resolvePath,
  scriptStrings,
  type Locale,
} from './i18n/index';
import { DATA_ATTRS } from './i18n/site';
import localizedImages from './i18n/localized-images.json';

const SITE = 'https://www.hubstudio.ai';

/**
 * Captures that exist in French or Chinese: /Images/app/x.fr.webp beside
 * /Images/app/x.webp. The capture and help-sync scripts keep the list.
 */
const LOCALIZED = new Set<string>(localizedImages);

function localizeImage(src: string, locale: Locale): string {
  const m = src.match(/^(.+)\.(webp|png|jpe?g)$/i);
  if (!m) return src;
  const localized = `${m[1]}.${locale}.${m[2]}`;
  return LOCALIZED.has(localized) ? localized : src;
}

export const onRequest = defineMiddleware(async (ctx, next) => {
  if (ctx.locals.locale) return next();

  const found = resolvePath(ctx.url.pathname);
  ctx.locals.locale = found?.locale ?? 'en';
  ctx.locals.enPath = found?.enPath ?? ctx.url.pathname;
  if (!found || found.locale === 'en') return next();

  const { locale, enPath } = found;
  const res = await next();
  if (!res.headers.get('content-type')?.includes('text/html') || res.status >= 300) return res;

  const english = await res.text();
  const { html, missing } = applyDictionary(english, {
    dataAttrs: DATA_ATTRS,
    lookup: dictionaryFor(locale, enPath),
    localizeHref: (href) => localizeHref(href, locale, SITE),
    localizeImage: (src) => localizeImage(src, locale),
    htmlLang: HTML_LANG[locale],
  });
  if (missing.length && import.meta.env.DEV) {
    console.warn(`[i18n] ${ctx.url.pathname}: ${missing.length} sentence(s) not translated yet`);
  }

  const strings = scriptStrings(locale);
  const boot = `<script>window.__i18n=${JSON.stringify(strings).replace(/</g, '\u003c')};</script>`;
  const out = html.replace(/<head>/, `<head>${boot}`);

  const headers = new Headers(res.headers);
  headers.delete('content-length');
  return new Response(out, { status: res.status, headers });
});
