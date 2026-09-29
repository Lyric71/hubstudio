// Shared chrome strings (header, footer, meta) per locale.
// Page-level content stays inside each locale's .astro file: only strings
// reused across pages belong here. English is the source of truth for key
// names; every locale must define the same keys.

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'meta.defaultTitle': 'hubStudio | The AI production app, and the studio behind it',
    'meta.defaultDescription':
      'Make images, video and social posts with the leading AI engines in the hubStudio app, or have our studio make them for you. Pay as you go, no seat fees.',
    'nav.skipToContent': 'Skip to content',
    'footer.rights': '© {year} hubStudio. All rights reserved.',
  },
  fr: {
    'meta.defaultTitle': 'hubStudio, une maison de production pour le contenu d’aujourd’hui',
    'meta.defaultDescription':
      'hubStudio est une maison de production complète. Nous tournons, dirigeons et générons des centaines de visuels conformes à la marque chaque mois.',
    'nav.skipToContent': 'Aller au contenu',
    'footer.rights': '© {year} hubStudio. Tous droits réservés.',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
