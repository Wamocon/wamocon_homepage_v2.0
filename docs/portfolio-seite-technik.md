# Portfolio-Seite: technische Basis und grafische Umsetzung

Dieses Dokument legt den technischen Stand fest, auf dem die Weiterentwicklung der Portfolio-Seite aufbaut. Neue Funktionen setzen auf diesen Stand auf und folgen den Grundsätzen im nächsten Abschnitt. Weicht eine Erweiterung bewusst davon ab, wird das hier nachgetragen.

Stand 05.11.2026. Grundlage ist Commit `c77fb46`, die Dateien der Seite sind auf `main` seitdem unverändert. Zeilenangaben beziehen sich auf diesen Stand und verschieben sich bei Änderungen, Funktions- und Klassennamen bleiben. Am 05.11.2026 wurde jede Aussage gegen den Code geprüft. Was zusätzlich im Browser gemessen wurde, ist in Abschnitt 15 vermerkt.

Die Seite erzählt das WAMOCON-Portfolio als Universum: ein Sternenfeld im Hintergrund, der Prüfkern „Built-in Governance“ als Sonne und die drei Geschäftsbereiche als Planeten. Alles ist mit Astro, CSS, SVG, zwei Canvas-Elementen und einem Vanilla-TypeScript-Block gebaut. Es gibt keine Bibliotheken, keine Bilder und keine Web-Fonts für die Grafik. Die einzige Datei, die die Grafik nachlädt, ist `public/data/globe.json`.

Entstehung: `16ca149` (04.11.2026, damals `/universum/` unter „Unser System“), `8aec7b8` (Auszeichnung heißt nur noch „KI-Innovator“), `cc6131d` (Umbenennung in Portfolio, eigener Hauptmenüpunkt), `22a59ef` (Sternenfeld dezenter).

## Grundsätze für jede Erweiterung

Diese Regeln sind aus der bestehenden Umsetzung abgeleitet. Sie sind der gemeinsame Nenner, an dem sich neue Szenen, Effekte und Funktionen messen. Wo der aktuelle Stand einen Grundsatz noch verletzt, steht das in Abschnitt 15.

1. Stack: Astro 7.3, statisch gebaut, ausgeliefert über Vercel. Die Seite ist eine einzige Section-Komponente (`UniversePage.astro`), die vier Seitendateien sind nur Hüllen.
2. Keine neuen npm-Pakete, keine externen Bibliotheken, Schriften, Bilder oder CDNs. Grafik entsteht aus CSS, Inline-SVG und Canvas 2D. Größere Daten liegen unter `public/data/` und werden erst geladen, wenn sie gebraucht werden.
3. Geometrie wird, wo möglich, zur Build-Zeit im Frontmatter berechnet (Ringsegmente, Prüfpunkte, Agenten, Siegel). Feste Formen wie der Routenpfad stehen dort als Konstanten. Der Browser rechnet nur, was von Scroll, Zeit oder Eingabe abhängt.
4. Interaktion ist Vanilla-TypeScript im `<script>` der Komponente. Jede Szene hat eine eigene `initX(root, …)`-Funktion, die bei Bedarf `reduce` und `frames` bekommt. Alles Scroll-Gebundene hängt sich in den gemeinsamen `frames[]`-Takt. Eigene `requestAnimationFrame`-Schleifen gibt es nur für zeitgesteuerte Animationen (Sternenfeld, Globus, Ring-Prüfung). Dauerschleifen laufen nur, solange ihre Szene sichtbar und der Tab aktiv ist.
5. Bei DOM- und SVG-Szenen setzt JavaScript Zustände: Klassen (`.is-in`, `.is-active`, `.is-lit`), `data-state`, ARIA-Attribute und CSS-Variablen (`--hp`, `--d`, `--route-p` …). Wie etwas aussieht und sich bewegt, regelt das CSS. Ausnahmen sind die zwei Canvas-Szenen, die JavaScript selbst zeichnet, und wenige direkt gesetzte Werte, etwa die Drehung der Agentengruppe, der Score-Text, `strokeDashoffset` der Route und die Deckkraft des Kometen.
6. Texte stehen in `src/data/universe.ts`, immer in allen vier Sprachen gleichzeitig. Ausnahme: Seitentitel und Description stehen in den vier Seitendateien. Zahlen kommen nur aus dem Portfolio-PDF. Schematische Darstellungen werden als solche gekennzeichnet.
7. Reduzierte Bewegung ist Pflicht: Jede Animation braucht einen ruhigen Endzustand, den man ohne Bewegung versteht. Die globale Regel in `global.css` reicht dafür nicht. Endlos-Animationen ohne `fill-mode` und Verzögerungen müssen im Reduced-Motion-Block der Komponente selbst abgefangen werden (Abschnitt 15).
8. Jede Grafik hat eine Textentsprechung auf der Seite. Dekoratives ist `aria-hidden`, Bedienbares sind echte Links und Buttons mit Fokuszustand.
9. Szenen, die auf schmalen Bildschirmen nicht funktionieren, bekommen eine einfachere Variante (Bühne aus, Route senkrecht, einspaltige Grids). Ring und Portal skalieren bisher nur mit. Die Breakpoints stehen in Abschnitt 13.
10. Volle Farben kommen aus den Tokens in `tokens.css`. Rote Flächen mit weißer Schrift nutzen `--color-accent-surface`, kleiner roter Text `--color-accent-text`. Transparente Varianten für Glow und Linien stehen als `rgba()`-Werte von `#f40e0e` und `#ff5252` direkt im CSS, das ist im Bestand der Normalfall. Canvas-Farben stehen als feste Werte im Script.
11. Grafik und Daten der Seite kommen vom eigenen Origin, damit die CSP in `vercel.json` nicht angepasst werden muss. Fremd ist nur Cloudflare Turnstile im Kontaktformular (Abschnitt 13).
12. Nach Textänderungen `npm run build` ausführen und `api/_knowledge.json` mitcommitten. Danach prüfen, ob der neue Text dort ankommt. Der Extraktor übernimmt nur Absätze über 40 Zeichen und keinen SVG-Text (Abschnitt 15).

## 1. Dateien

