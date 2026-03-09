'use client'

import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/werdegang', label: 'Werdegang' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const currentPath = usePathname()

  return (
    <>
      <style>{`
        .header { border-bottom: 1px solid var(--color-border); }
        .nav { max-width: var(--content-width); margin: 0 auto; padding: var(--spacing-md); display: flex; justify-content: space-between; align-items: center; font-family: var(--font-sans); }
        .site-name { font-family: var(--font-mono); font-weight: 700; color: var(--color-text-heading); font-size: 1rem; }
        .site-name:hover { color: var(--color-accent); }
        .nav-links { display: flex; list-style: none; gap: var(--spacing-md); padding: 0; margin: 0; }
        .nav-links a { color: var(--color-text-muted); font-size: 0.85rem; }
        .nav-links a:hover, .nav-links a.active { color: var(--color-accent); }
      `}</style>
      <header className="header">
        <nav className="nav">
          <a href="/" className="site-name">flarmei.de</a>
          <ul className="nav-links">
            {links.map((link) => {
              const isActive =
                currentPath === link.href ||
                (link.href !== '/' && currentPath.startsWith(link.href))
              return (
                <li key={link.href}>
                  <a href={link.href} className={isActive ? 'active' : ''}>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}
