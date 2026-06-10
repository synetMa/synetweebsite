'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { Menu, Globe, ChevronDown, Check } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { useTranslations, useLocale } from 'next-intl'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
]

const NavBar = () => {
  const t = useTranslations('Navbar')
  const activeLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  const navLinks = [
    { href: '/formations', label: t('formations') },
    { href: '/entreprises', label: t('companies') },
    { href: '/about', label: t('about') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl px-4 md:px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? 'mt-2 bg-background/80 backdrop-blur-lg rounded-full shadow-lg border border-border/40 mx-4 md:mx-auto'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex gap-1 text-xl font-bold text-foreground items-center"
            >
              <span className="uppercase tracking-wide font-bricolage">SYNET</span>
              <span className="text-[10px] size-4 border rounded-full border-foreground inline-flex items-center justify-center font-normal">
                R
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-5 text-sm font-medium items-center ml-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-muted-foreground hover:text-primary transition-colors hover:scale-[1.02]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/80">
                  <Globe className="size-4" />
                  <span className="sr-only">Switch Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36 rounded-xl border border-border/60">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className="flex items-center justify-between py-2 cursor-pointer font-medium text-sm rounded-lg"
                  >
                    {lang.name}
                    {activeLocale === lang.code && <Check className="size-4 text-blue-600" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/inscription"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-md hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t('register')}
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
                className={activeLocale === 'ar' ? 'rotate-180' : ''}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher for Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32 rounded-xl">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className="flex items-center justify-between py-2 cursor-pointer"
                  >
                    {lang.name}
                    {activeLocale === lang.code && <Check className="size-4 text-blue-600" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="size-5" />
                  <span className="sr-only">{t('open')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={activeLocale === 'ar' ? 'left' : 'right'} className="w-[300px] sm:w-[350px] p-6 border-l border-border bg-background">
                <div className="sr-only">
                  <SheetTitle>{t('menu')}</SheetTitle>
                  <SheetDescription>{t('desc')}</SheetDescription>
                </div>
                <div className="flex flex-col gap-8 mt-10">
                  <Link
                    href="/"
                    className="flex gap-1 text-xl font-bold text-foreground"
                  >
                    <span className="uppercase tracking-wide font-bricolage">SYNET</span>
                  </Link>
                  
                  <div className="flex flex-col gap-6 text-lg font-medium text-muted-foreground">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 pt-6 border-t border-border">
                    <Link
                      href="/inscription"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700 shadow-sm"
                    >
                      {t('register')}
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
