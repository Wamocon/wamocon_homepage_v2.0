/**
 * i18n configuration: languages, navigation, and shared UI strings.
 * Edit labels / hrefs here once and they update across every page.
 */

export const languages = {
  de: 'Deutsch',
  en: 'English',
  tr: 'Türkçe',
} as const;

export type Lang = keyof typeof languages;

/** Stable iteration order for the language switcher and hreflang tags. */
export const langCodes = ['de', 'en', 'tr'] as const;

export const defaultLang: Lang = 'de';

/**
 * Primary navigation. `key` is stable; `label` and `href` are per language.
 * German pages live at the site root, English under /en/, Turkish under /tr/.
 */
export interface NavLink {
  key: string;
  de: { label: string; href: string };
  en: { label: string; href: string };
  tr: { label: string; href: string };
  children?: NavLink[];
}

export const nav: NavLink[] = [
  {
    key: 'home',
    de: { label: 'Start', href: '/' },
    en: { label: 'Home', href: '/en/' },
    tr: { label: 'Ana Sayfa', href: '/tr/' },
  },
  {
    // Dropdown group. The parent links to the primary child (the 360° page).
    key: 'system-group',
    de: { label: 'Unser System', href: '/unser-system/' },
    en: { label: 'Our System', href: '/en/our-system/' },
    tr: { label: 'Sistemimiz', href: '/tr/sistemimiz/' },
    children: [
      {
        key: 'system',
        de: { label: '360°', href: '/unser-system/' },
        en: { label: '360°', href: '/en/our-system/' },
        tr: { label: '360°', href: '/tr/sistemimiz/' },
      },
      {
        key: 'apps',
        de: { label: 'Apps', href: '/apps/' },
        en: { label: 'Apps', href: '/en/apps/' },
        tr: { label: 'Uygulamalar', href: '/tr/uygulamalar/' },
      },
      {
        key: 'about',
        de: { label: 'Über uns', href: '/ueber-uns/' },
        en: { label: 'About us', href: '/en/about-us/' },
        tr: { label: 'Hakkımızda', href: '/tr/hakkimizda/' },
      },
    ],
  },
  {
    key: 'coop-group',
    de: { label: 'Zusammenarbeit', href: '/zusammenarbeit/' },
    en: { label: 'Cooperation', href: '/en/cooperation/' },
    tr: { label: 'İş Birliği', href: '/tr/is-birligi/' },
    children: [
      {
        key: 'cooperation',
        de: { label: 'Studium', href: '/zusammenarbeit/' },
        en: { label: 'Studies', href: '/en/cooperation/' },
        tr: { label: 'Öğrenim', href: '/tr/is-birligi/' },
      },
      {
        key: 'career',
        de: { label: 'Karriere', href: '/karriere/' },
        en: { label: 'Career', href: '/en/career/' },
        tr: { label: 'Kariyer', href: '/tr/kariyer/' },
      },
      {
        key: 'azubi',
        de: { label: 'Ausbildung', href: '/azubi-fae/' },
        en: { label: 'Apprenticeship', href: '/en/apprenticeship/' },
        tr: { label: 'Mesleki Eğitim', href: '/tr/mesleki-egitim/' },
      },
    ],
  },
  {
    key: 'testimonials-group',
    de: { label: 'Testimonials', href: '/bewertungen/' },
    en: { label: 'Testimonials', href: '/en/testimonials/' },
    tr: { label: 'Görüşler', href: '/tr/yorumlar/' },
    children: [
      {
        key: 'testimonials',
        de: { label: 'Was Kunden sagen', href: '/bewertungen/' },
        en: { label: 'What clients say', href: '/en/testimonials/' },
        tr: { label: 'Müşterilerimiz ne diyor', href: '/tr/yorumlar/' },
      },
      {
        key: 'employees',
        de: { label: 'Was Mitarbeiter sagen', href: '/mitarbeiter-stimmen/' },
        en: { label: 'What employees say', href: '/en/employee-voices/' },
        tr: { label: 'Çalışanlarımız ne diyor', href: '/tr/calisan-yorumlari/' },
      },
      {
        key: 'references',
        de: { label: 'Referenzen', href: '/referenzen/' },
        en: { label: 'References', href: '/en/references/' },
        tr: { label: 'Referanslar', href: '/tr/referanslar/' },
      },
    ],
  },
  {
    key: 'webdesign',
    de: { label: 'Webdesign', href: '/webdesign/' },
    en: { label: 'Webdesign', href: '/en/webdesign/' },
    tr: { label: 'Webdesign', href: '/tr/webdesign/' },
  },
];

