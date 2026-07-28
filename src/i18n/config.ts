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
export interface NavLink {
  key: string;
  de: { label: string; href: string };
  en: { label: string; href: string };
  children?: NavLink[];
}

export const nav: NavLink[] = [
  {
    key: 'home',
    de: { label: 'Start', href: '/' },
    en: { label: 'Home', href: '/en/' },
  },
  {
    // Dropdown group. The parent links to the primary child (the 360° page).
    key: 'system-group',
    de: { label: 'Unser System', href: '/unser-system/' },
    en: { label: 'Our System', href: '/en/our-system/' },
    children: [
      {
        key: 'system',
        de: { label: '360°', href: '/unser-system/' },
        en: { label: '360°', href: '/en/our-system/' },
      },
      {
        key: 'apps',
        de: { label: 'Apps', href: '/apps/' },
        en: { label: 'Apps', href: '/en/apps/' },
      },
      {
        key: 'about',
        de: { label: 'Über uns', href: '/ueber-uns/' },
        en: { label: 'About us', href: '/en/about-us/' },
      },
    ],
  },
  {
    key: 'coop-group',
    de: { label: 'Zusammenarbeit', href: '/zusammenarbeit/' },
    en: { label: 'Cooperation', href: '/en/cooperation/' },
    children: [
      {
        key: 'cooperation',
        de: { label: 'Studium', href: '/zusammenarbeit/' },
        en: { label: 'Studies', href: '/en/cooperation/' },
      },
      {
        key: 'career',
        de: { label: 'Karriere', href: '/karriere/' },
        en: { label: 'Career', href: '/en/career/' },
      },
      {
        key: 'azubi',
        de: { label: 'Ausbildung', href: '/azubi-fae/' },
        en: { label: 'Apprenticeship', href: '/en/apprenticeship/' },
      },
    ],
  },
  {
    key: 'testimonials-group',
    de: { label: 'Testimonials', href: '/bewertungen/' },
    en: { label: 'Testimonials', href: '/en/testimonials/' },
    children: [
      {
        key: 'testimonials',
        de: { label: 'Was Kunden sagen', href: '/bewertungen/' },
        en: { label: 'What clients say', href: '/en/testimonials/' },
      },
      {
        key: 'employees',
        de: { label: 'Was Mitarbeiter sagen', href: '/mitarbeiter-stimmen/' },
        en: { label: 'What employees say', href: '/en/employee-voices/' },
      },
      {
        key: 'references',
        de: { label: 'Referenzen', href: '/referenzen/' },
        en: { label: 'References', href: '/en/references/' },
      },
    ],
  },
  {
    key: 'webdesign',
    de: { label: 'Webdesign Alanya', href: '/webdesign/' },
    en: { label: 'Webdesign Alanya', href: '/en/webdesign/' },
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
  accessibility: {
    de: { label: 'Barrierefreiheit', href: '/barrierefreiheit/' },
    en: { label: 'Accessibility', href: '/en/accessibility/' },
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
  street: 'Mergenthalerallee 79–81',
  city: '65760 Eschborn',
  phone: '+49 6196 5838311',
  phoneHref: 'tel:+4961965838311',
  email: 'info@wamocon.com',
  emailHref: 'mailto:info@wamocon.com',
  hours: {
    de: ['Mo bis Fr: 9:00 bis 18:00', 'Sa: 10:00 bis 14:00'],
    en: ['Mon to Fri: 9:00 to 18:00', 'Sat: 10:00 to 14:00'],
  },
  social: {
    youtube: 'https://www.youtube.com/@wamocon.testing',
    facebook: 'https://www.facebook.com/WAMOCON/',
    linkedin: 'https://de.linkedin.com/company/wamocon-gmbh',
    instagram: 'https://www.instagram.com/wmc_testmanagement',
  },
} as const;
