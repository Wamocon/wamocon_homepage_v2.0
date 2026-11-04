# WAMOCON Homepage v2.0

Firmenwebsite der WAMOCON GmbH (www.wamocon.com), gebaut mit Astro 7.3 als statische Seite. Gehostet auf Vercel, dazu zwei Serverless-Funktionen in `api/`.

## Befehle

- `npm run dev`: Dev-Server auf http://localhost:4321. Läuft oft schon, dann nicht zusätzlich starten.
- `npm run build`: baut nach `dist/` und erzeugt danach `api/_knowledge.json` für den Chat.
- `npm run dev:api`: dient `dist/` aus und führt `api/*` lokal aus. Nötig, um Chat und Formulare zu testen, weil `astro dev` die API nicht ausführt. Vorher `npm run build` ausführen.
- Es gibt weder Tests noch einen Linter.

## Sprachen und Routen

- Vier Sprachen: `de` liegt im Wurzelpfad, dazu `/en/`, `/tr/` und `/kk/`. Jede Seite gibt es einmal pro Sprache als eigene Datei mit eigenem Slug, z. B. `/systeme/`, `/en/systems/`, `/tr/sistemler/` und `/kk/juieler/`.
- Navigation, Footer-Links und gemeinsame UI-Texte stehen in `src/i18n/config.ts`. Die Sprachumschaltung und die hreflang-Tags greifen nur für Routen, die dort in `nav`, `legalNav` oder `extraRoutes` eingetragen sind.
- Eine neue Seite braucht vier Dateien in `src/pages/`, `en/`, `tr/` und `kk/` sowie einen Eintrag in `config.ts`.

## Aufbau

- `src/pages/**.astro`: dünne Hüllen. Sie setzen `lang`, Titel und Beschreibung und rendern genau eine Section-Komponente, z. B. `systeme.astro` → `AppsPage`.
- `src/components/sections/*Page.astro`: der Seiteninhalt. Viele Seiten haben ihre Texte direkt in der Komponente stehen, als Objekt `const c = { de, en, tr, kk }`.
- `src/data/*.ts`: Inhalte der größeren Seiten:
  - `apps.ts`: Kacheln auf `/systeme/`, nach Kategorien gruppiert. `url` mit `/...` öffnet im selben Tab, eine volle URL in einem neuen.
  - `home.ts` und `faq.ts`: Startseite.
  - `systeme.ts`: `/unternehmenssysteme/`.
  - `webdesign.ts`: `/webdesign/`.
  - `universe.ts`: `/universum/`. Alle Zahlen stammen aus WAMOCON_Portfolio.pdf, dort nichts erfinden.
- `src/layouts/BaseLayout.astro`: das einzige Layout. Props: `title`, `description`, `lang`, `image`, `noindex`, `schema` (JSON-LD) und `breadcrumbs`.
- `src/components/layout/`: Header, Footer und CookieBanner. `src/components/ui/`: Button, AppCard, ChatWidget, PageHero usw.
- `src/styles/tokens.css`: Design-Tokens (Farben, Schrift, Abstände). Die Seite hat einen dunklen Hintergrund (`#101010`) und das CI-Rot `#f40e0e`. Gefüllte Flächen mit weißer Schrift nutzen `--color-accent-surface`, kleiner roter Text `--color-accent-text`, damit die Kontraste WCAG AA erfüllen.

## Eigenständige HTML-Onepager

Diese Seiten werden unverändert als fertige HTML-Dateien ausgeliefert. Die `.astro`-Datei liest die Datei aus `src/data/` und gibt sie als `Response` zurück, ohne BaseLayout, Header oder Footer:

- `/lfa-kfbm/` → `src/data/lfa-kfbm.html`. Der Film liegt in `public/videos/kfbm-spot.mp4`, weil die CSP keine `blob:`-Medien erlaubt.
- `/damicon/` → `src/data/damicon.html` (4,9 MB). Der Rücklink zu WAMOCON folgt der Sprache über `data-wmc`.
- `/berber-siparis/` und `/berber-veri-koruma/`: nicht in der Sitemap.

Zum Aktualisieren eine neue Datei liefern lassen und sie ersetzen. Eigene Ergänzungen wie den Rücklink danach wieder einbauen.

## Serverless-Funktionen (`api/`)

- `chat.js`: Website-Assistent. Er antwortet nur auf Basis von `api/_knowledge.json`. Diese Datei wird aus dem gebauten `dist/` erzeugt und ist committet. Nach Textänderungen `npm run build` ausführen und `_knowledge.json` mitcommitten.
- `lead.js`: Formularversand über Microsoft Graph an info@wamocon.com. Die Zugangsdaten stehen in `.env` (nicht im Repo). Hilfsskripte liegen in `scripts/` (`graph-auth.mjs`, `test-email.mjs`, `preview-emails.mjs`).

## Sicherheit und Auslieferung

- `vercel.json` enthält eine strenge CSP. Externe Schriften, Skripte und Medien sind nur in Ausnahmefällen erlaubt (Cloudflare Turnstile, YouTube nocookie, GitHub-Medien). `style-src`, `font-src` und `img-src` erlauben nur `'self'` (font und img zusätzlich `data:`). Lokal unter `astro dev` greift die CSP nicht. Was lokal läuft, kann deshalb online trotzdem blockiert werden.
- Dort stehen außerdem 8 Redirects, z. B. vom alten `/apps/` auf `/systeme/`.
- Das Deployment läuft nur manuell: GitHub Actions → „Deploy to Vercel“ → production oder preview (`.github/workflows/deploy.yml`). Ein Merge in `main` geht also nicht automatisch live.
- `secret-scan.yml` prüft auf eingecheckte Secrets. Keine Schlüssel ins Repo.

## Git

- Gearbeitet wird auf `leon-dev`, PRs gehen gegen `main`.
- Commit-Nachrichten schreiben wir auf Deutsch im Format `feat: …`, `fix: …` oder `chore: …`.

## Offene Punkte (Stand 04.11.2026)

- Damicon (`/damicon/`) ist über PR #18 in `main`, aber noch nicht online-tauglich: Google Fonts und der Filmton (`blob:`) scheitern an der CSP. Lösung wie bei KfBM: Audio nach `public/` auslagern und die Schriften lokal einbinden.
- `src/data/webdesign.html` wird von keiner Seite eingebunden.
- `docs/` enthält Arbeitsnotizen zum Portfolio-Abgleich und einen Leitfaden für die Stimmen zu den Systemen (`systeme.ts` → `voices` sind nur Entwürfe und werden nicht angezeigt).
