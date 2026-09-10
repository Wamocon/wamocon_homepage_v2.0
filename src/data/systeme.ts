/**
 * Content for the business-systems page (/unternehmenssysteme/).
 *
 * The dividing line against /webdesign/: a website presents a company to the
 * outside, a system runs it on the inside. Everything here has roles, rights,
 * workflows and an audit trail. Products anyone can sign up for live on /apps/.
 *
 * No prices on this page, on purpose. A system's price follows its scope, and
 * a number without a scope invites the reader to hunt for the catch rather
 * than read the offer. What replaces the number is the work itself: the six
 * phases below name every discipline that goes into a project, which is what
 * actually justifies a price once we quote one — and the first FAQ answer says
 * so in as many words, which is where a reader looking for the price lands.
 * (The longer market analysis behind this lives on the unmerged branch
 * `webdesign_marketing_0926`, not on main.)
 *
 * Nor are there figures of any other kind: no conversion rates, no savings, no
 * client operating numbers. Everything asserted here is either verifiable by
 * opening one of the two systems below or written into a contract.
 *
 * The section order follows how somebody decides, not how we like to present:
 * recognition (do I have this problem?) → self-selection (website or system?)
 * → the layers a system is made of → proof they can click → what it plugs into
 * → how we work → who we are → what binds us → the objections → one small
 * first step.
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
    label: { de: 'Immobilien & Verwaltung', en: 'Property & administration', tr: 'Gayrimenkul ve yönetim', kk: 'Жылжымайтын мүлік және басқару' },
  },
  {
    key: 'bildung',
    label: { de: 'Bildung & Qualifizierung', en: 'Education & training', tr: 'Eğitim ve nitelik kazandırma', kk: 'Білім беру және біліктілік' },
  },
];

export const systems: SystemProject[] = [
  {
    name: '1Çatı ERP',
    domain: 'immobilien',
    client: { de: 'Ataberk Estate, Alanya', en: 'Ataberk Estate, Alanya', tr: 'Ataberk Estate, Alanya', kk: 'Ataberk Estate, Alanya' },
    image: '/images/webdesign/cati-erp.webp',
    url: 'https://cati-blond.vercel.app',
    featured: true,
    tagline: {
      de: 'Ein Maklerhaus, ein Arbeitsbereich',
      en: 'One estate agency, one workspace',
      tr: 'Tek emlak ofisi, tek çalışma alanı',
      kk: 'Бір жылжымайтын мүлік агенттігі, бір жұмыс кеңістігі',
    },
    description: {
      de: 'Ein Maklerhaus mit jahrelanger Verkaufshistorie — und einem Überblick, der in getrennten Listen lag: Vertrieb hier, Objekte dort, Eigentümer im Ordner nebenan. Heute liegt alles in einem Arbeitsbereich, und wer welchen Datensatz sieht, entscheidet die Rolle — nicht die Absprache im Flur. Die öffentliche Website desselben Hauses stammt ebenfalls von uns.',
      en: 'An estate agency with years of sales behind it — and an overview that lived in separate lists: sales here, properties there, owners in the folder next door. Today it all sits in one workspace, and who sees which record is decided by the role — not by an agreement in the corridor. The same firm’s public website came from us too.',
      tr: 'Yıllara dayanan bir satış geçmişi olan bir emlak ofisi — ve ayrı listelerde duran bir genel görünüm: satış burada, portföy şurada, malikler yan klasörde. Bugün hepsi tek bir çalışma alanında ve hangi kaydı kimin göreceğine koridordaki mutabakat değil, rol karar veriyor. Aynı şirketin web sitesi de bizden.',
      kk: 'Жылдар бойғы сатылым тарихы бар жылжымайтын мүлік агенттігі — ал жалпы көрініс бөлек-бөлек тізімде жатты: сатылым мұнда, нысандар анда, меншік иелері көрші қалтада. Бүгін бәрі бір жұмыс кеңістігінде, ал қай жазбаны кімнің көретінін дәлізде айтылған келісім емес, рөл шешеді. Дәл сол компанияның ашық сайты да біздің қолымыздан шыққан.',
    },
    capabilities: [
      { de: 'Vertrieb und Portfolio in einem Bestand', en: 'Sales and portfolio in one record set', tr: 'Satış ve portföy tek veri kümesinde', kk: 'Сатылым мен портфель бір деректер жиынында' },
      { de: 'Eigentümer, Mieter, Beiträge, Service', en: 'Owners, tenants, dues, service', tr: 'Malik, kiracı, aidat, servis', kk: 'Меншік иесі, жалдаушы, жарна, сервис' },
      { de: 'Dokumente mit Nachweiskette', en: 'Documents with an audit trail', tr: 'Kanıt zinciriyle dokümanlar', kk: 'Дәлел тізбегімен қоса құжаттар' },
      { de: 'Eigenes Kundenportal, mehrsprachig', en: 'Its own customer portal, multilingual', tr: 'Kendi müşteri portalı, çok dilli', kk: 'Өз клиент порталы, көп тілде' },
    ],
  },
  {
    name: 'DiTeLe',
    domain: 'bildung',
    client: { de: 'WAMOCON Academy GmbH', en: 'WAMOCON Academy GmbH', tr: 'WAMOCON Academy GmbH', kk: 'WAMOCON Academy GmbH' },
    image: '/images/webdesign/ditele.webp',
    // The platform's own domain, not the deployment preview it used to point
    // at. No language path: DiTeLe picks the language itself, and hard-coding
    // /de would hand a Turkish or Kazakh reader the wrong one.
    url: 'https://www.ditele.de/',
    tagline: {
      de: 'Eine Lernplattform, auf der wirklich gearbeitet wird',
      en: 'A learning platform where people actually work',
      tr: 'Gerçekten çalışılan bir öğrenme platformu',
      kk: 'Шынымен жұмыс істейтін оқыту платформасы',
    },
    description: {
      de: 'Softwaretesten lernt man nicht aus Folien. Auf DiTeLe testen Lernende an laufenden Anwendungen, schreiben echte Fehlerberichte und bekommen sie von Trainern bewertet. Drei Rollen mit getrennten Rechten, abgesichert in der Datenbank statt in der Oberfläche — bei einer Plattform, auf der Menschen das Prüfen lernen, wäre alles andere peinlich.',
      en: 'You do not learn software testing from slides. On DiTeLe, learners test running applications, write real defect reports and have trainers review them. Three roles with separated rights, enforced in the database rather than the interface — on a platform where people learn to test, anything else would be embarrassing.',
      tr: 'Yazılım testi slaytlardan öğrenilmez. DiTeLe’de öğrenciler çalışan uygulamaları test eder, gerçek hata raporları yazar ve bunlar eğitmenlerce değerlendirilir. Ayrı yetkilere sahip üç rol, arayüzde değil veritabanında güvence altına alınmıştır — insanların test etmeyi öğrendiği bir platformda başka türlüsü utanç verici olurdu.',
      kk: 'Бағдарлама тестілеуді слайдтан үйренбейді. DiTeLe-де үйренушілер жұмыс істеп тұрған қосымшаны тестілейді, нағыз ақау есептерін жазады және оны тренерлер бағалайды. Бөлек құқығы бар үш рөл интерфейсте емес, дерекқорда бекітілген, өйткені адамдар тексеруді үйренетін платформада басқаша болуы ұят болар еді.',
    },
    capabilities: [
      { de: 'Rollen für Lernende, Trainer, Verwaltung', en: 'Roles for learners, trainers, administration', tr: 'Öğrenci, eğitmen ve yönetim rolleri', kk: 'Үйренушіге, тренерге және әкімшілікке арналған рөлдер' },
      { de: 'Aufgaben, Einreichung, Bewertung', en: 'Tasks, submission, review', tr: 'Görev, teslim, değerlendirme', kk: 'Тапсырма, тапсыру, бағалау' },
      { de: 'KI-Assistent mit festen Leitplanken', en: 'An AI assistant with fixed guardrails', tr: 'Sınırları belirlenmiş yapay zekâ asistanı', kk: 'Шегі айқын белгіленген ЖИ көмекшісі' },
      { de: 'Drei Sprachen, helle und dunkle Ansicht', en: 'Three languages, light and dark', tr: 'Üç dil, açık ve koyu görünüm', kk: 'Үш тіл, ашық және күңгірт көрініс' },
    ],
  },
];

export const systeme = {
  seo: {
    title: {
      de: 'Unternehmenssysteme | WAMOCON – Software, die Ihren Betrieb führt',
      en: 'Business systems | WAMOCON – software that runs your operation',
      tr: 'Kurumsal sistemler | WAMOCON – işletmenizi yürüten yazılım',
      kk: 'Кәсіпорын жүйелері | WAMOCON: кәсібіңізді жүргізетін бағдарлама',
    },
    description: {
      de: 'Von der Unternehmensanalyse über Anforderungserfassung und Prozessabstimmung bis zu Design, Test und Einführung: WAMOCON baut Systeme für Unternehmensprozesse. DSGVO-konform, aus Eschborn bei Frankfurt.',
      en: 'From business analysis through requirements and process alignment to design, testing and rollout: WAMOCON builds systems for business processes. GDPR-compliant, from Eschborn near Frankfurt.',
      tr: 'Kurumsal analizden gereksinim tespiti ve süreç mutabakatına, tasarımdan teste ve devreye almaya: WAMOCON, kurumsal süreçler için sistemler geliştirir. GDPR uyumlu, Frankfurt yakınlarındaki Eschborn’dan.',
      kk: 'Кәсіпорынды талдаудан бастап талаптарды жинауға және үдерісті келісуге, одан дизайн, тестілеу және енгізуге дейін: WAMOCON кәсіпорын үдерістеріне арналған жүйе жасайды. GDPR талаптарына сай, Франкфурт маңындағы Эшборннан.',
    },
  },

  /** Attention: a scene the reader recognises, not a claim about us. */
  hero: {
    eyebrow: { de: 'WAMOCON Unternehmenssysteme', en: 'WAMOCON business systems', tr: 'WAMOCON kurumsal sistemler', kk: 'WAMOCON кәсіпорын жүйелері' },
    /**
     * The headline is split so the second sentence — the one that actually
     * stings — can carry the accent colour. Two spans, one sentence each; the
     * page never renders them apart.
     */
    title: {
      de: 'Ihr Betrieb läuft.',
      en: 'Your operation runs.',
      tr: 'İşletmeniz yürüyor.',
      kk: 'Кәсібіңіз жүріп жатыр.',
    },
    titleAccent: {
      de: 'Nur weiß niemand genau, wie.',
      en: 'Nobody knows exactly how.',
      tr: 'Ama tam olarak nasıl, kimse bilmiyor.',
      kk: 'Тек оның қалай жүретінін ешкім нақты білмейді.',
    },
    lead: {
      de: 'Die Abläufe stehen in keiner Datei. Sie stehen in Excel, in Chatverläufen und in den Köpfen von drei Leuten, die alle gleichzeitig Urlaub nehmen könnten. Wir bauen die Systeme, in denen diese Abläufe endlich einen festen Ort bekommen — und wir fangen nicht mit Software an, sondern damit, Ihnen zuzusehen.',
      en: 'The processes are not written down anywhere. They live in spreadsheets, in chat threads and in the heads of three people who could all take holiday in the same week. We build the systems where those processes finally get a fixed home — and we do not start with software, we start by watching how you work.',
      tr: 'Süreçler hiçbir dosyada yazılı değil. Excel’de, sohbet geçmişlerinde ve aynı hafta izne çıkabilecek üç kişinin aklında duruyorlar. Bu süreçlerin nihayet sabit bir yer bulduğu sistemleri kuruyoruz — ve işe yazılımla değil, sizi izleyerek başlıyoruz.',
      kk: 'Үдерістер ешбір файлда жазылмаған. Олар Excel-де, чат жазбаларында және бір аптада бірге демалысқа кете алатын үш адамның есінде жүр. Біз сол үдерістер ақыры тұрақты орын табатын жүйелерді құрамыз, әрі жұмысты бағдарламадан емес, сіздің қалай жұмыс істейтініңізді бақылаудан бастаймыз.',
    },
    ctaPrimary: { de: 'Erstgespräch vereinbaren', en: 'Arrange a first conversation', tr: 'İlk görüşmeyi ayarlayın', kk: 'Алғашқы кездесуді жоспарлау' },
    ctaSecondary: { de: 'So arbeiten wir', en: 'How we work', tr: 'Nasıl çalışıyoruz', kk: 'Біз осылай жұмыс істейміз' },
    /**
     * Four conditions a buyer checks before anything else. They belong above
     * the fold because each one is a reason a procurement department stops
     * reading, and none of them is a claim about quality — they are facts
     * about the contract, verifiable before a single line is written.
     */
    chips: [
      { de: 'DSGVO · AVV', en: 'GDPR · DPA', tr: 'GDPR · VİS', kk: 'GDPR · ДӨШ' },
      { de: 'Server in der EU', en: 'Servers in the EU', tr: 'Sunucular AB’de', kk: 'Серверлер ЕО-да' },
      { de: 'Quellcode gehört Ihnen', en: 'The source code is yours', tr: 'Kaynak kod sizin', kk: 'Бастапқы код сіздікі' },
      { de: 'Testmanagement nach ISTQB', en: 'Test management to ISTQB', tr: 'ISTQB’ye göre test yönetimi', kk: 'ISTQB бойынша тестілеуді басқару' },
    ],
    /**
     * Labels inside the schematic workspace beside the headline. It is a
     * diagram, not a screenshot: no client data, no invented figures, and
     * every word in it is translated like any other copy on the page.
     */
    console: {
      window: { de: 'Arbeitsbereich', en: 'Workspace', tr: 'Çalışma alanı', kk: 'Жұмыс кеңістігі' },
      role: { de: 'Rolle: Verwaltung', en: 'Role: administration', tr: 'Rol: yönetim', kk: 'Рөл: әкімшілік' },
      nav: [
        { de: 'Stammdaten', en: 'Master data', tr: 'Ana veriler', kk: 'Негізгі деректер' },
        { de: 'Vorgänge', en: 'Cases', tr: 'İşlemler', kk: 'Істер' },
        { de: 'Dokumente', en: 'Documents', tr: 'Dokümanlar', kk: 'Құжаттар' },
        { de: 'Finanzen', en: 'Finance', tr: 'Finans', kk: 'Қаржы' },
        { de: 'Auswertung', en: 'Insights', tr: 'Analiz', kk: 'Талдау' },
      ],
      columns: {
        case: { de: 'Vorgang', en: 'Case', tr: 'İşlem', kk: 'Іс' },
        owner: { de: 'Zuständig', en: 'Owner', tr: 'Sorumlu', kk: 'Жауапты' },
        state: { de: 'Zustand', en: 'State', tr: 'Durum', kk: 'Күй' },
      },
      states: {
        open: { de: 'offen', en: 'open', tr: 'açık', kk: 'ашық' },
        review: { de: 'geprüft', en: 'reviewed', tr: 'incelendi', kk: 'тексерілген' },
        approved: { de: 'freigegeben', en: 'approved', tr: 'onaylandı', kk: 'бекітілген' },
        billed: { de: 'abgerechnet', en: 'invoiced', tr: 'faturalandı', kk: 'шот қойылған' },
      },
      /**
       * The other faces of the same system. A single window says "an
       * application"; a workspace with a field view, a customer portal and a
       * management board hanging off it says "an ecosystem", which is what a
       * system actually is — one record set, several surfaces, each for a
       * different person. The connecting lines are drawn, not decorative: they
       * are the point of the picture.
       */
      satellites: {
        field: {
          title: { de: 'Einsatz vor Ort', en: 'On-site job', tr: 'Sahada iş', kk: 'Орындағы жұмыс' },
          line: { de: 'Foto und Zeitpunkt als Nachweis', en: 'Photo and timestamp as evidence', tr: 'Kanıt olarak fotoğraf ve zaman', kk: 'Дәлел ретінде фото мен уақыт' },
        },
        portal: {
          title: { de: 'Kundenportal', en: 'Customer portal', tr: 'Müşteri portalı', kk: 'Клиент порталы' },
          line: { de: 'Selbstauskunft, mehrsprachig', en: 'Self-service, multilingual', tr: 'Kendi kendine bilgi, çok dilli', kk: 'Өзіне-өзі анықтама, көп тілде' },
        },
        board: {
          title: { de: 'Auswertung', en: 'Reporting', tr: 'Analiz', kk: 'Талдау' },
          line: { de: 'Aus demselben Bestand', en: 'From the same records', tr: 'Aynı veri kümesinden', kk: 'Сол дерек жиынынан' },
        },
      },
      /** Screen-reader description of the whole constellation. */
      alt: {
        de: 'Schematische Darstellung: ein Arbeitsbereich, verbunden mit einer Einsatzansicht für unterwegs, einem Kundenportal und einer Auswertung.',
        en: 'Schematic: one workspace, connected to a field view, a customer portal and a reporting board.',
        tr: 'Şema: bir çalışma alanı; saha görünümü, müşteri portalı ve analiz panosuna bağlı.',
        kk: 'Схема: бір жұмыс кеңістігі, далалық көрініспен, клиент порталымен және талдау тақтасымен байланысқан.',
      },
      /** Label of the control that stops the docking animation further down. */
      pause: { de: 'Animation anhalten', en: 'Pause animation', tr: 'Animasyonu duraklat', kk: 'Анимацияны тоқтату' },
      play: { de: 'Animation abspielen', en: 'Play animation', tr: 'Animasyonu oynat', kk: 'Анимацияны ойнату' },
    },
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
      kk: 'Тым жиі айтылатын бес сөйлем',
    },
    intro: {
      de: 'Wenn Sie einen davon aus Ihrem eigenen Haus kennen, lohnt sich das Weiterlesen.',
      en: 'If you recognise even one of them from your own company, keep reading.',
      tr: 'Bunlardan birini kendi şirketinizden tanıyorsanız, okumaya devam edin.',
      kk: 'Осылардың біреуін өз компанияңыздан танысаңыз, оқығаныңыз жөн.',
    },
    /**
     * `source` names where the knowledge actually lives today. It turns an
     * abstract complaint into a place the reader can picture, and the five
     * places together are the argument for the section that follows: none of
     * them is a system.
     */
    items: [
      {
        source: { de: 'Im Kopf', en: 'In someone’s head', tr: 'Bir kişinin aklında', kk: 'Біреудің есінде' },
        text: {
          de: '„Das kann nur der Kollege, und der ist bis Montag nicht da."',
          en: '“Only one colleague can do that, and he is back on Monday.”',
          tr: '“Bunu sadece o arkadaş yapabiliyor, pazartesiye kadar da yok.”',
          kk: '«Мұны әріптес қана істей алады, ол дүйсенбіге дейін жоқ.»',
        },
      },
      {
        source: { de: 'Im Chatverlauf', en: 'In a chat thread', tr: 'Sohbet geçmişinde', kk: 'Чат жазбасында' },
        text: {
          de: '„Wer hat den Rabatt eigentlich freigegeben?" — und die Antwort steht in einem Chat.',
          en: '“Who actually approved that discount?” — and the answer is in a chat thread.',
          tr: '“Bu indirimi kim onaylamıştı?” — ve cevap bir sohbet penceresinde.',
          kk: '«Бұл жеңілдікті кім бекітті?» деген сұрақтың жауабы чатта жатыр.',
        },
      },
      {
        source: { de: 'In der Tabelle', en: 'In the spreadsheet', tr: 'Tabloda', kk: 'Кестеде' },
        text: {
          de: 'Drei Listen mit denselben Kunden, und keine davon stimmt ganz.',
          en: 'Three lists with the same customers, and not one of them is quite right.',
          tr: 'Aynı müşterileri içeren üç liste ve hiçbiri tam olarak doğru değil.',
          kk: 'Сол бір клиенттер жазылған үш тізім бар, бірақ бірде-біреуі толық дұрыс емес.',
        },
      },
      {
        source: { de: 'Nirgends', en: 'Nowhere', tr: 'Hiçbir yerde', kk: 'Ешқайда' },
        text: {
          de: 'Neue Mitarbeitende brauchen Wochen, bis sie den Ablauf kennen — weil ihn niemand aufgeschrieben hat.',
          en: 'New hires need weeks to learn the process — because nobody ever wrote it down.',
          tr: 'Yeni çalışanların süreci öğrenmesi haftalar alıyor — çünkü kimse yazmamış.',
          kk: 'Жаңа қызметкер үдерісті үйренуге бірнеше апта жұмсайды, өйткені оны ешкім жазып қоймаған.',
        },
      },
      {
        source: { de: 'Im Ordner', en: 'In the folder', tr: 'Klasörde', kk: 'Қалтада' },
        text: {
          de: 'Einmal im Jahr sucht jemand Belege zusammen, die eigentlich längst beisammen sein müssten.',
          en: 'Once a year somebody hunts down records that should have been together all along.',
          tr: 'Yılda bir kez, çoktan bir arada olması gereken belgeler tek tek aranıyor.',
          kk: 'Жылына бір рет біреу баяғыда бір жерде жинақ болып тұруға тиіс құжаттарды іздеп жүреді.',
        },
      },
    ],
    close: {
      de: 'Nichts davon ist Faulheit. So wächst jeder Betrieb, der schneller gewachsen ist als seine Werkzeuge.',
      en: 'None of this is laziness. It is how every company grows when it outgrows its tools.',
      tr: 'Bunların hiçbiri tembellik değil. Araçlarını geride bırakacak kadar hızlı büyüyen her işletme böyle büyür.',
      kk: 'Бұлардың бірі де жалқаулық емес. Құралынан жылдам өсіп кеткен әр кәсіп осылай өседі.',
    },
  },

  /**
   * The benefit, as a contrast rather than a claim.
   *
   * Placed straight after the five sentences, because that is where the reader
   * has just recognised themselves and is asking "and?". Three things are at
   * work. The contrast effect: an outcome is only visible against the state it
   * replaces, so the right column means nothing without the left. Loss
   * aversion: what somebody is losing today weighs about twice what an equal
   * gain would, so the left column is written first and concretely. And status-
   * quo bias, which is the real opponent here — the current mess is at least
   * familiar, so the closing line names what a system does NOT fix. A boundary
   * admitted is worth more than a sixth flawless promise, which is the same
   * reason "Wir sagen auch ab" sits further down the page.
   *
   * The rows are the six moments a managing director actually feels, not six
   * software features. No figures: the point is recognition, not arithmetic.
   */
  contrast: {
    eyebrow: { de: 'Der Unterschied im Alltag', en: 'The difference day to day', tr: 'Günlük hayattaki fark', kk: 'Күнделікті жұмыстағы айырма' },
    heading: {
      de: 'Was sich ändert, wenn die Abläufe einen Ort haben',
      en: 'What changes once the processes have a home',
      tr: 'Süreçlerin bir yeri olduğunda ne değişir',
      kk: 'Үдерістердің орны болғанда не өзгереді',
    },
    intro: {
      de: 'Nicht die Software ist der Nutzen. Der Nutzen sind sechs Situationen, die heute Zeit und Nerven kosten und danach keine Frage mehr sind.',
      en: 'The software is not the benefit. The benefit is six situations that cost time and nerves today and stop being a question afterwards.',
      tr: 'Fayda yazılımın kendisi değil. Fayda, bugün zaman ve sinir kaybettiren, sonrasında ise soru olmaktan çıkan altı durum.',
      kk: 'Пайда — бағдарламаның өзі емес. Пайда деген — бүгін уақыт пен жүйке шығындайтын, кейін сұрақ болудан қалатын алты жағдай.',
    },
    withoutLabel: { de: 'Ohne System', en: 'Without a system', tr: 'Sistem olmadan', kk: 'Жүйесіз' },
    withLabel: { de: 'Mit Unternehmenssystem', en: 'With a business system', tr: 'Kurumsal sistemle', kk: 'Кәсіпорын жүйесімен' },
    rows: [
      {
        topic: { de: 'Der Überblick', en: 'The overview', tr: 'Genel görünüm', kk: 'Жалпы көрініс' },
        without: {
          de: 'Drei Listen mit denselben Kunden, und keine stimmt ganz. Wer die Wahrheit braucht, ruft jemanden an.',
          en: 'Three lists with the same customers, and none of them is quite right. Anybody who needs the truth phones somebody.',
          tr: 'Aynı müşterileri içeren üç liste ve hiçbiri tam doğru değil. Gerçeği isteyen birini arıyor.',
          kk: 'Сол бір клиенттер жазылған үш тізім бар, бірде-біреуі толық дұрыс емес. Шындық керек адам біреуге қоңырау шалады.',
        },
        system: {
          de: 'Ein Bestand, eine Wahrheit. Wer sie braucht, sieht sie — im Rahmen dessen, was seine Rolle sehen darf.',
          en: 'One record set, one truth. Whoever needs it sees it, within what their role is allowed to see.',
          tr: 'Tek veri kümesi, tek gerçek. İhtiyacı olan görür — rolünün görmesine izin verilen ölçüde.',
          kk: 'Бір дерек жиыны, бір шындық. Керек адам оны көреді, әрине рөлі көруге рұқсат еткен шамада.',
        },
      },
      {
        topic: { de: 'Wenn jemand ausfällt', en: 'When somebody is away', tr: 'Biri olmadığında', kk: 'Біреу болмай қалғанда' },
        without: {
          de: 'Der Vorgang wartet auf eine Person. „Das kann nur der Kollege" ist ein Betriebsrisiko mit Vornamen.',
          en: 'The case waits for a person. “Only one colleague can do that” is an operational risk with a first name.',
          tr: 'İşlem bir kişiyi bekler. “Bunu sadece o arkadaş yapabilir” cümlesi, adı olan bir işletme riskidir.',
          kk: 'Іс бір адамды күтеді. «Мұны әріптес қана істей алады» деген сөз — аты бар кәсіптік тәуекел.',
        },
        system: {
          de: 'Der Vorgang wartet auf eine Rolle. Vertretung ist vorgesehen, nicht improvisiert, und der Ablauf läuft weiter.',
          en: 'The case waits for a role. Cover is designed in rather than improvised, and the process keeps moving.',
          tr: 'İşlem bir rolü bekler. Vekâlet doğaçlama değil, önceden tasarlanmıştır ve akış devam eder.',
          kk: 'Іс рөлді күтеді. Орынбасарлық суырыпсалма емес, алдын ала қарастырылған, ағын тоқтамайды.',
        },
      },
      {
        topic: { de: 'Wenn jemand nachfragt', en: 'When somebody asks', tr: 'Biri sorduğunda', kk: 'Біреу сұрағанда' },
        without: {
          de: 'Suche in Chats, Postfächern und Ordnern. Am Ende steht eine Erinnerung, kein Nachweis.',
          en: 'A search through chats, inboxes and folders. What comes out is a recollection, not evidence.',
          tr: 'Sohbetlerde, gelen kutularında ve klasörlerde arama. Sonunda kanıt değil, bir hatırlama çıkar.',
          kk: 'Чаттарды, пошта жәшіктерін және қалталарды ақтару. Соңында дәлел емес, есте қалған нәрсе шығады.',
        },
        system: {
          de: 'Person, Zeitpunkt und Vorzustand stehen am Vorgang. Sie brauchen das nicht im Alltag, sondern an dem einen Tag.',
          en: 'Person, timestamp and previous state sit on the case. You do not need that day to day — you need it on the one day.',
          tr: 'Kişi, zaman ve önceki durum işlemin üzerinde durur. Buna her gün değil, o bir günde ihtiyacınız olur.',
          kk: 'Адам, уақыт және алдыңғы күй істің бойында тұрады. Бұл күнде емес, дәл сол бір күні керек болады.',
        },
      },
      {
        topic: { de: 'Neue Mitarbeitende', en: 'New hires', tr: 'Yeni çalışanlar', kk: 'Жаңа қызметкерлер' },
        without: {
          de: 'Wochen Einarbeitung über Zuruf, weil den Ablauf nie jemand aufgeschrieben hat. Jeder lernt eine leicht andere Version.',
          en: 'Weeks of onboarding by word of mouth, because nobody ever wrote the process down. Everyone learns a slightly different version.',
          tr: 'Süreç hiç yazılmadığı için haftalarca kulaktan dolma oryantasyon. Herkes biraz farklı bir sürüm öğrenir.',
          kk: 'Үдеріс ешқашан жазылмағандықтан, апталар бойы ауызша үйрету. Әркім сәл өзгеше нұсқа үйренеді.',
        },
        system: {
          de: 'Der Ablauf steht im System. Wer neu ist, folgt ihm — und lernt dabei genau die Version, die alle anderen auch benutzen.',
          en: 'The process is in the system. A new person follows it, and learns exactly the version everybody else uses.',
          tr: 'Akış sistemde durur. Yeni gelen onu izler ve herkesin kullandığı sürümün aynısını öğrenir.',
          kk: 'Ағын жүйеде тұрады. Жаңа адам соны ұстанады әрі басқалардың бәрі қолданатын дәл сол нұсқаны үйренеді.',
        },
      },
      {
        topic: { de: 'Wenn das Volumen wächst', en: 'When volume grows', tr: 'Hacim büyüdüğünde', kk: 'Көлем өскенде' },
        without: {
          de: 'Mehr Aufträge heißt mehr Handarbeit und mehr Übertragungsfehler. Wachstum kostet zuerst Personal.',
          en: 'More orders means more manual work and more transcription errors. Growth costs headcount first.',
          tr: 'Daha çok sipariş, daha çok el emeği ve daha çok aktarma hatası demek. Büyüme önce personele mal olur.',
          kk: 'Тапсырыс көбейсе, қол еңбегі мен көшіру қателері де көбейеді. Өсу алдымен қызметкерге түседі.',
        },
        system: {
          de: 'Derselbe Ablauf, nur öfter. Was wächst, ist die Zahl der Vorgänge — nicht die Zahl der Sonderwege.',
          en: 'The same process, just more often. What grows is the number of cases, not the number of workarounds.',
          tr: 'Aynı akış, sadece daha sık. Büyüyen şey işlem sayısıdır, istisna sayısı değil.',
          kk: 'Сол ағын, тек жиірек. Өсетіні — істер саны, айналып өту жолдарының саны емес.',
        },
      },
      {
        topic: { de: 'Der Monatsabschluss', en: 'Month end', tr: 'Ay sonu', kk: 'Ай соңы' },
        without: {
          de: 'Jemand legt zwei Tabellen nebeneinander und gleicht ab. Das dauert, und niemand weiß, ob es stimmt.',
          en: 'Somebody lays two spreadsheets side by side and reconciles. It takes a while, and nobody knows whether it is right.',
          tr: 'Biri iki tabloyu yan yana koyup mutabakat yapar. Uzun sürer ve doğru olup olmadığını kimse bilmez.',
          kk: 'Біреу екі кестені қатар қойып, салыстырады. Ұзаққа созылады, әрі дұрыс екенін ешкім білмейді.',
        },
        system: {
          de: 'Die Zahlen kommen aus dem Bestand, in dem gearbeitet wurde. Jede lässt sich bis zum einzelnen Datensatz aufklappen.',
          en: 'The figures come from the records people worked in. Each one can be opened down to the single record.',
          tr: 'Sayılar, üzerinde çalışılan veri kümesinden gelir. Her biri tek kayda kadar açılabilir.',
          kk: 'Сандар адамдар жұмыс істеген дерек жиынынан шығады. Әрқайсысын жеке жазбаға дейін ашуға болады.',
        },
      },
    ],
    /**
     * The boundary. A page that only claims strengths is easier to disbelieve
     * than one that names a limit, and the limit here happens to be true.
     */
    honest: {
      title: { de: 'Was ein System nicht löst', en: 'What a system does not fix', tr: 'Bir sistemin çözmediği şey', kk: 'Жүйе шешпейтін нәрсе' },
      text: {
        de: 'Einen Ablauf, über den sich das Haus nicht einig ist. Software zementiert, was sie vorfindet — deshalb ist Phase drei die unbequeme, in der wir jeden Schritt mit Ihnen durchgehen, bevor jemand etwas baut.',
        en: 'A process the company does not agree on. Software sets in stone whatever it finds — which is why phase three is the uncomfortable one, where we walk every step with you before anybody builds anything.',
        tr: 'Şirketin üzerinde anlaşamadığı bir akışı. Yazılım, önünde ne bulursa onu kalıcı hâle getirir — bu yüzden üçüncü aşama, kimse bir şey yapmadan önce her adımı sizinle birlikte geçtiğimiz rahatsız edici aşamadır.',
        kk: 'Компания өзара келісе алмаған ағынды. Бағдарлама алдынан не тапса, соны бекітіп тастайды, сондықтан үшінші кезең — ешкім ештеңе құрмай тұрып, әр қадамды сізбен бірге қарап шығатын қолайсыз кезең.',
      },
    },
  },

  /**
   * Framing for the voices section. Renders only when at least one entry in
   * `voices` carries `approved: true`.
   */
  voices: {
    eyebrow: { de: 'Stimmen aus dem Betrieb', en: 'Voices from the floor', tr: 'Sahadan sesler', kk: 'Кәсіп ішінен шыққан дауыстар' },
    heading: {
      de: 'Was sich für die geändert hat, die damit arbeiten',
      en: 'What changed for the people who work in it',
      tr: 'Onunla çalışanlar için ne değişti',
      kk: 'Онымен жұмыс істейтіндер үшін не өзгерді',
    },
    intro: {
      de: 'Nicht die Geschäftsführung allein — die Rollen, die den Unterschied täglich merken.',
      en: 'Not management alone — the roles that feel the difference every day.',
      tr: 'Yalnızca yönetim değil — farkı her gün hisseden roller.',
      kk: 'Тек басшылық қана емес: айырманы күн сайын сезінетін рөлдер.',
    },
    beforeLabel: { de: 'Vorher', en: 'Before', tr: 'Öncesinde', kk: 'Бұрын' },
    afterLabel: { de: 'Heute', en: 'Now', tr: 'Bugün', kk: 'Бүгін' },
  },

  /** Self-selection. Routing someone away honestly is worth more than a lead. */
  split: {
    heading: {
      de: 'Website oder System? Der Unterschied ist größer, als er klingt',
      en: 'Website or system? The difference is bigger than it sounds',
      tr: 'Web sitesi mi, sistem mi? Fark, kulağa geldiğinden büyük',
      kk: 'Сайт па, жүйе ме? Айырмашылық естілгеннен әлдеқайда үлкен',
    },
    intro: {
      de: 'Beide sind Software, beide laufen im Browser — und trotzdem sind es zwei völlig verschiedene Projekte. Diese Liste sortiert in zehn Sekunden.',
      en: 'Both are software, both run in a browser — and they are still two entirely different projects. This list sorts it in ten seconds.',
      tr: 'İkisi de yazılım, ikisi de tarayıcıda çalışıyor — yine de bunlar tamamen farklı iki proje. Bu liste on saniyede ayırır.',
      kk: 'Екеуі де бағдарлама, екеуі де браузерде жұмыс істейді, бірақ бұл екеуі мүлдем бөлек жоба. Осы тізім он секундта сұрыптап береді.',
    },
    website: {
      title: { de: 'Es ist eine Website', en: 'It is a website', tr: 'Bu bir web sitesi', kk: 'Бұл сайт' },
      points: [
        { de: 'Fremde sollen Sie finden und sich ein Bild machen', en: 'Strangers should find you and form an impression', tr: 'Sizi tanımayanlar bulup bir izlenim edinmeli', kk: 'Сізді танымайтындар тауып, ой қалыптастыруы керек' },
        { de: 'Anfragen kommen über ein Formular oder WhatsApp', en: 'Enquiries arrive through a form or WhatsApp', tr: 'Talepler bir form ya da WhatsApp üzerinden geliyor', kk: 'Сұраулар форма немесе WhatsApp арқылы келеді' },
        { de: 'Es gibt keine Anmeldung und keine Rechte', en: 'There is no login and no permissions', tr: 'Giriş de yok, yetki de yok', kk: 'Кіру де, құқық та жоқ' },
        { de: 'Alle Besucher sehen dasselbe', en: 'Every visitor sees the same thing', tr: 'Her ziyaretçi aynı şeyi görüyor', kk: 'Барлық келуші бір нәрсені көреді' },
      ],
      cta: { de: 'Dann zu Webdesign', en: 'Then head to web design', tr: 'O hâlde webdesign’a', kk: 'Онда веб-дизайн бөліміне' },
    },
    system: {
      title: { de: 'Es ist ein System', en: 'It is a system', tr: 'Bu bir sistem', kk: 'Бұл жүйе' },
      points: [
        { de: 'Mehrere Personen arbeiten nacheinander am selben Vorgang', en: 'Several people work on the same case one after another', tr: 'Aynı işlemi birden çok kişi sırayla sürdürüyor', kk: 'Бір істі бірнеше адам кезекпен алып жүреді' },
        { de: 'Nicht jeder darf alles sehen oder ändern', en: 'Not everyone may see or change everything', tr: 'Herkes her şeyi görmemeli veya değiştirmemeli', kk: 'Әркім бәрін көрмеуі және өзгертпеуі керек' },
        { de: 'Später muss nachweisbar sein, wer wann was entschieden hat', en: 'Later you must be able to prove who decided what, and when', tr: 'Sonradan kimin ne zaman neye karar verdiği kanıtlanabilmeli', kk: 'Кейін кімнің қашан не шешкені дәлелденуі керек' },
        { de: 'Es gibt Zustände: offen, geprüft, freigegeben, abgerechnet', en: 'There are states: open, reviewed, approved, invoiced', tr: 'Durumlar var: açık, incelendi, onaylandı, faturalandı', kk: 'Күйлер бар: ашық, тексерілген, бекітілген, шот қойылған' },
      ],
      cta: { de: 'Weiterlesen', en: 'Keep reading', tr: 'Okumaya devam', kk: 'Оқуды жалғастыру' },
    },
    both: {
      de: 'Oft ist es beides, und dann ist die Reihenfolge egal. Für Ataberk Estate haben wir zuerst die Website gebaut und ein halbes Jahr später das System dahinter. Beides finden Sie weiter unten.',
      en: 'Often it is both, and then the order does not matter. For Ataberk Estate we built the website first and the system behind it half a year later. You will find both below.',
      tr: 'Çoğu zaman her ikisi de gerekir ve sıra fark etmez. Ataberk Estate için önce web sitesini, yarım yıl sonra da arkasındaki sistemi geliştirdik. İkisini de aşağıda bulacaksınız.',
      kk: 'Көбіне екеуі де қажет, ондайда кезектің маңызы жоқ. Ataberk Estate үшін алдымен сайтты, жарты жылдан кейін оның артындағы жүйені жасадық. Екеуін де төменнен табасыз.',
    },
  },

  /** Proof the reader can verify without asking us anything. */
  portfolio: {
    /**
     * "Two systems" read as the catalogue — as though these were the two we
     * sell. They are two builds shown as examples, and the heading has to say
     * so before somebody concludes we only do estate agencies and academies.
     */
    heading: { de: 'Zwei Beispiele, die Sie öffnen können', en: 'Two examples you can open', tr: 'Açabileceğiniz iki örnek', kk: 'Ашып көре алатын екі мысал' },
    intro: {
      de: 'Zwei gebaute Systeme, kein Katalog — Ihres sähe anders aus. Beide laufen produktiv, und beide lassen sich öffnen: Referenzen, die man nicht anfassen kann, sind keine.',
      en: 'Two systems we built, not a catalogue — yours would look different. Both run in production and both can be opened: a reference you cannot touch is not a reference.',
      tr: 'Kurduğumuz iki sistem, bir katalog değil — sizinki farklı görünürdü. İkisi de üretimde çalışıyor ve ikisi de açılabiliyor: dokunamadığınız bir referans, referans değildir.',
      kk: 'Біз жасаған екі жүйе, каталог емес: сіздікі басқаша болар еді. Екеуі де өнеркәсіптік пайдалануда әрі екеуін де ашып көруге болады, өйткені қолмен ұстап көре алмайтын референс референс емес.',
    },
    live: { de: 'System öffnen', en: 'Open the system', tr: 'Sistemi aç', kk: 'Жүйені ашу' },
    featuredLabel: { de: 'Referenzsystem', en: 'Reference system', tr: 'Referans sistem', kk: 'Референс жүйе' },
    clientLabel: { de: 'Gebaut für', en: 'Built for', tr: 'Şunun için geliştirildi', kk: 'Кім үшін жасалды' },
  },

  /**
   * The heart of the page. Every discipline that goes into a project, named,
   * with the result the client physically receives at the end of each phase.
   * This is what a price is made of, which is why it can stand in for one.
   */
  process: {
    heading: { de: 'So entsteht ein System bei uns', en: 'How a system comes about with us', tr: 'Bizde bir sistem böyle doğar', kk: 'Бізде жүйе осылай дүниеге келеді' },
    intro: {
      de: 'Sechs Phasen. Jede endet mit etwas, das Sie in der Hand halten — kein Zwischenstand, den nur wir verstehen. Nach Phase zwei können Sie aussteigen und alles behalten.',
      en: 'Six phases. Each ends with something you can hold — not an interim state only we understand. After phase two you may walk away and keep everything.',
      tr: 'Altı aşama. Her biri elinizde tutabileceğiniz bir çıktıyla biter — yalnızca bizim anladığımız bir ara durumla değil. İkinci aşamadan sonra çıkıp her şeyi alıkoyabilirsiniz.',
      kk: 'Алты кезең. Әрқайсысы қолыңызда қалатын нәтижемен аяқталады, тек біз ғана түсінетін аралық күймен емес. Екінші кезеңнен кейін тоқтап, бәрін өзіңізде қалдыра аласыз.',
    },
    steps: [
      {
        title: { de: 'Zuhören', en: 'Listening', tr: 'Dinleme', kk: 'Тыңдау' },
        disciplines: {
          de: 'Erstgespräch · Unternehmensanalyse · Prozessaufnahme',
          en: 'First conversation · business analysis · process capture',
          tr: 'İlk görüşme · kurumsal analiz · süreç tespiti',
          kk: 'Алғашқы кездесу · кәсіпорынды талдау · үдерісті тіркеу',
        },
        text: {
          de: 'Wir kommen vorbei und sehen zu, wie heute gearbeitet wird. Nicht wie es im Organigramm steht, sondern wie es tatsächlich läuft — inklusive der Umwege, die sich jemand vor Jahren ausgedacht hat, weil das System es nicht anders hergab.',
          en: 'We come by and watch how the work is done today. Not how the org chart describes it, but how it actually runs — including the detours somebody invented years ago because the system left no other way.',
          tr: 'Gelip bugün nasıl çalışıldığını izliyoruz. Organizasyon şemasındaki hâliyle değil, gerçekte nasıl yürüdüğüyle — sistem başka yol bırakmadığı için yıllar önce birinin bulduğu kestirmeler dâhil.',
          kk: 'Барып, бүгін жұмыс қалай жүріп жатқанын бақылаймыз. Ұйым құрылымындағы қағаз жүзіндегі емес, шындықтағы қалпын көреміз, оның ішінде жүйе басқа жол қалдырмағандықтан біреу жылдар бұрын ойлап тапқан айналма жолдар да бар.',
        },
        result: { de: 'Prozesslandkarte Ihres Ist-Zustands', en: 'A process map of how things stand today', tr: 'Mevcut durumunuzun süreç haritası', kk: 'Бүгінгі жағдайыңыздың үдеріс картасы' },
      },
      {
        title: { de: 'Aufschreiben', en: 'Writing it down', tr: 'Yazıya dökme', kk: 'Жазып алу' },
        disciplines: {
          de: 'Anforderungserfassung · Dokumentation · Priorisierung',
          en: 'Requirements capture · documentation · prioritisation',
          tr: 'Gereksinim tespiti · dokümantasyon · önceliklendirme',
          kk: 'Талаптарды жинау · құжаттау · басымдық қою',
        },
        text: {
          de: 'Aus dem Gesehenen wird ein Anforderungsdokument: was das System können muss, was es ausdrücklich nicht können soll, und in welcher Reihenfolge. Das Dokument gehört Ihnen — auch wenn Sie damit anschließend zu jemand anderem gehen.',
          en: 'What we saw becomes a requirements document: what the system must do, what it explicitly should not do, and in which order. The document is yours — even if you take it to somebody else afterwards.',
          tr: 'Görülenler bir gereksinim dokümanına dönüşür: sistemin ne yapması gerektiği, açıkça neyi yapmaması gerektiği ve hangi sırayla. Belge sizindir — sonrasında onunla başka birine gitseniz bile.',
          kk: 'Көргеніміз талаптар құжатына айналады: жүйе не істей алуы керек, нені әдейі істемеуі керек және қандай кезекпен. Құжат сіздікі, тіпті одан кейін онымен басқа біреуге барсаңыз да.',
        },
        result: { de: 'Anforderungsdokument, freigegeben von Ihnen', en: 'A requirements document, signed off by you', tr: 'Sizin onayladığınız gereksinim dokümanı', kk: 'Өзіңіз бекіткен талаптар құжаты' },
      },
      {
        title: { de: 'Abstimmen', en: 'Aligning', tr: 'Mutabakat', kk: 'Келісу' },
        disciplines: {
          de: 'Prozessabstimmung · Rollen- und Rechtekonzept · Schnittstellen',
          en: 'Process alignment · roles and permissions · interfaces',
          tr: 'Süreç mutabakatı · rol ve yetki tasarımı · arayüzler',
          kk: 'Үдерісті келісу · рөл мен құқық тұжырымдамасы · интерфейстер',
        },
        text: {
          de: 'Jetzt geht es an die unbequeme Frage: Welcher Ablauf bleibt, welcher fällt weg, welcher wird anders? Wir gehen jeden Schritt mit Ihnen durch und legen fest, wer was sehen und ändern darf. Ein System zementiert Ihre Prozesse — deshalb schauen wir vorher genau hin.',
          en: 'Now comes the uncomfortable question: which workflow stays, which goes, which changes? We walk through every step with you and define who may see and change what. A system sets your processes in concrete — which is why we look closely first.',
          tr: 'Şimdi rahatsız edici soruya geliyoruz: hangi akış kalacak, hangisi kalkacak, hangisi değişecek? Her adımı sizinle birlikte geçiyor ve kimin neyi görüp değiştirebileceğini belirliyoruz. Bir sistem süreçlerinizi betonlaştırır — bu yüzden önceden dikkatle bakıyoruz.',
          kk: 'Енді ыңғайсыз сұрақ келеді: қай ағын қалады, қайсысы алынып тасталады, қайсысы өзгереді? Әр қадамды сізбен бірге қарап шығып, кімнің нені көріп, нені өзгерте алатынын белгілейміз. Жүйе үдерісіңізді бетондап тастайды, сондықтан алдын ала мұқият қараймыз.',
        },
        result: { de: 'Abgestimmte Soll-Prozesse und eine Rollenmatrix', en: 'Agreed target processes and a role matrix', tr: 'Üzerinde anlaşılan hedef süreçler ve bir rol matrisi', kk: 'Келісілген мақсатты үдерістер мен рөл матрицасы' },
      },
      {
        title: { de: 'Zeigen', en: 'Showing', tr: 'Gösterme', kk: 'Көрсету' },
        disciplines: {
          de: 'Designabstimmung · klickbarer Prototyp · Barrierefreiheit',
          en: 'Design alignment · clickable prototype · accessibility',
          tr: 'Tasarım mutabakatı · tıklanabilir prototip · erişilebilirlik',
          kk: 'Дизайнды келісу · басып көруге болатын прототип · қолжетімділік',
        },
        text: {
          de: 'Bevor eine Zeile Code entsteht, klicken Sie durch Ihr System. Echte Screens, echte Wege, die Begriffe aus Ihrem Haus statt aus einem Lehrbuch. Änderungen kosten hier Minuten — später kosten sie Tage.',
          en: 'Before a single line of code exists, you click through your system. Real screens, real paths, the vocabulary of your company rather than a textbook. Changes cost minutes at this stage — later they cost days.',
          tr: 'Tek satır kod yazılmadan önce sisteminizi tıklayarak geziyorsunuz. Gerçek ekranlar, gerçek yollar ve ders kitabının değil sizin şirketinizin terimleri. Bu aşamada değişiklikler dakikalar sürer — sonra günler.',
          kk: 'Бір жол код жазылмай тұрып, жүйеңізді басып көріп шығасыз. Нағыз экрандар, нағыз жолдар және оқулықтағы емес, өз компанияңыздағы терминдер. Бұл кезеңде өзгеріс бірнеше минут алады, кейінірек бірнеше күн алады.',
        },
        result: { de: 'Klickbarer Entwurf, von Ihnen abgenommen', en: 'A clickable design, accepted by you', tr: 'Sizin kabul ettiğiniz tıklanabilir tasarım', kk: 'Өзіңіз қабылдаған, басып көруге болатын жоба' },
      },
      {
        title: { de: 'Bauen und prüfen', en: 'Building and testing', tr: 'Yapım ve test', kk: 'Құру және тексеру' },
        disciplines: {
          de: 'Entwicklung in Schnitten · Testmanagement · Abnahme',
          en: 'Development in slices · test management · acceptance',
          tr: 'Dilimler hâlinde geliştirme · test yönetimi · kabul',
          kk: 'Тілімдеп әзірлеу · тестілеуді басқару · қабылдау',
        },
        text: {
          de: 'Wir bauen in Schnitten: ein schmaler, aber vollständiger Ausschnitt geht live, Sie arbeiten damit, dann kommt der nächste. Geprüft wird nach denselben Regeln, nach denen wir sonst die Software anderer prüfen — Testmanagement ist das Geschäft, aus dem WAMOCON kommt.',
          en: 'We build in slices: one narrow but complete section goes live, you work with it, then the next one follows. Testing runs by the same rules we apply when auditing other people’s software — test management is the business WAMOCON came from.',
          tr: 'Dilimler hâlinde inşa ediyoruz: dar ama eksiksiz bir bölüm yayına giriyor, siz onunla çalışıyorsunuz, sonra bir sonraki geliyor. Test, başkalarının yazılımını denetlerken uyguladığımız kurallarla yapılır — test yönetimi, WAMOCON’un geldiği alandır.',
          kk: 'Тілімдеп құрамыз: тар, бірақ толық бір бөлік жұмысқа қосылады, сіз онымен жұмыс істейсіз, сосын келесісі шығады. Тексеру басқалардың бағдарламасын тексергендегі қағидалармен жүреді, өйткені тестілеуді басқару: WAMOCON шыққан сала.',
        },
        result: { de: 'Abgenommener Funktionsumfang je Meilenstein', en: 'An accepted scope at each milestone', tr: 'Her kilometre taşında kabul edilmiş kapsam', kk: 'Әр белесте қабылданған функционал' },
      },
      {
        title: { de: 'Einführen', en: 'Rolling out', tr: 'Devreye alma', kk: 'Енгізу' },
        disciplines: {
          de: 'Datenübernahme · Schulung · Handbuch · Betrieb',
          en: 'Data migration · training · manual · operation',
          tr: 'Veri aktarımı · eğitim · el kitabı · işletim',
          kk: 'Деректерді көшіру · оқыту · нұсқаулық · пайдалану',
        },
        text: {
          de: 'Die Altdaten kommen mit, auch die aus Excel. Ihr Team wird geschult, nicht informiert — der Unterschied entscheidet, ob ein System benutzt oder umgangen wird. Danach übernehmen wir Betrieb, Sicherung und Weiterentwicklung, mit Reaktionszeiten, die im Vertrag stehen.',
          en: 'The legacy data comes along, spreadsheets included. Your team is trained, not merely informed — that difference decides whether a system gets used or worked around. After that we take over operation, backups and further development, with response times written into the contract.',
          tr: 'Eski veriler de taşınır, Excel’dekiler dâhil. Ekibiniz bilgilendirilmez, eğitilir — bu fark, bir sistemin kullanılacağını mı yoksa etrafından dolaşılacağını mı belirler. Sonrasında işletimi, yedeklemeyi ve geliştirmeyi biz üstleniriz; yanıt süreleri sözleşmede yazar.',
          kk: 'Ескі деректер де бірге көшеді, Excel-дегілері қоса. Командаңыз хабардар етілмейді, оқытылады, ал осы айырмашылық жүйенің қолданылатынын әлде айналып өтілетінін шешеді. Одан кейін пайдалануды, сақтық көшірмені және дамытуды өзіміз мойнымызға аламыз, жауап беру мерзімі шартта жазылады.',
        },
        result: { de: 'Ein System, mit dem Ihr Team arbeitet', en: 'A system your team actually works in', tr: 'Ekibinizin gerçekten çalıştığı bir sistem', kk: 'Командаңыз шынымен жұмыс істейтін жүйе' },
      },
    ],
    resultLabel: { de: 'Sie bekommen', en: 'You receive', tr: 'Elde ettiğiniz', kk: 'Сіз алатын нәтиже' },
  },

  /** Desire: the parts, described by what they prevent rather than what they are. */
  capabilities: {
    heading: { de: 'Was in jedem System steckt', en: 'What sits inside every system', tr: 'Her sistemde ne var', kk: 'Әр жүйенің ішінде не бар' },
    intro: {
      de: 'Kein Baukasten und kein Standardprodukt mit Ihrem Logo darauf. Diese sechs Dinge bekommt jedes System von uns, der Rest richtet sich nach Ihrem Betrieb.',
      en: 'No kit, and no standard product with your logo on it. Every system of ours gets these six things; the rest follows your operation.',
      tr: 'Hazır bir kutu ya da logonuzun konduğu standart bir ürün değil. Bizden çıkan her sistem bu altı şeyi alır; gerisi işletmenize göre şekillenir.',
      kk: 'Бұл құрастырмалы жинақ та, логотипіңіз қойылған дайын өнім де емес. Бізден шыққан әр жүйе осы алты нәрсені алады, қалғаны кәсібіңізге қарай құрылады.',
    },
    items: [
      {
        title: { de: 'Rollen und Rechte', en: 'Roles and rights', tr: 'Roller ve yetkiler', kk: 'Рөлдер мен құқықтар' },
        text: {
          de: 'Wer was sieht, entscheidet die Datenbank — nicht die Oberfläche. Damit gibt auch ein Fehler im Frontend keine fremden Daten preis.',
          en: 'Who sees what is decided by the database, not the interface. So even a bug in the front end cannot leak somebody else’s data.',
          tr: 'Kimin neyi göreceğine arayüz değil, veritabanı karar verir. Böylece önyüzdeki bir hata bile başkasının verisini sızdıramaz.',
          kk: 'Кімнің нені көретінін интерфейс емес, дерекқор шешеді. Сондықтан алдыңғы жақтағы қате де бөгде адамның деректерін ашып қоя алмайды.',
        },
      },
      {
        title: { de: 'Abläufe mit festen Zuständen', en: 'Workflows with defined states', tr: 'Tanımlı durumlara sahip iş akışları', kk: 'Күйі айқын белгіленген ағындар' },
        text: {
          de: 'Ein Vorgang hat einen Zustand und erlaubte Übergänge. Eine Freigabe lässt sich nicht überspringen, nur weil gerade jemand fehlt.',
          en: 'A case has a state and permitted transitions. An approval cannot be skipped just because somebody is away.',
          tr: 'Bir işlemin durumu ve izin verilen geçişleri vardır. Biri yok diye bir onay atlanamaz.',
          kk: 'Әр істің күйі және рұқсат етілген ауысулары бар. Біреу жоқ деп бекітуді аттап кетуге болмайды.',
        },
      },
      {
        title: { de: 'Nachweiskette', en: 'Audit trail', tr: 'Kanıt zinciri', kk: 'Дәлел тізбегі' },
        text: {
          de: 'Jede Änderung trägt Person, Zeitpunkt und Vorzustand. Sie brauchen das nicht im Alltag — Sie brauchen es an dem einen Tag, an dem jemand fragt.',
          en: 'Every change carries the person, the time and the prior state. You do not need it day to day — you need it on the one day somebody asks.',
          tr: 'Her değişiklik kişi, zaman ve önceki durumu taşır. Buna günlük işte değil, birinin sorduğu o tek günde ihtiyacınız olur.',
          kk: 'Әр өзгеріс кімнің істегенін, уақытын және алдыңғы күйін сақтайды. Ол сізге күнделікті керек емес, біреу сұрайтын сол бір күні керек болады.',
        },
      },
      {
        title: { de: 'Schnittstellen statt Insel', en: 'Interfaces, not an island', tr: 'Ada değil, arayüz', kk: 'Арал емес, интерфейстер' },
        text: {
          de: 'Buchhaltung, Kalender, Ticketsystem, Zahlungsdienst. Ein System, das nichts anbinden kann, wird zur nächsten Excel-Datei.',
          en: 'Accounting, calendar, ticketing, payment provider. A system that connects to nothing becomes the next spreadsheet.',
          tr: 'Muhasebe, takvim, çağrı sistemi, ödeme sağlayıcı. Hiçbir şeye bağlanamayan bir sistem, bir sonraki Excel dosyası olur.',
          kk: 'Бухгалтерия, күнтізбе, тікет жүйесі, төлем сервисі. Ешнәрсеге қосыла алмайтын жүйе келесі Excel файлына айналады.',
        },
      },
      {
        title: { de: 'KI mit Leitplanken', en: 'AI with guardrails', tr: 'Sınırları belirlenmiş yapay zekâ', kk: 'Шегі айқын жасанды интеллект' },
        text: {
          de: 'Assistenten, die aus Ihren eigenen Inhalten antworten und sonst schweigen. Kein Modell, das sich etwas ausdenkt, wenn es die Antwort nicht kennt.',
          en: 'Assistants that answer from your own content and otherwise stay quiet. No model that makes something up when it does not know.',
          tr: 'Kendi içeriğinizden yanıt veren, aksi hâlde susan asistanlar. Bilmediğinde uyduran bir model yok.',
          kk: 'Өз мазмұныңыздан жауап беретін, білмегенде үндемейтін көмекшілер. Жауабын білмегенде ойдан шығаратын модель жоқ.',
        },
      },
      {
        title: { de: 'Zahlen, die stimmen', en: 'Figures that hold up', tr: 'Doğru çıkan sayılar', kk: 'Дұрыс шығатын сандар' },
        text: {
          de: 'Kennzahlen aus echten Daten statt aus Behauptungen. Wo eine Zahl noch nicht berechnet werden kann, sagt die Kachel genau das, statt zu schätzen.',
          en: 'Metrics from real data instead of claims. Where a figure cannot be computed yet, the tile says exactly that instead of guessing.',
          tr: 'İddialardan değil, gerçek veriden gelen göstergeler. Bir sayı henüz hesaplanamıyorsa, kutucuk tahmin yürütmez, bunu açıkça söyler.',
          kk: 'Мәлімдемеден емес, нағыз деректен алынған көрсеткіштер. Бір сан әлі есептеле алмаса, тақташа болжам айтпай, дәл соны жазады.',
        },
      },
    ],
  },

  /** Authority — plus one honest limitation, which is what makes it credible. */
  why: {
    heading: { de: 'Warum ausgerechnet wir', en: 'Why us in particular', tr: 'Neden özellikle biz', kk: 'Неге дәл біз' },
    items: [
      {
        title: { de: 'Wir kommen vom Prüfen, nicht vom Bauen', en: 'We come from testing, not from building', tr: 'Yapmaktan değil, denetlemekten geliyoruz', kk: 'Біз құрудан емес, тексеруден келдік' },
        text: {
          de: 'WAMOCON prüft seit Jahren die Software anderer Unternehmen — im Testmanagement, nach ISTQB. Wer den ganzen Tag sieht, woran Projekte scheitern, baut anders. Vorsichtiger, und mit mehr Nachweis.',
          en: 'WAMOCON has spent years testing other companies’ software — in test management, to ISTQB standards. When you spend your days seeing why projects fail, you build differently. More carefully, and with more evidence.',
          tr: 'WAMOCON yıllardır başka şirketlerin yazılımlarını denetliyor — test yönetiminde, ISTQB standartlarına göre. Projelerin neden battığını her gün gören biri, başka türlü inşa eder. Daha temkinli ve daha fazla kanıtla.',
          kk: 'WAMOCON жылдар бойы басқа компаниялардың бағдарламасын тексеріп келеді, тестілеуді басқаруда, ISTQB стандарты бойынша. Жобалардың неден құлайтынын күнде көретін адам басқаша құрады: сақтығырақ және дәлелі молырақ.',
        },
      },
      {
        title: { de: 'Ein Ansprechpartner, kein Ticketsystem', en: 'One person, not a ticket queue', tr: 'Bir muhatap, çağrı kuyruğu değil', kk: 'Тікет кезегі емес, бір байланыс тұлғасы' },
        text: {
          de: 'Sie sprechen mit den Leuten, die Ihr System auch bauen. Bei einem Haus unserer Größe geht das — und es erspart Ihnen die Übersetzungsschicht zwischen Vertrieb und Entwicklung.',
          en: 'You talk to the people who actually build your system. At a firm our size that works — and it spares you the translation layer between sales and development.',
          tr: 'Sisteminizi gerçekten kuran kişilerle konuşuyorsunuz. Bizim büyüklüğümüzde bir şirkette bu mümkün — ve satışla geliştirme arasındaki çeviri katmanından kurtulursunuz.',
          kk: 'Сіз жүйеңізді нақты құратын адамдармен сөйлесесіз. Біздей көлемдегі компанияда бұл мүмкін, әрі бұл сату мен әзірлеу арасындағы аудармашы қабатынан құтқарады.',
        },
      },
      {
        title: { de: 'Deutscher Vertragspartner, EU-Datenhaltung', en: 'A German contracting party, EU data', tr: 'Alman sözleşme tarafı, AB’de veri', kk: 'Германиялық шарт тарабы, ЕО-дағы деректер' },
        text: {
          de: 'WAMOCON GmbH sitzt in Eschborn bei Frankfurt. Auftragsverarbeitungsvertrag nach DSGVO, Server in der EU, deutscher Gerichtsstand. Nichts davon ist ein Verkaufsargument — es ist die Voraussetzung dafür, dass Sie überhaupt unterschreiben können.',
          en: 'WAMOCON GmbH sits in Eschborn near Frankfurt. GDPR data-processing agreement, servers in the EU, German place of jurisdiction. None of that is a selling point — it is the precondition for you being able to sign at all.',
          tr: 'WAMOCON GmbH, Frankfurt yakınlarındaki Eschborn’da bulunuyor. GDPR uyarınca veri işleme sözleşmesi, AB’de sunucular, Alman yetkili mahkemesi. Bunların hiçbiri satış argümanı değil — imza atabilmenizin ön koşulu.',
          kk: 'WAMOCON GmbH Франкфурт маңындағы Эшборнда орналасқан. GDPR бойынша деректерді өңдеу шарты, ЕО аумағындағы серверлер, германиялық сот құзыреті. Бұның бірі де сату дәлелі емес, бұл сіздің қол қоя алуыңыздың алғышарты.',
        },
      },
      {
        title: { de: 'Wir sagen auch ab', en: 'We also say no', tr: 'Hayır da diyoruz', kk: 'Біз бас та тартамыз' },
        text: {
          de: 'Nicht jeder Betrieb braucht ein eigenes System. Manchmal reicht ein Standardprodukt, manchmal genügt es, drei Tabellen zusammenzulegen. Wenn wir das sehen, sagen wir es Ihnen — lieber ein ehrliches Nein als ein Projekt, das keiner benutzt.',
          en: 'Not every company needs a system of its own. Sometimes an off-the-shelf product is enough, sometimes merging three spreadsheets does the job. When we see that, we say so — an honest no beats a project nobody uses.',
          tr: 'Her işletmenin kendi sistemine ihtiyacı yoktur. Bazen hazır bir ürün yeter, bazen üç tabloyu birleştirmek. Bunu gördüğümüzde söyleriz — kimsenin kullanmadığı bir projeden, dürüst bir hayır iyidir.',
          kk: 'Әр кәсіпке өз жүйесі керек емес. Кейде дайын өнім жетеді, кейде үш кестені біріктірсе де болады. Соны көрсек, ашық айтамыз, өйткені ешкім қолданбайтын жобадан адал «жоқ» жақсы.',
        },
      },
    ],
  },

  /** Risk reversal through binding commitments rather than a stack of promises. */
  commitment: {
    heading: { de: 'Woran Sie uns festhalten können', en: 'What you can hold us to', tr: 'Bizi neye bağlayabilirsiniz', kk: 'Бізді неге бағынышты ете аласыз' },
    intro: {
      de: 'Versprechen kosten nichts. Diese fünf Punkte stehen im Vertrag und haben Folgen, wenn wir sie verfehlen.',
      en: 'Promises are free. These five sit in the contract and carry consequences if we miss them.',
      tr: 'Söz vermek bedava. Bu beş madde sözleşmede yer alır ve tutturamazsak sonucu olur.',
      kk: 'Уәде тегін. Мына бес тармақ шартта жазылады және оны орындамасақ, салдары болады.',
    },
    points: [
      {
        de: 'Abnahmekriterien stehen fest, bevor gebaut wird — nicht danach.',
        en: 'Acceptance criteria are fixed before we build, not afterwards.',
        tr: 'Kabul kriterleri yapımdan önce belirlenir, sonrasında değil.',
        kk: 'Қабылдау критерийлері құрылым басталмай тұрып бекітіледі, кейін емес.',
      },
      {
        de: 'Zahlung je Meilenstein nach Abnahme. Keine Vorkasse.',
        en: 'Payment per milestone after acceptance. No advance payment.',
        tr: 'Kabul sonrası kilometre taşı başına ödeme. Peşin ödeme yok.',
        kk: 'Төлем қабылданғаннан кейін, әр белес бойынша. Алдын ала төлем жоқ.',
      },
      {
        de: 'Reaktionszeiten im Support sind vereinbart, mit Gutschrift bei Verfehlung.',
        en: 'Support response times are agreed, with a credit if we miss them.',
        tr: 'Destek yanıt süreleri kararlaştırılır; tutturulmazsa alacak kaydı yapılır.',
        kk: 'Қолдау қызметінің жауап беру мерзімі келісіледі, орындалмаса өтемақы есептеледі.',
      },
      {
        de: 'Quellcode und Daten gehören Ihnen. Eine Ausstiegsklausel regelt die Herausgabe, auch im Streit.',
        en: 'Source code and data are yours. An exit clause governs handover, including in a dispute.',
        tr: 'Kaynak kod ve veri sizindir. Bir çıkış maddesi, ihtilafta da teslimi düzenler.',
        kk: 'Бастапқы код пен деректер сіздікі. Шығу тармағы дауда да оның берілуін реттейді.',
      },
      {
        de: 'Auftragsverarbeitungsvertrag nach DSGVO, Server in der EU.',
        en: 'GDPR data-processing agreement, servers in the EU.',
        tr: 'GDPR uyarınca veri işleme sözleşmesi, AB’de sunucular.',
        kk: 'GDPR бойынша деректерді өңдеу шарты, ЕО аумағындағы серверлер.',
      },
    ],
  },

  /** One small, unambiguous first step. */
  firstStep: {
    heading: { de: 'Der erste Schritt kostet Sie eine Stunde', en: 'The first step costs you an hour', tr: 'İlk adım size bir saate mal olur', kk: 'Алғашқы қадам сізден бір сағат алады' },
    text: {
      de: 'Erzählen Sie uns in einem Gespräch, wo es heute hakt. Wir hören zu, stellen Fragen und sagen Ihnen danach ehrlich, ob sich ein eigenes System lohnt — oder ob es etwas Einfacheres auch tut. Kein Angebot im Anhang, keine Verkaufspräsentation.',
      en: 'Tell us in one conversation where things snag today. We listen, we ask, and afterwards we tell you honestly whether a system of your own is worth it — or whether something simpler will do. No quote attached, no sales deck.',
      tr: 'Bir görüşmede bugün nerede takıldığını anlatın. Dinleriz, sorular sorarız ve ardından kendi sisteminizin değip değmeyeceğini ya da daha basit bir şeyin iş görüp görmeyeceğini dürüstçe söyleriz. Ekte teklif yok, satış sunumu yok.',
      kk: 'Бүгін қай жерде тұрып қалғаныңызды әңгімеде айтып беріңіз. Тыңдаймыз, сұрақ қоямыз, содан соң өз жүйеңіздің керек-керек еместігін немесе одан қарапайым бірдеңе де жететінін адал айтамыз. Ілеспе ұсыныс та жоқ, сату презентациясы да жоқ.',
    },
    cta: { de: 'Gespräch vereinbaren', en: 'Arrange the conversation', tr: 'Görüşmeyi ayarlayın', kk: 'Әңгімені жоспарлау' },
  },

  /** Cross-link, written as guidance rather than navigation. */
  crosslink: {
    heading: { de: 'Und wenn es doch eine Website ist', en: 'And if it turns out to be a website', tr: 'Ya sonuçta bir web sitesiyse', kk: 'Ал егер бәрібір сайт болса' },
    text: {
      de: 'Dann sind Sie eine Abteilung zu weit gegangen. Unsere Webdesign-Abteilung baut mehrsprachige Auftritte mit Buchung, KI-Assistent und Suchmaschinen-Sichtbarkeit — für Kunden vom Barbier in Alanya bis zum Prüfdienstleister im Rhein-Main-Gebiet.',
      en: 'Then you have gone one department too far. Our web-design team builds multilingual sites with booking, an AI assistant and search visibility — for clients from a barber in Alanya to a safety-testing provider in the Rhine-Main region.',
      tr: 'O hâlde bir birim ileri gitmişsiniz. Web tasarım birimimiz; randevu, yapay zekâ asistanı ve arama görünürlüğü içeren çok dilli siteler yapıyor — Alanya’daki bir berberden Rhein-Main bölgesindeki bir denetim firmasına kadar.',
      kk: 'Онда бір бөлім артық жүріп кетіпсіз. Веб-дизайн бөлімі жазылу, ЖИ көмекшісі және іздеу жүйелерінде көріну мүмкіндігі бар көп тілді сайттар жасайды, әрі клиенттеріміз Аланиядағы шаштараздан бастап Рейн-Майн өңіріндегі техникалық сараптама компаниясына дейін.',
    },
    cta: { de: 'Zur Webdesign-Abteilung', en: 'To the web-design department', tr: 'Web tasarım birimine', kk: 'Веб-дизайн бөліміне' },
  },

  /**
   * The strip under the hero: the areas of a company a system covers.
   *
   * It used to scroll the vocabulary of the trade — row-level security, single
   * source of truth, webhooks. Accurate, and useless here: a managing director
   * reads it and cannot tell whether any of it touches their business. These
   * are the departments instead, and a reader recognises their own in the
   * first two seconds. The technical vocabulary has not gone anywhere — it
   * lives in the module explorer and the security section, where somebody is
   * already asking how rather than what.
   *
   * The list follows 1Çatı, which covers most of them in one workspace, and is
   * generalised so it is not an estate-agency list.
   */
  marquee: [
    { de: 'Vertrieb & Interessenten', en: 'Sales & leads', tr: 'Satış ve potansiyel müşteriler', kk: 'Сатылым және әлеуетті клиенттер' },
    { de: 'Kunden & Stammdaten', en: 'Customers & master data', tr: 'Müşteriler ve ana veriler', kk: 'Клиенттер және негізгі деректер' },
    { de: 'Objekte & Bestand', en: 'Assets & inventory', tr: 'Varlıklar ve envanter', kk: 'Нысандар және қор' },
    { de: 'Aufträge & Vorgänge', en: 'Orders & cases', tr: 'Siparişler ve işlemler', kk: 'Тапсырыстар және істер' },
    { de: 'Service & Einsätze', en: 'Service & field work', tr: 'Servis ve saha işleri', kk: 'Сервис және далалық жұмыс' },
    { de: 'Finanzen & offene Posten', en: 'Finance & receivables', tr: 'Finans ve açık kalemler', kk: 'Қаржы және ашық баптар' },
    { de: 'Dokumente & Nachweise', en: 'Documents & records', tr: 'Dokümanlar ve kanıtlar', kk: 'Құжаттар және дәлелдер' },
    { de: 'Zutritt & Berechtigungen', en: 'Access & permissions', tr: 'Erişim ve yetkiler', kk: 'Кіру және рұқсаттар' },
    { de: 'Kundenportal', en: 'Customer portal', tr: 'Müşteri portalı', kk: 'Клиент порталы' },
    { de: 'Einkauf & Lieferanten', en: 'Purchasing & suppliers', tr: 'Satın alma ve tedarikçiler', kk: 'Сатып алу және жеткізушілер' },
    { de: 'Meldungen an Behörden', en: 'Regulatory reporting', tr: 'Resmî bildirimler', kk: 'Мемлекеттік органдарға есеп' },
    { de: 'Auswertung & Kennzahlen', en: 'Reporting & figures', tr: 'Analiz ve göstergeler', kk: 'Талдау және көрсеткіштер' },
  ],

  /**
   * The module explorer. Seven panels a reader can click through, each one a
   * schematic of what the layer does — deliberately a diagram and not a
   * screenshot: the two live systems below carry client data, and a mocked-up
   * "screenshot" of data that never existed would be the one dishonest thing
   * on a page whose whole argument is evidence.
   */
  explorer: {
    heading: {
      de: 'Sieben Schichten, aus denen ein System besteht',
      en: 'The seven layers a system is made of',
      tr: 'Bir sistemi oluşturan yedi katman',
      kk: 'Жүйені құрайтын жеті қабат',
    },
    intro: {
      de: 'Klicken Sie sich durch die Bausteine, die unter jeder Oberfläche liegen. Die Bilder sind Schemata, keine Screenshots — echte Ansichten zeigen wir Ihnen in den beiden Systemen weiter unten, mit echten Daten und echtem Login.',
      en: 'Click through the building blocks that sit under every interface. These pictures are schematics, not screenshots — real views are in the two live systems further down, with real data and a real login.',
      tr: 'Her arayüzün altında duran yapı taşlarını tek tek inceleyin. Buradaki görseller şemadır, ekran görüntüsü değil — gerçek görünümleri aşağıdaki iki canlı sistemde, gerçek veriyle ve gerçek girişle gösteriyoruz.',
      kk: 'Әр интерфейстің астында тұрған құрылыс блоктарын басып көріңіз. Мұндағы суреттер — схема, скриншот емес: нақты көріністерді төмендегі екі жүйеде, нақты дерекпен және нақты кірумен көрсетеміз.',
    },
    hint: {
      de: 'Schema — keine echten Daten',
      en: 'Schematic — no real data',
      tr: 'Şema — gerçek veri değil',
      kk: 'Схема — нақты дерек емес',
    },
    /** Labels of the three beats each layer's scenario is told in. */
    beats: {
      situation: { de: 'Die Situation', en: 'The situation', tr: 'Durum', kk: 'Жағдай' },
      without: { de: 'Ohne System', en: 'Without a system', tr: 'Sistem olmadan', kk: 'Жүйесіз' },
      solved: { de: 'Mit dieser Schicht', en: 'With this layer', tr: 'Bu katmanla', kk: 'Осы қабатпен' },
    },
  },

  /**
   * The integration section. "A system that cannot connect to anything becomes
   * the next spreadsheet" is already the promise made in `capabilities`; this
   * section is where the page shows what connecting actually means.
   */
  integrations: {
    heading: {
      de: 'Ein System, das an Ihren Rest andockt',
      en: 'A system that docks onto everything else you run',
      tr: 'Kullandığınız her şeye bağlanan bir sistem',
      kk: 'Қалған бәріне жалғанатын жүйе',
    },
    intro: {
      de: 'Kein Betrieb fängt bei null an. Buchhaltung, Kalender, Zahlungsdienst und Ticketsystem stehen schon da — und sie bleiben stehen. Wir bauen die Verbindungen dorthin über dokumentierte Schnittstellen, damit Daten einmal entstehen und überall gelten.',
      en: 'No company starts from zero. Accounting, calendars, payment providers and a ticket system are already there — and they stay. We build the connections through documented interfaces, so a piece of data is created once and counts everywhere.',
      tr: 'Hiçbir işletme sıfırdan başlamaz. Muhasebe, takvim, ödeme sağlayıcısı ve çağrı sistemi zaten oradadır — ve orada kalır. Bağlantıları belgelenmiş arayüzler üzerinden kuruyoruz; böylece bir veri bir kez oluşur ve her yerde geçerli olur.',
      kk: 'Ешбір кәсіп нөлден бастамайды. Бухгалтерия, күнтізбе, төлем қызметі және тікет жүйесі бұрыннан бар — әрі сол күйі қалады. Байланыстарды құжатталған интерфейстер арқылы саламыз, сонда дерек бір рет пайда болып, бәрінде жарамды болады.',
    },
    coreLabel: { de: 'Ihr System', en: 'Your system', tr: 'Sisteminiz', kk: 'Сіздің жүйеңіз' },
    nodes: [
      { de: 'Buchhaltung', en: 'Accounting', tr: 'Muhasebe', kk: 'Бухгалтерия' },
      { de: 'Kalender', en: 'Calendar', tr: 'Takvim', kk: 'Күнтізбе' },
      { de: 'Zahlungsdienst', en: 'Payments', tr: 'Ödeme', kk: 'Төлем' },
      { de: 'Ticketsystem', en: 'Ticketing', tr: 'Çağrı sistemi', kk: 'Тікет жүйесі' },
      { de: 'E-Mail & Messenger', en: 'Email & messaging', tr: 'E-posta ve mesajlaşma', kk: 'Пошта және мессенджер' },
      { de: 'Anmeldung (SSO)', en: 'Sign-in (SSO)', tr: 'Oturum açma (SSO)', kk: 'Кіру (SSO)' },
      { de: 'Behördenportale', en: 'Government portals', tr: 'Kamu portalları', kk: 'Мемлекеттік порталдар' },
      { de: 'Dokumentenablage', en: 'Document storage', tr: 'Doküman arşivi', kk: 'Құжат қоймасы' },
    ],
    note: {
      de: 'Welche davon angebunden werden, entscheidet Phase drei — und was technisch nicht geht, sagen wir dort, nicht nach der Unterschrift.',
      en: 'Which of them get connected is decided in phase three — and whatever is not technically possible, we say so there, not after the signature.',
      tr: 'Hangilerinin bağlanacağına üçüncü aşamada karar verilir — teknik olarak mümkün olmayanı da imzadan sonra değil, orada söyleriz.',
      kk: 'Қайсысы жалғанатынын үшінші кезең шешеді, ал техникалық мүмкін емес нәрсені қол қойылғаннан кейін емес, сол жерде айтамыз.',
    },
  },

  /**
   * Security and operation. Every line here is a contractual or architectural
   * fact rather than a quality claim, which is what a procurement department
   * is actually reading this page for.
   */
  security: {
    heading: {
      de: 'Was passiert, wenn etwas passiert',
      en: 'What happens when something happens',
      tr: 'Bir şey olduğunda ne olur',
      kk: 'Бірдеңе болса, не болады',
    },
    intro: {
      de: 'Ein System ist erst dann fertig, wenn geklärt ist, was im schlechten Fall gilt. Diese sieben Punkte gehören zum Bauplan, nicht zum Zusatzpaket.',
      en: 'A system is only finished once it is clear what applies on a bad day. These seven points are part of the blueprint, not of an add-on package.',
      tr: 'Bir sistem, kötü günde neyin geçerli olduğu netleşmeden bitmez. Bu yedi madde ek pakette değil, yapı planında yer alır.',
      kk: 'Жүйе жаман күні не болатыны айқындалмайынша бітпейді. Осы жеті тармақ қосымша пакетте емес, жобаның өзінде тұр.',
    },
    items: [
      {
        title: { de: 'Rechte in der Datenbank', en: 'Rights in the database', tr: 'Veritabanında yetkiler', kk: 'Дерекқордағы құқықтар' },
        text: {
          de: 'Zugriff wird auf Zeilenebene erzwungen, nicht in der Oberfläche ausgeblendet. Ein Fehler im Frontend gibt damit keine fremden Datensätze preis.',
          en: 'Access is enforced at row level, not hidden in the interface. A bug in the front end therefore cannot leak somebody else’s records.',
          tr: 'Erişim arayüzde gizlenmez, satır düzeyinde zorunlu kılınır. Böylece ön yüzdeki bir hata başkasının kayıtlarını açığa çıkaramaz.',
          kk: 'Қолжетімділік интерфейсте жасырылмай, жол деңгейінде мәжбүрленеді. Сондықтан фронтендтегі қате бөгде жазбаны ашып жібере алмайды.',
        },
      },
      {
        title: { de: 'Nachweiskette ohne Lücke', en: 'An audit trail without gaps', tr: 'Boşluksuz kanıt zinciri', kk: 'Үзіліссіз дәлел тізбегі' },
        text: {
          de: 'Jede Änderung trägt Person, Zeitpunkt und Vorzustand. Nichts wird überschrieben, ohne dass der alte Stand nachlesbar bleibt.',
          en: 'Every change carries a person, a timestamp and the previous state. Nothing is overwritten without the old state remaining readable.',
          tr: 'Her değişiklik kişi, zaman ve önceki durumu taşır. Eski durum okunabilir kalmadan hiçbir şeyin üzerine yazılmaz.',
          kk: 'Әр өзгеріс адамды, уақытты және алдыңғы күйді сақтайды. Ескі күйі оқылмай тұрып ештеңе қайта жазылмайды.',
        },
      },
      {
        title: { de: 'Server in der EU', en: 'Servers in the EU', tr: 'Sunucular AB’de', kk: 'Серверлер ЕО-да' },
        text: {
          de: 'Auftragsverarbeitungsvertrag nach DSGVO, Datenhaltung in der EU, deutscher Vertragspartner und deutscher Gerichtsstand.',
          en: 'A GDPR data-processing agreement, data held in the EU, a German contracting party and a German place of jurisdiction.',
          tr: 'GDPR kapsamında veri işleme sözleşmesi, AB’de veri saklama, Alman sözleşme tarafı ve Alman yetkili mahkemesi.',
          kk: 'GDPR бойынша деректерді өңдеу шарты, деректер ЕО-да сақталады, шарт тарабы да, соттылық орны да Германияда.',
        },
      },
      {
        title: { de: 'Sicherung und Wiederanlauf', en: 'Backups and recovery', tr: 'Yedekleme ve yeniden başlatma', kk: 'Сақтық көшірме және қалпына келтіру' },
        text: {
          de: 'Gesicherte Stände und ein geprobter Wiederanlauf. Eine Sicherung, die nie zurückgespielt wurde, ist keine Sicherung.',
          en: 'Secured states and a rehearsed recovery. A backup that has never been restored is not a backup.',
          tr: 'Yedeklenmiş durumlar ve provası yapılmış bir geri dönüş. Hiç geri yüklenmemiş bir yedek, yedek değildir.',
          kk: 'Сақталған күйлер және жаттығып көрген қалпына келтіру. Ешқашан қайтарылып көрілмеген көшірме — көшірме емес.',
        },
      },
      {
        title: { de: 'Barrierefrei nach BFSG', en: 'Accessible under the BFSG', tr: 'BFSG’ye göre erişilebilir', kk: 'BFSG бойынша қолжетімді' },
        text: {
          de: 'Bedienbar per Tastatur, lesbar mit Screenreader, ausreichende Kontraste. Für viele Betriebe ist das seit 2025 Pflicht, nicht Kür.',
          en: 'Operable by keyboard, readable with a screen reader, sufficient contrast. For many companies this has been a legal duty since 2025, not a nicety.',
          tr: 'Klavyeyle kullanılabilir, ekran okuyucuyla okunabilir, yeterli kontrast. Birçok işletme için bu 2025’ten beri tercih değil, yükümlülük.',
          kk: 'Пернетақтамен басқарылады, скринридермен оқылады, контрасты жеткілікті. Көп кәсіп үшін бұл 2025 жылдан бері таңдау емес, міндет.',
        },
      },
      {
        title: { de: 'Geprüft, nicht nur gebaut', en: 'Tested, not just built', tr: 'Sadece yapılmış değil, test edilmiş', kk: 'Тек құрылған емес, тексерілген' },
        text: {
          de: 'Abnahmekriterien vor der Entwicklung, Testfälle nach ISTQB-Verfahren, Regression vor jedem Livegang. Das ist das Geschäft, aus dem WAMOCON kommt.',
          en: 'Acceptance criteria before development, test cases designed to ISTQB techniques, regression before every release. This is the business WAMOCON comes from.',
          tr: 'Geliştirmeden önce kabul kriterleri, ISTQB tekniklerine göre test senaryoları, her yayından önce regresyon. WAMOCON’un geldiği iş tam da budur.',
          kk: 'Әзірлеуге дейінгі қабылдау критерийлері, ISTQB әдістері бойынша тест жағдайлары, әр шығарылым алдындағы регрессия. WAMOCON тап осы саладан шыққан.',
        },
      },
      {
        title: { de: 'Ausstieg geregelt', en: 'A regulated way out', tr: 'Düzenlenmiş çıkış', kk: 'Реттелген шығу' },
        text: {
          de: 'Quellcode und Daten gehören Ihnen. Eine Ausstiegsklausel regelt die Herausgabe in einem Format, das jemand anderes lesen kann — auch im Streit.',
          en: 'Source code and data belong to you. An exit clause governs handover in a format somebody else can read — including in a dispute.',
          tr: 'Kaynak kod ve veriler size aittir. Bir çıkış maddesi, devrin başka birinin okuyabileceği bir biçimde yapılmasını düzenler — anlaşmazlık hâlinde de.',
          kk: 'Бастапқы код пен деректер сізге тиесілі. Шығу тармағы оларды басқа біреу оқи алатын форматта тапсыруды реттейді, тіпті дау кезінде де.',
        },
      },
    ],
  },
} as const;

