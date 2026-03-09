import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Blog - flarmei.de',
  description:
    'Blog von Ralf Meier über Softwareentwicklung, Product Management, eSports und persönliche Entwicklung.',
}

export default async function BlogPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-pubDate',
    limit: 100,
  })

  const categories = Array.from(new Set(posts.map((post) => post.category as string)))

  return (
    <>
      <style>{`
        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
          align-items: center;
          margin-bottom: var(--spacing-lg);
          font-family: var(--font-sans);
        }
        .categories-label { color: var(--color-text-muted); }
        .category-link {
          color: var(--color-accent);
          padding: var(--spacing-xs) var(--spacing-sm);
          border: 1px solid var(--color-border);
          border-radius: 3px;
        }
        .category-link:hover { border-color: var(--color-accent); }
        .posts { margin-top: var(--spacing-md); }
        .empty { color: var(--color-text-muted); }
      `}</style>

      <h1>Blog</h1>

      {categories.length > 0 && (
        <nav className="categories">
          <span className="categories-label">Kategorien:</span>
          {categories.map((cat) => (
            <a key={cat} href={`/categories/${cat}`} className="category-link">
              {cat}
            </a>
          ))}
        </nav>
      )}

      <section className="posts">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            pubDate={new Date(post.pubDate as string)}
            category={post.category as string}
            slug={post.slug as string}
          />
        ))}
      </section>

      {posts.length === 0 && <p className="empty">Noch keine Beiträge vorhanden.</p>}
    </>
  )
}
