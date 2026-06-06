import { SITE_CONFIG, WA_INSCRIPTION_LINK } from '@/lib/siteConfig'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-stone-900 px-8 py-14 sm:px-12 text-center">
          <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Prêt à lancer votre carrière IT ?
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Rejoignez {SITE_CONFIG.name} à {SITE_CONFIG.address.city}. Inscription en
              ligne ou contact WhatsApp — réponse rapide en heures ouvrées.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/inscription"
                className="inline-flex items-center gap-2 rounded-full bg-white text-stone-900 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-px hover:bg-stone-100"
              >
                S&apos;inscrire en ligne
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={WA_INSCRIPTION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-6 py-3 text-sm font-medium transition-all hover:-translate-y-px hover:bg-green-700"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-stone-600 text-stone-300 px-6 py-3 text-sm font-medium transition-all hover:border-stone-500 hover:text-white"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