| Datei | Rolle |
|---|---|
| [src/pages/portfolio.astro](../src/pages/portfolio.astro), [en/portfolio.astro](../src/pages/en/portfolio.astro), [tr/portfoy.astro](../src/pages/tr/portfoy.astro), [kk/portfolio.astro](../src/pages/kk/portfolio.astro) | Dünne Hüllen: `BaseLayout` mit Titel, Description und Breadcrumb, darin `<UniversePage lang>`. Titel und Description stehen nur hier, nicht in `universe.ts` |
| [src/components/sections/UniversePage.astro](../src/components/sections/UniversePage.astro) | Die ganze Seite, 3292 Zeilen: Frontmatter 1–104 (Geometrie ab Zeile 45), Markup 106–541, `ContactBlock` 543, CSS 545–2443, Script 2445–3292 |
| [src/data/universe.ts](../src/data/universe.ts) | Texte in vier Sprachen (`universeCopy`), Ländergeodaten (`geo`), Kapazitätsanteile (`worldShares`) |
| [public/data/globe.json](../public/data/globe.json) | Kartendaten für den Globus, 140 KB, wird erst kurz vor Sichtbarkeit geladen |
| [src/i18n/config.ts](../src/i18n/config.ts) | Menüeintrag `key: 'portfolio'` direkt hinter Start |
| [vercel.json](../vercel.json) | 8 Redirects von den alten Universum-Slugs (`/universum/`, `/en/universe/`, `/tr/evren/`, `/kk/galam/`, je mit und ohne Schrägstrich) |
| [src/layouts/BaseLayout.astro](../src/layouts/BaseLayout.astro) | Globale Logik, die die Seite mitbenutzt: `[data-reveal]` (Einblenden) und `[data-count]` (Zahlen hochzählen) |
| [src/styles/global.css](../src/styles/global.css), [src/styles/tokens.css](../src/styles/tokens.css) | `.container`, `.eyebrow`, Tokens, globale Reduced-Motion-Regel |
| [src/components/sections/ContactBlock.astro](../src/components/sections/ContactBlock.astro) | Kontaktabschnitt unter der Seite, Anker `#kontakt`. Die Buttons „Live-Demo anfragen“ springen dorthin, das Formular öffnet sich dort als Modal (`data-contact-open`) |
| `public/llms.txt`, `api/_knowledge.json` | Seite ist für Chat und LLMs eingetragen. Nach Textänderungen `npm run build` und `_knowledge.json` mitcommitten. Der Chat kennt die Seite nur lückenhaft (Abschnitt 15) |

## 2. Datenmodell in `universe.ts`

- `WorldId = 'ki' | 'sap' | 'academy'`. Diese drei IDs ziehen sich durch Klassen (`orb--ki`), Anker (`#welt-ki`) und Daten.
- `worldShares = { ki: 50, sap: 30, academy: 20 }`. Daraus entstehen die Planetenlabels im Hero, der Kapazitätsbalken und die große Prozentzahl in jedem Panel.
- `geo`: sechs Länder mit `code`, `lat`, `lon`, `hub`. DE ist der Hub (Eschborn, 50,14 N / 8,57 O). Die Reihenfolge ist zugleich die Reihenfolge der Länder-Buttons und von `globe.countries` in allen vier Sprachen. Die Codes müssen exakt den Schlüsseln in `globe.json → hi` entsprechen (`USA`, nicht `US`).
- `universeCopy[lang]` mit den Blöcken `minimap`, `hero`, `badges`, `stats`, `core`, `worlds`, `route`, `globe`, `timeline`, `cta`. Die Datei endet mit `satisfies Record<Lang, unknown>`. Das erzwingt nur, dass alle vier Sprachen existieren, nicht dass sie gleich aufgebaut sind.
- Inhaltliche Regel aus CLAUDE.md: Alle Zahlen stammen aus dem WAMOCON-Portfolio-PDF, dort nichts erfinden. Die Governance-Demo ist als schematisch gekennzeichnet (`core.caption`), diese Kennzeichnung muss bleiben. Im Repo liegt ungetrackt der Ordner `Portfolio/` mit den Fassungen vom 21.10.2026 (nur PPTX) und 05.11.2026 (PDF und PPTX, de und en-GB). Die Seite entstand am 04.11. Ob sie zur Fassung vom 05.11. passt, ist nicht geprüft.

Kopplungen über Array-Positionen, die beim Ändern von Daten mitgezogen werden müssen:

| Daten | gekoppelt an |
|---|---|
| `minimap.items` (7) | `anchors` im Frontmatter (Zeile 26) und die Section-IDs |
| `stats.items` (4) | `constellations` (4 Linienzüge, Zeile 90) und das 4-Spalten-Grid `.u-stats` |
| `core.segments` (8) | Ringgeometrie 8 × 45°. Index 6 und 7 gelten fest als „geplant“ (`const planned = i >= 6`, Zeile 59) |
| `worlds.items[id].products` | Anzahl der Monde pro Planet und `data-chip`/`data-moon`-Paare |
| `route.steps` (3) | `routeNodes` (Zeile 99), der SVG-Pfad `routePath` und `nodeX` im Script (Zeile 2815) |
| `globe.countries` (6) | `geo` und `globe.json → hi` |
| `timeline.items` (6) | 6-Spalten-Grid `.u-time__list` |
| `core.facts` (4) | Index 3 („Mensch“) wird über `i === 3` rot (`.u-fact--human`, Zeile 243) |
| `badges` (3) | Das erste Badge bekommt über `.u-badge:first-child` das dunkle Siegel (Zeile 786) |
| „13 Prüfpunkte“ und „4 KI-Agenten“ in `core.lead`, `core.facts`, `core.ringLabel` | Geometrie fest kodiert: `length: 13` (Zeile 73), `[0, 90, 180, 270]` (Zeile 74), `13 * e` in `paint()` (Zeile 2696) |
| `core.ringLabel` | nennt die Aufteilung als Text („sechs aktiv, KI-Gesetz und Antikorruption geplant“), in allen vier Sprachen |
| `globe.title` | nennt „sechs Länder“ als Text, in allen vier Sprachen |
| JS-Breakpoints | `matchMedia('(max-width: 959px)')` in `initWorlds` (Zeile 2757) muss zur CSS-Regel bei 959 px (Zeile 2321) passen. `innerWidth < 700` im Globus (Zeile 2869, 2895) hat kein CSS-Gegenstück |

Fest im Markup statt in den Daten: die Gruppenzeile über dem Kapazitätsbalken mit den Namen „WAMOCON GmbH“ und „Academy“, den Breiten `--w:80` und `--w:20` und den Werten `pct(80)` und `pct(20)` (Zeile 351–352).

Prozentformat pro Sprache über `pct()` (Zeile 29): de und kk „50 %“, en „50%“, tr „%50“.

## 3. Aufbau der Seite

Alles liegt in `<div class="uni" data-uni>`. Die Section-IDs sind in allen Sprachen deutsch.

