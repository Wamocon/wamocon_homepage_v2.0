/**
 * Content for the Webdesign department page (/webdesign/).
 * WAMOCON's web-design department + a portfolio of the websites we have built
 * for external clients, organised by industry. German + English + Turkish.
 */
import type { Lang } from '../i18n/config';

type L = Record<Lang, string>;

/**
 * No price on this page for now.
 *
 * What used to stand here was one figure (25.000 ₺) converted into three
 * currencies, next to the claim that "a German agency charges around 25.000 €".
 * Two problems: the comparison is comparative advertising under § 6 UWG with
 * no verifiable basis, and the gap it opened made the reader hunt for the catch
 * instead of reading the offer. The scope now carries the section, and a price
 * follows a conversation — which the first FAQ answer at the bottom of the page
 * states outright, so a reader hunting for the number finds the reason instead.
 * (The longer market analysis behind this lives on the unmerged branch
 * `webdesign_marketing_0926`, not on main.)
 */

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
  { key: 'all', label: { de: 'Alle Branchen', en: 'All industries', tr: 'Tüm sektörler', kk: 'Барлық сала' } },
  { key: 'beauty', label: { de: 'Beauty & Grooming', en: 'Beauty & grooming', tr: 'Güzellik ve bakım', kk: 'Сұлулық және күтім' } },
  {
    key: 'smarthome',
    label: { de: 'Smart Home & Sicherheit', en: 'Smart home & security', tr: 'Akıllı ev ve güvenlik', kk: 'Ақылды үй және қауіпсіздік' },
  },
  { key: 'klima', label: { de: 'Klima & Technik', en: 'Climate & technology', tr: 'İklimlendirme ve teknik', kk: 'Климаттық техника' } },
  { key: 'auto', label: { de: 'Fahrzeugpflege', en: 'Car care', tr: 'Araç bakımı', kk: 'Көлік күтімі' } },
  { key: 'wohnen', label: { de: 'Wohnen & Einrichtung', en: 'Home & living', tr: 'Ev ve dekorasyon', kk: 'Тұрғын үй және жиһаз' } },
  {
    key: 'immobilien',
    label: { de: 'Immobilien & Bau', en: 'Real estate & construction', tr: 'Gayrimenkul ve inşaat', kk: 'Жылжымайтын мүлік және құрылыс' },
  },
  {
    key: 'dienstleistung',
    label: { de: 'Beratung & Dienstleistung', en: 'Consulting & services', tr: 'Danışmanlık ve hizmet', kk: 'Кеңес беру және қызмет көрсету' },
  },
  { key: 'kunst', label: { de: 'Kunst & Kultur', en: 'Art & culture', tr: 'Sanat ve kültür', kk: 'Өнер және мәдениет' } },
];

