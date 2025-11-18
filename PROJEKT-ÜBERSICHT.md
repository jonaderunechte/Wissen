# 📂 Projekt-Übersicht: Alle Dateien erklärt

## 🎯 Schnellübersicht

|Datei                     |Zweck                     |Bearbeiten?         |
|--------------------------|--------------------------|--------------------|
|`index.html`              |Hauptseite der Website    |⚠️ Nur wenn nötig    |
|`style.css`               |Design und Layout         |✅ Ja (Farben, Fonts)|
|`script.js`               |Such- und Anzeigelogik    |⚠️ Nur wenn nötig    |
|`README.md`               |Vollständige Dokumentation|ℹ️ Zum Lesen         |
|`QUICKSTART.md`           |Schnellanleitung          |ℹ️ Zum Lesen         |
|`ARTIKEL-VORLAGE.md`      |Template für Artikel      |✅ Als Vorlage nutzen|
|`JSON-STRUKTUR.md`        |Index-Datei Erklärung     |ℹ️ Zum Lesen         |
|`.gitignore`              |Ausgeschlossene Dateien   |⚠️ Selten nötig      |
|`data/articles-index.json`|Artikel-Verzeichnis       |✅✅ **Oft!**         |
|`articles/*.md`           |Deine Artikel             |✅✅ **Oft!**         |
|`images/*`                |Bilder für Artikel        |✅ Ja                |

-----

## 📄 Hauptdateien (Root-Verzeichnis)

### `index.html`

**Was ist das?**
Die Hauptseite deiner Website. Hier wird die HTML-Struktur definiert.

**Inhalt:**

- Header mit Logo und Titel
- Suchfeld
- Container für Inhalte

**Wann bearbeiten?**

- Titel ändern (`<h1>SchülerWiki</h1>`)
- Untertitel anpassen
- Logo hinzufügen

**Vorsicht:** Strukturänderungen können die Website kaputtmachen!

-----

### `style.css`

**Was ist das?**
Alle Design-Regeln: Farben, Schriften, Abstände, Layout.

**Häufige Anpassungen:**

```css
/* Hauptfarbe ändern (Akzent-Blau) */
color: #60a5fa;  /* Ändere den Hex-Code */

/* Hintergrundfarbe ändern */
background-color: #1a1a1a;  /* Dunkelgrau */

/* Schriftart ändern */
font-family: 'Arial', sans-serif;

/* Website-Titel-Farbe */
header h1 {
    color: #60a5fa;  /* Ändere dies */
}
```

**Farb-Empfehlungen:**

- `#60a5fa` - Blau (Standard)
- `#10b981` - Grün
- `#f59e0b` - Orange
- `#ec4899` - Pink
- `#8b5cf6` - Lila

