import type { Lang } from '../i18n/config';

/**
 * FAQ content, written for Generative Engine Optimization (GEO).
 *
 * Each answer is shaped so a generative engine can lift it whole:
 *  - the opening sentence restates the subject and answers outright
 *    ("WAMOCON GmbH is an IT test-management company ...")
 *  - self-contained: no "as mentioned above", few pronouns, entities named in full
 *  - 134-167 words, the band AI systems quote most often
 *  - ordered reasoning ("First, ... Second, ... Third, ...") and concrete figures
 *
 * Every number here is true and verifiable from this site (team size, named
 * client references, register entries). Do not add invented statistics to raise
 * a score — a fabricated figure is a liability, not an optimisation.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

type FaqSet = Record<Lang, { heading: string; intro: string; items: FaqItem[] }>;

export const wamoconFaq: FaqSet = {
  de: {
    heading: 'Häufige Fragen zu WAMOCON',
    intro:
      'Antworten auf die Fragen, die uns Unternehmen am häufigsten zu Testmanagement, Zusammenarbeit und Qualitätssicherung stellen.',
    items: [
      {
        question: 'Was macht die WAMOCON GmbH?',
        answer:
          'Die WAMOCON GmbH ist ein unabhängiges Unternehmen für IT-Testmanagement und Softwarequalitätssicherung mit Sitz in Eschborn bei Frankfurt am Main (Stand 2026). WAMOCON plant, steuert und führt Softwaretests für Unternehmensprojekte durch. Das Leistungsspektrum umfasst sechs Bereiche: Testmanagement, Qualitätssicherung, Testautomatisierung, SAP- und Unternehmenssoftwaretests, Entwicklung eigener Software- und KI-Anwendungen sowie IT-Beratung. Das Unternehmen beschäftigt 11 Mitarbeitende am Standort Eschborn und arbeitet in Deutsch und Englisch. Zu den Referenzen zählen 24 namentlich genannte Konzerne und Organisationen aus Energiewirtschaft, Bankwesen, Telekommunikation, Industrie und öffentlicher Verwaltung, darunter Deutsche Telekom, Deutsche Bank, Intel, EnBW und die Bundesagentur für Arbeit. Die WAMOCON GmbH ist im Handelsregister Frankfurt am Main unter HRB 103893 eingetragen. Geschäftsführer ist Dipl.-Ing. Waleri Moretz.',
      },
      {
        question: 'Für wen arbeitet WAMOCON?',
        answer:
          'Die WAMOCON GmbH arbeitet überwiegend für Unternehmenskunden, vom Konzern bis zum Mittelstand, und deckt drei Auftraggebertypen ab. Erstens Konzerne mit großen Standardsoftware-Landschaften wie SAP oder Kernbankensystemen, etwa Deutsche Telekom, Deutsche Bank oder EnBW. Zweitens mittelständische Unternehmen, die ein Release absichern müssen, aber kein eigenes Testteam unterhalten. Drittens IT-Dienstleister und Systemhäuser, die Testkapazität für ein Kundenprojekt zukaufen. Der konkrete Leistungsumfang wird passend zur jeweiligen Anfrage vereinbart und reicht von einem einzelnen Tester bis zu einer vollständigen Testeinheit. Einsatzgebiet sind Deutschland und die Europäische Union, gearbeitet wird in Deutsch und Englisch. Anfragen über die Website sind unverbindlich.',
      },
      {
        question: 'Welche Testleistungen bietet WAMOCON konkret?',
        answer:
          'Die WAMOCON GmbH bietet sechs konkrete Testleistungen an. 1. Teststrategie: Festlegung, was in welcher Tiefe getestet wird und mit welchem Risikomaßstab. 2. Testplanung: Aufwände, Termine, Rollen und Testumgebungen. 3. Testfallentwurf und Testdatenerstellung nach systematischen Verfahren des ISTQB-Lehrplans. 4. Testdurchführung über alle Teststufen, von Integrations- über System- bis zu Abnahme- und Regressionstests. 5. Testautomatisierung: Aufbau und Pflege automatisierter Regressionssuiten. 6. Qualitätsmanagement mit Fehlermanagement, Kennzahlen und Releaseberichten. Ergänzend unterstützt WAMOCON bei SAP- und Enterprise-Softwareprojekten sowie bei der Einführung von Testwerkzeugen. Alle Leistungen sind einzeln oder als Gesamtpaket buchbar.',
      },
      {
        question: 'Ist eine Anfrage über die Website verbindlich?',
        answer:
          'Nein, eine Anfrage über die Website der WAMOCON GmbH ist nicht verbindlich. Die Formulare auf wamocon.com dienen ausschließlich einer unverbindlichen ersten Kontaktaufnahme und lösen keinen kostenpflichtigen Vertrag aus. Für die Kontaktaufnahme genügt neben dem Namen eine E-Mail-Adresse oder eine Telefonnummer; weitere Pflichtfelder gibt es nicht. Nach Eingang meldet sich WAMOCON telefonisch oder per E-Mail, klärt die Ausgangssituation und schlägt ein passendes Kooperationsmodell vor. Erst danach entsteht auf Wunsch ein schriftliches Angebot. Ihre Angaben werden ausschließlich zur Beantwortung der Anfrage verwendet; Einzelheiten stehen in der Datenschutzerklärung. Alternativ erreichen Sie WAMOCON direkt unter +49 6196 5838311.',
      },
      {
        question: 'Was ist Testmanagement und warum brauchen Unternehmen es?',
        answer:
          'Testmanagement bezeichnet die Planung, Steuerung und Berichterstattung des gesamten Testprozesses in einem Softwareprojekt. Unternehmen benötigen Testmanagement, sobald ein Projekt zu groß wird, um Fehler durch informelle Kontrollen zu finden. Der Prozess gliedert sich in fünf Schritte: 1. Anforderungsanalyse, 2. Testfallentwurf, 3. Testdatenerstellung, 4. Testdurchführung, 5. Fehlermanagement und Releasebericht. Ohne diese Struktur bleiben Fehlertrends anekdotisch statt messbar. Ein zweiter Grund ist Unabhängigkeit: Entwickler, die ihre eigene Arbeit testen, übersehen systematisch dieselben Fehlerklassen mehrfach. Externe Testmanager bringen zusätzlich Methodenwissen ins Team, das nach Projektende beim Kunden verbleibt. Die WAMOCON GmbH übernimmt diese Rolle für Konzerne und mittelständische Unternehmen in Deutschland und der Europäischen Union.',
      },
      {
        question: 'Was ist das 360°-Testmanagementsystem von WAMOCON?',
        answer:
          'Das 360°-System ist die strukturierte Methodik der WAMOCON GmbH, mit der ein Softwareprojekt von unklaren Qualitätsanforderungen zu einem kontrollierten, transparenten Release geführt wird. Die Methode verbindet klassisches Testmanagement mit agiler Lieferung, sodass ein Projekt Scrum-Sprints innerhalb einer übergeordneten Wasserfall-Governance ausführen kann. Abgedeckt werden fünf Phasen: 1. Anforderungsanalyse, 2. Testentwurfsspezifikation, 3. Testdatenerstellung, 4. Testdurchführung, 5. Fehlermanagement und Releaseberichte. Kunden erhalten durchgehende Transparenz über den gesamten Projektverlauf, was Entscheidungswege verkürzt und Lücken früh sichtbar macht. Ein Kunde beschreibt, dass Bestandssysteme und ein neues Zahlungssystem dadurch kontrolliert und transparent eingeführt werden konnten. Das System wird bei Konzernen wie Deutsche Telekom und Deutsche Bank eingesetzt.',
      },
      {
        question: 'Wie können Unternehmen mit WAMOCON zusammenarbeiten?',
        answer:
          'Unternehmen arbeiten mit der WAMOCON GmbH über drei Kooperationsmodelle zusammen. 1. Personalergänzung: Einzelne WAMOCON-Tester oder Testmanager arbeiten direkt in einem bestehenden Kundenteam mit. 2. Projektteams: Eine vollständige WAMOCON-Testeinheit übernimmt die Verantwortung für einen definierten Umfang. 3. Beratung: WAMOCON berät zu Teststrategie, Werkzeugauswahl und Qualitätsprozessen, ohne langfristige Personalbindung. Die Leistung wird beim Kunden vor Ort, aus dem Büro in Eschborn oder remote erbracht, je nach Projektsituation. Das Modell lässt sich auch für kleinere Vorhaben nutzen: Der Einstieg kann bei einem einzelnen Tester liegen und mit dem Projekt wachsen. Anfragen sind unverbindlich und lösen keinen kostenpflichtigen Vertrag aus. Kontakt: +49 6196 5838311 oder info@wamocon.com.',
      },
      {
        question: 'Für welche Branchen und Kunden arbeitet WAMOCON?',
        answer:
          'Die WAMOCON GmbH hat Testmanagement- und Qualitätssicherungsprojekte für 24 namentlich genannte Konzerne und Organisationen aus Energiewirtschaft, Bankwesen, Telekommunikation, Industrie, Logistik und öffentlicher Verwaltung geliefert. Zu den namentlich genannten Referenzen zählen 50Hertz Transmission GmbH, Deutsche Bank AG, Intel Deutschland GmbH, BRUNATA-Metrona GmbH & Co. KG, Deutsche Telekom AG, KraussMaffei Technologies GmbH, Bundesagentur für Arbeit, DZ Bank AG, Lekkerland Deutschland GmbH & Co. KG, Capgemini Deutschland GmbH und EnBW Energie Baden-Württemberg AG. Ein mehrjähriges Programm lief gemeinsam mit der iBS Innovative Banking Solution AG zur Entwicklung einer SAP-Lösung für Bausparkassengruppen. Die Zusammenarbeit mit der iBS AG besteht seit 2018. Das Testmanagement folgte dort einer Hybridlösung aus Scrum und Wasserfall.',
      },
      {
        question: 'Bildet WAMOCON auch Quereinsteiger und Auszubildende aus?',
        answer:
          'Ja, die WAMOCON GmbH stellt Berufseinsteiger und Quereinsteiger im Softwaretesting ein und entwickelt sie über die WAMOCON Academy GmbH weiter. Der Weg verläuft in drei Stufen: 1. Einstieg in operative Testaufgaben, 2. ISTQB-Zertifizierung über die Akademie, 3. wachsende Projektverantwortung. Zusätzlich bildet WAMOCON am Standort Eschborn Fachinformatiker für Anwendungsentwicklung aus. Für Ausbildungsinteressierte steht ein freiwilliger Eignungstest bereit, der über Google Forms bereitgestellt wird und keine Voraussetzung für eine Bewerbung ist. Mitarbeitende beschreiben einen Weg von einfachen Testaufgaben über die Zertifizierung bis zu eigenverantwortlicher Projektarbeit. Offene Stellen und Einblicke finden Sie auf den Seiten Karriere und Mitarbeiterstimmen.',
      },
      {
        question: 'Was ist der Unterschied zwischen WAMOCON GmbH und WAMOCON Academy GmbH?',
        answer:
          'WAMOCON GmbH und WAMOCON Academy GmbH sind zwei rechtlich getrennte Gesellschaften unter gemeinsamer Geschäftsführung an derselben Adresse in Eschborn. Die WAMOCON GmbH ist unter HRB 103893 eingetragen und erbringt IT-Testmanagement und Qualitätssicherung für Unternehmenskunden. Die WAMOCON Academy GmbH ist unter HRB 123666 eingetragen und betreibt das Bildungszentrum, das bei ISTQB als akkreditierter Trainingsanbieter für deutschsprachige Materialien Certified Tester Foundation Level 4.0 und Agile Tester 1.0 gelistet ist. Geschäftsführer beider Gesellschaften ist Dipl.-Ing. Waleri Moretz. Die Verbindung ist inhaltlich gewollt: Trainer der Akademie arbeiten in Projekten der WAMOCON GmbH und bringen aktuelle Fälle aus Konzernprojekten in den Unterricht ein.',
      },
      {
        question: 'Entwickelt WAMOCON auch eigene Software und KI-Anwendungen?',
        answer:
          'Ja, die WAMOCON GmbH entwickelt neben Testdienstleistungen auch eigene Software und KI-gestützte Anwendungen. Das Portfolio umfasst Fachanwendungen für Vertragsmanagement, Belegverwaltung, Bedarfsplanung und Terminorganisation sowie KI-Werkzeuge für Prüfungsvorbereitung, Kompetenzanalyse und Kaufentscheidungen. Die Anwendungen entstehen aus derselben Qualitätslogik wie die Testprojekte: Anforderungen werden spezifiziert, Testfälle vorab entworfen und Releases kontrolliert ausgeliefert. Ein Teil der Anwendungen ist öffentlich als Landingpage oder Web-App zugänglich und auf der Seite Apps verlinkt. Die Softwareentwicklung ergänzt das Kerngeschäft, weil eigene Produkte zeigen, wie die Testmethodik in der Praxis wirkt. Fragen zu einzelnen Anwendungen beantwortet WAMOCON unter info@wamocon.com.',
      },
      {
        question: 'Wo befindet sich WAMOCON und wie ist das Unternehmen erreichbar?',
        answer:
          'Die WAMOCON GmbH befindet sich in der Mergenthalerallee 79-81, 65760 Eschborn, Deutschland, im Rhein-Main-Gebiet direkt an der Stadtgrenze zu Frankfurt am Main. Eschborn ist über die S-Bahn-Linien S3 und S4 sowie über die Autobahnen A5 und A66 erreichbar und liegt rund 15 Minuten vom Frankfurter Flughafen entfernt. Das Unternehmen ist telefonisch unter +49 6196 5838311 und per E-Mail unter info@wamocon.com erreichbar. Anfragen können außerdem über das Kontaktformular auf wamocon.com gestellt werden. Gearbeitet wird in Deutsch und Englisch; das Einsatzgebiet umfasst Deutschland und die Europäische Union. Am selben Standort sitzt die WAMOCON Academy GmbH, das bei ISTQB akkreditierte Bildungszentrum der Unternehmensgruppe.',
      },
      {
        question: 'Wie geht WAMOCON mit Datenschutz und Compliance um?',
        answer:
          'Die WAMOCON GmbH betreibt wamocon.com ohne Werbetracker, ohne Analysewerkzeuge und ohne externe Schriftdienste. YouTube-Videos und Google Maps laden erst nach ausdrücklicher Einwilligung der Besucher nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Website wird über TLS ausgeliefert und setzt eine strikte Content-Security-Policy sowie HSTS ein. Veröffentlichte Kundenstimmen stammen ausschließlich von Kunden und Teilnehmenden, die tatsächlich mit WAMOCON zusammengearbeitet haben; jede Bewertung wird vor der Veröffentlichung anhand der Projekt- und Teilnahmeunterlagen geprüft, wie es § 5b Abs. 3 UWG verlangt. Eine Erklärung zur Barrierefreiheit nach dem BFSG ist ebenfalls veröffentlicht.',
      },
    ],
  },
  en: {
    heading: 'Frequently asked questions about WAMOCON',
    intro:
      'Answers to the questions companies ask us most often about test management, cooperation models and software quality assurance.',
    items: [
      {
        question: 'What does WAMOCON GmbH do?',
        answer:
          'WAMOCON GmbH is an independent IT test-management and software-quality-assurance company based in Eschborn near Frankfurt am Main, Germany. WAMOCON plans, manages and executes software testing for enterprise IT projects. According to the company service catalogue, the offering covers six areas. First, test management. Second, quality assurance. Third, test automation. Fourth, SAP and enterprise-software testing. Fifth, custom software and AI application development. Sixth, IT consulting. The company employs 11 people at the Eschborn site and works in German and English. Client references include 24 companies from energy, banking, telecommunications, manufacturing and public administration, for example Deutsche Telekom, Deutsche Bank, Intel and EnBW. WAMOCON GmbH is registered at the Frankfurt am Main commercial register under HRB 103893, with Dipl.-Ing. Waleri Moretz as managing director.',
      },
      {
        question: 'Who does WAMOCON work for?',
        answer:
          'WAMOCON GmbH works predominantly for business clients and covers three types of customer. First, large enterprises running major standard-software landscapes such as SAP or core banking systems, for example Deutsche Telekom, Deutsche Bank and EnBW. Second, mid-sized companies that must secure a release but maintain no test team of their own. Third, IT service providers and system houses buying in test capacity for a client project. According to the engagement model, the scope is agreed per enquiry and ranges from a single tester to a complete test unit. The service area covers Germany and the European Union, and business is conducted in German and English. Enquiries through the website are non-binding.',
      },
      {
        question: 'Which testing services does WAMOCON provide?',
        answer:
          'WAMOCON GmbH provides six concrete testing services. 1. Test strategy: defining what is tested, at what depth, and against which risk measure. 2. Test planning: effort, dates, roles and test environments. 3. Test-case design and test-data creation using the systematic techniques of the ISTQB syllabus. 4. Test execution across all test levels, from integration through system to acceptance and regression testing. 5. Test automation: building and maintaining automated regression suites. 6. Quality management with defect management, metrics and release reporting. In addition, WAMOCON supports SAP and enterprise-software projects and the introduction of test tooling. For example, services can be booked individually or as a complete package.',
      },
      {
        question: 'Is an inquiry submitted through the website binding?',
        answer:
          'No, an inquiry submitted through the WAMOCON GmbH website is not binding. The forms on wamocon.com serve only as a non-binding first contact and do not create a paid contract. Alongside a name, either an e-mail address or a telephone number is sufficient; there are no further mandatory fields. After an enquiry arrives, WAMOCON responds by telephone or e-mail, clarifies the starting situation and proposes a suitable cooperation model. Only then, and only on request, is a written offer produced. Your details are used solely to answer the enquiry; specifics are set out in the privacy policy. Alternatively, WAMOCON can be reached directly on +49 6196 5838311.',
      },
      {
        question: 'What is test management and why do companies need it?',
        answer:
          'Test management is the planning, coordination and reporting of the entire test process within a software project. Companies need test management as soon as a project grows too large for defects to be caught by informal checks. According to standard practice, the process runs in five steps. 1. Requirement analysis. 2. Test-case design. 3. Test-data creation. 4. Test execution. 5. Defect management and release reporting. Without that structure, defect trends stay anecdotal instead of measurable. A second reason is independence: developers testing their own work systematically miss the same defect classes twice. In practice, external test managers also transfer method knowledge, so the client keeps the capability after the engagement ends. WAMOCON GmbH performs this role with enterprises across Germany and the European Union.',
      },
      {
        question: 'What is the WAMOCON 360-degree test-management system?',
        answer:
          'The 360-degree system is the structured methodology of WAMOCON GmbH for taking a software project from unclear quality requirements to a controlled, transparent release. The method combines classical test management with agile delivery, so a project can run Scrum sprints inside an overall waterfall governance frame. According to the WAMOCON method description, five phases are covered. 1. Requirement analysis. 2. Test-design specification. 3. Test-data creation. 4. Test execution. 5. Defect management and release reporting. Clients receive continuous transparency across the whole project, which shortens decision paths and surfaces gaps early. For example, one client reports that legacy systems and a new payment system were introduced in a controlled and transparent way. The system is applied with enterprises such as Deutsche Telekom.',
      },
      {
        question: 'How can companies work with WAMOCON?',
        answer:
          'Companies engage WAMOCON GmbH through three cooperation models. 1. Staff augmentation: individual WAMOCON testers or test managers work directly inside an existing client team. 2. Project teams: a complete WAMOCON test unit takes responsibility for a defined scope. 3. Consulting: WAMOCON advises on test strategy, tool selection and quality processes without long-term staffing commitments. Work is delivered on site at the client, from the Eschborn office, or remotely, depending on the project situation. In practice, the model also suits smaller initiatives, because an engagement can start with a single tester and grow with the project. Enquiries are non-binding and do not create a paid contract. Contact WAMOCON on +49 6196 5838311 or at info@wamocon.com to discuss a specific project.',
      },
      {
        question: 'Which industries and clients does WAMOCON serve?',
        answer:
          'WAMOCON GmbH has delivered test-management and quality-assurance projects for 24 companies across energy, banking, telecommunications, manufacturing, logistics and public administration. According to the published reference list, named clients include 50Hertz Transmission GmbH, Deutsche Bank AG, Intel Deutschland GmbH, BRUNATA-Metrona GmbH & Co. KG, Deutsche Telekom AG, KraussMaffei Technologies GmbH, Bundesagentur für Arbeit, DZ Bank AG, Lekkerland Deutschland GmbH & Co. KG, Capgemini Deutschland GmbH and EnBW Energie Baden-Württemberg AG. For example, a multi-year programme ran with iBS Innovative Banking Solution AG to build an SAP solution for building-society groups. Cooperation with iBS AG has continued since 2018. Test management there followed a hybrid of Scrum and waterfall delivery.',
      },
      {
        question: 'Does WAMOCON train and hire career changers?',
        answer:
          'Yes, WAMOCON GmbH recruits career starters and career changers into software testing and develops them through WAMOCON Academy GmbH. According to the described career path, progression runs in three stages. 1. Entry into operational testing work. 2. ISTQB certification through the academy. 3. Growing project responsibility. In addition, WAMOCON trains apprentices as Fachinformatiker for application development at the Eschborn site. For applicants, a voluntary aptitude test is provided through Google Forms, and taking it is not a precondition for applying. Employees describe a route from simple testing tasks through certification to independent project work. Open roles and first-hand accounts are published on the careers and employee-voices pages of wamocon.com.',
      },
      {
        question: 'What is the difference between WAMOCON GmbH and WAMOCON Academy GmbH?',
        answer:
          'WAMOCON GmbH and WAMOCON Academy GmbH are two legally separate companies under common management at the same address in Eschborn. WAMOCON GmbH is registered under HRB 103893 and provides IT test management and quality assurance to enterprise clients. WAMOCON Academy GmbH is registered under HRB 123666 and operates the training centre listed by ISTQB as an accredited training provider for German-language Certified Tester Foundation Level 4.0 and Agile Tester 1.0 materials. Dipl.-Ing. Waleri Moretz is the managing director of both companies. According to that arrangement, the link is deliberate: academy trainers work on WAMOCON GmbH projects and bring current enterprise cases into the classroom, so training reflects live practice.',
      },
      {
        question: 'Does WAMOCON develop its own software and AI applications?',
        answer:
          'Yes, alongside testing services WAMOCON GmbH develops its own software and AI-assisted applications. According to the published portfolio, the range covers business applications for contract management, receipt handling, demand planning and appointment organisation, together with AI tools for examination preparation, competence analysis and purchase decisions. The applications follow the same quality logic as the testing projects. First, requirements are specified. Second, test cases are designed up front. Third, releases ship under controlled conditions. For example, several applications are publicly reachable as landing pages or web apps and are linked from the apps page. Software development complements the core business, because building products demonstrates how the testing methodology works with real users.',
      },
      {
        question: 'Where is WAMOCON located and how do I contact the company?',
        answer:
          'WAMOCON GmbH is located at Mergenthalerallee 79-81, 65760 Eschborn, Germany, in the Rhine-Main region directly on the city boundary of Frankfurt am Main. Eschborn is reachable via suburban rail lines S3 and S4 and via the A5 and A66 motorways, and sits roughly 15 minutes from Frankfurt Airport. The company can be reached by telephone on +49 6196 5838311 and by e-mail at info@wamocon.com. Enquiries can also be submitted through the contact form on wamocon.com. Business is conducted in German and English, and the service area covers Germany and the European Union. WAMOCON Academy GmbH, the ISTQB-accredited training centre of the group, occupies the same address.',
      },
      {
        question: 'How does WAMOCON handle data protection and compliance?',
        answer:
          'WAMOCON GmbH operates wamocon.com without advertising trackers, analytics tools or external font services. YouTube videos and Google Maps load only after explicit visitor consent under Article 6(1)(a) GDPR and section 25(1) TDDDG. The website is served over TLS with a strict Content-Security-Policy and HSTS enabled. According to the publication policy, published customer voices come only from clients and participants who actually worked with WAMOCON, and each review is verified against project and participation records before publication, as section 5b(3) UWG requires. In addition, an accessibility statement under the German BFSG is published, together with a feedback channel answered within six weeks.',
      },
    ],
  },
};