export const projects: WebProject[] = [
  {
    name: 'MARYAM Barber Atölyesi',
    category: 'beauty',
    location: 'Avsallar · Alanya',
    image: '/images/webdesign/maryam-barbershop.webp',
    url: 'https://wamocon.github.io/Barber-Shop/maryam-barbershop/',
    featured: true,
    tagline: {
      de: 'Barber-Atelier als Erlebnis',
      en: 'A barber atelier as an experience',
      tr: 'Bir deneyim olarak berber atölyesi',
      kk: 'Шаштараз ателье ретінде',
    },
    description: {
      de: 'Unser Referenzprojekt: eine viersprachige Premium-Website für ein Barber-Atelier in Avsallar. Mit Online-Terminbuchung, Lookbook, Menü, Bewertungen und KI-Assistent, entwickelt vom günstigen Einstieg bis zum ausgebauten Premium-Auftritt.',
      en: 'Our reference project: a four-language premium website for a barber atelier in Avsallar. With online booking, lookbook, menu, reviews and an AI assistant, developed from an entry build up to the full premium presence.',
      tr: 'Referans projemiz: Avsallar’daki bir berber atölyesi için dört dilli premium web sitesi. Çevrim içi randevu, lookbook, menü, değerlendirmeler ve yapay zekâ asistanıyla; uygun bir başlangıç sürümünden eksiksiz premium görünüme kadar geliştirildi.',
      kk: 'Референс жобамыз: Авсалларда орналасқан шаштараз ателье үшін төрт тілді премиум сайт. Онлайн жазылу, лукбук, мәзір, пікірлер және ЖИ көмекшісі бар. Қолжетімді бастапқы нұсқадан толыққанды премиум көрініске дейін дамытылды.',
    },
  },
  {
    name: 'Mikail Hair Salon',
    category: 'beauty',
    location: 'Alanya · Antalya',
    image: '/images/webdesign/mikail-hair-salon.webp',
    url: 'https://mikailhairsalon.vercel.app/',
    tagline: { de: 'Unisex Hair & Beauty', en: 'Unisex hair & beauty', tr: 'Unisex saç ve güzellik', kk: 'Унисекс шаш және сұлулық' },
    description: {
      de: 'Eleganter Auftritt für einen Unisex-Salon mit zwei Filialen, viersprachig, mit WhatsApp-Buchung, Abhol-Service und den Google-Bewertungen des Salons im Mittelpunkt.',
      en: 'An elegant presence for a unisex salon with two branches, four languages, WhatsApp booking, pickup service and the salon’s Google reviews in the spotlight.',
      tr: 'İki şubeli bir unisex kuaför için zarif bir dijital görünüm: dört dil, WhatsApp üzerinden randevu, servis hizmeti ve salonun Google değerlendirmeleri ön planda.',
      kk: 'Екі филиалы бар унисекс салонға арналған сәнді цифрлық көрініс: төрт тіл, WhatsApp арқылы жазылу, алып кету қызметі және салонның Google пікірлері бірінші орында.',
    },
  },
  {
    name: 'HAS Teknoloji',
    category: 'smarthome',
    location: 'Alanya',
    image: '/images/webdesign/has-teknoloji.webp',
    url: 'https://hastekgroup.vercel.app/de',
    tagline: {
      de: 'Smart-Home & Sicherheitssysteme',
      en: 'Smart-home & security systems',
      tr: 'Akıllı ev ve güvenlik sistemleri',
      kk: 'Ақылды үй және қауіпсіздік жүйелері',
    },
    description: {
      de: 'Vertrauensstarke Website für Smart-Home- und Sicherheitstechnik mit interaktivem Live-Showroom, KI-Concierge, Trust-Center und Kundenportal, in vier Sprachen.',
      en: 'A trust-driven website for smart-home and security technology with an interactive live showroom, AI concierge, trust centre and customer portal, in four languages.',
      tr: 'Akıllı ev ve güvenlik teknolojileri için güven veren bir web sitesi: etkileşimli canlı showroom, yapay zekâ danışmanı, güven merkezi ve müşteri portalı, dört dilde.',
      kk: 'Ақылды үй мен қауіпсіздік техникасына арналған сенім ұялататын сайт: интерактивті тікелей шоурум, ЖИ консьержі, сенім орталығы және клиент порталы, төрт тілде.',
    },
  },
  {
    name: 'Global Teknik Klima',
    category: 'klima',
    location: 'Alanya',
    image: '/images/webdesign/global-teknik-klima.webp',
    url: 'https://global-technik-klima.vercel.app/',
    tagline: {
      de: 'Gree Klima · Bayi & Servis',
      en: 'Gree air conditioning · dealer & service',
      tr: 'Gree Klima · Bayi ve servis',
      kk: 'Gree Klima · дилер және сервис',
    },
    description: {
      de: 'Website für den autorisierten Gree-Klimahändler in Alanya, mit BTU-Rechner, Referenzen und direkter WhatsApp-Anfrage für Verkauf, Montage und Service.',
      en: 'A website for the authorised Gree air-conditioning dealer in Alanya, with a BTU calculator, references and direct WhatsApp enquiry for sales, installation and service.',
      tr: 'Alanya’daki yetkili Gree klima bayisi için web sitesi: BTU hesaplayıcı, referanslar ve satış, montaj ve servis için doğrudan WhatsApp talebi.',
      kk: 'Аланиядағы Gree климаттық техникасының ресми дилеріне арналған сайт: BTU калькуляторы, референстер, сату, орнату және сервис үшін тікелей WhatsApp сұрауы.',
    },
  },
  {
    name: 'Alanyum Car Wash',
    category: 'auto',
    location: 'Alanya',
    image: '/images/webdesign/alanyum-car-wash.webp',
    url: 'https://alanyum-car-wash.vercel.app/',
    tagline: {
      de: 'Car Wash & Pro Detailing',
      en: 'Car wash & pro detailing',
      tr: 'Oto yıkama ve profesyonel detaylandırma',
      kk: 'Көлік жуу және кәсіби детейлинг',
    },
    description: {
      de: 'Kraftvoller Auftritt für Autopflege und Detailing mit Paket-Übersicht, Galerie und WhatsApp-Buchung, viersprachig und mobil optimiert.',
      en: 'A bold presence for car care and detailing with package overview, gallery and WhatsApp booking, in four languages and optimised for mobile.',
      tr: 'Araç bakımı ve detaylandırma için güçlü bir dijital görünüm: paket listesi, galeri ve WhatsApp randevusu; dört dilli ve mobil uyumlu.',
      kk: 'Көлік күтімі мен детейлингке арналған қуатты цифрлық көрініс: пакеттер тізімі, галерея және WhatsApp арқылы жазылу, төрт тілде әрі мобильге бейімделген.',
    },
  },
  {
    name: 'Sabaş Home',
    category: 'wohnen',
    location: 'Alanya',
    image: '/images/webdesign/sabas-home.webp',
    url: 'https://sabas-home.vercel.app/',
    tagline: { de: 'Möbel & Wohnwelt', en: 'Furniture & living', tr: 'Mobilya ve yaşam alanı', kk: 'Жиһаз және тұрғын үй әлемі' },
    description: {
      de: 'Hochwertige Marken-Website für eine Wohn- und Einrichtungswelt mit über 20 Jahren Erfahrung, Kollektionen, Markenübersicht und Filialfinder.',
      en: 'A high-end brand website for a home and furnishing world with 20+ years of experience, collections, brand overview and store finder.',
      tr: '20 yılı aşkın deneyime sahip bir ev ve dekorasyon dünyası için üst segment marka sitesi: koleksiyonlar, marka listesi ve şube bulucu.',
      kk: '20 жылдан асатын тәжірибесі бар тұрғын үй және жиһаз әлеміне арналған жоғары сегментті бренд сайты: коллекциялар, брендтер тізімі және дүкен іздеу.',
    },
  },
  {
    name: 'CarWAX Antalya',
    category: 'auto',
    location: 'Antalya',
    image: '/images/webdesign/carwax-antalya.webp',
    url: 'https://car-wax-two.vercel.app',
    tagline: {
      de: 'Fahrzeugpflege auf Studio-Niveau',
      en: 'Car care at studio level',
      tr: 'Stüdyo seviyesinde araç bakımı',
      kk: 'Студия деңгейіндегі көлік күтімі',
    },
    description: {
      de: 'Dreisprachiger Auftritt für ein Car-Care-Studio in Antalya, mit hellem und dunklem Modus und einem KI-Concierge, der Fragen zu Keramikversiegelung, PPF und Detailing rund um die Uhr beantwortet.',
      en: 'A three-language presence for a car-care studio in Antalya, with a light and a dark mode and an AI concierge answering questions on ceramic coating, PPF and detailing around the clock.',
      tr: 'Antalya’daki bir araç bakım stüdyosu için üç dilli bir görünüm: açık ve koyu mod ile seramik kaplama, PPF ve detaylı bakım sorularını günün her saati yanıtlayan bir yapay zekâ asistanı.',
      kk: 'Анталиядағы көлік күтімі студиясына арналған үш тілді көрініс: ашық және қара режим, керамикалық жабын, PPF және детейлинг сұрақтарына тәулік бойы жауап беретін ЖИ консьержі.',
    },
  },
  {
    name: 'Beta Prüfservice',
    category: 'dienstleistung',
    location: 'Bad Vilbel · Rhein-Main',
    image: '/images/webdesign/beta-pruefservice.webp',
    url: 'https://beta-pruefservice.vercel.app',
    tagline: {
      de: 'Elektroprüfung mit belastbarem Nachweis',
      en: 'Electrical testing with evidence that holds',
      tr: 'Sağlam belgeli elektrik denetimi',
      kk: 'Дәлелі мықты электр сынағы',
    },
    description: {
      de: 'Auftritt für einen Prüfdienstleister im Rhein-Main-Gebiet: die DGUV-Vorschrift 3 als Argument statt als Kleingedrucktes, mit erklärter Messreihe, transparenten Kosten und direktem Draht per Telefon und WhatsApp.',
      en: 'A presence for an electrical-testing provider in the Rhine-Main region: German DGUV rule 3 used as the argument rather than the small print, with an explained measurement series, transparent pricing and a direct line by phone and WhatsApp.',
      tr: 'Rhein-Main bölgesindeki bir denetim hizmeti sağlayıcısı için dijital görünüm: DGUV 3 yönetmeliği küçük yazı yerine argüman olarak; açıklanan ölçüm serisi, şeffaf maliyetler ve telefon ile WhatsApp üzerinden doğrudan iletişim.',
      kk: 'Рейн-Майн өңіріндегі техникалық сараптама компаниясына арналған цифрлық көрініс: DGUV 3 ережесі ұсақ әріптегі ескертпе емес, басты дәлел ретінде; түсіндірілген өлшеу тізбегі, ашық баға және телефон мен WhatsApp арқылы тікелей байланыс.',
    },
  },
  {
    name: 'Ataberk Estate',
    category: 'immobilien',
    location: 'Alanya · Antalya · Mersin',
    image: '/images/webdesign/ataberk-estate.webp',
    url: 'https://ataberg-homepage.vercel.app',
    tagline: {
      de: 'Immobilien an der türkischen Riviera',
      en: 'Property on the Turkish Riviera',
      tr: 'Türk Rivierası’nda gayrimenkul',
      kk: 'Түрік Ривьерасындағы жылжымайтын мүлік',
    },
    description: {
      de: 'Neuaufbau des Auftritts eines seit 2005 lizenzierten Maklerhauses: Portfoliosuche mit Filtern und Karte, saubere Sprachfassungen und ein Assistent, der ausschließlich aus den eigenen Inhalten des Hauses antwortet.',
      en: 'A ground-up rebuild for an estate agency licensed since 2005: portfolio search with filters and map, clean language versions and an assistant that answers only from the agency’s own content.',
      tr: '2005’ten beri lisanslı bir emlak ofisinin dijital görünümünün yeniden inşası: filtreli ve haritalı portföy araması, temiz dil sürümleri ve yalnızca ofisin kendi içeriğinden yanıt veren bir asistan.',
      kk: '2005 жылдан бері лицензиясы бар жылжымайтын мүлік агенттігінің цифрлық көрінісін түбегейлі қайта құру: сүзгі мен картасы бар портфель іздеуі, ұқыпты тіл нұсқалары және тек агенттіктің өз мазмұнынан жауап беретін көмекші.',
    },
  },
  {
    name: 'New Level Group',
    category: 'immobilien',
    location: 'Alanya',
    image: '/images/webdesign/new-level-group.webp',
    url: 'https://new-level-premium.vercel.app',
    tagline: {
      de: 'Küstenimmobilien mit Anspruch',
      en: 'Coastal property with ambition',
      tr: 'İddialı kıyı gayrimenkulleri',
      kk: 'Талғампаз жағалау жылжымайтын мүлкі',
    },
    description: {
      de: 'Dreisprachiger Premium-Auftritt für ein Immobilien- und Bauunternehmen in Alanya, mit 3D-Szenen, choreografierter Bewegung und einem KI-Concierge mit festen Leitplanken.',
      en: 'A three-language premium presence for a real-estate and construction company in Alanya, with 3D scenes, choreographed motion and a guardrailed AI concierge.',
      tr: 'Alanya’daki bir gayrimenkul ve inşaat şirketi için üç dilli premium görünüm: 3B sahneler, koreografili hareket ve sınırları belirlenmiş bir yapay zekâ asistanı.',
      kk: 'Аланиядағы жылжымайтын мүлік және құрылыс компаниясына арналған үш тілді премиум көрініс: 3D сахналар, ойластырылған қозғалыс және шегі айқын белгіленген ЖИ консьержі.',
    },
  },
  {
    name: 'Make Art Alanya',
    category: 'kunst',
    location: 'Alanya',
    image: '/images/webdesign/makeartalanya.webp',
    url: 'https://www.makeartalanya.com/',
    tagline: {
      de: 'Kunststudio mit offener Tür',
      en: 'An art studio with an open door',
      tr: 'Kapısı açık bir sanat stüdyosu',
      kk: 'Есігі ашық өнер студиясы',
    },
    description: {
      de: 'Dreisprachiger Auftritt mit Buchungssystem für ein Kunst- und Kreativstudio in Alanya: Kurse in Malen, Zeichnen, Schach und Handwerk, direkt online belegbar.',
      en: 'A three-language presence with booking system for an art and creative studio in Alanya: courses in painting, drawing, chess and crafts, bookable online.',
      tr: 'Alanya’daki bir sanat ve yaratıcılık stüdyosu için rezervasyon sistemli üç dilli görünüm: resim, çizim, satranç ve el sanatları kursları çevrim içi ayrılabilir.',
      kk: 'Аланиядағы өнер және шығармашылық студиясына арналған, жазылу жүйесі бар үш тілді көрініс: сурет салу, кескіндеме, шахмат және қолөнер курстарына тікелей онлайн жазылуға болады.',
    },
  },
  // Bäuerle Steuerberater — Premium-Website plus KI-Kanzlei-Cockpit mit sechs
  // Fachmodulen. Wartet auf ein Deployment; sobald die Adresse steht, `url`
  // eintragen, Screenshot unter /images/webdesign/baeuerle-steuerberater.webp
  // ablegen und diesen Block aktivieren.
  // {
  //   name: 'Bäuerle Steuerberater',
  //   category: 'dienstleistung',
  //   location: 'Deutschland',
  //   image: '/images/webdesign/baeuerle-steuerberater.webp',
  //   url: '',
  //   tagline: {
  //     de: 'Kanzlei mit KI-Cockpit',
  //     en: 'A tax firm with an AI cockpit',
  //     tr: 'Yapay zekâ kokpitli mali müşavirlik',
  //   },
  //   description: {
  //     de: 'Auftritt einer Steuerkanzlei mit zwei KI-Ebenen: ein öffentlicher Assistent für Erstinformationen und ein geschütztes Kanzlei-Cockpit für Fachauskunft, Bescheidprüfung, Behördenpost und Auswertungen.',
  //     en: 'A tax firm’s presence with two AI layers: a public assistant for first enquiries and a protected firm cockpit for professional advice, assessment review, official correspondence and reporting.',
  //     tr: 'İki yapay zekâ katmanlı bir mali müşavirlik görünümü: ilk bilgilendirme için açık bir asistan ve mesleki danışma, tarhiyat kontrolü, resmî yazışma ve raporlama için korumalı bir kokpit.',
  //   },
  // },
];

