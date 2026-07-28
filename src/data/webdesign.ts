/**
 * Content for the Webdesign department page (/webdesign/).
 * WAMOCON's web-design department + a portfolio of the websites we have built
 * for external clients, organised by industry. German + English.
 */
import type { Lang } from '../i18n/config';

type L = Record<Lang, string>;

export interface WebProject {
  name: string;
  /** industry category key — must match one of `industries` */
  category: string;
  location: string;
  image: string;
  url: string;
  featured?: boolean;
  tagline: L;
  description: L;
}

export const industries: { key: string; label: L }[] = [
  { key: 'all', label: { de: 'Alle Branchen', en: 'All industries' } },
  { key: 'beauty', label: { de: 'Beauty & Grooming', en: 'Beauty & grooming' } },
  { key: 'smarthome', label: { de: 'Smart Home & Sicherheit', en: 'Smart home & security' } },
  { key: 'klima', label: { de: 'Klima & Technik', en: 'Climate & technology' } },
  { key: 'auto', label: { de: 'Fahrzeugpflege', en: 'Car care' } },
  { key: 'wohnen', label: { de: 'Wohnen & Einrichtung', en: 'Home & living' } },
];

export const projects: WebProject[] = [
  {
    name: 'MARYAM Barber Atölyesi',
    category: 'beauty',
    location: 'Avsallar · Alanya',
    image: '/images/webdesign/maryam-barbershop.png',
    url: 'https://wamocon.github.io/Barber-Shop/maryam-barbershop/',
    featured: true,
    tagline: { de: 'Barber-Atelier als Erlebnis', en: 'A barber atelier as an experience' },
    description: {
      de: 'Unser Referenzprojekt: eine viersprachige Premium-Website für ein Barber-Atelier in Avsallar. Mit Online-Terminbuchung, Lookbook, Menü, Bewertungen und KI-Assistent, entwickelt vom günstigen Einstieg bis zum ausgebauten Premium-Auftritt.',
      en: 'Our reference project: a four-language premium website for a barber atelier in Avsallar. With online booking, lookbook, menu, reviews and an AI assistant, developed from an entry build up to the full premium presence.',
    },
  },
  {
    name: 'Mikail Hair Salon',
    category: 'beauty',
    location: 'Alanya · Antalya',
    image: '/images/webdesign/mikail-hair-salon.png',
    url: 'https://mikailhairsalon.vercel.app/',
    tagline: { de: 'Unisex Hair & Beauty', en: 'Unisex hair & beauty' },
    description: {
      de: 'Eleganter Auftritt für einen Unisex-Salon mit zwei Filialen, viersprachig, mit WhatsApp-Buchung, Abhol-Service und über 1.800 Google-Bewertungen im Fokus.',
      en: 'An elegant presence for a unisex salon with two branches, four languages, WhatsApp booking, pickup service and 1,800+ Google reviews in the spotlight.',
    },
  },
  {
    name: 'HAS Teknoloji',
    category: 'smarthome',
    location: 'Alanya',
    image: '/images/webdesign/has-teknoloji.png',
    url: 'https://hastekgroup.vercel.app/de',
    tagline: { de: 'Smart-Home & Sicherheitssysteme', en: 'Smart-home & security systems' },
    description: {
      de: 'Vertrauensstarke Website für Smart-Home- und Sicherheitstechnik mit interaktivem Live-Showroom, KI-Concierge, Trust-Center und Kundenportal, in vier Sprachen.',
      en: 'A trust-driven website for smart-home and security technology with an interactive live showroom, AI concierge, trust centre and customer portal, in four languages.',
    },
  },
  {
    name: 'Global Teknik Klima',
    category: 'klima',
    location: 'Alanya',
    image: '/images/webdesign/global-teknik-klima.png',
    url: 'https://global-technik-klima.vercel.app/',
    tagline: { de: 'Gree Klima · Bayi & Servis', en: 'Gree air conditioning · dealer & service' },
    description: {
      de: 'Website für den autorisierten Gree-Klimahändler in Alanya, mit BTU-Rechner, Referenzen und direkter WhatsApp-Anfrage für Verkauf, Montage und Service.',
      en: 'A website for the authorised Gree air-conditioning dealer in Alanya, with a BTU calculator, references and direct WhatsApp enquiry for sales, installation and service.',
    },
  },
  {
    name: 'Alanyum Car Wash',
    category: 'auto',
    location: 'Alanya',
    image: '/images/webdesign/alanyum-car-wash.png',
    url: 'https://alanyum-car-wash.vercel.app/',
    tagline: { de: 'Car Wash & Pro Detailing', en: 'Car wash & pro detailing' },
    description: {
      de: 'Kraftvoller Auftritt für Autopflege und Detailing mit Paket-Übersicht, Galerie und WhatsApp-Buchung, viersprachig und mobil optimiert.',
      en: 'A bold presence for car care and detailing with package overview, gallery and WhatsApp booking, in four languages and optimised for mobile.',
    },
  },
  {
    name: 'Sabaş Home',
    category: 'wohnen',
    location: 'Alanya',
    image: '/images/webdesign/sabas-home.png',
    url: 'https://sabas-home.vercel.app/',
    tagline: { de: 'Möbel & Wohnwelt', en: 'Furniture & living' },
    description: {
      de: 'Hochwertige Marken-Website für eine Wohn- und Einrichtungswelt mit über 20 Jahren Erfahrung, Kollektionen, Markenübersicht und Filialfinder.',
      en: 'A high-end brand website for a home and furnishing world with 20+ years of experience, collections, brand overview and store finder.',
    },
  },
];

