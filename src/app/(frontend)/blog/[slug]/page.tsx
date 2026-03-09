import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const post = docs[0]
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'posts', limit: 1000 })
  return docs.map((post) => ({ slug: post.slug as string }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })
  const post = docs[0]
  if (!post) notFound()

  const pubDate = new Date(post.pubDate as string)
  const updatedDate = post.updatedDate ? new Date(post.updatedDate as string) : undefined

  const formattedDate = pubDate.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const formattedUpdatedDate = updatedDate?.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <style>{`
        .post-header { margin-bottom: var(--spacing-xl); }
        .post-meta { font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: var(--spacing-md); font-family: var(--font-sans); }
        .updated { color: var(--color-text-muted); }
        .separator { margin: 0 var(--spacing-sm); }
        .category { color: var(--color-accent); }
        .post-content h2 { margin-top: var(--spacing-xl); margin-bottom: var(--spacing-md); }
        .post-content h3 { margin-top: var(--spacing-lg); margin-bottom: var(--spacing-sm); }
        .post-content p { margin-bottom: var(--spacing-md); }
        .post-content ul, .post-content ol { margin-bottom: var(--spacing-md); }
      `}</style>
      <article className="post">
        <header className="post-header">
          <div className="post-meta">
            <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
            {formattedUpdatedDate && (
              <span className="updated"> (aktualisiert: {formattedUpdatedDate})</span>
            )}
            <span className="separator">/</span>
            <a href={`/categories/${post.category}`} className="category">
              {post.category as string}
            </a>
          </div>
          <h1>{post.title}</h1>
        </header>
        <div className="post-content">
          {/* Rich text content rendered by PayloadCMS will be here */}
          <p>{post.description}</p>
        </div>
      </article>
    </>
  )
}
