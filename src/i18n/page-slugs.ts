import type { Locale } from './ui';

type SlugTable = Partial<Record<Locale, Record<string, string>>>;

// Canonical English path -> native localized path, per non-default locale.
// When a page ships in a new locale, add its native slug here so localizePath
// and the hreflang <link rel="alternate"> tags resolve correctly.
// Form: lowercase, hyphen-separated, diacritics stripped (réalisations ->
// realisations). The page CONTENT keeps accents; only the slug strips them.
export const slugMap: SlugTable = {
  fr: {
    '/': '/fr',
    // '/about': '/fr/qui-nous-sommes',
  },
};

// EN route prefix -> localized route prefix, for nested /section/<slug> routes
// whose tail segment is a shared content slug (e.g. /work/<slug>).
export const prefixMap: SlugTable = {
  fr: {
    // '/work': '/fr/nos-realisations',
  },
};
