import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from 'lexical'

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
        <RichText data={post.content as SerializedEditorState} />
      </div>
    </article>
  )
}
