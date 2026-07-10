const SITE_URL = import.meta.env.SITE ?? 'https://flarmei.de';

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ralf Meier',
  url: `${SITE_URL}/ueber`,
  image: `${SITE_URL}/profile.png`,
  sameAs: [
    'https://github.com/rameier',
    'https://www.linkedin.com/in/ralf-meier-88555118a/',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'flarmei.de',
  url: SITE_URL,
  description:
    'Persönlicher Blog von Ralf Meier über Führung, Developer Experience, Agentic Engineering, E-Sports und Selbstreflexion.',
  author: { '@type': 'Person', name: 'Ralf Meier' },
  inLanguage: 'de-DE',
};

export function blogPostingSchema(opts: {
  url: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    author: { '@type': 'Person', name: 'Ralf Meier', url: `${SITE_URL}/ueber` },
    publisher: { '@type': 'Person', name: 'Ralf Meier' },
    inLanguage: 'de-DE',
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