**Tipp:** Nutze [coolors.co](https://coolors.co) für Farbpaletten!

-----

### `script.js`

**Was ist das?**
Das “Gehirn” der Website. Hier läuft die gesamte Logik:

- Artikel-Index laden
- Suchfunktion
- Markdown → HTML Konvertierung
- Navigation zwischen Ansichten

**Wichtige Funktionen:**

1. `loadArticlesIndex()` - Lädt articles-index.json
1. `performSearch()` - Führt die Suche durch
1. `renderMarkdown()` - Konvertiert Markdown zu HTML
1. `showArticle()` - Zeigt einen Artikel an

**Wann bearbeiten?**
Nur wenn du JavaScript kannst und neue Features hinzufügen willst.

**Mögliche Erweiterungen:**

- Dark/Light Mode Toggle
- Druckfunktion
- Share-Buttons
- Lesezeichen-System

-----

## 📚 Dokumentations-Dateien

### `README.md`

**Vollständige Anleitung** mit allem, was du wissen musst:

- Installation
- Artikel erstellen
- Markdown-Syntax
- Fehlerbehebung
- Best Practices

**Zielgruppe:** Alle Nutzer

-----

### `QUICKSTART.md`

**Schnellstart in 5 Minuten** für den ersten Einsatz.

**Zielgruppe:** Absolute Anfänger

-----

### `ARTIKEL-VORLAGE.md`

**Template** zum Kopieren für neue Artikel.

**So nutzen:**

1. Datei kopieren
1. Neuen Namen geben (z.B. `mein-artikel.md`)
1. Platzhalter ausfüllen
1. In `articles/` Ordner speichern

-----

### `JSON-STRUKTUR.md`

**Detaillierte Erklärung** der `articles-index.json` Struktur.

**Wann lesen?**

- Bevor du den ersten Artikel hinzufügst
- Bei JSON-Fehlern
- Um Tags richtig zu vergeben

-----

### `PROJEKT-UEBERSICHT.md`

**Diese Datei!** Übersicht aller Dateien und ihrer Funktion.

-----

## 📁 Ordner-Struktur

### `data/`

**Zweck:** Daten-Dateien, die von JavaScript geladen werden

#### `data/articles-index.json`

**Die wichtigste Datei!**

```json
[
  {
    "id": "eindeutige-id",
    "title": "Titel",
    "filename": "dateiname.md",
    "description": "Beschreibung",
    "tags": ["Tag1", "Tag2"]
  }
]
```

**Jeder neue Artikel muss hier registriert werden!**

**Häufige Bearbeitung:** ✅✅ Ja, sehr oft!

**Siehe auch:** `JSON-STRUKTUR.md` für Details

-----

### `articles/`

**Zweck:** Alle deine Artikel in Markdown-Format

**Dateiformat:** `.md` (Markdown)

**Namenskonvention:**

- Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Keine Sonderzeichen
- Beispiele: `quantenphysik.md`, `erste-hilfe.md`

**Beispiel-Artikel enthalten:**

- `quantenphysik.md`
- `photosynthese.md`
- `schwarze-loecher.md`
- `klimawandel.md`

**Häufige Bearbeitung:** ✅✅ Ja, ständig!

**Tipp:** Nutze `ARTIKEL-VORLAGE.md` als Ausgangspunkt!

-----

### `images/`

**Zweck:** Alle Bilder für deine Artikel

**Unterstützte Formate:**

- `.jpg` / `.jpeg` (Fotos)
- `.png` (Grafiken mit Transparenz)
- `.gif` (Animationen)
- `.webp` (Modern, klein)
- `.svg` (Vektorgrafiken)

**Namenskonvention:**

- Beschreibend: `quantum-atom.jpg` statt `bild1.jpg`
- Kleinbuchstaben
- Bindestriche statt Leerzeichen

**Dateigröße:**

- Ideal: < 500 KB pro Bild
- Maximum: < 2 MB
- Tipp: Nutze [tinypng.com](https://tinypng.com) zum Komprimieren

**Einbinden im Artikel:**

```markdown
![Beschreibung](images/dateiname.jpg)
```

-----

## 🔧 Konfigurationsdateien

### `.gitignore`

**Was ist das?**
Liste von Dateien, die NICHT zu GitHub hochgeladen werden sollen.

**Typischer Inhalt:**

- System-Dateien (`.DS_Store`, `Thumbs.db`)
- Editor-Dateien (`.vscode/`, `.idea/`)
- Entwürfe (`drafts/`)
- Temporäre Dateien (`*.tmp`)

**Wann bearbeiten?**
Selten. Nur wenn du zusätzliche Dateien ausschließen willst.

-----

## 🎨 Visuelle Struktur

```
┌─────────────────────────────────────┐
│         index.html                   │  ← Website-Struktur
│         (HTML Gerüst)                │
└──────────┬──────────────────────────┘
           │
           ├─► style.css               ← Design & Farben
           │   (Wie sieht es aus?)
           │
           └─► script.js                ← Logik & Funktionen
               (Wie funktioniert es?)
                     │
                     ├─► data/articles-index.json
                     │   (Welche Artikel gibt es?)
                     │
                     └─► articles/*.md
                         (Artikel-Inhalte)
                               │
                               └─► images/*
                                   (Bilder für Artikel)
```

-----

## 🔄 Typischer Workflow

### Neuen Artikel hinzufügen

```
1. Artikel schreiben
   ├─► articles/mein-artikel.md erstellen
   └─► ARTIKEL-VORLAGE.md als Grundlage nutzen

2. Bilder hinzufügen (optional)
   └─► Bilder in images/ hochladen

3. Artikel registrieren
   └─► Eintrag in data/articles-index.json hinzufügen

4. Hochladen zu GitHub
   ├─► articles/mein-artikel.md
   ├─► images/neue-bilder.jpg (falls vorhanden)
   └─► data/articles-index.json (aktualisiert)

5. Testen
   └─► Website aufrufen und Artikel suchen
```

-----

## 📊 Datei-Prioritäten

### ⭐⭐⭐ Sehr häufig bearbeitet

- `data/articles-index.json` - Bei jedem neuen Artikel
- `articles/*.md` - Ständig neue Artikel

### ⭐⭐ Gelegentlich bearbeitet

- `images/*` - Neue Bilder hochladen
- `style.css` - Design-Anpassungen

### ⭐ Selten bearbeitet

- `index.html` - Nur für strukturelle Änderungen
- `script.js` - Nur für neue Features
- `.gitignore` - Nur bei Bedarf

### 📖 Nur zum Lesen

- `README.md`
- `QUICKSTART.md`
- `JSON-STRUKTUR.md`
- `PROJEKT-UEBERSICHT.md`
- `ARTIKEL-VORLAGE.md` (wird kopiert, nicht bearbeitet)

-----

## 🔍 Datei finden

**“Wo ändere ich…?”**

|Was ändern?        |Welche Datei?                                           |
|-------------------|--------------------------------------------------------|
|Farben             |`style.css`                                             |
|Website-Titel      |`index.html`                                            |
|Neuer Artikel      |`articles/neuer-artikel.md` + `data/articles-index.json`|
|Bild hinzufügen    |`images/` Ordner                                        |
|Suchfunktion ändern|`script.js`                                             |
|Design-Layout      |`style.css`                                             |

-----

## 💾 Backup-Strategie

### Was regelmäßig sichern?

**Essentiell:**

- `data/articles-index.json` (vor großen Änderungen)
- `articles/*.md` (deine Arbeit!)

**Optional:**

- `images/*` (falls du eigene Bilder erstellst)

**Nicht nötig:**

- `index.html`, `style.css`, `script.js` (auf GitHub gesichert)
- Dokumentations-Dateien

### Wie sichern?

1. **Methode 1: Git Commits**
   
   ```bash
   git commit -m "10 neue Artikel hinzugefügt"
   git push
   ```
1. **Methode 2: Lokale Kopie**
- Lade wichtige Dateien regelmäßig herunter
- Speichere in einem Backup-Ordner
1. **Methode 3: Export**
- Gehe zu deinem Repository
- Code → Download ZIP
- Speichere ZIP-Datei sicher

-----

## 🆘 Problem-Diagnose

**Website lädt nicht?**
→ Prüfe `index.html`, `style.css`, `script.js`

**Artikel wird nicht gefunden?**
→ Prüfe `data/articles-index.json`

**Artikel wird nicht korrekt angezeigt?**
→ Prüfe `articles/dein-artikel.md` (Markdown-Syntax)

**Bild wird nicht angezeigt?**
→ Prüfe `images/` Ordner und Pfad im Markdown

**Suche funktioniert nicht?**
→ Prüfe `script.js` und Browser-Konsole (F12)

**Design sieht komisch aus?**
→ Prüfe `style.css` und Browser-Cache löschen

-----

## ✅ Maintenance-Checkliste

**Wöchentlich:**

- [ ] Neue Artikel hinzufügen
- [ ] Artikel-Index aktualisieren
- [ ] Website testen

**Monatlich:**

- [ ] Backup erstellen
- [ ] Alte Artikel überarbeiten
- [ ] Tote Links prüfen

**Bei Bedarf:**

- [ ] Design anpassen
- [ ] Neue Features implementieren
- [ ] Performance optimieren

-----

Viel Erfolg mit deiner Wissensdatenbank! 🚀

Bei Fragen: Siehe `README.md` für Details oder erstelle ein GitHub Issue.
