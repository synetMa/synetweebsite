import { LANDING_PARTNERS } from '@/lib/landing-content'
import { Marquee } from '@/components/ui/marquee'

export function PartnersSection() {
  return (
    <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-400 mb-6">
        Certifications & écosystème
      </p>
      <Marquee duration={40} className="[--gap:2rem]">
        {LANDING_PARTNERS.map((name) => (
          <span
            key={name}
            className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-600 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
