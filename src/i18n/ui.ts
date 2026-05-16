// Shared chrome strings (header, footer, meta) per locale.
// Page-level content stays inside each locale's .astro file — only strings
// reused across pages belong here. English is the source of truth for key
// names; every locale must define the same keys.

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'meta.defaultTitle': 'hubStudio',
    'meta.defaultDescription': 'hubStudio — a studio building on the web.',
    'nav.skipToContent': 'Skip to content',
    'footer.rights': '© {year} hubStudio. All rights reserved.',
  },
  fr: {
    'meta.defaultTitle': 'hubStudio',
    'meta.defaultDescription': 'hubStudio — un studio qui construit sur le web.',
    'nav.skipToContent': 'Aller au contenu',
    'footer.rights': '© {year} hubStudio. Tous droits réservés.',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
