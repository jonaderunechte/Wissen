# 📚 SchülerWiki - Wissensdatenbank

Eine moderne, Wikipedia-ähnliche Wissenswebsite, die über GitHub Pages gehostet wird. Die Website bietet eine Volltext-Suchfunktion und ermöglicht es Schülern, Wissen in Form von Markdown-Artikeln zu teilen.

## 🌟 Features

- ✅ **Volltext-Suche**: Durchsucht Titel, Tags und kompletten Artikelinhalt
- ✅ **Markdown-Unterstützung**: Einfaches Schreiben von Artikeln mit Text, Bildern und Videos
- ✅ **Responsives Design**: Funktioniert auf Desktop, Tablet und Smartphone
- ✅ **Dunkles Theme**: Moderne, augenfreundliche Oberfläche
- ✅ **Keine Datenbank nötig**: Alles läuft statisch über GitHub Pages
- ✅ **Tag-System**: Artikel können mit Schlagwörtern kategorisiert werden

-----

## 📁 Projektstruktur

```
schueler-wiki/
├── index.html                 # Haupt-HTML-Datei
├── style.css                  # Design und Styling
├── script.js                  # JavaScript-Logik
├── README.md                  # Diese Datei
├── data/
│   └── articles-index.json    # Verzeichnis aller Artikel mit Metadaten
├── articles/
│   ├── quantenphysik.md       # Beispiel-Artikel 1
│   ├── photosynthese.md       # Beispiel-Artikel 2
│   ├── schwarze-loecher.md    # Beispiel-Artikel 3
│   └── ...                    # Weitere Artikel
└── images/
    ├── quantum-atom.jpg       # Bilder für Artikel
    ├── photosynthesis.jpg
    └── ...                    # Weitere Bilder
```

-----

## 🚀 Installation & Einrichtung

### Schritt 1: Repository auf GitHub erstellen

