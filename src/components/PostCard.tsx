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
    <article className="post-card">
      <div className="post-meta">
        <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
        <span className="separator">/</span>
        <a href={`/categories/${category}`} className="category">{category}</a>
      </div>
      <a href={`/blog/${slug}`}>
        <h3 className="post-title">{title}</h3>
        <p className="post-description">{description}</p>
      </a>
    </article>
  )
}
