/**
 * Content for the business-systems page (/unternehmenssysteme/).
 *
 * The dividing line against /webdesign/: a website presents a company to the
 * outside, a system runs it on the inside. Everything here has roles, rights,
 * workflows and an audit trail; everything on the web-design page is a public
 * presence. Products anyone can sign up for live on /apps/ instead.
 *
 * Pricing note: the figures below are corridors, not headline prices. That is
 * deliberate. `docs/webdesign-preis-und-marketingpsychologie.md` records why —
 * in short, a single sensational number on a credence good invites the reader
 * to look for the catch instead of the value (Vonasch et al. 2024), and the
 * only remedy with experimental support is to explain what drives the number.
 */
import type { Lang } from '../i18n/config';

type L = Record<Lang, string>;

export interface SystemProject {
  name: string;
  /** domain key — must match one of `domains` */
  domain: string;
  /** the organisation the system was built for */
  client: L;
  image: string;
  url: string;
  featured?: boolean;
  tagline: L;
  description: L;
  /** the three or four things the system actually does, as short phrases */
  capabilities: L[];
}

export const domains: { key: string; label: L }[] = [
  {
    key: 'immobilien',
    label: { de: 'Immobilien & Verwaltung', en: 'Property & administration', tr: 'Gayrimenkul ve yönetim' },
  },
  {
    key: 'bildung',
    label: { de: 'Bildung & Qualifizierung', en: 'Education & training', tr: 'Eğitim ve nitelik kazandırma' },
  },
];

export const systems: SystemProject[] = [
  {
    name: '1Çatı ERP',
    domain: 'immobilien',
    client: {
      de: 'Ataberk Estate, Alanya',
      en: 'Ataberk Estate, Alanya',
      tr: 'Ataberk Estate, Alanya',
    },
    image: '/images/webdesign/cati-erp.webp',
    url: 'https://cati-blond.vercel.app',
    featured: true,
    tagline: {
      de: 'Der Immobilienbetrieb aus einem Zentrum',
      en: 'Running a property business from one place',
      tr: 'Gayrimenkul işletmesi tek merkezden',
    },
    description: {
      de: 'Ein Maklerhaus mit über 6.000 abgeschlossenen Verkäufen führte Vertrieb, Objekte, Eigentümer und Service in getrennten Listen. 1Çatı legt alles in einen rollenbasierten Arbeitsbereich: Wer welche Daten sieht, entscheidet die Rolle, nicht die Absprache. Für denselben Kunden entstand auch der öffentliche Webauftritt.',
      en: 'An estate agency with over 6,000 completed sales ran sales, properties, owners and service in separate lists. 1Çatı puts all of it into one role-based workspace, where who sees which record is decided by the role rather than by agreement. The same client’s public website came from us too.',
      tr: '6.000’den fazla tamamlanmış satışa sahip bir emlak ofisi; satışı, portföyü, malikleri ve servisi ayrı listelerde yürütüyordu. 1Çatı bunların tamamını rol tabanlı tek bir çalışma alanında toplar: hangi kaydı kimin göreceğine mutabakat değil, rol karar verir. Aynı müşterinin web sitesi de bizden.',
    },
    capabilities: [
      { de: 'Vertrieb und Portfolio in einem Bestand', en: 'Sales and portfolio in one record set', tr: 'Satış ve portföy tek veri kümesinde' },
      { de: 'Eigentümer, Mieter, Beiträge, Service', en: 'Owners, tenants, dues, service', tr: 'Malik, kiracı, aidat, servis' },
      { de: 'Dokumente mit Nachweiskette', en: 'Documents with an audit trail', tr: 'Kanıt zinciriyle dokümanlar' },
      { de: 'Eigenes Kundenportal, mehrsprachig', en: 'Its own customer portal, multilingual', tr: 'Kendi müşteri portalı, çok dilli' },
    ],
  },
  {
    name: 'DiTeLe',
    domain: 'bildung',
    client: {
      de: 'WAMOCON Academy GmbH',
      en: 'WAMOCON Academy GmbH',
      tr: 'WAMOCON Academy GmbH',
    },
    image: '/images/webdesign/ditele.webp',
    url: 'https://ditele-gamma.vercel.app',
    tagline: {
      de: 'Softwaretesten lernt man durch Testen',
      en: 'You learn software testing by testing',
      tr: 'Yazılım testi test ederek öğrenilir',
    },
    description: {
      de: 'Eine Lernplattform, auf der nicht über Software gesprochen, sondern an laufenden Anwendungen gearbeitet wird. Lernende testen, schreiben Fehlerberichte und bekommen sie von Trainern bewertet. Drei Rollen, getrennte Rechte, Row Level Security in der Datenbank statt Vertrauen in die Oberfläche.',
      en: 'A learning platform where nobody talks about software — people work on running applications. Learners test, write defect reports and have them reviewed by trainers. Three roles, separated rights, row level security in the database rather than trust in the interface.',
      tr: 'Yazılım hakkında konuşulan değil, çalışan uygulamalar üzerinde çalışılan bir öğrenme platformu. Öğrenciler test eder, hata raporu yazar ve bunlar eğitmenlerce değerlendirilir. Üç rol, ayrılmış yetkiler ve arayüze güven yerine veritabanında satır düzeyi güvenlik.',
    },
    capabilities: [
      { de: 'Rollen für Lernende, Trainer, Verwaltung', en: 'Roles for learners, trainers, administration', tr: 'Öğrenci, eğitmen ve yönetim rolleri' },
      { de: 'Aufgaben, Einreichung, Bewertung', en: 'Tasks, submission, review', tr: 'Görev, teslim, değerlendirme' },
      { de: 'KI-Assistent mit festen Leitplanken', en: 'An AI assistant with fixed guardrails', tr: 'Sınırları belirlenmiş yapay zekâ asistanı' },
      { de: 'Drei Sprachen, helle und dunkle Ansicht', en: 'Three languages, light and dark', tr: 'Üç dil, açık ve koyu görünüm' },
    ],
  },
];