/**
 * The seven layers behind the module explorer.
 *
 * `diagram` selects which schematic the page draws; `labels` are the words
 * written into that schematic, in order, so the picture is translated like any
 * other copy. The diagrams are abstract on purpose: they carry no figures,
 * because a number invented for a picture is still an invented number.
 */
export interface SystemModule {
  key: string;
  label: L;
  headline: L;
  text: L;
  points: L[];
  /**
   * One concrete moment from a working day, in three beats. The panels used to
   * say what a layer is and left the reader to work out why it matters; a
   * situation they recognise, the thing that goes wrong without the layer, and
   * the way it is solved does that work for them. Deliberately small and
   * specific — a trainee who may not see purchase prices beats "granular
   * permission management".
   */
  scenario: { situation: L; without: L; solved: L };
  diagram: 'records' | 'workflow' | 'rights' | 'documents' | 'finance' | 'api' | 'insights';
  labels: L[];
}

export const modules: SystemModule[] = [
  {
    key: 'stammdaten',
    label: { de: 'Stammdaten', en: 'Master data', tr: 'Ana veriler', kk: 'Негізгі деректер' },
    headline: {
      de: 'Ein Datensatz statt drei Listen',
      en: 'One record instead of three lists',
      tr: 'Üç liste yerine tek kayıt',
      kk: 'Үш тізімнің орнына бір жазба',
    },
    text: {
      de: 'Kunde, Objekt, Lieferant, Mitarbeiter: jeder Gegenstand Ihres Betriebs existiert genau einmal, mit einer Historie und einer verantwortlichen Person. Wer den Datensatz ändert, ändert ihn für alle — das ist der Unterschied zwischen einer Datenbank und einer Tabelle.',
      en: 'Customer, property, supplier, employee: every object in your business exists exactly once, with a history and a person accountable for it. Whoever edits the record edits it for everyone — that is the difference between a database and a spreadsheet.',
      tr: 'Müşteri, portföy, tedarikçi, çalışan: işletmenizdeki her nesne tam olarak bir kez var olur; bir geçmişi ve sorumlu bir kişisi vardır. Kaydı değiştiren, herkes için değiştirir — veritabanı ile tablo arasındaki fark budur.',
      kk: 'Клиент, нысан, жеткізуші, қызметкер: кәсібіңіздегі әр нысан дәл бір рет қана болады, тарихымен және жауапты адамымен. Жазбаны өзгерткен адам оны бәрі үшін өзгертеді — дерекқор мен кестенің айырмасы осы.',
    },
    points: [
      { de: 'Dubletten werden beim Anlegen erkannt, nicht beim Jahresabschluss', en: 'Duplicates are caught on creation, not at year end', tr: 'Mükerrer kayıtlar yıl sonunda değil, oluştururken yakalanır', kk: 'Қайталанған жазба жыл соңында емес, құру кезінде табылады' },
      { de: 'Pflichtfelder erzwingen die Angaben, die später jemand braucht', en: 'Required fields enforce the details somebody will need later', tr: 'Zorunlu alanlar, sonradan birinin ihtiyaç duyacağı bilgileri zorunlu kılar', kk: 'Міндетті өрістер кейін біреуге керек болатын мәліметті талап етеді' },
      { de: 'Jeder Datensatz kennt seine eigene Änderungsgeschichte', en: 'Every record knows its own change history', tr: 'Her kayıt kendi değişiklik geçmişini bilir', kk: 'Әр жазба өз өзгеріс тарихын біледі' },
    ],
    scenario: {
      situation: { de: 'Ein Kunde ruft an und fragt nach dem Stand. Drei Kolleginnen haben ihn angelegt, jede etwas anders geschrieben.', en: 'A customer calls and asks where things stand. Three colleagues have created him, each spelling the name slightly differently.', tr: 'Bir müşteri arayıp durumu soruyor. Üç meslektaş onu ayrı ayrı kaydetmiş, her biri adını biraz farklı yazmış.', kk: 'Клиент қоңырау шалып, істің жайын сұрайды. Оны үш әріптес бөлек енгізген, әрқайсысы атын сәл өзгеше жазған.' },
      without: { de: 'Die Antwort hängt davon ab, welche der drei Karteien jemand zuerst öffnet. Zwei davon sind veraltet, und man sieht ihnen das nicht an.', en: 'The answer depends on which of the three files somebody opens first. Two are out of date, and nothing about them says so.', tr: 'Yanıt, üç kayıttan hangisinin önce açıldığına bağlı. İkisi güncel değil ve bunu dışarıdan anlamak mümkün değil.', kk: 'Жауап үш жазбаның қайсысы бірінші ашылғанына байланысты. Екеуі ескірген, бірақ оны сырттан білу мүмкін емес.' },
      solved: { de: 'Der Datensatz existiert einmal. Beim Anlegen meldet das System die Ähnlichkeit, und die Historie zeigt, wer wann was geändert hat — die Antwort ist dieselbe, egal wer sie gibt.', en: 'The record exists once. On creation the system flags the similarity, and the history shows who changed what and when — the answer is the same whoever gives it.', tr: 'Kayıt bir kez var olur. Oluştururken sistem benzerliği bildirir ve geçmiş kimin ne zaman neyi değiştirdiğini gösterir — yanıtı kim verirse versin aynıdır.', kk: 'Жазба бір рет қана болады. Құру кезінде жүйе ұқсастықты ескертеді, ал тарих кімнің қашан нені өзгерткенін көрсетеді: жауап кім берсе де бірдей.' },
    },
    diagram: 'records',
    labels: [
      { de: 'Datensatz', en: 'Record', tr: 'Kayıt', kk: 'Жазба' },
      { de: 'Zuständig', en: 'Owner', tr: 'Sorumlu', kk: 'Жауапты' },
      { de: 'Geändert', en: 'Changed', tr: 'Değiştirildi', kk: 'Өзгертілді' },
      { de: 'einmalig', en: 'unique', tr: 'benzersiz', kk: 'бірегей' },
    ],
  },
  {
    key: 'vorgaenge',
    label: { de: 'Vorgänge', en: 'Cases', tr: 'İşlemler', kk: 'Істер' },
    headline: {
      de: 'Ein Ablauf, der sich nicht überspringen lässt',
      en: 'A process that cannot be skipped',
      tr: 'Atlanamayan bir akış',
      kk: 'Аттап өтуге болмайтын ағын',
    },
    text: {
      de: 'Jeder Vorgang hat einen Zustand und erlaubte Übergänge. Eine Freigabe lässt sich nicht überspringen, weil gerade jemand im Urlaub ist — sie lässt sich vertreten, und auch das steht später in der Akte. Der Ablauf lebt im System, nicht in der Erinnerung.',
      en: 'Every case has a state and permitted transitions. An approval cannot be skipped because somebody is on holiday — it can be delegated, and that too is on the record afterwards. The process lives in the system, not in someone’s memory.',
      tr: 'Her işlemin bir durumu ve izin verilen geçişleri vardır. Biri izinde diye onay atlanamaz — vekâlet verilebilir ve bu da sonradan kayıtta görünür. Akış hafızada değil, sistemde yaşar.',
      kk: 'Әр істің күйі және рұқсат етілген ауысулары бар. Біреу демалыста деп бекітуді аттап өтуге болмайды — оны басқаға тапсыруға болады, әрі ол да кейін жазбада тұрады. Ағын естеде емес, жүйеде тұрады.',
    },
    points: [
      { de: 'Zustände und Übergänge werden mit Ihnen festgelegt, nicht von uns geraten', en: 'States and transitions are agreed with you, not guessed by us', tr: 'Durumlar ve geçişler bizim tahminimizle değil, sizinle birlikte belirlenir', kk: 'Күйлер мен ауысулар біздің болжамымызбен емес, сізбен бірге бекітіледі' },
      { de: 'Fristen und Wiedervorlagen erinnern das System, nicht die Person', en: 'Deadlines and reminders sit with the system, not with a person', tr: 'Süreler ve hatırlatmalar kişide değil, sistemde durur', kk: 'Мерзімдер мен еске салулар адамда емес, жүйеде тұрады' },
      { de: 'Vertretung ist vorgesehen, nicht improvisiert', en: 'Cover is designed in, not improvised', tr: 'Vekâlet doğaçlama değil, önceden tasarlanmıştır', kk: 'Орынбасарлық суырыпсалма емес, алдын ала қарастырылған' },
    ],
    scenario: {
      situation: { de: 'Ein Angebot mit ungewöhnlichem Rabatt soll heute raus. Die Person, die freigeben darf, ist im Urlaub.', en: 'A quote with an unusual discount has to go out today. The person allowed to approve it is on holiday.', tr: 'Alışılmadık bir indirim içeren teklif bugün gitmeli. Onay verebilecek kişi izinde.', kk: 'Ерекше жеңілдігі бар ұсыныс бүгін кетуі керек. Бекітуге құқылы адам демалыста.' },
      without: { de: 'Jemand gibt es trotzdem raus und sagt später Bescheid. Drei Monate danach fragt die Buchhaltung, wer das entschieden hat, und niemand weiß es mehr genau.', en: 'Somebody sends it anyway and mentions it later. Three months on, accounting asks who decided that, and nobody quite remembers.', tr: 'Biri yine de gönderir, sonra haber verir. Üç ay sonra muhasebe kimin karar verdiğini sorar ve kimse tam hatırlamaz.', kk: 'Біреу оны бәрібір жібереді де, кейін айтады. Үш айдан соң бухгалтерия кім шешкенін сұрайды, ал ешкім нақты есіне түсіре алмайды.' },
      solved: { de: 'Der Vorgang bleibt im Zustand „geprüft" stehen und lässt sich nicht überspringen. Die Vertretung ist hinterlegt, gibt frei — und dass sie es war, steht danach in der Akte.', en: 'The case stays in the "reviewed" state and cannot be skipped. The designated stand-in approves it, and the fact that it was them is on the record afterwards.', tr: 'İşlem “incelendi” durumunda kalır ve atlanamaz. Tanımlı vekil onaylar ve bunu onun yaptığı sonrasında kayıtta durur.', kk: 'Іс «тексерілген» күйінде қалады әрі оны аттап өтуге болмайды. Тағайындалған орынбасар бекітеді, ал оны кімнің істегені кейін жазбада тұрады.' },
    },
    diagram: 'workflow',
    labels: [
      { de: 'offen', en: 'open', tr: 'açık', kk: 'ашық' },
      { de: 'geprüft', en: 'reviewed', tr: 'incelendi', kk: 'тексерілген' },
      { de: 'freigegeben', en: 'approved', tr: 'onaylandı', kk: 'бекітілген' },
      { de: 'abgerechnet', en: 'invoiced', tr: 'faturalandı', kk: 'шот қойылған' },
    ],
  },
  {
    key: 'rechte',
    label: { de: 'Rollen & Rechte', en: 'Roles & rights', tr: 'Roller ve yetkiler', kk: 'Рөлдер мен құқықтар' },
    headline: {
      de: 'Wer was sieht, entscheidet die Datenbank',
      en: 'The database decides who sees what',
      tr: 'Kimin neyi göreceğine veritabanı karar verir',
      kk: 'Кімнің нені көретінін дерекқор шешеді',
    },
    text: {
      de: 'Rechte werden nicht in der Oberfläche ausgeblendet, sondern auf Zeilenebene erzwungen. Eine Rolle sieht genau die Datensätze, die zu ihr gehören — und ein Fehler im Frontend kann daran nichts ändern, weil dort gar nicht mehr ankommt, was nicht erlaubt ist.',
      en: 'Rights are not hidden in the interface, they are enforced at row level. A role sees exactly the records that belong to it — and a bug in the front end cannot change that, because what is not permitted never arrives there.',
      tr: 'Yetkiler arayüzde gizlenmez, satır düzeyinde zorunlu kılınır. Bir rol yalnızca kendisine ait kayıtları görür — ön yüzdeki bir hata bunu değiştiremez, çünkü izin verilmeyen veri oraya hiç ulaşmaz.',
      kk: 'Құқықтар интерфейсте жасырылмайды, жол деңгейінде мәжбүрленеді. Рөл тек өзіне тиесілі жазбаларды көреді, ал фронтендтегі қате оны өзгерте алмайды, өйткені рұқсат етілмеген дерек ол жерге тіпті жетпейді.',
    },
    points: [
      { de: 'Eine Rollenmatrix, die Sie in Phase drei selbst freigeben', en: 'A role matrix you sign off yourself in phase three', tr: 'Üçüncü aşamada kendi onayladığınız bir rol matrisi', kk: 'Үшінші кезеңде өзіңіз бекітетін рөл матрицасы' },
      { de: 'Lesen, ändern, freigeben und löschen sind vier verschiedene Rechte', en: 'Read, edit, approve and delete are four different rights', tr: 'Okuma, değiştirme, onaylama ve silme dört ayrı yetkidir', kk: 'Оқу, өзгерту, бекіту және жою — төрт бөлек құқық' },
      { de: 'Jede Rechteänderung landet selbst in der Nachweiskette', en: 'Every change to a permission lands in the audit trail itself', tr: 'Her yetki değişikliği de kanıt zincirine düşer', kk: 'Әр құқық өзгерісі дәлел тізбегіне түседі' },
    ],
    scenario: {
      situation: { de: 'Ein Praktikant soll Angebote schreiben. Die Einkaufspreise darf er dabei nicht sehen.', en: 'An intern is to write quotes. He must not see the purchase prices while doing it.', tr: 'Bir stajyer teklif yazacak. Bunu yaparken alış fiyatlarını görmemeli.', kk: 'Тәжірибеден өтуші ұсыныс жазуы керек. Сол кезде сатып алу бағасын көрмеуі тиіс.' },
      without: { de: 'Es entsteht eine zweite Tabelle ohne die Spalte. Ab Tag zwei weicht sie ab, und irgendwann schreibt jemand ein Angebot aus der falschen Datei.', en: 'A second spreadsheet appears without that column. From day two it drifts, and eventually somebody writes a quote from the wrong file.', tr: 'O sütun olmadan ikinci bir tablo oluşur. İkinci günden itibaren sapar ve bir gün biri yanlış dosyadan teklif yazar.', kk: 'Ол баған жоқ екінші кесте пайда болады. Екінші күннен бастап ол ауытқиды, ақыры біреу қате файлдан ұсыныс жазады.' },
      solved: { de: 'Er arbeitet in derselben Liste wie alle. Die Spalte kommt für seine Rolle gar nicht erst aus der Datenbank — nicht ausgeblendet, sondern nicht geliefert.', en: 'He works in the same list as everyone else. For his role that column never leaves the database — not hidden, simply not sent.', tr: 'Herkesle aynı listede çalışır. O sütun onun rolü için veritabanından hiç çıkmaz — gizlenmiş değil, gönderilmemiştir.', kk: 'Ол бәрімен бір тізімде жұмыс істейді. Оның рөлі үшін ол баған дерекқордан мүлде шықпайды: жасырылған емес, жіберілмеген.' },
    },
    diagram: 'rights',
    labels: [
      { de: 'Sachbearbeitung', en: 'Case handling', tr: 'Uzman', kk: 'Маман' },
      { de: 'Leitung', en: 'Management', tr: 'Yönetim', kk: 'Басшылық' },
      { de: 'Buchhaltung', en: 'Accounting', tr: 'Muhasebe', kk: 'Бухгалтерия' },
      { de: 'lesen', en: 'read', tr: 'oku', kk: 'оқу' },
      { de: 'ändern', en: 'edit', tr: 'değiştir', kk: 'өзгерту' },
      { de: 'freigeben', en: 'approve', tr: 'onayla', kk: 'бекіту' },
    ],
  },
  {
    key: 'dokumente',
    label: { de: 'Dokumente', en: 'Documents', tr: 'Dokümanlar', kk: 'Құжаттар' },
    headline: {
      de: 'Der Beleg hängt am Vorgang, nicht im Postfach',
      en: 'The document hangs on the case, not in an inbox',
      tr: 'Belge posta kutusunda değil, işlemde durur',
      kk: 'Құжат пошта жәшігінде емес, істің өзінде тұрады',
    },
    text: {
      de: 'Verträge, Nachweise, Fotos und Protokolle liegen an dem Vorgang, zu dem sie gehören — versioniert, mit Datum und mit der Person, die sie hochgeladen hat. Der Tag, an dem jemand danach fragt, ist der Tag, für den dieses Modul gebaut wurde.',
      en: 'Contracts, records, photos and minutes sit on the case they belong to — versioned, dated, and with the person who uploaded them. The day somebody asks for one is the day this layer was built for.',
      tr: 'Sözleşmeler, kanıtlar, fotoğraflar ve tutanaklar ait oldukları işlemde durur — sürümlü, tarihli ve yükleyen kişiyle birlikte. Birinin bunu sorduğu gün, bu katmanın yapılma nedenidir.',
      kk: 'Шарттар, дәлелдер, фотолар және хаттамалар өздері тиесілі істің қасында тұрады: нұсқасымен, күнімен және жүктеген адамымен. Біреу оны сұрайтын күн — осы қабаттың жасалу себебі.',
    },
    points: [
      { de: 'Versionen bleiben erhalten, die alte Fassung verschwindet nicht', en: 'Versions are kept; the old one does not disappear', tr: 'Sürümler korunur, eski hâli kaybolmaz', kk: 'Нұсқалар сақталады, ескісі жоғалмайды' },
      { de: 'Ablaufdaten und Fristen meldet das System von sich aus', en: 'Expiry dates and deadlines are raised by the system itself', tr: 'Geçerlilik ve son tarihleri sistem kendiliğinden bildirir', kk: 'Мерзімдерді жүйенің өзі ескертеді' },
      { de: 'Sichtbarkeit folgt derselben Rollenmatrix wie die Daten', en: 'Visibility follows the same role matrix as the data', tr: 'Görünürlük, veriyle aynı rol matrisini izler', kk: 'Көріну деректермен бірдей рөл матрицасына бағынады' },
    ],
    scenario: {
      situation: { de: 'Zwei Jahre nach einem Umbau fragt eine Versicherung nach dem Abnahmeprotokoll und den Fotos vom Tag der Übergabe.', en: 'Two years after a refit, an insurer asks for the handover report and the photos taken on the day.', tr: 'Bir tadilattan iki yıl sonra sigorta şirketi teslim tutanağını ve o günkü fotoğrafları istiyor.', kk: 'Жөндеуден екі жыл өткен соң сақтандыру компаниясы қабылдау хаттамасын және сол күнгі суреттерді сұрайды.' },
      without: { de: 'Die Fotos sind auf einem Telefon, das inzwischen jemand anderem gehört. Das Protokoll liegt als Anhang in einem Postfach, das mit dem Kollegen gegangen ist.', en: 'The photos are on a phone that now belongs to somebody else. The report is an attachment in a mailbox that left with the colleague.', tr: 'Fotoğraflar artık başkasına ait bir telefonda. Tutanak ise şirketten ayrılan meslektaşın posta kutusunda ek olarak duruyor.', kk: 'Суреттер қазір басқа біреуге тиесілі телефонда. Хаттама болса, кеткен әріптестің пошта жәшігінде тіркеме болып жатыр.' },
      solved: { de: 'Beides hängt an dem Vorgang, zu dem es gehört, versioniert und mit der Person, die es hochgeladen hat. Die Anfrage ist in zwei Minuten beantwortet statt in zwei Tagen.', en: 'Both sit on the case they belong to, versioned and with the person who uploaded them. The request is answered in two minutes rather than two days.', tr: 'İkisi de ait oldukları işlemde durur; sürümlü ve yükleyen kişiyle birlikte. Talep iki gün yerine iki dakikada yanıtlanır.', kk: 'Екеуі де өздері тиесілі істің қасында тұрады: нұсқасымен және жүктеген адамымен. Сұрау екі күнде емес, екі минутта жауап табады.' },
    },
    diagram: 'documents',
    labels: [
      { de: 'hochgeladen', en: 'uploaded', tr: 'yüklendi', kk: 'жүктелді' },
      { de: 'ersetzt', en: 'replaced', tr: 'değiştirildi', kk: 'ауыстырылды' },
      { de: 'freigegeben', en: 'approved', tr: 'onaylandı', kk: 'бекітілген' },
    ],
  },
  {
    key: 'finanzen',
    label: { de: 'Finanzen', en: 'Finance', tr: 'Finans', kk: 'Қаржы' },
    headline: {
      de: 'Offene Posten, die niemand von Hand zusammensucht',
      en: 'Open items nobody has to collect by hand',
      tr: 'Kimsenin elle toplamadığı açık kalemler',
      kk: 'Ешкім қолмен жинамайтын ашық баптар',
    },
    text: {
      de: 'Forderung, Zahlung, Mahnung und Beleg hängen an demselben Vorgang. Was offen ist, ist offen, weil es der Datensatz sagt — nicht, weil jemand am Monatsende zwei Tabellen nebeneinandergelegt hat.',
      en: 'Receivable, payment, reminder and document hang on the same case. What is outstanding is outstanding because the record says so — not because somebody laid two spreadsheets side by side at the end of the month.',
      tr: 'Alacak, ödeme, hatırlatma ve belge aynı işleme bağlıdır. Açık olan, kayıt öyle dediği için açıktır — ay sonunda biri iki tabloyu yan yana koyduğu için değil.',
      kk: 'Талап, төлем, ескерту және құжат бір істің бойында тұрады. Ашық бап кестені қатар қойған біреудің емес, жазбаның айтуымен ашық болады.',
    },
    points: [
      { de: 'Zahlungseingang und Vorgang treffen sich automatisch', en: 'Incoming payment and case are matched automatically', tr: 'Gelen ödeme ve işlem otomatik eşleşir', kk: 'Түскен төлем мен іс автоматты түрде сәйкестендіріледі' },
      { de: 'Mehrere Währungen, wenn Ihr Geschäft sie braucht', en: 'Several currencies, when your business needs them', tr: 'İşiniz gerektiriyorsa birden çok para birimi', kk: 'Кәсібіңізге керек болса, бірнеше валюта' },
      { de: 'Export in das Format, das Ihre Buchhaltung schon liest', en: 'Export in the format your accounting already reads', tr: 'Muhasebenizin zaten okuduğu biçimde dışa aktarım', kk: 'Бухгалтерияңыз бұрыннан оқитын форматқа шығару' },
    ],
    scenario: {
      situation: { de: 'Am Monatsende soll die Geschäftsführung wissen, was offen ist und wie lange schon.', en: 'At month end, management wants to know what is outstanding and for how long.', tr: 'Ay sonunda yönetim, neyin açık olduğunu ve ne kadar süredir açık olduğunu bilmek istiyor.', kk: 'Ай соңында басшылық не ашық тұрғанын және қанша уақыттан бері екенін білгісі келеді.' },
      without: { de: 'Jemand exportiert aus zwei Systemen und gleicht von Hand ab. Der Stand ist am Tag der Fertigstellung schon wieder alt, und Rückfragen beginnen von vorn.', en: 'Somebody exports from two systems and reconciles by hand. The result is already stale on the day it is finished, and any query starts over.', tr: 'Biri iki sistemden dışa aktarıp elle mutabakat yapar. Sonuç bittiği gün çoktan eskimiştir ve her soru baştan başlar.', kk: 'Біреу екі жүйеден экспорттап, қолмен салыстырады. Нәтиже дайын болған күні-ақ ескіреді, ал әр сұрақ басынан басталады.' },
      solved: { de: 'Forderung, Zahlung und Beleg hängen am selben Vorgang. Was offen ist, ist offen, weil der Datensatz es sagt — und jede Zeile lässt sich bis zum Beleg aufklappen.', en: 'Receivable, payment and document hang on the same case. What is outstanding is outstanding because the record says so — and every line opens down to the document.', tr: 'Alacak, ödeme ve belge aynı işleme bağlıdır. Açık olan, kayıt öyle dediği için açıktır ve her satır belgeye kadar açılabilir.', kk: 'Талап, төлем және құжат бір істің бойында тұрады. Ашық бап жазба солай дегендіктен ашық, әрі әр жол құжатқа дейін ашылады.' },
    },
    diagram: 'finance',
    labels: [
      { de: 'Forderung', en: 'Receivable', tr: 'Alacak', kk: 'Талап' },
      { de: 'Zahlung', en: 'Payment', tr: 'Ödeme', kk: 'Төлем' },
      { de: 'offen', en: 'outstanding', tr: 'açık', kk: 'ашық' },
      { de: 'aus dem Datensatz, nicht aus der Schätzung', en: 'from the record, not from an estimate', tr: 'tahminden değil, kayıttan', kk: 'болжамнан емес, жазбадан' },
    ],
  },
  {
    key: 'schnittstellen',
    label: { de: 'Schnittstellen', en: 'Interfaces', tr: 'Arayüzler', kk: 'Интерфейстер' },
    headline: {
      de: 'Dokumentierte Schnittstellen statt Insellösung',
      en: 'Documented interfaces instead of an island',
      tr: 'Ada çözümü yerine belgelenmiş arayüzler',
      kk: 'Оқшау шешім емес, құжатталған интерфейстер',
    },
    text: {
      de: 'Jedes System bekommt eine dokumentierte Schnittstelle nach außen und Ereignismeldungen nach innen. Damit kann Ihre Buchhaltung ziehen, Ihr Kalender schreiben und ein zukünftiges Werkzeug andocken, das es heute noch nicht gibt.',
      en: 'Every system gets a documented interface outwards and event notifications inwards. Your accounting can pull, your calendar can write, and a future tool that does not exist yet can dock onto it.',
      tr: 'Her sistem dışarıya belgelenmiş bir arayüz, içeriye olay bildirimleri alır. Böylece muhasebeniz veri çekebilir, takviminiz yazabilir ve bugün var olmayan bir araç ileride bağlanabilir.',
      kk: 'Әр жүйе сыртқа құжатталған интерфейс, ішке оқиға хабарламаларын алады. Сонда бухгалтерияңыз дерек ала алады, күнтізбеңіз жаза алады, ал бүгін жоқ құрал ертең жалғана алады.',
    },
    points: [
      { de: 'Zugriff von außen läuft über Schlüssel mit eigenen Rechten', en: 'Outside access runs through keys with rights of their own', tr: 'Dışarıdan erişim kendi yetkileri olan anahtarlarla yürür', kk: 'Сырттан кіру өз құқығы бар кілттер арқылы жүреді' },
      { de: 'Ereignisse werden gemeldet, statt im Minutentakt abgefragt', en: 'Events are pushed rather than polled every minute', tr: 'Olaylar dakika başı sorgulanmak yerine bildirilir', kk: 'Оқиғалар минут сайын сұралмай, өздігінен хабарланады' },
      { de: 'Jede Anbindung wird protokolliert wie jede andere Änderung', en: 'Every connection is logged like any other change', tr: 'Her bağlantı da diğer değişiklikler gibi kaydedilir', kk: 'Әр жалғанысы да басқа өзгеріс сияқты тіркеледі' },
    ],
    scenario: {
      situation: { de: 'Die Steuerkanzlei möchte die Belege monatlich in ihrem eigenen Format, und der Kalender des Außendienstes soll die Termine kennen.', en: 'The tax firm wants the documents monthly in its own format, and the field team’s calendar should know the appointments.', tr: 'Mali müşavir belgeleri her ay kendi biçiminde istiyor ve saha ekibinin takvimi randevuları bilmeli.', kk: 'Салық кеңсесі құжаттарды ай сайын өз форматында алғысы келеді, ал далалық команданың күнтізбесі кездесулерді білуі керек.' },
      without: { de: 'Einmal im Monat sitzt jemand einen halben Tag am Export, und Termine werden zweimal gepflegt. Beides funktioniert, bis die Person, die es macht, krank wird.', en: 'Once a month somebody spends half a day on the export, and appointments are maintained twice. Both work until the person doing it is off sick.', tr: 'Ayda bir kez biri yarım gününü dışa aktarıma verir ve randevular iki kez girilir. İkisi de, bunu yapan kişi hastalanana kadar işler.', kk: 'Айына бір рет біреу жарты күнін экспортқа жұмсайды, ал кездесулер екі рет енгізіледі. Екеуі де оны істейтін адам ауырғанша жұмыс істейді.' },
      solved: { de: 'Die Kanzlei zieht sich die Belege selbst über eine dokumentierte Schnittstelle, der Kalender bekommt jeden neuen Termin als Ereignis gemeldet. Beides läuft weiter, wenn niemand da ist.', en: 'The tax firm pulls the documents itself through a documented interface, and the calendar is notified of every new appointment as an event. Both keep running when nobody is there.', tr: 'Mali müşavir belgeleri belgelenmiş bir arayüzden kendisi çeker; takvime her yeni randevu olay olarak bildirilir. Kimse olmadığında da ikisi çalışmaya devam eder.', kk: 'Салық кеңсесі құжаттарды құжатталған интерфейс арқылы өзі алады, ал күнтізбеге әр жаңа кездесу оқиға ретінде хабарланады. Ешкім болмаса да, екеуі жұмысын жалғастырады.' },
    },
    diagram: 'api',
    labels: [
      { de: 'Datensätze lesen', en: 'Read records', tr: 'Kayıtları oku', kk: 'Жазбаларды оқу' },
      { de: 'Vorgang anlegen', en: 'Create a case', tr: 'İşlem oluştur', kk: 'Іс құру' },
      { de: 'Ereignis melden', en: 'Push an event', tr: 'Olay bildir', kk: 'Оқиға хабарлау' },
      { de: 'Schlüssel & Rechte', en: 'Key & rights', tr: 'Anahtar ve yetkiler', kk: 'Кілт және құқықтар' },
    ],
  },
  {
    key: 'auswertung',
    label: { de: 'Auswertung & KI', en: 'Insights & AI', tr: 'Analiz ve yapay zekâ', kk: 'Талдау және ЖИ' },
    headline: {
      de: 'Kennzahlen aus Daten, nicht aus Behauptungen',
      en: 'Figures from data, not from assertions',
      tr: 'İddialardan değil, veriden gelen sayılar',
      kk: 'Мәлімдемеден емес, деректен шыққан сандар',
    },
    text: {
      de: 'Auswertungen rechnen auf demselben Bestand, in dem gearbeitet wird. Und wo eine Zahl noch nicht berechnet werden kann, sagt die Kachel genau das, statt zu schätzen — eine geschätzte Kennzahl ist schlimmer als gar keine, weil jemand sie weiterreicht.',
      en: 'Reports calculate on the same records people work in. And where a figure cannot yet be calculated, the tile says exactly that instead of estimating — an estimated metric is worse than none, because somebody will pass it on.',
      tr: 'Analizler, üzerinde çalışılan veri kümesinin ta kendisinden hesaplanır. Bir sayı henüz hesaplanamıyorsa kutu tahmin yürütmez, bunu açıkça yazar — tahmini bir gösterge, hiç olmamasından kötüdür; çünkü biri onu başkasına aktarır.',
      kk: 'Талдаулар адамдар жұмыс істейтін дәл сол деректің үстінен есептеледі. Ал сан әлі есептелмейтін болса, тақташа болжам жасамай, соны ашық жазады: болжамды көрсеткіш мүлдем жоқтан да жаман, өйткені біреу оны әрі қарай таратады.',
    },
    points: [
      { de: 'Jede Kennzahl lässt sich bis zum einzelnen Datensatz aufklappen', en: 'Every figure can be opened down to the single record', tr: 'Her gösterge tek kayda kadar açılabilir', kk: 'Әр көрсеткішті жеке жазбаға дейін ашуға болады' },
      { de: 'Der KI-Assistent antwortet aus Ihren Inhalten und schweigt sonst', en: 'The AI assistant answers from your content and otherwise stays quiet', tr: 'Yapay zekâ asistanı kendi içeriğinizden yanıtlar, aksi hâlde susar', kk: 'ЖИ көмекшісі сіздің мазмұныңыздан жауап береді, әйтпесе үндемейді' },
      { de: 'Auswertungen respektieren dieselben Rechte wie die Listen', en: 'Reports respect the same rights as the lists do', tr: 'Analizler de listelerle aynı yetkilere uyar', kk: 'Талдаулар да тізімдермен бірдей құқықты сақтайды' },
    ],
    scenario: {
      situation: { de: 'In der Sitzung fällt die Frage, wie viele Vorgänge im letzten Quartal in der Freigabe hängen geblieben sind.', en: 'In a meeting somebody asks how many cases got stuck at approval last quarter.', tr: 'Toplantıda geçen çeyrekte kaç işlemin onayda takıldığı soruluyor.', kk: 'Отырыста өткен тоқсанда қанша істің бекітуде тұрып қалғаны сұралады.' },
      without: { de: 'Es wird geschätzt. Die Schätzung landet in einem Protokoll, aus dem Protokoll in einer Präsentation, und ab da gilt sie als Zahl.', en: 'Somebody estimates. The estimate goes into minutes, from the minutes into a deck, and from then on it counts as a figure.', tr: 'Bir tahmin yapılır. Tahmin tutanağa, tutanaktan sunuma geçer ve o andan itibaren sayı sayılır.', kk: 'Болжам айтылады. Болжам хаттамаға, хаттамадан презентацияға көшеді де, содан бастап сан ретінде қабылданады.' },
      solved: { de: 'Die Auswertung rechnet auf demselben Bestand, in dem gearbeitet wird, und lässt sich bis zum einzelnen Vorgang aufklappen. Und wo die Frage aus den Daten noch nicht zu beantworten ist, sagt die Kachel genau das.', en: 'The report calculates on the same records people work in and opens down to the single case. And where the data cannot answer the question yet, the tile says exactly that.', tr: 'Analiz, üzerinde çalışılan veri kümesinden hesaplanır ve tek işleme kadar açılabilir. Veriler soruyu henüz yanıtlayamıyorsa, kutu bunu açıkça yazar.', kk: 'Талдау адамдар жұмыс істейтін дәл сол дерек жиынынан есептеледі әрі жеке іске дейін ашылады. Ал дерек сұраққа әлі жауап бере алмаса, тақташа соны ашық жазады.' },
    },
    diagram: 'insights',
    labels: [
      { de: 'aus echten Daten', en: 'from real data', tr: 'gerçek veriden', kk: 'нақты деректен' },
      { de: 'noch nicht berechenbar', en: 'not yet calculable', tr: 'henüz hesaplanamıyor', kk: 'әзірге есептеуге келмейді' },
      { de: 'bis zum Datensatz aufklappbar', en: 'expandable to the record', tr: 'kayda kadar açılabilir', kk: 'жазбаға дейін ашылады' },
    ],
  },
];

