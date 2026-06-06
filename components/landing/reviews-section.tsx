'use client'

import { ReviewCard } from '@/components/review-card'
import type { ReviewDocument } from '@/modules/reviews/types'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import { SectionHeader } from './section-header'

export function ReviewsSection() {
  const trpc = useTRPC()
  const { data, isLoading } = useQuery(
    trpc.reviews.getFeatured.queryOptions({ limit: '6' }),
  )

  const reviews = (data?.docs ?? []) as ReviewDocument[]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          title="Ils nous font confiance"
          description="Retours d'apprenants ayant suivi nos formations à Casablanca."
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-500 py-8 text-sm">
            Les avis seront publiés prochainement.
          </p>
        ) : (
          <div
            className={
              reviews.length === 1
                ? 'max-w-md mx-auto'
                : reviews.length === 2
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto'
                  : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            }
          >
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} showFormation />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
