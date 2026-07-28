// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.wamocon.com',
  // German is the default language and is served from the site root (/).
  // English is served from /en/, Turkish from /tr/.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    // Emit clean folder-style URLs: /ueber-uns/ instead of /ueber-uns.html
    format: 'directory',
  },
  // Keep image handling simple & predictable for non-developers editing later.
  image: {
    domains: [],
  },
  // Generates /sitemap-index.xml + /sitemap-0.xml at build time for SEO.
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return ![
          '/404/',
          '/danke/',
          '/en/thank-you/',
          '/tr/tesekkurler/',
          '/berber-siparis/',
          '/berber-veri-koruma/',
        ].includes(pathname);
      },
    }),
  ],
});
