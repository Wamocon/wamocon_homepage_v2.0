# Portfolio-Delta — Umsetzung & Feedback

Abgleich **aller** Repositories von `github.com/Wamocon` gegen `/apps/` (50 Karten) und
`/webdesign/` (6 Referenzen). Stand **8. September 2026**, Zugriff als `DanielM413`.

**So benutzt du diese Datei:** Jeder Punkt hat einen Entscheidungsblock. Kreuze an
(`[x]`), schreib deinen Kommentar in die `>`-Zeile darunter, speichern — ich lese die
Datei wieder ein und setze um, was freigegeben ist.

Legende Schweregrad: **Blocker** = live sichtbar kaputt · **Hoch** = falsche Aussage oder
messbarer Schaden · **Mittel** = wirkt ungepflegt · **Niedrig** = Aufräumen.

| Datenbasis | |
|---|---|
| Repositories gesamt | **174** |
| davon öffentlich | 92 |
| davon privat | **82** |
| Apps auf der Website | 50 |
| Referenzen auf der Website | 6 |

---

## ✅ Beschlusslage — entschieden am 8. September 2026

Alle Punkte hier sind von Daniel freigegeben. Die Abschnitte darunter bleiben als
Begründung und Beleg stehen. Offene Punkte stehen in Abschnitt 11.

### Apps entfernen
| Karte | Grund |
|---|---|
| AngelSpot | Deployment gelöscht, kein erreichbares Ziel |
| ARIA | Deployment gelöscht, kein erreichbares Ziel |
| BalkonBonus | Produktdomain tot, Landingpage nur Platzhalter |
| makeartalanya | ist eine Kundenwebsite → wechselt nach `/webdesign/` |

### Apps aufnehmen
| Karte | Kategorie | Ziel |
|---|---|---|
| NebenkostenCheck | Immobilien & Handwerk | `nebenkostencheck.eu` |
| Meine Wohnung | Immobilien & Handwerk | `meine-wohnung.vercel.app` — **Beschreibung wird neu geschrieben**, die auskommentierte ist sachlich falsch |

**Nicht aufnehmen:** AccessCheck, Saniatlas, onepercent — keine „Bald verfügbar"-Karten
ohne Deployment.

### Apps korrigieren
| Karte | Änderung |
|---|---|
| Parzella | URL auf `https://parzella.eu` — Produkt lebt, nur die private LP lieferte 404 |
| GrundsteuerPrüfer | „bald verfügbar" entfernen, Ziel = Landingpage, Name bleibt |
| Vereinsping | „bald verfügbar" entfernen, auskommentierte URL aktivieren |
| plan-IT | Kategorie wechselt von *Immobilien & Handwerk* nach *KI, Analyse & Wachstum* — es ist ein Software-Architekturplaner, keine Bauplanung |
| Mikail Hair Salon | Karte bleibt, **Daniel reaktiviert das Deployment** |

### Kartenverhalten
Jede App-Karte bekommt **zwei Ziele**: „Mehr erfahren" auf die Landingpage,
„App öffnen" auf die Produktdomain. Betrifft `AppCard.astro`, nicht nur die Daten.
Für die acht Apps mit totem Deployment (AppLens, Auktivo, cardscan, AllergieScan,
CarMan, Daily Echo, Kompetenzkompass) entfällt der zweite Button — Landingpage genügt.

### Webdesign aufnehmen
| Referenz | Branche | Ziel |
|---|---|---|
| CarWAX Antalya | Fahrzeugpflege | `car-wax-two.vercel.app` |
| Beta Prüfservice GmbH | **neu:** Beratung & Dienstleistung | `beta-pruefservice.vercel.app` |
| Ataberk Estate | **neu:** Immobilien & Bau | `ataberg-homepage.vercel.app` |
| New Level Group | Immobilien & Bau | `new-level-premium.vercel.app` |
| makeartalanya | **neu:** Kunst & Kultur *(Vorschlag, siehe Abschnitt 11)* | `makeartalanya.com` |
| Bäuerle Steuerberater | Beratung & Dienstleistung | **wartet auf Deployment** — wird als vorbereiteter, auskommentierter Eintrag hinterlegt |

### Weitere Beschlüsse
- **Screenshots:** Claude erzeugt sie automatisch aus den Live-Seiten, 1440×900 als WebP.
  Die sechs bestehenden PNGs (14,3 MB) werden mitkonvertiert → **D-04 damit erledigt**.
- **Kampagne:** Umstellung auf **Herbstkampagne 2026**.
- **App-Filter:** wird **nicht** gebaut, Katalog bleibt wie er ist (D-08 abgelehnt).
- **Azura-World:** bleibt öffentlich. README ist überholt, das Repo gilt als Demo und
  Beispiel. **D-02 ist damit erledigt und wird nicht wieder aufgegriffen.**

### Folge für die Zahlen

| | vorher | nachher |
|---|---|---|
| Apps | 50 | **48** |
| Referenzen | 6 | **11** (+1 vorbereitet) |
| Branchen | 5 | **8** |

⚠️ **Der Katalog schrumpft von 50 auf 48.** Drei Karten fallen weg, makeartalanya
wechselt die Seite, zwei kommen dazu. Die Zählung auf der Seite ist dynamisch und
korrigiert sich selbst — aber „50 Apps" als Marketingaussage stimmt danach nicht mehr.
Siehe Abschnitt 11, dort steht die Frage.

