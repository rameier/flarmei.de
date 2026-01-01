import type { Post } from "./posts";

export function getRelatedPosts(
  currentPost: Post,
  allPosts: Post[],
  count = 3
): Post[] {
  // Exclude the current post
  const candidates = allPosts.filter((p) => p.id !== currentPost.id);

  const scored = candidates.map((post) => {
    let score = 0;

    // +3 points for same category
    if (post.data.category === currentPost.data.category) {
      score += 3;
    }

    // +1 point for each overlapping tag
    if (post.data.tags && currentPost.data.tags) {
      const overlap = post.data.tags.filter((tag) =>
        currentPost.data.tags?.includes(tag)
      );
      score += overlap.length;
    }

    return { post, score };
  });

  // Sort by score (descending), then by date (descending)
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.post.data.date.valueOf() - a.post.data.date.valueOf();
  });

  return scored.slice(0, count).map((s) => s.post);
}
