import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getPostSlug, sortPosts } from '../lib/posts';
import { topicOrder, topics } from '../lib/topics';

export const GET: APIRoute = async ({ site }) => {
  const posts = sortPosts(await getCollection('blog'));
  const base = (site?.toString() ?? 'https://flarmei.de/').replace(/\/$/, '');

  const lines = [
    '# flarmei.de',
    '',
    '> Persönlicher Blog von Ralf Meier über Developer Experience, Agentic Engineering, Führung, E-Sports und Selbstreflexion. Deutschsprachig.',
    '',
    '## Über',
    `- ${base}/ueber — Bio: Ralf Meier.`,
    `- ${base}/now — aktueller Fokus (Now-Page).`,
    '',
    '## Themen',
    ...topicOrder.map((key) => `- ${topics[key].label}: ${base}/themen/${key}`),
    '',
    '## Texte',
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${base}/blog/${getPostSlug(post)}): ${post.data.description}`,
    ),
    '',
    '## Feeds',
    `- RSS: ${base}/rss.xml`,
    `- Sitemap: ${base}/sitemap-index.xml`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