| Nr. | Anker | Szene | Technik | Interaktion |
|---|---|---|---|---|
| – | – | Sternenfeld | Canvas 2D, sticky hinter allen Szenen | Warp beim Scrollen, Maus-Parallaxe |
| – | – | Minimap | `nav.u-map`, fixed rechts | Sprunglinks, aktiver Abschnitt |
| 1 | `#start` | Hero mit Sonnensystem | CSS 3D, Headline in Einzelbuchstaben | Planeten verlinken auf `#welt-*`, Maus-Neigung, Warp-Ausblendung |
| 2 | `#sternbilder` | Kennzahlen als Sternbilder | SVG-Polylinien | Linien zeichnen sich, Zahlen zählen hoch |
| 3 | `#kern` | Governance-Ring | SVG, Geometrie zur Build-Zeit berechnet, JS-Zustandsautomat | „Prüfung starten“, „Als Mensch freigeben“ |
| 4 | `#welten` | Drei Welten | Kapazitätsbalken, sticky Bühne mit Planeten und Monden, Text-Panels | Scroll-gesteuerter Planetenwechsel, Chip-Hover färbt Mond |
| 5 | `#einstieg` | Flugroute | SVG-Pfad mit Komet | Scroll-gesteuert |
| 6 | `#reichweite` | Globus | Canvas 2D mit eigener Projektion | Ziehen, Länder-Buttons |
| 7 | `#zeitachse` | Zeitachse | CSS-Grid mit wachsender Linie | einmalige Einblendung |
| – | – | CTA-Portal | rotierende Conic-Gradient-Ringe | Buttons zu `#kontakt` und zur Systeme-Seite |

Danach folgt außerhalb von `.uni` der `ContactBlock`.

## 4. Rahmen, Ebenen, Sternenfeld

### Ebenen

- `.uni`: `position: relative; isolation: isolate; overflow: clip`. `isolation` macht `.uni` zum eigenen Stacking-Kontext. Dadurch bleibt `z-index: -1` des Himmels innerhalb von `.uni` und rutscht nicht hinter die Hintergründe übergeordneter Elemente.
- `.uni-sky` liegt absolut über die ganze Höhe von `.uni`. Darin ist `.uni-sky__sticky` mit `position: sticky; top: 0; height: 100vh`. So bleibt der Canvas im Viewport stehen, während man durch alle Szenen scrollt. Am Kontaktabschnitt endet der Himmel.
- Zwei Nebel-Divs (`.uni-sky__nebula--a` rot oben links, `--b` hellrot mit dunkelrotem Rand unten rechts) sind große Radial-Gradients. Sie wandern über `--sky-p` (Scrollfortschritt durch `.uni`, 0 bis 1) gegenläufig diagonal.

### Sternenfeld (`initSky`, Zeile 2454)

- Canvas 2D, Device-Pixel-Ratio auf 2 begrenzt. Sternzahl `min(950, Breite × Höhe / 1500)`, davon 93 % weiß und 7 % rot (`#ff5252`).
- Pseudo-3D: Jeder Stern hat `x, y ∈ [-1, 1]` und eine Tiefe `z` zwischen 0,06 und 1. Bildschirmposition `cx + (x / z) · w/2`. `z` sinkt pro Frame um `speed · dt`, die Sterne fliegen also auf den Betrachter zu. Wer den Rand verlässt oder `z ≤ 0,04` erreicht, wird bei `z = 1` neu erzeugt.
- `speed = 0,02 + warp · 0,95`. `warp` folgt geglättet der Scrollgeschwindigkeit (`v / 2600`, maximal 1,4).
- Ab `warp > 0,05` werden statt Punkten Striche gezeichnet, von der Position bei `z + warp · 0,07` bis zur aktuellen Position. Das ist der Warp-Effekt.
- Größe `depth · 1,9 + 0,3`, Alpha mit Funkeln über `sin` und Gesamtfaktor 0,62. Diese Dämpfung kam mit `22a59ef`. Jeder Stern bekommt beim Erzeugen einen Zufallswert `k`. Sterne mit `k < 0,3`, also rund 30 %, blenden beim schnellen Scrollen aus (`thin = warp / 0,35`).
- Maus-Parallaxe: Der Fluchtpunkt verschiebt sich geglättet um bis zu 36 px gegen die Mausrichtung.
- Sternschnuppe: die erste nach 2,5 s, danach alle 4–10 s, Linie mit Verlauf von Weiß nach Transparent-Rot.
- Die Schleife läuft nur, solange `.uni` sichtbar und der Tab aktiv ist. Bei reduzierter Bewegung wird ein statisches Bild gezeichnet und nur bei Größenänderung neu gezeichnet.

### Minimap (`initMap`, Zeile 3214)

Sieben Punkte, fixed am rechten Rand, erst ab 1280 px Breite. Ein IntersectionObserver mit `rootMargin: '-48% 0px -48% 0px'` beobachtet alle `[data-track]`-Sections. Damit zählt nur der Streifen in der Bildschirmmitte. Der aktive Link bekommt `aria-current="true"`. Sichtbar ist die Minimap, solange eine dieser Sections den Streifen kreuzt. Da der Hero selbst getrackt ist, gilt das ab dem Laden (im Browser bestätigt), ab dem CTA blendet sie aus. Die Labels erscheinen bei Hover oder Fokus.

## 5. Hero (`#start`)

### Headline

`splitLine()` im Frontmatter zerlegt `hero.l1` und `hero.l2` zur Build-Zeit in Wörter und Buchstaben. Jeder Buchstabe ist ein `span.u-ch` mit `--i` als laufendem Index über beide Zeilen. Die Animation `u-ch-in` (aus `translateY(0.55em) rotateX(-75deg)` und `blur(8px)`) startet um `i · 30 ms + 150 ms` versetzt. `.u-word` hat `white-space: nowrap`, damit nicht mitten im Wort umbrochen wird. Das `h1` trägt den vollständigen Text als `aria-label`, die beiden Zeilen-Spans mit den Buchstaben sind `aria-hidden`. Zeile 2 ist rot mit Glow.

Danach blenden Lead (0,9 s), Buttons (1,1 s) und Badges (ab 1,2 s, gestaffelt) ein.

### Siegel der Badges

`sealPath` wird im Frontmatter berechnet: ein Stern mit 18 Zacken (Radien 23 und 19,5). Der Rand dreht sich in 20 s, das Häkchen zeichnet sich über `stroke-dashoffset`. Das erste Badge („KI-Innovator“) ist dunkel mit weißem Rand, die anderen beiden rot.

### Sonnensystem

Verschachtelung, von außen nach innen:

```
nav.u-sys              perspective 1600px; scale/opacity hängen an --hp (Warp)
└ .u-sys__tilt         rotateX(--my · 7°) rotateY(--mx · -9°), Mausneigung
  └ .u-sys__plane      rotateX(66deg), Einflug u-plane-in (scale 0.3 → 1)
    ├ .u-belt          Asteroidengürtel: repeating-conic-gradient, per radial mask zum Ring beschnitten, dreht in 120 s
    ├ .u-orbit ×3      Kreisbahn (Rahmen); --size, --dur, --start
    │ └ .u-orbit__arm      rotateZ(start → start+360°) in --dur
    │   └ .u-orbit__body   sitzt bei left:100%; dreht gegenläufig und kippt um -66° zurück
    │     └ a.u-planet     href="#welt-{id}", Größe --sz; .orb-wrap + Label
    └ .u-sun           translate + rotateX(-66deg), steht dadurch aufrecht; Kern, gestrichelter Ring, Glow, SVG-Schild mit Häkchen
```

