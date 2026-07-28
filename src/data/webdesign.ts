/**
 * Content for the Webdesign department page (/webdesign/).
 * WAMOCON's web-design department + a portfolio of the websites we have built
 * for external clients, organised by industry. German + English + Turkish.
 */
import type { Lang } from '../i18n/config';

type L = Record<Lang, string>;

/**
 * The premium package is sold for 25.000 ₺. Each language edition shows the
 * figure in the currency its readers actually budget in.
 * Conversion base (mid-market, 28 July 2026): 1 € = 53,84 ₺ · 1 $ = 47,34 ₺.
 * 25.000 ₺ ÷ 53,84 = 464 € → 465 € · 25.000 ₺ ÷ 47,34 = 528 $ → 530 $.
 * When the lira moves noticeably, update the three figures here together.
 */
export const premiumPrice: L = {
  de: '465 €',
  en: '$530',
  tr: '25.000 ₺',
};

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
  { key: 'all', label: { de: 'Alle Branchen', en: 'All industries', tr: 'Tüm sektörler' } },
  { key: 'beauty', label: { de: 'Beauty & Grooming', en: 'Beauty & grooming', tr: 'Güzellik ve bakım' } },
  {
    key: 'smarthome',
    label: { de: 'Smart Home & Sicherheit', en: 'Smart home & security', tr: 'Akıllı ev ve güvenlik' },
  },
  { key: 'klima', label: { de: 'Klima & Technik', en: 'Climate & technology', tr: 'İklimlendirme ve teknik' } },
  { key: 'auto', label: { de: 'Fahrzeugpflege', en: 'Car care', tr: 'Araç bakımı' } },
  { key: 'wohnen', label: { de: 'Wohnen & Einrichtung', en: 'Home & living', tr: 'Ev ve dekorasyon' } },
];

