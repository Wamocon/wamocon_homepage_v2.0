# Stimmen zu den Unternehmenssystemen — Leitfaden zur Erhebung

Dieses Dokument gehört zu `src/data/systeme.ts` → `voices`. Dort stehen sieben
**Entwürfe**. Sie zeigen Form und Ton, sie sind keine echten Aussagen, und sie
erscheinen nicht auf der Website: die Sektion rendert ausschließlich Einträge
mit `approved: true`. Solange keiner freigegeben ist, existiert der Abschnitt
für Besucher nicht.

---

## Warum diese Form

Auf der Seite steht kein einziger Wert, den ein Besucher nicht selbst prüfen
kann. Ein erfundenes oder geschöntes Zitat würde genau diese Beweisführung
zerstören — und es wäre nach § 5 UWG eine irreführende geschäftliche Handlung.
Deshalb: nur echte Sätze von echten Personen, schriftlich freigegeben.

Sterne und Punktzahlen fehlen bewusst. Im B2B kauft niemand ein System, weil es
4,5 Sterne hat. Gekauft wird, wenn jemand im eigenen Beruf einen Dienstag
beschreibt, der leichter geworden ist. Darum die Form:

> **Rolle** — ein Satz *vorher*, ein Satz *heute*.

Zwei Sätze, nicht fünf. Kurze Aussagen wirken echter, weil echte Menschen so
antworten; lange Zitate klingen nach Marketingabteilung.

---

## Wen fragen

### 1Çatı ERP · Ataberk Estate

| Rolle | Worum es in der Aussage gehen soll |
|---|---|
| Geschäftsführung | Überblick bekommen, ohne jemanden zu fragen |
| Vertriebsleitung | Ein Bestand statt mehrerer Listen |
| Buchhaltung | Offene Posten, ohne Exporte abzugleichen |
| Objektbetreuung / Service | Einsatz mit Nachweis statt Zuruf |
| Eigentümer oder Mieter (Portalnutzer) | Selbstauskunft statt Anruf im Büro |

### DiTeLe · WAMOCON Academy

| Rolle | Worum es in der Aussage gehen soll |
|---|---|
| Trainerin oder Trainer | Einreichungen an einem Ort statt in Mails |
| Teilnehmerin oder Teilnehmer | An laufenden Anwendungen testen statt an Folien |

Fünf bis sieben Stimmen reichen. Mehr wirkt nicht stärker, sondern gesammelt.

---

## Die Fragen

Stell sie mündlich und schreib mit. Wer einen Fragebogen ausfüllt, formuliert
Marketingdeutsch; wer erzählt, formuliert brauchbar.

**Zum Vorher — die wichtigste Frage zuerst:**

1. Was war die letzte Sache, die Sie vor der Einführung regelmäßig genervt hat?
2. Wie lange hat *X* damals gedauert, und wie oft kam es vor?
3. Was haben Sie getan, wenn die Person, die es wusste, nicht da war?
4. Woran haben Sie gemerkt, dass eine Zahl nicht stimmt?

**Zum Heute:**

5. Was machen Sie heute nicht mehr, was Sie vorher jede Woche gemacht haben?
6. Was war die erste Sache, bei der Sie gedacht haben „ah, so geht das jetzt"?
7. Wenn das System morgen weg wäre — was würde Ihnen zuerst fehlen?

**Zur Ehrlichkeit — bitte nicht weglassen:**

8. Was war an der Umstellung unangenehm?
9. Was fehlt Ihnen heute noch?

Frage 8 und 9 kommen nicht auf die Website, aber sie machen die Antworten auf
5 bis 7 belastbar — und sie sagen uns, was wir als Nächstes bauen sollten.

---

## Woran man eine brauchbare Antwort erkennt

**Brauchbar**, weil konkret und nachprüfbar:

> „Vor jedem Meeting habe ich die Listen der Kollegen zusammengeführt. Das
> mache ich seit einem Jahr nicht mehr."

**Nicht brauchbar**, weil es alles und nichts sagt:

> „Das System hat unsere Prozesse optimiert und die Effizienz gesteigert."

Wenn eine Antwort in der zweiten Form kommt, frag nach: *„Woran genau haben Sie
das gemerkt?"* Die Antwort darauf ist das Zitat.

Wörtlich mitschreiben, auch Halbsätze. Wir kürzen später, aber wir erfinden
nichts dazu.

---

## Freigabe

Ohne schriftliche Freigabe kein Zitat. Eine E-Mail genügt. Vorschlag:

> Sehr geehrte/r …,
>
> vielen Dank für das Gespräch. Wir würden gern die folgende Aussage auf
> wamocon.com veröffentlichen, zusammen mit Ihrem Namen, Ihrer Funktion und
> Ihrem Unternehmen:
>
> „…"
>
> Bitte antworten Sie kurz, ob wir das so verwenden dürfen. Änderungen am
> Wortlaut sind ausdrücklich willkommen — es soll klingen wie Sie, nicht wie
> wir. Sie können die Freigabe jederzeit formlos widerrufen; wir nehmen die
> Aussage dann von der Seite.
>
> Soll ein Foto dazu erscheinen, senden Sie es bitte mit; ohne Foto
> veröffentlichen wir nur Name und Funktion.

Bei Portalnutzern (Eigentümer, Mieter) genügt Vorname und Rolle, wenn die
Person das möchte — „Eigentümerin, Alanya" ist als Angabe zulässig und wirkt
in dieser Rolle sogar natürlicher als ein voller Name.

---

## Eintragen

In `src/data/systeme.ts`, im Array `voices`:

```ts
{
  approved: true,                    // erst setzen, wenn die Freigabe vorliegt
  system: '1cati',                   // oder 'ditele'
  role:  { de: 'Vertriebsleitung', en: '…', tr: '…', kk: '…' },
  name:  'Vorname Nachname',         // weglassen, wenn nur die Rolle genannt wird
  org:   'Ataberk Estate, Alanya',
  before:{ de: '…', en: '…', tr: '…', kk: '…' },
  after: { de: '…', en: '…', tr: '…', kk: '…' },
}
```

Die Seite erscheint in vier Sprachen. Zitate werden übersetzt, wie jeder andere
Text auch — die Freigabe bezieht sich auf die Aussage, nicht auf den deutschen
Wortlaut. Wenn eine Person in ihrer eigenen Sprache antwortet (bei Ataberk
Estate naheliegend auf Türkisch), ist **diese** Fassung das Original, und die
deutsche ist die Übersetzung. Das gehört so vermerkt.

Sobald ein Eintrag `approved: true` trägt, erscheint der Abschnitt automatisch
zwischen den beiden Beispielsystemen und dem Schnittstellen-Abschnitt.
