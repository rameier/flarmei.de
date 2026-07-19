import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getPostSlug, sortPosts } from '../lib/posts';

export const GET: APIRoute = async (context) => {
  const posts = sortPosts(await getCollection('blog'));

  return rss({
    title: 'flarmei.de',
    description:
      'Persönlicher Blog von Ralf Meier über Führung, Developer Experience, Agentic Engineering, E-Sports und Selbstreflexion.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${getPostSlug(post)}/`,
      author: 'Ralf Meier',
      categories: [post.data.topic],
    })),
    customData: '<language>de-DE</language>',
  });
};
