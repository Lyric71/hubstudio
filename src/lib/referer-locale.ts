/**
 * API routes have no page language of their own: a form posted from
 * /fr/contact or /zh/debeers reaches the same /api/... endpoint as the English
 * one. The Referer says which page sent it, so the answer (an error sentence,
 * a redirect) can come back in that page's language.
 */
import { pathIn, resolvePath, type Locale } from '../i18n/index';

/** Language of the page that sent the request; English when it is unknown. */
export function refererLocale(request: Request): Locale {
  const referer = request.headers.get('referer');
  if (!referer) return 'en';
  try {
    return resolvePath(new URL(referer).pathname)?.locale ?? 'en';
  } catch {
    return 'en';
  }
}

/**
 * Address of an English page in the language of the page that sent the
 * request, with `suffix` (a query string, a hash) kept as given:
 * localizedBack(request, '/debeers', '?error=1') is /fr/debeers?error=1 from
 * a French page. English address when the page has no translation.
 */
export function localizedBack(request: Request, enPath: string, suffix = ''): string {
  return (pathIn(enPath, refererLocale(request)) ?? enPath) + suffix;
}
