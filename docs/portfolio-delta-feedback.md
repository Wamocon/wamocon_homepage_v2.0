# Portfolio-Delta — Analyse, Beschlüsse, Umsetzung

Abgleich **aller** Repositories von `github.com/Wamocon` gegen `/apps/` und `/webdesign/`,
mit den daraus gefassten Beschlüssen und dem Stand der Umsetzung.

| | |
|---|---|
| Erstellt | 8. September 2026 |
| Zugriff | GitHub CLI als `DanielM413`, Scopes `repo`, `read:org` |
| Repositories | **174** — 92 öffentlich, 82 privat |
| Branch | `update_entwicklungen_0926` |

| | vorher | nachher |
|---|---|---|
| Apps auf `/apps/` | 50 | **52** |
| Referenzen auf `/webdesign/` | 6 | **12** (+1 vorbereitet) |
| Branchen | 5 (Hero behauptete 6) | **9**, aus den Daten abgeleitet |
| Tote Links | 5 | **1** — bewusst behalten, siehe O-1 |

---

## 1 · Umgesetzt

### 1.1 · App-Katalog

**Ziele korrigiert**

| Karte | Was war | Was ist |
|---|---|---|
| Parzella | Link auf Landingpage → 404 | Link auf `parzella.eu` |
| GrundsteuerPrüfer | „bald verfügbar", obwohl live | Link auf die Landingpage, Name bleibt |
| Vereinsping | „bald verfügbar", URL im Kommentar | Link aktiv |
| AngelSpot · ARIA · BalkonBonus | Links auf gelöschte Deployments | „Bald verfügbar", kein toter Link |

> **Ursache Parzella:** `parzella_lp` ist die einzige Landingpage der Organisation, die
> privat liegt. GitHub Pages liefert private Repositories in diesem Tarif nicht aus, die
> Seite war deshalb nie erreichbar. Das Produkt selbst lief die ganze Zeit.

**Einordnung korrigiert**

- **plan-IT** stand unter *Immobilien & Handwerk*, plant aber Software-Landschaften
  (Architektur-Score, Jira-Anbindung, Gemini/OpenAI) → *KI, Analyse & Wachstum*.
- **makeartalanya** war als eigene App gelistet, ist aber eine Kundenwebsite
  → nach `/webdesign/` verschoben.

**Neu aufgenommen**

| Karte | Kategorie | Ziel |
|---|---|---|
| NebenkostenCheck | Immobilien & Handwerk | LP + `nebenkostencheck.eu` |
| Meine Wohnung | Immobilien & Handwerk | LP + `meine-wohnung.vercel.app` |
| DiTeLe | KI, Analyse & Wachstum | `ditele-gamma.vercel.app` |

