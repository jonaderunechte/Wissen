# 🚀 Schnellstart-Anleitung

## In 5 Minuten zur eigenen Wissenswebsite

### Schritt 1: GitHub Repository erstellen (1 Min.)

1. Gehe zu [github.com](https://github.com) und logge dich ein
1. Klicke auf **+** → **New repository**
1. Name: `schueler-wiki` (oder eigener Name)
1. **Public** auswählen
1. **Create repository** klicken

### Schritt 2: Dateien hochladen (2 Min.)

1. Klicke auf **uploading an existing file**
1. Lade folgende Dateien hoch:
- `index.html`
- `style.css`
- `script.js`
- `README.md`
1. Erstelle Ordner und lade hoch:
- `data/articles-index.json`
- `articles/` (mit allen .md Dateien)
- `images/` (optional, für Bilder)

### Schritt 3: GitHub Pages aktivieren (1 Min.)

1. Gehe zu **Settings** (oben im Menü)
1. Klicke links auf **Pages**
1. Bei **Branch**: Wähle **main** → **Save**
1. Warte 2 Minuten

### Schritt 4: Website öffnen (1 Min.)

Deine Website ist jetzt unter dieser URL erreichbar:

```
https://DEIN-BENUTZERNAME.github.io/schueler-wiki/
```

-----

## ✍️ Ersten eigenen Artikel erstellen

### 1. Markdown-Datei erstellen

Erstelle `articles/mein-erster-artikel.md`:

```markdown
# Mein erster Artikel

Dies ist mein erster Artikel auf der Wissenswebsite!

## Was ich heute gelernt habe

- Markdown ist einfach
- GitHub Pages ist kostenlos
- Wissen teilen macht Spaß

![Ein tolles Bild](images/beispiel.jpg)

[Interessantes Video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

### 2. Artikel registrieren

Öffne `data/articles-index.json` und füge hinzu:

```json
{
  "id": "mein-erster-artikel",
  "title": "Mein erster Artikel",
  "filename": "mein-erster-artikel.md",
  "description": "Mein allererster Beitrag zur Wissensdatenbank",
  "tags": ["Tutorial", "Erste Schritte", "Anfänger"]
}
```

**Wichtig:** Vergiss nicht das Komma nach dem vorherigen Eintrag!

### 3. Hochladen

- Lade `mein-erster-artikel.md` in den `articles/` Ordner
- Lade die aktualisierte `articles-index.json` hoch

### 4. Testen

Warte 1-2 Minuten und suche auf deiner Website nach “erster Artikel” - dein Artikel sollte erscheinen!

-----

## 🎨 Grundlegende Markdown-Befehle

|Was du schreibst          |Was erscheint       |
|--------------------------|--------------------|
|`# Überschrift`           |Große Überschrift   |
|`## Untertitel`           |Mittlere Überschrift|
|`**fett**`                |**fett**            |
|`*kursiv*`                |*kursiv*            |
|`- Punkt`                 |• Punkt (Aufzählung)|
|`![Bild](images/bild.jpg)`|Zeigt Bild an       |
|`[Link](url)`             |Klickbarer Link     |

-----

## 🐛 Häufige Anfängerfehler

|Problem                     |Lösung                                          |
|----------------------------|------------------------------------------------|
|Artikel wird nicht angezeigt|Prüfe `articles-index.json` auf Fehler (Kommas!)|
|Bild wird nicht geladen     |Pfad muss `images/dateiname.jpg` sein           |
|JSON-Fehler                 |Teste auf [jsonlint.com](https://jsonlint.com)  |
|Änderungen nicht sichtbar   |Warte 2 Min., lösche Browser-Cache              |

-----

## ✅ Checkliste

- [ ] GitHub Account erstellt
- [ ] Repository angelegt
- [ ] Dateien hochgeladen
- [ ] GitHub Pages aktiviert
- [ ] Website aufgerufen
- [ ] Ersten Artikel erstellt
- [ ] Artikel in Index eingetragen
- [ ] Erfolgreich getestet

-----

## 📚 Nächste Schritte

1. Lies das vollständige **README.md** für Details
1. Erstelle 3-5 Artikel zu verschiedenen Themen
1. Lade Bilder hoch und binde sie ein
1. Teile die Website mit deinen Mitschülern
1. Sammle Feedback und verbessere kontinuierlich

-----

## 🆘 Hilfe benötigt?

- Schau ins **README.md** für ausführliche Erklärungen
- Erstelle ein **Issue** auf GitHub
- Frage deinen Lehrer oder IT-Beauftragten

**Viel Erfolg! 🎉**
