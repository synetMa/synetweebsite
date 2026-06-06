import { LANDING_FEATURES } from '@/lib/landing-content'
import { SITE_CONFIG } from '@/lib/siteConfig'
import { SectionHeader } from './section-header'

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          title="Pourquoi choisir SYNET ?"
          description={`${SITE_CONFIG.tagline} — un accompagnement de A à Z, du choix de la formation jusqu'à votre insertion professionnelle.`}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANDING_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-100 bg-white p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
            >
              <div
                className={`inline-flex size-10 items-center justify-center rounded-lg mb-4 ${feature.accent}`}
              >
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