Die Gegenrotation in `u-counter` (`rotateZ(-start - t) rotateX(-66deg)`) hebt die Bahndrehung und die Kippung der Ebene auf. Deshalb zeigen Planeten und Labels immer aufrecht zum Betrachter, obwohl sie auf einer gekippten Ebene kreisen.

| Welt | `--size` (Bahn) | `--dur` | `--start` | `--sz` (Planet) |
|---|---|---|---|---|
| ki | 54 % | 26 s | 20° | 64 px |
| sap | 76 % | 40 s | 150° | 50 px |
| academy | 97 % | 58 s | 255° | 42 px |

Hover oder Fokus auf `.u-sys` hält alle Bahnen an (`animation-play-state: paused`), damit man die Planeten anklicken kann.

### Warp beim Scrollen (`initHero`, Zeile 2638)

Ein Frame-Callback setzt `--hp = clamp((innerHeight - hero.bottom) / (innerHeight · 0,8))`. Der Wert beginnt zu steigen, sobald die Unterkante des Heros über die Unterkante des Viewports steigt. Passt der Hero ganz in den Viewport, ist das der erste gescrollte Pixel. Bei 1440 × 900 ist der Hero 831 px hoch und endet bei 944 px, der Warp beginnt dort also nach 44 px (im Browser gemessen). Auf dem Handy beginnt er erst, wenn das Sonnensystem unter dem Text zu sehen war. Abhängig von `--hp`:

- Textspalte: wandert bis −70 px nach oben und blendet aus (`1 - hp · 1,4`).
- Sonnensystem: wächst auf das 2,5-Fache (`scale(1 + hp · 1,5)`) und blendet aus (`1 - hp · 1,25`). Man fliegt in das System hinein.
- Ab `hp > 0,3` bekommt der Hero `.is-warped`, das System nimmt dann keine Klicks mehr an.
- Hinweis und Scroll-Indikator blenden schneller aus.

Die Mausneigung (`--mx`, `--my` von −1 bis 1) gibt es nur bei feinem Zeiger (`(hover: hover) and (pointer: fine)`), bei `pointerleave` geht sie auf 0 zurück.

## 6. Planetenkörper `.orb`

Ein gemeinsames Bauteil für Hero, Bühne und mobile Panels:

- `.orb`: Radial-Gradient aus `--o-hi`, `--o-mid`, `--o-lo` und Schwarz, Glow über `box-shadow` mit `--o-glow` und `--o-glow-size`.
- `.orb::before`: schräge Streifen (`repeating-linear-gradient 96deg`) mit `mix-blend-mode: soft-light`. Sie wandern über `background-position` (`u-surface`, 18 s). Das wirkt wie eine rotierende Oberfläche.
- `.orb::after`: Schatten unten rechts und Glanzlicht oben links.
- Academy hat einen Ring aus zwei Elementen: `.orb__ring--back` vor dem Planeten im DOM und `.orb__ring--front` danach mit `clip-path: inset(50% 0 0 0)`. So läuft der Ring hinten hinter dem Planeten und vorne davor.

| Klasse | hell | mitte | dunkel | Glow |
|---|---|---|---|---|
| `.orb--ki` | `#ff9a8a` | `#e3120f` | `#4d0303` | rot |
| `.orb--sap` | `#ffffff` | `#9d9d9d` | `#262626` | weiß, schwach |
| `.orb--academy` | `#ffffff` | `#ff6b6b` | `#5c0a0a` | hellrot, mit Ring |

## 7. Kennzahlen (`#sternbilder`)

- Vier Karten. Jede hat oben ein SVG (`viewBox 0 0 220 84`) mit einer Polylinie aus 6 Punkten (Koordinaten fest in `constellations`) und 6 Kreisen, der vierte ist größer.
- Die Linie hat `pathLength="1"`, `stroke-dasharray: 1` und `stroke-dashoffset: 1 → 0`, sobald die Karte `.is-in` bekommt. Die Sterne blenden versetzt ein und funkeln (`u-twinkle`).
- Die Zahl hat `data-count`. Das Hochzählen macht der globale Zähler in `BaseLayout` (Abschnitt 13), nicht diese Komponente. Die letzte Zahl ist rot.

## 8. Governance-Ring (`#kern`)

### Geometrie zur Build-Zeit (Frontmatter, Zeile 45–87)

- SVG `viewBox="-215 -215 430 430"`, Ursprung in der Mitte.
- `pt(r, a)`: Polar in kartesisch, 0° oben, im Uhrzeigersinn.
- `arcPath(r0, r1, a0, a1)`: Pfad für ein Ringsegment.
- 8 Segmente zu 45°, zwischen zwei Segmenten 2,8° Lücke (je 1,4° Abstand zur Grenze), Radius 112–184. Labels sitzen bei r = 148 auf der Segmentmitte, mehrzeilig über `tspan` mit `dy = 12,5`, vertikal zentriert über `ly0`. Geplante Segmente (Index 6 und 7) haben eine gestrichelte Kontur und eine zusätzliche Zeile „(geplant)“ in Kursiv.
- 13 Punkte auf r = 95 stehen für die 13 Prüfpunkte.
- 4 KI-Agenten auf r = 184 bei 0°, 90°, 180° und 270°, jeweils mit einem Strahl von r = 106 zum Agenten.
- In der Mitte: Schild mit Häkchen (gleicher Pfad wie die Sonne im Hero), Score-Text, Label „Score“ und ein Stempel „Freigegeben“ (Rechteck 160 × 44, −14° gedreht).
- `radialGradient id="u-core-grad"` für die innere Scheibe. Die ID ist dokumentweit, die Komponente darf deshalb nur einmal pro Seite vorkommen.

### Zustandsautomat (`initCore`, Zeile 2665)

Zustand steht in `data-state` auf `.u-ring`: `idle → scan → ready → done`. Das CSS reagiert darauf:

- `scan`: Strahlen sichtbar, Agentenkreise rot gefüllt.
- `done`: beleuchtete Segmente bekommen eine rote Kontur, das Schild macht einen Pop, der Stempel erscheint (`scale 1,8 → 1`).

`paint(t)` mit `t ∈ [0, 1]` und Ease-out-Kurve `e = 1 - (1 - t)³`:

- Die Agentengruppe dreht um `a = 90° · e`. Jeder Agent überstreicht einen Quadranten, zusammen ergibt das 360°.
- Die Agenten-Labels werden um `-a` um ihren eigenen Mittelpunkt (`data-cx`, `data-cy`) zurückgedreht und bleiben dadurch lesbar.
- Ein Segment leuchtet (`.is-lit`), wenn `mid % 90 ≤ a`. Geplante Segmente sind über `data-planned` ausgeschlossen und leuchten nie.
- Punkte: `floor(13 · e)` leuchten. Score: `round(94 · e)`, Zielwert `TARGET = 94`. Dauer `DURATION = 4200` ms.

