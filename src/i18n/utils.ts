/** Helper functions for language detection and translation. */
import {
  ui,
  defaultLang,
  nav,
  legalNav,
  extraRoutes,
  langCodes,
  type Lang,
  type NavLink,
} from './config';

type RouteMap = Record<Lang, string>;

/** Flatten the nav (dropdown groups + their children) into a single list. */
function flattenNav(items: NavLink[]): RouteMap[] {
  return items.flatMap((item) => [
    { de: item.de.href, en: item.en.href, tr: item.tr.href },
    ...(item.children ? flattenNav(item.children) : []),
  ]);
}

/** Every known route, as a de/en/tr triple. */
const routes: RouteMap[] = [
  ...flattenNav(nav),
  ...Object.values(legalNav).map((item) => ({
    de: item.de.href,
    en: item.en.href,
    tr: item.tr.href,
  })),
  ...extraRoutes,
];

/** Detect the active language from the current URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  if (first === 'tr') return 'tr';
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

/** The home page of a given language. */
export function homeHref(lang: Lang): string {
  if (lang === 'en') return '/en/';
  if (lang === 'tr') return '/tr/';
  return '/';
}

/**
 * Resolve the equivalent URL of the current page in every language.
 * Uses the nav/legal config so differing slugs map correctly
 * (e.g. /ueber-uns/ <-> /en/about-us/ <-> /tr/hakkimizda/).
 * Falls back to the language home page when no mapping exists.
 */
export function getLangUrls(currentPath: string, current: Lang): RouteMap {
  const path = normalize(currentPath);
  const match = routes.find((entry) => normalize(entry[current]) === path);
  if (match) return match;

  return { de: '/', en: '/en/', tr: '/tr/' };
}

/**
 * Resolve the equivalent page URL in one specific other language.
 * Kept for callers that only need a single target.
 */
export function getAlternateLangUrl(currentPath: string, current: Lang, target: Lang): string {
  return getLangUrls(currentPath, current)[target];
}

/** All languages except the given one, in stable order. */
export function otherLangs(lang: Lang): Lang[] {
  return langCodes.filter((code) => code !== lang);
}
