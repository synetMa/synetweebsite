'use client'

import { FormationCard } from '@/components/formation-card'
import type { FormationDocument } from '@/modules/formations/types'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'

const Formations = () => {
  const trpc = useTRPC()

  const { data: formations, isLoading } = useQuery(
    trpc.formations.getFormations.queryOptions({
      page: '1',
      pageSize: '10',
    }),
  )

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 rounded-xl bg-gray-100 animate-pulse" />
        ))}
      </div>
    )
  }

  const docs = (formations?.docs ?? []) as FormationDocument[]

  if (docs.length === 0) {
    return (
      <p className="text-gray-500 text-center py-12">
        Aucune formation disponible pour le moment.
      </p>
    )
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {docs.map((formation) => (
          <FormationCard key={formation.id} course={formation} />
        ))}
      </div>
    </section>
  )
}

export default Formations
