'use client'

import { SITE_CONFIG } from '@/lib/siteConfig'
import { useTranslations } from 'next-intl'

export function StatsSection() {
  const t = useTranslations('Stats')

  const stats = [
    { value: SITE_CONFIG.stats.yearsActive, label: t('experience') },
    { value: SITE_CONFIG.stats.graduates, label: t('graduates') },
    { value: SITE_CONFIG.stats.placementRate, label: t('placement') },
    { value: SITE_CONFIG.stats.partners, label: t('partners') },
  ]

  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-bricolage">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
