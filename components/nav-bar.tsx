import Link from 'next/link'
import type { ReactNode } from 'react'

const links = [
  { href: '/formations', label: 'Formations' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

const NavBar = () => {
  return (
    <header className="w-full bg-transparent p-7 fixed z-50">
      <nav className="mx-auto max-w-7xl bg-white/45 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between dark:bg-white/5 dark:text-white/80">
        <div className="flex gap-6 text-sm font-medium text-gray-500 items-center">
          <Link
            href="/"
            className="flex gap-1 text-lg font-bold text-gray-900 dark:text-gray-100"
          >
            <span className="uppercase tracking-wide">SYNET</span>
            <span className="text-xs size-4 border rounded-full border-gray-900 dark:border-gray-100 inline-flex items-center justify-center text-gray-500">
              R
            </span>
          </Link>
          {links.map((link) => (
            <LinkItem key={link.href} href={link.href}>
              {link.label}
            </LinkItem>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/inscription"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-blue-600"
          >
            S&apos;inscrire
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar

const LinkItem = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) => {
  return (
    <Link
      href={href}
      className="font-semibold text-gray-900 hover:text-blue-600 transition-colors dark:text-gray-100"
    >
      {children}
    </Link>
  )
}