export const systeme = {
  seo: {
    title: {
      de: 'Unternehmenssysteme | WAMOCON – Software, die Ihren Betrieb führt',
      en: 'Business systems | WAMOCON – software that runs your operation',
      tr: 'Kurumsal sistemler | WAMOCON – işletmenizi yürüten yazılım',
    },
    description: {
      de: 'WAMOCON baut Systeme für Unternehmensprozesse: Rollen und Rechte, Workflows, Nachweisketten und Schnittstellen. Individuell entwickelt, DSGVO-konform, aus Eschborn bei Frankfurt.',
      en: 'WAMOCON builds systems for business processes: roles and rights, workflows, audit trails and interfaces. Custom-built, GDPR-compliant, from Eschborn near Frankfurt.',
      tr: 'WAMOCON, kurumsal süreçler için sistemler geliştirir: roller ve yetkiler, iş akışları, kanıt zincirleri ve arayüzler. Kişiye özel, KVKK/GDPR uyumlu, Frankfurt yakınlarındaki Eschborn’dan.',
    },
  },

  // Attention: the thesis, stated as a problem the reader recognises.
  hero: {
    eyebrow: { de: 'WAMOCON Unternehmenssysteme', en: 'WAMOCON business systems', tr: 'WAMOCON kurumsal sistemler' },
    title: {
      de: 'Wenn die Arbeit in Tabellen feststeckt',
      en: 'When the work is stuck in spreadsheets',
      tr: 'İş, tablolarda sıkışıp kaldığında',
    },
    lead: {
      de: 'Eine Website zeigt Ihr Unternehmen nach außen. Ein System führt es von innen. Wir bauen die Anwendungen, in denen Ihre Mitarbeitenden den Tag verbringen: mit Rollen und Rechten, festen Abläufen und einer Nachweiskette, die auch in einem Jahr noch trägt.',
      en: 'A website shows your company to the outside. A system runs it on the inside. We build the applications your people spend the day in: with roles and rights, defined workflows and an audit trail that still holds a year from now.',
      tr: 'Web sitesi şirketinizi dışarıya gösterir; sistem ise onu içeriden yürütür. Çalışanlarınızın gününü geçirdiği uygulamaları geliştiriyoruz: roller ve yetkiler, tanımlı iş akışları ve bir yıl sonra da geçerli olan bir kanıt zinciriyle.',
    },
    ctaPrimary: { de: 'Vorhaben besprechen', en: 'Discuss your project', tr: 'Projenizi konuşalım' },
    ctaSecondary: { de: 'Systeme ansehen', en: 'See the systems', tr: 'Sistemleri görün' },
  },

  /**
   * Interest: the self-selection block. Its job is not to persuade but to let
   * the reader place themselves — which is also what makes the cross-link to
   * /webdesign/ useful rather than decorative.
   */
  split: {
    heading: {
      de: 'Website oder System — was Sie wirklich brauchen',
      en: 'Website or system — what you actually need',
      tr: 'Web sitesi mi, sistem mi — gerçekte neye ihtiyacınız var',
    },
    intro: {
      de: 'Die beiden Fälle werden oft verwechselt, und die Verwechslung ist teuer. Diese Liste sortiert schneller als jedes Beratungsgespräch.',
      en: 'The two get confused often, and the confusion is expensive. This list sorts it faster than any sales call.',
      tr: 'İkisi sık karıştırılır ve bu karışıklık pahalıya mal olur. Bu liste, herhangi bir görüşmeden daha hızlı ayırır.',
    },
    website: {
      title: { de: 'Sie brauchen eine Website', en: 'You need a website', tr: 'Bir web sitesine ihtiyacınız var' },
      points: [
        { de: 'Neue Kunden sollen Sie finden und sich ein Bild machen', en: 'New customers should find you and form an impression', tr: 'Yeni müşteriler sizi bulup bir izlenim edinmeli' },
        { de: 'Anfragen und Termine kommen über ein Formular herein', en: 'Enquiries and appointments arrive through a form', tr: 'Talepler ve randevular bir form üzerinden geliyor' },
        { de: 'Es gibt keine Anmeldung und keine unterschiedlichen Rechte', en: 'There is no login and no differing permissions', tr: 'Giriş yok, farklı yetkiler yok' },
        { de: 'Der Inhalt ändert sich selten und für alle gleich', en: 'Content changes rarely, and the same way for everyone', tr: 'İçerik nadiren ve herkes için aynı şekilde değişir' },
      ],
      cta: { de: 'Zu Webdesign', en: 'To web design', tr: 'Webdesign’a git' },
    },
    system: {
      title: { de: 'Sie brauchen ein System', en: 'You need a system', tr: 'Bir sisteme ihtiyacınız var' },
      points: [
        { de: 'Mehrere Personen arbeiten am selben Vorgang weiter', en: 'Several people work on the same case in sequence', tr: 'Aynı işlemi birden çok kişi sırayla sürdürüyor' },
        { de: 'Nicht jeder darf alles sehen oder ändern', en: 'Not everyone may see or change everything', tr: 'Herkes her şeyi görmemeli veya değiştirmemeli' },
        { de: 'Sie müssen später nachweisen, wer wann was entschieden hat', en: 'You have to prove later who decided what, and when', tr: 'Kimin ne zaman neye karar verdiğini sonradan kanıtlamanız gerekiyor' },
        { de: 'Die Wahrheit steht heute in Excel, WhatsApp und drei Köpfen', en: 'Today the truth lives in Excel, WhatsApp and three people’s heads', tr: 'Gerçek bugün Excel’de, WhatsApp’ta ve üç kişinin aklında' },
      ],
      cta: { de: 'Weiter unten ansehen', en: 'See below', tr: 'Aşağıda görün' },
    },
    both: {
      de: 'Häufig ist es beides. Für Ataberk Estate haben wir zuerst die Website gebaut und danach das System dahinter — beide finden Sie unten verlinkt.',
      en: 'Often it is both. For Ataberk Estate we built the website first and the system behind it afterwards — you will find both linked below.',
      tr: 'Çoğu zaman her ikisi birden. Ataberk Estate için önce web sitesini, ardından arkasındaki sistemi geliştirdik — ikisini de aşağıda bulacaksınız.',
    },
  },

  // Search: what the reader can verify by clicking.
  portfolio: {
    heading: { de: 'Systeme im Einsatz', en: 'Systems in use', tr: 'Kullanımdaki sistemler' },
    intro: {
      de: 'Beide laufen produktiv und sind öffentlich erreichbar. Klicken Sie hinein, statt uns zu glauben.',
      en: 'Both run in production and are publicly reachable. Click into them rather than taking our word for it.',
      tr: 'İkisi de üretimde çalışıyor ve herkese açık. Bize inanmak yerine içine girip bakın.',
    },
    live: { de: 'System öffnen', en: 'Open the system', tr: 'Sistemi aç' },
    featuredLabel: { de: 'Referenzsystem', en: 'Reference system', tr: 'Referans sistem' },
    clientLabel: { de: 'Gebaut für', en: 'Built for', tr: 'Şunun için geliştirildi' },
  },

  // Desire: what we can build, in the reader's vocabulary rather than ours.
  capabilities: {
    heading: { de: 'Woraus ein System bei uns besteht', en: 'What a system of ours is made of', tr: 'Bizde bir sistem nelerden oluşur' },
    intro: {
      de: 'Kein Baukasten und kein Standardprodukt mit Ihrem Logo. Diese sechs Bausteine bekommt jedes System, der Rest richtet sich nach Ihrem Betrieb.',
      en: 'No kit and no standard product with your logo on it. Every system gets these six building blocks; the rest follows your operation.',
      tr: 'Hazır bir kutu ya da logonuzun konduğu standart bir ürün değil. Her sistem bu altı yapı taşını alır; gerisi işletmenize göre şekillenir.',
    },
    items: [
      {
        title: { de: 'Rollen und Rechte', en: 'Roles and rights', tr: 'Roller ve yetkiler' },
        text: {
          de: 'Wer was sieht, entscheidet die Datenbank, nicht die Oberfläche. Row Level Security heißt: Auch ein Fehler im Frontend gibt keine fremden Daten preis.',
          en: 'Who sees what is decided by the database, not the interface. Row level security means a bug in the front end still cannot leak someone else’s data.',
          tr: 'Kimin neyi göreceğine arayüz değil, veritabanı karar verir. Satır düzeyi güvenlik, önyüzdeki bir hatanın bile başkasının verisini sızdırmaması demektir.',
        },
      },
      {
        title: { de: 'Abläufe mit festen Zuständen', en: 'Workflows with defined states', tr: 'Tanımlı durumlara sahip iş akışları' },
        text: {
          de: 'Ein Vorgang hat einen Zustand und erlaubte Übergänge. Damit ist ausgeschlossen, dass eine Freigabe übersprungen wird, weil gerade Urlaubszeit ist.',
          en: 'A case has a state and permitted transitions. That rules out an approval being skipped because someone happens to be on holiday.',
          tr: 'Bir işlemin durumu ve izin verilen geçişleri vardır. Böylece biri izinde diye bir onayın atlanması olanaksız hale gelir.',
        },
      },
      {
        title: { de: 'Nachweiskette', en: 'Audit trail', tr: 'Kanıt zinciri' },
        text: {
          de: 'Jede Änderung trägt Person, Zeitpunkt und Vorzustand. Das brauchen Sie nicht für den Alltag, sondern für den einen Tag, an dem jemand fragt.',
          en: 'Every change carries the person, the time and the prior state. You do not need that for everyday work — you need it on the one day somebody asks.',
          tr: 'Her değişiklik kişi, zaman ve önceki durumu taşır. Buna günlük iş için değil, birinin sorduğu o tek gün için ihtiyacınız var.',
        },
      },
      {
        title: { de: 'Schnittstellen statt Insellösung', en: 'Interfaces instead of an island', tr: 'Ada çözümü yerine arayüzler' },
        text: {
          de: 'Buchhaltung, Ticketsystem, Kalender, Zahlungsdienst. Ein System, das nichts anbinden kann, wird zur nächsten Excel-Datei.',
          en: 'Accounting, ticketing, calendar, payment provider. A system that cannot connect to anything becomes the next spreadsheet.',
          tr: 'Muhasebe, çağrı sistemi, takvim, ödeme sağlayıcı. Hiçbir şeye bağlanamayan bir sistem, bir sonraki Excel dosyasına dönüşür.',
        },
      },
      {
        title: { de: 'KI mit Leitplanken', en: 'AI with guardrails', tr: 'Sınırları belirlenmiş yapay zekâ' },
        text: {
          de: 'Assistenten, die aus Ihren eigenen Inhalten antworten und sonst schweigen. Kein Modell, das sich etwas ausdenkt, wenn es die Antwort nicht kennt.',
          en: 'Assistants that answer from your own content and otherwise stay quiet. No model that invents something when it does not know the answer.',
          tr: 'Kendi içeriğinizden yanıt veren, aksi halde susan asistanlar. Yanıtı bilmediğinde bir şey uyduran model yok.',
        },
      },
      {
        title: { de: 'Auswertungen, die jemand liest', en: 'Reports somebody actually reads', tr: 'Gerçekten okunan raporlar' },
        text: {
          de: 'Kennzahlen aus echten Daten, nicht aus Behauptungen. Wo eine Zahl noch nicht gerechnet werden kann, sagt die Kachel das, statt zu schätzen.',
          en: 'Figures from real data, not from claims. Where a number cannot be computed yet, the tile says so instead of guessing.',
          tr: 'İddialardan değil, gerçek veriden gelen göstergeler. Bir sayı henüz hesaplanamıyorsa kutucuk tahmin yürütmez, bunu söyler.',
        },
      },
    ],
  },

  // Action: the process, which is also what explains the price.
  process: {
    heading: { de: 'Wie ein Projekt bei uns abläuft', en: 'How a project runs with us', tr: 'Bir proje bizde nasıl ilerler' },
    intro: {
      de: 'Vier Phasen, jede mit einem Ergebnis, das Sie in der Hand halten. Nach Phase eins können Sie aussteigen und das Dokument behalten.',
      en: 'Four phases, each with a result you can hold. After phase one you may walk away and keep the document.',
      tr: 'Dört aşama; her birinin elinizde tutabileceğiniz bir çıktısı var. Birinci aşamadan sonra çıkabilir ve belgeyi alıkoyabilirsiniz.',
    },
    steps: [
      {
        title: { de: 'Aufnahme', en: 'Assessment', tr: 'Tespit' },
        duration: { de: '1 bis 2 Wochen', en: '1 to 2 weeks', tr: '1–2 hafta' },
        text: {
          de: 'Wir sehen uns an, wie heute gearbeitet wird, und schreiben ein Anforderungsdokument. Ergebnis ist ein Papier, mit dem Sie auch zu einem anderen Anbieter gehen könnten.',
          en: 'We look at how the work is done today and write a requirements document. The result is a paper you could take to a different provider.',
          tr: 'Bugün nasıl çalışıldığına bakar ve bir gereksinim dokümanı yazarız. Sonuç, başka bir sağlayıcıya da götürebileceğiniz bir belgedir.',
        },
      },
      {
        title: { de: 'Erster Schnitt', en: 'First slice', tr: 'İlk dilim' },
        duration: { de: '3 bis 6 Wochen', en: '3 to 6 weeks', tr: '3–6 hafta' },
        text: {
          de: 'Ein schmaler, aber vollständiger Ausschnitt geht live: Anmeldung, Rollen, ein echter Ablauf. Sie arbeiten damit, bevor der Rest gebaut wird.',
          en: 'One narrow but complete slice goes live: login, roles, one real workflow. You work with it before the rest gets built.',
          tr: 'Dar ama eksiksiz bir kesit yayına alınır: giriş, roller ve gerçek bir iş akışı. Gerisi yapılmadan önce onunla çalışırsınız.',
        },
      },
      {
        title: { de: 'Ausbau', en: 'Build-out', tr: 'Genişletme' },
        duration: { de: 'nach Umfang', en: 'depends on scope', tr: 'kapsama göre' },
        text: {
          de: 'Die weiteren Bereiche kommen in derselben Taktung dazu, jeweils getestet und abgenommen. Sie zahlen je Meilenstein, nicht im Voraus.',
          en: 'The remaining areas arrive at the same cadence, each tested and signed off. You pay per milestone, not up front.',
          tr: 'Kalan alanlar aynı ritimde eklenir; her biri test edilip kabul edilir. Peşin değil, kilometre taşı başına ödersiniz.',
        },
      },
      {
        title: { de: 'Betrieb', en: 'Operation', tr: 'İşletim' },
        duration: { de: 'laufend', en: 'ongoing', tr: 'sürekli' },
        text: {
          de: 'Hosting, Updates, Sicherung, Weiterentwicklung. Mit Reaktionszeiten, die im Vertrag stehen, und einer Klausel, die Ihnen Daten und Quellcode sichert.',
          en: 'Hosting, updates, backups, further development. With response times written into the contract and a clause that secures your data and source code.',
          tr: 'Barındırma, güncelleme, yedekleme, geliştirme. Sözleşmede yazan yanıt süreleri ve verinizle kaynak kodunuzu güvenceye alan bir madde ile.',
        },
      },
    ],
  },

  // The price question, answered as a corridor with the drivers named.
  invest: {
    heading: { de: 'Was das kostet', en: 'What this costs', tr: 'Bunun maliyeti' },
    intro: {
      de: 'Wir nennen Spannen statt einer Schlagzahl, weil der Preis eines Systems am Umfang hängt und nicht am Verkaufsgespräch. Die Aufnahme in Phase eins macht daraus eine feste Zahl.',
      en: 'We give ranges rather than a headline figure, because the price of a system follows its scope and not the sales conversation. The assessment in phase one turns it into a fixed number.',
      tr: 'Manşet bir rakam yerine aralık veriyoruz; çünkü bir sistemin fiyatı satış görüşmesine değil, kapsamına bağlıdır. Birinci aşamadaki tespit, bunu sabit bir rakama dönüştürür.',
    },
    tiers: [
      {
        name: { de: 'Aufnahme', en: 'Assessment', tr: 'Tespit' },
        price: { de: 'ab 2.400 €', en: 'from €2,400', tr: '2.400 €’dan itibaren' },
        unit: { de: 'einmalig', en: 'one-off', tr: 'tek seferlik' },
        text: {
          de: 'Prozessaufnahme und Anforderungsdokument. Wird bei Beauftragung vollständig verrechnet.',
          en: 'Process assessment and requirements document. Credited in full if you commission the build.',
          tr: 'Süreç tespiti ve gereksinim dokümanı. Yapım siparişi verilirse tamamı mahsup edilir.',
        },
      },
      {
        name: { de: 'Erster Schnitt', en: 'First slice', tr: 'İlk dilim' },
        price: { de: '9.800 bis 24.000 €', en: '€9,800 to €24,000', tr: '9.800 – 24.000 €' },
        unit: { de: 'einmalig', en: 'one-off', tr: 'tek seferlik' },
        recommended: true,
        text: {
          de: 'Anmeldung, Rollen, ein vollständiger Ablauf, produktiv nutzbar. Der Korridor ergibt sich aus Anzahl der Rollen, Abläufe und Schnittstellen.',
          en: 'Login, roles, one complete workflow, usable in production. The range follows the number of roles, workflows and interfaces.',
          tr: 'Giriş, roller ve eksiksiz bir iş akışı; üretimde kullanılabilir. Aralık; rol, iş akışı ve arayüz sayısına göre belirlenir.',
        },
      },
      {
        name: { de: 'Betrieb', en: 'Operation', tr: 'İşletim' },
        price: { de: '390 bis 1.490 €', en: '€390 to €1,490', tr: '390 – 1.490 €' },
        unit: { de: 'pro Monat', en: 'per month', tr: 'aylık' },
        text: {
          de: 'Hosting, Updates, Sicherung, Support mit vereinbarter Reaktionszeit und ein fester Anteil Weiterentwicklung.',
          en: 'Hosting, updates, backups, support with an agreed response time and a fixed share of further development.',
          tr: 'Barındırma, güncelleme, yedekleme, kararlaştırılmış yanıt süreli destek ve sabit bir geliştirme payı.',
        },
      },
    ],
    driversHeading: { de: 'Was den Preis bewegt', en: 'What moves the price', tr: 'Fiyatı ne belirler' },
    drivers: [
      { de: 'Anzahl der Rollen und wie stark sich ihre Rechte unterscheiden', en: 'How many roles there are and how far their rights differ', tr: 'Rol sayısı ve yetkilerinin ne kadar farklılaştığı' },
      { de: 'Wie viele Abläufe abgebildet werden und wie viele Zustände sie haben', en: 'How many workflows are modelled and how many states they carry', tr: 'Kaç iş akışının modelleneceği ve kaç durum içerdiği' },
      { de: 'Fremdsysteme, die angebunden werden müssen', en: 'Third-party systems that have to be connected', tr: 'Bağlanması gereken üçüncü taraf sistemler' },
      { de: 'Ob Altdaten übernommen werden und in welchem Zustand sie sind', en: 'Whether legacy data is migrated, and what state it is in', tr: 'Eski verinin taşınıp taşınmayacağı ve hangi durumda olduğu' },
      { de: 'Anzahl der Sprachen und ob Barrierefreiheit nach BFSG gefordert ist', en: 'The number of languages, and whether accessibility under the German BFSG is required', tr: 'Dil sayısı ve BFSG kapsamında erişilebilirliğin gerekip gerekmediği' },
    ],
    note: {
      de: 'Alle Preise netto zzgl. Umsatzsteuer. Der laufende Betrieb ist monatlich kündbar, sobald der Erstschnitt abgenommen ist.',
      en: 'All prices are net, plus VAT. Ongoing operation can be cancelled monthly once the first slice has been accepted.',
      tr: 'Tüm fiyatlar net olup KDV hariçtir. İlk dilim kabul edildikten sonra işletim aylık olarak feshedilebilir.',
    },
  },

  // Like: commitments that bind us, instead of a stack of reassurances.
  commitment: {
    heading: { de: 'Woran Sie uns festhalten können', en: 'What you can hold us to', tr: 'Bizi neye bağlayabilirsiniz' },
    intro: {
      de: 'Versprechen kosten nichts. Diese fünf Punkte stehen im Vertrag und haben Konsequenzen, wenn wir sie verfehlen.',
      en: 'Promises are free. These five sit in the contract and carry consequences if we miss them.',
      tr: 'Söz vermek bedava. Bu beş madde sözleşmede yer alır ve tutturamazsak sonucu vardır.',
    },
    points: [
      {
        de: 'Abnahmekriterien werden vor dem Bauen schriftlich festgelegt, nicht danach ausgehandelt.',
        en: 'Acceptance criteria are written down before we build, not negotiated afterwards.',
        tr: 'Kabul kriterleri yapım öncesinde yazıya dökülür, sonrasında pazarlık konusu edilmez.',
      },
      {
        de: 'Zahlung je Meilenstein nach Abnahme. Keine Vorkasse für den Erstschnitt.',
        en: 'Payment per milestone after acceptance. No advance payment for the first slice.',
        tr: 'Kabul sonrası kilometre taşı başına ödeme. İlk dilim için peşin ödeme yok.',
      },
      {
        de: 'Reaktionszeiten im Support sind vertraglich vereinbart, mit Gutschrift bei Verfehlung.',
        en: 'Support response times are contractually agreed, with a credit if we miss them.',
        tr: 'Destek yanıt süreleri sözleşmeyle belirlenir; tutturulmazsa alacak kaydı yapılır.',
      },
      {
        de: 'Quellcode und Daten gehören Ihnen. Eine Ausstiegsklausel regelt die Herausgabe, auch im Streitfall.',
        en: 'Source code and data are yours. An exit clause governs handover, including in a dispute.',
        tr: 'Kaynak kod ve veri sizindir. Bir çıkış maddesi, ihtilaf hâlinde de teslimi düzenler.',
      },
      {
        de: 'Deutscher Vertragspartner, deutscher Gerichtsstand, Auftragsverarbeitungsvertrag nach DSGVO.',
        en: 'A German contracting party, German place of jurisdiction, GDPR data-processing agreement.',
        tr: 'Alman sözleşme tarafı, Alman yetkili mahkemesi ve GDPR uyarınca veri işleme sözleşmesi.',
      },
    ],
  },

  // Love: the cross-link, framed as a service rather than as navigation.
  crosslink: {
    heading: { de: 'Und wenn Sie doch eine Website brauchen', en: 'And if a website is what you need', tr: 'Ya asıl ihtiyacınız bir web sitesiyse' },
    text: {
      de: 'Dann sind Sie hier eine Abteilung zu weit. Unsere Webdesign-Abteilung baut mehrsprachige Auftritte mit Buchung, KI-Assistent und SEO — für Kunden vom Barbier in Alanya bis zum Prüfdienstleister im Rhein-Main-Gebiet.',
      en: 'Then you are one department too far. Our web-design team builds multilingual sites with booking, an AI assistant and SEO — for clients from a barber in Alanya to a safety-testing provider in the Rhine-Main region.',
      tr: 'O hâlde bir birim ileri gitmişsiniz. Web tasarım birimimiz; randevu, yapay zekâ asistanı ve SEO içeren çok dilli siteler geliştiriyor — Alanya’daki bir berberden Rhein-Main bölgesindeki bir denetim firmasına kadar.',
    },
    cta: { de: 'Zur Webdesign-Abteilung', en: 'To the web-design department', tr: 'Web tasarım birimine' },
  },

  contact: {
    heading: { de: 'Sprechen wir über Ihren Betrieb', en: 'Let us talk about your operation', tr: 'İşletmenizi konuşalım' },
    text: {
      de: 'Beschreiben Sie uns in ein paar Sätzen, wo es heute hakt. Wir sagen Ihnen ehrlich, ob sich ein eigenes System lohnt oder ob ein Standardprodukt reicht.',
      en: 'Describe in a few sentences where it snags today. We will tell you honestly whether a system of your own is worth it or whether an off-the-shelf product will do.',
      tr: 'Bugün nerede takıldığını birkaç cümleyle anlatın. Kendi sisteminizin değip değmeyeceğini ya da hazır bir ürünün yeterli olacağını dürüstçe söyleyelim.',
    },
  },
} as const;
