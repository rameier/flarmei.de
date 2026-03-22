---
description: "Use when creating a new blog post, article, or news entry. Covers required frontmatter fields, file naming, folder structure, and Markdown content conventions for the flarmei.de Astro blog."
---

# New Blog Post Guidelines

## File Location

Place all new posts in `src/data/blog/` as `.md` files.

## File Naming

Use lowercase, hyphen-separated slugs that reflect the article title:

```
src/data/blog/mein-neuer-artikel.md
src/data/blog/gedanken-zur-produktentwicklung.md
```

The filename becomes the URL slug (e.g. `/blog/mein-neuer-artikel`).

## Frontmatter

Every post requires these fields:

```yaml
---
title: "Titel des Artikels"
description: "Ein bis zwei Sätze, die den Inhalt des Artikels zusammenfassen."
pubDate: 2026-03-22
category: "Kategorie"
---
```

| Field         | Type   | Required | Notes                                  |
| ------------- | ------ | -------- | -------------------------------------- |
| `title`       | string | yes      | Full article title                     |
| `description` | string | yes      | Short summary, shown in post cards     |
| `pubDate`     | date   | yes      | Format: `YYYY-MM-DD`                   |
| `category`    | string | yes      | Free-text category tag                 |
| `updatedDate` | date   | no       | Only when an existing post was revised |

## Role of the AI

The author writes all content themselves. The AI must NOT generate, draft, or complete article text unprompted.

The AI's role is limited to:

1. **Spelling and grammar**: Correct errors on request, but preserve the author's phrasing and voice.
2. **Formulation**: Suggest alternative wordings only when explicitly asked, offering options rather than replacing text unilaterally.
3. **Red thread (Roter Faden)**: When asked, ask critical questions about structure, logical flow, and coherence — e.g. "Does the conclusion follow from the introduction?" or "Is this section necessary for the argument?". Do not rewrite; ask questions and let the author decide.

**Never**: Generate placeholder text, fill in sections, or produce a "complete draft" unless the author explicitly requests it.

## Content

Write content in standard Markdown below the closing `---`.

- Use `##` and `###` for headings (never `#`, that's the title)
- Use bold (`**text**`) for emphasis
- Keep a personal, reflective tone consistent with the blog's voice

## Example

```markdown
---
title: "Gedanken zur Produktentwicklung"
description: "Was ich gelernt habe, als ich aufgehört habe, Features zu bauen, die niemand braucht."
pubDate: 2026-03-22
category: "Softwareentwicklung"
---

Manchmal ist das Beste, was man tun kann, nichts zu tun.

## Der Kontext

...
```
