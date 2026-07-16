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
