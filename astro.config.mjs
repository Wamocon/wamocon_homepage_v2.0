// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wamocon.com',
  // German is the default language and is served from the site root (/).
  // English is served from the /en/ sub-path.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
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
});
