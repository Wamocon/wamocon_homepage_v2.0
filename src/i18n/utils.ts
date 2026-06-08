/** Helper functions for language detection and translation. */
import { ui, defaultLang, nav, legalNav, type Lang } from './config';

/** Detect the active language from the current URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

/** Returns a translate function bound to the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['de']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Normalise a pathname to always end with a single trailing slash. */
function normalize(path: string): string {
  if (!path.endsWith('/')) path += '/';
  return path;
}

/**
 * Resolve the equivalent page URL in the other language.
 * Uses the nav/legal config so differing slugs map correctly
 * (e.g. /ueber-uns/ <-> /en/about-us/). Falls back to the other
 * language home page when no mapping exists.
 */
export function getAlternateLangUrl(currentPath: string, current: Lang): string {
  const other: Lang = current === 'de' ? 'en' : 'de';
  const path = normalize(currentPath);

  const entries = [
    ...nav.map((item) => ({ de: item.de.href, en: item.en.href })),
    ...Object.values(legalNav).map((item) => ({ de: item.de.href, en: item.en.href })),
  ];

  const match = entries.find((entry) => normalize(entry[current]) === path);
  if (match) return match[other];

  return other === 'en' ? '/en/' : '/';
}
