import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export function sortPosts(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export function formatDate(date: Date, mode: 'short' | 'long' = 'long') {
  const options: Intl.DateTimeFormatOptions =
    mode === 'short'
      ? { day: '2-digit', month: 'short' }
      : { day: '2-digit', month: 'long', year: 'numeric' };

  return date.toLocaleDateString('de-DE', options);
}

export function estimateReadMinutes(post: BlogPost) {
  const plain = (post.body ?? '')
    .replace(/import\s.+?from\s+['"].+?['"];?/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}[\]#>*_`~-]/g, ' ');
  const words = plain.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function getPostSlug(post: BlogPost) {
  return post.id.replace(/\.mdx$/, '');
}
