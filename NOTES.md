# Reflexion: AGENTS.md im Frontend-Projekt

### 1. Welche Information gehört eher in die `README.md` und welche in die `AGENTS.md`?

- **`README.md`:** Enthält allgemeine Projektbeschreibungen, Geschäftspritzipe, Installationsanweisungen für Menschen, Abhängigkeiten und Setup-Anleitungen.
- **`AGENTS.md`:** Dient als technisches Regelwerk ausschließlich für KI-Assistenten. Hier liegen konkrete Vorgaben zur Ordnerstruktur (z. B. Atomic Design), Code-Konventionen (z. B. TypeScript-Typisierung), Styling-Methoden (CSS Modules) und Sicherheitsregeln für Änderungen.

### 2. Welche Regel in der `AGENTS.md` ist besonders wichtig, um unerwünschte Änderungen zu verhindern?

- Die **Sicherheitsregel gegen "Blind Changes"** (Abschnitt 3: _Erst analysieren, dann vorschlagen_). Sie zwingt die KI, bestehenden Code vorab zu prüfen, geplante Änderungen kurz zusammenzufassen und auf die Bestätigung des Entwicklers zu warten. Zudem verhindert das Verbot von eigenmächtigen Löschungen unkontrollierten Datenverlust.

### 3. Welche Start-, Test- oder Build-Befehle waren leicht zu finden, und welche mussten abgeleitet werden?

- Die standardmäßigen Vite-Befehle (`npm run dev`, `npm run build`, `npm run lint`) waren direkt aus der Standardstruktur ableitbar und funktionierten sofort, sobald die fehlende `index.html`-Datei im Projektstamm erstellt wurde.

### 4. Hat Codex die Regeln korrekt zusammengefasst und angewendet?

- Ja, absolut. Codex hat die Regeln präzise interpretiert. Er hat nicht nur die Komponenten am richtigen Ort erstellt (`src/components/atoms/Button/`), sondern auch die Trennung der Sprachen (Code auf Englisch, UI auf Deutsch) und die Scoped CSS Modules fehlerfrei umgesetzt.

### 5. Welche Regel würde nach dem praktischen Test noch präziser formuliert werden?

- Die Pfadvorgaben könnten noch expliziter gemacht werden. Obwohl Codex instinktiv einen Unterordner pro Komponente angelegt hat (z. B. `/Button/Button.tsx` statt direkt in `/atoms/`), sollte diese bewährte Struktur explizit in den Richtlinien der `AGENTS.md` verankert werden, um zukünftige Abweichungen zu vermeiden.

### 6. Wie kann eine gute `AGENTS.md` bei zukünftigen Frontend-Aufgaben helfen?

- Sie spart wertvolle Zeit und verhindert "Code-Wildwuchs". Die KI muss nicht bei jedem neuen Feature manuell angewiesen werden, welche Ordnerstruktur zu nutzen ist oder wie die CSS-Konventionen aussehen. Sie sorgt für Konsistenz und fehlerfreien Code im gesamten Projekt.

### 20.07.26

## Aufgabe 1: Aktueller Stand

Die Anwendung zeigt eine zentrierte deutsche Login-Karte auf einem
hellgrauen Hintergrund. Sie enthält die Überschrift „Anmelden“, eine
kurze Beschreibung, ein E-Mail-Feld, ein Passwortfeld und den Button
„Einloggen“.

Relevante Dateien:

- `src/main.tsx` – Einstiegspunkt der React-Anwendung
- `src/App.tsx` – grundlegende Seitenstruktur
- `src/App.module.css` – Layout der Seite
- `src/components/organisms/LoginForm/LoginForm.tsx` – Struktur und
  Verhalten des Login-Formulars
- Die jeweiligen `*.module.css`-Dateien – Styling der Komponenten
- `index.html` – HTML-Grundgerüst und Seitentitel

Das Projekt enthält bereits eine React-Interaktion. Das Login-Formular
verwendet `useState`, um die Werte der E-Mail- und Passwortfelder zu
speichern. Beim Absenden wird das Standardverhalten mit
`preventDefault()` verhindert. Es gibt derzeit jedoch keine
Validierung, API-Anfrage oder sichtbare Rückmeldung.

## Aufgabe 2: Ausgewählte Änderung

Ich möchte dem Login-Formular eine Funktion zum Anzeigen und Verbergen
des Passworts hinzufügen. Das Passwort soll standardmäßig verborgen
bleiben. Der Benutzer soll „Passwort anzeigen“ aktivieren können, um
das eingegebene Passwort sichtbar zu machen, und die Option erneut
deaktivieren können, um es wieder zu verbergen.

## Aufgabe 3: Akzeptanzkriterien

1. Das eingegebene Passwort ist standardmäßig verborgen.
2. In der Nähe des Passwortfeldes wird eine eindeutig beschriftete
   Option „Passwort anzeigen“ angezeigt.
3. Nach dem Aktivieren der Option wird das eingegebene Passwort sichtbar.
4. Nach dem erneuten Deaktivieren wird das Passwort wieder verborgen.
5. Das Formular bleibt sowohl auf Desktop- als auch auf
   Smartphone-Bildschirmbreiten gut lesbar und bedienbar.

## Aufgabe 4: Überprüfter Implementierungsplan

Codex hat folgenden kurzen Implementierungsplan erstellt:

1. In `LoginForm` wird ein lokaler boolescher State für die Sichtbarkeit
   des Passworts hinzugefügt. Das Passwort bleibt standardmäßig verborgen.
2. Der Typ des Passwortfeldes wird abhängig vom State zwischen
   `password` und `text` gewechselt.
