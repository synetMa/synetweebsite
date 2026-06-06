import { SITE_CONFIG, WA_VISITE_LINK } from '@/lib/siteConfig'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos',
  description: `Découvrez ${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`,
}

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-950 mb-6">À propos de {SITE_CONFIG.name}</h1>
      <p className="leading-relaxed mb-4">
        {SITE_CONFIG.legalName} est un centre de formation informatique basé à{' '}
        {SITE_CONFIG.address.city}. Nous proposons des parcours en présentiel avec un
        accompagnement personnalisé et des groupes restreints (max.{' '}
        {SITE_CONFIG.maxGroupSize} participants).
      </p>
      <p className="leading-relaxed mb-8">
        Depuis plus de {SITE_CONFIG.stats.yearsActive}, nous formons des professionnels
        aux métiers du numérique : cybersécurité, réseaux, développement, data et plus
        encore.
      </p>

      <section id="team" className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Notre équipe</h2>
        <p className="text-gray-600 leading-relaxed">
          Des formateurs expérimentés, issus du terrain, pour vous transmettre des
          compétences directement applicables en entreprise.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/formations"
          className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Voir les formations
        </Link>
        <a
          href={WA_VISITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium hover:border-gray-400 transition-colors"
        >
          Planifier une visite
        </a>
      </div>
    </main>
  )
}