export const webdesign = {
  seo: {
    title: {
      de: 'Webdesign | WAMOCON – Premium-Websites für jede Branche',
      en: 'Web design | WAMOCON – premium websites for every industry',
    },
    description: {
      de: 'Die Webdesign-Abteilung von WAMOCON: mehrsprachige Premium-Websites mit Online-Buchung, KI-Assistent und SEO. Referenzen aus vielen Branchen.',
      en: 'WAMOCON’s web-design department: multilingual premium websites with online booking, AI assistant and SEO. References across many industries.',
    },
  },
  hero: {
    eyebrow: { de: 'WAMOCON Webdesign', en: 'WAMOCON web design' },
    title: {
      de: 'Websites, die jede Branche nach vorne bringen',
      en: 'Websites that move every industry forward',
    },
    lead: {
      de: 'Unsere Webdesign-Abteilung baut mehrsprachige Premium-Websites mit Online-Buchung, KI-Assistent und SEO. Was als Website für einen Barbershop begann, ist heute ein Portfolio über viele Branchen hinweg.',
      en: 'Our web-design department builds multilingual premium websites with online booking, an AI assistant and SEO. What started as a website for a barbershop is now a portfolio spanning many industries.',
    },
    ctaPrimary: { de: 'Projekt anfragen', en: 'Request a project' },
    ctaSecondary: { de: 'Referenzen ansehen', en: 'See references' },
    stats: [
      { value: '6', label: { de: 'Branchen live', en: 'industries live' } },
      { value: '4', label: { de: 'Sprachen pro Website', en: 'languages per site' } },
      { value: '25.000 TL', label: { de: 'Premium-Paket', en: 'premium package' } },
    ],
  },
  department: {
    heading: { de: 'Die Abteilung Webdesign', en: 'The web-design department' },
    intro: {
      de: 'Wir bauen keine Baukasten-Seiten. Jede Website entsteht individuell, mehrsprachig und auf Wirkung ausgelegt, mit derselben Ingenieurs- und Qualitätsmentalität, die WAMOCON aus dem IT-Testmanagement mitbringt.',
      en: 'We do not build template sites. Every website is created individually, multilingual and designed for impact, with the same engineering and quality mindset WAMOCON brings from IT test management.',
    },
    capabilities: [
      { title: { de: 'Mehrsprachige Websites', en: 'Multilingual websites' }, text: { de: 'Bis zu vier Sprachen (TR · EN · RU · DE) in einem konsistenten Auftritt.', en: 'Up to four languages (TR · EN · RU · DE) in one consistent presence.' } },
      { title: { de: 'Online-Terminbuchung', en: 'Online booking' }, text: { de: 'Buchung und Anfragen direkt über die Website oder WhatsApp.', en: 'Booking and enquiries directly via the website or WhatsApp.' } },
      { title: { de: 'KI-Chat-Assistent (24/7)', en: 'AI chat assistant (24/7)' }, text: { de: 'Ein Assistent, der rund um die Uhr Fragen der Kunden beantwortet.', en: 'An assistant that answers customer questions around the clock.' } },
      { title: { de: 'SEO, GEO & Google-Profil', en: 'SEO, GEO & Google profile' }, text: { de: 'Auffindbar bei Google und in KI-Suchen, lokal wie überregional.', en: 'Findable on Google and in AI search, locally and beyond.' } },
      { title: { de: 'Social Media & Bewertungen', en: 'Social media & reviews' }, text: { de: 'Instagram-Anbindung und Bewertungsmanagement für mehr Vertrauen.', en: 'Instagram integration and review management for more trust.' } },
      { title: { de: 'Hosting, Wartung & VIP-Support', en: 'Hosting, maintenance & VIP support' }, text: { de: 'Betrieb, Updates und persönlicher Support aus einer Hand.', en: 'Operation, updates and personal support from a single source.' } },
    ],
  },
  portfolio: {
    heading: { de: 'Referenzen nach Branchen', en: 'References by industry' },
    intro: {
      de: 'Ein Ausschnitt der Websites, die wir für externe Kunden gebaut haben. Filtern Sie nach Branche und öffnen Sie jede Seite live.',
      en: 'A selection of the websites we have built for external clients. Filter by industry and open each site live.',
    },
    live: { de: 'Live ansehen', en: 'View live' },
    featuredLabel: { de: 'Referenzprojekt', en: 'Reference project' },
  },
  offer: {
    eyebrow: { de: 'Sommerkampagne 2026 · Premium', en: 'Summer campaign 2026 · Premium' },
    heading: { de: 'Das Premium-Paket', en: 'The premium package' },
    anchor: { de: 'Europäische Qualität, türkischer Preis', en: 'European quality, Turkish price' },
    price: '25.000 TL',
    priceNote: { de: '≈ 470 € · Premium-Paket', en: '≈ €470 · premium package' },
    compare: {
      de: 'Eine deutsche Agentur berechnet für ein vergleichbares Premium-Paket rund 25.000 €. Diesen Sommer erhalten Sie dieselbe Ingenieursarbeit für 25.000 TL, gleiche Zahl, nur in Lira statt Euro.',
      en: 'A German agency charges around €25,000 for a comparable premium package. This summer you get the same engineering for 25,000 TL, the same number, just in Lira instead of Euros.',
    },
    features: [
      { de: 'Mehrsprachige Premium-Website (4 Sprachen)', en: 'Multilingual premium website (4 languages)' },
      { de: 'Online-Buchungssystem', en: 'Online booking system' },
      { de: 'KI-Chat-Assistent (24/7)', en: '24/7 AI chat assistant' },
      { de: 'SEO + GEO + Google-Profil', en: 'SEO + GEO + Google profile' },
      { de: 'Instagram + Bewertungsmanagement', en: 'Instagram + review management' },
      { de: 'Monatlicher SEO-Report + VIP-Support', en: 'Monthly SEO report + VIP support' },
    ],
    guarantee: {
      de: 'Null Risiko: Zahlung erst nach Auslieferung, 100 % nach Abnahme, keine Anzahlung. 30 Tage Geld-zurück-Garantie, keine versteckten Kosten.',
      en: 'Zero risk: pay only after delivery, 100% on completion, no deposit. 30-day money-back guarantee, no hidden fees.',
    },
    cta: { de: 'Premium-Paket anfragen', en: 'Request the premium package' },
  },

  // ----- AISDALSLove customer journey -----
  // The page is sequenced along the AISDALSLove model (Attention, Interest,
  // Search, Desire, Action, Like, Share, Love): hero grabs attention, the
  // capabilities build interest, the portfolio invites research, the outcomes
  // create desire, the offer drives action, the guarantee secures satisfaction,
  // the sharing block turns customers into promoters, and the partnership block
  // builds the long-term relationship.

  // Search: reassurance that researching us is welcome + hard proof.
  trust: {
    heading: { de: 'Überzeugen Sie sich selbst', en: 'See for yourself' },
    text: {
      de: 'Klicken Sie sich durch die Websites oben, prüfen Sie die Google-Bewertungen unserer Kunden und vergleichen Sie in Ruhe. Recherche ist ausdrücklich erwünscht, denn was wir bauen, hält dem Blick von außen stand.',
      en: 'Click through the websites above, check our clients’ Google reviews and compare at your own pace. Research is expressly encouraged, because what we build holds up to outside scrutiny.',
    },
    stats: [
      { value: '5,0', label: { de: 'Google-Bewertung unserer Kunden', en: 'Google rating of our clients' } },
      { value: '1.800+', label: { de: 'Bewertungen bei einem Salon allein', en: 'reviews at a single salon' } },
      { value: '4', label: { de: 'Sprachen pro Website', en: 'languages per website' } },
      { value: '7 Tage', label: { de: 'bis Ihre Website live ist', en: 'until your website is live' } },
    ],
  },

  // Desire: what a WAMOCON website actually does for the business.
  outcomes: {
    heading: { de: 'Was eine WAMOCON-Website für Ihr Geschäft bedeutet', en: 'What a WAMOCON website means for your business' },
    intro: {
      de: 'Eine Website ist kein Selbstzweck. Sie soll Kunden bringen. Genau darauf ist jede Seite ausgelegt, die wir bauen.',
      en: 'A website is not an end in itself. It should bring customers. That is exactly what every site we build is designed for.',
    },
    items: [
      { title: { de: 'Voller Terminkalender', en: 'A full appointment book' }, text: { de: 'Online-Buchung rund um die Uhr, auch wenn Ihr Geschäft geschlossen hat.', en: 'Online booking around the clock, even when your business is closed.' } },
      { title: { de: 'Sichtbar bei Google und KI', en: 'Visible on Google and AI' }, text: { de: 'SEO und GEO sorgen dafür, dass neue Kunden Sie finden, lokal wie international.', en: 'SEO and GEO make sure new customers find you, locally and internationally.' } },
      { title: { de: 'Kunden in vier Sprachen', en: 'Customers in four languages' }, text: { de: 'Ein Auftritt, der Einheimische und Touristen gleichermaßen anspricht.', en: 'A presence that speaks to locals and tourists alike.' } },
      { title: { de: 'Vertrauen ab der ersten Sekunde', en: 'Trust from the first second' }, text: { de: 'Ein professioneller Auftritt überzeugt, bevor das erste Gespräch beginnt.', en: 'A professional presence convinces before the first conversation begins.' } },
    ],
  },

  // Like: zero-risk terms so the decision feels safe.
  guarantee: {
    heading: { de: 'Null Risiko für Sie', en: 'Zero risk for you' },
    points: [
      { de: 'Zahlung erst nach Auslieferung, 100 % nach Abnahme', en: 'Payment only after delivery, 100% on completion' },
      { de: 'Keine Anzahlung', en: 'No deposit' },
      { de: '30 Tage Geld-zurück-Garantie', en: '30-day money-back guarantee' },
      { de: 'Keine versteckten Kosten', en: 'No hidden fees' },
    ],
  },

  // Share: satisfied customers become promoters.
  share: {
    heading: { de: 'Was Kunden weitererzählen', en: 'What customers pass on' },
    text: {
      de: 'Eine gute Website bleibt nicht unbemerkt. Zufriedene Gäste bewerten, teilen und empfehlen weiter, und genau dafür bauen wir jede Seite: für den vollen Stuhl, den vollen Kalender und die nächste Empfehlung.',
      en: 'A good website does not go unnoticed. Happy guests review, share and recommend, and that is exactly what we build every site for: the full chair, the full calendar and the next referral.',
    },
  },

  // Love: the long-term partnership after launch.
  love: {
    heading: { de: 'Wir bleiben an Ihrer Seite', en: 'We stay by your side' },
    text: {
      de: 'Mit dem Livegang endet die Zusammenarbeit nicht. Hosting, Wartung, monatliche SEO-Reports und VIP-Support halten Ihre Website schnell, sichtbar und aktuell, Monat für Monat.',
      en: 'The collaboration does not end at launch. Hosting, maintenance, monthly SEO reports and VIP support keep your website fast, visible and up to date, month after month.',
    },
    cta: { de: 'Jetzt Projekt starten', en: 'Start your project now' },
  },
} as const;