Bedienung: „Prüfung starten“ ruft `run()` auf, danach heißt der Button „Erneut prüfen“ (`data-restart`). „Als Mensch freigeben“ ist bis `ready` deaktiviert, setzt `done` und gibt den Fokus an den Start-Button zurück. Die Statuszeile hat `role="status"` und holt ihre Texte aus `data-idle`, `data-scan`, `data-ready` und `data-done`, die aus `universeCopy` gefüllt werden. Beim ersten Mal, wenn der Ring zu 50 % sichtbar ist, startet die Prüfung von selbst. Bei reduzierter Bewegung springt `paint(1)` sofort zum Ergebnis.

Links neben dem Ring stehen Text, Faktenliste (`dl.u-facts`, „Mensch“ in Rot) und der Live-Hinweis zu Damicon. Unter beiden Spalten folgt die Schutzleiste (`.u-protect`) mit fünf Pillen.

## 9. Drei Welten (`#welten`)

### Kapazitätsbalken (`.u-cap`)

- Oben die Gruppenzeile WAMOCON GmbH 80 % und Academy 20 % (fest im Markup).
- Darunter `ol.u-cap__bar`: drei Segmente mit `flex: var(--w) 1 0`, die Breiten verhalten sich also wie 50 : 30 : 20. Jedes Segment verlinkt auf `#welt-{id}`.
- Füllung über `::before` mit Verlauf in `--seg-c` (KI `#f40e0e`, SAP `#9d9d9d`, Academy `#ff5252`), `scaleX(0 → 1)` bei `.is-in`, gestaffelt um 0,25 s.
- Unter 760 px stehen die Segmente untereinander, die Füllung ist dann `w %` breit.

### Sticky Bühne und Panels

Zwei Spalten: links `.u-stage` (`position: sticky; top: header-height; height: 100vh - header`), rechts `.u-panels` mit drei Artikeln, jeder mindestens so hoch wie der Viewport abzüglich Header (`id="welt-ki"` usw.).

`initWorlds` (Zeile 2751) läuft pro Scroll-Frame:

1. Mittelpunkte der drei Panels bestimmen.
2. `p` ist die gebrochene Panel-Position der Bildschirmmitte zwischen diesen Mittelpunkten (0 bis 2).
3. Für jeden Planeten: `--d = i - p` und `--ad = min(|d|, 1,6)`.
4. `round(p)` bestimmt das aktive Panel (`.is-active`, volle Deckkraft, sonst 0,35) und den aktiven Punkt unter der Bühne.

CSS für jeden Planeten `.u-wp`:

```css
transform: translate(-50%, -50%)
           translate3d(calc(var(--d) * -16%), calc(var(--d) * 85%), 0)
           scale(calc(var(--k, 1) * (1 - var(--ad) * 0.5)));
opacity: max(0, calc(1 - var(--ad) * 0.78));
```

Der aktive Planet steht in der Mitte, die anderen rutschen diagonal nach oben oder unten weg, werden kleiner und blenden aus. `--k` gibt die Grundgröße vor (1, 0,84, 0,74), `--ps = min(42vh, 30vw, 400px)` die Planetengröße. Ohne JavaScript greifen die Inline-Startwerte `--d: i` und `--ad: min(i, 1.6)`, dann ist der erste Planet aktiv.

Monde: Pro Produkt der Welt gibt es einen Mond (KI 5, SAP 2, Academy 5). Sie liegen auf einer gestrichelten Bahn mit `rotateX(74deg) rotateY(-12deg)`, die sich in 28 s dreht. Jeder Mond sitzt bei `rotateZ(a) translateX(r) rotateZ(-a)`, sein Körper dreht über `u-moon-counter` gegenläufig und zeigt deshalb zum Betrachter. Hover auf einen Produkt-Chip (`data-chip=k`) gibt dem passenden Mond (`data-moon=k`) die Klasse `.is-hot` mit rotem Glow.

Die große Prozentzahl im Panel ist Verlaufstext (`background-clip: text`), bei KI und Academy rot, und zählt über `data-count` hoch.

Unter 960 px wird die Bühne ausgeblendet. Jedes Panel zeigt dann seinen eigenen kleinen Planeten (`.u-panel__orb`), alle Panels haben volle Deckkraft und keine Mindesthöhe. `initWorlds` prüft das per `matchMedia` in jedem Frame und rechnet dann nichts.

## 10. Flugroute (`#einstieg`)

- SVG `viewBox="0 0 1000 160"`, `preserveAspectRatio="none"`, 160 px hoch, absolut über der Kartenreihe.
- Zwei Pfade mit demselben `d`: die Basis gepunktet (`pathLength="100"`) und die rote Füllung mit `pathLength="1"`, deren `stroke-dashoffset` auf `1 - p` gesetzt wird.
- Der Pfad besteht aus kubischen Béziers mit Knoten bei x = 166,7 / 500 / 833,3 und y = 60 / 100 / 60. Dieselben Werte stehen in `routeNodes` als Prozent und Höhenfaktor (16,67 % / 0,375 usw.) für die HTML-Knoten und als `nodeX` im Script. Wer den Pfad ändert, muss alle drei Stellen anpassen.
- `initRoute` (Zeile 2806) sucht per Binärsuche (24 Schritte über `getPointAtLength`) den Pfadanteil an jedem Knoten-x. Ein Schritt wird `.is-on`, sobald `p ≥ at[i] - 0,02`. Dann leuchtet der Knoten rot und die Karte rückt hoch.
- `p = clamp((vh · 0,85 - track.top) / max(vh · 0,55, track.height · 0,75))` hängt direkt am Scrollen.
- Komet: Position aus `getPointAtLength(len · p)`, umgerechnet mit `sx = Breite / 1000` und `sy = Höhe / 160` (wegen `preserveAspectRatio="none"` getrennt pro Achse). Den Winkel liefert ein Punkt 6 Einheiten dahinter, der Schweif (`::after`) dreht sich über `--ang` mit.
- Unter 760 px: SVG und Komet sind weg, stattdessen eine senkrechte Linie (`.u-route__line`) mit `scaleY(var(--route-p))`, Karten einspaltig, Knoten links.
- Bei reduzierter Bewegung ist `p = 1` fest.

## 11. Globus (`#reichweite`)

### Daten

