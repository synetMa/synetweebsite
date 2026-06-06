'use client'

import { FormationCard } from '@/components/formation-card'
import type { FormationDocument } from '@/modules/formations/types'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { SectionHeader } from './section-header'

export function FeaturedFormations() {
  const trpc = useTRPC()
  const { data, isLoading } = useQuery(
    trpc.formations.getFormations.queryOptions({
      page: '1',
      pageSize: '6',
    }),
  )

  const formations = (data?.docs ?? []) as FormationDocument[]

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Formations à la une"
          description="Sélection de nos prochaines sessions — places limitées par groupe."
          action={{ label: 'Voir tout le catalogue', href: '/formations' }}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 rounded-xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : formations.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            Catalogue bientôt disponible.{' '}
            <Link href="/contact" className="text-blue-600 underline">
              Contactez-nous
            </Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <FormationCard key={formation.id} course={formation} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