3. Neben dem Passwortfeld wird ein Text-Button mit der Beschriftung
   „Passwort anzeigen“ beziehungsweise „Passwort ausblenden“ ergänzt.
4. Der Button erhält `type="button"`, damit er das Login-Formular nicht
   absendet. Der aktuelle Zustand wird zusätzlich über `aria-pressed`
   zugänglich gemacht.
5. In der zugehörigen CSS-Module-Datei werden nur die notwendigen Styles
   für eine lesbare Darstellung auf Desktop- und Smartphone-Breiten
   ergänzt.
6. Abschließend wird das Projekt mit `npm run build` überprüft.

Voraussichtlich betroffene Dateien:

- `src/components/organisms/LoginForm/LoginForm.tsx`
- `src/components/organisms/LoginForm/LoginForm.module.css`

Der Plan wurde überprüft und auf die notwendige Änderung begrenzt.
Änderungen an Atoms, Molecules oder anderen Projektdateien sind nicht
erforderlich. Zusätzliche Funktionen, Icons, Animationen und
Refactorings sind nicht vorgesehen.

## Aufgabe 5: Implementierung

Die genehmigte Änderung wurde entsprechend dem überprüften Plan
implementiert.

In `LoginForm.tsx` wurde ein lokaler boolescher State für die
Passwortsichtbarkeit ergänzt. Abhängig von diesem State wechselt der
Typ des Passwortfeldes zwischen `password` und `text`.

Zusätzlich wurde ein Button mit `type="button"` und `aria-pressed`
hinzugefügt. Seine Beschriftung wechselt zwischen „Passwort anzeigen“
und „Passwort ausblenden“.

In `LoginForm.module.css` wurden nur die notwendigen Styles für die
Positionierung und den sichtbaren Tastaturfokus ergänzt.

Der Build wurde mit `npm run build` erfolgreich ausgeführt.

## Aufgabe 6: Diff- und Browserprüfung

Im Diff wurden folgende geänderte Dateien überprüft:

- `src/components/organisms/LoginForm/LoginForm.tsx`
- `src/components/organisms/LoginForm/LoginForm.module.css`
- `NOTES.md`

Die Änderungen in den beiden Programmdateien waren für die ausgewählte
Funktion notwendig. Es wurden keine zusätzlichen Komponenten,
Refactorings oder fachfremden Funktionen hinzugefügt.

Die Anwendung wurde im Browser auf einer Desktop-Breite sowie auf
Smartphone-Breiten von 375 px und 320 px getestet.

Dabei wurde überprüft, dass:

- das Passwort standardmäßig verborgen ist;
- „Passwort anzeigen“ das Passwort sichtbar macht;
- „Passwort ausblenden“ das Passwort erneut verbirgt;
- der Sichtbarkeits-Button das Formular nicht absendet;
- der Button mit der Tastatur erreichbar ist und einen sichtbaren
  Fokuszustand besitzt;
- das Formular auf Desktop- und Smartphone-Breiten lesbar und
  bedienbar bleibt.

Alle Akzeptanzkriterien wurden erfüllt.

## Reflexion

### Welche kleine Änderung wurde ausgewählt?

Ich habe dem Login-Formular eine Funktion zum Anzeigen und Verbergen
des eingegebenen Passworts hinzugefügt.

### Welche Akzeptanzkriterien waren beim Testen besonders hilfreich?

Besonders hilfreich waren die Kriterien zum ursprünglichen verborgenen
Zustand des Passworts und zum wiederholten Umschalten der Sichtbarkeit.
Dadurch konnte die Interaktion eindeutig getestet werden.

### War der erste Plan von Codex ausreichend begrenzt?

Der erste Plan war kurz und auf die notwendige Funktion begrenzt. Ich
habe ihn um die ausdrückliche Verwendung von `type="button"` ergänzt,
damit der neue Button das Formular nicht absendet.

### Welche Dateien wurden geändert und waren die Änderungen notwendig?

Folgende Dateien wurden geändert:

- `src/components/organisms/LoginForm/LoginForm.tsx`
- `src/components/organisms/LoginForm/LoginForm.module.css`
- `NOTES.md`

Die Änderungen an den beiden Programmdateien waren für die neue
Funktion notwendig. `NOTES.md` wurde für die Dokumentation der
Aufgaben und Ergebnisse verwendet.

### Gab es unnötige zusätzliche Änderungen im Diff?

Nein. Während des Builds erzeugte Änderungen im `dist`-Verzeichnis
wurden entfernt. Im finalen Diff waren keine unnötigen Änderungen
enthalten.

### Was wurde im Browser überprüft?

Ich habe geprüft, ob das Passwort standardmäßig verborgen ist und
durch den Button angezeigt und wieder verborgen werden kann. Außerdem
habe ich überprüft, dass der Button das Formular nicht absendet und
mit der Tastatur bedienbar ist.

Die Darstellung wurde auf einer Desktop-Breite sowie auf
Smartphone-Breiten von 375 px und 320 px kontrolliert. Das Formular
blieb lesbar und bedienbar.

### Welches Feedback wurde Codex gegeben?

Ich habe Codex gebeten, im Plan ausdrücklich `type="button"` für den
Sichtbarkeits-Button vorzusehen. Dadurch wurde verhindert, dass dieser
Button das Formular absendet. Nach der Implementierung waren keine
weiteren Korrekturen notwendig.

### Was würde ich beim nächsten Mal genauer formulieren?

Beim nächsten Mal würde ich bereits in den Akzeptanzkriterien genauer
festlegen, welches HTML-Element verwendet werden soll, wie sich seine
Beschriftung verändert und welche Anforderungen an die
Tastaturbedienung gelten.
