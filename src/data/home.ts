/**
 * Home page text content (German + English).
 * Edit copy here — the page components read from this file.
 */
import type { Lang } from '../i18n/config';

type L = Record<Lang, string>;
type LA = Record<Lang, string[]>;

export interface HomeContent {
  seo: { title: L; description: L };
  hero: {
    title: string;
    tagline: L;
    stats: { value: string; label: L }[];
  };
  goal: {
    heading: L;
    text: L;
    highlightTitle: L;
    highlightText: L;
    signoff: L;
  };
  services: {
    heading: L;
    intro: L;
    items: { title: L; text: L }[];
  };
  showcase: { heading: L; intro: L };
  qa: {
    heading: L;
    text: L;
    listTitle: L;
    list: LA;
    closing: L;
    cta: L;
    youtubeId: string;
  };
  why: {
    heading: L;
    intro: L;
    points: { num: string; text: L }[];
  };
  about: { heading: L; paragraphs: LA };
  benefits: {
    heading: L;
    items: { title: L; text: L }[];
    cta: L;
  };
  projects: {
    heading: L;
    items: { title: L; client: string; popupTitle: L; company: L; project: L }[];
    cta: L;
  };
  clients: { heading: L; list: string[] };
  education: { heading: L; paragraphs: LA; youtubeId: string };
  academy: {
    heading: L;
    pairs: { title: L; text: L }[];
    cta: L;
    ctaUrl: string;
  };
  tour: { heading: L; text: L; cta: L; mapsUrl: string; embedUrl: string };
}