export const projects: WebProject[] = [
  {
    name: 'MARYAM Barber Atölyesi',
    category: 'beauty',
    location: 'Avsallar · Alanya',
    image: '/images/webdesign/maryam-barbershop.png',
    url: 'https://wamocon.github.io/Barber-Shop/maryam-barbershop/',
    featured: true,
    tagline: {
      de: 'Barber-Atelier als Erlebnis',
      en: 'A barber atelier as an experience',
      tr: 'Bir deneyim olarak berber atölyesi',
    },
    description: {
      de: 'Unser Referenzprojekt: eine viersprachige Premium-Website für ein Barber-Atelier in Avsallar. Mit Online-Terminbuchung, Lookbook, Menü, Bewertungen und KI-Assistent, entwickelt vom günstigen Einstieg bis zum ausgebauten Premium-Auftritt.',
      en: 'Our reference project: a four-language premium website for a barber atelier in Avsallar. With online booking, lookbook, menu, reviews and an AI assistant, developed from an entry build up to the full premium presence.',
      tr: 'Referans projemiz: Avsallar’daki bir berber atölyesi için dört dilli premium web sitesi. Çevrim içi randevu, lookbook, menü, değerlendirmeler ve yapay zekâ asistanıyla; uygun bir başlangıç sürümünden eksiksiz premium görünüme kadar geliştirildi.',
    },
  },
  {
    name: 'Mikail Hair Salon',
    category: 'beauty',
    location: 'Alanya · Antalya',
    image: '/images/webdesign/mikail-hair-salon.png',
    url: 'https://mikailhairsalon.vercel.app/',
    tagline: { de: 'Unisex Hair & Beauty', en: 'Unisex hair & beauty', tr: 'Unisex saç ve güzellik' },
    description: {
      de: 'Eleganter Auftritt für einen Unisex-Salon mit zwei Filialen, viersprachig, mit WhatsApp-Buchung, Abhol-Service und über 1.800 Google-Bewertungen im Fokus.',
      en: 'An elegant presence for a unisex salon with two branches, four languages, WhatsApp booking, pickup service and 1,800+ Google reviews in the spotlight.',
      tr: 'İki şubeli bir unisex kuaför için zarif bir dijital görünüm: dört dil, WhatsApp üzerinden randevu, servis hizmeti ve öne çıkarılan 1.800’den fazla Google değerlendirmesi.',
    },
  },
  {
    name: 'HAS Teknoloji',
    category: 'smarthome',
    location: 'Alanya',
    image: '/images/webdesign/has-teknoloji.png',
    url: 'https://hastekgroup.vercel.app/de',
    tagline: {
      de: 'Smart-Home & Sicherheitssysteme',
      en: 'Smart-home & security systems',
      tr: 'Akıllı ev ve güvenlik sistemleri',
    },
    description: {
      de: 'Vertrauensstarke Website für Smart-Home- und Sicherheitstechnik mit interaktivem Live-Showroom, KI-Concierge, Trust-Center und Kundenportal, in vier Sprachen.',
      en: 'A trust-driven website for smart-home and security technology with an interactive live showroom, AI concierge, trust centre and customer portal, in four languages.',
      tr: 'Akıllı ev ve güvenlik teknolojileri için güven veren bir web sitesi: etkileşimli canlı showroom, yapay zekâ danışmanı, güven merkezi ve müşteri portalı, dört dilde.',
    },
  },
  {
    name: 'Global Teknik Klima',
    category: 'klima',
    location: 'Alanya',
    image: '/images/webdesign/global-teknik-klima.png',
    url: 'https://global-technik-klima.vercel.app/',
    tagline: {
      de: 'Gree Klima · Bayi & Servis',
      en: 'Gree air conditioning · dealer & service',
      tr: 'Gree Klima · Bayi ve servis',
    },
    description: {
      de: 'Website für den autorisierten Gree-Klimahändler in Alanya, mit BTU-Rechner, Referenzen und direkter WhatsApp-Anfrage für Verkauf, Montage und Service.',
      en: 'A website for the authorised Gree air-conditioning dealer in Alanya, with a BTU calculator, references and direct WhatsApp enquiry for sales, installation and service.',
      tr: 'Alanya’daki yetkili Gree klima bayisi için web sitesi: BTU hesaplayıcı, referanslar ve satış, montaj ve servis için doğrudan WhatsApp talebi.',
    },
  },
  {
    name: 'Alanyum Car Wash',
    category: 'auto',
    location: 'Alanya',
    image: '/images/webdesign/alanyum-car-wash.png',
    url: 'https://alanyum-car-wash.vercel.app/',
    tagline: {
      de: 'Car Wash & Pro Detailing',
      en: 'Car wash & pro detailing',
      tr: 'Oto yıkama ve profesyonel detaylandırma',
    },
    description: {
      de: 'Kraftvoller Auftritt für Autopflege und Detailing mit Paket-Übersicht, Galerie und WhatsApp-Buchung, viersprachig und mobil optimiert.',
      en: 'A bold presence for car care and detailing with package overview, gallery and WhatsApp booking, in four languages and optimised for mobile.',
      tr: 'Araç bakımı ve detaylandırma için güçlü bir dijital görünüm: paket listesi, galeri ve WhatsApp randevusu; dört dilli ve mobil uyumlu.',
    },
  },
  {
    name: 'Sabaş Home',
    category: 'wohnen',
    location: 'Alanya',
    image: '/images/webdesign/sabas-home.png',
    url: 'https://sabas-home.vercel.app/',
    tagline: { de: 'Möbel & Wohnwelt', en: 'Furniture & living', tr: 'Mobilya ve yaşam alanı' },
    description: {
      de: 'Hochwertige Marken-Website für eine Wohn- und Einrichtungswelt mit über 20 Jahren Erfahrung, Kollektionen, Markenübersicht und Filialfinder.',
      en: 'A high-end brand website for a home and furnishing world with 20+ years of experience, collections, brand overview and store finder.',
      tr: '20 yılı aşkın deneyime sahip bir ev ve dekorasyon dünyası için üst segment marka sitesi: koleksiyonlar, marka listesi ve şube bulucu.',
    },
  },
];

