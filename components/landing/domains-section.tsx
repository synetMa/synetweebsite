import { LANDING_DOMAIN_PILLS } from '@/lib/landing-content'
import { SectionHeader } from './section-header'

export function DomainsSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          title="Domaines de formation"
          description="Des parcours adaptés aux besoins du marché marocain et international."
        />
        <div className="flex flex-wrap justify-center gap-2">
          {LANDING_DOMAIN_PILLS.map((domain) => (
            <span
              key={domain.label}
              className={`inline-flex items-center rounded-full border border-black/5 px-4 py-2 text-sm font-medium ${domain.accent}`}
            >
              {domain.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
