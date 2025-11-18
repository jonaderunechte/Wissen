# 📋 articles-index.json Struktur

Diese Datei ist das **Herzstück** deiner Wissensdatenbank. Hier werden alle Artikel registriert und mit Metadaten versehen.

## 📍 Wo befindet sich die Datei?

```
schueler-wiki/
└── data/
    └── articles-index.json
```

## 📝 Grundstruktur

Die Datei ist ein **JSON-Array** mit Artikel-Objekten:

```json
[
  {
    "id": "eindeutige-id",
    "title": "Anzeige-Titel",
    "filename": "dateiname.md",
    "description": "Kurzbeschreibung",
    "tags": ["Tag1", "Tag2", "Tag3"]
  },
  {
    "id": "zweiter-artikel",
    "title": "Zweiter Artikel",
    "filename": "zweiter-artikel.md",
    "description": "Eine weitere Beschreibung",
    "tags": ["TagA", "TagB"]
  }
]
```

## 🔑 Felder erklärt

### `id` (Pflichtfeld)

- **Typ:** String
- **Zweck:** Eindeutiger Identifikator für den Artikel
- **Format:** Kleinbuchstaben, Bindestriche statt Leerzeichen
- **Beispiele:**
  - `"quantenphysik"`
  - `"schwarze-loecher"`
  - `"erste-hilfe-massnahmen"`

**Regeln:**

- ✅ Nur Kleinbuchstaben
- ✅ Bindestriche statt Leerzeichen
- ✅ Keine Sonderzeichen (außer `-`)
- ✅ Keine Umlaute (ä→ae, ö→oe, ü→ue)
- ❌ Keine Duplikate!

-----

### `title` (Pflichtfeld)

- **Typ:** String
- **Zweck:** Der angezeigte Titel in Suchergebnissen
- **Format:** Frei wählbar, mit Groß-/Kleinschreibung
- **Beispiele:**
  - `"Quantenphysik"`
  - `"Schwarze Löcher"`
  - `"Die Französische Revolution"`

**Tipps:**

- Prägnant und aussagekräftig
- Maximal 5-8 Wörter
- Suchfreundlich (enthält wichtige Keywords)

-----

### `filename` (Pflichtfeld)

- **Typ:** String
- **Zweck:** Name der Markdown-Datei im `articles/` Ordner
- **Format:** Dateiname mit `.md` Endung
- **Beispiele:**
  - `"quantenphysik.md"`
  - `"schwarze-loecher.md"`
  - `"franzoesische-revolution.md"`

**Regeln:**

- ✅ Muss **exakt** mit dem Dateinamen übereinstimmen
- ✅ Dateiendung `.md` nicht vergessen
- ✅ Groß-/Kleinschreibung beachten (wichtig auf Linux-Servern)
- ❌ Keine Leerzeichen im Dateinamen
- ❌ Keine Sonderzeichen (außer `-` und `_`)

-----

### `description` (Pflichtfeld)

- **Typ:** String
- **Zweck:** Kurze Beschreibung für Suchergebnisse
- **Format:** 1-2 Sätze, ca. 100-150 Zeichen
- **Beispiele:**
  - `"Eine Einführung in die faszinierende Welt der Quantenmechanik"`
  - `"Erfahre, wie schwarze Löcher entstehen und was sie so mysteriös macht"`

**Tipps:**

- Informativ und neugierig machend
- Fasst den Artikel in einem Satz zusammen
- Wird in Suchergebnissen angezeigt
- Enthält relevante Keywords für die Suche

-----

### `tags` (Pflichtfeld)

- **Typ:** Array von Strings
- **Zweck:** Kategorisierung und verbesserte Suche
- **Format:** Liste von Schlagwörtern in eckigen Klammern
- **Beispiele:**
  - `["Physik", "Wissenschaft", "Moderne Physik"]`
  - `["Geschichte", "Europa", "18. Jahrhundert", "Revolution"]`

**Anzahl:** 3-5 Tags pro Artikel empfohlen

**Tag-Kategorien:**

1. **Fachbereich** (immer angeben)
- `"Mathematik"`, `"Physik"`, `"Biologie"`, `"Chemie"`
- `"Geschichte"`, `"Geographie"`, `"Politik"`, `"Wirtschaft"`
- `"Deutsch"`, `"Englisch"`, `"Kunst"`, `"Musik"`
1. **Themengebiet** (optional)
- `"Weltraum"`, `"Umwelt"`, `"Technik"`, `"Medizin"`
- `"Antike"`, `"Mittelalter"`, `"Neuzeit"`
1. **Spezifische Begriffe** (optional)
- `"Quantenmechanik"`, `"Photosynthese"`, `"Französische Revolution"`
- `"DNA"`, `"Klimawandel"`, `"Industrialisierung"`

**Tag-Richtlinien:**

