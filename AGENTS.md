# AGENTS.md — Richtlinien und Regeln für KI-Assistenten (Codex/Cursor)

Dieses Dokument ist das verbindliche Regelwerk für alle KI-gesteuerten Code-Generierungen, Refactorings und Datei-Operationen in diesem Projekt. Jede Änderung muss strikt diesen Regeln entsprechen.

## 1. Projekt-Befehle (Vite + React + TS)

Nutze ausschließlich diese Befehle für die Arbeit im Terminal:

- **Entwicklungsserver starten:** `npm run dev` (Standardmäßig unter `http://localhost:5173` erreichbar)
- **Projekt bauen (Build):** `npm run build` (Führt die TypeScript-Prüfung und den Vite-Build aus)
- **Linter ausführen:** `npm run lint`
- **Tests ausführen (falls vorhanden):** `npm run test`

---

## 2. Architektur & Coding-Regeln

Wir nutzen **React (TypeScript)** mit dem **Atomic Design Pattern** und **molekularem CSS** (CSS Modules / Scoped CSS).

### A. Atomic Design Struktur

Neue Komponenten müssen zwingend in der passenden Ebene unter `src/components/` erstellt werden. Erstelle niemals alle Komponenten an einem Ort!

1.  **Atoms (Atome):** Kleinstmögliche Bausteine, die nicht weiter teilbar sind (z. B. `Button`, `Input`, `Icon`, `Typography`). Sie haben keine eigene Business-Logik.
2.  **Molecules (Moleküle):** Einfache Gruppen von Atomen, die zusammen eine Funktion erfüllen (z. B. `FormField` [Label + Input + Error], `SearchBar` [Input + Button]).
3.  **Organisms (Organismen):** Komplexe UI-Komponenten, die aus Molekülen und/oder Atomen bestehen (z. B. `Header`, `Footer`, `LoginForm`). Können mit dem State/Store interagieren.
4.  **Templates (Vorlagen):** Seiten-Layouts ohne konkreten Inhalt, die bestimmen, wo Organismen platziert werden.

### B. CSS & Styling (Molekulares CSS)

- **Kein globales CSS** für komponenten-spezifisches Styling.
- Nutze **CSS Modules** (z. B. `Button.module.css`) direkt im Ordner der jeweiligen Komponente oder scoped Styles.
- **Keine Inline-Styles** (`style={{...}}`), es sei denn, es handelt sich um dynamisch berechnete Werte (z. B. Positionen in Animationen).

### C. TypeScript & Code-Qualität

- **Strikte Typisierung:** Vermeide `any` um jeden Preis. Nutze präzise Interfaces und Types.
- **Komponenten-Definition:** Nutze funktionale Komponenten (`const Component: React.FC = () => ...`).
- **Sprache im Code:** Alle Variablen, Funktionen, Komponenten und Kommentare müssen auf **Englisch** geschrieben werden. Die Benutzeroberfläche (Texte für den Endnutzer) ist auf **Deutsch**.

---

## 3. Sicherheitsregeln gegen unkontrollierte Änderungen (Blind Changes)

Um Chaos im Projekt zu verhindern, halte dich strikt an folgende Sicherheitsbarrieren:

1.  **Erst analysieren, dann vorschlagen:** Vor jeder größeren Änderung musst du den bestehenden Code analysieren und mir eine kurze Zusammenfassung (2-3 Sätze) deines Plans präsentieren. Warte auf meine Bestätigung.
2.  **Keine blinden Löschungen:** Lösche, benenne oder strukturiere bestehende Dateien niemals eigenmächtig um, es sei denn, es wurde explizit beauftragt.
3.  **Schrittweise vorgehen:** Implementiere komplexe Features in kleinen, testbaren Schritten, statt riesige Codeblöcke auf einmal zu ändern.