/** Footer-only legal links. */
export const legalNav = {
  imprint: {
    de: { label: 'Impressum', href: '/impressum/' },
    en: { label: 'Imprint', href: '/en/imprint/' },
    tr: { label: 'Künye', href: '/tr/kunye/' },
  },
  privacy: {
    de: { label: 'Datenschutz', href: '/datenschutz/' },
    en: { label: 'Privacy Policy', href: '/en/privacy/' },
    tr: { label: 'Gizlilik Politikası', href: '/tr/gizlilik/' },
  },
  accessibility: {
    de: { label: 'Barrierefreiheit', href: '/barrierefreiheit/' },
    en: { label: 'Accessibility', href: '/en/accessibility/' },
    tr: { label: 'Erişilebilirlik', href: '/tr/erisilebilirlik/' },
  },
};

/**
 * Pages that are not part of the primary navigation but still exist in every
 * language. Keeps the language switcher correct on the thank-you pages.
 */
export const extraRoutes: Record<Lang, string>[] = [
  { de: '/danke/', en: '/en/thank-you/', tr: '/tr/tesekkurler/' },
];

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
  tr: {
    'lang.switch': 'DE',
    'lang.label': 'Dili değiştir',
    'nav.menu': 'Menü',
    'nav.close': 'Kapat',
    'cta.consultation': 'Ücretsiz danışmanlık',
    'cta.services': 'Hizmetler',
    'cta.apply': 'Hemen başvurun',
    'cta.more': 'Daha fazla bilgi',
    'cta.contact': 'İletişime geçin',
    'cta.allReviews': 'Tüm değerlendirmeler',
    'cookie.text':
      'Web sitesinin işleyişini ve kullanım deneyiminizi iyileştirmek için çerezler kullanıyoruz.',
    'cookie.accept': 'Tamam',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.contact': 'İletişim',
    'footer.navigation': 'Navigasyon',
    'footer.follow': 'Bizi takip edin',
    'footer.hours': 'Çalışma saatleri',
  },
} as const;

/**
 * Chrome shared by every lead form on the site: the thank-you redirect, the
 * privacy-policy link label and the named person accountable for the enquiry.
 * Kept here so a new language only has to be added once.
 */
export const formChrome = {
  de: {
    thankYou: '/danke/',
    privacyLabel: 'Datenschutz',
    responsible:
      'Ihre Anfrage wird bearbeitet von Dipl.-Ing. Waleri Moretz, Geschäftsführer der WAMOCON GmbH.',
  },
  en: {
    thankYou: '/en/thank-you/',
    privacyLabel: 'Privacy policy',
    responsible:
      'Your enquiry is handled by Dipl.-Ing. Waleri Moretz, Managing Director of WAMOCON GmbH.',
  },
  tr: {
    thankYou: '/tr/tesekkurler/',
    privacyLabel: 'Gizlilik politikası',
    responsible:
      'Talebiniz, WAMOCON GmbH Genel Müdürü Dipl.-Ing. Waleri Moretz tarafından ele alınmaktadır.',
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
    tr: ['Pazartesi – Cuma: 9:00 – 18:00', 'Cumartesi: 10:00 – 14:00'],
  },
  social: {
    youtube: 'https://www.youtube.com/@wamocon.testing',
    facebook: 'https://www.facebook.com/WAMOCON/',
    linkedin: 'https://de.linkedin.com/company/wamocon-gmbh',
    instagram: 'https://www.instagram.com/wmc_testmanagement',
  },
} as const;