export const webdesign = {
  seo: {
    title: {
      de: 'Webdesign | WAMOCON – Premium-Websites für jede Branche',
      en: 'Web design | WAMOCON – premium websites for every industry',
      tr: 'Webdesign | WAMOCON – her sektöre premium web siteleri',
    },
    description: {
      de: 'Die Webdesign-Abteilung von WAMOCON: mehrsprachige Premium-Websites mit Online-Buchung, KI-Assistent und SEO. Referenzen aus vielen Branchen.',
      en: 'WAMOCON’s web-design department: multilingual premium websites with online booking, AI assistant and SEO. References across many industries.',
      tr: 'WAMOCON’un web tasarım birimi: çevrim içi randevu, yapay zekâ asistanı ve SEO ile çok dilli premium web siteleri. Birçok sektörden referanslar.',
    },
  },
  hero: {
    eyebrow: { de: 'WAMOCON Webdesign', en: 'WAMOCON web design', tr: 'WAMOCON Webdesign' },
    title: {
      de: 'Websites, die jede Branche nach vorne bringen',
      en: 'Websites that move every industry forward',
      tr: 'Her sektörü ileri taşıyan web siteleri',
    },
    lead: {
      de: 'Unsere Webdesign-Abteilung baut mehrsprachige Premium-Websites mit Online-Buchung, KI-Assistent und SEO. Was als Website für einen Barbershop begann, ist heute ein Portfolio über viele Branchen hinweg.',
      en: 'Our web-design department builds multilingual premium websites with online booking, an AI assistant and SEO. What started as a website for a barbershop is now a portfolio spanning many industries.',
      tr: 'Web tasarım birimimiz, çevrim içi randevu, yapay zekâ asistanı ve SEO içeren çok dilli premium web siteleri geliştiriyor. Bir berber dükkânı için başlayan yolculuk, bugün birçok sektöre yayılan bir portföye dönüştü.',
    },
    ctaPrimary: { de: 'Projekt anfragen', en: 'Request a project', tr: 'Proje talep edin' },
    ctaSecondary: { de: 'Referenzen ansehen', en: 'See references', tr: 'Referansları görün' },
    stats: [
      {
        value: { de: '6', en: '6', tr: '6' },
        label: { de: 'Branchen live', en: 'industries live', tr: 'sektör yayında' },
      },
      {
        value: { de: '4', en: '4', tr: '4' },
        label: { de: 'Sprachen pro Website', en: 'languages per site', tr: 'her sitede dil' },
      },
      { value: premiumPrice, label: { de: 'Premium-Paket', en: 'premium package', tr: 'premium paket' } },
    ],
  },
  department: {
    heading: {
      de: 'Die Abteilung Webdesign',
      en: 'The web-design department',
      tr: 'Web tasarım birimi',
    },
    intro: {
      de: 'Wir bauen keine Baukasten-Seiten. Jede Website entsteht individuell, mehrsprachig und auf Wirkung ausgelegt, mit derselben Ingenieurs- und Qualitätsmentalität, die WAMOCON aus dem IT-Testmanagement mitbringt.',
      en: 'We do not build template sites. Every website is created individually, multilingual and designed for impact, with the same engineering and quality mindset WAMOCON brings from IT test management.',
      tr: 'Hazır şablon siteler yapmıyoruz. Her web sitesi; WAMOCON’un BT test yönetiminden getirdiği aynı mühendislik ve kalite anlayışıyla, kişiye özel, çok dilli ve etki odaklı olarak tasarlanır.',
    },
    capabilities: [
      {
        title: {
          de: 'Mehrsprachige Websites',
          en: 'Multilingual websites',
          tr: 'Çok dilli web siteleri',
        },
        text: {
          de: 'Bis zu vier Sprachen (TR · EN · RU · DE) in einem konsistenten Auftritt.',
          en: 'Up to four languages (TR · EN · RU · DE) in one consistent presence.',
          tr: 'Tutarlı tek bir görünümde dört dile kadar (TR · EN · RU · DE) destek.',
        },
      },
      {
        title: { de: 'Online-Terminbuchung', en: 'Online booking', tr: 'Çevrim içi randevu' },
        text: {
          de: 'Buchung und Anfragen direkt über die Website oder WhatsApp.',
          en: 'Booking and enquiries directly via the website or WhatsApp.',
          tr: 'Randevu ve talepler doğrudan web sitesi veya WhatsApp üzerinden.',
        },
      },
      {
        title: {
          de: 'KI-Chat-Assistent (24/7)',
          en: 'AI chat assistant (24/7)',
          tr: 'Yapay zekâ sohbet asistanı (7/24)',
        },
        text: {
          de: 'Ein Assistent, der rund um die Uhr Fragen der Kunden beantwortet.',
          en: 'An assistant that answers customer questions around the clock.',
          tr: 'Müşteri sorularını günün her saati yanıtlayan bir asistan.',
        },
      },
      {
        title: {
          de: 'SEO, GEO & Google-Profil',
          en: 'SEO, GEO & Google profile',
          tr: 'SEO, GEO ve Google profili',
        },
        text: {
          de: 'Auffindbar bei Google und in KI-Suchen, lokal wie überregional.',
          en: 'Findable on Google and in AI search, locally and beyond.',
          tr: 'Google’da ve yapay zekâ aramalarında bulunabilirlik; yerelde ve bölge dışında.',
        },
      },
      {
        title: {
          de: 'Social Media & Bewertungen',
          en: 'Social media & reviews',
          tr: 'Sosyal medya ve değerlendirmeler',
        },
        text: {
          de: 'Instagram-Anbindung und Bewertungsmanagement für mehr Vertrauen.',
          en: 'Instagram integration and review management for more trust.',
          tr: 'Daha fazla güven için Instagram entegrasyonu ve değerlendirme yönetimi.',
        },
      },
      {
        title: {
          de: 'Hosting, Wartung & VIP-Support',
          en: 'Hosting, maintenance & VIP support',
          tr: 'Barındırma, bakım ve VIP destek',
        },
        text: {
          de: 'Betrieb, Updates und persönlicher Support aus einer Hand.',
          en: 'Operation, updates and personal support from a single source.',
          tr: 'İşletim, güncellemeler ve kişisel destek tek elden.',
        },
      },
    ],
  },
  portfolio: {
    heading: {
      de: 'Referenzen nach Branchen',
      en: 'References by industry',
      tr: 'Sektörlere göre referanslar',
    },
    intro: {
      de: 'Ein Ausschnitt der Websites, die wir für externe Kunden gebaut haben. Filtern Sie nach Branche und öffnen Sie jede Seite live.',
      en: 'A selection of the websites we have built for external clients. Filter by industry and open each site live.',
      tr: 'Dış müşterilerimiz için geliştirdiğimiz web sitelerinden bir seçki. Sektöre göre filtreleyin ve her siteyi canlı olarak açın.',
    },
    live: { de: 'Live ansehen', en: 'View live', tr: 'Canlı görüntüle' },
    featuredLabel: { de: 'Referenzprojekt', en: 'Reference project', tr: 'Referans proje' },
  },
  offer: {
    eyebrow: {
      de: 'Sommerkampagne 2026 · Premium',
      en: 'Summer campaign 2026 · Premium',
      tr: '2026 Yaz kampanyası · Premium',
    },
    heading: { de: 'Das Premium-Paket', en: 'The premium package', tr: 'Premium paket' },
    anchor: {
      de: 'Europäische Qualität, türkischer Preis',
      en: 'European quality, Turkish price',
      tr: 'Avrupa kalitesi, Türkiye fiyatı',
    },
    price: premiumPrice,
    priceNote: {
      de: '≈ 25.000 ₺ · Premium-Paket',
      en: '≈ 25,000 ₺ · premium package',
      tr: 'Premium paket · tek seferlik',
    },
    compare: {
      de: 'Eine deutsche Agentur berechnet für ein vergleichbares Premium-Paket rund 25.000 €. Diesen Sommer erhalten Sie dieselbe Ingenieursarbeit für 25.000 ₺, gleiche Zahl, nur in Lira statt Euro. Für Sie sind das rund 465 €.',
      en: 'A German agency charges around €25,000 for a comparable premium package. This summer you get the same engineering for 25,000 ₺, the same number, just in lira instead of euros. That works out at roughly $530 for you.',
      tr: 'Bir Alman ajans, benzer bir premium paket için yaklaşık 25.000 € talep ediyor. Bu yaz aynı mühendislik işini 25.000 ₺’ye alıyorsunuz: aynı rakam, sadece Euro yerine Lira.',
    },
    features: [
      {
        de: 'Mehrsprachige Premium-Website (4 Sprachen)',
        en: 'Multilingual premium website (4 languages)',
        tr: 'Çok dilli premium web sitesi (4 dil)',
      },
      { de: 'Online-Buchungssystem', en: 'Online booking system', tr: 'Çevrim içi randevu sistemi' },
      {
        de: 'KI-Chat-Assistent (24/7)',
        en: '24/7 AI chat assistant',
        tr: 'Yapay zekâ sohbet asistanı (7/24)',
      },
      {
        de: 'SEO + GEO + Google-Profil',
        en: 'SEO + GEO + Google profile',
        tr: 'SEO + GEO + Google profili',
      },
      {
        de: 'Instagram + Bewertungsmanagement',
        en: 'Instagram + review management',
        tr: 'Instagram + değerlendirme yönetimi',
      },
      {
        de: 'Monatlicher SEO-Report + VIP-Support',
        en: 'Monthly SEO report + VIP support',
        tr: 'Aylık SEO raporu + VIP destek',
      },
    ],
    guarantee: {
      de: 'Null Risiko: Zahlung erst nach Auslieferung, 100 % nach Abnahme, keine Anzahlung. 30 Tage Geld-zurück-Garantie, keine versteckten Kosten.',
      en: 'Zero risk: pay only after delivery, 100% on completion, no deposit. 30-day money-back guarantee, no hidden fees.',
      tr: 'Sıfır risk: ödeme yalnızca teslimattan sonra, kabulden sonra %100, kapora yok. 30 gün para iade garantisi, gizli maliyet yok.',
    },
    cta: {
      de: 'Premium-Paket anfragen',
      en: 'Request the premium package',
      tr: 'Premium paketi talep edin',
    },
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
    heading: { de: 'Überzeugen Sie sich selbst', en: 'See for yourself', tr: 'Kendiniz görün' },
    text: {
      de: 'Klicken Sie sich durch die Websites oben, prüfen Sie die Google-Bewertungen unserer Kunden und vergleichen Sie in Ruhe. Recherche ist ausdrücklich erwünscht, denn was wir bauen, hält dem Blick von außen stand.',
      en: 'Click through the websites above, check our clients’ Google reviews and compare at your own pace. Research is expressly encouraged, because what we build holds up to outside scrutiny.',
      tr: 'Yukarıdaki web sitelerini tek tek gezin, müşterilerimizin Google değerlendirmelerini inceleyin ve acele etmeden karşılaştırın. Araştırmanızı açıkça teşvik ediyoruz; çünkü yaptığımız iş dışarıdan bakışa dayanır.',
    },
    stats: [
      {
        value: { de: '5,0', en: '5.0', tr: '5,0' },
        label: {
          de: 'Google-Bewertung unserer Kunden',
          en: 'Google rating of our clients',
          tr: 'müşterilerimizin Google puanı',
        },
      },
      {
        value: { de: '1.800+', en: '1,800+', tr: '1.800+' },
        label: {
          de: 'Bewertungen bei einem Salon allein',
          en: 'reviews at a single salon',
          tr: 'tek bir salonda değerlendirme',
        },
      },
      {
        value: { de: '4', en: '4', tr: '4' },
        label: { de: 'Sprachen pro Website', en: 'languages per website', tr: 'her sitede dil' },
      },
      {
        value: { de: '7 Tage', en: '7 days', tr: '7 gün' },
        label: {
          de: 'bis Ihre Website live ist',
          en: 'until your website is live',
          tr: 'içinde siteniz yayında',
        },
      },
    ],
  },

  // Desire: what a WAMOCON website actually does for the business.
  outcomes: {
    heading: {
      de: 'Was eine WAMOCON-Website für Ihr Geschäft bedeutet',
      en: 'What a WAMOCON website means for your business',
      tr: 'Bir WAMOCON web sitesi işletmeniz için ne ifade eder',
    },
    intro: {
      de: 'Eine Website ist kein Selbstzweck. Sie soll Kunden bringen. Genau darauf ist jede Seite ausgelegt, die wir bauen.',
      en: 'A website is not an end in itself. It should bring customers. That is exactly what every site we build is designed for.',
      tr: 'Web sitesi kendi başına bir amaç değildir. Müşteri getirmelidir. Yaptığımız her site tam olarak bunun için tasarlanır.',
    },
    items: [
      {
        title: {
          de: 'Voller Terminkalender',
          en: 'A full appointment book',
          tr: 'Dolu bir randevu defteri',
        },
        text: {
          de: 'Online-Buchung rund um die Uhr, auch wenn Ihr Geschäft geschlossen hat.',
          en: 'Online booking around the clock, even when your business is closed.',
          tr: 'İşletmeniz kapalıyken bile günün her saati çevrim içi randevu.',
        },
      },
      {
        title: {
          de: 'Sichtbar bei Google und KI',
          en: 'Visible on Google and AI',
          tr: 'Google’da ve yapay zekâda görünürlük',
        },
        text: {
          de: 'SEO und GEO sorgen dafür, dass neue Kunden Sie finden, lokal wie international.',
          en: 'SEO and GEO make sure new customers find you, locally and internationally.',
          tr: 'SEO ve GEO sayesinde yeni müşteriler sizi bulur; hem yerelde hem uluslararası ölçekte.',
        },
      },
      {
        title: {
          de: 'Kunden in vier Sprachen',
          en: 'Customers in four languages',
          tr: 'Dört dilde müşteri',
        },
        text: {
          de: 'Ein Auftritt, der Einheimische und Touristen gleichermaßen anspricht.',
          en: 'A presence that speaks to locals and tourists alike.',
          tr: 'Hem yerel halka hem turistlere aynı ölçüde hitap eden bir görünüm.',
        },
      },
      {
        title: {
          de: 'Vertrauen ab der ersten Sekunde',
          en: 'Trust from the first second',
          tr: 'İlk saniyeden itibaren güven',
        },
        text: {
          de: 'Ein professioneller Auftritt überzeugt, bevor das erste Gespräch beginnt.',
          en: 'A professional presence convinces before the first conversation begins.',
          tr: 'Profesyonel bir görünüm, daha ilk görüşme başlamadan ikna eder.',
        },
      },
    ],
  },

  // Like: zero-risk terms so the decision feels safe.
  guarantee: {
    heading: { de: 'Null Risiko für Sie', en: 'Zero risk for you', tr: 'Sizin için sıfır risk' },
    points: [
      {
        de: 'Zahlung erst nach Auslieferung, 100 % nach Abnahme',
        en: 'Payment only after delivery, 100% on completion',
        tr: 'Ödeme yalnızca teslimattan sonra, kabulden sonra %100',
      },
      { de: 'Keine Anzahlung', en: 'No deposit', tr: 'Kapora yok' },
      {
        de: '30 Tage Geld-zurück-Garantie',
        en: '30-day money-back guarantee',
        tr: '30 gün para iade garantisi',
      },
      { de: 'Keine versteckten Kosten', en: 'No hidden fees', tr: 'Gizli maliyet yok' },
    ],
  },

  // Share: satisfied customers become promoters.
  share: {
    heading: {
      de: 'Was Kunden weitererzählen',
      en: 'What customers pass on',
      tr: 'Müşterilerin anlattıkları',
    },
    text: {
      de: 'Eine gute Website bleibt nicht unbemerkt. Zufriedene Gäste bewerten, teilen und empfehlen weiter, und genau dafür bauen wir jede Seite: für den vollen Stuhl, den vollen Kalender und die nächste Empfehlung.',
      en: 'A good website does not go unnoticed. Happy guests review, share and recommend, and that is exactly what we build every site for: the full chair, the full calendar and the next referral.',
      tr: 'İyi bir web sitesi fark edilmeden kalmaz. Memnun misafirler değerlendirir, paylaşır ve tavsiye eder. Her siteyi tam da bunun için yapıyoruz: dolu koltuk, dolu takvim ve bir sonraki tavsiye.',
    },
  },

  // Love: the long-term partnership after launch.
  love: {
    heading: {
      de: 'Wir bleiben an Ihrer Seite',
      en: 'We stay by your side',
      tr: 'Yanınızda kalmaya devam ediyoruz',
    },
    text: {
      de: 'Mit dem Livegang endet die Zusammenarbeit nicht. Hosting, Wartung, monatliche SEO-Reports und VIP-Support halten Ihre Website schnell, sichtbar und aktuell, Monat für Monat.',
      en: 'The collaboration does not end at launch. Hosting, maintenance, monthly SEO reports and VIP support keep your website fast, visible and up to date, month after month.',
      tr: 'İş birliği yayına alma ile bitmez. Barındırma, bakım, aylık SEO raporları ve VIP destek sitenizi her ay hızlı, görünür ve güncel tutar.',
    },
    cta: {
      de: 'Jetzt Projekt starten',
      en: 'Start your project now',
      tr: 'Projenizi hemen başlatın',
    },
  },
} as const;