export const home: HomeContent = {
  seo: {
    title: {
      de: 'WAMOCON | IT-Testmanagement & Qualitätsmanagement mit KI',
      en: 'WAMOCON | IT Test Management & Quality Management with AI',
    },
    description: {
      de: 'WAMOCON ist dein Partner für IT-Testmanagement, Testautomatisierung & Qualitätsmanagement: effizient, zertifiziert und KI-gestützt.',
      en: 'WAMOCON is your partner for IT test management, test automation & quality management: efficient, certified and AI-powered.',
    },
  },
  hero: {
    title: 'WAMOCON',
    tagline: {
      de: 'Wo künstliche Intelligenz auf Qualität trifft: Test- und Qualitätsmanagement, das Maßstäbe setzt.',
      en: 'Where artificial intelligence meets quality: test and quality management that sets standards.',
    },
    stats: [
      { value: '100+', label: { de: 'zufriedene Kunden weltweit', en: 'satisfied customers worldwide' } },
      { value: '50+', label: { de: 'erfolgreiche IT-Projekte', en: 'successful IT projects' } },
      { value: '35+', label: { de: 'verlässliche Partnerschaften', en: 'reliable partnerships' } },
      { value: '50+', label: { de: 'neue KI Apps', en: 'new AI apps' } },
    ],
  },
  goal: {
    heading: { de: 'Das Hauptziel von WAMOCON', en: 'The main objective of WAMOCON' },
    text: {
      de: 'In den nächsten drei Jahren zu den Top 10 % der IT-Dienstleister gehören. Wir schätzen es, dass sich unsere Erfolge an diesem ehrgeizigen Ziel messen lassen und sind zuversichtlich, dass wir es erreichen können.',
      en: 'To be among the top 10% of IT service providers within the next three years. We value having our success measured against this ambitious goal and are confident that we can achieve it.',
    },
    highlightTitle: { de: 'Ihr Erfolg ist unser Antrieb.', en: 'Your success is what drives us.' },
    highlightText: {
      de: 'Als zuverlässiger Partner begleiten wir Sie auf dem Weg zur optimalen Projektrealisierung, mit maßgeschneiderten und standardisierten Lösungen, die Ihre Ziele Wirklichkeit werden lassen.',
      en: 'As a reliable partner, we accompany you on the way to optimal project delivery — with tailored and standardised solutions that turn your goals into reality.',
    },
    signoff: { de: 'Waleri Moretz, Visionär und CEO der WAMOCON', en: 'Waleri Moretz, Visionary and CEO of WAMOCON' },
  },
  services: {
    heading: {
      de: 'Umfassende IT-Test- und Qualitätsmanagementlösungen',
      en: 'Comprehensive IT test and quality management solutions',
    },
    intro: {
      de: 'WAMOCON bietet erstklassige Dienstleistungen zur Sicherung der Softwarequalität durch KI-gestützte Ansätze.',
      en: 'WAMOCON offers first-class services to ensure software quality through AI-powered approaches.',
    },
    items: [
      {
        title: { de: 'Entwicklung einer Teststrategie und eines Testdesigns', en: 'Development of a test strategy and test design' },
        text: {
          de: 'WAMOCON entwickelt umfassende Teststrategien und Testdesigns, um ein effektives Testen von Softwareprodukten und -systemen zu gewährleisten. Dies umfasst die Planung und Umsetzung von Tests, die auf die spezifischen Anforderungen der Kunden zugeschnitten sind.',
          en: 'WAMOCON develops comprehensive test strategies and test designs to ensure effective testing of software products and systems. This includes planning and implementing tests tailored to the specific requirements of our clients.',
        },
      },
      {
        title: { de: 'Leistungstests', en: 'Performance testing' },
        text: {
          de: 'Durchführung von Leistungstests zur Bewertung der Anwendungsleistung unter verschiedenen Last- und Stressbedingungen. Ziel ist es, Engpässe zu identifizieren und die Performance zu optimieren.',
          en: 'Performance tests to evaluate application performance under various load and stress conditions. The goal is to identify bottlenecks and optimise performance.',
        },
      },
      {
        title: { de: 'Optimierung der Testverfahren', en: 'Optimisation of test procedures' },
        text: {
          de: 'Analyse und Optimierung von Testprozessen, um die Effizienz und Qualität während des gesamten Testzyklus zu verbessern. Dies beinhaltet die kontinuierliche Überwachung und Anpassung der Testmethoden.',
          en: 'Analysis and optimisation of test processes to improve efficiency and quality throughout the entire test cycle, including continuous monitoring and adjustment of testing methods.',
        },
      },
      {
        title: { de: 'Testautomatisierung', en: 'Test automation' },
        text: {
          de: 'Implementierung von Testautomatisierungslösungen, die die effiziente Ausführung wiederholender Testszenarien ermöglichen und die Testabdeckung erhöhen. Dies reduziert manuelle Testaufwände und verbessert die Genauigkeit.',
          en: 'Implementation of test automation solutions that enable efficient execution of repetitive test scenarios and increase test coverage. This reduces manual testing effort and improves accuracy.',
        },
      },
      {
        title: { de: 'Qualitätsmanagement', en: 'Quality management' },
        text: {
          de: 'Beratung und Unterstützung bei der Implementierung von Qualitätsmanagementprozessen. Dies sichert und verbessert die Qualität von Softwareprodukten und -systemen durch bewährte Methoden und Standards.',
          en: 'Consulting and support in implementing quality management processes. This secures and improves the quality of software products and systems through proven methods and standards.',
        },
      },
      {
        title: { de: 'KI (LLM-as-a-Judge)', en: 'AI (LLM-as-a-Judge)' },
        text: {
          de: 'WAMOCON setzt auf LaaJ – ein skalierbares Produkt und eine Dienstleistung zur automatisierten Bewertung von KI-Systemen. LaaJ bewertet Ausgaben generativer KI konsistent, schnell und nach Ihren Kriterien. So ersetzen Sie teure manuelle Prüfungen, reduzieren KI-Halluzinationen und schaffen vertrauenswürdige, qualitätsgesicherte KI-Anwendungen.',
          en: 'WAMOCON relies on LaaJ — a scalable product and service for the automated evaluation of AI systems. LaaJ assesses generative AI outputs consistently, quickly and according to your criteria. This replaces expensive manual reviews, reduces AI hallucinations and creates trustworthy, quality-assured AI applications.',
        },
      },
    ],
  },
  showcase: {
    heading: {
      de: 'Wir entwickeln <span class="text-accent">Lösungen</span> für jede Problemstellung',
      en: 'We build <span class="text-accent">solutions</span> for every challenge',
    },
    intro: {
      de: 'In aufeinander aufbauenden Entwicklungswellen verwandeln wir konkrete Problemstellungen in digitale Produkte – von Büro-Automatisierung, Marketing und KI-gestützter Analyse über Immobilien, Mobilität und Recht bis hin zu E-Commerce und Lifestyle.',
      en: 'In successive waves of development we turn concrete challenges into digital products — from office automation, marketing and AI-powered analysis, through real estate, mobility and law, to e-commerce and lifestyle.',
    },
  },
  qa: {
    heading: { de: 'Qualitätssicherung durch erfahrene IT-Tester', en: 'Quality assurance by experienced IT testers' },
    text: {
      de: 'Mit WAMOCON müssen Sie sich keine Sorgen um die Qualität Ihrer IT-Tester machen. Unsere sorgfältig ausgewählten Spezialisten verstehen Ihre Anforderungen und liefern maßgeschneiderte Lösungen, die Ihre Projekte sicher und erfolgreich machen – ob für langfristige Festanstellungen oder flexible Projektaufgaben. Vertrauen Sie auf unsere Erfahrung und lassen Sie uns gemeinsam die perfekte Lösung für Ihr Team finden.',
      en: 'With WAMOCON you never have to worry about the quality of your IT testers. Our carefully selected specialists understand your requirements and deliver tailored solutions that make your projects safe and successful — whether for long-term permanent positions or flexible project assignments.',
    },
    listTitle: { de: 'Warum IT-Tester von WAMOCON?', en: 'Why IT testers from WAMOCON?' },
    list: {
      de: [
        'Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen',
        'Flexibilität bei Festanstellungen und Projekten',
        'Zuverlässige Auswahl von Experten, die Ihre Erwartungen übertreffen',
        'Effizienz und Qualität in jedem Projektschritt',
      ],
      en: [
        'Tailored solutions for your specific requirements',
        'Flexibility for permanent positions and projects',
        'Reliable selection of experts who exceed your expectations',
        'Efficiency and quality at every project step',
      ],
    },
    closing: {
      de: 'Vertrauen Sie auf unsere Expertise in der Vermittlung qualifizierter IT-Spezialisten und sichern Sie den Erfolg Ihrer IT-Projekte.',
      en: 'Rely on our expertise in placing qualified IT specialists and secure the success of your IT projects.',
    },
    cta: { de: 'Erfahren Sie mehr', en: 'Learn more' },
    youtubeId: 'zhKZIDVHLgY',
  },
  why: {
    heading: { de: 'Warum WAMOCON?', en: 'Why WAMOCON?' },
    intro: {
      de: '40 Jahre Erfahrung. Leidenschaft für IT-Qualität. Maßgeschneiderte Lösungen und Experten, die Ihre Projekte sicher und erfolgreich machen.',
      en: '40 years of experience. A passion for IT quality. Tailored solutions and experts who make your projects safe and successful.',
    },
    points: [
      {
        num: '01',
        text: {
          de: 'Unsere IT-Experten bleiben durch regelmäßige Fortbildungen im Testmanagement immer auf dem neuesten Stand.',
          en: 'Our IT experts always stay up to date through regular training in test management.',
        },
      },
      {
        num: '02',
        text: {
          de: 'Wir liefern schnelle Ergebnisse, präzise Ausführung und einen praxisnahen Ansatz für Ihren Projekterfolg.',
          en: 'We deliver fast results, precise execution and a practical approach for your project success.',
        },
      },
      {
        num: '03',
        text: {
          de: 'Mit Automatisierung, künstlicher Intelligenz und maschinellem Lernen gestalten wir Ihre Prozesse effizienter und zukunftssicher.',
          en: 'With automation, artificial intelligence and machine learning we make your processes more efficient and future-proof.',
        },
      },
      {
        num: '04',
        text: {
          de: 'Ständige Weiterbildung für Qualität, die Ihre Erwartungen übertrifft und Maßstäbe setzt.',
          en: 'Continuous training for quality that exceeds your expectations and sets standards.',
        },
      },
    ],
  },
  about: {
    heading: { de: 'Über WAMOCON', en: 'About WAMOCON' },
    paragraphs: {
      de: [
        'Unser Unternehmen hat sich seit vielen Jahren auf Softwaretests und Qualitätssicherung sowie auf die Beratung zu Softwaremethoden spezialisiert. Weltbekannte und marktführende Unternehmen verlassen sich tagtäglich auf unsere präzise Arbeit. Wir sind stolz auf unsere Fähigkeit, erstklassigen Service zu bieten, und verpflichten uns, jedem einzelnen Kunden ein hohes Maß an Kompetenz zu vermitteln.',
        'Mit den innovativen Produkten und Dienstleistungen von WAMOCON können Unternehmen nicht nur bestehende Probleme im Prüf- und Qualitätsmanagement lösen, sondern auch zukünftige Herausforderungen antizipieren und so eine nachhaltige Geschäftsentwicklung sicherstellen.',
      ],
      en: [
        'For many years our company has specialised in software testing and quality assurance, as well as consulting on software methods. World-renowned and market-leading companies rely on our precise work every day. We are proud of our ability to provide first-class service and are committed to delivering a high level of competence to every single client.',
        "With WAMOCON's innovative products and services, companies can not only solve existing problems in testing and quality management, but also anticipate future challenges and thus ensure sustainable business development.",
      ],
    },
  },
  benefits: {
    heading: { de: 'Vorteile der Zusammenarbeit', en: 'Benefits of working together' },
    items: [
      {
        title: { de: 'Klare Kommunikation', en: 'Clear communication' },
        text: {
          de: 'Unsere Kunden profitieren von ständiger Transparenz zwischen den Anforderungen und Erwartungen beider Parteien. So werden Unstimmigkeiten vermieden.',
          en: 'Our clients benefit from constant transparency between the requirements and expectations of both parties, avoiding misunderstandings.',
        },
      },
      {
        title: { de: 'Fachwissen', en: 'Expertise' },
        text: {
          de: 'Unsere Kundinnen und Kunden erhalten umfassende Expertise in den Bereichen Testing und Qualitätsmanagement mit qualitativ hochwertigen Dienstleistungen.',
          en: 'Our clients receive comprehensive expertise in testing and quality management with high-quality services.',
        },
      },
      {
        title: { de: 'Partnerschaft', en: 'Partnership' },
        text: {
          de: 'Unsere Kunden gewinnen mit WAMOCON ein Vertrauensverhältnis für eine erfolgreiche Zusammenarbeit.',
          en: 'With WAMOCON, our clients gain a relationship of trust for successful collaboration.',
        },
      },
      {
        title: { de: 'Flexibilität und Anpassungsfähigkeit', en: 'Flexibility and adaptability' },
        text: {
          de: 'Um auf veränderte Anforderungen und Bedürfnisse reagieren zu können, erhalten unsere Kunden absolute Flexibilität.',
          en: 'To respond to changing requirements and needs, our clients receive absolute flexibility.',
        },
      },
      {
        title: { de: 'Bildung und Schulung', en: 'Education and training' },
        text: {
          de: 'Wir teilen unser Wissen und schulen Teams, damit Qualität nachhaltig im Unternehmen verankert wird.',
          en: 'We share our knowledge and train teams so that quality is sustainably anchored in your company.',
        },
      },
      {
        title: { de: 'Verbesserung des Werts', en: 'Increasing value' },
        text: {
          de: 'Durch höhere Effizienz, geringere Kosten oder verbesserte Qualität erhalten unsere Kunden einen Mehrwert.',
          en: 'Through greater efficiency, lower costs or improved quality, our clients gain added value.',
        },
      },
    ],
    cta: { de: 'Mehr zum Unternehmen', en: 'More about the company' },
  },
  projects: {
    heading: { de: 'WAMOCONs IT-Projekte', en: "WAMOCON's IT projects" },
    items: [
      {
        title: { de: 'Einführung SAP BASS-SPAREN System', en: 'Introduction of SAP BASS-SPAREN system' },
        client: 'iBS Innovative Banking Solutions AG',
        popupTitle: {
          de: 'Einführung SAP BASS-SPAREN System – iBS Innovative Banking Solutions AG',
          en: 'Implementation of SAP BASS-SPAREN System – iBS Innovative Banking Solutions AG',
        },
        company: {
          de: 'iBS mit Sitz in Wiesbaden ist ein führendes Unternehmen im Finanzdienstleistungssektor und spezialisiert sich auf innovative Lösungen im Bereich Spar- und Anlageberatung.',
          en: 'iBS, based in Wiesbaden, is a leading company in the financial services sector and specializes in innovative solutions in the area of savings and investment advice.',
        },
        project: {
          de: 'SAP BASS-SPAREN ist eine innovative Anwendung, die es Kunden ermöglicht, ihre Sparziele präzise zu verfolgen und ihre finanzielle Zukunft mit Hilfe fundierter Daten und Analysetools zu planen. Mit modernen Technologien wie Cloud-Lösungen und datengetriebenem Forecasting bietet es eine benutzerfreundliche Plattform für das intuitive Verwalten von Ersparnissen und unterstützt langfristige finanzielle Sicherheit. Mit SAP BASS-SPAREN setzt iBS einen neuen Standard im digitalen Sparen und bietet Nutzern eine effiziente Lösung zur Verwaltung und Planung ihrer Ersparnisse.',
          en: 'SAP BASS-SPAREN is an innovative application that enables customers to precisely track their savings goals and plan their financial future with the help of sound data and analysis tools. Using modern technologies such as cloud solutions and data-driven forecasting, it provides a user-friendly platform that enables intuitive management of savings and supports long-term financial security. With SAP BASS-SPAREN, iBS sets a new standard in digital savings and offers users an efficient solution for managing and planning their savings.',
        },
      },
      {
        title: { de: 'Einführung SAP ERP-System in 50 Ländern', en: 'Introduction of SAP ERP system in 50 countries' },
        client: 'Phoenix Contact GmbH',
        popupTitle: {
          de: 'Einführung SAP ERP-System in 50 Ländern – Phoenix Contact GmbH',
          en: 'Implementation of SAP ERP system in 50 countries – Phoenix Contact GmbH',
        },
        company: {
          de: 'Phoenix Contact ist ein weltweit führender Anbieter von Komponenten, Systemen und Lösungen im Bereich Elektrotechnik, Elektronik und Automatisierung. Das Unternehmen bietet innovative Produkte und Dienstleistungen für industrielle Anwendungen und strebt nach Digitalisierung und Vernetzung von Produktionsprozessen.',
          en: 'Phoenix Contact is a leading global supplier of components, systems and solutions in the field of electrical engineering, electronics and automation. The company offers innovative products and services for industrial applications and strives for the digitalization and networking of production processes.',
        },
        project: {
          de: 'Die Implementierung des SAP ERP-Templates in 50 Ländern zielt darauf ab, globale Geschäftsprozesse zu standardisieren und zu optimieren. Die Einführung des ERP-Systems schafft eine einheitliche und effiziente Grundlage für operative Tätigkeiten und ermöglicht die Harmonisierung und Vereinfachung globaler Prozesse. Diese großangelegte Implementierung unterstützt die digitale Transformation und steigert die Wettbewerbsfähigkeit auf dem internationalen Markt.',
          en: 'The implementation of the SAP ERP template in 50 countries aims to standardize and optimize global business processes. The introduction of the ERP system will create a uniform and efficient basis for operational activities, enabling the harmonization and simplification of global processes. This large-scale implementation supports the digital transformation and increases the company\'s competitiveness on the international market.',
        },
      },
      {
        title: { de: 'Einführung SAP ERP- und CRM-System', en: 'Introduction of SAP ERP and CRM system' },
        client: 'Lekkerland Deutschland GmbH & Co. KG',
        popupTitle: {
          de: 'Einführung SAP ERP-System und CRM-System – Lekkerland Deutschland GmbH & Co. KG',
          en: 'Introduction of SAP ERP system and CRM system – Lekkerland Deutschland GmbH & Co. KG',
        },
        company: {
          de: 'Lekkerland ist ein führendes Großhandelsunternehmen für Alltagskonsumgüter, das sich auf Convenience spezialisiert hat. Das Unternehmen bietet maßgeschneiderte Logistik- und Handelslösungen für Kunden in verschiedenen Branchen, darunter Einzelhandel, Gastronomie und Tankstellen.',
          en: 'Lekkerland is a leading wholesale company for everyday consumer goods, specializing in convenience. The company offers customized logistics and retail solutions for customers in various sectors, including retail, food service and petrol stations.',
        },
        project: {
          de: 'Die Implementierung von SAP ERP und CRM zielt darauf ab, Geschäftsprozesse durch die nahtlose Integration von Logistik, Vertrieb und Kundenmanagement zu optimieren. Dieses Projekt verbessert die Transparenz der Lieferkette und steigert die betriebliche Effizienz durch Prozessautomatisierung und personalisierte CRM-Funktionen. Die Umsetzung dieser technologischen Lösung stärkt Lekkerlands Marktposition als führender Anbieter maßgeschneiderter Logistiklösungen und trägt dazu bei, die Kundenzufriedenheit durch optimierte Serviceprozesse zu erhöhen.',
          en: 'The implementation of SAP ERP and CRM aims to optimize business processes by seamlessly integrating logistics, sales and customer management. This project improves supply chain visibility and increases operational efficiency through process automation and personalized CRM capabilities. The implementation of this technological solution strengthens Lekkerland\'s market position as a leading provider of customized logistics solutions and helps to increase customer satisfaction through optimized service processes.',
        },
      },
    ],
    cta: { de: 'Weitere Details', en: 'More details' },
  },
  clients: {
    heading: { de: 'Wer sind unsere Kunden?', en: 'Who are our clients?' },
    list: [
      '50 Hertz Transmission GmbH', 'Deutsche Bank AG', 'Intel Deutschland GmbH', 'BRUNATA-Metrona GmbH & Co. KG',
      'Deutsche Telekom AG', 'KraussMaffei Technologies GmbH', 'Bundesagentur für Arbeit (BA)', 'DZ Bank AG',
      'Lekkerland Deutschland GmbH & Co. KG', 'Capgemini Deutschland GmbH', 'EnBW Energie Baden-Württemberg AG',
      'Mercedes-Benz Bank AG', 'Daimler AG', 'Hewlett-Packard GmbH', 'Phoenix Contact GmbH & Co. KG',
      'Deutsche Bahn AG', 'iBS Innovative Banking Solutions AG', 'PricewaterhouseCoopers GmbH', 'Quelle GmbH',
      'R+V Allgemeine Versicherung AG', 'Roche Diagnostics GmbH', 'Samsung Electronics GmbH',
      'Telefónica Germany GmbH & Co. OHG', 'VGF GmbH',
    ],
  },
  education: {
    heading: { de: 'IT-Bildungszentrum', en: 'IT education center' },
    paragraphs: {
      de: [
        'Softwaretester sind gefragter denn je, Tendenz steigend. Als offizieller Partner des International Software Testing Qualifications Board (ISTQB®) bietet die WAMOCON Akademie hochwertige Aus- und Weiterbildung im Softwaretesten.',
        'Softwaretester sind gefragter denn je, Tendenz steigend. Als offizieller Partner des International Software Testing Qualifications Board (ISTQB®) bietet die WAMOCON Akademie hochwertige Aus- und Weiterbildung im Softwaretesten.',
      ],
      en: [
        'Software testers are more in demand than ever, and the trend is rising. As an official partner of the International Software Testing Qualifications Board (ISTQB®), the WAMOCON Academy offers high-quality training and further education in software testing.',
        'Participants receive all the resources and knowledge they need for successful certification and an IT career.',
      ],
    },
    youtubeId: 'Q_0mtjo8GAU',
  },
  academy: {
    heading: { de: 'Kontinuierliche Entwicklung im Testmanagement', en: 'Continuous development in test management' },
    pairs: [
      {
        title: { de: 'Deine Weiterentwicklung ist unser Antrieb!', en: 'Your development is our drive!' },
        text: {
          de: 'Ob Einsteiger, Quereinsteiger oder Profi: Mit unseren ISTQB®-Programmen bringen wir deine Testmanagement-Karriere auf das nächste Level.',
          en: 'Whether beginner, career changer or pro: with our ISTQB® programs we take your test management career to the next level.',
        },
      },
      {
        title: { de: 'Praxis, Mentoring, Erfolg, dein Karriere-Turbo!', en: 'Practice, mentoring, success — your career turbo!' },
        text: {
          de: 'Mit unseren Programmen nach internationalen Standards wirst du zur gefragten IT-Fachkraft. Gemeinsam gestalten wir deine Zukunft und die der IT-Branche.',
          en: 'With our programs based on international standards you become a sought-after IT professional. Together we shape your future and that of the IT industry.',
        },
      },
      {
        title: { de: 'Kundenzufriedenheit beginnt bei der Ausbildung.', en: 'Customer satisfaction begins with training.' },
        text: {
          de: 'Wir fördern IT-Talente, damit dein Kundenservice nicht nur Standards erfüllt, sondern übertrifft.',
          en: 'We nurture IT talent so that your customer service not only meets standards but exceeds them.',
        },
      },
    ],
    cta: { de: 'Mehr über die Akademie', en: 'More about the academy' },
    ctaUrl: 'https://test-it-academy.com/',
  },
  tour: {
    heading: { de: '360° Büro Tour', en: '360° Office tour' },
    text: {
      de: 'Erkunden Sie unser Büro virtuell – öffnen Sie die interaktive 360°-Ansicht in Google Maps.',
      en: 'Explore our office virtually — open the interactive 360° view in Google Maps.',
    },
    cta: { de: 'In Google Maps öffnen', en: 'Open in Google Maps' },
    embedUrl:
      'https://www.google.com/maps/embed?pb=!4v1750000000000!6m8!1m7!1sCIABIhCUsuS36guijk8hNPuNid7Y!2m2!1d8.5722177!2d50.1350963!3f0!4f-20!5f0.7820865974627469',
    mapsUrl: 'https://www.google.com/maps/place/WAMOCON+GmbH/@50.1350963,8.5722177,3a,75y,110t/data=!3m8!1e1!3m6!1sCIABIhCUsuS36guijk8hNPuNid7Y!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FABJJf53kp1MsH8AMRfn8_EqozFwBwVnCOZZCeh_2v8RNXd1zPcm7svMcWVQZGFvcDKXvndQDYogSiRJ_YL274LmnuO5F8_vsTdhjXAb4pv_AMmW3ed5mCmB6B3-zhi0LzO7cuUx6DzBga5l-LsoJ%3Dw900-h600-k-no-pi-20-ya348.8465452194214-ro0-fo100!7i11904!8i5952!4m9!3m8!1s0x47bd097e61415ffb:0xa71adb1d3c8614d6!8m2!3d50.1353593!4d8.5721691!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11c4v4n5nw',
  },
};
