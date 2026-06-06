'use client'

import { ReviewCard } from '@/components/review-card'
import type { ReviewDocument } from '@/modules/reviews/types'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'

export function FormationReviews({ formationId }: { formationId: string }) {
  const trpc = useTRPC()
  const { data, isLoading } = useQuery(
    trpc.reviews.getByFormation.queryOptions({ formationId }),
  )

  const reviews = (data?.docs ?? []) as ReviewDocument[]

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-gray-100 animate-pulse" />
        ))}
      </div>
    )
  }

  if (reviews.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Avis sur cette formation</h3>
      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