---

## 0 · Was die privaten Repos verändert haben

Die erste Analyse stützte sich auf 92 öffentliche Repos. Mit den 82 privaten fällt ein
Teil der damaligen Schlussfolgerungen — hier steht, was jetzt anders ist. **Bitte lies
diesen Abschnitt zuerst, er korrigiert zwei meiner früheren Aussagen.**

**Korrektur 1 · Parzella ist nicht tot, sondern falsch verlinkt.**
Ich hatte geschrieben, für Parzella gebe es weder Repo noch Seite. Falsch. Das Repo
`parzella` ist privat und das Produkt läuft unter **`parzella.eu` (200)**.
Der 404 auf der Website hat eine präzise Ursache: `parzella_lp` ist die **einzige**
Landingpage der ganzen Organisation, die privat ist — und GitHub Pages liefert private
Repos in diesem Tarif nicht aus. Alle anderen `*_lp`-Repos sind öffentlich, deshalb
funktionieren deren Links. Das ist keine Produktfrage, sondern eine Ein-Zeilen-Korrektur.

**Korrektur 2 · Es fehlt kein einziges Repo mehr.**
Für alle sieben zuvor „vermissten" Einträge existiert ein privates Repo:
`parzella`, `angelSpot`, `ARIA`, `trace` + `trace_lp`, `KI-Manager-LMS`,
`mikailhairsalon`, `Alanyum-Car-Wash`. Auch `ai_safeguard` existiert (privat, ein Tag
Laufzeit im März 2026, kein README) — das bestätigt, dass die auskommentierte Karte
zu Recht auskommentiert ist.

**Neu und wichtig:** Die privaten Repos zeigen ein Muster, das öffentlich unsichtbar war —
jede App hat eine eigene Produktdomain, eine Landingpage und ein Handbuch. Die Website
verlinkt überwiegend die Landingpage. Dazu Abschnitt 3, das ist der größte Einzelbefund.

**Ebenfalls neu:** Zwei **deutsche** Webdesign-Kunden, die bisher nirgends auftauchen
(Beta Prüfservice, Bäuerle Steuerkanzlei). Dazu Abschnitt 5 — das berührt die
Positionierung der ganzen Webdesign-Seite.

---

## 1 · Befunde

### D-01 · Blocker · Vier tote Links — Ursachen jetzt geklärt

Alle Statuscodes doppelt geprüft. Die Diagnose ist pro Karte unterschiedlich:

| Karte | Verlinktes Ziel | Ursache | Empfehlung |
|---|---|---|---|
| **Parzella** | `wamocon.github.io/parzella_lp/` → 404 | LP-Repo ist privat, Pages liefert nicht aus | **URL auf `https://parzella.eu` ändern** — Produkt lebt |
| **AngelSpot** | `angelspot.eu/de` → 404 | Repo `angelSpot` privat, keine Homepage hinterlegt, Deployment gelöscht | Produkt offline → Karte entfernen oder Deployment reaktivieren |
| **ARIA** | `aria-ten-kohl.vercel.app` → 404 | Repo `ARIA` privat, keine Homepage hinterlegt, Deployment gelöscht | Produkt offline → Karte entfernen oder Deployment reaktivieren |
| **BalkonBonus** | `balkonbonus.eu` → 404 | Repo `balkonbonus` privat, Produktdomain tot, LP ist Platzhalter (D-10) | Kein gültiges Ziel vorhanden → Deployment reaktivieren oder Karte entfernen |
| **Mikail Hair Salon** *(Webdesign)* | `mikailhairsalon.vercel.app` → 404 | Repo `mikailhairsalon` privat, Deployment gelöscht | Deployment reaktivieren — an dieser Karte hängt die Aussage „1.800+ Bewertungen" |

**Parzella** — [x] URL auf `parzella.eu` korrigieren *(vorausgewählt, weil rein technisch)* · [ ] anders:
> 

**AngelSpot** — [ ] Deployment reaktivieren · [ ] Karte entfernen
> 

**ARIA** — [ ] Deployment reaktivieren · [ ] Karte entfernen
> 

**BalkonBonus** — [ ] Deployment reaktivieren · [ ] Karte entfernen · [ ] LP fertigstellen und dorthin verlinken
> 

**Mikail Hair Salon** — [ ] Deployment reaktivieren · [ ] Karte entfernen
> 

---

### D-02 · Blocker · Vertrauliches Material liegt öffentlich

Das Repo `Azura-World` ist **öffentlich**, obwohl das README sagt:
*„Confidentiality: competitor intelligence. Do not publish, do not push to a public
remote."* Enthalten sind Jira-Vorgang INTERNAL-107 und die namentliche Nennung des
Wettbewerbers. Ebenso ist `accessCheck/requirements/produkt-bfsg-audit-tool.md` mit
**VERTRAULICH** überschrieben und frei lesbar.

Dass 82 andere Repos korrekt privat stehen, macht diese beiden zu Ausreißern, nicht zur Regel.

