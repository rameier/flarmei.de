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
  )
}
