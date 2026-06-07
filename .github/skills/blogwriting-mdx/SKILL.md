---
name: blogwriting-mdx
description: "Use when writing, reviewing, or preparing an MDX blog post for flarmei.de; for requests like create a blog post, draft frontmatter, structure an MDX article, use the blog template, or check MDX syntax and components."
---

# Blogwriting In MDX

Use this skill for blog-writing tasks in this repository.

## Goal

Help with the mechanics and structure of MDX blog posts for flarmei.de while preserving the author's voice and intent.

## Source Files

- Published posts live in `src/content/blog/`.
- Start from `templates/blog-post.mdx`.
- Use `./references/demo-mdx-features.mdx` as a reference for supported MDX features and formatting patterns.
- Follow `.github/instructions/new-blog-post.instructions.md` for repository-specific rules.

## Required Frontmatter

Every published post must include:

```yaml
---
title: "Titel des Artikels"
description: "Ein bis zwei Sätze, die den Inhalt zusammenfassen."
pubDate: 2026-06-05
topic: agentic
---
```

Allowed `topic` values:

- `agentic`
- `devex`
- `leadership`
- `esports`
- `reflection`

## Workflow

1. Clarify the task before writing. Determine whether the user wants a new post, structural help, revisions, or a review.
2. For a new post, create an `.mdx` file in `src/content/blog/` with a lowercase, hyphen-separated filename.
3. Copy the structure from `templates/blog-post.mdx` and keep imports only when they are actually used.
4. Use normal Markdown by default. Only add MDX components such as `Sidenote` or `Callout` when they improve the article.
5. When the user asks for help with formatting or examples, consult `src/content/blog/demo-mdx-features.mdx` for headings, lists, tables, images, code fences, footnotes, and custom components.
6. Before finishing, verify frontmatter, imports, relative paths, and that the content still reads like the author's work.

## Guardrails

- Do not treat `src/content/blog/demo-mdx-features.mdx` as a production article. It is a reference artifact.
- Do not generate a full article draft unless the user explicitly asks for drafting help.
- When asked to improve an existing text, preserve the author's tone and intent.
- Prefer questions or structural suggestions over filling in missing content without permission.
- Keep changes minimal and repository-consistent.

## MDX Components

Available examples in the repo include:

- `Sidenote` from `../../components/mdx/Sidenote.astro`
- `Callout` from `../../components/mdx/Callout.astro`

Only import components that are used in the file.

## Review Checklist

- Frontmatter is complete and valid.
- Filename is slug-ready.
- Topic matches one of the allowed values.
- Imports are correct for the file location.
- Markdown and MDX syntax are balanced.
- Any images use meaningful alt text.
- The post remains authored by the user unless explicit drafting was requested.
