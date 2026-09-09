/**
 * AI / software product showcase data for the home page section
 * "Wir entwickeln Lösungen für jede Problemstellung".
 *
 * To add or edit an app: update the relevant category below.
 *  - `soon: true` renders a "coming soon" card with no outbound link.
 *  - `url` is where the card itself leads — normally the landing page, which
 *    explains the product before someone signs up.
 *  - `productUrl` adds a second button that opens the running application.
 *    Only set it where the deployment is actually live; several products are
 *    currently reachable through their landing page alone.
 */
import type { Lang } from '../i18n/config';

type L = Record<Lang, string>;

export interface AppItem {
  name: string;
  url?: string;
  /** Live application behind the landing page, if it is reachable. */
  productUrl?: string;
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
      kk: 'Кеңсе және өнімділік',
    },
    apps: [
      {
        name: 'urbackup',
        url: 'https://backuppilot.app/',
        description: {
          de: 'Planung und Verwaltung von Datensicherungen mit automatisierten Backup-Strategien und Statusübersicht.',
          en: 'Planning and management of data backups with automated backup strategies and a status overview.',
          tr: 'Otomatik yedekleme stratejileri ve durum görünümüyle veri yedeklemelerinin planlanması ve yönetimi.',
          kk: 'Автоматтандырылған сақтық көшірме стратегиялары мен күй шолуы арқылы деректердің сақтық көшірмесін жоспарлау және басқару.',
        },
      },
      {
        name: 'WMC Anforderungsportal',
        url: 'https://wmc-anforderungsportal.vercel.app/de',
        description: {
          de: 'KI-gestütztes Portal für IT-Beratungen und Teams: Anforderungen strukturiert erfassen, priorisieren und verwalten.',
          en: 'AI-powered portal for IT consultancies and teams: capture, prioritise and manage requirements in a structured way.',
          tr: 'BT danışmanlıkları ve ekipler için yapay zekâ destekli portal: gereksinimleri yapılandırılmış biçimde toplayın, önceliklendirin ve yönetin.',
          kk: 'IT кеңесшілері мен командаларға арналған, жасанды интеллект қолдайтын портал: талаптарды жүйелі жинаңыз, басымдық қойыңыз және басқарыңыз.',
        },
      },
      {
        name: 'VerWa (Vertragswächterin)',
        url: 'https://wamocon.github.io/vertragsmanager_lp/',
        description: {
          de: 'Intelligentes Vertrags- und Kündigungsmanagement für Privatpersonen und kleine Unternehmen.',
          en: 'Intelligent contract and cancellation management for individuals and small businesses.',
          tr: 'Bireyler ve küçük işletmeler için akıllı sözleşme ve fesih yönetimi.',
          kk: 'Жеке тұлғалар мен шағын бизнеске арналған ақылды келісімшарт және оны бұзу менеджменті.',
        },
      },
      {
        name: 'backofficeassistent',
        url: 'https://wamocon.github.io/backofficeassistent_lp/',
        description: {
          de: 'KI-Assistent für Behördenbriefe und medizinische Befunde: Dokumente hochladen, Fristen tracken und Antwort-PDFs generieren.',
          en: 'AI assistant for official letters and medical findings: upload documents, track deadlines and generate response PDFs.',
          tr: 'Resmî yazışmalar ve tıbbi raporlar için yapay zekâ asistanı: belgeleri yükleyin, süreleri takip edin ve yanıt PDF’leri oluşturun.',
          kk: 'Мемлекеттік мекеме хаттары мен медициналық қорытындыларға арналған ЖИ көмекшісі: құжатты жүктеңіз, мерзімді қадағалаңыз және жауап PDF файлдарын жасаңыз.',
        },
      },
      {
        name: 'Bedarfspilot',
        url: 'https://wamocon.github.io/bedarfspilot_lp/',
        description: {
          de: 'Internes Equipment-Management: Mitarbeitende stellen Bedarfe, Admins prüfen und genehmigen Anfragen im Dashboard.',
          en: 'Internal equipment management: employees request work equipment, admins review and approve requests in the dashboard.',
          tr: 'Kurum içi ekipman yönetimi: çalışanlar talep oluşturur, yöneticiler talepleri panelde inceleyip onaylar.',
          kk: 'Компания ішіндегі жабдықты басқару: қызметкерлер өтінім береді, әкімшілер оны бақылау тақтасында қарап бекітеді.',
        },
      },
      {
        name: 'belegnest',
        url: 'https://wamocon.github.io/belegbox_lp/' ,
        description: {
          de: 'Digitale Belegverwaltung und Buchhaltungsvorbereitung für effiziente Finanzprozesse.',
          en: 'Digital receipt management and accounting preparation for efficient financial processes.',
          tr: 'Verimli finansal süreçler için dijital fiş yönetimi ve muhasebe hazırlığı.',
          kk: 'Тиімді қаржы үдерісі үшін түбіртектерді цифрлы басқару және бухгалтерияға дайындау.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Marketing, Finanzen & Planung',
      en: 'Marketing, Finance & Planning',
      tr: 'Pazarlama, Finans ve Planlama',
      kk: 'Маркетинг, қаржы және жоспарлау',
    },
    apps: [
      {
        name: 'Momentum Marketing',
        url: 'https://www.momentum-marketing.app/',
        description: {
          de: 'Zentrale Kampagnenverwaltung mit strukturierter Erstellung, Creative-Workflow und kanalbezogenen KPIs.',
          en: 'Central campaign management with structured creation, creative workflow and channel-based KPIs.',
          tr: 'Yapılandırılmış oluşturma, kreatif iş akışı ve kanal bazlı KPI’larla merkezî kampanya yönetimi.',
          kk: 'Науқанды жүйелі құру, креатив ағыны және арна бойынша KPI арқылы орталықтан басқару.',
        },
      },
      {
        name: 'WedBudget',
        url: 'https://wamocon.github.io/hochzeitsrechner_lp/',
        productUrl: 'https://wedbudget.vercel.app',
        description: {
          de: 'Dynamischer Hochzeits-Budgetrechner: Gästezahl und Budget erfassen, Kosten schätzen und als PDF teilen.',
          en: 'Dynamic wedding budget calculator: enter guest count and budget, estimate costs and share as PDF.',
          tr: 'Dinamik düğün bütçe hesaplayıcı: davetli sayısı ve bütçeyi girin, maliyetleri tahmin edin ve PDF olarak paylaşın.',
          kk: 'Динамикалық үйлену тойы бюджетінің калькуляторы: қонақ саны мен бюджетті енгізіңіз, шығынды бағалаңыз және PDF түрінде бөлісіңіз.',
        },
      },
      {
        name: 'SchufaCleaner',
        url: 'https://wamocon.github.io/schufacleaner_lp/',
        description: {
          de: 'Schufa-Datenkopie hochladen, fehlerhafte Einträge erkennen und Widerspruchs-Schreiben per KI generieren.',
          en: 'Upload SCHUFA data copy, detect erroneous entries and generate objection letters with AI.',
          tr: 'SCHUFA veri kopyanızı yükleyin, hatalı kayıtları tespit edin ve yapay zekâ ile itiraz yazıları oluşturun.',
          kk: 'Schufa деректер көшірмесін жүктеңіз, қате жазбаны анықтаңыз және ЖИ арқылы қарсылық хатын дайындаңыз.',
        },
      },
      {
        name: 'GrundsteuerPrüfer',
        // The product runs at baseguard.eu, but the page there is branded
        // "Grundwächter". Until the naming is settled the card points at the
        // landing page, which carries the same name as the card.
        url: 'https://wamocon.github.io/grundsteuerpruefer_lp/',
        description: {
          de: 'Einfache Berechnung und Prüfung der Grundsteuer für Immobilienbesitzer.',
          en: 'Easy calculation and verification of property tax for real estate owners.',
          tr: 'Gayrimenkul sahipleri için emlak vergisinin kolayca hesaplanması ve kontrolü.',
          kk: 'Жылжымайтын мүлік иелеріне арналған жер салығын оңай есептеу және тексеру.',
        },
      },
      {
        name: 'GhostAccounts',
        url: 'https://wamocon.github.io/ghostaccounts_lp/',
        description: {
          de: 'E-Mail-Postfach scannen, vergessene Konten finden und mit Lösch-Links oder Assistenten bereinigen.',
          en: 'Scan email inbox, find forgotten accounts and clean them up with deletion links or an assistant.',
          tr: 'E-posta kutunuzu tarayın, unutulmuş hesapları bulun ve silme bağlantıları veya asistan yardımıyla temizleyin.',
          kk: 'Электрондық пошта жәшігін сканерлеңіз, ұмыт қалған тіркелгіні тауып, жою сілтемесі не көмекші арқылы тазалаңыз.',
        },
      },
      {
        name: 'BuyRight-AI',
        url: 'https://wamocon.github.io/BuyRight-AI_lp/',
        description: {
          de: 'KI-gestützter Shopping-Assistent für smarte Kaufentscheidungen, Preisvergleiche und personalisierte Produktempfehlungen.',
          en: 'AI-powered shopping assistant for smart purchase decisions, price comparisons and personalised recommendations.',
          tr: 'Akıllı satın alma kararları, fiyat karşılaştırmaları ve kişiselleştirilmiş ürün önerileri için yapay zekâ destekli alışveriş asistanı.',
          kk: 'Ақылды сатып алу шешімі, баға салыстыруы және жеке өнім ұсынысы үшін ЖИ қолдайтын шопинг көмекшісі.',
        },
      },
    ],
  },
  {
    label: {
      de: 'KI, Analyse & Wachstum',
      en: 'AI, Analysis & Growth',
      tr: 'Yapay Zekâ, Analiz ve Büyüme',
      kk: 'Жасанды интеллект, талдау және өсу',
    },
    apps: [
      {
        // plan-IT plans software landscapes, not buildings — it belongs with the
        // analysis tools, not under "Immobilien & Handwerk" where it used to sit.
        name: 'Plan-it',
        url: 'https://wamocon.github.io/plan-it_lp/',
        description: {
          de: 'Architekturplaner für Software-Landschaften: Ist-Zustand analysieren, Architektur-Score ermitteln und Umsetzungsplan exportieren.',
          en: 'Architecture planner for software landscapes: analyse current state, determine architecture score and export implementation plan.',
          tr: 'Yazılım mimarileri için planlayıcı: mevcut durumu analiz edin, mimari puanı belirleyin ve uygulama planını dışa aktarın.',
          kk: 'Бағдарлама ландшафтына арналған сәулет жоспарлаушысы: ағымдағы күйді талдаңыз, сәулет ұпайын анықтаңыз және жүзеге асыру жоспарын экспорттаңыз.',
        },
      },
      {
        name: 'DiTeLe',
        url: 'https://ditele-gamma.vercel.app',
        description: {
          de: 'Lernplattform für praktisches Softwaretesten: an laufenden Anwendungen testen, professionelle Fehlerberichte schreiben und Rückmeldung von Trainerinnen und Trainern erhalten.',
          en: 'A learning platform for hands-on software testing: test running applications, write professional defect reports and get feedback from trainers.',
          tr: 'Uygulamalı yazılım testi için öğrenme platformu: çalışan uygulamaları test edin, profesyonel hata raporları yazın ve eğitmenlerden geri bildirim alın.',
          kk: 'Тәжірибелік бағдарлама тестілеуге арналған оқыту платформасы: жұмыс істеп тұрған қосымшаны тестілеңіз, кәсіби ақау есептерін жазыңыз және тренерлерден кері байланыс алыңыз.',
        },
      },
      {
        name: 'KI Manager LMS',
        url: 'https://ki-manager-lms.vercel.app/lp',
        description: {
          de: 'KI-Lernplattform für EU AI Act Compliance und KI-Readiness in Unternehmen.',
          en: 'AI learning platform for EU AI Act compliance and AI readiness in companies.',
          tr: 'Şirketlerde AB Yapay Zekâ Yasası uyumu ve yapay zekâ hazırlığı için öğrenme platformu.',
          kk: 'Компаниялардағы EU AI Act талаптарына сәйкестік және ЖИ дайындығы бойынша ЖИ оқыту платформасы.',
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
          kk: 'Қолданбалы бағдарламалау бағытындағы IT мамандарына (FIAE) арналған оқыту және даярлау платформасы.',
        },
      },
      {
        name: 'KI-Prüfungstrainer',
        url: 'https://wamocon.github.io/KI-Prufungstrainer_lp/',
        description: {
          de: 'KI-gestützter Prüfungstrainer für Berufsausbildung und Zertifizierungen mit adaptiven Lernpfaden und Selbsttests.',
          en: 'AI-powered exam trainer for vocational training and certifications with adaptive learning paths and self-tests.',
          tr: 'Uyarlanabilir öğrenme yolları ve öz değerlendirme testleriyle mesleki eğitim ve sertifikasyonlar için yapay zekâ destekli sınav antrenörü.',
          kk: 'Кәсіби білім мен сертификаттауға арналған, бейімделмелі оқу жолдары мен өзін-өзі тексеруі бар ЖИ емтихан жаттықтырушысы.',
        },
      },
      {
        name: 'ProCon',
        url: 'https://promptcontrol.eu/',
        description: {
          de: 'Verwaltung, Versionierung und Optimierung von KI-Prompts für Teams.',
          en: 'Management, versioning and optimisation of AI prompts for teams.',
          tr: 'Ekipler için yapay zekâ istemlerinin yönetimi, sürümlenmesi ve optimizasyonu.',
          kk: 'Командаларға арналған ЖИ промпттарын басқару, нұсқалау және жетілдіру.',
        },
      },
      {
        name: 'Kompetenzkompass',
        url: 'https://wamocon.github.io/kompetenzkompass_lp/',
        description: {
          de: 'KI-basiertes Skill-Matching zwischen Projektanforderungen und Kandidaten inklusive Interview-Leitfäden.',
          en: 'AI-based skill matching between project requirements and candidates including interview guides.',
          tr: 'Proje gereksinimleri ile adaylar arasında yapay zekâ tabanlı yetkinlik eşleştirmesi ve mülakat kılavuzları.',
          kk: 'Жоба талаптары мен үміткерлер арасындағы ЖИ негізіндегі дағды сәйкестігі, сұхбат нұсқаулықтарымен қоса.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Immobilien & Handwerk',
      en: 'Real Estate & Crafts',
      tr: 'Gayrimenkul ve Zanaat',
      kk: 'Жылжымайтын мүлік және құрылыс',
    },
    apps: [
      {
        name: 'Ustafix',
        url: 'https://www.ustafix.app/',
        description: {
          de: 'Mängelmanagement für Baustellen: Defekte erfassen, fotodokumentieren, verfolgen und als PDF-Bericht exportieren.',
          en: 'Defect management for construction sites: capture, photo-document, track defects and export PDF reports.',
          tr: 'Şantiyeler için eksiklik yönetimi: kusurları kaydedin, fotoğrafla belgeleyin, takip edin ve PDF rapor olarak dışa aktarın.',
          kk: 'Құрылыс алаңындағы ақауларды басқару: кемшілікті тіркеңіз, фотоға түсіріңіз, қадағалаңыз және PDF есеп ретінде экспорттаңыз.',
        },
      },
      {
        name: 'Meine Wohnung',
        url: 'https://wamocon.github.io/meine_wohnung_lp_1/',
        productUrl: 'https://meine-wohnung.vercel.app',
        description: {
          de: 'Digitaler Arbeitsplatz für Gebäude: Wohnungen in 3D erfassen, Material und Ressourcen verfolgen und Etagen gemeinsam durchgehen.',
          en: 'A digital workspace for buildings: capture flats in 3D, track materials and resources, and walk through floors together.',
          tr: 'Binalar için dijital çalışma alanı: daireleri 3B olarak kaydedin, malzeme ve kaynakları takip edin ve katları birlikte gezin.',
          kk: 'Ғимараттарға арналған цифрлық жұмыс орны: пәтерлерді 3D форматта тіркеңіз, материал мен ресурсты қадағалаңыз және қабаттарды бірге аралаңыз.',
        },
      },
      {
        name: 'NebenkostenCheck',
        url: 'https://wamocon.github.io/nebenkostencheck_lp/',
        productUrl: 'https://nebenkostencheck.eu',
        description: {
          de: 'Nebenkostenabrechnung prüfen: Positionen und Umlageschlüssel nachrechnen, Auffälligkeiten dokumentieren und den Widerspruch vorbereiten.',
          en: 'Check your service-charge statement: recalculate items and allocation keys, document irregularities and prepare an objection.',
          tr: 'Yan gider hesabınızı kontrol edin: kalemleri ve dağıtım anahtarlarını yeniden hesaplayın, aykırılıkları belgeleyin ve itirazı hazırlayın.',
          kk: 'Коммуналдық есепті тексеру: баптар мен бөлу коэффициентін қайта есептеңіз, күмәнді тұсын құжаттаңыз және қарсылықты дайындаңыз.',
        },
      },
      {
        name: 'WG-Planer',
        url: 'https://wamocon.github.io/wg-planer_lp/',
        description: {
          de: 'Digitale Verwaltung von Wohngemeinschaften mit Aufgabenverteilung, Einkaufslisten und transparenter Kostenteilung.',
          en: 'Digital management of shared flats with task allocation, shopping lists and transparent cost sharing.',
          tr: 'Görev dağılımı, alışveriş listeleri ve şeffaf masraf paylaşımıyla ev arkadaşlığının dijital yönetimi.',
          kk: 'Тапсырманы бөлу, сатып алу тізімі және шығынды ашық бөлісу арқылы бірге тұратындарды цифрлы басқару.',
        },
      },
      {
        name: 'Parzella',
        // The landing-page repo is private, so GitHub Pages does not serve it.
        // The product itself is live, so the card links straight to it.
        url: 'https://parzella.eu',
        description: {
          de: 'Kleingarten-Platzfinder: Vereine auf der Karte finden, Bewerbungen mit KI generieren und Fortschritte tracken.',
          en: 'Allotment-garden finder: locate clubs on a map, generate applications with AI and track progress.',
          tr: 'Hobi bahçesi bulucu: dernekleri haritada bulun, başvuruları yapay zekâ ile oluşturun ve süreci takip edin.',
          kk: 'Бақша учаскесін іздеу: қоғамдастықты картадан табыңыз, өтінішті ЖИ арқылы жасаңыз және барысын қадағалаңыз.',
        },
      },
      {
        name: 'Auktivo',
        url: 'https://wamocon.github.io/auktivo_lp/',
        description: {
          de: 'KI-Assistent für Zwangsversteigerungen: Gutachten analysieren, Risiken erkennen und Chancen bewerten.',
          en: 'AI assistant for foreclosure auctions: analyse reports, identify risks and evaluate opportunities.',
          tr: 'İcra ihaleleri için yapay zekâ asistanı: bilirkişi raporlarını analiz edin, riskleri tespit edin ve fırsatları değerlendirin.',
          kk: 'Мәжбүрлі аукцион бойынша ЖИ көмекшісі: сараптама қорытындысын талдаңыз, тәуекелді анықтаңыз және мүмкіндікті бағалаңыз.',
        },
      },
      {
        name: 'BalkonBonus',
        // Deployment offline: balkonbonus.eu returns 404 and the landing page is
        // still an unfilled template. Restore the URL once the app is back up.
        soon: true,
        description: {
          de: 'Fördermittel-Suche und Antragsunterlagen für Balkonkraftwerke in wenigen Minuten erstellen.',
          en: 'Search for subsidies and create application documents for balcony power plants in minutes.',
          tr: 'Balkon güneş santralleri için teşvik araması yapın ve başvuru belgelerini dakikalar içinde oluşturun.',
          kk: 'Балкондық күн электр станциясына арналған қаржыландыруды іздеп, өтініш құжаттарын бірнеше минутта дайындаңыз.',
        },
      },
      {
        name: 'HandwerkerBonus',
        url: 'https://hardwarebonus.eu/',
        description: {
          de: 'Handwerker-Rechnungen hochladen, Steuer-Abzugspotenzial prüfen und ELSTER-Daten exportieren.',
          en: 'Upload craftsman invoices, check tax deduction potential and export ELSTER-ready data.',
          tr: 'Usta faturalarını yükleyin, vergi indirimi potansiyelini kontrol edin ve ELSTER’e hazır verileri dışa aktarın.',
          kk: 'Шебер шоттарын жүктеңіз, салықтан шегеру мүмкіндігін тексеріңіз және ELSTER деректерін экспорттаңыз.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Mobilität, Familie & Recht',
      en: 'Mobility, Family & Law',
      tr: 'Mobilite, Aile ve Hukuk',
      kk: 'Мобильділік, отбасы және құқық',
    },
    apps: [
      {
        name: 'AWAY',
        url: 'https://landingpage.aiaway.de/',
        description: {
          de: 'Moderne Urlaubsplanung mit digitalen Anträgen, Kalenderintegration und Teamübersicht.',
          en: 'Modern holiday planning with digital requests, calendar integration and team overview.',
          tr: 'Dijital talepler, takvim entegrasyonu ve ekip görünümüyle modern izin planlaması.',
          kk: 'Цифрлық өтініш, күнтізбемен байланыс және команда шолуы арқылы демалысты заманауи жоспарлау.',
        },
      },
      {
        name: 'TRACE',
        url: 'https://trace-livid-kappa.vercel.app/auth/login',
        description: {
          de: 'Digitale Zeiterfassung für Teams: Arbeitszeiten, Projekte, Berichte und Freigabe-Workflows.',
          en: 'Digital time tracking for teams: working hours, projects, reports and approval workflows.',
          tr: 'Ekipler için dijital zaman takibi: çalışma saatleri, projeler, raporlar ve onay iş akışları.',
          kk: 'Командаларға арналған цифрлық уақыт есебі: жұмыс уақыты, жобалар, есептер және бекіту ағындары.',
        },
      },
      {
        name: 'CarMan',
        url: 'https://wamocon.github.io/carman_lp/',
        description: {
          de: 'Fahrzeugkosten-Tracker für Privatanwender: Kosten erfassen, Servicetermine planen und Fahrzeughistorie exportieren.',
          en: 'Vehicle cost tracker for private users: log costs, plan service appointments and export vehicle history.',
          tr: 'Bireysel kullanıcılar için araç masrafı takibi: giderleri kaydedin, servis randevularını planlayın ve araç geçmişini dışa aktarın.',
          kk: 'Жеке пайдаланушыларға арналған көлік шығыны трекері: шығынды тіркеңіз, техқызмет мерзімін жоспарлаңыз және көлік тарихын экспорттаңыз.',
        },
      },
      {
        name: 'LadeKompass',
        url: 'https://wamocon.github.io/ladeKompass_lp/',
        description: {
          de: 'Kartenbasierte Übersicht für Ladesäulen und E-Mobility-Standorte mit Verfügbarkeit und Routenplanung.',
          en: 'Map-based overview of charging stations and e-mobility locations with availability and route planning.',
          tr: 'Şarj istasyonları ve e-mobilite noktaları için müsaitlik ve rota planlamalı harita tabanlı genel görünüm.',
          kk: 'Қолжетімділік пен маршрут жоспарлауы бар зарядтау станциялары мен электрокөлік нүктелерінің картадағы шолуы.',
        },
      },
      {
        name: 'Wartezeit-Wächter',
        url: 'https://wamocon.github.io/wartezeit-waechter_lp/',
        description: {
          de: 'Community-basierte Wartezeit-Übersicht für Fachärzte mit Praxis-Kontakt und Bewerbungs-Tracking.',
          en: 'Community-based wait-time overview for medical specialists with practice contact and application tracking.',
          tr: 'Uzman hekimler için topluluk tabanlı bekleme süresi görünümü; muayenehane iletişimi ve başvuru takibiyle.',
          kk: 'Дәрігер қабылдауындағы кезек уақытының қоғамдастыққа негізделген шолуы, емхана байланысы және өтінішті қадағалауымен қоса.',
        },
      },
      {
        name: 'KitaRadar',
        url: 'https://wamocon.github.io/kitaradar_lp/',
        description: {
          de: 'KI-gestützte Kita-Suche mit Match-Score, Bewerbungs-Schreiben und Bewerbungs-Tracking.',
          en: 'AI-assisted daycare search with match score, application letters and application tracking.',
          tr: 'Eşleşme puanı, başvuru yazıları ve başvuru takibiyle yapay zekâ destekli kreş araması.',
          kk: 'Сәйкестік ұпайы, өтініш хаты және өтінішті қадағалауы бар, ЖИ қолдайтын балабақша іздеу.',
        },
      },
      {
        name: 'Rideproof',
        url: 'https://wamocon.github.io/rideproof_lp/',
        description: {
          de: 'Beweissichere Dokumentation für Carsharing: Fahrzeugdaten, Fotos und Schadensberichte digital erfassen.',
          en: 'Evidence-based documentation for carsharing: capture vehicle data, photos and damage reports digitally.',
          tr: 'Araç paylaşımı için delil niteliğinde belgeleme: araç verilerini, fotoğrafları ve hasar raporlarını dijital olarak kaydedin.',
          kk: 'Каршерингке арналған дәлелдік құжаттама: көлік деректерін, фотосуретті және зақым туралы есепті цифрлы тіркеңіз.',
        },
      },
      {
        name: 'blitzersafe',
        url: 'https://wamocon.github.io/blitzersafe_lp/',
        productUrl: 'https://blitzersafe.eu',
        description: {
          de: 'KI-Assistent für Bußgeldbescheide: Daten extrahieren, Einspruchspotenzial prüfen und Widerspruchs-Schreiben generieren.',
          en: 'AI assistant for traffic-fine notices: extract data, check objection potential and generate appeal letters.',
          tr: 'Trafik cezası tebligatları için yapay zekâ asistanı: verileri çıkarın, itiraz potansiyelini kontrol edin ve itiraz dilekçesi oluşturun.',
          kk: 'Айыппұл хабарламалары бойынша ЖИ көмекшісі: деректерді шығарыңыз, шағым беру мүмкіндігін тексеріңіз және қарсылық хатын дайындаңыз.',
        },
      },
      {
        name: 'Geburtstagspilot',
        url: 'https://wamocon.github.io/geburtstagspilot_lp/',
        productUrl: 'https://geburtstagspilot.de',
        description: {
          de: 'Planer für Kindergeburtstage: Ablauf, Spiele, Essen, Einkaufsliste, Einladung und Mitgebsel organisieren.',
          en: 'Planner for children\'s birthdays: schedule, games, food, shopping list, invitations and goody bags.',
          tr: 'Çocuk doğum günleri için planlayıcı: program, oyunlar, ikramlar, alışveriş listesi, davetiye ve hediyelik keseleri organize edin.',
          kk: 'Балалар туған күніне арналған жоспарлаушы: бағдарламаны, ойынды, тағамды, сатып алу тізімін, шақыруды және сыйлықты ұйымдастырыңыз.',
        },
      },
    ],
  },
  {
    label: {
      de: 'E-Commerce & Marktplatz',
      en: 'E-Commerce & Marketplace',
      tr: 'E-Ticaret ve Pazar Yeri',
      kk: 'Электрондық сауда және маркетплейс',
    },
    apps: [
      {
        name: 'LocalForge',
        url: 'https://wamocon.github.io/LocalForge_lp/',
        description: {
          de: 'Browser-basierter Testdaten-Generator für Entwickler: strukturierte Datensätze als CSV, JSON und SQL exportieren.',
          en: 'Browser-based test-data generator for developers: export structured datasets as CSV, JSON and SQL.',
          tr: 'Geliştiriciler için tarayıcı tabanlı test verisi üreteci: yapılandırılmış veri kümelerini CSV, JSON ve SQL olarak dışa aktarın.',
          kk: 'Әзірлеушілерге арналған, браузерде жұмыс істейтін тест деректерінің генераторы: жүйелі деректер жиынын CSV, JSON және SQL түрінде экспорттаңыз.',
        },
      },
      {
        name: 'regiosync',
        url: 'https://wamocon.github.io/regiosync_lp/',
        productUrl: 'https://regiosync.eu',
        description: {
          de: 'Regionaler Marktplatz für lokale Erzeuger, Handwerker und Händler mit interaktiver Karte und direktem Kontakt.',
          en: 'Regional marketplace for local producers, craftsmen and traders with an interactive map and direct contact.',
          tr: 'Yerel üreticiler, ustalar ve esnaf için etkileşimli harita ve doğrudan iletişim sunan bölgesel pazar yeri.',
          kk: 'Жергілікті өндірушілер, шеберлер мен саудагерлерге арналған, интерактивті картасы және тікелей байланысы бар аймақтық маркетплейс.',
        },
      },
    ],
  },
  {
    label: {
      de: 'Lifestyle & Kultur',
      en: 'Lifestyle & Culture',
      tr: 'Yaşam Tarzı ve Kültür',
      kk: 'Өмір салты және мәдениет',
    },
    apps: [
      {
        name: 'TeamRadar',
        url: 'https://wamocon.github.io/TeamRadar_lp/',
        description: {
          de: 'Team-Verfügbarkeits-Dashboard mit Kalender-Sync, Status-Übersicht und Hybrid-Work-Erkennung.',
          en: 'Team availability dashboard with calendar sync, status overview and hybrid-work detection.',
          tr: 'Takvim senkronizasyonu, durum görünümü ve hibrit çalışma tespitiyle ekip müsaitlik panosu.',
          kk: 'Күнтізбе синхрондауы, күй шолуы және гибридті жұмысты тануы бар команда қолжетімділігінің бақылау тақтасы.',
        },
      },
      {
        name: 'Daily Echo',
        url: 'https://wamocon.github.io/dailyecho_lp/',
        description: {
          de: 'Ihr täglicher Moment der Klarheit mit Reflexionsfragen und Stimmungs-Tracking.',
          en: 'Your daily moment of clarity with reflection questions and mood tracking.',
          tr: 'Yansıtma soruları ve ruh hâli takibiyle günlük berraklık anınız.',
          kk: 'Рефлексия сұрақтары мен көңіл-күй трекері арқылы күнделікті айқындық сәтіңіз.',
        },
      },
      {
        name: 'KLAR',
        url: 'https://klar-app.vercel.app/de',
        description: {
          de: 'Content-Prüfung mit fünf Modi: Faktencheck, Bias, KI-Erkennung, Plagiat und EU AI Act Compliance.',
          en: 'Content verification with five modes: fact check, bias, AI detection, plagiarism and EU AI Act compliance.',
          tr: 'Beş modlu içerik denetimi: doğruluk kontrolü, yanlılık, yapay zekâ tespiti, intihal ve AB Yapay Zekâ Yasası uyumu.',
          kk: 'Бес режимдегі мазмұн тексерісі: фактіні тексеру, бейтараптық, ЖИ анықтау, плагиат және EU AI Act сәйкестігі.',
        },
      },
      {
        name: 'ARIA',
        // Deployment offline: the Vercel project behind aria-ten-kohl was removed.
        soon: true,
        description: {
          de: 'KI-Schreibassistent für Arztpraxen: Arztbriefe, Überweisungen und Befunde aus Stichpunkten oder Diktat generieren.',
          en: 'AI writing assistant for medical practices: generate letters, referrals and findings from bullet points or dictation.',
          tr: 'Muayenehaneler için yapay zekâ yazı asistanı: hekim yazılarını, sevkleri ve raporları maddelerden veya dikteden oluşturun.',
          kk: 'Емханаларға арналған ЖИ жазу көмекшісі: дәрігер хаттарын, жолдамаларды және қорытындыларды тезистен не диктофон жазбасынан жасаңыз.',
        },
      },
      {
        name: 'Vereinsping',
        url: 'https://wamocon.github.io/vereinsping_lp/',
        description: {
          de: 'Zentrale Kommunikationsplattform und Mitgliederverwaltung für Vereine.',
          en: 'Central communication platform and member management for clubs and associations.',
          tr: 'Dernekler için merkezî iletişim platformu ve üye yönetimi.',
          kk: 'Қоғамдық бірлестіктерге арналған орталық байланыс платформасы және мүшелерді басқару.',
        },
      },
      {
        name: 'MeineZielcollage',
        url: 'https://wamocon.github.io/meinezielcollage_lp/',
        description: {
          de: 'Digitale Vision-Board-Plattform zur Visualisierung und Verfolgung persönlicher Ziele.',
          en: 'Digital vision board platform to visualise and track personal goals.',
          tr: 'Kişisel hedefleri görselleştirmek ve takip etmek için dijital vizyon panosu platformu.',
          kk: 'Жеке мақсатты көрнекілеп, оны қадағалауға арналған цифрлық vision board платформасы.',
        },
      },
      {
        name: 'Sirin',
        url: 'https://wamocon.github.io/Sirin_lp/',
        description: {
          de: 'Terminbuchungs-Plattform für Dienstleister: Online-Termine, Erinnerungen, Warteliste und eigene Domain.',
          en: 'Appointment-booking platform for service providers: online bookings, reminders, waitlist and custom domain.',
          tr: 'Hizmet sağlayıcılar için randevu platformu: çevrim içi randevular, hatırlatmalar, bekleme listesi ve özel alan adı.',
          kk: 'Қызмет көрсетушілерге арналған жазылу платформасы: онлайн жазылу, еске салу, кезек тізімі және өз домені.',
        },
      },
      {
        name: 'Ahnenecho',
        url: 'https://wamocon.github.io/ahnenecho_lp/',
        description: {
          de: 'Digitale Ahnenforschung und kulturelles Erbe interaktiv erleben.',
          en: 'Digital genealogy and interactive experience of cultural heritage.',
          tr: 'Dijital soy ağacı araştırması ve kültürel mirası etkileşimli olarak deneyimleme.',
          kk: 'Шежіре зерттеуі мен мәдени мұраны цифрлы әрі интерактивті түрде сезініңіз.',
        },
      },
      {
        name: 'cardscan',
        url: 'https://wamocon.github.io/cardscan_lp/',
        description: {
          de: 'Digitale Visitenkarte und Kontaktmanagement für professionelles Netzwerken.',
          en: 'Digital business card and contact management for professional networking.',
          tr: 'Profesyonel ağ kurmak için dijital kartvizit ve kişi yönetimi.',
          kk: 'Кәсіби желі құруға арналған цифрлық визит карточкасы және байланысты басқару.',
        },
      },
      {
        name: 'Treffpunkt',
        url: 'https://wamocon.github.io/treffpunkt_lp/',
        description: {
          de: 'Planungs-Tool für private Gruppentreffen: Terminabstimmung, Aufgaben, Budget und Abstimmungen.',
          en: 'Planning tool for private group meetups: date polling, tasks, budget and voting.',
          tr: 'Özel grup buluşmaları için planlama aracı: tarih anketi, görevler, bütçe ve oylamalar.',
          kk: 'Жеке топтық кездесуді жоспарлау құралы: күнді келісу, тапсырма, бюджет және дауыс беру.',
        },
      },
      {
        name: 'football-connect',
        url: 'https://wamocon.github.io/footballconnect_lp/',
        productUrl: 'https://footballconnect.eu',
        description: {
          de: 'Plattform für Amateurfußball: Vereinssuche, Spieler-Bewerbungen, Probetraining und Team-Verwaltung.',
          en: 'Platform for amateur football: club search, player applications, trial training and team management.',
          tr: 'Amatör futbol platformu: kulüp arama, oyuncu başvuruları, deneme antrenmanı ve takım yönetimi.',
          kk: 'Әуесқой футболға арналған платформа: клуб іздеу, ойыншы өтініші, сынақ жаттығуы және команданы басқару.',
        },
      },
      {
        name: 'AppLens',
        url: 'https://wamocon.github.io/AppLens_lp/',
        description: {
          de: 'Internes Monitoring-Dashboard für WAMOCON-Apps: Deployments, Performance, Health-Checks und System-Status.',
          en: 'Internal monitoring dashboard for WAMOCON apps: deployments, performance, health checks and system status.',
          tr: 'WAMOCON uygulamaları için kurum içi izleme panosu: dağıtımlar, performans, sağlık kontrolleri ve sistem durumu.',
          kk: 'WAMOCON қосымшаларына арналған ішкі мониторинг тақтасы: деплой, өнімділік, күй тексерісі және жүйе жағдайы.',
        },
      },
      {
        name: 'AllergieScan',
        url: 'https://wamocon.github.io/allergieScan_lp/',
        description: {
          de: 'Smarter Scanner für Lebensmittel zur Erkennung von Allergenen und Unverträglichkeiten.',
          en: 'Smart food scanner to detect allergens and intolerances.',
          tr: 'Alerjenleri ve besin intoleranslarını tespit etmek için akıllı gıda tarayıcı.',
          kk: 'Аллергенді және көтере алмайтын өнімді анықтауға арналған ақылды азық-түлік сканері.',
        },
      },
      {
        name: 'AngelSpot',
        // Deployment offline: angelspot.eu points at a Vercel project that no
        // longer exists. The repo carries a finished landing page under docs/.
        soon: true,
        description: {
          de: 'Community und Standortermittlung für Angler und Naturfreunde.',
          en: 'Community and location finder for anglers and nature lovers.',
          tr: 'Balıkçılar ve doğaseverler için topluluk ve konum bulucu.',
          kk: 'Балықшылар мен табиғат сүйер қауымға арналған қоғамдастық және орын анықтау.',
        },
      },
    ],
  },
];

/** Helper to pick the right language string. */
export const pick = (obj: L, lang: Lang) => obj[lang];