export const webdesign = {
  seo: {
    title: {
      de: 'Webdesign | WAMOCON – Premium-Websites für jede Branche',
      en: 'Web design | WAMOCON – premium websites for every industry',
      tr: 'Webdesign | WAMOCON – her sektöre premium web siteleri',
      kk: 'Веб-дизайн | WAMOCON: әр салаға арналған премиум сайттар',
    },
    description: {
      de: 'Die Webdesign-Abteilung von WAMOCON: mehrsprachige Premium-Websites mit Online-Buchung, KI-Assistent und SEO. Referenzen aus vielen Branchen.',
      en: 'WAMOCON’s web-design department: multilingual premium websites with online booking, AI assistant and SEO. References across many industries.',
      tr: 'WAMOCON’un web tasarım birimi: çevrim içi randevu, yapay zekâ asistanı ve SEO ile çok dilli premium web siteleri. Birçok sektörden referanslar.',
      kk: 'WAMOCON-ның веб-дизайн бөлімі: онлайн жазылу, ЖИ көмекшісі және SEO мүмкіндігі бар көп тілді премиум сайттар. Көптеген саладан референстер.',
    },
  },
  hero: {
    eyebrow: { de: 'WAMOCON Webdesign', en: 'WAMOCON web design', tr: 'WAMOCON Webdesign', kk: 'WAMOCON веб-дизайн' },
    title: {
      de: 'Websites, die jede Branche nach vorne bringen',
      en: 'Websites that move every industry forward',
      tr: 'Her sektörü ileri taşıyan web siteleri',
      kk: 'Әр саланы алға жылжытатын сайттар',
    },
    lead: {
      de: 'Unsere Webdesign-Abteilung baut mehrsprachige Premium-Websites mit Online-Buchung, KI-Assistent und SEO. Was als Website für einen Barbershop begann, ist heute ein Portfolio über viele Branchen hinweg.',
      en: 'Our web-design department builds multilingual premium websites with online booking, an AI assistant and SEO. What started as a website for a barbershop is now a portfolio spanning many industries.',
      tr: 'Web tasarım birimimiz, çevrim içi randevu, yapay zekâ asistanı ve SEO içeren çok dilli premium web siteleri geliştiriyor. Bir berber dükkânı için başlayan yolculuk, bugün birçok sektöre yayılan bir portföye dönüştü.',
      kk: 'Веб-дизайн бөлімі онлайн жазылу, ЖИ көмекшісі және SEO мүмкіндігі бар көп тілді премиум сайттар жасайды. Бір шаштаразға арналған сайттан басталған жол бүгінде көптеген саланы қамтитын портфельге айналды.',
    },
    ctaPrimary: { de: 'Projekt anfragen', en: 'Request a project', tr: 'Proje talep edin', kk: 'Жоба сұрату' },
    ctaSecondary: { de: 'Referenzen ansehen', en: 'See references', tr: 'Referansları görün', kk: 'Референстерді қарау' },
    stats: [
      {
        value: { de: '6', en: '6', tr: '6', kk: '6' },
        label: { de: 'Branchen live', en: 'industries live', tr: 'sektör yayında', kk: 'сала жұмыста' },
      },
      {
        value: { de: '4', en: '4', tr: '4', kk: '4' },
        label: { de: 'Sprachen pro Website', en: 'languages per site', tr: 'her sitede dil', kk: 'әр сайттағы тіл' },
      },
      /**
       * The price used to stand here, as the first number on the page — before
       * the portfolio, before the capabilities, before any value was built.
       * It has left the page entirely for now.
       */
      {
        value: { de: 'BFSG', en: 'BFSG', tr: 'BFSG', kk: 'BFSG' },
        label: {
          de: 'barrierefrei auf Wunsch',
          en: 'accessible on request',
          tr: 'talep hâlinde erişilebilir',
          kk: 'сұрау бойынша қолжетімді',
        },
      },
    ],
  },
  department: {
    heading: {
      de: 'Die Abteilung Webdesign',
      en: 'The web-design department',
      tr: 'Web tasarım birimi',
      kk: 'Веб-дизайн бөлімі',
    },
    intro: {
      de: 'Wir bauen keine Baukasten-Seiten. Jede Website entsteht individuell, mehrsprachig und auf Wirkung ausgelegt, mit derselben Ingenieurs- und Qualitätsmentalität, die WAMOCON aus dem IT-Testmanagement mitbringt.',
      en: 'We do not build template sites. Every website is created individually, multilingual and designed for impact, with the same engineering and quality mindset WAMOCON brings from IT test management.',
      tr: 'Hazır şablon siteler yapmıyoruz. Her web sitesi; WAMOCON’un BT test yönetiminden getirdiği aynı mühendislik ve kalite anlayışıyla, kişiye özel, çok dilli ve etki odaklı olarak tasarlanır.',
      kk: 'Біз құрастырмалы шаблон сайттар жасамаймыз. Әр сайт WAMOCON-ның IT тестілеуді басқарудан алып келген инженерлік және сапа ұстанымымен, жеке, көп тілде және әсерге бағдарланып жасалады.',
    },
    capabilities: [
      {
        title: {
          de: 'Mehrsprachige Websites',
          en: 'Multilingual websites',
          tr: 'Çok dilli web siteleri',
          kk: 'Көп тілді сайттар',
        },
        text: {
          de: 'Bis zu vier Sprachen (TR · EN · RU · DE) in einem konsistenten Auftritt.',
          en: 'Up to four languages (TR · EN · RU · DE) in one consistent presence.',
          tr: 'Tutarlı tek bir görünümde dört dile kadar (TR · EN · RU · DE) destek.',
          kk: 'Тұтас бір көріністе төрт тілге дейін (TR · EN · RU · DE) қолдау.',
        },
      },
      {
        title: { de: 'Online-Terminbuchung', en: 'Online booking', tr: 'Çevrim içi randevu', kk: 'Онлайн жазылу' },
        text: {
          de: 'Buchung und Anfragen direkt über die Website oder WhatsApp.',
          en: 'Booking and enquiries directly via the website or WhatsApp.',
          tr: 'Randevu ve talepler doğrudan web sitesi veya WhatsApp üzerinden.',
          kk: 'Жазылу мен сұрау тікелей сайт немесе WhatsApp арқылы.',
        },
      },
      {
        title: {
          de: 'KI-Chat-Assistent (24/7)',
          en: 'AI chat assistant (24/7)',
          tr: 'Yapay zekâ sohbet asistanı (7/24)',
          kk: 'ЖИ чат көмекшісі (24/7)',
        },
        text: {
          de: 'Ein Assistent, der rund um die Uhr Fragen der Kunden beantwortet.',
          en: 'An assistant that answers customer questions around the clock.',
          tr: 'Müşteri sorularını günün her saati yanıtlayan bir asistan.',
          kk: 'Клиент сұрақтарына тәулік бойы жауап беретін көмекші.',
        },
      },
      {
        title: {
          de: 'SEO, GEO & Google-Profil',
          en: 'SEO, GEO & Google profile',
          tr: 'SEO, GEO ve Google profili',
          kk: 'SEO, GEO және Google профилі',
        },
        text: {
          de: 'Auffindbar bei Google und in KI-Suchen, lokal wie überregional.',
          en: 'Findable on Google and in AI search, locally and beyond.',
          tr: 'Google’da ve yapay zekâ aramalarında bulunabilirlik; yerelde ve bölge dışında.',
          kk: 'Google-де және ЖИ іздеуінде табылу: жергілікті деңгейде де, одан тыс жерде де.',
        },
      },
      {
        title: {
          de: 'Social Media & Bewertungen',
          en: 'Social media & reviews',
          tr: 'Sosyal medya ve değerlendirmeler',
          kk: 'Әлеуметтік желі және пікірлер',
        },
        text: {
          de: 'Instagram-Anbindung und Bewertungsmanagement für mehr Vertrauen.',
          en: 'Instagram integration and review management for more trust.',
          tr: 'Daha fazla güven için Instagram entegrasyonu ve değerlendirme yönetimi.',
          kk: 'Көбірек сенім үшін Instagram интеграциясы және пікірлерді басқару.',
        },
      },
      {
        title: {
          de: 'Hosting, Wartung & VIP-Support',
          en: 'Hosting, maintenance & VIP support',
          tr: 'Barındırma, bakım ve VIP destek',
          kk: 'Хостинг, техқызмет және VIP қолдау',
        },
        text: {
          de: 'Betrieb, Updates und persönlicher Support aus einer Hand.',
          en: 'Operation, updates and personal support from a single source.',
          tr: 'İşletim, güncellemeler ve kişisel destek tek elden.',
          kk: 'Пайдалану, жаңарту және жеке қолдау бір қолдан.',
        },
      },
    ],
  },
  portfolio: {
    heading: {
      de: 'Referenzen nach Branchen',
      en: 'References by industry',
      tr: 'Sektörlere göre referanslar',
      kk: 'Салалар бойынша референстер',
    },
    intro: {
      de: 'Ein Ausschnitt der Websites, die wir gebaut haben, überwiegend für externe Kunden. Filtern Sie nach Branche und öffnen Sie jede Seite live.',
      en: 'A selection of the websites we have built, most of them for external clients. Filter by industry and open each site live.',
      tr: 'Geliştirdiğimiz web sitelerinden bir seçki; büyük bölümü dış müşteriler için. Sektöre göre filtreleyin ve her siteyi canlı olarak açın.',
      kk: 'Жасаған сайттарымыздан таңдамалы үзінді, олардың басым бөлігі сыртқы клиенттерге арналған. Сала бойынша сүзіп, әр сайтты тікелей ашып көріңіз.',
    },
    live: { de: 'Live ansehen', en: 'View live', tr: 'Canlı görüntüle', kk: 'Тікелей қарау' },
    featuredLabel: { de: 'Referenzprojekt', en: 'Reference project', tr: 'Referans proje', kk: 'Референс жоба' },
  },
  offer: {
    eyebrow: {
      de: 'Das Premium-Paket',
      en: 'The premium package',
      tr: 'Premium paket',
      kk: 'Премиум пакет',
    },
    heading: {
      de: 'Was drin ist, bevor über Geld gesprochen wird',
      en: 'What is included, before we talk money',
      tr: 'Para konuşulmadan önce neler dahil',
      kk: 'Ақша туралы сөз басталмай тұрып, ішінде не бар',
    },
    anchor: {
      de: 'Ein Auftritt, der Termine bringt — nicht nur gut aussieht',
      en: 'A presence that books appointments, not just one that looks good',
      tr: 'Yalnızca güzel görünen değil, randevu getiren bir görünüm',
      kk: 'Тек әдемі көрінбей, жазылу әкелетін цифрлық көрініс',
    },
    compare: {
      de: 'Der Preis hängt am Umfang: Seitenzahl, Sprachen, Buchungslogik, angebundene Systeme, Barrierefreiheit nach BFSG. Sagen Sie uns, was Sie brauchen — wir rechnen es Ihnen vor, bevor Sie sich entscheiden. Und wenn zwei Seiten reichen, sagen wir das auch.',
      en: 'The price follows the scope: number of pages, languages, booking logic, connected systems, accessibility under the German BFSG. Tell us what you need and we will show you the calculation before you decide. And if two pages will do, we will say so.',
      tr: 'Fiyat kapsama bağlıdır: sayfa sayısı, diller, randevu mantığı, bağlanan sistemler, BFSG kapsamında erişilebilirlik. Neye ihtiyacınız olduğunu söyleyin; karar vermeden önce hesabı gösterelim. İki sayfa yetiyorsa, bunu da söyleriz.',
      kk: 'Баға ауқымға байланысты: бет саны, тілдер, жазылу логикасы, қосылатын жүйелер, BFSG бойынша қолжетімділік. Не керегін айтыңыз, шешім қабылдамай тұрып есебін көрсетеміз. Ал екі бет жетсе, соны да ашық айтамыз.',
    },
    featuresHeading: {
      de: 'Im Premium-Paket enthalten',
      en: 'Included in the premium package',
      tr: 'Premium pakete dahil',
      kk: 'Премиум пакетке кіреді',
    },
    features: [
      {
        de: 'Mehrsprachige Premium-Website (4 Sprachen)',
        en: 'Multilingual premium website (4 languages)',
        tr: 'Çok dilli premium web sitesi (4 dil)',
        kk: 'Көп тілді премиум сайт (4 тіл)',
      },
      { de: 'Online-Buchungssystem', en: 'Online booking system', tr: 'Çevrim içi randevu sistemi', kk: 'Онлайн жазылу жүйесі' },
      {
        de: 'KI-Chat-Assistent (24/7)',
        en: '24/7 AI chat assistant',
        tr: 'Yapay zekâ sohbet asistanı (7/24)',
        kk: 'ЖИ чат көмекшісі (24/7)',
      },
      {
        de: 'SEO + GEO + Google-Profil',
        en: 'SEO + GEO + Google profile',
        tr: 'SEO + GEO + Google profili',
        kk: 'SEO + GEO + Google профилі',
      },
      {
        de: 'Instagram + Bewertungsmanagement',
        en: 'Instagram + review management',
        tr: 'Instagram + değerlendirme yönetimi',
        kk: 'Instagram + пікірлерді басқару',
      },
      {
        de: 'Monatlicher SEO-Report + VIP-Support',
        en: 'Monthly SEO report + VIP support',
        tr: 'Aylık SEO raporu + VIP destek',
        kk: 'Айлық SEO есебі + VIP қолдау',
      },
    ],
    /**
     * One concrete promise instead of four. A stack of reassurances makes a
     * buyer doubt whether the guarantor could honour any of them, which is the
     * opposite of the intended effect.
     */
    guarantee: {
      de: 'Sie zahlen nach Abnahme, nicht vorher. Was abgenommen wird, steht vorher schriftlich fest. Vertragspartner ist die WAMOCON GmbH in Eschborn.',
      en: 'You pay after acceptance, not before. What gets accepted is agreed in writing beforehand. Your contracting party is WAMOCON GmbH in Eschborn.',
      tr: 'Ödemeyi kabulden sonra yaparsınız, öncesinde değil. Neyin kabul edileceği önceden yazılı olarak bellidir. Sözleşme tarafınız Eschborn’daki WAMOCON GmbH’dir.',
      kk: 'Төлемді қабылдаудан кейін жасайсыз, оған дейін емес. Не қабылданатыны алдын ала жазбаша бекітіледі. Шарт тарабыңыз: Эшборндағы WAMOCON GmbH.',
    },
    cta: {
      de: 'Umfang besprechen',
      en: 'Talk through the scope',
      tr: 'Kapsamı konuşalım',
      kk: 'Ауқымды талқылау',
    },
  },

  /** Cross-link to the sibling department, written as guidance not navigation. */
  crosslink: {
    heading: {
      de: 'Wenn eine Website nicht das Problem löst',
      en: 'When a website is not what fixes it',
      tr: 'Sorunu web sitesi çözmüyorsa',
      kk: 'Мәселені сайт шешпейтін болса',
    },
    text: {
      de: 'Sobald mehrere Leute nacheinander am selben Vorgang arbeiten, nicht jeder alles sehen darf und später nachweisbar sein muss, wer wann was entschieden hat, hilft kein Webdesign mehr. Dann brauchen Sie ein System — für Ataberk Estate haben wir beides gebaut, erst die Website, dann das ERP dahinter.',
      en: 'As soon as several people work on the same case in turn, not everyone may see everything, and you have to prove later who decided what and when, web design stops helping. Then you need a system — for Ataberk Estate we built both: the website first, the ERP behind it afterwards.',
      tr: 'Aynı işlemi birden çok kişi sırayla yürütüyorsa, herkes her şeyi göremiyorsa ve sonradan kimin ne zaman neye karar verdiği kanıtlanabilmeliyse, web tasarımı artık yetmez. O zaman bir sisteme ihtiyacınız var — Ataberk Estate için ikisini de yaptık: önce web sitesi, sonra arkasındaki ERP.',
      kk: 'Бір істі бірнеше адам кезекпен алып жүрсе, әркім бәрін көрмеуі керек болса және кейін кімнің қашан не шешкені дәлелденуі тиіс болса, веб-дизайн енді көмектеспейді. Ондайда сізге жүйе керек. Ataberk Estate үшін екеуін де жасадық: алдымен сайт, содан кейін оның артындағы ERP.',
    },
    cta: {
      de: 'Zu den Unternehmenssystemen',
      en: 'To the business systems',
      tr: 'Kurumsal sistemlere',
      kk: 'Кәсіпорын жүйелеріне',
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
    heading: { de: 'Überzeugen Sie sich selbst', en: 'See for yourself', tr: 'Kendiniz görün', kk: 'Өзіңіз көз жеткізіңіз' },
    text: {
      de: 'Klicken Sie sich durch die Websites oben, prüfen Sie die Google-Bewertungen unserer Kunden und vergleichen Sie in Ruhe. Recherche ist ausdrücklich erwünscht, denn was wir bauen, hält dem Blick von außen stand.',
      en: 'Click through the websites above, check our clients’ Google reviews and compare at your own pace. Research is expressly encouraged, because what we build holds up to outside scrutiny.',
      tr: 'Yukarıdaki web sitelerini tek tek gezin, müşterilerimizin Google değerlendirmelerini inceleyin ve acele etmeden karşılaştırın. Araştırmanızı açıkça teşvik ediyoruz; çünkü yaptığımız iş dışarıdan bakışa dayanır.',
      kk: 'Жоғарыдағы сайттарды бір-бірлеп ашып көріңіз, клиенттеріміздің Google пікірлерін оқыңыз және асықпай салыстырыңыз. Зерттегеніңізді ашық құптаймыз, өйткені біз жасаған дүние сырттан қараған көзге төтеп береді.',
    },
    /**
     * These four figures describe our own work, which we can evidence at any
     * time. The first two used to quote our clients' Google ratings; those are
     * other companies' numbers, they move without us noticing, and asserting
     * them as a headline figure is a claim we would have to defend. The block's
     * text still invites visitors to look those ratings up themselves, which is
     * where such numbers belong.
     * The first two values are filled in from `projects` at render time.
     */
    stats: [
      {
        value: { de: '11', en: '11', tr: '11', kk: '11' },
        label: {
          de: 'Websites live im Portfolio',
          en: 'websites live in the portfolio',
          tr: 'portföyde yayında site',
          kk: 'портфельде жұмыс істеп тұрған сайт',
        },
      },
      {
        value: { de: '9', en: '9', tr: '9', kk: '9' },
        label: {
          de: 'Branchen, von Barbier bis Steuerprüfung',
          en: 'industries, from barber to safety testing',
          tr: 'sektör: berberden denetime',
          kk: 'сала: шаштараздан техникалық сараптамаға дейін',
        },
      },
      {
        value: { de: '4', en: '4', tr: '4', kk: '4' },
        label: { de: 'Sprachen pro Website', en: 'languages per website', tr: 'her sitede dil', kk: 'әр сайттағы тіл' },
      },
      {
        value: { de: '7 Tage', en: '7 days', tr: '7 gün', kk: '7 күн' },
        label: {
          de: 'bis Ihre Website live ist',
          en: 'until your website is live',
          tr: 'içinde siteniz yayında',
          kk: 'ішінде сайтыңыз жұмыс істей бастайды',
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
      kk: 'WAMOCON сайты бизнесіңіз үшін нені білдіреді',
    },
    intro: {
      de: 'Eine Website ist kein Selbstzweck. Sie soll Kunden bringen. Genau darauf ist jede Seite ausgelegt, die wir bauen.',
      en: 'A website is not an end in itself. It should bring customers. That is exactly what every site we build is designed for.',
      tr: 'Web sitesi kendi başına bir amaç değildir. Müşteri getirmelidir. Yaptığımız her site tam olarak bunun için tasarlanır.',
      kk: 'Сайт өз алдына мақсат емес. Ол клиент әкелуі керек. Біз жасайтын әр бет дәл соған бағдарланған.',
    },
    items: [
      {
        title: {
          de: 'Voller Terminkalender',
          en: 'A full appointment book',
          tr: 'Dolu bir randevu defteri',
          kk: 'Толы жазылу кестесі',
        },
        text: {
          de: 'Online-Buchung rund um die Uhr, auch wenn Ihr Geschäft geschlossen hat.',
          en: 'Online booking around the clock, even when your business is closed.',
          tr: 'İşletmeniz kapalıyken bile günün her saati çevrim içi randevu.',
          kk: 'Кәсібіңіз жабық тұрғанда да тәулік бойы онлайн жазылу.',
        },
      },
      {
        title: {
          de: 'Sichtbar bei Google und KI',
          en: 'Visible on Google and AI',
          tr: 'Google’da ve yapay zekâda görünürlük',
          kk: 'Google-де және ЖИ-де көріну',
        },
        text: {
          de: 'SEO und GEO sorgen dafür, dass neue Kunden Sie finden, lokal wie international.',
          en: 'SEO and GEO make sure new customers find you, locally and internationally.',
          tr: 'SEO ve GEO sayesinde yeni müşteriler sizi bulur; hem yerelde hem uluslararası ölçekte.',
          kk: 'SEO мен GEO жаңа клиенттердің сізді табуын қамтамасыз етеді: жергілікті деңгейде де, халықаралық деңгейде де.',
        },
      },
      {
        title: {
          de: 'Kunden in vier Sprachen',
          en: 'Customers in four languages',
          tr: 'Dört dilde müşteri',
          kk: 'Төрт тілдегі клиенттер',
        },
        text: {
          de: 'Ein Auftritt, der Einheimische und Touristen gleichermaßen anspricht.',
          en: 'A presence that speaks to locals and tourists alike.',
          tr: 'Hem yerel halka hem turistlere aynı ölçüde hitap eden bir görünüm.',
          kk: 'Жергілікті тұрғынға да, туристке де бірдей ұнайтын цифрлық көрініс.',
        },
      },
      {
        title: {
          de: 'Vertrauen ab der ersten Sekunde',
          en: 'Trust from the first second',
          tr: 'İlk saniyeden itibaren güven',
          kk: 'Алғашқы секундтан бастап сенім',
        },
        text: {
          de: 'Ein professioneller Auftritt überzeugt, bevor das erste Gespräch beginnt.',
          en: 'A professional presence convinces before the first conversation begins.',
          tr: 'Profesyonel bir görünüm, daha ilk görüşme başlamadan ikna eder.',
          kk: 'Кәсіби көрініс алғашқы әңгіме басталмай тұрып сендіреді.',
        },
      },
    ],
  },

  // Like: zero-risk terms so the decision feels safe.
  guarantee: {
    heading: { de: 'Null Risiko für Sie', en: 'Zero risk for you', tr: 'Sizin için sıfır risk', kk: 'Сіз үшін тәуекел нөл' },
    points: [
      {
        de: 'Zahlung erst nach Auslieferung, 100 % nach Abnahme',
        en: 'Payment only after delivery, 100% on completion',
        tr: 'Ödeme yalnızca teslimattan sonra, kabulden sonra %100',
        kk: 'Төлем тек жеткізуден кейін, қабылданғаннан кейін 100 пайыз',
      },
      { de: 'Keine Anzahlung', en: 'No deposit', tr: 'Kapora yok', kk: 'Алдын ала төлем жоқ' },
      {
        de: '30 Tage Geld-zurück-Garantie',
        en: '30-day money-back guarantee',
        tr: '30 gün para iade garantisi',
        kk: '30 күндік ақшаны қайтару кепілдігі',
      },
      { de: 'Keine versteckten Kosten', en: 'No hidden fees', tr: 'Gizli maliyet yok', kk: 'Жасырын шығын жоқ' },
    ],
  },

  // Share: satisfied customers become promoters.
  share: {
    heading: {
      de: 'Was Kunden weitererzählen',
      en: 'What customers pass on',
      tr: 'Müşterilerin anlattıkları',
      kk: 'Клиенттер не айтып жүр',
    },
    text: {
      de: 'Eine gute Website bleibt nicht unbemerkt. Zufriedene Gäste bewerten, teilen und empfehlen weiter, und genau dafür bauen wir jede Seite: für den vollen Stuhl, den vollen Kalender und die nächste Empfehlung.',
      en: 'A good website does not go unnoticed. Happy guests review, share and recommend, and that is exactly what we build every site for: the full chair, the full calendar and the next referral.',
      tr: 'İyi bir web sitesi fark edilmeden kalmaz. Memnun misafirler değerlendirir, paylaşır ve tavsiye eder. Her siteyi tam da bunun için yapıyoruz: dolu koltuk, dolu takvim ve bir sonraki tavsiye.',
      kk: 'Жақсы сайт байқалмай қалмайды. Риза қонақ пікір жазады, бөліседі және ұсынады. Әр сайтты дәл сол үшін жасаймыз: толы орындық, толы күнтізбе және келесі ұсыныс.',
    },
  },

  // Love: the long-term partnership after launch.
  love: {
    heading: {
      de: 'Wir bleiben an Ihrer Seite',
      en: 'We stay by your side',
      tr: 'Yanınızda kalmaya devam ediyoruz',
      kk: 'Біз қасыңызда қаламыз',
    },
    text: {
      de: 'Mit dem Livegang endet die Zusammenarbeit nicht. Hosting, Wartung, monatliche SEO-Reports und VIP-Support halten Ihre Website schnell, sichtbar und aktuell, Monat für Monat.',
      en: 'The collaboration does not end at launch. Hosting, maintenance, monthly SEO reports and VIP support keep your website fast, visible and up to date, month after month.',
      tr: 'İş birliği yayına alma ile bitmez. Barındırma, bakım, aylık SEO raporları ve VIP destek sitenizi her ay hızlı, görünür ve güncel tutar.',
      kk: 'Ынтымақтастық сайт іске қосылғанда бітпейді. Хостинг, техқызмет, айлық SEO есептері және VIP қолдау сайтыңызды ай сайын жылдам, көрінетін және өзекті күйде ұстайды.',
    },
    cta: {
      de: 'Jetzt Projekt starten',
      en: 'Start your project now',
      tr: 'Projenizi hemen başlatın',
      kk: 'Жобаңызды қазір бастаңыз',
    },
  },
} as const;

/**
 * `Service` node for the web-design page's JSON-LD graph, mirroring the one on
 * the business-systems page. The catalogue is generated from the department's
 * own capability list, so it stays in step with what the page shows.
 */
export const webdesignServiceSchema = (lang: Lang, url: string) => ({
  '@type': 'Service',
  '@id': `${url}#service`,
  name: {
    de: 'Webdesign und mehrsprachige Websites',
    en: 'Web design and multilingual websites',
    tr: 'Web tasarımı ve çok dilli web siteleri',
    kk: 'Веб-дизайн және көп тілді сайттар',
  }[lang],
  serviceType: {
    de: 'Webdesign und Suchmaschinenoptimierung',
    en: 'Web design and search engine optimisation',
    tr: 'Web tasarımı ve arama motoru optimizasyonu',
    kk: 'Веб-дизайн және іздеу жүйесіне оңтайландыру',
  }[lang],
  description: webdesign.seo.description[lang],
  provider: { '@id': 'https://www.wamocon.com/#organization' },
  areaServed: ['Germany', 'European Union', 'Türkiye'],
  availableLanguage: ['de', 'en', 'tr', 'kk'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: {
      de: 'Leistungen der Webdesign-Abteilung',
      en: 'What the web-design department delivers',
      tr: 'Web tasarım biriminin hizmetleri',
      kk: 'Веб-дизайн бөлімінің қызметтері',
    }[lang],
    itemListElement: webdesign.department.capabilities.map((c) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: c.title[lang], description: c.text[lang] },
    })),
  },
});

