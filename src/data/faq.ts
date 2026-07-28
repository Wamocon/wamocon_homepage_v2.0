import type { Lang } from '../i18n/config';

/**
 * FAQ content. Answers are kept short, human and varied in their openings
 * (no answer starts the same way twice), using ISTQB vocabulary. Only proper
 * German typography is used — no spaced "bot" dashes (Gedankenstriche).
 * Every figure is true and verifiable from this site.
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
          'Wir planen, steuern und führen Softwaretests für Unternehmensprojekte durch, unabhängig, aus Eschborn bei Frankfurt. Sechs Bereiche: Testmanagement, Qualitätssicherung, Testautomatisierung, KI-gestützte Qualitätssicherung (LLM-as-a-Judge), SAP-Testprojekte und IT-Beratung. Zu unseren Referenzen zählen unter anderem Deutsche Telekom, Deutsche Bank, Intel und EnBW.',
      },
      {
        question: 'Für wen arbeitet WAMOCON?',
        answer:
          'Vom Konzern bis zum Mittelstand. Drei typische Auftraggeber: Konzerne mit großen SAP- oder Kernbankensystemen, mittelständische Unternehmen, die ein Release absichern wollen, und IT-Dienstleister, die Testkapazität zukaufen. Der Umfang reicht vom einzelnen Tester bis zur kompletten Testeinheit, in Deutschland und der EU, auf Deutsch und Englisch.',
      },
      {
        question: 'Welche Testleistungen bietet WAMOCON konkret?',
        answer:
          'Sechs, einzeln oder als Paket: Teststrategie, Testplanung, Testfall- und Testdatenentwurf nach ISTQB-Verfahren, Testdurchführung über alle Teststufen (Integration, System, Abnahme, Regression), Testautomatisierung und KI-Testing, die Bewertung generativer KI mit LLM-as-a-Judge. Ergänzend Qualitätsmanagement mit Fehlermanagement und Releaseberichten.',
      },
      {
        question: 'Ist eine Anfrage über die Website verbindlich?',
        answer:
          'Nein. Die Formulare sind eine unverbindliche Kontaktaufnahme, kein Vertrag. Name plus E-Mail oder Telefon genügen. Wir melden uns, klären die Ausgangslage und schlagen ein passendes Modell vor; ein schriftliches Angebot entsteht erst danach. Direkt erreichbar unter +49 6196 5838311.',
      },
      {
        question: 'Was ist Testmanagement und warum brauchen Unternehmen es?',
        answer:
          'Testmanagement ist die Planung, Steuerung und Berichterstattung des gesamten Testprozesses. Sobald ein Projekt zu groß für informelle Kontrollen wird, macht es Fehlertrends messbar statt anekdotisch. Ein zweiter Grund ist Unabhängigkeit: Wer die eigene Software testet, übersieht dieselben Fehlerklassen. Externe Testmanager bringen zudem Methodenwissen, das nach Projektende beim Kunden bleibt.',
      },
      {
        question: 'Was ist das 360°-System von WAMOCON?',
        answer:
          'Unsere Methodik, die ein Projekt von unklaren Qualitätsanforderungen zu einem kontrollierten, transparenten Release führt. Sie verbindet klassisches Testmanagement mit agiler Lieferung, Scrum-Sprints innerhalb einer Wasserfall-Governance, über fünf Phasen von der Anforderungsanalyse bis zum Releasebericht. Der Nutzen: durchgehende Transparenz und früh sichtbare Lücken.',
      },
      {
        question: 'Wie können Unternehmen mit WAMOCON zusammenarbeiten?',
        answer:
          'Über drei Modelle: Personalergänzung (einzelne Tester oder Testmanager im Kundenteam), Projektteams (eine komplette Testeinheit übernimmt einen definierten Umfang) und Beratung (Teststrategie, Werkzeugauswahl, Qualitätsprozesse). Die Leistung erfolgt vor Ort, aus Eschborn oder remote. Der Einstieg kann bei einem einzelnen Tester liegen und mit dem Projekt wachsen.',
      },
      {
        question: 'Für welche Branchen und Kunden arbeitet WAMOCON?',
        answer:
          'Energie, Banken, Telekommunikation, Industrie, Logistik und öffentliche Verwaltung, mit 24 namentlich genannten Referenzen, darunter 50Hertz, Deutsche Bank, Deutsche Telekom, EnBW und die Bundesagentur für Arbeit. Mit der iBS AG läuft seit 2018 ein SAP-Programm für Bausparkassen, im Testmanagement hybrid aus Scrum und Wasserfall.',
      },
      {
        question: 'Bildet WAMOCON auch Quereinsteiger und Auszubildende aus?',
        answer:
          'Ja. Berufs- und Quereinsteiger steigen in operative Testaufgaben ein, zertifizieren sich über die WAMOCON Academy nach ISTQB und übernehmen wachsende Projektverantwortung. Zusätzlich bilden wir in Eschborn Fachinformatiker für Anwendungsentwicklung aus. Offene Stellen und Einblicke finden Sie auf den Seiten Karriere und Mitarbeiterstimmen.',
      },
      {
        question: 'Was ist der Unterschied zwischen WAMOCON GmbH und WAMOCON Academy GmbH?',
        answer:
          'Zwei rechtlich getrennte Gesellschaften unter gemeinsamer Geschäftsführung an derselben Adresse in Eschborn. Die WAMOCON GmbH erbringt Testmanagement und Qualitätssicherung, die WAMOCON Academy GmbH betreibt das Schulungszentrum, das bei ISTQB als akkreditierter Trainingsanbieter gelistet ist. Die Verbindung ist gewollt: Trainer unterrichten aus laufenden Projekten.',
      },
      {
        question: 'Entwickelt WAMOCON auch eigene Software und KI-Anwendungen?',
        answer:
          'Ja, neben den Testdienstleistungen. Dazu zählen Fachanwendungen für Vertrags-, Beleg- und Bedarfsmanagement sowie KI-Werkzeuge für Prüfungsvorbereitung und Kompetenzanalyse. Sie entstehen nach derselben Qualitätslogik wie unsere Testprojekte; ein Teil ist öffentlich auf der Seite Apps verlinkt.',
      },
      {
        question: 'Wo befindet sich WAMOCON und wie ist das Unternehmen erreichbar?',
        answer:
          'In der Mergenthalerallee 79–81, 65760 Eschborn, direkt an der Stadtgrenze zu Frankfurt am Main. Erreichbar telefonisch unter +49 6196 5838311, per E-Mail unter info@wamocon.com oder über die Kontaktabschnitte auf der Website. Am selben Standort sitzt die WAMOCON Academy GmbH, das bei ISTQB akkreditierte Bildungszentrum der Gruppe.',
      },
      {
        question: 'Wie geht WAMOCON mit Datenschutz und Compliance um?',
        answer:
          'Nach DSGVO. Über die Website erhobene Daten nutzen wir ausschließlich zur Beantwortung Ihrer Anfrage; Einzelheiten stehen in der Datenschutzerklärung. Externe Medien wie YouTube oder Google Maps laden erst nach Ihrer Einwilligung über den Cookie-Banner. Veröffentlichte Kundenstimmen prüfen wir vor der Veröffentlichung anhand der Projektunterlagen.',
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
          'We plan, manage and run software tests for enterprise projects, independently, from Eschborn near Frankfurt. Six areas: test management, quality assurance, test automation, AI-supported quality assurance (LLM-as-a-Judge), SAP test projects and IT consulting. Our references include Deutsche Telekom, Deutsche Bank, Intel and EnBW.',
      },
      {
        question: 'Who does WAMOCON work for?',
        answer:
          'From large corporations to mid-sized companies. Three typical clients: corporations with large SAP or core-banking systems, mid-sized companies that want to secure a release, and IT service providers buying in test capacity. The scope ranges from a single tester to a complete test unit, in Germany and the EU, in German and English.',
      },
      {
        question: 'Which testing services does WAMOCON provide?',
        answer:
          'Six, individually or as a package: test strategy, test planning, test case and test data design using ISTQB methods, test execution across all test levels (integration, system, acceptance, regression), test automation and AI testing, the evaluation of generative AI with LLM-as-a-Judge. Plus quality management with defect management and release reports.',
      },
      {
        question: 'Is an inquiry submitted through the website binding?',
        answer:
          'No. The forms are a non-binding way to get in touch, not a contract. Your name plus an email address or phone number is enough. We get back to you, clarify the situation and propose a suitable model; a written offer follows only after that. Reach us directly at +49 6196 5838311.',
      },
      {
        question: 'What is test management and why do companies need it?',
        answer:
          'Test management is the planning, control and reporting of the entire test process. As soon as a project is too large for informal checks, it makes defect trends measurable instead of anecdotal. A second reason is independence: those who test their own software overlook the same classes of defects. External test managers also bring method knowledge that stays with the client after the project ends.',
      },
      {
        question: 'What is the WAMOCON 360-degree test-management system?',
        answer:
          'Our methodology that guides a project from unclear quality requirements to a controlled, transparent release. It combines classic test management with agile delivery, Scrum sprints within a waterfall governance, across five phases from requirements analysis to the release report. The benefit: end-to-end transparency and gaps that become visible early.',
      },
      {
        question: 'How can companies work with WAMOCON?',
        answer:
          'Through three models: staff augmentation (individual testers or test managers within the client team), project teams (a complete test unit takes on a defined scope) and consulting (test strategy, tool selection, quality processes). The work is delivered on site, from Eschborn or remotely. You can start with a single tester and scale with the project.',
      },
      {
        question: 'Which industries and clients does WAMOCON serve?',
        answer:
          'Energy, banking, telecommunications, industry, logistics and public administration, with 24 named references including 50Hertz, Deutsche Bank, Deutsche Telekom, EnBW and the Federal Employment Agency. With iBS AG, an SAP programme for building societies has run since 2018, with test management hybrid between Scrum and waterfall.',
      },
      {
        question: 'Does WAMOCON train and hire career changers?',
        answer:
          'Yes. Career starters and career changers begin with operational testing tasks, get ISTQB-certified through WAMOCON Academy and take on growing project responsibility. In addition, we train IT specialists for application development in Eschborn. You will find open positions and insights on the Career and Employee Voices pages.',
      },
      {
        question: 'What is the difference between WAMOCON GmbH and WAMOCON Academy GmbH?',
        answer:
          'Two legally separate companies under joint management at the same address in Eschborn. WAMOCON GmbH provides test management and quality assurance; WAMOCON Academy GmbH runs the training centre, which is listed by ISTQB as an accredited training provider. The link is intentional: trainers teach from live projects.',
      },
      {
        question: 'Does WAMOCON develop its own software and AI applications?',
        answer:
          'Yes, alongside the testing services. These include business applications for contract, document and demand management as well as AI tools for exam preparation and skills analysis. They are built with the same quality logic as our test projects; some are publicly linked on the Apps page.',
      },
      {
        question: 'Where is WAMOCON located and how do I contact the company?',
        answer:
          'At Mergenthalerallee 79–81, 65760 Eschborn, right on the city boundary of Frankfurt am Main. Reachable by phone at +49 6196 5838311, by email at info@wamocon.com or through the contact sections on the website. WAMOCON Academy GmbH, the group’s ISTQB-accredited training centre, is at the same address.',
      },
      {
        question: 'How does WAMOCON handle data protection and compliance?',
        answer:
          'In line with the GDPR. Data collected via the website is used solely to answer your enquiry; details are in the privacy policy. External media such as YouTube or Google Maps load only after your consent through the cookie banner. Published customer reviews are checked against the project records before publication.',
      },
    ],
  },
  tr: {
    heading: 'WAMOCON hakkında sıkça sorulan sorular',
    intro:
      'Şirketlerin bize test yönetimi, iş birliği modelleri ve yazılım kalite güvencesi konusunda en sık sorduğu soruların yanıtları.',
    items: [
      {
        question: 'WAMOCON GmbH ne yapar?',
        answer:
          'Kurumsal projeler için yazılım testlerini bağımsız olarak planlar, yönetir ve yürütürüz; merkezimiz Frankfurt yakınlarındaki Eschborn’dur. Altı alan: test yönetimi, kalite güvencesi, test otomasyonu, yapay zekâ destekli kalite güvencesi (LLM-as-a-Judge), SAP test projeleri ve BT danışmanlığı. Referanslarımız arasında Deutsche Telekom, Deutsche Bank, Intel ve EnBW yer alır.',
      },
      {
        question: 'WAMOCON kimler için çalışır?',
        answer:
          'Büyük holdinglerden orta ölçekli şirketlere kadar. Üç tipik müşteri profili: büyük SAP veya çekirdek bankacılık sistemleri olan holdingler, bir sürümü güvence altına almak isteyen orta ölçekli şirketler ve test kapasitesi satın alan BT hizmet sağlayıcıları. Kapsam tek bir test uzmanından eksiksiz bir test birimine kadar uzanır; Almanya ve AB genelinde, Almanca ve İngilizce olarak.',
      },
      {
        question: 'WAMOCON somut olarak hangi test hizmetlerini sunar?',
        answer:
          'Altı hizmet, tek tek ya da paket hâlinde: test stratejisi, test planlaması, ISTQB yöntemlerine göre test senaryosu ve test verisi tasarımı, tüm test seviyelerinde test yürütme (entegrasyon, sistem, kabul, regresyon), test otomasyonu ve yapay zekâ testi — üretken yapay zekânın LLM-as-a-Judge ile değerlendirilmesi. Ayrıca hata yönetimi ve sürüm raporlarını içeren kalite yönetimi.',
      },
      {
        question: 'Web sitesi üzerinden yapılan bir talep bağlayıcı mıdır?',
        answer:
          'Hayır. Formlar bağlayıcı olmayan bir iletişim yoludur, sözleşme değildir. Adınız ve bir e-posta adresi veya telefon numarası yeterlidir. Size geri döner, durumu netleştirir ve uygun bir model öneririz; yazılı teklif ancak bundan sonra hazırlanır. Doğrudan +49 6196 5838311 numarasından da ulaşabilirsiniz.',
      },
      {
        question: 'Test yönetimi nedir ve şirketlerin buna neden ihtiyacı var?',
        answer:
          'Test yönetimi, test sürecinin tamamının planlanması, yönlendirilmesi ve raporlanmasıdır. Bir proje gayriresmî kontroller için fazla büyüdüğünde, hata eğilimlerini anekdotlardan çıkarıp ölçülebilir hâle getirir. İkinci gerekçe bağımsızlıktır: Kendi yazılımını test eden, aynı hata sınıflarını gözden kaçırır. Dış test yöneticileri ayrıca proje bittikten sonra müşteride kalan yöntem bilgisini de getirir.',
      },
      {
        question: 'WAMOCON’un 360° sistemi nedir?',
        answer:
          'Bir projeyi belirsiz kalite gereksinimlerinden kontrollü ve şeffaf bir sürüme taşıyan metodolojimizdir. Klasik test yönetimini çevik teslimatla birleştirir: şelale yönetişimi içinde Scrum sprintleri, gereksinim analizinden sürüm raporuna kadar beş aşama. Faydası: uçtan uca şeffaflık ve erken görünür hâle gelen boşluklar.',
      },
      {
        question: 'Şirketler WAMOCON ile nasıl çalışabilir?',
        answer:
          'Üç model üzerinden: personel takviyesi (müşteri ekibi içinde tek tek test uzmanları veya test yöneticileri), proje ekipleri (eksiksiz bir test birimi tanımlı bir kapsamı üstlenir) ve danışmanlık (test stratejisi, araç seçimi, kalite süreçleri). Hizmet yerinde, Eschborn’dan ya da uzaktan verilir. Tek bir test uzmanıyla başlayıp projeyle birlikte büyüyebilirsiniz.',
      },
      {
        question: 'WAMOCON hangi sektörler ve müşteriler için çalışır?',
        answer:
          'Enerji, bankacılık, telekomünikasyon, sanayi, lojistik ve kamu yönetimi; aralarında 50Hertz, Deutsche Bank, Deutsche Telekom, EnBW ve Federal İş Kurumu’nun bulunduğu, adı açıkça belirtilen 24 referansla. iBS AG ile 2018’den bu yana yapı tasarruf sandıkları için bir SAP programı yürütülüyor; test yönetimi Scrum ve şelale yöntemlerinin melez bir bileşimi.',
      },
      {
        question: 'WAMOCON kariyer değiştirenleri ve çırakları da yetiştiriyor mu?',
        answer:
          'Evet. Mesleğe yeni başlayanlar ve kariyer değiştirenler operasyonel test görevleriyle işe başlar, WAMOCON Akademi üzerinden ISTQB sertifikası alır ve giderek artan proje sorumluluğu üstlenir. Ayrıca Eschborn’da uygulama geliştirme alanında bilişim uzmanı yetiştiriyoruz. Açık pozisyonları ve deneyimleri Kariyer ile Çalışan Yorumları sayfalarında bulabilirsiniz.',
      },
      {
        question: 'WAMOCON GmbH ile WAMOCON Academy GmbH arasındaki fark nedir?',
        answer:
          'Eschborn’daki aynı adreste, ortak yönetim altında hukuken ayrı iki şirket. WAMOCON GmbH test yönetimi ve kalite güvencesi hizmeti verir; WAMOCON Academy GmbH ise ISTQB tarafından akredite eğitim sağlayıcı olarak listelenen eğitim merkezini işletir. Bu bağ bilinçlidir: eğitmenler devam eden projelerden ders anlatır.',
      },
      {
        question: 'WAMOCON kendi yazılımlarını ve yapay zekâ uygulamalarını da geliştiriyor mu?',
        answer:
          'Evet, test hizmetlerinin yanı sıra. Bunlar arasında sözleşme, belge ve talep yönetimi için kurumsal uygulamalar ile sınav hazırlığı ve yetkinlik analizi için yapay zekâ araçları yer alır. Test projelerimizle aynı kalite mantığıyla geliştirilirler; bir kısmı Uygulamalar sayfasında herkese açık olarak bağlantılanmıştır.',
      },
      {
        question: 'WAMOCON nerede bulunuyor ve şirkete nasıl ulaşılır?',
        answer:
          'Mergenthalerallee 79–81, 65760 Eschborn adresinde, Frankfurt am Main şehir sınırının hemen yanında. Telefonla +49 6196 5838311, e-postayla info@wamocon.com üzerinden veya web sitesindeki iletişim bölümlerinden ulaşabilirsiniz. Grubun ISTQB akreditasyonlu eğitim merkezi olan WAMOCON Academy GmbH de aynı adreste bulunur.',
      },
      {
        question: 'WAMOCON veri koruma ve uyumluluğu nasıl ele alıyor?',
        answer:
          'GDPR’ye uygun olarak. Web sitesi üzerinden toplanan verileri yalnızca talebinizi yanıtlamak için kullanırız; ayrıntılar gizlilik politikasında yer alır. YouTube veya Google Haritalar gibi harici içerikler yalnızca çerez bandı üzerinden onayınızdan sonra yüklenir. Yayımlanan müşteri yorumlarını yayımlamadan önce proje belgeleriyle karşılaştırarak doğrularız.',
      },
    ],
  },
};
