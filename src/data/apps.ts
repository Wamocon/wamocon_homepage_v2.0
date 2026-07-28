/**
 * AI / software product showcase data for the home page section
 * "Wir entwickeln Lösungen für jede Problemstellung".
 *
 * To add or edit an app: update the relevant category below.
 *  - `soon: true` renders a "coming soon" card with no outbound link.
 */
import type { Lang } from '../i18n/config';

type L = Record<Lang, string>;

export interface AppItem {
  name: string;
  url?: string;
  soon?: boolean;
  description: L;
}

export interface AppCategory {
  label: L;
  apps: AppItem[];
}

export const appCategories: AppCategory[] = [
  {
    label: {
      de: 'Office & Produktivität',
      en: 'Office & Productivity',
      tr: 'Ofis ve Verimlilik',
    },
    apps: [
      {
        name: 'urbackup',
        url: 'https://backuppilot.app/',
        description: {
          de: 'Planung und Verwaltung von Datensicherungen mit automatisierten Backup-Strategien und Statusübersicht.',
          en: 'Planning and management of data backups with automated backup strategies and a status overview.',
          tr: 'Otomatik yedekleme stratejileri ve durum görünümüyle veri yedeklemelerinin planlanması ve yönetimi.',
        },
      },
      {
        name: 'WMC Anforderungsportal',
        url: 'https://wmc-anforderungsportal.vercel.app/de',
        description: {
          de: 'KI-gestütztes Portal für IT-Beratungen und Teams: Anforderungen strukturiert erfassen, priorisieren und verwalten.',
          en: 'AI-powered portal for IT consultancies and teams: capture, prioritise and manage requirements in a structured way.',
          tr: 'BT danışmanlıkları ve ekipler için yapay zekâ destekli portal: gereksinimleri yapılandırılmış biçimde toplayın, önceliklendirin ve yönetin.',
        },
      },
      {
        name: 'VerWa (Vertragswächterin)',
        url: 'https://wamocon.github.io/vertragsmanager_lp/',
        description: {
          de: 'Intelligentes Vertrags- und Kündigungsmanagement für Privatpersonen und kleine Unternehmen.',
          en: 'Intelligent contract and cancellation management for individuals and small businesses.',
          tr: 'Bireyler ve küçük işletmeler için akıllı sözleşme ve fesih yönetimi.',
        },
      },
      {
        name: 'backofficeassistent',
        url: 'https://wamocon.github.io/backofficeassistent_lp/',
        description: {
          de: 'KI-Assistent für Behördenbriefe und medizinische Befunde: Dokumente hochladen, Fristen tracken und Antwort-PDFs generieren.',
          en: 'AI assistant for official letters and medical findings: upload documents, track deadlines and generate response PDFs.',
          tr: 'Resmî yazışmalar ve tıbbi raporlar için yapay zekâ asistanı: belgeleri yükleyin, süreleri takip edin ve yanıt PDF’leri oluşturun.',
        },
      },
      {
        name: 'Bedarfspilot',
        url: 'https://wamocon.github.io/bedarfspilot_lp/',
        description: {
          de: 'Internes Equipment-Management: Mitarbeitende stellen Bedarfe, Admins prüfen und genehmigen Anfragen im Dashboard.',
          en: 'Internal equipment management: employees request work equipment, admins review and approve requests in the dashboard.',
          tr: 'Kurum içi ekipman yönetimi: çalışanlar talep oluşturur, yöneticiler talepleri panelde inceleyip onaylar.',
        },
      },
      {
        name: 'belegnest',
        url: 'https://wamocon.github.io/belegbox_lp/' ,
        description: {
          de: 'Digitale Belegverwaltung und Buchhaltungsvorbereitung für effiziente Finanzprozesse.',
          en: 'Digital receipt management and accounting preparation for efficient financial processes.',
          tr: 'Verimli finansal süreçler için dijital fiş yönetimi ve muhasebe hazırlığı.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Marketing, Finanzen & Planung',
      en: 'Marketing, Finance & Planning',
      tr: 'Pazarlama, Finans ve Planlama',
    },
    apps: [
      {
        name: 'Momentum Marketing',
        url: 'https://www.momentum-marketing.app/',
        description: {
          de: 'Zentrale Kampagnenverwaltung mit strukturierter Erstellung, Creative-Workflow und kanalbezogenen KPIs.',
          en: 'Central campaign management with structured creation, creative workflow and channel-based KPIs.',
          tr: 'Yapılandırılmış oluşturma, kreatif iş akışı ve kanal bazlı KPI’larla merkezî kampanya yönetimi.',
        },
      },
      {
        name: 'WedBudget',
        url: 'https://wamocon.github.io/hochzeitsrechner_lp/',
        description: {
          de: 'Dynamischer Hochzeits-Budgetrechner: Gästezahl und Budget erfassen, Kosten schätzen und als PDF teilen.',
          en: 'Dynamic wedding budget calculator: enter guest count and budget, estimate costs and share as PDF.',
          tr: 'Dinamik düğün bütçe hesaplayıcı: davetli sayısı ve bütçeyi girin, maliyetleri tahmin edin ve PDF olarak paylaşın.',
        },
      },
      {
        name: 'SchufaCleaner',
        url: 'https://wamocon.github.io/schufacleaner_lp/',
        description: {
          de: 'Schufa-Datenkopie hochladen, fehlerhafte Einträge erkennen und Widerspruchs-Schreiben per KI generieren.',
          en: 'Upload SCHUFA data copy, detect erroneous entries and generate objection letters with AI.',
          tr: 'SCHUFA veri kopyanızı yükleyin, hatalı kayıtları tespit edin ve yapay zekâ ile itiraz yazıları oluşturun.',
        },
      },
      {
        name: 'GrundsteuerPrüfer',
        soon: true,
        description: {
          de: 'Einfache Berechnung und Prüfung der Grundsteuer für Immobilienbesitzer.',
          en: 'Easy calculation and verification of property tax for real estate owners.',
          tr: 'Gayrimenkul sahipleri için emlak vergisinin kolayca hesaplanması ve kontrolü.',
        },
      },
      {
        name: 'GhostAccounts',
        url: 'https://wamocon.github.io/ghostaccounts_lp/',
        description: {
          de: 'E-Mail-Postfach scannen, vergessene Konten finden und mit Lösch-Links oder Assistenten bereinigen.',
          en: 'Scan email inbox, find forgotten accounts and clean them up with deletion links or an assistant.',
          tr: 'E-posta kutunuzu tarayın, unutulmuş hesapları bulun ve silme bağlantıları veya asistan yardımıyla temizleyin.',
        },
      },
      {
        name: 'BuyRight-AI',
        url: 'https://wamocon.github.io/BuyRight-AI_lp/',
        description: {
          de: 'KI-gestützter Shopping-Assistent für smarte Kaufentscheidungen, Preisvergleiche und personalisierte Produktempfehlungen.',
          en: 'AI-powered shopping assistant for smart purchase decisions, price comparisons and personalised recommendations.',
          tr: 'Akıllı satın alma kararları, fiyat karşılaştırmaları ve kişiselleştirilmiş ürün önerileri için yapay zekâ destekli alışveriş asistanı.',
        },
      },
    ],
  },
  {
    label: {
      de: 'KI, Analyse & Wachstum',
      en: 'AI, Analysis & Growth',
      tr: 'Yapay Zekâ, Analiz ve Büyüme',
    },
    apps: [
      {
        name: 'KI Manager LMS',
        url: 'https://ki-manager-lms.vercel.app/lp',
        description: {
          de: 'KI-Lernplattform für EU AI Act Compliance und KI-Readiness in Unternehmen.',
          en: 'AI learning platform for EU AI Act compliance and AI readiness in companies.',
          tr: 'Şirketlerde AB Yapay Zekâ Yasası uyumu ve yapay zekâ hazırlığı için öğrenme platformu.',
        },
      },
      // {
      //   name: 'AI SafeGuard',
      //   url: 'https://wamocon.github.io/AI-SafeGuard_lp/',
      //   description: {
      //     de: 'Middleware zwischen Mitarbeitenden und KI-Modellen mit DLP, Prompt-Filterung, PII-Anonymisierung und Audit-Logs.',
      //     en: 'Middleware between employees and AI models with DLP, prompt filtering, PII anonymisation and audit logs.',
      //     tr: 'Çalışanlar ile yapay zekâ modelleri arasında DLP, istem filtreleme, kişisel veri anonimleştirme ve denetim kayıtları sunan ara katman.',
      //   },
      // },
      {
        name: 'LFA',
        url: 'https://fiae-learn.com/',
        description: {
          de: 'Lern- und Ausbildungsplattform speziell für Fachinformatiker für Anwendungsentwicklung (FIAE).',
          en: 'Learning and training platform specifically for IT Specialists in Application Development (FIAE).',
          tr: 'Uygulama geliştirme alanındaki bilişim uzmanları (FIAE) için özel öğrenme ve eğitim platformu.',
        },
      },
      {
        name: 'KI-Prüfungstrainer',
        url: 'https://wamocon.github.io/KI-Prufungstrainer_lp/',
        description: {
          de: 'KI-gestützter Prüfungstrainer für Berufsausbildung und Zertifizierungen mit adaptiven Lernpfaden und Selbsttests.',
          en: 'AI-powered exam trainer for vocational training and certifications with adaptive learning paths and self-tests.',
          tr: 'Uyarlanabilir öğrenme yolları ve öz değerlendirme testleriyle mesleki eğitim ve sertifikasyonlar için yapay zekâ destekli sınav antrenörü.',
        },
      },
      {
        name: 'ProCon',
        url: 'https://promptcontrol.eu/',
        description: {
          de: 'Verwaltung, Versionierung und Optimierung von KI-Prompts für Teams.',
          en: 'Management, versioning and optimisation of AI prompts for teams.',
          tr: 'Ekipler için yapay zekâ istemlerinin yönetimi, sürümlenmesi ve optimizasyonu.',
        },
      },
      {
        name: 'Kompetenzkompass',
        url: 'https://wamocon.github.io/kompetenzkompass_lp/',
        description: {
          de: 'KI-basiertes Skill-Matching zwischen Projektanforderungen und Kandidaten inklusive Interview-Leitfäden.',
          en: 'AI-based skill matching between project requirements and candidates including interview guides.',
          tr: 'Proje gereksinimleri ile adaylar arasında yapay zekâ tabanlı yetkinlik eşleştirmesi ve mülakat kılavuzları.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Immobilien & Handwerk',
      en: 'Real Estate & Crafts',
      tr: 'Gayrimenkul ve Zanaat',
    },
    apps: [
      {
        name: 'Plan-it',
        url: 'https://wamocon.github.io/plan-it_lp/',
        description: {
          de: 'Architekturplaner für Software-Landschaften: Ist-Zustand analysieren, Architektur-Score ermitteln und Umsetzungsplan exportieren.',
          en: 'Architecture planner for software landscapes: analyse current state, determine architecture score and export implementation plan.',
          tr: 'Yazılım mimarileri için planlayıcı: mevcut durumu analiz edin, mimari puanı belirleyin ve uygulama planını dışa aktarın.',
        },
      },
      {
        name: 'Ustafix',
        url: 'https://www.ustafix.app/',
        description: {
          de: 'Mängelmanagement für Baustellen: Defekte erfassen, fotodokumentieren, verfolgen und als PDF-Bericht exportieren.',
          en: 'Defect management for construction sites: capture, photo-document, track defects and export PDF reports.',
          tr: 'Şantiyeler için eksiklik yönetimi: kusurları kaydedin, fotoğrafla belgeleyin, takip edin ve PDF rapor olarak dışa aktarın.',
        },
      },
      // {
      //   name: 'Meine Wohnung',
      //   url: 'https://wamocon.github.io/meine_wohnung',
      //   description: {
      //     de: 'Zentrale Plattform zur Verwaltung von Mietobjekten und Mieterkommunikation.',
      //     en: 'Central platform for managing rental properties and tenant communication.',
      //     tr: 'Kiralık mülklerin ve kiracı iletişiminin yönetimi için merkezî platform.',
      //   },
      // },
      {
        name: 'WG-Planer',
        url: 'https://wamocon.github.io/wg-planer_lp/',
        description: {
          de: 'Digitale Verwaltung von Wohngemeinschaften mit Aufgabenverteilung, Einkaufslisten und transparenter Kostenteilung.',
          en: 'Digital management of shared flats with task allocation, shopping lists and transparent cost sharing.',
          tr: 'Görev dağılımı, alışveriş listeleri ve şeffaf masraf paylaşımıyla ev arkadaşlığının dijital yönetimi.',
        },
      },
      {
        name: 'Parzella',
        url: 'https://wamocon.github.io/parzella_lp/',
        description: {
          de: 'Kleingarten-Platzfinder: Vereine auf der Karte finden, Bewerbungen mit KI generieren und Fortschritte tracken.',
          en: 'Allotment-garden finder: locate clubs on a map, generate applications with AI and track progress.',
          tr: 'Hobi bahçesi bulucu: dernekleri haritada bulun, başvuruları yapay zekâ ile oluşturun ve süreci takip edin.',
        },
      },
      {
        name: 'Auktivo',
        url: 'https://wamocon.github.io/auktivo_lp/',
        description: {
          de: 'KI-Assistent für Zwangsversteigerungen: Gutachten analysieren, Risiken erkennen und Chancen bewerten.',
          en: 'AI assistant for foreclosure auctions: analyse reports, identify risks and evaluate opportunities.',
          tr: 'İcra ihaleleri için yapay zekâ asistanı: bilirkişi raporlarını analiz edin, riskleri tespit edin ve fırsatları değerlendirin.',
        },
      },
      {
        name: 'BalkonBonus',
        url: 'https://balkonbonus.eu',
        description: {
          de: 'Fördermittel-Suche und Antragsunterlagen für Balkonkraftwerke in wenigen Minuten erstellen.',
          en: 'Search for subsidies and create application documents for balcony power plants in minutes.',
          tr: 'Balkon güneş santralleri için teşvik araması yapın ve başvuru belgelerini dakikalar içinde oluşturun.',
        },
      },
      {
        name: 'HandwerkerBonus',
        url: 'https://hardwarebonus.eu/',
        description: {
          de: 'Handwerker-Rechnungen hochladen, Steuer-Abzugspotenzial prüfen und ELSTER-Daten exportieren.',
          en: 'Upload craftsman invoices, check tax deduction potential and export ELSTER-ready data.',
          tr: 'Usta faturalarını yükleyin, vergi indirimi potansiyelini kontrol edin ve ELSTER’e hazır verileri dışa aktarın.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Mobilität, Familie & Recht',
      en: 'Mobility, Family & Law',
      tr: 'Mobilite, Aile ve Hukuk',
    },
    apps: [
      {
        name: 'AWAY',
        url: 'https://landingpage.aiaway.de/',
        description: {
          de: 'Moderne Urlaubsplanung mit digitalen Anträgen, Kalenderintegration und Teamübersicht.',
          en: 'Modern holiday planning with digital requests, calendar integration and team overview.',
          tr: 'Dijital talepler, takvim entegrasyonu ve ekip görünümüyle modern izin planlaması.',
        },
      },
      {
        name: 'TRACE',
        url: 'https://trace-livid-kappa.vercel.app/auth/login',
        description: {
          de: 'Digitale Zeiterfassung für Teams: Arbeitszeiten, Projekte, Berichte und Freigabe-Workflows.',
          en: 'Digital time tracking for teams: working hours, projects, reports and approval workflows.',
          tr: 'Ekipler için dijital zaman takibi: çalışma saatleri, projeler, raporlar ve onay iş akışları.',
        },
      },
      {
        name: 'CarMan',
        url: 'https://wamocon.github.io/carman_lp/',
        description: {
          de: 'Fahrzeugkosten-Tracker für Privatanwender: Kosten erfassen, Servicetermine planen und Fahrzeughistorie exportieren.',
          en: 'Vehicle cost tracker for private users: log costs, plan service appointments and export vehicle history.',
          tr: 'Bireysel kullanıcılar için araç masrafı takibi: giderleri kaydedin, servis randevularını planlayın ve araç geçmişini dışa aktarın.',
        },
      },
      {
        name: 'LadeKompass',
        url: 'https://wamocon.github.io/ladeKompass_lp/',
        description: {
          de: 'Kartenbasierte Übersicht für Ladesäulen und E-Mobility-Standorte mit Verfügbarkeit und Routenplanung.',
          en: 'Map-based overview of charging stations and e-mobility locations with availability and route planning.',
          tr: 'Şarj istasyonları ve e-mobilite noktaları için müsaitlik ve rota planlamalı harita tabanlı genel görünüm.',
        },
      },
      {
        name: 'Wartezeit-Wächter',
        url: 'https://wamocon.github.io/wartezeit-waechter_lp/',
        description: {
          de: 'Community-basierte Wartezeit-Übersicht für Fachärzte mit Praxis-Kontakt und Bewerbungs-Tracking.',
          en: 'Community-based wait-time overview for medical specialists with practice contact and application tracking.',
          tr: 'Uzman hekimler için topluluk tabanlı bekleme süresi görünümü; muayenehane iletişimi ve başvuru takibiyle.',
        },
      },
      {
        name: 'KitaRadar',
        url: 'https://wamocon.github.io/kitaradar_lp/',
        description: {
          de: 'KI-gestützte Kita-Suche mit Match-Score, Bewerbungs-Schreiben und Bewerbungs-Tracking.',
          en: 'AI-assisted daycare search with match score, application letters and application tracking.',
          tr: 'Eşleşme puanı, başvuru yazıları ve başvuru takibiyle yapay zekâ destekli kreş araması.',
        },
      },
      {
        name: 'Rideproof',
        url: 'https://wamocon.github.io/rideproof_lp/',
        description: {
          de: 'Beweissichere Dokumentation für Carsharing: Fahrzeugdaten, Fotos und Schadensberichte digital erfassen.',
          en: 'Evidence-based documentation for carsharing: capture vehicle data, photos and damage reports digitally.',
          tr: 'Araç paylaşımı için delil niteliğinde belgeleme: araç verilerini, fotoğrafları ve hasar raporlarını dijital olarak kaydedin.',
        },
      },
      {
        name: 'blitzersafe',
        url: 'https://wamocon.github.io/blitzersafe_lp/',
        description: {
          de: 'KI-Assistent für Bußgeldbescheide: Daten extrahieren, Einspruchspotenzial prüfen und Widerspruchs-Schreiben generieren.',
          en: 'AI assistant for traffic-fine notices: extract data, check objection potential and generate appeal letters.',
          tr: 'Trafik cezası tebligatları için yapay zekâ asistanı: verileri çıkarın, itiraz potansiyelini kontrol edin ve itiraz dilekçesi oluşturun.',
        },
      },
      {
        name: 'Geburtstagspilot',
        url: 'https://wamocon.github.io/geburtstagspilot_lp/',
        description: {
          de: 'Planer für Kindergeburtstage: Ablauf, Spiele, Essen, Einkaufsliste, Einladung und Mitgebsel organisieren.',
          en: 'Planner for children\'s birthdays: schedule, games, food, shopping list, invitations and goody bags.',
          tr: 'Çocuk doğum günleri için planlayıcı: program, oyunlar, ikramlar, alışveriş listesi, davetiye ve hediyelik keseleri organize edin.',
        },
      },
    ],
  },
  {
    label: {
      de: 'E-Commerce & Marktplatz',
      en: 'E-Commerce & Marketplace',
      tr: 'E-Ticaret ve Pazar Yeri',
    },
    apps: [
      {
        name: 'LocalForge',
        url: 'https://wamocon.github.io/LocalForge_lp/',
        description: {
          de: 'Browser-basierter Testdaten-Generator für Entwickler: strukturierte Datensätze als CSV, JSON und SQL exportieren.',
          en: 'Browser-based test-data generator for developers: export structured datasets as CSV, JSON and SQL.',
          tr: 'Geliştiriciler için tarayıcı tabanlı test verisi üreteci: yapılandırılmış veri kümelerini CSV, JSON ve SQL olarak dışa aktarın.',
        },
      },
      {
        name: 'regiosync',
        url: 'https://wamocon.github.io/regiosync_lp/',
        description: {
          de: 'Regionaler Marktplatz für lokale Erzeuger, Handwerker und Händler mit interaktiver Karte und direktem Kontakt.',
          en: 'Regional marketplace for local producers, craftsmen and traders with an interactive map and direct contact.',
          tr: 'Yerel üreticiler, ustalar ve esnaf için etkileşimli harita ve doğrudan iletişim sunan bölgesel pazar yeri.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Lifestyle & Kultur',
      en: 'Lifestyle & Culture',
      tr: 'Yaşam Tarzı ve Kültür',
    },
    apps: [
      {
        name: 'TeamRadar',
        url: 'https://wamocon.github.io/TeamRadar_lp/',
        description: {
          de: 'Team-Verfügbarkeits-Dashboard mit Kalender-Sync, Status-Übersicht und Hybrid-Work-Erkennung.',
          en: 'Team availability dashboard with calendar sync, status overview and hybrid-work detection.',
          tr: 'Takvim senkronizasyonu, durum görünümü ve hibrit çalışma tespitiyle ekip müsaitlik panosu.',
        },
      },
      {
        name: 'Daily Echo',
        url: 'https://wamocon.github.io/dailyecho_lp/',
        description: {
          de: 'Dein täglicher Moment der Klarheit mit Reflexionsfragen und Stimmungs-Tracking.',
          en: 'Your daily moment of clarity with reflection questions and mood tracking.',
          tr: 'Yansıtma soruları ve ruh hâli takibiyle günlük berraklık anınız.',
        },
      },
      {
        name: 'KLAR',
        url: 'https://klar-app.vercel.app/de',
        description: {
          de: 'Content-Prüfung mit fünf Modi: Faktencheck, Bias, KI-Erkennung, Plagiat und EU AI Act Compliance.',
          en: 'Content verification with five modes: fact check, bias, AI detection, plagiarism and EU AI Act compliance.',
          tr: 'Beş modlu içerik denetimi: doğruluk kontrolü, yanlılık, yapay zekâ tespiti, intihal ve AB Yapay Zekâ Yasası uyumu.',
        },
      },
      {
        name: 'ARIA',
        url: 'https://aria-ten-kohl.vercel.app/',
        description: {
          de: 'KI-Schreibassistent für Arztpraxen: Arztbriefe, Überweisungen und Befunde aus Stichpunkten oder Diktat generieren.',
          en: 'AI writing assistant for medical practices: generate letters, referrals and findings from bullet points or dictation.',
          tr: 'Muayenehaneler için yapay zekâ yazı asistanı: hekim yazılarını, sevkleri ve raporları maddelerden veya dikteden oluşturun.',
        },
      },
      {
        name: 'Vereinsping',
        // url: 'https://wamocon.github.io/vereinsping_lp/',
        soon: true,
        description: {
          de: 'Zentrale Kommunikationsplattform und Mitgliederverwaltung für Vereine.',
          en: 'Central communication platform and member management for clubs and associations.',
          tr: 'Dernekler için merkezî iletişim platformu ve üye yönetimi.',
        },
      },
      {
        name: 'MeineZielcollage',
        url: 'https://wamocon.github.io/meinezielcollage_lp/',
        description: {
          de: 'Digitale Vision-Board-Plattform zur Visualisierung und Verfolgung persönlicher Ziele.',
          en: 'Digital vision board platform to visualise and track personal goals.',
          tr: 'Kişisel hedefleri görselleştirmek ve takip etmek için dijital vizyon panosu platformu.',
        },
      },
      {
        name: 'Sirin',
        url: 'https://wamocon.github.io/Sirin_lp/',
        description: {
          de: 'Terminbuchungs-Plattform für Dienstleister: Online-Termine, Erinnerungen, Warteliste und eigene Domain.',
          en: 'Appointment-booking platform for service providers: online bookings, reminders, waitlist and custom domain.',
          tr: 'Hizmet sağlayıcılar için randevu platformu: çevrim içi randevular, hatırlatmalar, bekleme listesi ve özel alan adı.',
        },
      },
      {
        name: 'Ahnenecho',
        url: 'https://wamocon.github.io/ahnenecho_lp/',
        description: {
          de: 'Digitale Ahnenforschung und kulturelles Erbe interaktiv erleben.',
          en: 'Digital genealogy and interactive experience of cultural heritage.',
          tr: 'Dijital soy ağacı araştırması ve kültürel mirası etkileşimli olarak deneyimleme.',
        },
      },
      {
        name: 'makeartalanya',
        url: 'https://www.makeartalanya.com/',
        description: {
          de: 'Lokales Kunst- und Kreativstudio in Alanya mit Kursen in Malen, Zeichnen, Schach und Handwerk.',
          en: 'Local art and creative studio in Alanya offering courses in painting, drawing, chess and crafts.',
          tr: 'Alanya’da resim, çizim, satranç ve el sanatları kursları sunan yerel sanat ve yaratıcılık stüdyosu.',
        },
      },
      {
        name: 'cardscan',
        url: 'https://wamocon.github.io/cardscan_lp/',
        description: {
          de: 'Digitale Visitenkarte und Kontaktmanagement für professionelles Netzwerken.',
          en: 'Digital business card and contact management for professional networking.',
          tr: 'Profesyonel ağ kurmak için dijital kartvizit ve kişi yönetimi.',
        },
      },
      {
        name: 'Treffpunkt',
        url: 'https://wamocon.github.io/treffpunkt_lp/',
        description: {
          de: 'Planungs-Tool für private Gruppentreffen: Terminabstimmung, Aufgaben, Budget und Abstimmungen.',
          en: 'Planning tool for private group meetups: date polling, tasks, budget and voting.',
          tr: 'Özel grup buluşmaları için planlama aracı: tarih anketi, görevler, bütçe ve oylamalar.',
        },
      },
      {
        name: 'football-connect',
        url: 'https://wamocon.github.io/footballconnect_lp/',
        description: {
          de: 'Plattform für Amateurfußball: Vereinssuche, Spieler-Bewerbungen, Probetraining und Team-Verwaltung.',
          en: 'Platform for amateur football: club search, player applications, trial training and team management.',
          tr: 'Amatör futbol platformu: kulüp arama, oyuncu başvuruları, deneme antrenmanı ve takım yönetimi.',
        },
      },
      {
        name: 'AppLens',
        url: 'https://wamocon.github.io/AppLens_lp/',
        description: {
          de: 'Internes Monitoring-Dashboard für WAMOCON-Apps: Deployments, Performance, Health-Checks und System-Status.',
          en: 'Internal monitoring dashboard for WAMOCON apps: deployments, performance, health checks and system status.',
          tr: 'WAMOCON uygulamaları için kurum içi izleme panosu: dağıtımlar, performans, sağlık kontrolleri ve sistem durumu.',
        },
      },
      {
        name: 'AllergieScan',
        url: 'https://wamocon.github.io/allergieScan_lp/',
        description: {
          de: 'Smarter Scanner für Lebensmittel zur Erkennung von Allergenen und Unverträglichkeiten.',
          en: 'Smart food scanner to detect allergens and intolerances.',
          tr: 'Alerjenleri ve besin intoleranslarını tespit etmek için akıllı gıda tarayıcı.',
        },
      },
      {
        name: 'AngelSpot',
        url: 'https://angelspot.eu/de',
        description: {
          de: 'Community und Standortermittlung für Angler und Naturfreunde.',
          en: 'Community and location finder for anglers and nature lovers.',
          tr: 'Balıkçılar ve doğaseverler için topluluk ve konum bulucu.',
        },
      },
    ],
  },
];

/** Helper to pick the right language string. */
export const pick = (obj: L, lang: Lang) => obj[lang];