/**
 * FAQ for the web-design page.
 *
 * The page had none, which cost it twice: a buyer's four standing objections —
 * price, ownership, duration and "what happens after launch" — were answered
 * nowhere, and generative engines had no self-contained passage to quote when
 * somebody asks them what a multilingual website costs. Answers stay in the
 * 40–160 word band those engines quote most reliably, and every figure in them
 * is one this page already states out loud.
 */
export const webdesignFaq: Record<Lang, { heading: string; intro: string; items: { question: string; answer: string }[] }> = {
  de: {
    heading: 'Häufige Fragen zu Websites von WAMOCON',
    intro: 'Was Kundinnen und Kunden fragen, bevor sie sich entscheiden — beantwortet, bevor Sie fragen müssen.',
    items: [
      {
        question: 'Was kostet eine Website bei WAMOCON?',
        answer:
          'Der Preis folgt dem Umfang, deshalb steht auf dieser Seite keiner. Was ihn bestimmt: Seitenzahl, Anzahl der Sprachen, ob eine Buchungslogik dazugehört, welche Systeme angebunden werden und ob Barrierefreiheit nach BFSG gefordert ist. Sagen Sie uns, was Sie brauchen, und Sie bekommen die Rechnung dazu, bevor Sie sich entscheiden. Bezahlt wird nach Abnahme, ohne Anzahlung. Und wenn zwei Seiten für Ihr Vorhaben reichen, sagen wir Ihnen das, statt Ihnen ein Premium-Paket zu verkaufen.',
      },
      {
        question: 'Wie lange dauert es, bis meine Website online ist?',
        answer:
          'Ein Einstiegsauftritt steht in etwa einer Woche. Voraussetzung dafür sind Inhalte: Texte, Bilder, Öffnungszeiten und Leistungen. Wo die fehlen, dauert nicht die Entwicklung länger, sondern das Sammeln — deshalb liefern wir eine Vorlage mit, die genau abfragt, was gebraucht wird. Ein mehrsprachiger Auftritt mit Buchung, KI-Assistent und Bewertungsanbindung braucht länger, weil jede Sprache übersetzt, geprüft und für Suchmaschinen ausgezeichnet werden will.',
      },
      {
        question: 'Gehören mir Domain, Inhalte und Website?',
        answer:
          'Ja, alle drei. Die Domain läuft auf Sie, nicht auf uns. Texte und Bilder bleiben Ihr Eigentum, und die fertige Website bekommen Sie ausgehändigt, wenn Sie den Anbieter wechseln wollen. Hosting, Wartung und Support bieten wir an, weil die meisten Kunden sie wollen — nicht, weil Sie ohne uns nicht weiterkämen. Vertragspartner ist die WAMOCON GmbH in Eschborn bei Frankfurt, mit deutschem Gerichtsstand.',
      },
      {
        question: 'Wird meine Website auch von KI-Assistenten gefunden?',
        answer:
          'Darauf ist jede Seite ausgelegt, die wir bauen. Klassisches SEO sorgt dafür, dass Google Sie findet und einordnet; GEO — generative Suchmaschinenoptimierung — sorgt dafür, dass ChatGPT, Perplexity und die KI-Antworten in der Google-Suche Sie zitieren können. Praktisch heißt das: eindeutige Überschriften, in sich abgeschlossene Antwortabsätze, saubere strukturierte Daten und ein gepflegtes Google-Unternehmensprofil. Der Unterschied zeigt sich vor allem bei lokalen Fragen wie „bester Barbier in Alanya".',
      },
      {
        question: 'Muss meine Website barrierefrei sein?',
        answer:
          'Möglicherweise ja. Das Barrierefreiheitsstärkungsgesetz verpflichtet seit Juni 2025 viele Anbieter digitaler Dienstleistungen gegenüber Verbrauchern, darunter Onlineshops und Buchungsstrecken; Kleinstunternehmen sind unter bestimmten Voraussetzungen ausgenommen. Wir bauen Tastaturbedienbarkeit, Screenreader-Tauglichkeit und ausreichende Kontraste von Anfang an ein, weil dasselbe Ergebnis später nachzurüsten deutlich teurer ist. Ob die Pflicht für Sie gilt, klären wir im Erstgespräch — verbindlich beurteilen kann das nur eine Rechtsberatung.',
      },
      {
        question: 'Was passiert nach dem Livegang?',
        answer:
          'Die Zusammenarbeit endet dort nicht. Hosting und Wartung halten die Seite schnell und aktuell, Updates schließen Sicherheitslücken, ein monatlicher SEO-Report zeigt, worüber Menschen Sie finden, und der VIP-Support nimmt Änderungswünsche direkt entgegen. Wer das nicht möchte, bekommt die Seite ausgehändigt und betreibt sie selbst weiter. Beides ist vorgesehen, keines von beiden ist eine Falle.',
      },
      {
        question: 'Brauche ich eine Website oder ein System?',
        answer:
          'Eine Website zeigt Ihr Unternehmen nach außen: Fremde finden Sie, machen sich ein Bild und fragen an. Ein System führt Ihren Betrieb nach innen: mehrere Personen arbeiten nacheinander am selben Vorgang, nicht jeder darf alles sehen, und später muss nachweisbar sein, wer wann was entschieden hat. Oft ist es beides — für Ataberk Estate haben wir zuerst die Website gebaut und später das ERP dahinter. Wenn Ihre Beschreibung eher nach dem zweiten Fall klingt, führt der Weg zu unseren Unternehmenssystemen.',
      },
    ],
  },
  en: {
    heading: 'Frequently asked questions about WAMOCON websites',
    intro: 'What clients ask before they decide — answered before you have to ask.',
    items: [
      {
        question: 'What does a website from WAMOCON cost?',
        answer:
          'The price follows the scope, which is why there is none on this page. What sets it: the number of pages, the number of languages, whether booking logic is involved, which systems get connected, and whether accessibility under the German BFSG is required. Tell us what you need and you get the calculation before you decide. Payment falls due after acceptance, with no deposit. And if two pages will do for what you have in mind, we say so rather than selling you a premium package.',
      },
      {
        question: 'How long until my website is live?',
        answer:
          'An entry-level presence takes about a week. That assumes content: text, photos, opening hours and services. Where those are missing, it is not the build that takes longer but the gathering — which is why we supply a template that asks for exactly what is needed. A multilingual presence with booking, an AI assistant and review integration takes longer, because every language has to be translated, checked and marked up for search.',
      },
      {
        question: 'Do I own the domain, the content and the website?',
        answer:
          'Yes, all three. The domain is registered to you, not to us. Text and images stay your property, and you are handed the finished website if you ever want to change provider. We offer hosting, maintenance and support because most clients want them — not because you would be stuck without us. Your contracting party is WAMOCON GmbH in Eschborn near Frankfurt, under German jurisdiction.',
      },
      {
        question: 'Will AI assistants find my website?',
        answer:
          'Every site we build is designed for it. Classic SEO gets you found and categorised by Google; GEO — generative engine optimisation — lets ChatGPT, Perplexity and Google’s AI answers cite you. In practice that means unambiguous headings, self-contained answer paragraphs, clean structured data and a maintained Google Business Profile. The difference shows up most on local questions such as “best barber in Alanya”.',
      },
      {
        question: 'Does my website have to be accessible?',
        answer:
          'Possibly. Germany’s Barrierefreiheitsstärkungsgesetz has obliged many providers of digital services to consumers since June 2025, online shops and booking flows among them; micro-enterprises are exempt under certain conditions. We build keyboard operability, screen-reader support and sufficient contrast in from the start, because retrofitting the same result costs considerably more. Whether the duty applies to you is something we go through in the first conversation — only legal advice can settle it bindingly.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'The collaboration does not end there. Hosting and maintenance keep the site fast and current, updates close security holes, a monthly SEO report shows what people find you through, and VIP support takes change requests directly. Anyone who would rather not have that is handed the site and runs it themselves. Both are provided for; neither is a trap.',
      },
      {
        question: 'Do I need a website or a system?',
        answer:
          'A website presents your company to the outside: strangers find you, form an impression and get in touch. A system runs your operation on the inside: several people work on the same case one after another, not everyone may see everything, and later you must be able to prove who decided what and when. Often it is both — for Ataberk Estate we built the website first and the ERP behind it afterwards. If your description sounds more like the second case, the way leads to our business systems.',
      },
    ],
  },
  tr: {
    heading: 'WAMOCON web siteleri hakkında sık sorulan sorular',
    intro: 'Müşterilerin karar vermeden önce sorduğu şeyler — siz sormak zorunda kalmadan yanıtlanmış hâlde.',
    items: [
      {
        question: 'WAMOCON’da bir web sitesi ne kadara mal olur?',
        answer:
          'Fiyat kapsamı izler; bu yüzden bu sayfada fiyat yok. Fiyatı belirleyenler: sayfa sayısı, dil sayısı, randevu mantığının olup olmadığı, hangi sistemlerin bağlanacağı ve BFSG kapsamında erişilebilirliğin istenip istenmediği. Neye ihtiyacınız olduğunu söyleyin, karar vermeden önce hesabı alın. Ödeme kabulden sonra yapılır, kapora yoktur. Aklınızdaki iş için iki sayfa yetiyorsa, size premium paket satmak yerine bunu söyleriz.',
      },
      {
        question: 'Sitem ne kadar sürede yayına girer?',
        answer:
          'Giriş seviyesinde bir site yaklaşık bir haftada hazır olur. Bunun koşulu içeriktir: metinler, fotoğraflar, çalışma saatleri ve hizmetler. Bunlar eksikse uzayan geliştirme değil, toplama sürecidir — bu yüzden neye ihtiyaç duyulduğunu tam olarak soran bir şablonu birlikte veriyoruz. Randevu, yapay zekâ asistanı ve değerlendirme entegrasyonu içeren çok dilli bir site daha uzun sürer; çünkü her dilin çevrilmesi, kontrol edilmesi ve arama motorları için işaretlenmesi gerekir.',
      },
      {
        question: 'Alan adı, içerik ve site bana mı ait?',
        answer:
          'Evet, üçü de. Alan adı bizim değil, sizin adınıza kayıtlıdır. Metin ve görseller mülkiyetinizde kalır; sağlayıcı değiştirmek isterseniz bitmiş site size teslim edilir. Barındırma, bakım ve desteği sunuyoruz çünkü müşterilerin çoğu bunu istiyor — bizsiz devam edemeyeceğiniz için değil. Sözleşme tarafınız, Frankfurt yakınlarındaki Eschborn’da bulunan WAMOCON GmbH’dir ve Alman yargı yetkisi geçerlidir.',
      },
      {
        question: 'Sitemi yapay zekâ asistanları bulacak mı?',
        answer:
          'Yaptığımız her site bunun için tasarlanır. Klasik SEO, Google’ın sizi bulup sınıflandırmasını sağlar; GEO — üretken arama motoru optimizasyonu — ChatGPT, Perplexity ve Google’ın yapay zekâ yanıtlarının sizi kaynak göstermesini sağlar. Pratikte bu şu demek: net başlıklar, kendi içinde tam yanıt paragrafları, temiz yapılandırılmış veri ve özenle tutulmuş bir Google İşletme Profili. Fark en çok “Alanya’nın en iyi berberi” gibi yerel sorularda görülür.',
      },
      {
        question: 'Sitemin erişilebilir olması zorunlu mu?',
        answer:
          'Muhtemelen evet. Almanya’daki Erişilebilirliği Güçlendirme Yasası, Haziran 2025’ten bu yana tüketicilere dijital hizmet sunan pek çok sağlayıcıyı — çevrim içi mağazalar ve randevu akışları dâhil — yükümlü kılıyor; mikro işletmeler belirli koşullarda muaf. Klavyeyle kullanımı, ekran okuyucu uyumunu ve yeterli kontrastı en baştan kuruyoruz, çünkü aynı sonucu sonradan eklemek belirgin biçimde pahalı. Yükümlülüğün sizin için geçerli olup olmadığını ilk görüşmede ele alırız; bağlayıcı değerlendirmeyi yalnızca hukuki danışmanlık yapabilir.',
      },
      {
        question: 'Yayına aldıktan sonra ne oluyor?',
        answer:
          'İş birliği orada bitmez. Barındırma ve bakım siteyi hızlı ve güncel tutar, güncellemeler güvenlik açıklarını kapatır, aylık SEO raporu insanların sizi neyle bulduğunu gösterir ve VIP destek değişiklik taleplerini doğrudan alır. Bunu istemeyenlere site teslim edilir, kendileri işletir. İkisi de öngörülmüştür; hiçbiri tuzak değildir.',
      },
      {
        question: 'Bana web sitesi mi lazım, sistem mi?',
        answer:
          'Web sitesi şirketinizi dışarıya gösterir: sizi tanımayanlar bulur, bir izlenim edinir ve iletişime geçer. Sistem ise işletmenizi içeriden yürütür: aynı işlemi birden çok kişi sırayla sürdürür, herkes her şeyi göremez ve sonradan kimin ne zaman neye karar verdiği kanıtlanabilmelidir. Çoğu zaman ikisi birden gerekir — Ataberk Estate için önce web sitesini, sonra arkasındaki ERP’yi yaptık. Anlattığınız daha çok ikinci duruma benziyorsa, yol kurumsal sistemlerimize çıkar.',
      },
    ],
  },
  kk: {
    heading: 'WAMOCON сайттары туралы жиі қойылатын сұрақтар',
    intro: 'Клиенттер шешім қабылдамай тұрып не сұрайды — сіз сұрауға мәжбүр болмай тұрып жауап берілген.',
    items: [
      {
        question: 'WAMOCON-дағы сайт қанша тұрады?',
        answer:
          'Баға ауқымға сүйенеді, сондықтан бұл бетте баға жоқ. Оны айқындайтындар: бет саны, тіл саны, жазылу логикасының бар-жоғы, қандай жүйелер жалғанатыны және BFSG бойынша қолжетімділік талап етіле ме. Не керегін айтыңыз, шешім қабылдамай тұрып есебін аласыз. Төлем қабылдаудан кейін жасалады, алдын ала төлемсіз. Ал ойыңыздағы іске екі бет жетсе, сізге премиум пакет сатудың орнына соны айтамыз.',
      },
      {
        question: 'Сайтым қанша уақытта жұмыс істей бастайды?',
        answer:
          'Бастапқы деңгейдегі сайт шамамен бір аптада дайын болады. Оның шарты — мазмұн: мәтін, фото, жұмыс уақыты және қызметтер. Олар жоқ болса, ұзаққа созылатын әзірлеу емес, жинау болады, сондықтан не керегін нақты сұрайтын үлгіні қоса береміз. Жазылу, ЖИ көмекшісі және пікір интеграциясы бар көп тілді сайт ұзағырақ уақыт алады, өйткені әр тілді аударып, тексеріп, іздеу жүйелеріне таңбалау керек.',
      },
      {
        question: 'Домен, мазмұн және сайт маған тиесілі ме?',
        answer:
          'Иә, үшеуі де. Домен бізге емес, сізге тіркеледі. Мәтін мен суреттер сіздің меншігіңізде қалады, ал жеткізушіні ауыстырғыңыз келсе, дайын сайт сізге тапсырылады. Хостинг, техқызмет және қолдауды ұсынамыз, өйткені клиенттердің көбі соны қалайды, бізсіз жалғастыра алмайтындықтан емес. Шарт тарабыңыз — Франкфурт маңындағы Эшборнда орналасқан WAMOCON GmbH, соттылық орны Германия.',
      },
      {
        question: 'Сайтымды ЖИ көмекшілері таба ма?',
        answer:
          'Біз жасайтын әр сайт соған бағдарланған. Классикалық SEO Google сізді тауып, санатқа қосуын қамтамасыз етеді; GEO, яғни генеративті іздеуге оңтайландыру, ChatGPT, Perplexity және Google-дің ЖИ жауаптарының сізге сілтеме жасай алуын қамтамасыз етеді. Іс жүзінде бұл: анық тақырыптар, өз алдына толық жауап абзацтары, таза құрылымдық дерек және ұқыпты жүргізілген Google бизнес-профилі. Айырма әсіресе «Аланиядағы ең жақсы шаштараз» тәрізді жергілікті сұрақтарда байқалады.',
      },
      {
        question: 'Сайтым қолжетімді болуға тиіс пе?',
        answer:
          'Мүмкін, иә. Германияның қолжетімділікті күшейту туралы заңы 2025 жылдың маусымынан бері тұтынушыға цифрлық қызмет көрсететін көптеген жеткізушіні, оның ішінде онлайн дүкендер мен жазылу ағындарын міндеттейді; шағын кәсіпорындар белгілі бір шарттармен босатылады. Пернетақтамен басқаруды, скринридерге жарамдылықты және жеткілікті контрастты басынан бастап саламыз, өйткені дәл сол нәтижені кейін қосу әлдеқайда қымбат. Міндет сізге қатысты ма, соны алғашқы әңгімеде талқылаймыз; түпкілікті бағаны тек заң кеңесі бере алады.',
      },
      {
        question: 'Сайт іске қосылғаннан кейін не болады?',
        answer:
          'Ынтымақтастық сонымен бітпейді. Хостинг пен техқызмет сайтты жылдам әрі өзекті ұстайды, жаңартулар қауіпсіздік олқылықтарын жабады, айлық SEO есебі адамдардың сізді немен тапқанын көрсетеді, ал VIP қолдау өзгеріс сұрауларын тікелей қабылдайды. Мұны қаламағанға сайт тапсырылады, өзі жүргізе береді. Екеуі де қарастырылған, ешқайсысы тұзақ емес.',
      },
      {
        question: 'Маған сайт керек пе, әлде жүйе ме?',
        answer:
          'Сайт компанияңызды сыртқа көрсетеді: сізді танымайтындар тауып, ой қалыптастырып, хабарласады. Жүйе кәсібіңізді іштен жүргізеді: бір істі бірнеше адам кезекпен алып жүреді, әркім бәрін көрмейді, әрі кейін кімнің қашан не шешкені дәлелденуі керек. Көбіне екеуі де керек: Ataberk Estate үшін алдымен сайтты, содан кейін оның артындағы ERP-ті жасадық. Айтқаныңыз екінші жағдайға көбірек ұқсаса, жол кәсіпорын жүйелерімізге апарады.',
      },
    ],
  },
};
