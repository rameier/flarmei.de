---
description: "Use when creating a new MDX blog post for flarmei.de. Covers required frontmatter, topic keys, file location, and the AI role."
---

# New Blog Post Guidelines

## File Location

Place published posts in `src/content/blog/` as `.mdx` files.

Use `templates/blog-post.mdx` as the starting point. Copy it to a lowercase,
hyphen-separated filename:

```text
src/content/blog/mein-neuer-artikel.mdx
src/content/blog/notizen-zur-produktentwicklung.mdx
```

The filename becomes the URL slug, for example `/blog/mein-neuer-artikel`.

## Required Frontmatter

```yaml
---
title: "Titel des Artikels"
description: "Ein bis zwei Sätze, die den Inhalt zusammenfassen."
pubDate: 2026-06-05
topic: agentic
---
```

Required fields:

| Field         | Type   | Notes                                     |
| ------------- | ------ | ----------------------------------------- |
| `title`       | string | Full article title                        |
| `description` | string | Short summary shown in lists and metadata |
| `pubDate`     | date   | Format: `YYYY-MM-DD`                      |
| `topic`       | enum   | One of the fixed topic keys below         |

## Topic Keys

- `agentic` - Agentisches Engineering
- `devex` - Developer Experience
- `leadership` - Führung
- `esports` - E-Sports
- `reflection` - Selbstreflexion

## MDX Components

Normal Markdown is enough for most posts. For a margin note, import and use:

```mdx
import Sidenote from "../../components/mdx/Sidenote.astro";

<Sidenote>Eine kurze Randnotiz.</Sidenote>
```

If the relative import differs because the file is nested, adjust the path.

## Role of the AI

The author writes all content themselves. The AI must not generate, draft, or
complete article text unprompted.

The AI's role is limited to:

1. Spelling and grammar corrections on request, preserving the author's voice.
2. Alternative formulations only when explicitly asked, offered as options.
3. Critical questions about structure, logic, and coherence when asked.

Never generate placeholder sections, fill gaps, or produce a complete draft
unless the author explicitly requests it.
