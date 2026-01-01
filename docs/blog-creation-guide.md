# Guide: Neuen Blogartikel erstellen

Dieser Guide beschreibt, wie du einen neuen Blogartikel auf flarmei.de veröffentlichst.

## 1. Datei anlegen

Erstelle eine neue Markdown- (`.md`) oder MDX-Datei (`.mdx`) im Ordner:
`src/content/posts/`

Der Dateiname sollte idealerweise dem `slug` (URL-Pfad) des Artikels entsprechen, z.B. `mein-neuer-artikel.md`.

## 2. Frontmatter definieren

Jeder Artikel muss mit einem Frontmatter-Block beginnen. Dieser wird durch drei Bindestriche `---` am Anfang und Ende begrenzt.

### Pflichtfelder

| Feld       | Typ   | Beschreibung                                   |
| :--------- | :---- | :--------------------------------------------- |
| `title`    | Text  | Die Hauptüberschrift des Artikels.             |
| `date`     | Datum | Veröffentlichungsdatum (Format: YYYY-MM-DD).   |
| `category` | Text  | Eine der definierten Kategorien (siehe unten). |
| `excerpt`  | Text  | Kurze Zusammenfassung für die Vorschau.        |

### Optionale Felder

| Feld           | Typ      | Standard  | Beschreibung                                                                   |
| :------------- | :------- | :-------- | :----------------------------------------------------------------------------- |
| `slug`         | Text     | Dateiname | URL-Pfad des Artikels. Wenn weggelassen, wird der Dateiname verwendet.         |
| `draft`        | Boolean  | `false`   | Wenn `true`, wird der Artikel nicht gebaut/angezeigt.                          |
| `tags`         | Liste    | `[]`      | Liste von Schlagworten, z.B. `["Astro", "Tutorial"]`.                          |
| `coverImage`   | Bildpfad | -         | Pfad zu einem Titelbild (relativ zum `assets` Ordner oder im gleichen Ordner). |
| `featured`     | Boolean  | `false`   | Wenn `true`, wird der Artikel hervorgehoben (z.B. auf der Startseite).         |
| `updated`      | Datum    | -         | Datum der letzten Aktualisierung.                                              |
| `series`       | Text     | -         | Name einer Artikelserie, zu der dieser Post gehört.                            |
| `seriesOrder`  | Zahl     | -         | Position innerhalb der Serie.                                                  |
| `canonicalUrl` | Text     | -         | URL zum Originalartikel, falls es sich um einen Cross-Post handelt.            |

### Verfügbare Kategorien

Die Kategorie muss exakt einem der folgenden Schlüssel entsprechen (definiert in `src/content/meta/categories.ts`):

- `systeme-struktur` (Systeme & Struktur)
- `produkt-software` (Produkt & Software)
- `ehrenamt-gemeinschaft` (Ehrenamt & Gemeinschaft)
- `selbstfuehrung-reflexion` (Selbstführung & Reflexion)
- `werkzeuge-ki-denken` (Werkzeuge, KI & Denken)
- `meta` (Meta)

## 3. Beispiel

Hier ist ein vollständiges Beispiel für eine Artikel-Datei (`src/content/posts/beispiel-artikel.md`):

```markdown
---
title: "Mein erster Artikel"
slug: "mein-erster-artikel"
date: "2026-01-01"
category: "produkt-software"
excerpt: "Dies ist eine kurze Einleitung, die auf der Übersichtseite erscheint."
tags: ["Coding", "Astro"]
draft: false
featured: true
---

Hier beginnt der eigentliche Inhalt des Artikels. Du kannst ganz normales **Markdown** verwenden.

## Zwischenüberschrift

- Liste Punkt 1
- Liste Punkt 2

Viel Spaß beim Schreiben!
```

## 4. Bilder einfügen

Bilder können im `src/assets/` Ordner abgelegt und im Markdown referenziert werden.

```markdown
![Beschreibung des Bildes](../../assets/mein-bild.jpg)
```

Alternativ können Bilder auch direkt neben der Markdown-Datei im `src/content/posts/` Ordner liegen (wenn du Unterordner für Posts verwendest).