- Der Canvas trägt `data-geo` (JSON von `geo` aus `universe.ts`) und `data-map="/data/globe.json"`.
- Bis die Karte geladen ist, zeigt der Globus ein gleichmäßiges Fibonacci-Gitter über die ganze Kugel (1400 Punkte, unter 700 px Breite 750).
- Laden: Ein IntersectionObserver mit `rootMargin: '900px 0px'` startet den `fetch` einmalig, bevor der Globus sichtbar wird. Bei einem Fehler bleibt das Gitter stehen, eine Fehlermeldung gibt es nicht.
- `globe.json`: `{ source, arcs, hi, dots }`. Alle Koordinaten sind flache Arrays `[lon·10, lat·10, …]` (ganze Zahlen, Grad × 10).
  - `arcs`: 594 Linienstücke der Länderumrisse mit zusammen 8228 Punkten, also Küsten und Landesgrenzen.
  - `hi`: Umrisse der sechs Projektländer (DE 1 Ring, CH 1, KZ 1, USA 10, TR 2, IN 1).
  - `dots`: 6929 Punkte nur auf Landflächen (im leeren Südpazifik liegt keiner). Unter 700 px Fensterbreite wird jeder zweite verwendet.
  - Quelle: Natural Earth 1:110m über world-atlas 2.0.2, gemeinfrei. Das Umrechnungsskript liegt nicht im Repo, nur das Ergebnis. Für ein neues Land muss die Datei neu erzeugt werden.

### Projektion

- `toV(lat, lon)` ergibt den Einheitsvektor `[cos φ · sin λ, sin φ, cos φ · cos λ]`.
- `project()` dreht um die y-Achse (`lon0`) und kippt dann um die x-Achse (`tilt`). Orthografisch, `z > 0` ist die Vorderseite. `R = size · 0,4`.
- Startwerte: `lon0 = 20°`, `tilt = 0,42` rad.

### Zeichenreihenfolge pro Frame

1. Randlicht: Radial-Gradient in Rot um die Silhouette.
2. Punkte: Vorderseite heller und größer mit `z`. Von der Rückseite wird nur jeder dritte gezeichnet, mit Alpha 0,05 (vor dem Laden der Karte 0,07).
3. Projektländer füllen (Rot, 26 %, ausgewählt 55 %). Gefüllt wird nur, wenn alle Punkte eines Umrisses vorne liegen (`z > 0,02`), denn ein halb verdecktes Polygon lässt sich nicht korrekt füllen.
4. Alle Küsten- und Landesgrenzen als ein Pfad in Weiß bei 30 %. Auf der Rückseite wird der Stift abgesetzt.
5. Umrisse der Projektländer in `#ff5252`, das ausgewählte Land weiß und dicker.
6. Bögen vom Hub zu jedem Land: Großkreis per Slerp in 56 Schritten, in der Mitte angehoben um `1 + sin(πt) · (0,06 + ω · 0,16)`. Lange Bögen steigen also höher. Ein Bogenpunkt ist sichtbar bei `z ≥ 0` oder außerhalb der Kugelscheibe (`r2 > 1`). Auf jedem Bogen läuft ein weißer Puls (`t = (now / 2400 + i · 0,21) % 1`).
7. Marker mit pulsierendem Ring, dazu der Ländercode als Label. CH steht direkt neben DE und bekommt sein Label deshalb unten links.

Die Schrift im Canvas ist `system-ui`. Die Canvas-Farben stehen als feste Werte im Script und hängen nicht an den CSS-Tokens.

### Bedienung

- Automatische Drehung mit 0,16 rad/s, außer beim Ziehen, in einer Pause oder bei reduzierter Bewegung.
- Ziehen per Pointer Events mit `setPointerCapture`: `lon0 -= dx · 0,008`, `tilt += dy · 0,006`, begrenzt auf −0,3 bis 1,1. Danach 3 s Pause.
- `touch-action: pan-y`: Auf dem Handy scrollt senkrechtes Wischen weiter die Seite, waagrechtes dreht den Globus.
- Länder-Buttons: Ziel `lon = Land.lon`, `tilt = Land.lat · 0,85`. Der Globus dreht weich auf dem kürzesten Weg dorthin (`atan2`-Differenz, Faktor `dt · 3,5`). Bis 6 s nach dem Klick dreht er sich nicht von selbst weiter, `aria-pressed` wird umgeschaltet.
- Die Schleife läuft nur, solange der Canvas sichtbar und der Tab aktiv ist. Bei reduzierter Bewegung läuft sie trotzdem jeden Frame weiter, obwohl sich dann nur beim Ziehen etwas ändert.

## 12. Zeitachse und CTA

- Zeitachse: 6-Spalten-Grid. Die Linie (`::before`) wächst über `scaleX(0 → 1)` in 2,2 s, die Einträge folgen versetzt um 0,28 s. Das letzte Jahr ist rot. Unter 1100 px drei Spalten mit einer eigenen roten Oberkante pro Eintrag, unter 760 px eine Spalte. Darunter eine Faktenzeile (Gründungen, CEO).
- CTA-Portal: zwei Ringe aus `conic-gradient`, per radialer Maske auf einen dünnen Kreis beschnitten. Sie drehen sich in 7 s und 11 s gegenläufig, dazu ein roter Schein von unten.

## 13. Gemeinsame Mechanik

### Ein Frame-Takt für alles Scroll-Gebundene

Am Ende des Scripts (Zeile 3264) sammeln `initSky`, `initHero`, `initWorlds` und `initRoute` ihre Callbacks in `frames[]`. Je ein Listener auf `scroll` und `resize` ruft `schedule()` auf. Das führt pro Animation-Frame alle Callbacks genau einmal aus, zusätzlich einmal beim Start. Ohne Scrollen gibt es keine Aktualisierung: Ändert sich das Layout, etwa durch aufklappenden Inhalt, ziehen `--hp`, `--d` und `--route-p` erst beim nächsten Scroll nach. `initWorlds` und `initRoute` rechnen nicht, solange ihre Szene weit außerhalb des Viewports liegt. Nur das Sternenfeld, der Globus und die laufende Ring-Prüfung haben eine eigene `requestAnimationFrame`-Schleife.

Wo JavaScript CSS-Variablen setzt. CSS, das sie liest, wirkt nur innerhalb dieser Elemente:

| Variable | gesetzt auf | Zeile |
|---|---|---|
| `--sky-p` | `.uni` | 2630 |
| `--hp`, `--mx`, `--my` | `#start` (Hero) | 2647, 2653 f. |
| `--d`, `--ad` | jedes `.u-wp` (Planet auf der Bühne) | 2781 f. |
| `--route-p` | `#einstieg` | 2832 |
| `--cx`, `--cy`, `--ang` | `.u-route__comet` | 2839–2842 |

### Zwei verschiedene Einblende-Systeme

| Attribut | Wer setzt die Klasse | Klasse | Wirkung |
|---|---|---|---|
| `data-reveal` (optional `data-reveal-delay` in ms) | global in `BaseLayout` | `.is-visible` | Ein- und Hochgleiten mit Blur, CSS in `global.css`. Ein Failsafe blendet 1,2 s nach dem Start alle noch unsichtbaren Elemente ein, auch weit unten liegende (im Browser bestätigt). Sichtbar ist der Effekt deshalb praktisch nur im ersten Bildschirm |
| `data-in` | lokal in `initInView` (Threshold 0,2, einmalig) | `.is-in` | startet die gezeichneten Effekte dieser Seite: Sternbildlinien, Kapazitätsbalken, Zeitachse. Das Portal trägt `data-in` ebenfalls, hat aber kein `.is-in`-Styling |

