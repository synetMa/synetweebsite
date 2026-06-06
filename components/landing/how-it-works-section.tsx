import { LANDING_STEPS } from '@/lib/landing-content'
import { SectionHeader } from './section-header'

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          title="Comment ça marche ?"
          description="Quatre étapes simples pour démarrer votre parcours avec nous."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANDING_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-gray-100 bg-gray-50/50 p-6"
            >
              {index < LANDING_STEPS.length - 1 && (
                <span
                  className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gray-200"
                  aria-hidden
                />
              )}
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
                Étape {item.step}
              </span>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