**Entscheidung:** [ ] `Azura-World` auf privat setzen (ich mache es) · [ ] ihr macht es · [ ] bleibt öffentlich · [ ] `accessCheck` mitprüfen
> 

---

### D-03 · Hoch · Zwei Karten zeigen „Bald verfügbar", obwohl das Produkt live ist

| Produkt | Erreichbar unter | Status |
|---|---|---|
| GrundsteuerPrüfer | `baseguard.eu` · `grundsteuerpruefer.vercel.app` · LP | alle 200 |
| Vereinsping | `wamocon.github.io/vereinsping_lp/` | 200, URL im Code auskommentiert |

**Entscheidung:** [ ] beide auf „live" · [ ] nur Vereinsping · [ ] nur GrundsteuerPrüfer · [ ] unverändert
> 

---

### D-04 · Hoch · 8,3 MB Bilder werden auf `/webdesign/` eager geladen

Drei Marquee-Bilder stehen auf `loading="eager"`
([WebdesignPage.astro:58,62,66](../src/components/sections/WebdesignPage.astro#L58)) und
liegen unoptimiert als PNG in `/public`, das Astro nicht anfasst.
`sabas-home.png` 3,03 MB · `maryam-barbershop.png` 2,62 MB · `mikail-hair-salon.png` 2,61 MB
— alle sechs zusammen **14,3 MB**, live in dieser Größe ausgeliefert.

Mit fünf neuen Referenzen (Abschnitt 5) kämen sonst weitere ~15 MB dazu.

**Entscheidung:** [ ] alle nach WebP konvertieren und `eager` entfernen · [ ] nur konvertieren · [ ] später
> 

---

### D-05 · Hoch · „6 Branchen live" stimmt nicht

Sechs Einträge in der Branchenliste, davon einer der Filter „Alle Branchen". Real:
**5 Branchen, 6 Projekte**. Hart kodiert in [webdesign.ts:34](../src/data/webdesign.ts#L34).
Nach der Ergänzung wären es 7 Branchen und 11 Projekte.

**Entscheidung:** [ ] aus den Daten ableiten (empfohlen) · [ ] fest auf korrekten Wert setzen
> 

---

### D-06 · Mittel · Die Kampagne ist abgelaufen

„Sommerkampagne 2026", Text argumentiert mit „diesen Sommer". Heute ist der 8. September.
Umrechnungsbasis der Preise vom 28. Juli 2026.

**Entscheidung:** [ ] verlängern, neuer Titel: ______ · [ ] zeitlos ohne Saisonbezug · [ ] Kurse aktualisieren · [ ] beenden
> 

---

### D-07 · Mittel · `llms.txt` verweist auf zwei Seiten, die es nicht gibt

`wamocon.com/kontakt/` und `wamocon.com/en/contact/` → beide 404, beide in `public/llms.txt`
als Kontaktseiten gelistet. `ContactPage.astro` existiert, wird aber von keiner Seite genutzt.

**Entscheidung:** [ ] Kontaktseite anlegen · [ ] Einträge in `llms.txt` auf bestehende Anker umbiegen
> 

---

### D-08 · Mittel · Kategorien sind unwuchtig und inhaltlich unscharf

| Kategorie | Apps |
|---|---|
| Lifestyle & Kultur | **15** |
| Mobilität, Familie & Recht | 9 |
| Immobilien & Handwerk | 7 |
| Office & Produktivität | 6 |
| Marketing, Finanzen & Planung | 6 |
| KI, Analyse & Wachstum | 5 |
| E-Commerce & Marktplatz | **2** |

In „Lifestyle & Kultur" stehen ARIA (Arztpraxen), TeamRadar, KLAR, AppLens und cardscan
neben Ahnenecho und Treffpunkt — B2B-Werkzeuge in einer Freizeitschublade.

**Entscheidung:** [ ] Kategorien neu schneiden · [ ] Feld `audience: 'b2b' | 'b2c'` als zweiten Filter · [ ] so lassen
> 

---

### D-09 · Mittel · `makeartalanya` steht in der falschen Rubrik

Repo `makeartalanya-app`: dreisprachige Kundenwebsite mit Buchungssystem für ein
Kunststudio in Alanya — eine Webdesign-Referenz, keine eigene App.

**Entscheidung:** [ ] nach `/webdesign/` verschieben · [ ] auf beiden Seiten · [ ] bleibt
> 

---

### D-10 · Niedrig · BalkonBonus-Landingpage ist ein Platzhalter

Titel wörtlich `Balkonbonus - [placeholder]`. Taugt nicht als Ersatzziel für D-01.

**Entscheidung:** [ ] fertigstellen · [ ] löschen · [ ] egal
> 

---

### D-11 · Niedrig · Markenzersplitterung

| Produkt | Kartenname | Repo | Domain | Titel dort |
|---|---|---|---|---|
| Grundsteuer | GrundsteuerPrüfer | `grundsteuerPruefer` | `baseguard.eu` | **Grundwächter** |
| Handwerker | HandwerkerBonus | `handworkerbonus` | `hardwarebonus.eu` | HandwerkerBonus |
| Auktivo | Auktivo | `auktivo` | `vertragspro.eu` (404) | — |
| cardscan | cardscan | `cardscan` | `cancard.eu` (404) | — |

Vier Produkte, bei denen Kartenname, Repo-Name und Domain auseinanderlaufen. Bei Auktivo
ist die Domain sogar aus einer anderen Produktwelt (`vertragspro`).

**Entscheidung → siehe F4.**
> 

---

### D-12 · Niedrig · Zwei tote Dateien im Repo

`src/data/webdesign.html` — von keiner Seite importiert, setzt aber `canonical` auf
`/webdesign/`; Kopie der Barber-Landingpage aus `Barber-Shop`.
`src/components/sections/ContactPage.astro` — unbenutzt (hängt an D-07).

**Entscheidung:** [ ] beide löschen · [ ] nur `webdesign.html` · [ ] so lassen
> 

---

## 2 · NEU · D-13 · Hoch · Alle Produkthandbücher sind unerreichbar

Acht private Repos nennen in ihrer Beschreibung ein Handbuch unter
`wamocon.github.io/<app>/manual` bzw. `/handbook`. **Keines davon ist erreichbar** —
aus demselben Grund wie bei Parzella: GitHub Pages liefert private Repositories in
diesem Tarif nicht aus.

Betroffen (alle 404): `promptcontrol` · `blitzersafe` · `kitaradar` · `schufacleaner` ·
`TeamRadar` · `trace` · `applens` · `nebenkostencheck` · dazu
`produkthandbuch.aiaway.de` (AWAY) und `produkthandbuch.ladekompass.com` (LadeKompass).

Das betrifft die Website nur mittelbar — sie verlinkt die Handbücher nicht. Aber die
Repo-Beschreibungen behaupten eine Doku-Adresse, die es nicht gibt, und für Kunden, die
nach einem Handbuch fragen, ist nichts da.

**Entscheidung:** [ ] Handbücher in öffentliche `*_lp`-Repos verschieben · [ ] auf die Produktdomains legen · [ ] Beschreibungen bereinigen · [ ] später
> 

---

## 3 · NEU · D-14 · Hoch · Die Website verlinkt Landingpages statt Produkte

Der größte Einzelbefund aus den privaten Repos. Jede App hat laut Repo eine kanonische
Produktdomain. Die Website verlinkt in der Regel die Marketing-Landingpage. Ein Besucher
landet dadurch auf einer Verkaufsseite statt in der Anwendung — obwohl die Anwendung läuft.

### 3a · Produkt läuft, Website verlinkt trotzdem die Landingpage

| App | Website verlinkt | Produktdomain | Status Domain |
|---|---|---|---|
| **Parzella** | LP → **404** | `parzella.eu` | 200 |
| blitzersafe | LP (200) | `blitzersafe.eu` | 200 |
| regiosync | LP (200) | `regiosync.eu` | 200 |
| Geburtstagspilot | LP (200) | `geburtstagspilot.de` | 200 |
| football-connect | LP (200) | `footballconnect.eu` | 200 |
| WedBudget | `hochzeitsrechner_lp` (200) | `wedbudget.vercel.app` | 200 |

Sechs bezahlte Domains, die kein Besucher der Website je zu sehen bekommt.

**Entscheidung:** [ ] überall auf die Produktdomain verlinken · [ ] LP behalten, Produktlink als zweiter Button auf der Karte · [ ] nur Parzella korrigieren · [ ] so lassen
> 

### 3b · Produktdomain ist tot, Landingpage trägt die Karte

Hier ist die aktuelle Verlinkung auf die LP richtig — aber das Produkt dahinter ist offline.

| App | Tote Produktdomain | Landingpage |
|---|---|---|
| AppLens | `applens.eu` (DNS-Fehler) | 200 |
| Auktivo | `vertragspro.eu` (404) | 200 |
| cardscan | `cancard.eu` (404) | 200 |
| AllergieScan | `allergiescan.net` (404) | 200 |
| CarMan | `carman-snowy.vercel.app` (404) | 200 |
| Daily Echo | `daily-echo-jade.vercel.app` (404) | 200 |
| Kompetenzkompass | `skillmapper-seven.vercel.app` (404) | 200 |
| BalkonBonus | `balkonbonus.eu` (404) | **Platzhalter** |

Acht Apps, die auf der Seite als fertige Produkte stehen, deren Anwendung aber nicht
läuft. Das ist keine Website-, sondern eine Betriebsfrage — aber es entscheidet, ob die
Karten ehrlich sind.

**Entscheidung:** [ ] Deployments reaktivieren, Liste prüfen · [ ] betroffene Karten auf „Bald verfügbar" · [ ] so lassen, LP genügt als Ziel
> 

---

## 4 · Ergänzungsvorschlag Apps

Aus 50 werden **55**. Die Zählung auf `/apps/` rechnet sich selbst. Fertige,
dreisprachige Einträge liegen bereit — ich setze sie ein, sobald hier ein Haken steht.

### A-1 · NebenkostenCheck → *Immobilien & Handwerk*

Repos `nebenkostencheck` + `nebenkostencheck_lp` (beide öffentlich), live auf
**`nebenkostencheck.eu` (200)**, mit Landingpage. Prüft Nebenkostenabrechnungen für
Mieter und Vermieter.

- [ ] aufnehmen · [ ] nicht aufnehmen · [ ] Text anpassen:
> 

### A-2 · onepercent → *Office & Produktivität* **(neu aus den privaten Repos)**

Repo `onepercent` (privat). KI-gestützter Wochen- und Tagesplaner für Studium, Sport und
Beruf: aus Zielen, Aufgaben und realer Verfügbarkeit entsteht ein Plan mit Erholung,
Spaced Repetition und realistischen Grenzen. README nennt es ausdrücklich
„Produkt der WAMOCON GmbH". Anforderungsdokument v1.0 und Umsetzungsplan liegen vor.
**Kein Deployment hinterlegt** → Vorschlag ist eine „Bald verfügbar"-Karte.

- [ ] als „bald verfügbar" aufnehmen · [ ] ist live unter: ______ · [ ] Projekt ruht
> 

### A-3 · Saniatlas → *Immobilien & Handwerk*

Repos `energy` + `lp_energy`. End-to-End-Plattform für Energieberatung: mobile
Gebäudebegehung, Fotobeleg am Projekt, Förderprogramme BAFA/KfW. Welle 4 abgeschlossen
(April 2026), Welle 5 in Planung. Zielmarkt laut Projektbeschreibung ca. 14.000
BAFA-gelistete Energieeffizienz-Experten. **Kein Deployment gefunden.**

- [ ] als „bald verfügbar" aufnehmen · [ ] ist live unter: ______ · [ ] Projekt ruht
> 

### A-4 · AccessCheck → *KI, Analyse & Wachstum*

Repo `accessCheck`. BFSG/WCAG-Audit-Werkzeug: führt durch die WCAG-Kriterien, belegt
Befunde mit Screenshots, gibt den Prüfbericht als PDF aus. Anforderungsdokument steht auf
„Zur Freigabe". **Kein Deployment gefunden.**

Strategisch das passendste Produkt im Portfolio: WAMOCON verkauft Qualitätssicherung und
betreibt selbst eine Barrierefreiheitserklärung.

- [ ] als „bald verfügbar" aufnehmen · [ ] ist live unter: ______ · [ ] noch nicht freigegeben
> 

### A-5 · Meine Wohnung → *Immobilien & Handwerk*

Steht bereits im Code, auskommentiert wegen falscher URL. Jetzt gibt es ein **besseres
Ziel als die Landingpage**: das Repo `meine_wohnung` (privat) nennt
**`meine-wohnung.vercel.app` (200)** — „Digital Construction & Property Workspace".

- [ ] mit `meine-wohnung.vercel.app` reaktivieren · [ ] mit der Landingpage reaktivieren · [ ] auskommentiert lassen
> 

### A-6 · Statuskorrekturen GrundsteuerPrüfer + Vereinsping

Siehe D-03.

- [ ] umsetzen · [ ] später
> 

---

### Zur Entscheidung — je nach Positionierung

| Repo | Was es ist | Status | Empfehlung |
|---|---|---|---|
| `Cati` | 1Çatı — Immobilien-ERP für Ataberk Estate | live | als **Referenz** neben der Ataberk-Website, nicht als Produkt |
| `ticketWMC` | WMC Ticketsystem, Jira als Backend | live | eher `/unser-system/` |
| `damicon` + `Digitalisierung-Himbeerenbetrieb` | „Malina": Ernte-, Personal- und Qualitätssteuerung, 3 ha bei Almaty | Demo live | **Vor-Ort-Analyse 24.09.–01.10.2026** → erst danach listen |
| `Stars-in-the-Sky` + `Little-stars-in-the-sky` | Screening-Plattform für Legasthenie und Dysgraphie (ML) | kein Deployment | Reifegrad unklar, siehe F6 |
| `EUAIActCallSystem` | „Call System für EUAIAct und Webanalyse" | kein README | siehe F6 |
| `turkish-legal-copilot` | Recherche zu türkischem Recht | README: „not a production legal service" | **nicht listen** |
| `Universal_Inventory_Manager` | Lagerverwaltung | README: „baseline scaffold stage" | **nicht listen** |

- **1Çatı:** [ ] als Referenz · [ ] als App · [ ] gar nicht
  > 
- **ticketWMC:** [ ] `/unser-system/` · [ ] als App · [ ] gar nicht
  > 
- **Malina / damicon:** [ ] nach der Analysewoche listen · [ ] jetzt listen · [ ] gar nicht
  > 
- **Stars in the Sky:** [ ] listen · [ ] nicht listen · [ ] Status?
  > 

---

## 5 · Ergänzungsvorschlag Webdesign

Aus 6 werden **11**, aus 5 Branchen werden 7. Zwei der fünf neuen Kunden sind **deutsch** —
das berührt die Positionierung der Seite, siehe F8.

### W-1 · CarWAX Antalya → Branche `auto`

`car-wax-two.vercel.app` (200), Repo `CarWAX` (öffentlich). Dreisprachig TR/EN/RU, heller
und dunkler Modus, KI-Concierge, Keramikversiegelung/PPF/Detailing. Das README nennt
WAMOCON ausdrücklich als Erbauer und verlinkt auf `wamocon.com/webdesign`. Keine
Freigabefrage.

- [ ] aufnehmen · [ ] nicht aufnehmen
> 

### W-2 · Beta Prüfservice GmbH → **neue Branche „Beratung & Dienstleistung"** ⭐

`beta-pruefservice.vercel.app` (200), Repo `beta-pruefservice` (privat).
**DGUV-V3-Prüfung im Rhein-Main-Gebiet** — ein deutscher Kunde in eurer eigenen Region.

Das Repo ist die überzeugendste Kundenakte im ganzen Bestand: Sichtbarkeitsanalyse als
PDF und DOCX, ausfüllbarer Fragenkatalog, Website-Handbuch als PDF, Kundenmail-Entwurf
und -Endfassung, drei Logo-Varianten, Motion-Blueprint, URL-Inventar für die Migration,
ISTQB-Testplan und ein Übergabedokument. Das ist ein abgeschlossenes Mandat mit Handover,
kein Entwurf.

Für die Webdesign-Seite ist das der wertvollste Zugewinn — er belegt, dass ihr auch in
Deutschland liefert, nicht nur an der türkischen Riviera.

- [ ] aufnehmen · [ ] nicht aufnehmen · **Freigabe des Kunden liegt vor:** [ ] ja [ ] nein [ ] kläre ich
> 

### W-3 · Bäuerle Steuerberater → Branche „Beratung & Dienstleistung"

Repo `Steuerberater` (privat). Premium-Website **plus** KI-Plattform für eine
Steuerkanzlei: „Sokrates" als öffentlicher KI-Assistent für Erstinformationen und ein
geschütztes „Kanzlei-Cockpit" mit sechs Fachmodulen (Fachauskunft, Bescheidprüfung,
Behördenpost, Belege, Posteingang, Auswertungen). Läuft auch ohne Datenbank und ohne
externen KI-Dienst als Demo. **Kein Deployment hinterlegt.**

Inhaltlich das stärkste Argument für das Premium-Paket, das ihr habt — Website und
KI-Fachanwendung aus einer Hand, in einer regulierten Branche.

- [ ] aufnehmen · [ ] nicht aufnehmen · [ ] erst wenn deployed · **Freigabe:** [ ] ja [ ] nein [ ] kläre ich
> 

### W-4 · Ataberk Estate → **neue Branche „Immobilien & Bau"**

`ataberg-homepage.vercel.app` (200), Repo `Ataberg-Homepage` (öffentlich). Neuaufbau von
`ataberkhomes.com`, korrigierte Sprachfassungen, Assistent antwortet nur aus den Inhalten
des Maklerhauses. Für denselben Kunden entstand zusätzlich das 1Çatı-ERP.

- [ ] aufnehmen · [ ] nicht aufnehmen · **Freigabe:** [ ] ja [ ] nein [ ] kläre ich
> 

### W-5 · New Level Group → Branche „Immobilien & Bau"

`new-level-premium.vercel.app` (200), Repo `New-Level-Premium` (öffentlich). RU/EN/TR,
3D-Szenen, choreografierte Bewegung, KI-Concierge mit Leitplanken. Technisch das
ambitionierteste Stück. **Aber:** README beschreibt es als „rebuild" und „benchmark
against the current live site" → klingt nach Akquise-Entwurf. Siehe F3.

- [ ] aufnehmen · [ ] nicht aufnehmen · **Freigabe:** [ ] ja [ ] nein [ ] kläre ich
> 

### Voraussetzung: Screenshots

Für alle fünf fehlen Bilder unter `/public/images/webdesign/`. Die Karte erwartet 1440×900.
Als WebP anlegen und die sechs bestehenden PNGs mitkonvertieren → zugleich Fix für D-04.

- [ ] Screenshots machst du · [ ] Claude erzeugt sie aus den Live-Seiten · [ ] WebP-Konvertierung gleich mit
> 

---

## 6 · Seiten-Review über das Delta hinaus

- **`/apps/` hat keinen Filter und keine Suche bei 50 Karten.** Auf `/webdesign/` existiert
  der Branchenfilter längst und lässt sich fast unverändert übernehmen.
  - [ ] übernehmen
  > 

- **Keine Karte sagt, für *wen* die App ist.** Feld `audience` würde D-08 entschärfen und
  wäre ein zweiter Filter.
  - [ ] umsetzen
  > 

- **`llms-full.txt` nennt keine einzige App beim Namen.** Die Chatbot-Wissensbasis wird aus
  dem gebauten HTML erzeugt, neue Apps landen dort automatisch — die LLM-Datei nicht. Ein
  Modell, das nach „Software aus Eschborn" gefragt wird, kann WAMOCON nicht mit einem
  konkreten Produkt zitieren.
  - [ ] Abschnitt mit allen Appnamen + Einzeiler ergänzen
  > 

- **Die Webdesign-Dramaturgie trägt** (AISDALSLove, sauber durchgezogen). Genau deshalb
  wiegt D-01 dort schwer: der Vertrauensblock fordert zum Durchklicken auf — und die Seite
  besteht ihre eigene Probe nicht.

- **Die Tiefe hinter den Kunden bleibt ungenutzt.** Ataberk: Website *und* ERP.
  Beta Prüfservice: Sichtbarkeitsanalyse, Fragenkatalog, Handbuch, Übergabe. MARYAM: Ausbau
  vom Einstieg zum Premium-Auftritt. Das ist die Geschichte, die den Preis rechtfertigt —
  sie steht bisher in einem Nebensatz.
  - [ ] Fallstudie aufsetzen, Kunde: ______
  > 

- **Zahlen ohne Beleg.** „5,0 Google-Bewertung" und „1.800+ Bewertungen" sind Werbeaussagen
  mit konkreten Zahlen; mit Datum und Quelle sind sie sicher, ohne nach §5 UWG angreifbar —
  und seit D-01 nicht mehr nachklickbar.
  - [ ] Quelle und Stand ergänzen
  > 

---

## 7 · Nicht aufnehmen

Bitte nur widersprechen, wenn ich falsch liege.

**Vertraulich / gesperrt:** `Azura-World` (D-02) · `turkish-legal-copilot` (kein
Produktivdienst) · `Marketingmaschine` (README: „RED / no-go for production")

**Interne Systeme:** `wamohub` · `ticketWMC`* · `AppMonitor` · `it-security` ·
`wamocon_IT_security_dashboard` · `wamocon_network_monitoring` · `wamocon_backup_NAS_GD` ·
`wamocon_onboarding` · `wamocon_Jira_Ticket_Creation` · `wamocon-autobots`
*(* ticketWMC steht in Abschnitt 4 zur Entscheidung)*

**Interne KI- und QA-Infrastruktur:** `wamocon-testautomatisierung` (Sokrates QA-Fabrik) ·
`Universal-AI-Testing` · `lokal-ai-stack` · `sokrates-firecrawl` · `ARGUS-Review-Pipeline` ·
`ai_apps_automation` · `ai_homepage_creator`

**Interne Marketing-Automation:** `Agnetic_Marketing_System` · `Agentic_Marketing_45_Days` ·
`AI-Content-Generation` · `KfBm-content-generatiion-`

**Templates und Gerüste:** `template_repo` · `web_design_template` · `barbershop` ·
`localSupabaseDB` · `github_workflow` · `standard_prozessablauf` ·
`wamocon_entwicklerhandbuch` · `test1` · `realityCheck` (IDEA.md unausgefüllt) ·
`kiKollege` (leer) · `CRMPlan`, `klarAmt`, `DUCCA-Home`, `Emre-Smart-Home`,
`Little-stars-in-the-sky` (unverändertes Template-README) ·
`Universal_Inventory_Manager` (Scaffold)

**Diese Website:** `wamocon_homepage`, `wamocon_homepage_v2.0`

**Landingpage-Repos** bereits gelisteter Apps (`*_lp`, `lp_*`) — kein eigenes Delta.

- [ ] einverstanden · [ ] Einspruch bei:
> 

---

## 8 · NEU · Die Akademie fehlt vollständig

Kein Delta der beiden geprüften Seiten, aber der größte Fund insgesamt. In der
Organisation liegen **sieben** Repos zu einem zweiten Geschäftsfeld, das auf wamocon.com
an keiner einzigen Stelle vorkommt:

| Repo | Was | Status |
|---|---|---|
| `ditele` | DiTeLe V2 — Lernplattform für praktisches Softwaretesten, Rollen für Lernende/Trainer/Admin, KI-Assistent | **live**, aktiv bis 02.09.2026 |
| `istqb-ocl` | ISTQB CTFL 4.0 Online-Kurs + DiTeLe Praxis-Tool | **live** |
| `ISTQBCTFL_15_Tage_Arbeitsamt` | ISTQB-Zertifizierung in 15 Tagen, 100 % gefördert | **live** |
| `wamocon_akademie` / `_V2.0` | test-it-academy.com, zweisprachig, V2 in Astro | live / in Arbeit |
| `wamocon_academy_shop`, `_api` | Shop und API der Akademie | seit 2024 |
| `Wamocon_academy_Ditele`, `wamocon_ditele_testautomation` | DiTeLe V1 und dessen Testautomatisierung | Vorgänger |

Drei live erreichbare Kursangebote, eine eigene Lernplattform, ein Shop — und die
Unternehmenswebsite erwähnt nichts davon. Für ein Haus, das Testmanagement verkauft, ist
eine eigene Testing-Lernplattform das direkteste Kompetenzargument überhaupt.

**Entscheidung:** [ ] eigene Seite `/akademie/` planen · [ ] Abschnitt auf der Startseite · [ ] bewusst getrennt halten, nicht verlinken
> 

---

## 9 · Offene Fragen

- **F1 · Gibt es weitere Quellen?** Mit den 174 Repos ist der Abgleich für diese
  Organisation vollständig. Falls Projekte in persönlichen Accounts oder einer zweiten Org
  liegen, sag Bescheid. *(Die GitLab-Frage aus deiner Nachricht hat sich erledigt — alles
  liegt auf GitHub.)*
  > 

- **F2 · Was passiert mit den toten Links?** Siehe D-01, dort pro Karte zu entscheiden.
  > 

- **F3 · Sind Ataberk, New Level und Bäuerle beauftragt oder Akquise?** Ataberk und New
  Level sprechen im README von „rebuild", New Level ausdrücklich als Benchmark gegen die
  Live-Site. Als Referenz veröffentlicht braucht es die Zustimmung des Inhabers. Bei CarWAX
  und Beta Prüfservice stellt sich die Frage nicht — dort ist WAMOCON dokumentiert als
  Erbauer bzw. es liegt eine vollständige Kundenakte mit Übergabe vor.
  > 

- **F4 · Wie heißen die Produkte?** Grundsteuer: Karte „GrundsteuerPrüfer", Domain
  `baseguard.eu`, Titel „Grundwächter". Auktivo liegt auf `vertragspro.eu`, cardscan auf
  `cancard.eu`. Ich brauche je einen Namen und ein Ziel.
  > 

- **F5 · 1Çatı, ticketWMC, Malina — in den Katalog?** Empfehlungen in Abschnitt 4.
  > 

- **F6 · Welche Projekte werden noch verfolgt?** Ohne Deployment und ohne Aktivität seit
  Monaten: `onepercent`, `energy`/Saniatlas (April 2026), `accessCheck` (ein Tag im April),
  `Stars-in-the-Sky`, `EUAIActCallSystem`. „Bald verfügbar" ist nur richtig, wenn sie
  tatsächlich kommen — sonst stehen bald sechs statt zwei Platzhalterkarten auf der Seite.
  > 

- **F7 · Sollen die toten Deployments aus D-14b reaktiviert werden?** Acht Apps stehen auf
  der Seite als fertige Produkte, deren Anwendung nicht läuft. Das ist die Frage, die den
  größten Ehrlichkeitsunterschied macht.
  > 

- **F8 · Richtet sich das Webdesign-Angebot an die Türkei oder an Deutschland?** Die Seite
  ist auf Alanya und den Lira-Preis (25.000 ₺) zugeschnitten. Mit Beta Prüfservice
  (Rhein-Main) und der Bäuerle-Kanzlei kommen zwei deutsche Kunden dazu, für die dieser
  Preis und diese Ansprache nicht passen. Zwei Wege: getrennte Ansprache je Sprachfassung,
  oder ein zweites Paket für den deutschen Markt. Das ist eine Positionierungsentscheidung,
  keine Umsetzungsfrage.
  > 

- **F9 · Soll ich D-02 sofort angehen?** Siehe dort.
  > 

---

## 11 · Noch offen

Diese Punkte sind nicht entschieden. Sie blockieren die Umsetzung nicht — ich setze
zuerst die Beschlusslage um.

**Zwei Fragen entstehen direkt aus den Beschlüssen:**

- **Ü-1 · Der Katalog schrumpft auf 48 Apps.** „50 Apps" als runde Marketingzahl ist danach
  falsch. Drei Wege: die Zahl einfach fallen lassen und mit „48" arbeiten (Zählung ist
  ohnehin dynamisch), oder zwei der zurückgestellten Produkte doch aufnehmen, oder die
  entfernten Deployments reaktivieren.
  > 

- **Ü-2 · Wohin gehört makeartalanya auf `/webdesign/`?** Ein Kunststudio mit
  Buchungssystem passt in keine bestehende Branche. Mein Vorschlag ist eine neue Branche
  „Kunst & Kultur" mit zunächst einem Eintrag. Alternative: in „Beratung & Dienstleistung"
  einsortieren und diese Branche breiter fassen.
  > 

**Unverändert offen aus der Analyse:**

- **D-05 · Hero-Zahl** „6 Branchen live" — ich leite den Wert aus den Daten ab, damit er
  nicht wieder veraltet. Falls du das anders willst, sag Bescheid.
- **D-07 · `/kontakt/` und `/en/contact/`** liefern 404, sind aber in `llms.txt` gelistet.
  Kontaktseite anlegen oder Einträge umbiegen?
- **D-12 · Zwei tote Dateien** (`src/data/webdesign.html`, `ContactPage.astro`) — löschen?
- **D-13 · Alle Produkthandbücher unerreichbar**, weil die Repos privat sind. Betriebsfrage.
- **`llms-full.txt` nennt keine einzige App beim Namen** — billigster AEO-Hebel der Site.
- **Zahlen ohne Beleg** auf `/webdesign/`: „5,0 Google-Bewertung", „1.800+ Bewertungen".
- **F8 · Türkei oder Deutschland?** Mit Beta Prüfservice und Bäuerle stehen zwei deutsche
  Kunden im Portfolio, für die der Lira-Preis und die Alanya-Ansprache nicht passen.
- **Abschnitt 8 · Die Akademie** fehlt vollständig auf wamocon.com — sieben Repos, drei
  live erreichbare Kursangebote, eine eigene Lernplattform.

---

## 12 · Freigabe

**Umsetzen ab:** [ ] sofort · [ ] nach Rückfrage zu: ______

> 

---

*Erstellt am 8. September 2026, aktualisiert nach Auswertung der 82 privaten Repos.
Datenstand GitHub-API und Live-Site vom selben Tag. Alle HTTP-Status doppelt geprüft.
Repo-Zuordnungen manuell nachverifiziert, weil mehrere Produkte anders heißen als ihr
Repository (`urbackup` ↔ `backup_planner`, `ProCon` ↔ `promptcontrol`, `Ahnenecho` ↔
`stammfeuer`, `LFA` ↔ `Wamocon_FIAE`, `Auktivo` ↔ `vertragspro.eu`).*