/**
 * Voices from the two systems.
 *
 * READ THIS BEFORE EDITING. Every entry below is a DRAFT written to show the
 * shape and tone a usable quote has — a role, one sentence about the state
 * before, one about what changed. None of them is a real quote, and none of
 * them renders: the page only shows entries with `approved: true`, and until a
 * named person has said the words and agreed in writing to be named, the whole
 * section stays off the page.
 *
 * Star ratings are deliberately absent. In B2B nobody buys a system because it
 * has four and a half stars; they buy it because somebody in their own job
 * describes a Tuesday that got easier. That is why the shape is role → before
 * → after rather than a testimonial blob.
 *
 * The interview guide — which questions produce answers in this shape, and the
 * release wording — is in `docs/systemstimmen-leitfaden.md`.
 */
export interface SystemVoice {
  /** Set true ONLY once a named person has approved the exact wording. */
  approved: boolean;
  /** Which of the two reference systems the voice belongs to. */
  system: '1cati' | 'ditele';
  role: L;
  /** Filled in with the real person once they have agreed to be named. */
  name?: string;
  org?: string;
  before: L;
  after: L;
}

export const voices: SystemVoice[] = [
  {
    approved: false,
    system: '1cati',
    role: { de: 'Geschäftsführung', en: 'Managing director', tr: 'Genel müdür', kk: 'Басқарушы директор' },
    before: {
      de: 'Wenn ich wissen wollte, wo wir stehen, musste ich drei Leute fragen und bekam drei Stände.',
      en: 'If I wanted to know where we stood, I had to ask three people and got three answers.',
      tr: 'Nerede olduğumuzu bilmek istediğimde üç kişiye sormam gerekiyordu ve üç farklı cevap alıyordum.',
      kk: 'Қай жерде тұрғанымызды білгім келсе, үш адамнан сұрауға тура келетін, үш түрлі жауап алатынмын.',
    },
    after: {
      de: 'Heute mache ich den Arbeitsbereich auf. Die Frage stellt sich nicht mehr.',
      en: 'Now I open the workspace. The question does not come up any more.',
      tr: 'Artık çalışma alanını açıyorum. Soru artık ortaya çıkmıyor.',
      kk: 'Қазір жұмыс кеңістігін ашамын. Ол сұрақ енді туындамайды.',
    },
  },
  {
    approved: false,
    system: '1cati',
    role: { de: 'Vertriebsleitung', en: 'Head of sales', tr: 'Satış müdürü', kk: 'Сатылым жетекшісі' },
    before: {
      de: 'Jeder im Team hatte seine eigene Liste. Vor jedem Meeting habe ich sie zusammengeführt.',
      en: 'Everybody on the team had their own list. Before every meeting I merged them.',
      tr: 'Ekipteki herkesin kendi listesi vardı. Her toplantı öncesi onları birleştiriyordum.',
      kk: 'Командадағы әркімнің өз тізімі болатын. Әр жиналыс алдында оларды біріктіретінмін.',
    },
    after: {
      de: 'Es gibt eine Liste, und sie ist immer aktuell. Die Vorbereitung ist weggefallen.',
      en: 'There is one list and it is always current. The preparation has simply gone.',
      tr: 'Tek bir liste var ve hep güncel. Hazırlık aşaması tamamen ortadan kalktı.',
      kk: 'Бір ғана тізім бар, әрі ол әрқашан жаңа. Дайындық деген мүлде жоғалды.',
    },
  },
  {
    approved: false,
    system: '1cati',
    role: { de: 'Buchhaltung', en: 'Accounting', tr: 'Muhasebe', kk: 'Бухгалтерия' },
    before: {
      de: 'Zum Monatsende habe ich zwei Exporte nebeneinandergelegt und von Hand abgeglichen.',
      en: 'At month end I laid two exports side by side and reconciled them by hand.',
      tr: 'Ay sonunda iki dışa aktarımı yan yana koyup elle mutabakat yapıyordum.',
      kk: 'Ай соңында екі экспортты қатар қойып, қолмен салыстыратынмын.',
    },
    after: {
      de: 'Die offenen Posten stehen am Vorgang. Wenn jemand fragt, klappe ich die Zeile auf.',
      en: 'The outstanding items sit on the case. If somebody asks, I open the line.',
      tr: 'Açık kalemler işlemin üzerinde duruyor. Biri sorarsa satırı açıyorum.',
      kk: 'Ашық баптар істің бойында тұр. Біреу сұраса, жолды ашып көрсетемін.',
    },
  },
  {
    approved: false,
    system: '1cati',
    role: { de: 'Objektbetreuung', en: 'Property services', tr: 'Saha ve servis', kk: 'Нысанды күтіп ұстау' },
    before: {
      de: 'Einsätze kamen per Anruf. Was gemacht wurde, stand hinterher nirgends.',
      en: 'Jobs came in by phone. What had been done was afterwards written down nowhere.',
      tr: 'İşler telefonla geliyordu. Ne yapıldığı sonrasında hiçbir yerde yazmıyordu.',
      kk: 'Тапсырмалар телефонмен келетін. Не істелгені кейін еш жерде жазылмайтын.',
    },
    after: {
      de: 'Der Einsatz hängt am Objekt, mit Foto und Zeitpunkt. Diskussionen darüber gibt es nicht mehr.',
      en: 'The job hangs on the property, with a photo and a timestamp. There are no more arguments about it.',
      tr: 'İş, fotoğraf ve zaman bilgisiyle birlikte varlığa bağlı. Artık bu konuda tartışma olmuyor.',
      kk: 'Тапсырма нысанның бойында, фотосымен және уақытымен тұр. Бұл туралы дау енді жоқ.',
    },
  },
  {
    approved: false,
    system: '1cati',
    role: { de: 'Eigentümerin, Portalnutzerin', en: 'Owner, portal user', tr: 'Malik, portal kullanıcısı', kk: 'Меншік иесі, портал қолданушысы' },
    before: {
      de: 'Für jede Auskunft musste ich im Büro anrufen, am besten vormittags.',
      en: 'For any information I had to phone the office, preferably in the morning.',
      tr: 'Her bilgi için ofisi aramam gerekiyordu, tercihen sabahları.',
      kk: 'Кез келген ақпарат үшін кеңсеге қоңырау шалуым керек еді, ең дұрысы таңертең.',
    },
    after: {
      de: 'Ich sehe meinen Stand selbst, in meiner Sprache, auch abends um zehn.',
      en: 'I can see where I stand myself, in my own language, at ten in the evening as well.',
      tr: 'Durumumu kendim görebiliyorum, kendi dilimde, akşam onda bile.',
      kk: 'Өз жағдайымды өзім көремін, өз тілімде, тіпті кешкі онда да.',
    },
  },
  {
    approved: false,
    system: 'ditele',
    role: { de: 'Trainerin', en: 'Trainer', tr: 'Eğitmen', kk: 'Тренер' },
    before: {
      de: 'Fehlerberichte kamen per Mail, in jedem Format, das man sich vorstellen kann.',
      en: 'Defect reports arrived by email, in every format you can imagine.',
      tr: 'Hata raporları e-postayla, akla gelebilecek her biçimde geliyordu.',
      kk: 'Ақау есептері поштамен, ойға келетін кез келген форматта келетін.',
    },
    after: {
      de: 'Alle Einreichungen liegen an einem Ort, in einer Struktur. Ich bewerte, statt zu sortieren.',
      en: 'Every submission is in one place, in one structure. I review instead of sorting.',
      tr: 'Tüm teslimler tek yerde, tek yapıda. Artık ayıklamak yerine değerlendiriyorum.',
      kk: 'Барлық тапсырма бір жерде, бір құрылымда. Енді сұрыптамай, бағалаймын.',
    },
  },
  {
    approved: false,
    system: 'ditele',
    role: { de: 'Teilnehmer', en: 'Learner', tr: 'Katılımcı', kk: 'Қатысушы' },
    before: {
      de: 'Ich hatte Testen aus Folien gelernt und noch nie einen echten Fehlerbericht geschrieben.',
      en: 'I had learned testing from slides and had never written a real defect report.',
      tr: 'Testi slaytlardan öğrenmiştim ve hiç gerçek bir hata raporu yazmamıştım.',
      kk: 'Тестілеуді слайдтан үйренгенмін, нағыз ақау есебін ешқашан жазып көрмегенмін.',
    },
    after: {
      de: 'Ich teste an laufenden Anwendungen und bekomme zu jedem Bericht eine Rückmeldung.',
      en: 'I test running applications and get feedback on every report I write.',
      tr: 'Çalışan uygulamaları test ediyorum ve yazdığım her rapora geri bildirim alıyorum.',
      kk: 'Жұмыс істеп тұрған қосымшаларды тестілеймін әрі жазған әр есебіме кері байланыс аламын.',
    },
  },
];

