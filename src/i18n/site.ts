/**
 * What the translation engine needs to know about this site, shared by the
 * middleware and scripts/i18n.mjs.
 */

/** Copy-carrying data-* attributes read by the site's scripts. */
export const DATA_ATTRS: string[] = ['data-suffix', 'data-head'];

/** A key on at least this many pages goes to the shared dictionary. */
export const COMMON_MIN_PAGES = 3;
