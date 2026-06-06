import { SITE_CONFIG } from '@/lib/siteConfig'

const stats = [
  { value: SITE_CONFIG.stats.yearsActive, label: "Années d'expérience" },
  { value: SITE_CONFIG.stats.graduates, label: 'Diplômés formés' },
  { value: SITE_CONFIG.stats.placementRate, label: "Taux d'insertion" },
  { value: SITE_CONFIG.stats.partners, label: 'Entreprises partenaires' },
]

export function StatsSection() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
