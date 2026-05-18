// Shared chrome strings (header, footer, meta) per locale.
// Page-level content stays inside each locale's .astro file — only strings
// reused across pages belong here. English is the source of truth for key
// names; every locale must define the same keys.

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'meta.defaultTitle': 'hubStudio — A production house built for what content has become',
    'meta.defaultDescription':
      'hubStudio is a full production house. We shoot, direct, and generate hundreds of on-brand assets a month, or deploy a content platform your own team runs.',
    'nav.skipToContent': 'Skip to content',
    'footer.rights': '© {year} hubStudio. All rights reserved.',
  },
  fr: {
    'meta.defaultTitle': 'hubStudio — Une maison de production pour le contenu d’aujourd’hui',
    'meta.defaultDescription':
      'hubStudio est une maison de production complète. Nous tournons, dirigeons et générons des centaines de visuels conformes à la marque chaque mois.',
    'nav.skipToContent': 'Aller au contenu',
    'footer.rights': '© {year} hubStudio. Tous droits réservés.',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
