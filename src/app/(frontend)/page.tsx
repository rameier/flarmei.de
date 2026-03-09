import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'flarmei.de - Ralf Meier',
  description:
    'Persönlicher Blog und digitale Visitenkarte von Ralf Meier. Softwareentwicklung, Product Management, eSports und persönliche Entwicklung.',
}

export default function HomePage() {
  return (
    <section className="intro">
      <h1>Hallo, ich bin Ralf.</h1>
      <p className="tagline">
        Softwareentwickler, Produktdenker und ehrenamtlicher eSports-Organisator aus Bremen.
      </p>
      <p>
        Hier schreibe ich über Dinge, die mich beschäftigen: Technologie, Organisation,
        persönliche Entwicklung und die Schnittstellen dazwischen. Kein Marketingkanal,
        sondern ein Ort für Denken, Lernen und Teilen.
      </p>
      <nav className="intro-links">
        <a href="/werdegang">Werdegang &rarr;</a>
        <a href="/blog">Blog &rarr;</a>
      </nav>
    </section>
  )
}
