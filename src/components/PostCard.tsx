interface Props {
  title: string
  description: string
  pubDate: Date
  category: string
  slug: string
}

export default function PostCard({ title, description, pubDate, category, slug }: Props) {
  const formattedDate = pubDate.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <style>{`
        .post-card { padding: var(--spacing-md) 0; border-bottom: 1px solid var(--color-border); }
        .post-card-link { color: inherit; display: block; }
        .post-card-link:hover .post-title { color: var(--color-accent); }
        .post-meta { font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: var(--spacing-xs); font-family: var(--font-sans); }
        .separator { margin: 0 var(--spacing-sm); }
        .category { color: var(--color-accent); }
        .post-title { font-size: 1.5rem; margin-bottom: var(--spacing-xs); transition: color 0.2s ease; }
        .post-description { color: var(--color-text-muted); margin: 0; }
      `}</style>
      <article className="post-card">
        <div className="post-meta">
          <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
          <span className="separator">/</span>
          <a href={`/categories/${category}`} className="category">{category}</a>
        </div>
        <a href={`/blog/${slug}`} className="post-card-link">
          <h3 className="post-title">{title}</h3>
          <p className="post-description">{description}</p>
        </a>
      </article>
    </>
  )
}
