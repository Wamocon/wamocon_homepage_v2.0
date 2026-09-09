/**
 * Content for the business-systems page (/unternehmenssysteme/).
 *
 * The dividing line against /webdesign/: a website presents a company to the
 * outside, a system runs it on the inside. Everything here has roles, rights,
 * workflows and an audit trail. Products anyone can sign up for live on /apps/.
 *
 * No prices on this page, on purpose. A system's price follows its scope, and
 * a number without a scope invites the reader to hunt for the catch rather
 * than read the offer — see `docs/webdesign-preis-und-marketingpsychologie.md`.
 * What replaces the number is the work itself: the six phases below name every
 * discipline that goes into a project, which is what actually justifies a
 * price once we quote one.
 *
 * The section order follows how somebody decides, not how we like to present:
 * recognition (do I have this problem?) → self-selection (website or system?)
 * → proof they can click → how we work → who we are → what binds us → one
 * small first step.
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
    client: { de: 'Ataberk Estate, Alanya', en: 'Ataberk Estate, Alanya', tr: 'Ataberk Estate, Alanya' },
    image: '/images/webdesign/cati-erp.webp',
    url: 'https://cati-blond.vercel.app',
    featured: true,
    tagline: {
      de: 'Ein Maklerhaus, ein Arbeitsbereich',
      en: 'One estate agency, one workspace',
      tr: 'Tek emlak ofisi, tek çalışma alanı',
    },
    description: {
      de: 'Über 6.000 abgeschlossene Verkäufe, und der Überblick lag in getrennten Listen: Vertrieb hier, Objekte dort, Eigentümer im Ordner nebenan. Heute liegt alles in einem Arbeitsbereich, und wer welchen Datensatz sieht, entscheidet die Rolle — nicht die Absprache im Flur. Die öffentliche Website desselben Hauses stammt ebenfalls von uns.',
      en: 'Over 6,000 completed sales, and the overview lived in separate lists: sales here, properties there, owners in the folder next door. Today it all sits in one workspace, and who sees which record is decided by the role — not by an agreement in the corridor. The same firm’s public website came from us too.',
      tr: '6.000’den fazla tamamlanmış satış vardı ama genel görünüm ayrı listelerde duruyordu: satış burada, portföy şurada, malikler yan klasörde. Bugün hepsi tek bir çalışma alanında ve hangi kaydı kimin göreceğine koridordaki mutabakat değil, rol karar veriyor. Aynı şirketin web sitesi de bizden.',
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
    client: { de: 'WAMOCON Academy GmbH', en: 'WAMOCON Academy GmbH', tr: 'WAMOCON Academy GmbH' },
    image: '/images/webdesign/ditele.webp',
    url: 'https://ditele-gamma.vercel.app',
    tagline: {
      de: 'Eine Lernplattform, auf der wirklich gearbeitet wird',
      en: 'A learning platform where people actually work',
      tr: 'Gerçekten çalışılan bir öğrenme platformu',
    },
    description: {
      de: 'Softwaretesten lernt man nicht aus Folien. Auf DiTeLe testen Lernende an laufenden Anwendungen, schreiben echte Fehlerberichte und bekommen sie von Trainern bewertet. Drei Rollen mit getrennten Rechten, abgesichert in der Datenbank statt in der Oberfläche — bei einer Plattform, auf der Menschen das Prüfen lernen, wäre alles andere peinlich.',
      en: 'You do not learn software testing from slides. On DiTeLe, learners test running applications, write real defect reports and have trainers review them. Three roles with separated rights, enforced in the database rather than the interface — on a platform where people learn to test, anything else would be embarrassing.',
      tr: 'Yazılım testi slaytlardan öğrenilmez. DiTeLe’de öğrenciler çalışan uygulamaları test eder, gerçek hata raporları yazar ve bunlar eğitmenlerce değerlendirilir. Ayrı yetkilere sahip üç rol, arayüzde değil veritabanında güvence altına alınmıştır — insanların test etmeyi öğrendiği bir platformda başka türlüsü utanç verici olurdu.',
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
      de: 'Von der Unternehmensanalyse über Anforderungserfassung und Prozessabstimmung bis zu Design, Test und Einführung: WAMOCON baut Systeme für Unternehmensprozesse. DSGVO-konform, aus Eschborn bei Frankfurt.',
      en: 'From business analysis through requirements and process alignment to design, testing and rollout: WAMOCON builds systems for business processes. GDPR-compliant, from Eschborn near Frankfurt.',
      tr: 'Kurumsal analizden gereksinim tespiti ve süreç mutabakatına, tasarımdan teste ve devreye almaya: WAMOCON, kurumsal süreçler için sistemler geliştirir. GDPR uyumlu, Frankfurt yakınlarındaki Eschborn’dan.',
    },
  },

  /** Attention: a scene the reader recognises, not a claim about us. */
  hero: {
    eyebrow: { de: 'WAMOCON Unternehmenssysteme', en: 'WAMOCON business systems', tr: 'WAMOCON kurumsal sistemler' },
    title: {
      de: 'Ihr Betrieb läuft. Nur weiß niemand genau, wie.',
      en: 'Your operation runs. Nobody knows exactly how.',
      tr: 'İşletmeniz yürüyor. Ama tam olarak nasıl, kimse bilmiyor.',
    },
    lead: {
      de: 'Die Abläufe stehen in keiner Datei. Sie stehen in Excel, in Chatverläufen und in den Köpfen von drei Leuten, die alle gleichzeitig Urlaub nehmen könnten. Wir bauen die Systeme, in denen diese Abläufe endlich einen festen Ort bekommen — und wir fangen nicht mit Software an, sondern damit, Ihnen zuzusehen.',
      en: 'The processes are not written down anywhere. They live in spreadsheets, in chat threads and in the heads of three people who could all take holiday in the same week. We build the systems where those processes finally get a fixed home — and we do not start with software, we start by watching how you work.',
      tr: 'Süreçler hiçbir dosyada yazılı değil. Excel’de, sohbet geçmişlerinde ve aynı hafta izne çıkabilecek üç kişinin aklında duruyorlar. Bu süreçlerin nihayet sabit bir yer bulduğu sistemleri kuruyoruz — ve işe yazılımla değil, sizi izleyerek başlıyoruz.',
    },
    ctaPrimary: { de: 'Erstgespräch vereinbaren', en: 'Arrange a first conversation', tr: 'İlk görüşmeyi ayarlayın' },
    ctaSecondary: { de: 'So arbeiten wir', en: 'How we work', tr: 'Nasıl çalışıyoruz' },
  },

  /**
   * Recognition. Concrete symptoms beat abstract benefits: the reader either
   * nods at one of these or leaves, and both outcomes are useful.
   */
  symptoms: {
    heading: {
      de: 'Fünf Sätze, die zu oft fallen',
      en: 'Five sentences that get said too often',
      tr: 'Fazla sık söylenen beş cümle',
    },
    intro: {
      de: 'Wenn Sie einen davon aus Ihrem eigenen Haus kennen, lohnt sich das Weiterlesen.',
      en: 'If you recognise even one of them from your own company, keep reading.',
      tr: 'Bunlardan birini kendi şirketinizden tanıyorsanız, okumaya devam edin.',
    },
    items: [
      {
        de: '„Das kann nur der Kollege, und der ist bis Montag nicht da."',
        en: '“Only one colleague can do that, and he is back on Monday.”',
        tr: '“Bunu sadece o arkadaş yapabiliyor, pazartesiye kadar da yok.”',
      },
      {
        de: '„Wer hat den Rabatt eigentlich freigegeben?" — und die Antwort steht in einem Chat.',
        en: '“Who actually approved that discount?” — and the answer is in a chat thread.',
        tr: '“Bu indirimi kim onaylamıştı?” — ve cevap bir sohbet penceresinde.',
      },
      {
        de: 'Drei Listen mit denselben Kunden, und keine davon stimmt ganz.',
        en: 'Three lists with the same customers, and not one of them is quite right.',
        tr: 'Aynı müşterileri içeren üç liste ve hiçbiri tam olarak doğru değil.',
      },
      {
        de: 'Neue Mitarbeitende brauchen Wochen, bis sie den Ablauf kennen — weil ihn niemand aufgeschrieben hat.',
        en: 'New hires need weeks to learn the process — because nobody ever wrote it down.',
        tr: 'Yeni çalışanların süreci öğrenmesi haftalar alıyor — çünkü kimse yazmamış.',
      },
      {
        de: 'Einmal im Jahr sucht jemand Belege zusammen, die eigentlich längst beisammen sein müssten.',
        en: 'Once a year somebody hunts down records that should have been together all along.',
        tr: 'Yılda bir kez, çoktan bir arada olması gereken belgeler tek tek aranıyor.',
      },
    ],
    close: {
      de: 'Nichts davon ist Faulheit. So wächst jeder Betrieb, der schneller gewachsen ist als seine Werkzeuge.',
      en: 'None of this is laziness. It is how every company grows when it outgrows its tools.',
      tr: 'Bunların hiçbiri tembellik değil. Araçlarını geride bırakacak kadar hızlı büyüyen her işletme böyle büyür.',
    },
  },

  /** Self-selection. Routing someone away honestly is worth more than a lead. */
  split: {
    heading: {
      de: 'Website oder System? Der Unterschied ist größer, als er klingt',
      en: 'Website or system? The difference is bigger than it sounds',
      tr: 'Web sitesi mi, sistem mi? Fark, kulağa geldiğinden büyük',
    },
    intro: {
      de: 'Beide sind Software, beide laufen im Browser — und trotzdem sind es zwei völlig verschiedene Projekte. Diese Liste sortiert in zehn Sekunden.',
      en: 'Both are software, both run in a browser — and they are still two entirely different projects. This list sorts it in ten seconds.',
      tr: 'İkisi de yazılım, ikisi de tarayıcıda çalışıyor — yine de bunlar tamamen farklı iki proje. Bu liste on saniyede ayırır.',
    },
    website: {
      title: { de: 'Es ist eine Website', en: 'It is a website', tr: 'Bu bir web sitesi' },
      points: [
        { de: 'Fremde sollen Sie finden und sich ein Bild machen', en: 'Strangers should find you and form an impression', tr: 'Sizi tanımayanlar bulup bir izlenim edinmeli' },
        { de: 'Anfragen kommen über ein Formular oder WhatsApp', en: 'Enquiries arrive through a form or WhatsApp', tr: 'Talepler bir form ya da WhatsApp üzerinden geliyor' },
        { de: 'Es gibt keine Anmeldung und keine Rechte', en: 'There is no login and no permissions', tr: 'Giriş de yok, yetki de yok' },
        { de: 'Alle Besucher sehen dasselbe', en: 'Every visitor sees the same thing', tr: 'Her ziyaretçi aynı şeyi görüyor' },
      ],
      cta: { de: 'Dann zu Webdesign', en: 'Then head to web design', tr: 'O hâlde webdesign’a' },
    },
    system: {
      title: { de: 'Es ist ein System', en: 'It is a system', tr: 'Bu bir sistem' },
      points: [
        { de: 'Mehrere Personen arbeiten nacheinander am selben Vorgang', en: 'Several people work on the same case one after another', tr: 'Aynı işlemi birden çok kişi sırayla sürdürüyor' },
        { de: 'Nicht jeder darf alles sehen oder ändern', en: 'Not everyone may see or change everything', tr: 'Herkes her şeyi görmemeli veya değiştirmemeli' },
        { de: 'Später muss nachweisbar sein, wer wann was entschieden hat', en: 'Later you must be able to prove who decided what, and when', tr: 'Sonradan kimin ne zaman neye karar verdiği kanıtlanabilmeli' },
        { de: 'Es gibt Zustände: offen, geprüft, freigegeben, abgerechnet', en: 'There are states: open, reviewed, approved, invoiced', tr: 'Durumlar var: açık, incelendi, onaylandı, faturalandı' },
      ],
      cta: { de: 'Weiterlesen', en: 'Keep reading', tr: 'Okumaya devam' },
    },
    both: {
      de: 'Oft ist es beides, und dann ist die Reihenfolge egal. Für Ataberk Estate haben wir zuerst die Website gebaut und ein halbes Jahr später das System dahinter. Beides finden Sie weiter unten.',
      en: 'Often it is both, and then the order does not matter. For Ataberk Estate we built the website first and the system behind it half a year later. You will find both below.',
      tr: 'Çoğu zaman her ikisi de gerekir ve sıra fark etmez. Ataberk Estate için önce web sitesini, yarım yıl sonra da arkasındaki sistemi geliştirdik. İkisini de aşağıda bulacaksınız.',
    },
  },

  /** Proof the reader can verify without asking us anything. */
  portfolio: {
    heading: { de: 'Zwei Systeme, die Sie aufmachen können', en: 'Two systems you can open right now', tr: 'Hemen açabileceğiniz iki sistem' },
    intro: {
      de: 'Beide laufen produktiv. Klicken Sie hinein, statt uns zu glauben — Referenzen, die man nicht anfassen kann, sind keine.',
      en: 'Both run in production. Click into them rather than taking our word for it — a reference you cannot touch is not a reference.',
      tr: 'İkisi de üretimde çalışıyor. Bize inanmak yerine içine girin — dokunamadığınız bir referans, referans değildir.',
    },
    live: { de: 'System öffnen', en: 'Open the system', tr: 'Sistemi aç' },
    featuredLabel: { de: 'Referenzsystem', en: 'Reference system', tr: 'Referans sistem' },
    clientLabel: { de: 'Gebaut für', en: 'Built for', tr: 'Şunun için geliştirildi' },
  },

  /**
   * The heart of the page. Every discipline that goes into a project, named,
   * with the result the client physically receives at the end of each phase.
   * This is what a price is made of, which is why it can stand in for one.
   */
  process: {
    heading: { de: 'So entsteht ein System bei uns', en: 'How a system comes about with us', tr: 'Bizde bir sistem böyle doğar' },
    intro: {
      de: 'Sechs Phasen. Jede endet mit etwas, das Sie in der Hand halten — kein Zwischenstand, den nur wir verstehen. Nach Phase zwei können Sie aussteigen und alles behalten.',
      en: 'Six phases. Each ends with something you can hold — not an interim state only we understand. After phase two you may walk away and keep everything.',
      tr: 'Altı aşama. Her biri elinizde tutabileceğiniz bir çıktıyla biter — yalnızca bizim anladığımız bir ara durumla değil. İkinci aşamadan sonra çıkıp her şeyi alıkoyabilirsiniz.',
    },
    steps: [
      {
        title: { de: 'Zuhören', en: 'Listening', tr: 'Dinleme' },
        disciplines: {
          de: 'Erstgespräch · Unternehmensanalyse · Prozessaufnahme',
          en: 'First conversation · business analysis · process capture',
          tr: 'İlk görüşme · kurumsal analiz · süreç tespiti',
        },
        text: {
          de: 'Wir kommen vorbei und sehen zu, wie heute gearbeitet wird. Nicht wie es im Organigramm steht, sondern wie es tatsächlich läuft — inklusive der Umwege, die sich jemand vor Jahren ausgedacht hat, weil das System es nicht anders hergab.',
          en: 'We come by and watch how the work is done today. Not how the org chart describes it, but how it actually runs — including the detours somebody invented years ago because the system left no other way.',
          tr: 'Gelip bugün nasıl çalışıldığını izliyoruz. Organizasyon şemasındaki hâliyle değil, gerçekte nasıl yürüdüğüyle — sistem başka yol bırakmadığı için yıllar önce birinin bulduğu kestirmeler dâhil.',
        },
        result: { de: 'Prozesslandkarte Ihres Ist-Zustands', en: 'A process map of how things stand today', tr: 'Mevcut durumunuzun süreç haritası' },
      },
      {
        title: { de: 'Aufschreiben', en: 'Writing it down', tr: 'Yazıya dökme' },
        disciplines: {
          de: 'Anforderungserfassung · Dokumentation · Priorisierung',
          en: 'Requirements capture · documentation · prioritisation',
          tr: 'Gereksinim tespiti · dokümantasyon · önceliklendirme',
        },
        text: {
          de: 'Aus dem Gesehenen wird ein Anforderungsdokument: was das System können muss, was es ausdrücklich nicht können soll, und in welcher Reihenfolge. Das Dokument gehört Ihnen — auch wenn Sie damit anschließend zu jemand anderem gehen.',
          en: 'What we saw becomes a requirements document: what the system must do, what it explicitly should not do, and in which order. The document is yours — even if you take it to somebody else afterwards.',
          tr: 'Görülenler bir gereksinim dokümanına dönüşür: sistemin ne yapması gerektiği, açıkça neyi yapmaması gerektiği ve hangi sırayla. Belge sizindir — sonrasında onunla başka birine gitseniz bile.',
        },
        result: { de: 'Anforderungsdokument, freigegeben von Ihnen', en: 'A requirements document, signed off by you', tr: 'Sizin onayladığınız gereksinim dokümanı' },
      },
      {
        title: { de: 'Abstimmen', en: 'Aligning', tr: 'Mutabakat' },
        disciplines: {
          de: 'Prozessabstimmung · Rollen- und Rechtekonzept · Schnittstellen',
          en: 'Process alignment · roles and permissions · interfaces',
          tr: 'Süreç mutabakatı · rol ve yetki tasarımı · arayüzler',
        },
        text: {
          de: 'Jetzt geht es an die unbequeme Frage: Welcher Ablauf bleibt, welcher fällt weg, welcher wird anders? Wir gehen jeden Schritt mit Ihnen durch und legen fest, wer was sehen und ändern darf. Ein System zementiert Ihre Prozesse — deshalb schauen wir vorher genau hin.',
          en: 'Now comes the uncomfortable question: which workflow stays, which goes, which changes? We walk through every step with you and define who may see and change what. A system sets your processes in concrete — which is why we look closely first.',
          tr: 'Şimdi rahatsız edici soruya geliyoruz: hangi akış kalacak, hangisi kalkacak, hangisi değişecek? Her adımı sizinle birlikte geçiyor ve kimin neyi görüp değiştirebileceğini belirliyoruz. Bir sistem süreçlerinizi betonlaştırır — bu yüzden önceden dikkatle bakıyoruz.',
        },
        result: { de: 'Abgestimmte Soll-Prozesse und eine Rollenmatrix', en: 'Agreed target processes and a role matrix', tr: 'Üzerinde anlaşılan hedef süreçler ve bir rol matrisi' },
      },
      {
        title: { de: 'Zeigen', en: 'Showing', tr: 'Gösterme' },
        disciplines: {
          de: 'Designabstimmung · klickbarer Prototyp · Barrierefreiheit',
          en: 'Design alignment · clickable prototype · accessibility',
          tr: 'Tasarım mutabakatı · tıklanabilir prototip · erişilebilirlik',
        },
        text: {
          de: 'Bevor eine Zeile Code entsteht, klicken Sie durch Ihr System. Echte Screens, echte Wege, die Begriffe aus Ihrem Haus statt aus einem Lehrbuch. Änderungen kosten hier Minuten — später kosten sie Tage.',
          en: 'Before a single line of code exists, you click through your system. Real screens, real paths, the vocabulary of your company rather than a textbook. Changes cost minutes at this stage — later they cost days.',
          tr: 'Tek satır kod yazılmadan önce sisteminizi tıklayarak geziyorsunuz. Gerçek ekranlar, gerçek yollar ve ders kitabının değil sizin şirketinizin terimleri. Bu aşamada değişiklikler dakikalar sürer — sonra günler.',
        },
        result: { de: 'Klickbarer Entwurf, von Ihnen abgenommen', en: 'A clickable design, accepted by you', tr: 'Sizin kabul ettiğiniz tıklanabilir tasarım' },
      },
      {
        title: { de: 'Bauen und prüfen', en: 'Building and testing', tr: 'Yapım ve test' },
        disciplines: {
          de: 'Entwicklung in Schnitten · Testmanagement · Abnahme',
          en: 'Development in slices · test management · acceptance',
          tr: 'Dilimler hâlinde geliştirme · test yönetimi · kabul',
        },
        text: {
          de: 'Wir bauen in Schnitten: ein schmaler, aber vollständiger Ausschnitt geht live, Sie arbeiten damit, dann kommt der nächste. Geprüft wird nach denselben Regeln, nach denen wir sonst die Software anderer prüfen — Testmanagement ist das Geschäft, aus dem WAMOCON kommt.',
          en: 'We build in slices: one narrow but complete section goes live, you work with it, then the next one follows. Testing runs by the same rules we apply when auditing other people’s software — test management is the business WAMOCON came from.',
          tr: 'Dilimler hâlinde inşa ediyoruz: dar ama eksiksiz bir bölüm yayına giriyor, siz onunla çalışıyorsunuz, sonra bir sonraki geliyor. Test, başkalarının yazılımını denetlerken uyguladığımız kurallarla yapılır — test yönetimi, WAMOCON’un geldiği alandır.',
        },
        result: { de: 'Abgenommener Funktionsumfang je Meilenstein', en: 'An accepted scope at each milestone', tr: 'Her kilometre taşında kabul edilmiş kapsam' },
      },
      {
        title: { de: 'Einführen', en: 'Rolling out', tr: 'Devreye alma' },
        disciplines: {
          de: 'Datenübernahme · Schulung · Handbuch · Betrieb',
          en: 'Data migration · training · manual · operation',
          tr: 'Veri aktarımı · eğitim · el kitabı · işletim',
        },
        text: {
          de: 'Die Altdaten kommen mit, auch die aus Excel. Ihr Team wird geschult, nicht informiert — der Unterschied entscheidet, ob ein System benutzt oder umgangen wird. Danach übernehmen wir Betrieb, Sicherung und Weiterentwicklung, mit Reaktionszeiten, die im Vertrag stehen.',
          en: 'The legacy data comes along, spreadsheets included. Your team is trained, not merely informed — that difference decides whether a system gets used or worked around. After that we take over operation, backups and further development, with response times written into the contract.',
          tr: 'Eski veriler de taşınır, Excel’dekiler dâhil. Ekibiniz bilgilendirilmez, eğitilir — bu fark, bir sistemin kullanılacağını mı yoksa etrafından dolaşılacağını mı belirler. Sonrasında işletimi, yedeklemeyi ve geliştirmeyi biz üstleniriz; yanıt süreleri sözleşmede yazar.',
        },
        result: { de: 'Ein System, mit dem Ihr Team arbeitet', en: 'A system your team actually works in', tr: 'Ekibinizin gerçekten çalıştığı bir sistem' },
      },
    ],
    resultLabel: { de: 'Sie bekommen', en: 'You receive', tr: 'Elde ettiğiniz' },
  },

  /** Desire: the parts, described by what they prevent rather than what they are. */
  capabilities: {
    heading: { de: 'Was in jedem System steckt', en: 'What sits inside every system', tr: 'Her sistemde ne var' },
    intro: {
      de: 'Kein Baukasten und kein Standardprodukt mit Ihrem Logo darauf. Diese sechs Dinge bekommt jedes System von uns, der Rest richtet sich nach Ihrem Betrieb.',
      en: 'No kit, and no standard product with your logo on it. Every system of ours gets these six things; the rest follows your operation.',
      tr: 'Hazır bir kutu ya da logonuzun konduğu standart bir ürün değil. Bizden çıkan her sistem bu altı şeyi alır; gerisi işletmenize göre şekillenir.',
    },
    items: [
      {
        title: { de: 'Rollen und Rechte', en: 'Roles and rights', tr: 'Roller ve yetkiler' },
        text: {
          de: 'Wer was sieht, entscheidet die Datenbank — nicht die Oberfläche. Damit gibt auch ein Fehler im Frontend keine fremden Daten preis.',
          en: 'Who sees what is decided by the database, not the interface. So even a bug in the front end cannot leak somebody else’s data.',
          tr: 'Kimin neyi göreceğine arayüz değil, veritabanı karar verir. Böylece önyüzdeki bir hata bile başkasının verisini sızdıramaz.',
        },
      },
      {
        title: { de: 'Abläufe mit festen Zuständen', en: 'Workflows with defined states', tr: 'Tanımlı durumlara sahip iş akışları' },
        text: {
          de: 'Ein Vorgang hat einen Zustand und erlaubte Übergänge. Eine Freigabe lässt sich nicht überspringen, nur weil gerade jemand fehlt.',
          en: 'A case has a state and permitted transitions. An approval cannot be skipped just because somebody is away.',
          tr: 'Bir işlemin durumu ve izin verilen geçişleri vardır. Biri yok diye bir onay atlanamaz.',
        },
      },
      {
        title: { de: 'Nachweiskette', en: 'Audit trail', tr: 'Kanıt zinciri' },
        text: {
          de: 'Jede Änderung trägt Person, Zeitpunkt und Vorzustand. Sie brauchen das nicht im Alltag — Sie brauchen es an dem einen Tag, an dem jemand fragt.',
          en: 'Every change carries the person, the time and the prior state. You do not need it day to day — you need it on the one day somebody asks.',
          tr: 'Her değişiklik kişi, zaman ve önceki durumu taşır. Buna günlük işte değil, birinin sorduğu o tek günde ihtiyacınız olur.',
        },
      },
      {
        title: { de: 'Schnittstellen statt Insel', en: 'Interfaces, not an island', tr: 'Ada değil, arayüz' },
        text: {
          de: 'Buchhaltung, Kalender, Ticketsystem, Zahlungsdienst. Ein System, das nichts anbinden kann, wird zur nächsten Excel-Datei.',
          en: 'Accounting, calendar, ticketing, payment provider. A system that connects to nothing becomes the next spreadsheet.',
          tr: 'Muhasebe, takvim, çağrı sistemi, ödeme sağlayıcı. Hiçbir şeye bağlanamayan bir sistem, bir sonraki Excel dosyası olur.',
        },
      },
      {
        title: { de: 'KI mit Leitplanken', en: 'AI with guardrails', tr: 'Sınırları belirlenmiş yapay zekâ' },
        text: {
          de: 'Assistenten, die aus Ihren eigenen Inhalten antworten und sonst schweigen. Kein Modell, das sich etwas ausdenkt, wenn es die Antwort nicht kennt.',
          en: 'Assistants that answer from your own content and otherwise stay quiet. No model that makes something up when it does not know.',
          tr: 'Kendi içeriğinizden yanıt veren, aksi hâlde susan asistanlar. Bilmediğinde uyduran bir model yok.',
        },
      },
      {
        title: { de: 'Zahlen, die stimmen', en: 'Figures that hold up', tr: 'Doğru çıkan sayılar' },
        text: {
          de: 'Kennzahlen aus echten Daten statt aus Behauptungen. Wo eine Zahl noch nicht berechnet werden kann, sagt die Kachel genau das, statt zu schätzen.',
          en: 'Metrics from real data instead of claims. Where a figure cannot be computed yet, the tile says exactly that instead of guessing.',
          tr: 'İddialardan değil, gerçek veriden gelen göstergeler. Bir sayı henüz hesaplanamıyorsa, kutucuk tahmin yürütmez, bunu açıkça söyler.',
        },
      },
    ],
  },

  /** Authority — plus one honest limitation, which is what makes it credible. */
  why: {
    heading: { de: 'Warum ausgerechnet wir', en: 'Why us in particular', tr: 'Neden özellikle biz' },
    items: [
      {
        title: { de: 'Wir kommen vom Prüfen, nicht vom Bauen', en: 'We come from testing, not from building', tr: 'Yapmaktan değil, denetlemekten geliyoruz' },
        text: {
          de: 'WAMOCON prüft seit Jahren die Software anderer Unternehmen — im Testmanagement, nach ISTQB. Wer den ganzen Tag sieht, woran Projekte scheitern, baut anders. Vorsichtiger, und mit mehr Nachweis.',
          en: 'WAMOCON has spent years testing other companies’ software — in test management, to ISTQB standards. When you spend your days seeing why projects fail, you build differently. More carefully, and with more evidence.',
          tr: 'WAMOCON yıllardır başka şirketlerin yazılımlarını denetliyor — test yönetiminde, ISTQB standartlarına göre. Projelerin neden battığını her gün gören biri, başka türlü inşa eder. Daha temkinli ve daha fazla kanıtla.',
        },
      },
      {
        title: { de: 'Ein Ansprechpartner, kein Ticketsystem', en: 'One person, not a ticket queue', tr: 'Bir muhatap, çağrı kuyruğu değil' },
        text: {
          de: 'Sie sprechen mit den Leuten, die Ihr System auch bauen. Bei einem Haus unserer Größe geht das — und es erspart Ihnen die Übersetzungsschicht zwischen Vertrieb und Entwicklung.',
          en: 'You talk to the people who actually build your system. At a firm our size that works — and it spares you the translation layer between sales and development.',
          tr: 'Sisteminizi gerçekten kuran kişilerle konuşuyorsunuz. Bizim büyüklüğümüzde bir şirkette bu mümkün — ve satışla geliştirme arasındaki çeviri katmanından kurtulursunuz.',
        },
      },
      {
        title: { de: 'Deutscher Vertragspartner, EU-Datenhaltung', en: 'A German contracting party, EU data', tr: 'Alman sözleşme tarafı, AB’de veri' },
        text: {
          de: 'WAMOCON GmbH sitzt in Eschborn bei Frankfurt. Auftragsverarbeitungsvertrag nach DSGVO, Server in der EU, deutscher Gerichtsstand. Nichts davon ist ein Verkaufsargument — es ist die Voraussetzung dafür, dass Sie überhaupt unterschreiben können.',
          en: 'WAMOCON GmbH sits in Eschborn near Frankfurt. GDPR data-processing agreement, servers in the EU, German place of jurisdiction. None of that is a selling point — it is the precondition for you being able to sign at all.',
          tr: 'WAMOCON GmbH, Frankfurt yakınlarındaki Eschborn’da bulunuyor. GDPR uyarınca veri işleme sözleşmesi, AB’de sunucular, Alman yetkili mahkemesi. Bunların hiçbiri satış argümanı değil — imza atabilmenizin ön koşulu.',
        },
      },
      {
        title: { de: 'Wir sagen auch ab', en: 'We also say no', tr: 'Hayır da diyoruz' },
        text: {
          de: 'Nicht jeder Betrieb braucht ein eigenes System. Manchmal reicht ein Standardprodukt, manchmal genügt es, drei Tabellen zusammenzulegen. Wenn wir das sehen, sagen wir es Ihnen — lieber ein ehrliches Nein als ein Projekt, das keiner benutzt.',
          en: 'Not every company needs a system of its own. Sometimes an off-the-shelf product is enough, sometimes merging three spreadsheets does the job. When we see that, we say so — an honest no beats a project nobody uses.',
          tr: 'Her işletmenin kendi sistemine ihtiyacı yoktur. Bazen hazır bir ürün yeter, bazen üç tabloyu birleştirmek. Bunu gördüğümüzde söyleriz — kimsenin kullanmadığı bir projeden, dürüst bir hayır iyidir.',
        },
      },
    ],
  },

  /** Risk reversal through binding commitments rather than a stack of promises. */
  commitment: {
    heading: { de: 'Woran Sie uns festhalten können', en: 'What you can hold us to', tr: 'Bizi neye bağlayabilirsiniz' },
    intro: {
      de: 'Versprechen kosten nichts. Diese fünf Punkte stehen im Vertrag und haben Folgen, wenn wir sie verfehlen.',
      en: 'Promises are free. These five sit in the contract and carry consequences if we miss them.',
      tr: 'Söz vermek bedava. Bu beş madde sözleşmede yer alır ve tutturamazsak sonucu olur.',
    },
    points: [
      {
        de: 'Abnahmekriterien stehen fest, bevor gebaut wird — nicht danach.',
        en: 'Acceptance criteria are fixed before we build, not afterwards.',
        tr: 'Kabul kriterleri yapımdan önce belirlenir, sonrasında değil.',
      },
      {
        de: 'Zahlung je Meilenstein nach Abnahme. Keine Vorkasse.',
        en: 'Payment per milestone after acceptance. No advance payment.',
        tr: 'Kabul sonrası kilometre taşı başına ödeme. Peşin ödeme yok.',
      },
      {
        de: 'Reaktionszeiten im Support sind vereinbart, mit Gutschrift bei Verfehlung.',
        en: 'Support response times are agreed, with a credit if we miss them.',
        tr: 'Destek yanıt süreleri kararlaştırılır; tutturulmazsa alacak kaydı yapılır.',
      },
      {
        de: 'Quellcode und Daten gehören Ihnen. Eine Ausstiegsklausel regelt die Herausgabe, auch im Streit.',
        en: 'Source code and data are yours. An exit clause governs handover, including in a dispute.',
        tr: 'Kaynak kod ve veri sizindir. Bir çıkış maddesi, ihtilafta da teslimi düzenler.',
      },
      {
        de: 'Auftragsverarbeitungsvertrag nach DSGVO, Server in der EU.',
        en: 'GDPR data-processing agreement, servers in the EU.',
        tr: 'GDPR uyarınca veri işleme sözleşmesi, AB’de sunucular.',
      },
    ],
  },

  /** One small, unambiguous first step. */
  firstStep: {
    heading: { de: 'Der erste Schritt kostet Sie eine Stunde', en: 'The first step costs you an hour', tr: 'İlk adım size bir saate mal olur' },
    text: {
      de: 'Erzählen Sie uns in einem Gespräch, wo es heute hakt. Wir hören zu, stellen Fragen und sagen Ihnen danach ehrlich, ob sich ein eigenes System lohnt — oder ob es etwas Einfacheres auch tut. Kein Angebot im Anhang, keine Verkaufspräsentation.',
      en: 'Tell us in one conversation where things snag today. We listen, we ask, and afterwards we tell you honestly whether a system of your own is worth it — or whether something simpler will do. No quote attached, no sales deck.',
      tr: 'Bir görüşmede bugün nerede takıldığını anlatın. Dinleriz, sorular sorarız ve ardından kendi sisteminizin değip değmeyeceğini ya da daha basit bir şeyin iş görüp görmeyeceğini dürüstçe söyleriz. Ekte teklif yok, satış sunumu yok.',
    },
    cta: { de: 'Gespräch vereinbaren', en: 'Arrange the conversation', tr: 'Görüşmeyi ayarlayın' },
  },

  /** Cross-link, written as guidance rather than navigation. */
  crosslink: {
    heading: { de: 'Und wenn es doch eine Website ist', en: 'And if it turns out to be a website', tr: 'Ya sonuçta bir web sitesiyse' },
    text: {
      de: 'Dann sind Sie eine Abteilung zu weit gegangen. Unsere Webdesign-Abteilung baut mehrsprachige Auftritte mit Buchung, KI-Assistent und Suchmaschinen-Sichtbarkeit — für Kunden vom Barbier in Alanya bis zum Prüfdienstleister im Rhein-Main-Gebiet.',
      en: 'Then you have gone one department too far. Our web-design team builds multilingual sites with booking, an AI assistant and search visibility — for clients from a barber in Alanya to a safety-testing provider in the Rhine-Main region.',
      tr: 'O hâlde bir birim ileri gitmişsiniz. Web tasarım birimimiz; randevu, yapay zekâ asistanı ve arama görünürlüğü içeren çok dilli siteler yapıyor — Alanya’daki bir berberden Rhein-Main bölgesindeki bir denetim firmasına kadar.',
    },
    cta: { de: 'Zur Webdesign-Abteilung', en: 'To the web-design department', tr: 'Web tasarım birimine' },
  },
} as const;
