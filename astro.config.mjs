// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hubstudio.ai',

  // Vercel strips trailing slashes before applying redirect rules.
  trailingSlash: 'never',

  // English at the root, every other locale under a prefix with native slugs.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      // Built-in i18n only handles plain prefix routing — fine while pages
      // share slugs across locales. Once native per-locale slugs ship, swap
      // this for a `serialize` hook that resolves each locale pair through
      // src/i18n/page-slugs.ts (see reusable-website-starter.md §6).
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr' },
      },
      filter: (page) => !page.includes('/thank-you') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