Ein Effekt, der beim Hineinscrollen sichtbar starten soll, braucht `data-in` und ein Styling auf `.is-in`. `data-reveal` reicht nur für Inhalte im ersten Bildschirm.

### Zahlen hochzählen

`[data-count]` wird global in `BaseLayout` animiert: Regex `^(\D*)(\d[\d.,]*)(.*)$`, Präfix und Suffix bleiben stehen („%50“, „50+“), Dauer 1400 ms, Start bei 40 % Sichtbarkeit, nicht bei reduzierter Bewegung.

### Reduzierte Bewegung

- Global (`global.css`): Alle Animationen und Transitions laufen in 0,001 ms ab, Animationen nur einmal. `[data-reveal]` ist sofort sichtbar.
- In der Komponente: Hero-Buchstaben, Eyebrow, Lead, Buttons und Badges werden direkt in den Endzustand gesetzt, die Häkchen sind gezeichnet.
- Im Script: kein Warp, keine Mausneigung, Sternenfeld statisch, Ring springt ans Ende, Route voll gezeichnet, Globus ohne Selbstdrehung und Pulse, `data-in` sofort gesetzt.
- Nicht abgedeckt: Die globale Regel kürzt nur Dauer und Wiederholungen, keine Verzögerungen (`animation-delay`, `transition-delay`). Zeitachsen-Einträge erscheinen deshalb auch bei reduzierter Bewegung bis zu 1,7 s versetzt. Endlos-Animationen ohne `fill-mode` verlieren nach dem einen kurzen Durchlauf ihre Transformation, das zerlegt die Hero-Bahnen. Die Bühne der Welten folgt weiter dem Scrollen (Abschnitt 15).

### Breakpoints

| max-width | Änderung |
|---|---|
| 1279 px | Minimap ausgeblendet |
| 1100 px | Zeitachse dreispaltig |
| 959 px | Hero, Kern, Globus und Welten einspaltig, Bühne aus, Planet im Panel, Sternbilder zweispaltig |
| 759 px | Route senkrecht, Kapazitätsbalken senkrecht, Zeitachse einspaltig |
| 520 px | Sternbilder, Länder und Fakten einspaltig, Planetenlabels umbrechend, Hero-Buttons volle Breite |

### Farben und Tokens

Die Komponente nutzt die Tokens aus `tokens.css`: `--color-accent` `#f40e0e` für Linien, Glow und große rote Schrift, `--color-accent-surface` `#d40000` für Flächen mit weißer Schrift (Buttons, Schild, Siegel), `--color-accent-text` `#ff5252` für kleinen roten Text, dazu `--color-text-muted`, `--border-subtle`, `--radius-*`, `--fs-*`, `--section-gap` und `--header-height`. Die Header-Höhe misst `Header.astro` zur Laufzeit und schreibt sie auf `:root` (gemessen: Desktop 113 px, Handy 65 px). Die 112 px in `tokens.css` sind nur der Rückfallwert.

Ein großer Teil der Farben steht als feste Werte in der Komponente. Im CSS stehen 63 Hex- und 92 `rgba()`-Werte gegenüber 63 Token-Verweisen, meist transparente Varianten von `#f40e0e` und `#ff5252` für Glow und Linien, dazu Planetenverläufe und Grautöne. Die Canvas-Farben stehen im Script.

Die Eyebrows der Seite (`span.eyebrow`) holen ihre Farbe aus der globalen Klasse `.eyebrow` mit `--color-accent`. Das ist kleiner Text mit 4,45 : 1 auf `#101010`, knapp unter AA (Abschnitt 15).

### Barrierefreiheit

- Rein dekorative Teile sind `aria-hidden` (Himmel, Bühne, Konstellationen, Route-SVG, Komet).
- Ring und Globus sind `role="img"` mit beschreibendem `aria-label` aus `universeCopy`. Die Inhalte der Grafiken stehen fast alle auch als Text auf der Seite (Fakten, Länderliste, Panels). Ausnahme sind die Namen der acht Prüfbereiche, die nur im Ring-SVG stehen (Abschnitt 15).
- Planeten im Hero sind Links, Länder sind Buttons mit `aria-pressed`, die Ring-Steuerung sind Buttons, der Status ist eine Live-Region.
- Inaktive Welt-Panels haben auf dem Desktop 35 % Deckkraft. `:focus-within` setzt sie beim Tabben auf 100 %.

### CSP und Auslieferung

Grafik und Daten der Seite kommen vom eigenen Origin. `globe.json` wird per `fetch` geladen und fällt unter `connect-src 'self'`. Fremd ist nur Cloudflare Turnstile: Für das Kontaktformular lädt `BaseLayout` `https://challenges.cloudflare.com/turnstile/v0/api.js` nach, sobald das Formular Fokus oder Maus bekommt und ein Site-Key gesetzt ist (BaseLayout.astro:506, 540–543). Die CSP erlaubt diese Quelle. Die vielen Inline-Styles (`style="--i:3"`) sind erlaubt, weil `style-src` in `vercel.json` `'self' 'unsafe-inline'` enthält. CLAUDE.md nennt für `style-src` nur `'self'`, das ist ungenau. Das Script liefert Astro als eigene Datei unter `/_astro/` aus (im Build geprüft).

## 14. Typische Änderungen

| Vorhaben | Was anzufassen ist |
|---|---|
| Text oder Zahl ändern | `universe.ts` in allen vier Sprachen, Seitentitel und Description in den vier Seitendateien. Zahlen nur aus dem Portfolio-PDF. Danach `npm run build`, `api/_knowledge.json` mitcommitten und prüfen, ob der Text dort ankommt |
| Kapazitätsanteile ändern | `worldShares`, `worlds.lead` in vier Sprachen und die festen Werte im Markup (`--w:80`/`--w:20`, `pct(80)`/`pct(20)`) |
| Geplanten Prüfbereich aktiv schalten | `i >= 6` in der `ring`-Berechnung (Zeile 59) anpassen, Segmentreihenfolge und `core.ringLabel` in allen vier Sprachen |
| Prüfbereich hinzufügen | Ringgeometrie ist auf 8 × 45° ausgelegt. Winkel in `ring`, Labelradius, die Leuchtbedingung `mid % 90 ≤ a` in `paint()` und `core.ringLabel` in vier Sprachen |
| Anzahl Prüfpunkte oder Agenten ändern | Texte in `core.lead`, `core.facts` und `core.ringLabel` sowie die festen Werte `length: 13`, `[0, 90, 180, 270]` und `13 * e` |
| Produkt in einer Welt ergänzen | `products` in vier Sprachen, Mond und Chip entstehen automatisch |
| Kennzahl ergänzen | `stats.items` in vier Sprachen, neuen Linienzug in `constellations`, Spalten von `.u-stats` |
| Routenschritt ergänzen | `route.steps`, `routePath`, `routeNodes`, `nodeX`, Spalten von `.u-route__steps` |
| Land ergänzen | `geo`, `globe.countries`, `globe.title` („sechs Ländern“) und `canvasLabel` in vier Sprachen (gleiche Reihenfolge), Umriss in `globe.json → hi` (Datei neu erzeugen), Labelplatz prüfen, falls es nah an einem anderen Land liegt |
| Neue Szene | `<section class="u-sec" id="…" data-track>` (Abstände, Scroll-Offset, Minimap). Die ID in `anchors` (Zeile 26) und ein Label in `minimap.items` an derselben Position, in vier Sprachen. Eigene `initX`-Funktion, scroll-gebundene Teile über `frames[]`, Effekte beim Hineinscrollen über `data-in`, Endzustand für reduzierte Bewegung, Variante für schmale Bildschirme |
| Planetenbahnen ändern | `orbits` im Frontmatter (Zeile 39) |
| Sternenfeld stärker oder schwächer | `initSky`: Faktor 0,62 im Alpha, Größe `depth · 1,9 + 0,3`, Sternzahl `/ 1500`, Warp-Empfindlichkeit `/ 2600` |