1. Gehe auf [GitHub](https://github.com) und logge dich ein
1. Klicke auf das **+** Symbol oben rechts → **New repository**
1. Wähle einen Namen (z.B. `schueler-wiki`)
1. Setze das Repository auf **Public**
1. Klicke auf **Create repository**

### Schritt 2: Dateien hochladen

1. Lade alle Projektdateien in dein Repository hoch:
- `index.html`
- `style.css`
- `script.js`
- `README.md`
1. Erstelle die Ordnerstruktur:
- Erstelle einen Ordner `data/` und lade `articles-index.json` hoch
- Erstelle einen Ordner `articles/` und lade die Markdown-Dateien hoch
- Erstelle einen Ordner `images/` für Bilder

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu **Settings** → **Pages** (im linken Menü)
1. Bei **Source** wähle: **Deploy from a branch**
1. Bei **Branch** wähle: **main** (oder **master**) → **/(root)**
1. Klicke auf **Save**
1. Warte 1-2 Minuten

Deine Website ist jetzt erreichbar unter:

```
https://DEIN-BENUTZERNAME.github.io/REPOSITORY-NAME/
```

-----

## ✍️ Neuen Artikel hinzufügen

### Schritt-für-Schritt Anleitung

#### 1. Markdown-Datei erstellen

Erstelle eine neue `.md` Datei im `articles/` Ordner. Der Dateiname sollte **keine Leerzeichen** enthalten.

**Beispiel:** `klimawandel.md`

#### 2. Artikel schreiben

Verwende folgendes Format:

```markdown
# Haupttitel

Einleitungstext zum Thema...

![Bildbeschreibung](images/mein-bild.jpg)

## Untertitel 1

Text zum ersten Abschnitt...

### Unteruntertitel

Weitere Details...

- Listenpunkt 1
- Listenpunkt 2
- Listenpunkt 3

## Untertitel 2

Noch mehr Text...

![Weiteres Bild](images/bild2.jpg)

[Video-Titel](https://www.youtube.com/watch?v=VIDEO-ID)

Abschlusstext...
```

#### 3. Bilder hinzufügen

1. Lade deine Bilder in den `images/` Ordner hoch
1. Referenziere sie im Markdown mit: `![Beschreibung](images/dateiname.jpg)`

**Unterstützte Formate:** JPG, PNG, GIF, WebP

#### 4. Videos einbinden

Nutze YouTube-Links im Format:

```markdown
[Beschreibung des Videos](https://www.youtube.com/watch?v=VIDEO-ID)
```

Die Website erkennt YouTube-Links automatisch und zeigt sie mit einem 🎥 Symbol an.

#### 5. Artikel-Index aktualisieren

**Wichtig:** Füge deinen Artikel in `data/articles-index.json` hinzu!

Öffne die Datei und füge einen neuen Eintrag hinzu:

```json
{
  "id": "klimawandel",
  "title": "Klimawandel",
  "filename": "klimawandel.md",
  "description": "Die globale Erwärmung und ihre Auswirkungen",
  "tags": ["Umwelt", "Klima", "Erdkunde", "Nachhaltigkeit"]
}
```

**Achtung:** Vergiss nicht das **Komma** nach dem vorherigen Eintrag!

**Vollständiges Beispiel:**

```json
[
  {
    "id": "quantenphysik",
    "title": "Quantenphysik",
    "filename": "quantenphysik.md",
    "description": "Eine Einführung in die Quantenmechanik",
    "tags": ["Physik", "Wissenschaft", "Quanten"]
  },
  {
    "id": "klimawandel",
    "title": "Klimawandel",
    "filename": "klimawandel.md",
    "description": "Die globale Erwärmung und ihre Auswirkungen",
    "tags": ["Umwelt", "Klima", "Erdkunde", "Nachhaltigkeit"]
  }
]
```

#### 6. Änderungen hochladen

1. Lade die neue Markdown-Datei in `articles/` hoch
1. Lade eventuelle Bilder in `images/` hoch
1. Lade die aktualisierte `articles-index.json` hoch

GitHub Pages aktualisiert sich automatisch in 1-2 Minuten.

-----

## 📝 Markdown-Syntax Referenz

### Überschriften

```markdown
# Überschrift 1 (Haupttitel)
## Überschrift 2 (Untertitel)
### Überschrift 3 (Unteruntertitel)
```

### Text-Formatierung

```markdown
**fetter Text**
*kursiver Text*
```

### Listen

```markdown
- Punkt 1
- Punkt 2
- Punkt 3

1. Nummerierter Punkt 1
2. Nummerierter Punkt 2
```

### Bilder

```markdown
![Alternativtext](images/bildname.jpg)
```

### Links

```markdown
[Link-Text](https://example.com)
[Video-Titel](https://www.youtube.com/watch?v=VIDEO-ID)
```

### Absätze

Lasse eine Leerzeile zwischen Absätzen für bessere Lesbarkeit.

-----

## 🏷️ Tag-System verstehen

Tags helfen Schülern, verwandte Artikel zu finden. Wähle relevante Schlagwörter:

**Gute Tags:**

- Fachbereich: `Physik`, `Biologie`, `Geschichte`, `Mathematik`
- Themenbereich: `Weltraum`, `Umwelt`, `Technik`, `Kultur`
- Spezifisch: `Quantenmechanik`, `Photosynthese`, `Klimawandel`

**Tipps:**

- Verwende 3-5 Tags pro Artikel
- Nutze einheitliche Begriffe (z.B. immer “Biologie”, nicht mal “Bio”)
- Kombiniere allgemeine und spezifische Tags

-----

## 🔍 Wie die Suche funktioniert

Die Suchfunktion ist **mehrstufig** und **gewichtet**:

1. **Titel-Match** (Priorität: hoch) - +10 Punkte
1. **Tag-Match** (Priorität: mittel) - +5 Punkte
1. **Beschreibungs-Match** (Priorität: mittel) - +3 Punkte
1. **Volltext-Match** (Priorität: niedrig) - +1 Punkt

Artikel mit höherer Punktzahl erscheinen weiter oben in den Suchergebnissen.

**Beispiel:**
Suche nach “Quanten”

- Artikel mit “Quanten” im Titel: 10 Punkte
- Artikel mit Tag “Quantenmechanik”: 5 Punkte
- Artikel, die nur “Quanten” im Text erwähnen: 1 Punkt

-----

## 🎨 Design anpassen

### Farben ändern

Öffne `style.css` und ändere die Farbvariablen:

```css
/* Hauptfarben */
background-color: #1a1a1a;  /* Hintergrund */
color: #e0e0e0;             /* Textfarbe */

/* Akzentfarbe (Links, Hervorhebungen) */
color: #60a5fa;             /* Blau - kannst du ändern */
```

### Logo hinzufügen

Im `index.html` bei der Header-Sektion:

```html
<header>
    <div class="container">
        <img src="images/logo.png" alt="Logo" style="height: 40px;">
        <h1>SchülerWiki</h1>
    </div>
</header>
```

-----

## 🐛 Fehlerbehebung

### Problem: Artikel wird nicht angezeigt

**Lösung:**

1. Prüfe, ob die Datei im `articles/` Ordner liegt
1. Prüfe, ob der Eintrag in `articles-index.json` korrekt ist
1. Achte auf korrekte Dateinamen (Groß-/Kleinschreibung!)
1. Stelle sicher, dass die JSON-Syntax korrekt ist (Kommas, Anführungszeichen)

### Problem: Bilder werden nicht geladen

**Lösung:**

1. Prüfe, ob Bilder im `images/` Ordner liegen
1. Prüfe den Pfad im Markdown: `images/dateiname.jpg`
1. Achte auf die Dateiendung (.jpg, .png, etc.)
1. Dateinamen sollten keine Sonderzeichen oder Leerzeichen enthalten

### Problem: Suche findet nichts

**Lösung:**

1. Öffne die Browser-Konsole (F12) und suche nach Fehlermeldungen
1. Prüfe, ob `articles-index.json` korrekt formatiert ist
1. Teste die JSON-Datei mit einem [JSON-Validator](https://jsonlint.com/)

### Problem: Website lädt nicht auf GitHub Pages

**Lösung:**

1. Warte 2-5 Minuten nach dem Hochladen
1. Prüfe unter **Settings → Pages**, ob die Seite aktiviert ist
1. Stelle sicher, dass `index.html` im Root-Verzeichnis liegt
1. Lösche den Browser-Cache und lade neu

-----

## 💡 Tipps für gute Artikel

### Struktur

- Beginne mit einer klaren Einleitung
- Nutze Überschriften für logische Abschnitte
- Füge Zusammenfassungen am Ende hinzu

### Inhalt

- Erkläre Konzepte Schritt für Schritt
- Verwende einfache Sprache
- Füge Beispiele hinzu
- Nutze Bilder zur Veranschaulichung

### Länge

- Optimal: 500-1500 Wörter
- Zu kurz: weniger informativ
- Zu lang: überfordernd für Schüler

### Multimedia

- 2-4 Bilder pro Artikel
- 1-2 Videos zur Vertiefung
- Achte auf Bildrechte!

-----

## 📱 Mobile Optimierung

Die Website ist bereits für Smartphones optimiert. Teste sie auf verschiedenen Geräten:

- iPhone/Android
- Tablets
- Desktop-Browser in verschiedenen Größen

-----

## 🔒 Sicherheit & Datenschutz

### Was ist sicher?

- Alle Daten sind öffentlich auf GitHub
- Keine persönlichen Daten werden gespeichert
- Keine Cookies oder Tracking

### Was beachten?

- Verwende nur Bilder mit korrekten Lizenzrechten
- Keine persönlichen Informationen in Artikeln
- YouTube-Videos sind externe Inhalte (von YouTube kontrolliert)

-----

## 🤝 Zusammenarbeit im Team

### Mehrere Autoren

1. Füge Teammitglieder als **Collaborators** hinzu:
- Repository → Settings → Collaborators → Add people
1. Jeder kann nun Artikel hinzufügen und bearbeiten
1. **Best Practice:**
- Erstelle für größere Änderungen einen **Branch**
- Nutze **Pull Requests** zur Qualitätskontrolle
- Dokumentiere Änderungen in Commit-Messages

### Workflow-Vorschlag

1. Autor erstellt Artikel in `articles/`
1. Autor aktualisiert `articles-index.json`
1. Reviewer prüft Inhalt und Format
1. Änderungen werden auf `main` gemerged
1. Website aktualisiert sich automatisch

-----

## 🎓 Erweiterungsmöglichkeiten

### Fortgeschrittene Features

1. **Kategorien-Seiten**
- Eigene Seiten für jede Kategorie
- Filter-Funktion für Tags
1. **Kommentar-System**
- Integration von [Disqus](https://disqus.com) oder [Utterances](https://utteranc.es)
1. **Statistiken**
- [Google Analytics](https://analytics.google.com) für Besucherzahlen
- Meist gelesene Artikel tracken
1. **Quiz-Funktion**
- Interaktive Tests zu Artikeln
- Multiple-Choice-Fragen
1. **PDF-Export**
- Artikel als PDF herunterladen
- Für Offline-Nutzung

-----

## 📞 Support & Hilfe

### Probleme melden

Erstelle ein **Issue** auf GitHub:

1. Gehe zu deinem Repository
1. Klicke auf **Issues** → **New Issue**
1. Beschreibe das Problem detailliert

### Weitere Ressourcen

- [Markdown Guide](https://www.markdownguide.org)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- [HTML/CSS Tutorial](https://www.w3schools.com)

-----

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Du kannst es frei verwenden, modifizieren und weitergeben.

-----

## ✅ Checkliste: Erster Artikel

- [ ] Repository auf GitHub erstellt
- [ ] GitHub Pages aktiviert
- [ ] Projektdateien hochgeladen
- [ ] Ordnerstruktur angelegt (`data/`, `articles/`, `images/`)
- [ ] Beispiel-Artikel gelesen
- [ ] Eigene Markdown-Datei im `articles/` Ordner erstellt
- [ ] Bilder (falls vorhanden) in `images/` hochgeladen
- [ ] Eintrag in `articles-index.json` hinzugefügt
- [ ] Website aufgerufen und getestet
- [ ] Artikel über die Suche gefunden
- [ ] Artikel korrekt dargestellt

-----

## 🎉 Viel Erfolg!

Deine Wissensdatenbank ist jetzt einsatzbereit. Viel Spaß beim Erstellen von Artikeln und dem Teilen von Wissen!

Bei Fragen oder Problemen: Erstelle ein Issue auf GitHub oder kontaktiere deinen IT-Lehrer.