> **Meine Wohnung** stand auskommentiert im Code, mit falscher URL *und* falscher
> Beschreibung („Verwaltung von Mietobjekten und Mieterkommunikation"). Das Produkt ist
> ein *Digital Construction & Property Workspace* mit 3D-Visualisierung, Ressourcen-
> verfolgung und Etagenbegehung. Die Beschreibung wurde neu geschrieben.

**Nicht aufgenommen:** AccessCheck, Saniatlas, onepercent — kein Deployment, deshalb
keine Platzhalterkarten.

### 1.2 · Zweiter Link auf der App-Karte

Karten führten nur auf die Landingpage. Sie behalten diese und bekommen zusätzlich
**„App öffnen"**, wo das Deployment antwortet — bei sieben Karten: WedBudget,
Meine Wohnung, NebenkostenCheck, blitzersafe, Geburtstagspilot, regiosync,
football-connect.

Technisch: Ein `<a>` darf kein zweites `<a>` enthalten. Die Karte ist deshalb ein
neutrales Element, der Titel-Link spannt sich per `::after` darüber, der Button liegt
mit `z-index` darauf. `:focus-within` gibt Tastaturnutzern dieselbe Rückmeldung wie
der Mauszeiger.

### 1.3 · Webdesign-Portfolio

Sechs neue Referenzen, vier neue Branchen:

| Referenz | Branche | Besonderheit |
|---|---|---|
| CarWAX Antalya | Fahrzeugpflege | README nennt WAMOCON als Erbauer |
| Beta Prüfservice | **Beratung & Dienstleistung** | erster deutscher Kunde im Portfolio |
| Ataberk Estate | **Immobilien & Bau** | zusätzlich 1Çatı-ERP für denselben Kunden |
| New Level Group | Immobilien & Bau | 3D-Szenen, KI-Concierge mit Leitplanken |
| Make Art Alanya | **Kunst & Kultur** | von `/apps/` hierher verschoben |
| DiTeLe | **Bildung & Training** | WAMOCON Academy GmbH |

**Bäuerle Steuerberater** liegt als auskommentierter, vollständig vorbereiteter Eintrag
in [`webdesign.ts`](../src/data/webdesign.ts) — es fehlt nur die Adresse. Sobald das
Deployment steht: `url` eintragen, Screenshot als
`/images/webdesign/baeuerle-steuerberater.webp` ablegen, Block aktivieren.

Weil DiTeLe von der WAMOCON Academy GmbH betrieben wird, sagt die Portfolio-Einleitung
jetzt „überwiegend für externe Kunden" statt „für externe Kunden".

### 1.4 · Zahlen aus den Daten statt aus der Hand

- Hero „6 Branchen live" war falsch: Die Branchenliste enthält den Filter
  „Alle Branchen" mit. Der Wert wird jetzt aus `projects` abgeleitet und steht auf 9.
- Die beiden Kennzahlen im Vertrauensblock waren fremde Zahlen: „5,0 Google-Bewertung
  unserer Kunden" und „1.800+ Bewertungen bei einem Salon allein". Sie bewegen sich
  ohne unser Zutun und wären im Streitfall zu belegen. Ersetzt durch zwei Werte über
  die eigene Arbeit, ebenfalls abgeleitet: **12 Websites live**, **9 Branchen**.
  Der Einladungssatz, die Google-Bewertungen der Kunden selbst nachzusehen, bleibt —
  eine Aufforderung zur Prüfung ist keine Behauptung.
- Dieselbe Zahl steckte in der Beschreibung von Mikail Hair Salon („über 1.800
  Google-Bewertungen"). Jetzt: „mit den Google-Bewertungen des Salons im Mittelpunkt".

> Nicht angefasst: die **eigene** 5,0-Bewertung im Kontaktblock
> ([`ContactBlock.astro`](../src/components/sections/ContactBlock.astro)). Das ist
> WAMOCONs eigenes Google-Profil und damit selbst belegbar.

### 1.5 · Screenshots

Sechs neue Aufnahmen mit Chrome headless in 1440×900, als WebP — genau die Maße, die
die Kartenkomponente deklariert.

| | |
|---|---|
| sechs neue WebP zusammen | **≈ 0,6 MB** |
| sechs bestehende PNG zusammen | 14,3 MB |

Die bestehenden PNGs bleiben auf deinen Wunsch unverändert. Damit ist Befund D-04
weiterhin offen, siehe O-3.

### 1.6 · `llms.txt`

`wamocon.com/kontakt/` und `/en/contact/` waren dort als Kontaktseiten geführt, liefern
aber 404 — die Kontaktseite wurde bewusst ausgebaut. Beide Einträge zeigen jetzt auf den
tatsächlichen Kontaktanker der Startseiten (`/#kontakt`, `/en/#kontakt`) und sagen
ausdrücklich, dass es keine eigene Kontaktseite gibt. Dieselbe Korrektur in
`llms-full.txt` an zwei Stellen.

### 1.7 · Commits

| Commit | Inhalt |
|---|---|
| `a56ad65` | Analyse und Feedback-Datei |
| `5305f20` | App-Karten zeigen auf auflösende Ziele |
| `ae4f940` | Zweiter Link auf der App-Karte |
| `99d9e71` | Fünf Kundenwebsites im Portfolio |
| `a6338a6` | Chat-Wissensbasis neu gebaut |

---

## 2 · Verifikation

- `npm run build` läuft durch, 48 Seiten, Wissensbasis 539 Chunks.
- **68 verlinkte Adressen geprüft**, alle liefern 200 — bis auf die beiden unter O-1.
- Gebautes HTML gegengelesen: „52 Apps in 7 Kategorien", 9 Branchenfilter,
  12 Referenzkarten, Hero 9, Vertrauensblock 12 / 9, Bäuerle korrekt nicht ausgeliefert.
- Beide Seiten im Browser aufgenommen und angesehen.

---

## 3 · Offene Punkte

### O-1 · Ein toter Link ist bewusst geblieben

`mikailhairsalon.vercel.app` liefert 404. Die Karte bleibt auf deine Entscheidung hin
stehen, **du reaktivierst das Deployment**. Bis dahin führt eine von zwölf Referenzen
ins Leere — auf einer Seite, deren Vertrauensblock ausdrücklich zum Durchklicken auffordert.

*(Der zweite Treffer im Prüflauf, `AI-SafeGuard_lp`, steht nur in einem Kommentar und
wird nicht ausgeliefert.)*

### O-2 · Lange Kartennamen brechen mitten im Wort

„NebenkostenChec/k", „Kompetenzkompas/s", „backofficeassisten/t", „GrundsteuerPrüfe/r".
Ursache ist `overflow-wrap: break-word` auf `.app-card__name`
([`AppCard.astro`](../src/components/ui/AppCard.astro)). Betraf schon vorher vier Karten.
Nicht angefasst, weil nicht beauftragt — es ist eine Zeile CSS.

### O-3 · Die sechs alten Screenshots wiegen weiter 14,3 MB

Drei davon stehen zusätzlich auf `loading="eager"`
([`WebdesignPage.astro:78,82,86`](../src/components/sections/WebdesignPage.astro#L78)).
Das ist der teuerste LCP der Site, auf der Seite, die Premium-Qualität verkauft. Die
neuen sechs zeigen, was möglich ist: 0,6 MB statt 14,3 MB.

### O-4 · Acht Apps haben ein totes Deployment

AppLens · Auktivo · cardscan · AllergieScan · CarMan · Daily Echo · Kompetenzkompass —
dazu die drei neu auf „bald verfügbar" gesetzten AngelSpot, ARIA, BalkonBonus.
Ihre Landingpages leben, die Anwendungen nicht. Beschlossen: so lassen.
Bezahlte Domains, die derzeit ins Leere zeigen: `applens.eu`, `vertragspro.eu`,
`cancard.eu`, `allergiescan.net`, `balkonbonus.eu`.

### O-5 · Alle Produkthandbücher sind unerreichbar

Zehn Repositories nennen in ihrer Beschreibung ein Handbuch unter
`wamocon.github.io/<app>/manual` oder `/handbook`. Keines lädt — dieselbe Ursache wie
bei Parzella: private Repos werden von GitHub Pages nicht ausgeliefert. Betroffen:
`promptcontrol`, `blitzersafe`, `kitaradar`, `schufacleaner`, `TeamRadar`, `trace`,
`applens`, `nebenkostencheck`, dazu `produkthandbuch.aiaway.de` und
`produkthandbuch.ladekompass.com`.

### O-6 · Markennamen laufen auseinander

| Produkt | Karte | Repo | Domain | Titel dort |
|---|---|---|---|---|
| Grundsteuer | GrundsteuerPrüfer | `grundsteuerPruefer` | `baseguard.eu` | **Grundwächter** |
| Auktivo | Auktivo | `auktivo` | `vertragspro.eu` | — |
| cardscan | cardscan | `cardscan` | `cancard.eu` | — |
| HandwerkerBonus | HandwerkerBonus | `handworkerbonus` | `hardwarebonus.eu` | HandwerkerBonus |

### O-7 · `llms-full.txt` nennt keine einzige App beim Namen

Die Chatbot-Wissensbasis entsteht aus dem gebauten HTML, neue Apps landen dort
automatisch. Die LLM-Datei nicht. Ein Modell, das nach „Software aus Eschborn" gefragt
wird, kann WAMOCON deshalb nicht mit einem konkreten Produkt zitieren. Ein Abschnitt mit
den 52 Namen samt Einzeiler ist der billigste AEO-Hebel, den die Site hat.

### O-8 · Türkei oder Deutschland?

Die Webdesign-Seite ist auf Alanya und den Lira-Preis (25.000 ₺) zugeschnitten. Mit
Beta Prüfservice (Rhein-Main) und der vorbereiteten Bäuerle-Kanzlei stehen zwei deutsche
Kunden im Portfolio, für die weder Preis noch Ansprache passen. Zwei Wege: getrennte
Ansprache je Sprachfassung, oder ein zweites Paket für den deutschen Markt.
Positionierungsentscheidung, keine Umsetzungsfrage.

### O-9 · Zwei tote Dateien

- `src/data/webdesign.html` — von keiner Seite importiert, setzt aber `canonical` auf
  `/webdesign/`. Kopie der Barber-Landingpage aus dem Repo `Barber-Shop`.
- `src/components/sections/ContactPage.astro` — unbenutzt, seit die Kontaktseite
  ausgebaut wurde.

### O-10 · Der Rest der Akademie bleibt getrennt

Beschlossen: Nur DiTeLe kommt auf die Website. Nicht aufgenommen, aber vorhanden:
`istqb-ocl` und `ISTQBCTFL_15_Tage_Arbeitsamt` (beide live), `wamocon_akademie` und
`_V2.0`, `wamocon_academy_shop`, `wamocon_academy_api`.

---

## 4 · Bewusst nicht aufgenommen

**Vertraulich oder gesperrt:** `turkish-legal-copilot` (README: „not a production legal
service") · `Marketingmaschine` (README: „RED / no-go for production")

**`Azura-World`** bleibt öffentlich. Das README untersagt zwar die Veröffentlichung, gilt
aber als überholt; das Repo ist als Demo und Beispiel zu betrachten. **Entschieden, wird
nicht wieder aufgegriffen.**

**Interne Systeme:** `wamohub` · `ticketWMC` · `AppMonitor` · `it-security` ·
`wamocon_IT_security_dashboard` · `wamocon_network_monitoring` · `wamocon_backup_NAS_GD` ·
`wamocon_onboarding` · `wamocon_Jira_Ticket_Creation` · `wamocon-autobots`

**Interne KI- und QA-Infrastruktur:** `wamocon-testautomatisierung` (Sokrates QA-Fabrik) ·
`Universal-AI-Testing` · `lokal-ai-stack` · `sokrates-firecrawl` · `ARGUS-Review-Pipeline` ·
`ai_apps_automation` · `ai_homepage_creator`

**Interne Marketing-Automation:** `Agnetic_Marketing_System` · `Agentic_Marketing_45_Days` ·
`AI-Content-Generation` · `KfBm-content-generatiion-`

**Templates und Gerüste:** `template_repo` · `web_design_template` · `barbershop` ·
`localSupabaseDB` · `github_workflow` · `standard_prozessablauf` ·
`wamocon_entwicklerhandbuch` · `test1` · `realityCheck` · `kiKollege` (leer) ·
`CRMPlan`, `klarAmt`, `DUCCA-Home`, `Emre-Smart-Home`, `Little-stars-in-the-sky`
(unverändertes Template-README) · `Universal_Inventory_Manager` (Scaffold)

**Noch zu früh:** `damicon` und `Digitalisierung-Himbeerenbetrieb` („Malina",
Vor-Ort-Analyse 24.09.–01.10.2026) · `AgroPark_Nekrasovo` (Deployment 404) ·
`Cati` / 1Çatı (kundenspezifisch, gehört eher als Referenz zu Ataberk) ·
`Stars-in-the-Sky` · `EUAIActCallSystem` · `ai_safeguard`

**Diese Website:** `wamocon_homepage`, `wamocon_homepage_v2.0`

**Landingpage-Repos** bereits gelisteter Apps (`*_lp`, `lp_*`) — kein eigenes Delta.

---

## 5 · Methodik

Alle 174 Repositories über die GitHub-API mit Name, Homepage, Beschreibung,
Pages-Status, Sprache sowie Anlage- und Änderungsdatum. Zuordnung über drei Schlüssel:
exakter Repo-Name, Repo-Slug aus der verlinkten `wamocon.github.io`-URL und das
Homepage-Feld. Jede Zuordnung einzeln nachgeprüft, weil mehrere Produkte anders heißen
als ihr Repository:

`urbackup` ↔ `backup_planner` · `ProCon` ↔ `promptcontrol` · `Ahnenecho` ↔ `stammfeuer` ·
`LFA` ↔ `Wamocon_FIAE` · `Auktivo` ↔ `vertragspro.eu` · `belegnest` ↔ `belegbox`

Jede hinterlegte URL per HTTP-Statusabfrage geprüft, jeder 404 ein zweites Mal einzeln
verifiziert. READMEs und Anforderungsdokumente gelesen, um Produktzweck und Reifegrad zu
bestimmen statt zu raten.