## 15. Bekannte Schwachstellen des Stands

Alle Punkte sind am Code belegt. Was zusätzlich im Browser gemessen wurde (Chromium headless über gstack, `astro dev`, 05.11.2026), ist vermerkt. Behoben ist bisher keiner.

1. Hero bei reduzierter Bewegung (im Browser bestätigt): Die globale Regel lässt `u-orbit` und `u-counter` einmal in 0,001 ms ablaufen. Beide Animationen haben keinen `fill-mode`, danach steht der Transform von Bahnarm und Planetenkörper auf `none`. Gemessen bei 1440 × 900: Alle drei Planeten stehen auf einer Linie rechts der Sonne (170, 240 und 306 px Abstand, keine Höhenabweichung) und sind flachgedrückt (KI 70 × 26 px statt rund). Die Labels überlappen sich, das Academy-Label ragt über den rechten Fensterrand. Dasselbe Muster betrifft `u-moon-counter` auf der Bühne. Möglicher Fix im Reduced-Motion-Block der Komponente, noch nicht getestet: `.u-orbit__arm { animation: none; transform: rotateZ(var(--start)); }`, `.u-orbit__body { animation: none; transform: rotateZ(calc(var(--start) * -1)) rotateX(-66deg); }` und für die Monde `.u-moon__b { animation: none; transform: translate(-50%, -50%) rotateY(12deg) rotateX(-74deg); }`.
2. Namen der Prüfbereiche: Sie stehen nur im Ring-SVG mit `role="img"`, im HTML genau einmal. Kinder eines `img` sind laut ARIA präsentational, Screenreader lesen in der Regel nur das `aria-label`. Das nennt die sechs aktiven Bereiche nicht beim Namen. Grundsatz 8 ist hier nicht erfüllt.
3. Eyebrow-Kontrast: Die Eyebrows nutzen die globale Klasse `.eyebrow` mit `--color-accent` (`#f40e0e`). Das ergibt 4,45 : 1 auf `#101010`, knapp unter AA mit 4,5 : 1. `tokens.css` sieht für diesen Fall `--color-accent-text` vor. Das betrifft die ganze Website, nicht nur diese Seite.
4. Chat-Wissen lückenhaft (in `api/_knowledge.json` geprüft): `scripts/build-knowledge.mjs` liest nur `<main>`, entfernt SVGs und übernimmt nur Absätze über 40 Zeichen. Die Headline kommt als Einzelbuchstaben an („K I p r ü f t . D e r M e n s c h …“). Kurze Listenpunkte fehlen, also Produkt-Chips, Schutz-Pillen und Länder ohne Zusatz, ebenso die Prüfbereiche.
5. Ring auf schmalen Bildschirmen (im Browser gemessen): Der Ring skaliert nur mit. Bei 360 px Fensterbreite ist er 328 px breit, die Bereichsnamen sind dann 8,4 px groß, die Agenten-Labels 9,2 px. Das Portal hat ebenfalls keine eigene Variante.
6. `data-map` ist doppelt vergeben (im Browser bestätigt): an der Minimap (`nav.u-map data-map`) und am Globus-Canvas (`data-map="/data/globe.json"`). `initMap` sucht mit `root.querySelector('[data-map]')` und trifft nur deshalb die Minimap, weil sie im DOM zuerst steht. Wird die Minimap verschoben oder entfernt, greift der Code den Canvas. Sauberer wäre ein eigener Name, etwa `data-map-src` am Canvas.
7. `data-reveal` blendet nach 1,2 s alles ein (im Browser bestätigt): Ohne Scrollen hatten nach 19 s alle 16 Elemente weit unterhalb des Bildschirms `.is-visible`. Das ist globales Verhalten aus `BaseLayout`.
8. Weitere Lücken bei reduzierter Bewegung: Verzögerungen bleiben (Zeitachse bis 1,7 s versetzt). `initWorlds` bekommt `reduce` nicht, die Planeten auf der Bühne folgen weiter dem Scrollen, obwohl der Kopfkommentar „no scroll-linked parallax“ verspricht. Die Globus-Schleife läuft jeden Frame weiter, obwohl sich ohne Ziehen nichts ändert.
9. Das Portal trägt `data-in`, im CSS gibt es aber kein `.u-portal.is-in`. Das Attribut hat keine Wirkung.
10. Kein Typcheck: `satisfies Record<Lang, unknown>` prüft den Aufbau der Sprachen nicht, und `npm run build` (`astro build` plus Wissensdatei) prüft keine Typen. Ein falscher Schlüssel in einer Sprache fällt nur im Editor auf. Im Build wird ein fehlender Text leer gerendert, eine fehlende Liste lässt ihn abbrechen.
11. Das Erzeugungsskript für `globe.json` fehlt, auch in der Git-Historie (siehe Abschnitt 11).

## 16. Laufende Arbeit an der Seite

Stand 05.11.2026:

- `fix/portfolio-chat-suche` (Commit `f8d6ba2`, auf origin, nicht in `main`): Der Chat findet die Seite unter dem Namen „Portfolio“. Geändert sind `api/chat.js`, `public/llms.txt` und `public/llms-full.txt`, nicht die Seite selbst.
- `feature/portfolio-pdf-anfrage`: Popup „Portfolio als PDF“ (`PortfolioPdfRequest.astro`), Versand über `api/lead.js` mit den PDFs aus `api/_portfolio/`. Noch nicht committet und nicht Teil dieser Basis. Nach dem Merge diese Doku nachziehen: Zeilenangaben, die Buttons in Hero und CTA (Abschnitte 3, 5 und 12) und die neue Komponente.
