import { getCollection, type CollectionEntry } from "astro:content";

export async function getSortedPosts() {
  const posts = await getCollection("posts", ({ data }) => {
    // In production, filter out drafts. In development, show everything.
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export type Post = CollectionEntry<"posts">;
