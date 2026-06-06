import type { ReviewDocument } from '@/modules/reviews/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const AVATAR_PALETTES = [
  { bg: '#CECBF6', color: '#3C3489' },
  { bg: '#9FE1CB', color: '#085041' },
  { bg: '#F5C4B3', color: '#712B13' },
  { bg: '#BFDBFE', color: '#1E40AF' },
  { bg: '#FDE68A', color: '#92400E' },
]

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

function getAvatarPalette(id: string) {
  const index =
    id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    AVATAR_PALETTES.length
  return AVATAR_PALETTES[index]
}

export function StarRating({ rating }: { rating: number }) {
  const safeRating = Math.min(5, Math.max(1, Math.round(rating)))
  return (
    <div
      className="flex gap-0.5 text-amber-400 text-xs"
      aria-label={`${safeRating} sur 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ opacity: i <= safeRating ? 1 : 0.2 }}>
          ★
        </span>
      ))}
    </div>
  )
}

interface ReviewCardProps {
  review: ReviewDocument
  className?: string
  showFormation?: boolean
}

export function ReviewCard({ review, className, showFormation = false }: ReviewCardProps) {
  const photoUrl =
    typeof review.photo === 'object' && review.photo?.url ? review.photo.url : null
  const palette = getAvatarPalette(review.id)
  const formationName =
    showFormation &&
    review.formation &&
    typeof review.formation === 'object' &&
    review.formation.name
      ? review.formation.name
      : null

  return (
    <blockquote
      className={cn(
        'rounded-xl border border-gray-100 bg-gray-50/50 p-6 flex flex-col h-full',
        className,
      )}
    >
      <StarRating rating={review.rating} />
      <p className="mt-4 text-sm text-gray-600 leading-relaxed flex-1">
        &ldquo;{review.comment}&rdquo;
      </p>
      {formationName && (
        <p className="mt-3 text-xs text-blue-600 font-medium">{formationName}</p>
      )}
      <footer className="mt-6 flex items-center gap-3">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={review.authorName}
            width={40}
            height={40}
            className="size-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="size-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
            style={{ background: palette.bg, color: palette.color }}
          >
            {getInitials(review.authorName)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-900">{review.authorName}</p>
          {review.role && <p className="text-xs text-gray-500">{review.role}</p>}
        </div>
      </footer>
    </blockquote>
  )
}
