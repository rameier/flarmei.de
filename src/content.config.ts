import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CATEGORY_KEYS } from "./content/meta/categories";

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      date: z.coerce.date(),
      category: z.enum(CATEGORY_KEYS),
      excerpt: z.string(),
      draft: z.boolean().default(false),

      // Optional fields
      tags: z.array(z.string()).optional(),
      series: z.string().optional(),
      seriesOrder: z.number().optional(),
      coverImage: image().optional(),
      featured: z.boolean().default(false),
      updated: z.coerce.date().optional(),
      canonicalUrl: z.string().optional(),
    }),
});

export const collections = { posts };