/**
 * `Service` node for the page's JSON-LD graph.
 *
 * The page already emits Organization, WebPage, BreadcrumbList and — through
 * the FAQ — FAQPage. What was missing is the one type that says this page
 * offers a service rather than describes a company, which is what a search
 * engine needs before it can show the page for "Individualsoftware Frankfurt".
 * The catalogue is generated from `modules`, so it cannot drift from what the
 * page actually shows.
 */
export const systemeServiceSchema = (lang: Lang, url: string) => ({
  '@type': 'Service',
  '@id': `${url}#service`,
  name: {
    de: 'Unternehmenssysteme und Individualsoftware',
    en: 'Business systems and custom software',
    tr: 'Kurumsal sistemler ve özel yazılım',
    kk: 'Кәсіпорын жүйелері және жеке бағдарлама',
  }[lang],
  serviceType: {
    de: 'Individualsoftwareentwicklung',
    en: 'Custom software development',
    tr: 'Özel yazılım geliştirme',
    kk: 'Жеке бағдарлама әзірлеу',
  }[lang],
  description: systeme.seo.description[lang],
  provider: { '@id': 'https://www.wamocon.com/#organization' },
  areaServed: ['Germany', 'European Union'],
  availableLanguage: ['de', 'en', 'tr', 'kk'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: {
      de: 'Bausteine eines Unternehmenssystems',
      en: 'The layers of a business system',
      tr: 'Bir kurumsal sistemin katmanları',
      kk: 'Кәсіпорын жүйесінің қабаттары',
    }[lang],
    itemListElement: modules.map((m) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: m.label[lang], description: m.headline[lang] },
    })),
  },
});

