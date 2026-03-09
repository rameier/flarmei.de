import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import PostCard from '@/components/PostCard'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  return {
    title: `${decodeURIComponent(category)} - flarmei.de`,
    description: `Beiträge in der Kategorie ${decodeURIComponent(category)}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'posts', limit: 1000 })
  const categories = Array.from(new Set(docs.map((post) => post.category as string)))
  return categories.map((category) => ({ category }))
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)

  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { category: { equals: decodedCategory } },
    sort: '-pubDate',
    limit: 100,
  })

  if (posts.length === 0) notFound()

  return (
    <>
      <style>{`
        .back-link { margin-bottom: var(--spacing-lg); font-size: 0.85rem; font-family: var(--font-sans); }
        .posts { margin-top: var(--spacing-md); }
      `}</style>

      <h1>{decodedCategory}</h1>
      <p className="back-link">
        <a href="/blog">&larr; Alle Beiträge</a>
      </p>

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
    </>
  )
}
