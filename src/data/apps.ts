/**
 * AI / software product showcase data for the home page section
 * "Wir entwickeln Lösungen für jede Problemstellung".
 *
 * To add or edit an app: update the relevant category below.
 *  - `soon: true` renders a "coming soon" card with no outbound link.
 */
import type { Lang } from '../i18n/config';

export interface AppItem {
  name: string;
  url?: string;
  soon?: boolean;
  description: { de: string; en: string };
}

export interface AppCategory {
  label: { de: string; en: string };
  apps: AppItem[];
}

export const appCategories: AppCategory[] = [
  {
    label: { de: 'Office & Produktivität', en: 'Office & Productivity' },
    apps: [
      {
        name: 'BackupPilot',
        url: 'http://info.backuppilot.app/',
        description: {
          de: 'Planung und Verwaltung von Datensicherungen mit automatisierten Backup-Strategien und Statusübersicht.',
          en: 'Planning and management of data backups with automated backup strategies and a status overview.',
        },
      },
      {
        name: 'WMC Anforderungsportal',
        url: 'https://wmc-anforderungsportal.vercel.app/de',
        description: {
          de: 'Internes Portal zur strukturierten Erfassung, Priorisierung und Verwaltung von Projekt- und Produktanforderungen.',
          en: 'Internal portal for structured capture, prioritisation and management of project and product requirements.',
        },
      },
      {
        name: 'VerWa (Vertragswächterin)',
        url: 'https://wamocon.github.io/vertragsmanager_lp/',
        description: {
          de: 'Intelligentes Vertrags- und Kündigungsmanagement für Privatpersonen und kleine Unternehmen.',
          en: 'Intelligent contract and cancellation management for individuals and small businesses.',
        },
      },
      {
        name: 'backofficeassistent',
        url: 'https://wamocon.github.io/backofficeassistent_lp/',
        description: {
          de: 'Digitaler Assistent für Büroprozesse: Dokumentenverwaltung, Aufgabenverteilung und Kommunikation im Team.',
          en: 'Digital assistant for office processes: document management, task allocation and team communication.',
        },
      },
      {
        name: 'Bedarfspilot',
        url: 'https://wamocon.github.io/bedarfspilot_lp/',
        description: {
          de: 'Digitale Bedarfsplanung und Beschaffungsmanagement für Unternehmen mit Lieferantenverwaltung und Kostenoptimierung.',
          en: 'Digital demand planning and procurement management for companies, with supplier management and cost optimisation.',
        },
      },
      {
        name: 'belegbox',
        url: 'https://wamocon.  github.io/belegbox_lp/' ,
        description: {
          de: 'Digitale Belegverwaltung und Buchhaltungsvorbereitung für effiziente Finanzprozesse.',
          en: 'Digital receipt management and accounting preparation for efficient financial processes.',
        },            
      },
    ],
  },
  {
    label: { de: 'Marketing, Finanzen & Planung', en: 'Marketing, Finance & Planning' },
    apps: [
      {
        name: 'Marketing Planer',
        url: 'https://wamocon.github.io/momentum_marketing_landingpage/',
        description: {
          de: 'Zentrale Kampagnenverwaltung mit strukturierter Erstellung, Creative-Workflow und kanalbezogenen KPIs.',
          en: 'Central campaign management with structured creation, creative workflow and channel-based KPIs.',
        },
      },
      {
        name: 'WedBudget',
        url: 'https://wamocon.github.io/hochzeitsrechner_lp/',
        description: {
          de: 'Dynamische Hochzeits-Budgetkalkulation nach Region und Gästezahl plus CRM für Dienstleister und Checklisten.',
          en: 'Dynamic wedding budget calculation by region and guest count, plus a CRM for vendors and checklists.',
        },
      },
      {
        name: 'SchufaCleaner',
        url: 'https://wamocon.github.io/schufacleaner_lp/',
        description: {
          de: 'Überprüfung und Optimierung des Schufa-Scores mit konkreten Handlungsempfehlungen und Schritt-für-Schritt-Anleitung.',
          en: 'Review and optimisation of your Schufa score with concrete recommendations and step-by-step guidance.',
        },
      },
      // {
      //   name: 'GrundsteuerPrüfer',
      //   soon: true,
      //   description: {
      //     de: 'Einfache Berechnung und Prüfung der Grundsteuer für Immobilienbesitzer.',
      //     en: 'Easy calculation and verification of property tax for real estate owners.',
      //   },
      // },
      {
        name: 'GhostAccounts',
        url: 'https://wamocon.github.io/ghostaccounts_lp/',
        description: {
          de: 'Verwaltung und Bereinigung veralteter oder inaktiver digitaler Konten zur Reduktion von Angriffsflächen.',
          en: 'Management and clean-up of outdated or inactive digital accounts to reduce attack surfaces.',
        },
      },
      {
        name: 'BuyRight-AI',
        url: 'https://wamocon.github.io/BuyRight-AI_lp/',
        description: {
          de: 'KI-gestützter Shopping-Assistent für smarte Kaufentscheidungen, Preisvergleiche und personalisierte Produktempfehlungen.',
          en: 'AI-powered shopping assistant for smart purchase decisions, price comparisons and personalised recommendations.',
        },
      },
    ],
  },
  {
    label: { de: 'KI, Analyse & Wachstum', en: 'AI, Analysis & Growth' },
    apps: [
      {
        name: 'KI Manager LMS',
        url: 'https://ki-manager-lms.vercel.app/lp',
        description: {
          de: 'KI-gestütztes Lernmanagementsystem für moderne Wissensverteilung, Kursplanung und Fortschrittstracking.',
          en: 'AI-powered learning management system for modern knowledge sharing, course planning and progress tracking.',
        },
      },
      // {
      //   name: 'AI SafeGuard',
      //   url: 'https://wamocon.github.io/AI-SafeGuard_lp/',
      //   description: {
      //     de: 'Middleware zwischen Mitarbeitenden und KI-Modellen mit DLP, Prompt-Filterung, PII-Anonymisierung und Audit-Logs.',
      //     en: 'Middleware between employees and AI models with DLP, prompt filtering, PII anonymisation and audit logs.',
      //   },
      // },
      // {
      //   name: 'MAX AI Stack',
      //   soon: true,
      //   description: {
      //     de: 'Lokale KI-Plattform für den internen Einsatz im LAN ohne Cloud-Abhängigkeit. Datensouveräne Verarbeitung sensibler Unternehmensdaten.',
      //     en: 'Local AI platform for internal LAN use without cloud dependency. Data-sovereign processing of sensitive company data.',
      //   },
      // },
      {
        name: 'KI-Prüfungstrainer',
        url: 'https://wamocon.github.io/KI-Prufungstrainer_lp/',
        description: {
          de: 'KI-gestützter Prüfungstrainer für Berufsausbildung und Zertifizierungen mit adaptiven Lernpfaden und Selbsttests.',
          en: 'AI-powered exam trainer for vocational training and certifications with adaptive learning paths and self-tests.',
        },
      },
      {
        name: 'ProCon',
        url: 'https://promptcontrol.eu/',
        description: {
          de: 'Verwaltung, Versionierung und Optimierung von KI-Prompts für Teams.',
          en: 'Management, versioning and optimisation of AI prompts for teams.',
        },
      },
      {
        name: 'Kompetenzkompass',
        url: 'https://wamocon.github.io/kompetenzkompass_lp/',
        description: {
          de: 'KI-gestütztes Skill-Mapping: Fähigkeiten aus Lebensläufen und Projektlogs extrahieren und intern matchen.',
          en: 'AI-powered skill mapping: extract skills from CVs and project logs and match them internally.',
        },
      },
    ],
  },
  {
    label: { de: 'Immobilien & Handwerk', en: 'Real Estate & Crafts' },
    apps: [
      {
        name: 'Plan-it',
        url: 'https://wamocon.github.io/plan-it_lp/',
        description: {
          de: 'Projektmanagement-Tool für die Bau- und Handwerksbranche zur effizienten Ressourcenplanung.',
          en: 'Project management tool for the construction and crafts industry for efficient resource planning.',
        },
      },
      {
        name: 'Ustafix',
        url: 'https://ustafix-landing-page.vercel.app',
        description: {
          de: 'Handwerker-Vermittlung und Auftragsverwaltung für schnelle, zuverlässige Reparaturen und Installationen.',
          en: 'Craftsman matching and order management for fast, reliable repairs and installations.',
        },
      },
      // {
      //   name: 'Meine Wohnung',
      //   url: 'https://wamocon.github.io/meine_wohnung',
      //   description: {
      //     de: 'Zentrale Plattform zur Verwaltung von Mietobjekten und Mieterkommunikation.',
      //     en: 'Central platform for managing rental properties and tenant communication.',
      //   },
      // },
      {
        name: 'WG-Planer',
        url: 'https://wamocon.github.io/wg-planer_lp/',
        description: {
          de: 'Digitale Verwaltung von Wohngemeinschaften mit Aufgabenverteilung, Einkaufslisten und transparenter Kostenteilung.',
          en: 'Digital management of shared flats with task allocation, shopping lists and transparent cost sharing.',
        },
      },
      {
        name: 'Parzella',
        url: 'https://wamocon.github.io/parzella_lp/',
        description: {
          de: 'Digitale Garten- und Grundstücksverwaltung für Immobilienbesitzer.',
          en: 'Digital garden and property management for real estate owners.',
        },
      },
      {
        name: 'auktivo',
        url: 'https://wamocon.github.io/auktivo_lp/',
        description: {
          de: 'KI-Assistent für Zwangsversteigerungen zur Marktanalyse und Bewertung.',
          en: 'AI assistant for foreclosure auctions for market analysis and valuation.',
        },
      },
      {
        name: 'BalkonBonus',
        url: 'https://balkonbonus.eu',
        description: {
          de: 'Plattform für Fördermittel und Zuschüsse rund um Balkonkraftwerke und energetische Sanierungen.',
          en: 'Platform for subsidies and grants for balcony power plants and energy-efficient renovations.',
        },
      },
      {
        name: 'HandwerkerBonus',
        url: 'https://hardwarebonus.eu/',
        description: {
          de: 'Informationen und Beantragungshilfe für staatliche Handwerker-Boni.',
          en: 'Information and application support for state craftsman bonuses.',
        },
      },
    ],
  },
  {
    label: { de: 'Mobilität, Familie & Recht', en: 'Mobility, Family & Law' },
    apps: [
      {
        name: 'AWAY',
        url: 'https://landingpage.aiaway.de/',
        description: {
          de: 'Moderne Urlaubsplanung mit digitalen Anträgen, Kalenderintegration und Teamübersicht.',
          en: 'Modern holiday planning with digital requests, calendar integration and team overview.',
        },
      },
      {
        name: 'TRACE',
        url: 'https://trace-livid-kappa.vercel.app/auth/login',
        description: {
          de: 'Sicheres Tracking und Dokumentation von Fahrtrouten und Mobilitätsdaten.',
          en: 'Secure tracking and documentation of travel routes and mobility data.',
        },
      },
      {
        name: 'CarMan',
        url: 'https://wamocon.github.io/carman_lp/',
        description: {
          de: 'Digitale Fuhrparkverwaltung und Fahrzeugmanagement für Unternehmen.',
          en: 'Digital fleet and vehicle management for companies.',
        },
      },
      {
        name: 'Wartezeit-Wächter',
        url: 'https://wamocon.github.io/ladeKompass_lp/',
        description: {
          de: 'Kartenbasierte Übersicht für Ladesäulen und E-Mobility-Standorte mit Verfügbarkeit und Routenplanung.',
          en: 'Map-based overview of charging stations and e-mobility locations with availability and route planning.',
        },
      },
      {
        name: 'Wartezeit-Wächter',
        url: 'https://wamocon.github.io/wartezeit-waechter_lp/',
        description: {
          de: 'Echtzeit-Tracking von Wartezeiten in Behörden und Kundenzentren.',
          en: 'Real-time tracking of waiting times at public offices and customer centres.',
        },
      },
      {
        name: 'KitaRadar',
        url: 'https://wamocon.github.io/kitaradar_lp/',
        description: {
          de: 'Standortbasierte Suche nach freien Kita-Plätzen und Betreuungsangeboten in der näheren Umgebung.',
          en: 'Location-based search for available daycare places and childcare offers nearby.',
        },
      },
      {
        name: 'Rideproof',
        url: 'https://wamocon.github.io/rideproof_lp/',
        description: {
          de: 'Digitale Absicherung und Dokumentation für Fahrgemeinschaften und Mobilitätsdienstleister.',
          en: 'Digital protection and documentation for carpools and mobility service providers.',
        },
      },
      {
        name: 'blitzersafe',
        url: 'https://www.blitzersafe.eu/de',
        description: {
          de: 'Warnsystem für Blitzer, Gefahrenstellen und Tempoüberwachung im Straßenverkehr.',
          en: 'Warning system for speed cameras, danger spots and speed monitoring in road traffic.',
        },
      },
      {
        name: 'Geburtstagspilot',
        url: 'https://www.geburtstagspilot.de/de',
        description: {
          de: 'Smarte Geburtstagsverwaltung mit Erinnerungen, Geschenkideen und personalisierter Planung für die ganze Familie.',
          en: 'Smart birthday management with reminders, gift ideas and personalised planning for the whole family.',
        },
      },
    ],
  },
  {
    label: { de: 'E-Commerce & Marktplatz', en: 'E-Commerce & Marketplace' },
    apps: [
      {
        name: 'LocalForge',
        url: 'https://wamocon.github.io/LocalForge_lp/',
        description: {
          de: 'Lokaler Marktplatz und Netzwerk für regionale Produzenten und Händler.',
          en: 'Local marketplace and network for regional producers and traders.',
        },
      },
      {
        name: 'regiosync',
        url: 'https://regiosync.eu',
        description: {
          de: 'Regionale Datensynchronisation und Zusammenarbeit für lokale Unternehmen.',
          en: 'Regional data synchronisation and collaboration for local businesses.',
        },
      },
    ],
  },
  {
    label: { de: 'Lifestyle & Kultur', en: 'Lifestyle & Culture' },
    apps: [
      {
        name: 'TeamRadar',
        url: 'https://curly-couscous-zg4j298.pages.github.io/',
        description: {
          de: 'Kultur- und Stimmungsbarometer für Teams zur Förderung des Zusammenhalts.',
          en: 'Culture and mood barometer for teams to strengthen cohesion.',
        },
      },
      {
        name: 'Daily Echo',
        url: 'https://wamocon.github.io/dailyecho_lp/',
        description: {
          de: 'Dein täglicher Moment der Klarheit mit Reflexionsfragen und Stimmungs-Tracking.',
          en: 'Your daily moment of clarity with reflection questions and mood tracking.',
        },
      },
      {
        name: 'KLAR',
        url: 'https://klar-app.vercel.app/de',
        description: {
          de: 'Content-Verifizierung mit fünf Analyse-Modi: Faktencheck, Bias-Erkennung, KI-Erkennung, Plagiatsprüfung und Qualitätsbewertung.',
          en: 'Content verification with five analysis modes: fact check, bias detection, AI detection, plagiarism check and quality assessment.',
        },
      },
      {
        name: 'ARIA',
        url: 'https://aria-ten-kohl.vercel.app/',
        description: {
          de: 'Medizinischer KI-Assistent für Gesundheitsfragen und Lifestyle-Optimierung.',
          en: 'Medical AI assistant for health questions and lifestyle optimisation.',
        },
      },
      {
        name: 'Vereinsping',
        url: 'https://wamocon.github.io/vereinsping_lp/',
        description: {
          de: 'Zentrale Kommunikationsplattform und Mitgliederverwaltung für Vereine.',
          en: 'Central communication platform and member management for clubs and associations.',
        },
      },
      {
        name: 'MeineZielcollage',
        url: 'https://wamocon.github.io/meinezielcollage_lp/',
        description: {
          de: 'Digitale Vision-Board-Plattform zur Visualisierung und Verfolgung persönlicher Ziele.',
          en: 'Digital vision board platform to visualise and track personal goals.',
        },
      },
      {
        name: 'Sirin',
        url: 'https://wamocon.github.io/Sirin_lp/',
        description: {
          de: 'KI-gestützte Planung und Organisation für den Alltag.',
          en: 'AI-powered planning and organisation for everyday life.',
        },
      },
      {
        name: 'Ahnenecho',
        url: 'https://wamocon.github.io/ahnenecho_lp/',
        description: {
          de: 'Digitale Ahnenforschung und kulturelles Erbe interaktiv erleben.',
          en: 'Digital genealogy and interactive experience of cultural heritage.',
        },
      },
      {
        name: 'makeartalanya',
        url: 'https://www.makeartalanya.com/',
        description: {
          de: 'Plattform für Kunst und Kulturprojekte im Raum Alanya.',
          en: 'Platform for art and cultural projects in the Alanya region.',
        },
      },
      {
        name: 'cardscan',
        url: 'https://wamocon.github.io/cardscan_lp/',
        description: {
          de: 'Digitale Visitenkarte und Kontaktmanagement für professionelles Netzwerken.',
          en: 'Digital business card and contact management for professional networking.',
        },
      },
      {
        name: 'Treffpunkt',
        url: 'https://wamocon.github.io/treffpunkt_lp/',
        description: {
          de: 'Lokale Community-Plattform zur Organisation von Nachbarschafts-Events.',
          en: 'Local community platform for organising neighbourhood events.',
        },
      },
      {
        name: 'football-connect',
        url: 'https://footballconnect.eu',
        description: {
          de: 'Netzwerk und Management-Tool für Fußballvereine, Spieler und Fans.',
          en: 'Network and management tool for football clubs, players and fans.',
        },
      },
      // {
      //   name: 'Applens',
      //   url: 'https://wamocon.github.io/AppLens_lp/',
      //   description: {
      //     de: 'Kulturelle Einblicke und Lifestyle-Empfehlungen auf einen Blick.',
      //     en: 'Cultural insights and lifestyle recommendations at a glance.',
      //   },
      // },
      {
        name: 'AllergieScan',
        url: 'https://www.allergiescan.net/de',
        description: {
          de: 'Smarter Scanner für Lebensmittel zur Erkennung von Allergenen und Unverträglichkeiten.',
          en: 'Smart food scanner to detect allergens and intolerances.',
        },
      },
      {
        name: 'AngelSpot',
        url: 'https://angelspot.eu/de',
        description: {
          de: 'Community und Standortermittlung für Angler und Naturfreunde.',
          en: 'Community and location finder for anglers and nature lovers.',
        },
      },
    ],
  },
];

/** Helper to pick the right language string. */
export const pick = (obj: { de: string; en: string }, lang: Lang) => obj[lang];
