'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'

const links = [
  { href: '/formations', label: 'Formations' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

const NavBar = () => {
  return (
    <header className="w-full bg-transparent p-4 md:p-7 fixed z-50">
      <nav className="mx-auto max-w-7xl bg-white/60 backdrop-blur-md rounded-full px-4 md:px-6 py-3 flex items-center justify-between shadow-sm dark:bg-gray-900/60 dark:text-white/80 border border-gray-200/50 dark:border-gray-800/50">
        
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex gap-1 text-lg font-bold text-gray-900 dark:text-gray-100 items-center"
          >
            <span className="uppercase tracking-wide">SYNET</span>
            <span className="text-[10px] size-4 border rounded-full border-gray-900 dark:border-gray-100 inline-flex items-center justify-center text-gray-500 font-normal">
              R
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 items-center ml-4">
            {links.map((link) => (
              <LinkItem key={link.href} href={link.href}>
                {link.label}
              </LinkItem>
            ))}
          </div>
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/inscription"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-700"
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors dark:text-gray-300 dark:hover:bg-gray-800">
                <Menu size={24} />
                <span className="sr-only">Ouvrir le menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 border-l border-gray-200 dark:border-gray-800">
              <div className="sr-only">
                <SheetTitle>Menu de navigation</SheetTitle>
                <SheetDescription>Liens de navigation pour le site SYNET</SheetDescription>
              </div>
              <div className="flex flex-col gap-8 mt-10">
                <Link
                  href="/"
                  className="flex gap-1 text-xl font-bold text-gray-900 dark:text-gray-100"
                >
                  <span className="uppercase tracking-wide">SYNET</span>
                </Link>
                
                <div className="flex flex-col gap-6 text-lg font-medium text-gray-600 dark:text-gray-300">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href="/inscription"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-base font-medium text-white transition-all hover:bg-blue-700 shadow-sm"
                  >
                    S&apos;inscrire
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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
      className="font-medium text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}
