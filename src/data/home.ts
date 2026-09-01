/**
 * Home page text content (German + English + Turkish).
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
    items: { title: L; text: L; image: string; alt: L }[];
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
    points: { num: string; text: L; image: string; alt: L }[];
  };
  about: { heading: L; paragraphs: LA };
  benefits: {
    heading: L;
    items: { title: L; text: L; image: string; alt: L }[];
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
      tr: 'WAMOCON | Yapay Zekâ Destekli BT Test Yönetimi ve Kalite Yönetimi',
    },
    description: {
      de: 'WAMOCON ist Ihr Partner für IT-Testmanagement, Testautomatisierung & Qualitätsmanagement: effizient, zertifiziert und KI-gestützt.',
      en: 'WAMOCON is your partner for IT test management, test automation & quality management: efficient, certified and AI-powered.',
      tr: 'WAMOCON; BT test yönetimi, test otomasyonu ve kalite yönetiminde ortağınız: verimli, sertifikalı ve yapay zekâ destekli.',
    },
  },
  hero: {
    title: 'WAMOCON',
    tagline: {
      de: 'Wo künstliche Intelligenz auf Qualität trifft: Test- und Qualitätsmanagement, das Maßstäbe setzt.',
      en: 'Where artificial intelligence meets quality: test and quality management that sets standards.',
      tr: 'Yapay zekânın kaliteyle buluştuğu yer: standart belirleyen test ve kalite yönetimi.',
    },
    stats: [
      {
        value: '100+',
        label: {
          de: 'zufriedene Kunden weltweit',
          en: 'satisfied customers worldwide',
          tr: 'dünya genelinde memnun müşteri',
        },
      },
      {
        value: '50+',
        label: {
          de: 'Jahre Projekterfahrung',
          en: 'years of project experience',
          tr: 'yıllık proje deneyimi',
        },
      },
      { value: '50+', label: { de: 'neue KI Apps', en: 'new AI apps', tr: 'yeni yapay zekâ uygulaması' } },
    ],
  },
  goal: {
    heading: {
      de: 'Das Hauptziel von WAMOCON',
      en: 'The main objective of WAMOCON',
      tr: 'WAMOCON’un temel hedefi',
    },
    text: {
      de: 'In den nächsten drei Jahren zu den Top 10 % der IT-Dienstleister gehören. Wir schätzen es, dass sich unsere Erfolge an diesem ehrgeizigen Ziel messen lassen und sind zuversichtlich, dass wir es erreichen können.',
      en: 'To be among the top 10% of IT service providers within the next three years. We value having our success measured against this ambitious goal and are confident that we can achieve it.',
      tr: 'Önümüzdeki üç yıl içinde BT hizmet sağlayıcılarının en iyi %10’u arasında yer almak. Başarılarımızın bu iddialı hedefe göre ölçülmesini değerli buluyor ve hedefe ulaşacağımıza inanıyoruz.',
    },
    highlightTitle: {
      de: 'Ihr Erfolg ist unser Antrieb.',
      en: 'Your success is what drives us.',
      tr: 'Sizin başarınız bizim motivasyonumuz.',
    },
    highlightText: {
      de: 'Als zuverlässiger Partner begleiten wir Sie auf dem Weg zur optimalen Projektrealisierung, mit maßgeschneiderten und standardisierten Lösungen, die Ihre Ziele Wirklichkeit werden lassen.',
      en: 'As a reliable partner, we accompany you on the way to optimal project delivery, with tailored and standardised solutions that turn your goals into reality.',
      tr: 'Güvenilir bir iş ortağı olarak, hedeflerinizi gerçeğe dönüştüren özel ve standartlaştırılmış çözümlerle projenizin en iyi şekilde hayata geçmesi yolunda size eşlik ediyoruz.',
    },
    signoff: {
      de: 'Waleri Moretz, Visionär und CEO der WAMOCON',
      en: 'Waleri Moretz, Visionary and CEO of WAMOCON',
      tr: 'Waleri Moretz, WAMOCON’un vizyoneri ve CEO’su',
    },
  },
  services: {
    heading: {
      de: 'Umfassende IT-Test- und Qualitätsmanagementlösungen',
      en: 'Comprehensive IT test and quality management solutions',
      tr: 'Kapsamlı BT test ve kalite yönetimi çözümleri',
    },
    intro: {
      de: 'WAMOCON bietet erstklassige Dienstleistungen zur Sicherung der Softwarequalität durch KI-gestützte Ansätze.',
      en: 'WAMOCON offers first-class services to ensure software quality through AI-powered approaches.',
      tr: 'WAMOCON, yapay zekâ destekli yaklaşımlarla yazılım kalitesini güvence altına alan birinci sınıf hizmetler sunar.',
    },
    items: [
      {
        title: {
          de: 'Entwicklung einer Teststrategie und eines Testdesigns',
          en: 'Development of a test strategy and test design',
          tr: 'Test stratejisi ve test tasarımı geliştirme',
        },
        text: {
          de: 'WAMOCON entwickelt umfassende Teststrategien und Testdesigns, um ein effektives Testen von Softwareprodukten und -systemen zu gewährleisten. Dies umfasst die Planung und Umsetzung von Tests, die auf die spezifischen Anforderungen der Kunden zugeschnitten sind.',
          en: 'WAMOCON develops comprehensive test strategies and test designs to ensure effective testing of software products and systems. This includes planning and implementing tests tailored to the specific requirements of our clients.',
          tr: 'WAMOCON, yazılım ürünlerinin ve sistemlerinin etkin biçimde test edilmesini sağlamak için kapsamlı test stratejileri ve test tasarımları geliştirir. Buna, müşterilerin özel gereksinimlerine göre uyarlanmış testlerin planlanması ve uygulanması dâhildir.',
        },
      },
      {
        title: { de: 'Testanalyse', en: 'Test analysis', tr: 'Test analizi' },
        text: {
          de: 'Wir analysieren die IST-Situation Ihrer Test- und Qualitätsprozesse, decken Schwachstellen auf und geben gezielte Handlungsempfehlungen. Mit Hands-on-Mentalität optimieren und verbessern wir so Ihren gesamten Test- und Qualitätssicherungsprozess.',
          en: 'We analyse the current state of your test and quality processes, uncover weak points and give targeted recommendations. With a hands-on mentality we optimise and improve your entire test and quality-assurance process.',
          tr: 'Test ve kalite süreçlerinizin mevcut durumunu analiz eder, zayıf noktaları ortaya çıkarır ve hedefe yönelik öneriler sunarız. Uygulamacı bir yaklaşımla tüm test ve kalite güvence sürecinizi optimize eder ve geliştiririz.',
        },
      },
      {
        title: {
          de: 'Optimierung der Testverfahren',
          en: 'Optimisation of test procedures',
          tr: 'Test yöntemlerinin optimizasyonu',
        },
        text: {
          de: 'Analyse und Optimierung von Testprozessen, um die Effizienz und Qualität während des gesamten Testzyklus zu verbessern. Dies beinhaltet die kontinuierliche Überwachung und Anpassung der Testmethoden.',
          en: 'Analysis and optimisation of test processes to improve efficiency and quality throughout the entire test cycle, including continuous monitoring and adjustment of testing methods.',
          tr: 'Test döngüsünün tamamında verimliliği ve kaliteyi artırmak için test süreçlerinin analizi ve optimizasyonu. Buna test yöntemlerinin sürekli izlenmesi ve uyarlanması da dâhildir.',
        },
      },
      {
        title: { de: 'Testautomatisierung', en: 'Test automation', tr: 'Test otomasyonu' },
        text: {
          de: 'Implementierung von Testautomatisierungslösungen, die die effiziente Ausführung wiederholender Testszenarien ermöglichen und die Testabdeckung erhöhen. Dies reduziert manuelle Testaufwände und verbessert die Genauigkeit.',
          en: 'Implementation of test automation solutions that enable efficient execution of repetitive test scenarios and increase test coverage. This reduces manual testing effort and improves accuracy.',
          tr: 'Tekrar eden test senaryolarının verimli biçimde çalıştırılmasını sağlayan ve test kapsamını artıran test otomasyonu çözümlerinin hayata geçirilmesi. Bu, manuel test eforunu azaltır ve doğruluğu artırır.',
        },
      },
      {
        title: { de: 'Qualitätsmanagement', en: 'Quality management', tr: 'Kalite yönetimi' },
        text: {
          de: 'Beratung und Unterstützung bei der Implementierung von Qualitätsmanagementprozessen. Dies sichert und verbessert die Qualität von Softwareprodukten und -systemen durch bewährte Methoden und Standards.',
          en: 'Consulting and support in implementing quality management processes. This secures and improves the quality of software products and systems through proven methods and standards.',
          tr: 'Kalite yönetimi süreçlerinin hayata geçirilmesinde danışmanlık ve destek. Bu, kanıtlanmış yöntemler ve standartlar aracılığıyla yazılım ürünlerinin ve sistemlerinin kalitesini güvence altına alır ve iyileştirir.',
        },
      },
      {
        title: { de: 'KI (LLM-as-a-Judge)', en: 'AI (LLM-as-a-Judge)', tr: 'Yapay zekâ (LLM-as-a-Judge)' },
        text: {
          de: 'WAMOCON setzt auf LaaJ, ein skalierbares Produkt und eine Dienstleistung zur automatisierten Bewertung von KI-Systemen. LaaJ bewertet Ausgaben generativer KI konsistent, schnell und nach Ihren Kriterien. So ersetzen Sie teure manuelle Prüfungen, reduzieren KI-Halluzinationen und schaffen vertrauenswürdige, qualitätsgesicherte KI-Anwendungen.',
          en: 'WAMOCON relies on LaaJ, a scalable product and service for the automated evaluation of AI systems. LaaJ assesses generative AI outputs consistently, quickly and according to your criteria. This replaces expensive manual reviews, reduces AI hallucinations and creates trustworthy, quality-assured AI applications.',
          tr: 'WAMOCON, yapay zekâ sistemlerinin otomatik değerlendirilmesi için ölçeklenebilir bir ürün ve hizmet olan LaaJ’ı kullanır. LaaJ, üretken yapay zekâ çıktılarını tutarlı, hızlı ve sizin kriterlerinize göre değerlendirir. Böylece maliyetli manuel kontrolleri ortadan kaldırır, yapay zekâ halüsinasyonlarını azaltır ve güvenilir, kalitesi güvence altına alınmış yapay zekâ uygulamaları oluşturursunuz.',
        },
      },
    ],
  },
  showcase: {
    heading: {
      de: 'Wir entwickeln <span class="text-accent">Lösungen</span> für jede Problemstellung',
      en: 'We build <span class="text-accent">solutions</span> for every challenge',
      tr: 'Her soruna <span class="text-accent">çözüm</span> geliştiriyoruz',
    },
    intro: {
      de: 'In aufeinander aufbauenden Entwicklungswellen verwandeln wir konkrete Problemstellungen in digitale Produkte: von Büro-Automatisierung, Marketing und KI-gestützter Analyse über Immobilien, Mobilität und Recht bis hin zu E-Commerce und Lifestyle.',
      en: 'In successive waves of development we turn concrete challenges into digital products, from office automation, marketing and AI-powered analysis, through real estate, mobility and law, to e-commerce and lifestyle.',
      tr: 'Birbirini izleyen geliştirme dalgalarında somut sorunları dijital ürünlere dönüştürüyoruz: ofis otomasyonu, pazarlama ve yapay zekâ destekli analizden gayrimenkul, mobilite ve hukuka; oradan e-ticaret ve yaşam tarzına kadar.',
    },
  },
  qa: {
    heading: {
      de: 'Qualitätssicherung durch erfahrene IT-Tester',
      en: 'Quality assurance by experienced IT testers',
      tr: 'Deneyimli BT test uzmanlarıyla kalite güvencesi',
    },
    text: {
      de: 'Mit WAMOCON müssen Sie sich keine Sorgen um die Qualität Ihrer IT-Tester machen. Unsere sorgfältig ausgewählten Spezialisten verstehen Ihre Anforderungen und liefern maßgeschneiderte Lösungen, die Ihre Projekte sicher und erfolgreich machen, ob für langfristige Festanstellungen oder flexible Projektaufgaben. Vertrauen Sie auf unsere Erfahrung und lassen Sie uns gemeinsam die perfekte Lösung für Ihr Team finden.',
      en: 'With WAMOCON you never have to worry about the quality of your IT testers. Our carefully selected specialists understand your requirements and deliver tailored solutions that make your projects safe and successful, whether for long-term permanent positions or flexible project assignments.',
      tr: 'WAMOCON ile BT test uzmanlarınızın kalitesi konusunda endişelenmenize gerek yok. Özenle seçilmiş uzmanlarımız gereksinimlerinizi anlar ve ister uzun vadeli kadrolu pozisyonlar ister esnek proje görevleri olsun, projelerinizi güvenli ve başarılı kılan özel çözümler sunar. Deneyimimize güvenin, ekibiniz için mükemmel çözümü birlikte bulalım.',
    },
    listTitle: {
      de: 'Warum IT-Tester von WAMOCON?',
      en: 'Why IT testers from WAMOCON?',
      tr: 'Neden WAMOCON’un BT test uzmanları?',
    },
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
      tr: [
        'Özel gereksinimlerinize göre uyarlanmış çözümler',
        'Kadrolu pozisyonlarda ve projelerde esneklik',
        'Beklentilerinizi aşan uzmanların güvenilir seçimi',
        'Projenin her adımında verimlilik ve kalite',
      ],
    },
    closing: {
      de: 'Vertrauen Sie auf unsere Expertise in der Vermittlung qualifizierter IT-Spezialisten und sichern Sie den Erfolg Ihrer IT-Projekte.',
      en: 'Rely on our expertise in placing qualified IT specialists and secure the success of your IT projects.',
      tr: 'Nitelikli BT uzmanlarını yerleştirme konusundaki uzmanlığımıza güvenin ve BT projelerinizin başarısını güvence altına alın.',
    },
    cta: { de: 'Erfahren Sie mehr', en: 'Learn more', tr: 'Daha fazla bilgi' },
    youtubeId: 'zhKZIDVHLgY',
  },
  why: {
    heading: { de: 'Warum WAMOCON?', en: 'Why WAMOCON?', tr: 'Neden WAMOCON?' },
    intro: {
      de: 'über 50 Jahre gebündelte Praxiserfahrung unseres Teams. Leidenschaft für IT-Qualität. Maßgeschneiderte Lösungen und Experten, die Ihre Projekte sicher und erfolgreich machen.',
      en: 'over 50 years of combined practical experience within our team. A passion for IT quality. Tailored solutions and experts who make your projects safe and successful.',
      tr: 'ekibimizin 50 yılı aşkın birikmiş saha deneyimi. BT kalitesine tutku. Projelerinizi güvenli ve başarılı kılan özel çözümler ve uzmanlar.',
    },
    points: [
      {
        num: '01',
        image: '/images/why-01-weiterbildung.webp',
        alt: { de: 'Fortbildung im Testmanagement', en: 'Test-management training', tr: 'Test yönetimi eğitimi' },
        text: {
          de: 'Unsere IT-Experten bleiben durch regelmäßige Fortbildungen im Testmanagement immer auf dem neuesten Stand.',
          en: 'Our IT experts always stay up to date through regular training in test management.',
          tr: 'BT uzmanlarımız, test yönetiminde düzenli eğitimlerle her zaman güncel kalır.',
        },
      },
      {
        num: '02',
        image: '/images/why-02-ergebnisse.webp',
        alt: { de: 'Workshop bei WAMOCON', en: 'Workshop at WAMOCON', tr: 'WAMOCON’da atölye çalışması' },
        text: {
          de: 'Wir liefern schnelle Ergebnisse, präzise Ausführung und einen praxisnahen Ansatz für Ihren Projekterfolg.',
          en: 'We deliver fast results, precise execution and a practical approach for your project success.',
          tr: 'Proje başarınız için hızlı sonuçlar, kusursuz uygulama ve sahaya dönük bir yaklaşım sunuyoruz.',
        },
      },
      {
        num: '03',
        image: '/images/why-03-automatisierung.webp',
        alt: { de: 'Entwicklung und Testautomatisierung', en: 'Development and test automation', tr: 'Geliştirme ve test otomasyonu' },
        text: {
          de: 'Mit Automatisierung, künstlicher Intelligenz und maschinellem Lernen gestalten wir Ihre Prozesse effizienter und zukunftssicher.',
          en: 'With automation, artificial intelligence and machine learning we make your processes more efficient and future-proof.',
          tr: 'Otomasyon, yapay zekâ ve makine öğrenmesiyle süreçlerinizi daha verimli ve geleceğe hazır hâle getiriyoruz.',
        },
      },
      {
        num: '04',
        image: '/images/why-04-qualitaet.webp',
        alt: { de: 'Konzentrierte Arbeit am Testfall', en: 'Focused work on a test case', tr: 'Test senaryosu üzerinde odaklı çalışma' },
        text: {
          de: 'Ständige Weiterbildung für Qualität, die Ihre Erwartungen übertrifft und Maßstäbe setzt.',
          en: 'Continuous training for quality that exceeds your expectations and sets standards.',
          tr: 'Beklentilerinizi aşan ve standart belirleyen bir kalite için sürekli eğitim.',
        },
      },
    ],
  },
  about: {
    heading: { de: 'Über WAMOCON', en: 'About WAMOCON', tr: 'WAMOCON hakkında' },
    paragraphs: {
      de: [
        'Unser Unternehmen hat sich seit vielen Jahren auf Softwaretests und Qualitätssicherung sowie auf die Beratung zu Softwaremethoden spezialisiert. Weltbekannte und marktführende Unternehmen verlassen sich tagtäglich auf unsere präzise Arbeit. Wir sind stolz auf unsere Fähigkeit, erstklassigen Service zu bieten, und verpflichten uns, jedem einzelnen Kunden ein hohes Maß an Kompetenz zu vermitteln.',
        'Mit den innovativen Produkten und Dienstleistungen von WAMOCON können Unternehmen nicht nur bestehende Probleme im Prüf- und Qualitätsmanagement lösen, sondern auch zukünftige Herausforderungen antizipieren und so eine nachhaltige Geschäftsentwicklung sicherstellen.',
      ],
      en: [
        'For many years our company has specialised in software testing and quality assurance, as well as consulting on software methods. World-renowned and market-leading companies rely on our precise work every day. We are proud of our ability to provide first-class service and are committed to delivering a high level of competence to every single client.',
        "With WAMOCON's innovative products and services, companies can not only solve existing problems in testing and quality management, but also anticipate future challenges and thus ensure sustainable business development.",
      ],
      tr: [
        'Şirketimiz uzun yıllardır yazılım testi ve kalite güvencesinin yanı sıra yazılım yöntemleri danışmanlığında uzmanlaşmıştır. Dünyaca tanınan ve pazar lideri şirketler her gün titiz çalışmamıza güvenir. Birinci sınıf hizmet sunma becerimizle gurur duyuyor ve her müşterimize yüksek düzeyde uzmanlık aktarmayı taahhüt ediyoruz.',
        'WAMOCON’un yenilikçi ürün ve hizmetleriyle şirketler yalnızca test ve kalite yönetimindeki mevcut sorunları çözmekle kalmaz, gelecekteki zorlukları da öngörerek sürdürülebilir bir iş gelişimi sağlar.',
      ],
    },
  },
  benefits: {
    heading: {
      de: 'Vorteile der Zusammenarbeit',
      en: 'Benefits of working together',
      tr: 'İş birliğinin avantajları',
    },
    items: [
      {
        title: { de: 'Klare Kommunikation', en: 'Clear communication', tr: 'Net iletişim' },
        image: '/images/benefit-kommunikation.webp',
        alt: { de: 'Zusammenarbeit im Team', en: 'Working together as a team', tr: 'Ekip içinde iş birliği' },
        text: {
          de: 'Unsere Kunden profitieren von ständiger Transparenz zwischen den Anforderungen und Erwartungen beider Parteien. So werden Unstimmigkeiten vermieden.',
          en: 'Our clients benefit from constant transparency between the requirements and expectations of both parties, avoiding misunderstandings.',
          tr: 'Müşterilerimiz, her iki tarafın gereksinimleri ve beklentileri arasındaki sürekli şeffaflıktan yararlanır. Böylece anlaşmazlıklar önlenir.',
        },
      },
      {
        title: { de: 'Fachwissen', en: 'Expertise', tr: 'Uzmanlık bilgisi' },
        image: '/images/benefit-fachwissen.webp',
        alt: { de: 'Fachvortrag zum Testmanagement', en: 'Specialist talk on test management', tr: 'Test yönetimi üzerine uzman sunumu' },
        text: {
          de: 'Unsere Kundinnen und Kunden erhalten umfassende Expertise in den Bereichen Testing und Qualitätsmanagement mit qualitativ hochwertigen Dienstleistungen.',
          en: 'Our clients receive comprehensive expertise in testing and quality management with high-quality services.',
          tr: 'Müşterilerimiz, yüksek kaliteli hizmetlerle test ve kalite yönetimi alanlarında kapsamlı uzmanlık elde eder.',
        },
      },
      {
        title: { de: 'Partnerschaft', en: 'Partnership', tr: 'Ortaklık' },
        image: '/images/benefit-partnerschaft.webp',
        alt: { de: 'Gemeinsame Projektarbeit', en: 'Collaborative project work', tr: 'Ortak proje çalışması' },
        text: {
          de: 'Unsere Kunden gewinnen mit WAMOCON ein Vertrauensverhältnis für eine erfolgreiche Zusammenarbeit.',
          en: 'With WAMOCON, our clients gain a relationship of trust for successful collaboration.',
          tr: 'Müşterilerimiz WAMOCON ile başarılı bir iş birliği için güven ilişkisi kazanır.',
        },
      },
      {
        title: {
          de: 'Flexibilität und Anpassungsfähigkeit',
          en: 'Flexibility and adaptability',
          tr: 'Esneklik ve uyum yeteneği',
        },
        image: '/images/benefit-flexibilitaet.webp',
        alt: { de: 'Das WAMOCON-Team beim Tough Mudder', en: 'The WAMOCON team at Tough Mudder', tr: 'Tough Mudder’da WAMOCON ekibi' },
        text: {
          de: 'Um auf veränderte Anforderungen und Bedürfnisse reagieren zu können, erhalten unsere Kunden absolute Flexibilität.',
          en: 'To respond to changing requirements and needs, our clients receive absolute flexibility.',
          tr: 'Değişen gereksinim ve ihtiyaçlara yanıt verebilmek için müşterilerimize tam esneklik sunuyoruz.',
        },
      },
      {
        title: { de: 'Bildung und Schulung', en: 'Education and training', tr: 'Eğitim ve öğretim' },
        image: '/images/benefit-bildung.webp',
        alt: { de: 'Schulung und Wissenstransfer', en: 'Training and knowledge transfer', tr: 'Eğitim ve bilgi aktarımı' },
        text: {
          de: 'Wir teilen unser Wissen und schulen Teams, damit Qualität nachhaltig im Unternehmen verankert wird.',
          en: 'We share our knowledge and train teams so that quality is sustainably anchored in your company.',
          tr: 'Kalitenin şirkette kalıcı olarak yerleşmesi için bilgimizi paylaşıyor ve ekipleri eğitiyoruz.',
        },
      },
      {
        title: { de: 'Verbesserung des Werts', en: 'Increasing value', tr: 'Değerin artırılması' },
        image: '/images/benefit-wert.webp',
        alt: { de: 'Ergebnisse gemeinsam erarbeiten', en: 'Working out results together', tr: 'Sonuçları birlikte ortaya koymak' },
        text: {
          de: 'Durch höhere Effizienz, geringere Kosten oder verbesserte Qualität erhalten unsere Kunden einen Mehrwert.',
          en: 'Through greater efficiency, lower costs or improved quality, our clients gain added value.',
          tr: 'Daha yüksek verimlilik, daha düşük maliyet veya artan kalite sayesinde müşterilerimiz katma değer elde eder.',
        },
      },
    ],
    cta: {
      de: 'Mehr zum Unternehmen',
      en: 'More about the company',
      tr: 'Şirket hakkında daha fazlası',
    },
  },
  projects: {
    heading: {
      de: 'Ausschnitt unserer erfolgreichen SAP-Projekte',
      en: 'A selection of our successful SAP projects',
      tr: 'Başarılı SAP projelerimizden bir seçki',
    },
    items: [
      {
        title: {
          de: 'Einführung SAP BASS-SPAREN System',
          en: 'Introduction of SAP BASS-SPAREN system',
          tr: 'SAP BASS-SPAREN sisteminin devreye alınması',
        },
        client: 'iBS Innovative Banking Solutions AG',
        popupTitle: {
          de: 'Einführung SAP BASS-SPAREN System bei iBS Innovative Banking Solutions AG',
          en: 'Implementation of SAP BASS-SPAREN System at iBS Innovative Banking Solutions AG',
          tr: 'iBS Innovative Banking Solutions AG bünyesinde SAP BASS-SPAREN sisteminin devreye alınması',
        },
        company: {
          de: 'iBS mit Sitz in Wiesbaden ist ein führendes Unternehmen im Finanzdienstleistungssektor und spezialisiert sich auf innovative Lösungen im Bereich Spar- und Anlageberatung.',
          en: 'iBS, based in Wiesbaden, is a leading company in the financial services sector and specializes in innovative solutions in the area of savings and investment advice.',
          tr: 'Merkezi Wiesbaden’de bulunan iBS, finansal hizmetler sektöründe önde gelen bir şirkettir ve tasarruf ile yatırım danışmanlığı alanında yenilikçi çözümler konusunda uzmanlaşmıştır.',
        },
        project: {
          de: 'SAP BASS-SPAREN ist eine innovative Anwendung, die es Kunden ermöglicht, ihre Sparziele präzise zu verfolgen und ihre finanzielle Zukunft mit Hilfe fundierter Daten und Analysetools zu planen. Mit modernen Technologien wie Cloud-Lösungen und datengetriebenem Forecasting bietet es eine benutzerfreundliche Plattform für das intuitive Verwalten von Ersparnissen und unterstützt langfristige finanzielle Sicherheit. Mit SAP BASS-SPAREN setzt iBS einen neuen Standard im digitalen Sparen und bietet Nutzern eine effiziente Lösung zur Verwaltung und Planung ihrer Ersparnisse.',
          en: 'SAP BASS-SPAREN is an innovative application that enables customers to precisely track their savings goals and plan their financial future with the help of sound data and analysis tools. Using modern technologies such as cloud solutions and data-driven forecasting, it provides a user-friendly platform that enables intuitive management of savings and supports long-term financial security. With SAP BASS-SPAREN, iBS sets a new standard in digital savings and offers users an efficient solution for managing and planning their savings.',
          tr: 'SAP BASS-SPAREN, müşterilerin tasarruf hedeflerini hassas biçimde takip etmesine ve sağlam veriler ile analiz araçları yardımıyla finansal geleceklerini planlamasına olanak tanıyan yenilikçi bir uygulamadır. Bulut çözümleri ve veriye dayalı tahminleme gibi modern teknolojilerle, tasarrufların sezgisel olarak yönetilmesini sağlayan kullanıcı dostu bir platform sunar ve uzun vadeli finansal güvenliği destekler. iBS, SAP BASS-SPAREN ile dijital tasarrufta yeni bir standart belirleyerek kullanıcılara birikimlerini yönetmek ve planlamak için verimli bir çözüm sunuyor.',
        },
      },
      {
        title: {
          de: 'Einführung SAP ERP-System in 50 Ländern',
          en: 'Introduction of SAP ERP system in 50 countries',
          tr: '50 ülkede SAP ERP sisteminin devreye alınması',
        },
        client: 'Phoenix Contact GmbH',
        popupTitle: {
          de: 'Einführung SAP ERP-System in 50 Ländern bei Phoenix Contact GmbH',
          en: 'Implementation of SAP ERP system in 50 countries at Phoenix Contact GmbH',
          tr: 'Phoenix Contact GmbH bünyesinde 50 ülkede SAP ERP sisteminin devreye alınması',
        },
        company: {
          de: 'Phoenix Contact ist ein weltweit führender Anbieter von Komponenten, Systemen und Lösungen im Bereich Elektrotechnik, Elektronik und Automatisierung. Das Unternehmen bietet innovative Produkte und Dienstleistungen für industrielle Anwendungen und strebt nach Digitalisierung und Vernetzung von Produktionsprozessen.',
          en: 'Phoenix Contact is a leading global supplier of components, systems and solutions in the field of electrical engineering, electronics and automation. The company offers innovative products and services for industrial applications and strives for the digitalization and networking of production processes.',
          tr: 'Phoenix Contact, elektrik mühendisliği, elektronik ve otomasyon alanlarında bileşen, sistem ve çözümlerin dünya çapında önde gelen tedarikçisidir. Şirket, endüstriyel uygulamalar için yenilikçi ürün ve hizmetler sunar ve üretim süreçlerinin dijitalleştirilmesini ve birbirine bağlanmasını hedefler.',
        },
        project: {
          de: 'Die Implementierung des SAP ERP-Templates in 50 Ländern zielt darauf ab, globale Geschäftsprozesse zu standardisieren und zu optimieren. Die Einführung des ERP-Systems schafft eine einheitliche und effiziente Grundlage für operative Tätigkeiten und ermöglicht die Harmonisierung und Vereinfachung globaler Prozesse. Diese großangelegte Implementierung unterstützt die digitale Transformation und steigert die Wettbewerbsfähigkeit auf dem internationalen Markt.',
          en: 'The implementation of the SAP ERP template in 50 countries aims to standardize and optimize global business processes. The introduction of the ERP system will create a uniform and efficient basis for operational activities, enabling the harmonization and simplification of global processes. This large-scale implementation supports the digital transformation and increases the company\'s competitiveness on the international market.',
          tr: 'SAP ERP şablonunun 50 ülkede uygulanması, küresel iş süreçlerini standartlaştırmayı ve optimize etmeyi amaçlar. ERP sisteminin devreye alınması, operasyonel faaliyetler için tek biçimli ve verimli bir temel oluşturarak küresel süreçlerin uyumlaştırılmasını ve basitleştirilmesini sağlar. Bu büyük ölçekli uygulama, dijital dönüşümü destekler ve uluslararası pazardaki rekabet gücünü artırır.',
        },
      },
      {
        title: {
          de: 'Einführung SAP ERP- und CRM-System',
          en: 'Introduction of SAP ERP and CRM system',
          tr: 'SAP ERP ve CRM sisteminin devreye alınması',
        },
        client: 'Lekkerland Deutschland GmbH & Co. KG',
        popupTitle: {
          de: 'Einführung SAP ERP-System und CRM-System bei Lekkerland Deutschland GmbH & Co. KG',
          en: 'Introduction of SAP ERP system and CRM system at Lekkerland Deutschland GmbH & Co. KG',
          tr: 'Lekkerland Deutschland GmbH & Co. KG bünyesinde SAP ERP ve CRM sisteminin devreye alınması',
        },
        company: {
          de: 'Lekkerland ist ein führendes Großhandelsunternehmen für Alltagskonsumgüter, das sich auf Convenience spezialisiert hat. Das Unternehmen bietet maßgeschneiderte Logistik- und Handelslösungen für Kunden in verschiedenen Branchen, darunter Einzelhandel, Gastronomie und Tankstellen.',
          en: 'Lekkerland is a leading wholesale company for everyday consumer goods, specializing in convenience. The company offers customized logistics and retail solutions for customers in various sectors, including retail, food service and petrol stations.',
          tr: 'Lekkerland, günlük tüketim ürünleri alanında önde gelen bir toptan ticaret şirketidir ve “convenience” segmentinde uzmanlaşmıştır. Şirket; perakende, gastronomi ve akaryakıt istasyonları dâhil çeşitli sektörlerdeki müşteriler için özel lojistik ve ticaret çözümleri sunar.',
        },
        project: {
          de: 'Die Implementierung von SAP ERP und CRM zielt darauf ab, Geschäftsprozesse durch die nahtlose Integration von Logistik, Vertrieb und Kundenmanagement zu optimieren. Dieses Projekt verbessert die Transparenz der Lieferkette und steigert die betriebliche Effizienz durch Prozessautomatisierung und personalisierte CRM-Funktionen. Die Umsetzung dieser technologischen Lösung stärkt Lekkerlands Marktposition als führender Anbieter maßgeschneiderter Logistiklösungen und trägt dazu bei, die Kundenzufriedenheit durch optimierte Serviceprozesse zu erhöhen.',
          en: 'The implementation of SAP ERP and CRM aims to optimize business processes by seamlessly integrating logistics, sales and customer management. This project improves supply chain visibility and increases operational efficiency through process automation and personalized CRM capabilities. The implementation of this technological solution strengthens Lekkerland\'s market position as a leading provider of customized logistics solutions and helps to increase customer satisfaction through optimized service processes.',
          tr: 'SAP ERP ve CRM uygulaması; lojistik, satış ve müşteri yönetiminin kesintisiz entegrasyonu yoluyla iş süreçlerini optimize etmeyi amaçlar. Bu proje, tedarik zinciri şeffaflığını iyileştirir ve süreç otomasyonu ile kişiselleştirilmiş CRM işlevleri sayesinde operasyonel verimliliği artırır. Bu teknolojik çözümün hayata geçirilmesi, Lekkerland’ın özel lojistik çözümlerinde öncü sağlayıcı olarak pazar konumunu güçlendirir ve optimize edilmiş hizmet süreçleriyle müşteri memnuniyetinin artmasına katkı sağlar.',
        },
      },
    ],
    cta: { de: 'Weitere Details', en: 'More details', tr: 'Ayrıntılar' },
  },
  clients: {
    heading: { de: 'Wer sind unsere Kunden?', en: 'Who are our clients?', tr: 'Müşterilerimiz kimler?' },
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
    heading: { de: 'Unsere Academy', en: 'Our Academy', tr: 'Akademimiz' },
    paragraphs: {
      de: [
        'Softwaretester sind gefragter denn je, Tendenz steigend. Als offizieller Partner des International Software Testing Qualifications Board (ISTQB®) bietet die WAMOCON Akademie hochwertige Aus- und Weiterbildung im Softwaretesten.',
        'Softwaretester sind gefragter denn je, Tendenz steigend. Als offizieller Partner des International Software Testing Qualifications Board (ISTQB®) bietet die WAMOCON Akademie hochwertige Aus- und Weiterbildung im Softwaretesten.',
      ],
      en: [
        'Software testers are more in demand than ever, and the trend is rising. As an official partner of the International Software Testing Qualifications Board (ISTQB®), the WAMOCON Academy offers high-quality training and further education in software testing.',
        'Participants receive all the resources and knowledge they need for successful certification and an IT career.',
      ],
      tr: [
        'Yazılım test uzmanlarına olan talep her zamankinden yüksek ve artmaya devam ediyor. International Software Testing Qualifications Board (ISTQB®) resmî iş ortağı olarak WAMOCON Akademi, yazılım testi alanında yüksek nitelikli eğitim ve sürekli gelişim imkânı sunuyor.',
        'Katılımcılar, başarılı bir sertifikasyon ve BT kariyeri için ihtiyaç duydukları tüm kaynakları ve bilgiyi edinir.',
      ],
    },
    youtubeId: 'Q_0mtjo8GAU',
  },
  academy: {
    heading: { de: 'Kontinuierliche Entwicklung', en: 'Continuous development', tr: 'Sürekli gelişim' },
    pairs: [
      {
        title: {
          de: 'Ihre Weiterentwicklung ist unser Antrieb!',
          en: 'Your development is our drive!',
          tr: 'Gelişiminiz bizim motivasyonumuz!',
        },
        text: {
          de: 'Ob Einsteiger, Quereinsteiger oder Profi: Mit unseren ISTQB®-Programmen bringen wir Ihre Testmanagement-Karriere auf das nächste Level.',
          en: 'Whether beginner, career changer or pro: with our ISTQB® programs we take your test management career to the next level.',
          tr: 'İster yeni başlayın, ister kariyer değiştirin, ister profesyonel olun: ISTQB® programlarımızla test yönetimi kariyerinizi bir üst seviyeye taşıyoruz.',
        },
      },
      {
        title: {
          de: 'Praxis, Mentoring, Erfolg: Ihr Karriere-Turbo!',
          en: 'Practice, mentoring, success, your career turbo!',
          tr: 'Uygulama, mentorluk, başarı: kariyer turbonuz!',
        },
        text: {
          de: 'Mit unseren Programmen nach internationalen Standards werden Sie zur gefragten IT-Fachkraft. Gemeinsam gestalten wir Ihre Zukunft und die der IT-Branche.',
          en: 'With our programs based on international standards you become a sought-after IT professional. Together we shape your future and that of the IT industry.',
          tr: 'Uluslararası standartlara dayanan programlarımızla aranan bir BT uzmanı olursunuz. Sizin ve BT sektörünün geleceğini birlikte şekillendiriyoruz.',
        },
      },
      {
        title: {
          de: 'Kundenzufriedenheit beginnt bei der Ausbildung.',
          en: 'Customer satisfaction begins with training.',
          tr: 'Müşteri memnuniyeti eğitimle başlar.',
        },
        text: {
          de: 'Wir fördern IT-Talente, damit Ihr Kundenservice nicht nur Standards erfüllt, sondern übertrifft.',
          en: 'We nurture IT talent so that your customer service not only meets standards but exceeds them.',
          tr: 'BT yeteneklerini destekliyoruz; böylece müşteri hizmetiniz standartları yalnızca karşılamakla kalmaz, aşar.',
        },
      },
    ],
    cta: { de: 'Academy entdecken', en: 'Discover the Academy', tr: 'Akademiyi keşfedin' },
    ctaUrl: 'https://test-it-academy.com/',
  },
  tour: {
    heading: { de: 'Büro Tour', en: 'Office tour', tr: 'Ofis turu' },
    text: {
      de: 'Werfen Sie einen virtuellen Blick in unsere Räume in Eschborn, vom Empfang über die Schulungs- und Projekträume bis zu den Teamflächen. Öffnen Sie die interaktive 360°-Ansicht direkt in Google Maps.',
      en: 'Take a virtual look inside our offices in Eschborn, from reception and the training and project rooms to the team areas. Open the interactive 360° view directly in Google Maps.',
      tr: 'Eschborn’daki ofisimize sanal bir göz atın: resepsiyondan eğitim ve proje odalarına, oradan ekip alanlarına kadar. Etkileşimli 360° görünümü doğrudan Google Haritalar’da açın.',
    },
    cta: {
      de: 'In Google Maps öffnen',
      en: 'Open in Google Maps',
      tr: 'Google Haritalar’da aç',
    },
    embedUrl:
      'https://www.google.com/maps/embed?pb=!4v1782479371000!6m8!1m7!1sCAoSHENJQUJJaENVc3VTMzZndWlqazhoTlB1TmlkN1k.!2m2!1d50.1350963!2d8.5722177!3f0!4f-20!5f0.7820865974627469',
    mapsUrl:
      'https://www.google.com/maps/@?api=1&map_action=pano&pano=CAoSHENJQUJJaENVc3VTMzZndWlqazhoTlB1TmlkN1k.&heading=0&pitch=-20&fov=80',
  },
};
