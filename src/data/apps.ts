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
        name: 'urbackup',
        url: 'https://backuppilot.app/',
        description: {
          de: 'Planung und Verwaltung von Datensicherungen mit automatisierten Backup-Strategien und Statusübersicht.',
          en: 'Planning and management of data backups with automated backup strategies and a status overview.',
        },
      },
      {
        name: 'WMC Anforderungsportal',
        url: 'https://wmc-anforderungsportal.vercel.app/de',
        description: {
          de: 'KI-gestütztes Portal für IT-Beratungen und Teams: Anforderungen strukturiert erfassen, priorisieren und verwalten.',
          en: 'AI-powered portal for IT consultancies and teams: capture, prioritise and manage requirements in a structured way.',
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
          de: 'KI-Assistent für Behördenbriefe und medizinische Befunde: Dokumente hochladen, Fristen tracken und Antwort-PDFs generieren.',
          en: 'AI assistant for official letters and medical findings: upload documents, track deadlines and generate response PDFs.',
        },
      },
      {
        name: 'Bedarfspilot',
        url: 'https://wamocon.github.io/bedarfspilot_lp/',
        description: {
          de: 'Internes Equipment-Management: Mitarbeitende stellen Bedarfe, Admins prüfen und genehmigen Anfragen im Dashboard.',
          en: 'Internal equipment management: employees request work equipment, admins review and approve requests in the dashboard.',
        },
      },
      {
        name: 'belegnest',
        url: 'https://wamocon.github.io/belegbox_lp/' ,
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
        name: 'Momentum Marketing',
        url: 'https://www.momentum-marketing.app/',
        description: {
          de: 'Zentrale Kampagnenverwaltung mit strukturierter Erstellung, Creative-Workflow und kanalbezogenen KPIs.',
          en: 'Central campaign management with structured creation, creative workflow and channel-based KPIs.',
        },
      },
      {
        name: 'WedBudget',
        url: 'https://wamocon.github.io/hochzeitsrechner_lp/',
        description: {
          de: 'Dynamischer Hochzeits-Budgetrechner: Gästezahl und Budget erfassen, Kosten schätzen und als PDF teilen.',
          en: 'Dynamic wedding budget calculator: enter guest count and budget, estimate costs and share as PDF.',
        },
      },
      {
        name: 'SchufaCleaner',
        url: 'https://wamocon.github.io/schufacleaner_lp/',
        description: {
          de: 'Schufa-Datenkopie hochladen, fehlerhafte Einträge erkennen und Widerspruchs-Schreiben per KI generieren.',
          en: 'Upload SCHUFA data copy, detect erroneous entries and generate objection letters with AI.',
        },
      },
      {
        name: 'GrundsteuerPrüfer',
        soon: true,
        description: {
          de: 'Einfache Berechnung und Prüfung der Grundsteuer für Immobilienbesitzer.',
          en: 'Easy calculation and verification of property tax for real estate owners.',
        },
      },
      {
        name: 'GhostAccounts',
        url: 'https://wamocon.github.io/ghostaccounts_lp/',
        description: {
          de: 'E-Mail-Postfach scannen, vergessene Konten finden und mit Lösch-Links oder Assistenten bereinigen.',
          en: 'Scan email inbox, find forgotten accounts and clean them up with deletion links or an assistant.',
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
          de: 'KI-Lernplattform für EU AI Act Compliance und KI-Readiness in Unternehmen.',
          en: 'AI learning platform for EU AI Act compliance and AI readiness in companies.',
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
      {
        name: 'LFA',
        url: 'https://fiae-learn.com/', 
        description: {
          de: 'Lern- und Ausbildungsplattform speziell für Fachinformatiker für Anwendungsentwicklung (FIAE).',
          en: 'Learning and training platform specifically for IT Specialists in Application Development (FIAE).',
        },
      },
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
          de: 'KI-basiertes Skill-Matching zwischen Projektanforderungen und Kandidaten inklusive Interview-Leitfäden.',
          en: 'AI-based skill matching between project requirements and candidates including interview guides.',
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
          de: 'Architekturplaner für Software-Landschaften: Ist-Zustand analysieren, Architektur-Score ermitteln und Umsetzungsplan exportieren.',
          en: 'Architecture planner for software landscapes: analyse current state, determine architecture score and export implementation plan.',
        },
      },
      {
        name: 'Ustafix',
        url: 'https://www.ustafix.app/',
        description: {
          de: 'Mängelmanagement für Baustellen: Defekte erfassen, fotodokumentieren, verfolgen und als PDF-Bericht exportieren.',
          en: 'Defect management for construction sites: capture, photo-document, track defects and export PDF reports.',
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
          de: 'Kleingarten-Platzfinder: Vereine auf der Karte finden, Bewerbungen mit KI generieren und Fortschritte tracken.',
          en: 'Allotment-garden finder: locate clubs on a map, generate applications with AI and track progress.',
        },
      },
      {
        name: 'Auktivo',
        url: 'https://wamocon.github.io/auktivo_lp/',
        description: {
          de: 'KI-Assistent für Zwangsversteigerungen: Gutachten analysieren, Risiken erkennen und Chancen bewerten.',
          en: 'AI assistant for foreclosure auctions: analyse reports, identify risks and evaluate opportunities.',
        },
      },
      {
        name: 'BalkonBonus',
        url: 'https://balkonbonus.eu',
        description: {
          de: 'Fördermittel-Suche und Antragsunterlagen für Balkonkraftwerke in wenigen Minuten erstellen.',
          en: 'Search for subsidies and create application documents for balcony power plants in minutes.',
        },
      },
      {
        name: 'HandwerkerBonus',
        url: 'https://hardwarebonus.eu/',
        description: {
          de: 'Handwerker-Rechnungen hochladen, Steuer-Abzugspotenzial prüfen und ELSTER-Daten exportieren.',
          en: 'Upload craftsman invoices, check tax deduction potential and export ELSTER-ready data.',
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
          de: 'Digitale Zeiterfassung für Teams: Arbeitszeiten, Projekte, Berichte und Freigabe-Workflows.',
          en: 'Digital time tracking for teams: working hours, projects, reports and approval workflows.',
        },
      },
      {
        name: 'CarMan',
        url: 'https://wamocon.github.io/carman_lp/',
        description: {
          de: 'Fahrzeugkosten-Tracker für Privatanwender: Kosten erfassen, Servicetermine planen und Fahrzeughistorie exportieren.',
          en: 'Vehicle cost tracker for private users: log costs, plan service appointments and export vehicle history.',
        },
      },
      {
        name: 'LadeKompass',
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
          de: 'Community-basierte Wartezeit-Übersicht für Fachärzte mit Praxis-Kontakt und Bewerbungs-Tracking.',
          en: 'Community-based wait-time overview for medical specialists with practice contact and application tracking.',
        },
      },
      {
        name: 'KitaRadar',
        url: 'https://wamocon.github.io/kitaradar_lp/',
        description: {
          de: 'KI-gestützte Kita-Suche mit Match-Score, Bewerbungs-Schreiben und Bewerbungs-Tracking.',
          en: 'AI-assisted daycare search with match score, application letters and application tracking.',
        },
      },
      {
        name: 'Rideproof',
        url: 'https://wamocon.github.io/rideproof_lp/',
        description: {
          de: 'Beweissichere Dokumentation für Carsharing: Fahrzeugdaten, Fotos und Schadensberichte digital erfassen.',
          en: 'Evidence-based documentation for carsharing: capture vehicle data, photos and damage reports digitally.',
        },
      },
      {
        name: 'blitzersafe',
        url: 'https://wamocon.github.io/blitzersafe_lp/',
        description: {
          de: 'KI-Assistent für Bußgeldbescheide: Daten extrahieren, Einspruchspotenzial prüfen und Widerspruchs-Schreiben generieren.',
          en: 'AI assistant for traffic-fine notices: extract data, check objection potential and generate appeal letters.',
        },
      },
      {
        name: 'Geburtstagspilot',
        url: 'https://wamocon.github.io/geburtstagspilot_lp/',
        description: {
          de: 'Planer für Kindergeburtstage: Ablauf, Spiele, Essen, Einkaufsliste, Einladung und Mitgebsel organisieren.',
          en: 'Planner for children\'s birthdays: schedule, games, food, shopping list, invitations and goody bags.',
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
          de: 'Browser-basierter Testdaten-Generator für Entwickler: strukturierte Datensätze als CSV, JSON und SQL exportieren.',
          en: 'Browser-based test-data generator for developers: export structured datasets as CSV, JSON and SQL.',
        },
      },
      {
        name: 'regiosync',
        url: 'https://wamocon.github.io/regiosync_lp/',
        description: {
          de: 'Regionaler Marktplatz für lokale Erzeuger, Handwerker und Händler mit interaktiver Karte und direktem Kontakt.',
          en: 'Regional marketplace for local producers, craftsmen and traders with an interactive map and direct contact.',
        },
      },
    ],
  },
  {
    label: { de: 'Lifestyle & Kultur', en: 'Lifestyle & Culture' },
    apps: [
      {
        name: 'TeamRadar',
        url: 'https://wamocon.github.io/TeamRadar_lp/',
        description: {
          de: 'Team-Verfügbarkeits-Dashboard mit Kalender-Sync, Status-Übersicht und Hybrid-Work-Erkennung.',
          en: 'Team availability dashboard with calendar sync, status overview and hybrid-work detection.',
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
          de: 'Content-Prüfung mit fünf Modi: Faktencheck, Bias, KI-Erkennung, Plagiat und EU AI Act Compliance.',
          en: 'Content verification with five modes: fact check, bias, AI detection, plagiarism and EU AI Act compliance.',
        },
      },
      {
        name: 'ARIA',
        url: 'https://aria-ten-kohl.vercel.app/',
        description: {
          de: 'KI-Schreibassistent für Arztpraxen: Arztbriefe, Überweisungen und Befunde aus Stichpunkten oder Diktat generieren.',
          en: 'AI writing assistant for medical practices: generate letters, referrals and findings from bullet points or dictation.',
        },
      },
      {
        name: 'Vereinsping',
        // url: 'https://wamocon.github.io/vereinsping_lp/',
        soon: true,
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
          de: 'Terminbuchungs-Plattform für Dienstleister: Online-Termine, Erinnerungen, Warteliste und eigene Domain.',
          en: 'Appointment-booking platform for service providers: online bookings, reminders, waitlist and custom domain.',
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
          de: 'Lokales Kunst- und Kreativstudio in Alanya mit Kursen in Malen, Zeichnen, Schach und Handwerk.',
          en: 'Local art and creative studio in Alanya offering courses in painting, drawing, chess and crafts.',
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
          de: 'Planungs-Tool für private Gruppentreffen: Terminabstimmung, Aufgaben, Budget und Abstimmungen.',
          en: 'Planning tool for private group meetups: date polling, tasks, budget and voting.',
        },
      },
      {
        name: 'football-connect',
        url: 'https://wamocon.github.io/footballconnect_lp/',
        description: {
          de: 'Plattform für Amateurfußball: Vereinssuche, Spieler-Bewerbungen, Probetraining und Team-Verwaltung.',
          en: 'Platform for amateur football: club search, player applications, trial training and team management.',
        },
      },
      {
        name: 'AppLens',
        url: 'https://wamocon.github.io/AppLens_lp/',
        description: {
          de: 'Internes Monitoring-Dashboard für WAMOCON-Apps: Deployments, Performance, Health-Checks und System-Status.',
          en: 'Internal monitoring dashboard for WAMOCON apps: deployments, performance, health checks and system status.',
        },
      },
      {
        name: 'AllergieScan',
        url: 'https://wamocon.github.io/allergieScan_lp/',
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