/**
 * FAQ for the business-systems page. Written the way the FaqSection component
 * expects (self-contained answers in the 40–160 word band that generative
 * engines quote), and answering the four objections that actually stop a
 * mid-sized company: cost, lock-in, duration and "why not standard software".
 */
export const systemeFaq: Record<Lang, { heading: string; intro: string; items: { question: string; answer: string }[] }> = {
  de: {
    heading: 'Häufige Fragen zu Unternehmenssystemen',
    intro: 'Die vier Fragen, die in fast jedem Erstgespräch kommen, und drei, die zu selten gestellt werden.',
    items: [
      {
        question: 'Was kostet ein Unternehmenssystem bei WAMOCON?',
        answer:
          'Ein Preis entsteht erst, wenn der Umfang steht, deshalb steht auf dieser Seite keiner. Was den Preis bildet, sind die sechs Phasen: Prozessaufnahme, Anforderungen, Abstimmung von Rollen und Abläufen, klickbarer Entwurf, Entwicklung mit Test und Abnahme, sowie Datenübernahme, Schulung und Betrieb. Nach Phase zwei liegt Ihnen ein freigegebenes Anforderungsdokument vor, und damit lässt sich ein belastbares Angebot rechnen. Sie können an dieser Stelle aussteigen und das Dokument behalten, auch wenn Sie damit zu jemand anderem gehen. Abgerechnet wird je Meilenstein nach Abnahme, ohne Vorkasse.',
      },
      {
        question: 'Wie lange dauert die Einführung eines Systems?',
        answer:
          'Das hängt am Umfang, aber nicht an der Geduld: wir bauen in Schnitten. Ein schmaler, aber vollständiger Ausschnitt geht früh live, Ihr Team arbeitet damit, dann kommt der nächste. Dadurch haben Sie lange vor dem vollständigen Funktionsumfang etwas Benutzbares, und wir erfahren an echten Vorgängen, was noch fehlt. Die ersten beiden Phasen — zuhören und aufschreiben — dauern bei einem mittelständischen Betrieb typischerweise wenige Wochen und sind die einzigen, in denen wir mehr Ihrer Zeit brauchen als Sie unserer.',
      },
      {
        question: 'Warum kein Standardprodukt statt einer Eigenentwicklung?',
        answer:
          'Oft ist ein Standardprodukt die richtige Antwort, und dann sagen wir das. Sinnvoll wird eine Eigenentwicklung dort, wo Ihr Ablauf Ihr Wettbewerbsvorteil ist und ein Standardprodukt Sie zwingen würde, ihn aufzugeben. Der zweite Fall sind Betriebe, die bereits drei Werkzeuge parallel betreiben und die Lücken dazwischen mit Excel und Absprachen füllen — dort ersetzt ein System nicht ein Produkt, sondern die Handarbeit zwischen dreien. Wenn wir im Erstgespräch sehen, dass es auch einfacher geht, bekommen Sie ein ehrliches Nein.',
      },
      {
        question: 'Wem gehören Quellcode und Daten am Ende?',
        answer:
          'Ihnen, und das steht im Vertrag statt in einer Zusage. Quellcode und Daten gehen an Sie, eine Ausstiegsklausel regelt die Herausgabe in einem Format, das ein anderer Dienstleister lesen kann, und sie greift auch dann, wenn wir uns streiten. Betrieb, Sicherung und Weiterentwicklung übernehmen wir gerne — aber als Leistung, die Sie bestellen, nicht als Abhängigkeit, aus der Sie nicht herauskommen. Verarbeitet wird nach einem Auftragsverarbeitungsvertrag gemäß DSGVO, auf Servern in der EU.',
      },
      {
        question: 'Wie stellt WAMOCON sicher, dass das System auch funktioniert?',
        answer:
          'Mit dem Handwerk, aus dem das Unternehmen kommt: WAMOCON prüft seit Jahren die Software anderer Unternehmen im Testmanagement nach ISTQB. Abnahmekriterien werden festgelegt, bevor gebaut wird, nicht danach. Testfälle entstehen nach denselben Verfahren, die wir in Konzernprojekten anwenden, und vor jedem Livegang läuft eine Regression gegen den bereits abgenommenen Funktionsumfang. Was in der Abnahme durchfällt, wird nicht in Rechnung gestellt.',
      },
      {
        question: 'Muss ein Unternehmenssystem barrierefrei sein?',
        answer:
          'Für viele Betriebe ja. Das Barrierefreiheitsstärkungsgesetz verpflichtet seit Juni 2025 einen großen Teil der Anbieter digitaler Dienstleistungen, und selbst wo keine Pflicht besteht, ist Bedienbarkeit per Tastatur für ein System, in dem den ganzen Tag gearbeitet wird, schlicht schneller. Wir bauen Tastaturbedienung, Screenreader-Tauglichkeit und ausreichende Kontraste in Phase vier ein, in der Sie den klickbaren Entwurf abnehmen — nachträglich ist dasselbe Ergebnis deutlich teurer.',
      },
      {
        question: 'Können bestehende Daten aus Excel übernommen werden?',
        answer:
          'Ja, und das ist in aller Regel der unterschätzte Teil des Projekts. Altdaten kommen selten sauber: dieselbe Firma steht dreimal leicht anders geschrieben in der Liste, Felder wurden zweckentfremdet, und ein Teil der Wahrheit steht in einer Bemerkungsspalte. Die Übernahme ist deshalb eine eigene Phase mit Abgleich, Bereinigung und einem Probelauf, den Sie prüfen, bevor er gilt. Was sich nicht sauber übernehmen lässt, benennen wir, statt es stillschweigend zu importieren.',
      },
    ],
  },
  en: {
    heading: 'Frequently asked questions about business systems',
    intro: 'The four questions that come up in almost every first conversation, and three that are asked too rarely.',
    items: [
      {
        question: 'What does a business system from WAMOCON cost?',
        answer:
          'A price only exists once the scope does, which is why there is none on this page. What forms the price are the six phases: process capture, requirements, alignment of roles and workflows, a clickable design, development with testing and acceptance, and finally data migration, training and operation. After phase two you hold a signed-off requirements document, and a dependable quote can be calculated from it. You may stop there and keep the document, even if you take it to somebody else. Billing runs per milestone after acceptance, with no payment up front.',
      },
      {
        question: 'How long does it take to roll a system out?',
        answer:
          'It depends on the scope, but not on your patience: we build in slices. A narrow but complete slice goes live early, your team works in it, then the next one follows. That gives you something usable long before the full feature set exists, and it tells us from real cases what is still missing. The first two phases — listening and writing it down — typically take a few weeks at a mid-sized company, and they are the only ones where we need more of your time than you need of ours.',
      },
      {
        question: 'Why not buy standard software instead of building?',
        answer:
          'Often standard software is the right answer, and then we say so. Building your own makes sense where your process is your competitive advantage and a standard product would force you to give it up. The second case is companies already running three tools in parallel and filling the gaps between them with spreadsheets and verbal agreements — there a system does not replace a product, it replaces the manual work between three of them. If we see in the first conversation that something simpler will do, you get an honest no.',
      },
      {
        question: 'Who owns the source code and the data in the end?',
        answer:
          'You do, and that sits in the contract rather than in a promise. Source code and data pass to you, an exit clause governs handover in a format another provider can read, and it applies even if we fall out. We are glad to take on operation, backups and further development — but as a service you order, not as a dependency you cannot leave. Processing runs under a GDPR data-processing agreement, on servers in the EU.',
      },
      {
        question: 'How does WAMOCON make sure the system actually works?',
        answer:
          'With the craft the company comes from: WAMOCON has spent years testing other companies’ software in test management to ISTQB. Acceptance criteria are set before building starts, not afterwards. Test cases are designed with the same techniques we use in enterprise projects, and a regression runs against the already accepted scope before every release. Whatever fails acceptance is not invoiced.',
      },
      {
        question: 'Does a business system have to be accessible?',
        answer:
          'For many companies, yes. Germany’s Barrierefreiheitsstärkungsgesetz has obliged a large share of digital service providers since June 2025, and even where no duty applies, keyboard operability is simply faster in a system people work in all day. We build keyboard operation, screen-reader support and sufficient contrast into phase four, where you accept the clickable design — retrofitting the same result afterwards costs considerably more.',
      },
      {
        question: 'Can existing data be migrated out of spreadsheets?',
        answer:
          'Yes, and it is usually the underestimated part of the project. Legacy data rarely arrives clean: the same company appears three times spelled slightly differently, fields have been repurposed, and part of the truth lives in a notes column. Migration is therefore its own phase, with reconciliation, cleansing and a dry run you review before it counts. Whatever cannot be migrated cleanly, we name — rather than importing it quietly.',
      },
    ],
  },
  tr: {
    heading: 'Kurumsal sistemler hakkında sık sorulan sorular',
    intro: 'Neredeyse her ilk görüşmede gelen dört soru ve fazla nadir sorulan üç soru.',
    items: [
      {
        question: 'WAMOCON’da bir kurumsal sistem ne kadara mal olur?',
        answer:
          'Fiyat ancak kapsam netleştiğinde oluşur; bu yüzden bu sayfada fiyat yok. Fiyatı oluşturan şey altı aşamadır: süreç tespiti, gereksinimler, rol ve akışların mutabakatı, tıklanabilir tasarım, test ve kabulle birlikte geliştirme, son olarak veri aktarımı, eğitim ve işletim. İkinci aşamadan sonra elinizde onaylanmış bir gereksinim dokümanı olur ve bunun üzerinden sağlam bir teklif hesaplanabilir. Dilerseniz orada durup dokümanı alabilirsiniz, onunla başka birine gitseniz bile. Faturalama kabulden sonra kilometre taşı başınadır, peşin ödeme yoktur.',
      },
      {
        question: 'Bir sistemin devreye alınması ne kadar sürer?',
        answer:
          'Bu kapsama bağlıdır, sabrınıza değil: dilimler hâlinde geliştiriyoruz. Dar ama eksiksiz bir dilim erkenden yayına alınır, ekibiniz onunla çalışır, ardından bir sonraki gelir. Böylece tüm işlevler hazır olmadan çok önce kullanılabilir bir şeyiniz olur ve biz de gerçek işlemler üzerinden neyin eksik olduğunu öğreniriz. İlk iki aşama — dinleme ve yazıya dökme — orta ölçekli bir işletmede genelde birkaç hafta sürer ve bizim sizden, sizin bizden daha çok zaman istediğimiz tek aşamalardır.',
      },
      {
        question: 'Neden hazır bir ürün yerine özel geliştirme?',
        answer:
          'Çoğu zaman hazır ürün doğru yanıttır ve o zaman bunu söyleriz. Özel geliştirme, akışınızın rekabet avantajınız olduğu ve hazır bir ürünün sizi bundan vazgeçmeye zorlayacağı yerde anlamlıdır. İkinci durum, hâlihazırda üç aracı paralel işleten ve aralarındaki boşlukları Excel ile sözlü mutabakatlarla dolduran işletmelerdir — orada bir sistem bir ürünün değil, üç ürün arasındaki el emeğinin yerine geçer. İlk görüşmede daha basitinin de iş göreceğini görürsek, dürüst bir hayır alırsınız.',
      },
      {
        question: 'Sonunda kaynak kod ve veriler kime ait olur?',
        answer:
          'Size, ve bu bir vaatte değil, sözleşmede yazar. Kaynak kod ve veriler size geçer; bir çıkış maddesi devrin başka bir sağlayıcının okuyabileceği bir biçimde yapılmasını düzenler ve anlaşmazlık hâlinde de geçerlidir. İşletim, yedekleme ve geliştirmeyi memnuniyetle üstleniriz — ama sipariş ettiğiniz bir hizmet olarak, çıkamadığınız bir bağımlılık olarak değil. Veri işleme, GDPR kapsamında bir veri işleme sözleşmesiyle ve AB’deki sunucularda yürür.',
      },
      {
        question: 'WAMOCON sistemin gerçekten çalıştığından nasıl emin oluyor?',
        answer:
          'Şirketin geldiği zanaatla: WAMOCON yıllardır başka şirketlerin yazılımlarını ISTQB’ye göre test yönetiminde denetliyor. Kabul kriterleri geliştirmeden sonra değil, önce belirlenir. Test senaryoları kurumsal projelerde kullandığımız yöntemlerle tasarlanır ve her yayından önce, önceden kabul edilmiş kapsama karşı bir regresyon çalışır. Kabulden geçmeyen hiçbir şey faturalandırılmaz.',
      },
      {
        question: 'Bir kurumsal sistem erişilebilir olmak zorunda mı?',
        answer:
          'Birçok işletme için evet. Almanya’daki Erişilebilirliği Güçlendirme Yasası, Haziran 2025’ten bu yana dijital hizmet sunucularının büyük bölümünü yükümlü kılıyor; yükümlülük olmadığı yerde bile klavyeyle kullanım, gün boyu içinde çalışılan bir sistemde açıkça daha hızlıdır. Klavye kullanımını, ekran okuyucu uyumunu ve yeterli kontrastı, tıklanabilir tasarımı kabul ettiğiniz dördüncü aşamada kurarız — aynı sonucu sonradan eklemek belirgin biçimde pahalıdır.',
      },
      {
        question: 'Mevcut Excel verileri aktarılabilir mi?',
        answer:
          'Evet ve bu, projenin genellikle hafife alınan kısmıdır. Eski veriler nadiren temiz gelir: aynı firma listede üç kez biraz farklı yazılmıştır, alanlar amacı dışında kullanılmıştır ve gerçeğin bir kısmı açıklama sütununda durur. Bu yüzden aktarım; eşleştirme, temizleme ve geçerli sayılmadan önce sizin incelediğiniz bir deneme çalışmasıyla kendi başına bir aşamadır. Temiz biçimde aktarılamayanı sessizce içeri almak yerine adıyla söyleriz.',
      },
    ],
  },
  kk: {
    heading: 'Кәсіпорын жүйелері туралы жиі қойылатын сұрақтар',
    intro: 'Кез келген алғашқы әңгімеде шығатын төрт сұрақ және тым сирек қойылатын үш сұрақ.',
    items: [
      {
        question: 'WAMOCON-дағы кәсіпорын жүйесі қанша тұрады?',
        answer:
          'Баға ауқым айқындалғанда ғана пайда болады, сондықтан бұл бетте баға жоқ. Бағаны құрайтын нәрсе — алты кезең: үдерісті түсіру, талаптар, рөлдер мен ағындарды келісу, басып көруге болатын жоба, тестілеу мен қабылдауы бар әзірлеу, соңында деректерді көшіру, оқыту және пайдалану. Екінші кезеңнен кейін қолыңызда бекітілген талаптар құжаты болады, сол арқылы сенімді ұсыныс есептеледі. Сол жерде тоқтап, құжатты өзіңізде қалдыра аласыз, тіпті онымен басқа біреуге барсаңыз да. Есеп айырысу қабылдаудан кейін әр белес бойынша жүреді, алдын ала төлемсіз.',
      },
      {
        question: 'Жүйені енгізу қанша уақыт алады?',
        answer:
          'Бұл ауқымға байланысты, шыдамдылығыңызға емес: біз тілімдеп құрамыз. Тар, бірақ толық тілім ертерек іске қосылады, командаңыз онымен жұмыс істейді, содан кейін келесісі шығады. Осылайша толық функционал дайын болмай тұрып-ақ пайдалануға жарамды дүние болады, ал біз нақты істер арқылы не жетіспейтінін білеміз. Алғашқы екі кезең — тыңдау мен жазып алу — орта кәсіпте әдетте бірнеше апта алады, әрі сіздің уақытыңыз бізге бізден гөрі көбірек керек болатын жалғыз кезең сол.',
      },
      {
        question: 'Неге дайын өнімнің орнына жеке әзірлеме?',
        answer:
          'Көбіне дайын өнім дұрыс жауап болады, ондайда біз соны айтамыз. Жеке әзірлеме сіздің үдерісіңіз бәсекелік артықшылығыңыз болғанда және дайын өнім одан бас тартуға мәжбүрлейтін жерде мағыналы. Екінші жағдай — үш құралды қатар пайдаланып, олардың арасындағы бос орынды Excel мен ауызша келісіммен толтырып отырған кәсіптер: онда жүйе бір өнімді емес, үшеуінің арасындағы қол еңбегін алмастырады. Алғашқы әңгімеде қарапайымырақ жол да жететінін көрсек, адал «жоқ» естисіз.',
      },
      {
        question: 'Соңында бастапқы код пен деректер кімдікі болады?',
        answer:
          'Сіздікі, әрі бұл уәдеде емес, шартта жазылады. Бастапқы код пен деректер сізге өтеді, шығу тармағы оларды басқа жеткізуші оқи алатын форматта тапсыруды реттейді және дауласып қалсақ та жарамды болады. Пайдалану, сақтық көшірме және әрі қарай дамытуды қуана мойнымызға аламыз, бірақ сіз тапсырыс беретін қызмет ретінде, шыға алмайтын тәуелділік ретінде емес. Өңдеу GDPR бойынша деректерді өңдеу шартымен, ЕО-дағы серверлерде жүреді.',
      },
      {
        question: 'WAMOCON жүйенің шынымен жұмыс істейтініне қалай көз жеткізеді?',
        answer:
          'Компания шыққан кәсіппен: WAMOCON жылдар бойы басқа компаниялардың бағдарламасын ISTQB бойынша тестілеуді басқаруда тексеріп келеді. Қабылдау критерийлері әзірлеуден кейін емес, оған дейін бекітіледі. Тест жағдайлары ірі жобаларда қолданатын әдістермен жасалады, ал әр шығарылым алдында бұрын қабылданған функционалға қарсы регрессия жүреді. Қабылдаудан өтпеген дүниеге шот қойылмайды.',
      },
      {
        question: 'Кәсіпорын жүйесі қолжетімді болуға тиіс пе?',
        answer:
          'Көп кәсіп үшін иә. Германияның қолжетімділікті күшейту туралы заңы 2025 жылдың маусымынан бері цифрлық қызмет көрсетушілердің үлкен бөлігін міндеттейді, ал міндет жоқ жерде де пернетақтамен басқару күні бойы жұмыс істейтін жүйеде жай ғана жылдамырақ. Пернетақтамен басқаруды, скринридерге жарамдылықты және жеткілікті контрастты басып көруге болатын жобаны қабылдайтын төртінші кезеңде саламыз, өйткені дәл сол нәтижені кейін қосу әлдеқайда қымбат.',
      },
      {
        question: 'Excel-дегі бұрынғы деректерді көшіруге бола ма?',
        answer:
          'Иә, әрі бұл — жобаның әдетте бағаланбай қалатын бөлігі. Ескі дерек сирек таза келеді: сол бір компания тізімде үш рет сәл өзгеше жазылған, өрістер басқа мақсатқа пайдаланылған, ал шындықтың бір бөлігі ескертпе бағанында тұр. Сондықтан көшіру — салыстыру, тазалау және күшіне енер алдында өзіңіз тексеретін сынақ жүгірісі бар жеке кезең. Таза көшіруге келмейтінін үнсіз импорттамай, атап айтамыз.',
      },
    ],
  },
};
