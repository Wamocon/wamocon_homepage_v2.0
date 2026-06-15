/**
 * i18n configuration: languages, navigation, and shared UI strings.
 * Edit labels / hrefs here once and they update across every page.
 */

export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

/**
 * Primary navigation. `key` is stable; `label` and `href` are per language.
 * German pages live at the site root, English pages under /en/.
 */
export const nav: Array<{
  key: string;
  de: { label: string; href: string };
  en: { label: string; href: string };
}> = [
  {
    key: 'home',
    de: { label: 'Startseite', href: '/' },
    en: { label: 'Home', href: '/en/' },
  },
  {
    key: 'azubi',
    de: { label: 'Azubi - FAE', href: '/azubi-fae/' },
    en: { label: 'Apprenticeship', href: '/en/apprenticeship/' },
  },
  {
    key: 'about',
    de: { label: 'Über uns', href: '/ueber-uns/' },
    en: { label: 'About us', href: '/en/about-us/' },
  },
  {
    key: 'system',
    de: { label: 'Unser System', href: '/unser-system/' },
    en: { label: 'Our System', href: '/en/our-system/' },
  },
  {
    key: 'apps',
    de: { label: 'Apps', href: '/apps/' },
    en: { label: 'Apps', href: '/en/apps/' },
  },
  {
    key: 'testimonials',
    de: { label: 'Bewertungen', href: '/bewertungen/' },
    en: { label: 'Testimonials', href: '/en/testimonials/' },
  },
  {
    key: 'career',
    de: { label: 'Karriere', href: '/karriere/' },
    en: { label: 'Career', href: '/en/career/' },
  },
  {
    key: 'cooperation',
    de: { label: 'Zusammenarbeit', href: '/zusammenarbeit/' },
    en: { label: 'Cooperation', href: '/en/cooperation/' },
  },
  {
    key: 'contact',
    de: { label: 'Kontakt', href: '/kontakt/' },
    en: { label: 'Contact', href: '/en/contact/' },
  },
  {
    key: 'employees',
    de: { label: 'Mitarbeiter Stimmen', href: '/mitarbeiter-stimmen/' },
    en: { label: 'Employee Voices', href: '/en/employee-voices/' },
  },
];

/** Footer-only legal links. */
export const legalNav = {
  imprint: {
    de: { label: 'Impressum', href: '/impressum/' },
    en: { label: 'Imprint', href: '/en/imprint/' },
  },
  privacy: {
    de: { label: 'Datenschutz', href: '/datenschutz/' },
    en: { label: 'Privacy Policy', href: '/en/privacy/' },
  },
};

/** Shared, non-page-specific UI strings. */
export const ui = {
  de: {
    'lang.switch': 'EN',
    'lang.label': 'Sprache wechseln',
    'nav.menu': 'Menü',
    'nav.close': 'Schließen',
    'cta.consultation': 'Kostenlose Beratung',
    'cta.services': 'Dienstleistungen',
    'cta.apply': 'Jetzt bewerben',
    'cta.more': 'Mehr erfahren',
    'cta.contact': 'Kontakt aufnehmen',
    'cta.allReviews': 'Alle Bewertungen',
    'cookie.text':
      'Wir verwenden Cookies, um das Funktionieren der Website und Ihre Benutzerfreundlichkeit zu verbessern.',
    'cookie.accept': 'OK',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.contact': 'Kontakt',
    'footer.navigation': 'Navigation',
    'footer.follow': 'Folgen Sie uns',
    'footer.hours': 'Öffnungszeiten',
  },
  en: {
    'lang.switch': 'DE',
    'lang.label': 'Switch language',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'cta.consultation': 'Free consultation',
    'cta.services': 'Services',
    'cta.apply': 'Apply now',
    'cta.more': 'Learn more',
    'cta.contact': 'Get in touch',
    'cta.allReviews': 'All reviews',
    'cookie.text':
      'We use cookies to improve the operation of the website and your user experience.',
    'cookie.accept': 'OK',
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact',
    'footer.navigation': 'Navigation',
    'footer.follow': 'Follow us',
    'footer.hours': 'Opening hours',
  },
} as const;

/** Company-wide contact details (shared across languages). */
export const company = {
  name: 'WAMOCON GmbH',
  street: 'Mergenthalerallee 79 - 81',
  city: '65760 Eschborn',
  phone: '+49 6196 5838311',
  phoneHref: 'tel:+4961965838311',
  email: 'info@wamocon.com',
  emailHref: 'mailto:info@wamocon.com',
  hours: {
    de: ['Mo - Fr: 9:00 - 18:00', 'Sa: 10:00 - 14:00'],
    en: ['Mon - Fri: 9:00 - 18:00', 'Sat: 10:00 - 14:00'],
  },
  social: {
    youtube: 'https://www.youtube.com/@wamocon.testing',
    facebook: 'https://www.facebook.com/WAMOCON/',
    linkedin: 'https://de.linkedin.com/company/wamocon-gmbh',
    instagram: 'https://www.instagram.com/wmc_testmanagement/profilecard/?igsh=dWQ1azhlcDZnNmxs',
  },
} as const;