- ✅ Einheitliche Schreibweise verwenden
- ✅ Singular statt Plural (`"Pflanze"` statt `"Pflanzen"`)
- ✅ Vollständige Begriffe (`"Biologie"` statt `"Bio"`)
- ❌ Keine zu allgemeinen Tags wie `"Wissen"` oder `"Schule"`
- ❌ Keine Dopplungen (nicht `"Physik"` UND `"Physikalisch"`)

-----

## ✏️ Vollständiges Beispiel

```json
[
  {
    "id": "quantenphysik",
    "title": "Quantenphysik",
    "filename": "quantenphysik.md",
    "description": "Eine Einführung in die faszinierende Welt der Quantenmechanik und ihrer Grundprinzipien",
    "tags": ["Physik", "Wissenschaft", "Quanten", "Moderne Physik"]
  },
  {
    "id": "photosynthese",
    "title": "Photosynthese",
    "filename": "photosynthese.md",
    "description": "Der biochemische Prozess, durch den Pflanzen Lichtenergie in chemische Energie umwandeln",
    "tags": ["Biologie", "Pflanzen", "Biochemie", "Ökologie"]
  },
  {
    "id": "franzoesische-revolution",
    "title": "Die Französische Revolution",
    "filename": "franzoesische-revolution.md",
    "description": "Die Revolution von 1789, die Europa für immer veränderte und die Moderne einleitete",
    "tags": ["Geschichte", "Europa", "18. Jahrhundert", "Revolution", "Frankreich"]
  }
]
```

-----

## ⚠️ Häufige Fehler

### 1. Fehlendes Komma

```json
// ❌ FALSCH
{
  "id": "artikel1",
  "title": "Artikel 1"
}
{
  "id": "artikel2"
}

// ✅ RICHTIG
{
  "id": "artikel1",
  "title": "Artikel 1"
},
{
  "id": "artikel2"
}
```

### 2. Letztes Komma

```json
// ❌ FALSCH (Komma nach letztem Eintrag)
{
  "id": "artikel1"
},
{
  "id": "artikel2"
},  // <- Dieses Komma ist falsch!
]

// ✅ RICHTIG
{
  "id": "artikel1"
},
{
  "id": "artikel2"
}  // <- Kein Komma beim letzten
]
```

### 3. Fehlende Anführungszeichen

```json
// ❌ FALSCH
{
  id: artikel1,  // <- Anführungszeichen fehlen
  title: Mein Artikel
}

// ✅ RICHTIG
{
  "id": "artikel1",
  "title": "Mein Artikel"
}
```

### 4. Falsche Klammern

```json
// ❌ FALSCH
{
  "tags": ("Physik", "Chemie")  // <- Runde Klammern
}

// ✅ RICHTIG
{
  "tags": ["Physik", "Chemie"]  // <- Eckige Klammern
}
```

-----

## 🔍 JSON validieren

Bevor du die Datei hochlädst, teste sie auf [jsonlint.com](https://jsonlint.com):

1. Kopiere den gesamten Inhalt der Datei
1. Füge ihn auf jsonlint.com ein
1. Klicke “Validate JSON”
1. Behebe eventuelle Fehler

-----

## 📝 Checkliste für neue Einträge

Beim Hinzufügen eines neuen Artikels:

- [ ] `id` ist eindeutig und kleingeschrieben
- [ ] `id` entspricht dem Dateinamen (ohne `.md`)
- [ ] `title` ist aussagekräftig
- [ ] `filename` stimmt **exakt** mit der Datei überein
- [ ] `description` ist informativ (100-150 Zeichen)
- [ ] 3-5 relevante `tags` vergeben
- [ ] Komma nach vorherigem Eintrag gesetzt
- [ ] KEIN Komma nach dem letzten Eintrag
- [ ] JSON mit jsonlint.com validiert
- [ ] Datei gespeichert und hochgeladen

-----

## 💾 Backup-Tipp

Erstelle vor größeren Änderungen immer eine Kopie:

- `articles-index.json` → `articles-index-backup.json`

So kannst du im Fehlerfall die alte Version wiederherstellen!

-----

## 🎯 Best Practices

### Sortierung

Sortiere Artikel alphabetisch nach `title` für bessere Übersicht:

```json
[
  {
    "title": "Chemische Reaktionen",
    ...
  },
  {
    "title": "Photosynthese",
    ...
  },
  {
    "title": "Quantenphysik",
    ...
  }
]
```

### Konsistente Tags

Führe eine **Tag-Liste** in einem separaten Dokument:

- Alle nutzen dieselben Tags
- Vermeidet Synonyme (`"Mathe"` vs `"Mathematik"`)
- Einheitliche Groß-/Kleinschreibung

### Versionierung

Nutze Git-Commits sinnvoll:

```
git commit -m "Artikel 'Klimawandel' hinzugefügt"
```

So kann man Änderungen nachvollziehen!

-----

Viel Erfolg beim Pflegen deiner Wissensdatenbank! 🚀
