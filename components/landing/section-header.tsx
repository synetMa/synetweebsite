import { cn } from '@/lib/utils'
import Link from 'next/link'

interface SectionHeaderProps {
  title: string
  description?: string
  action?: { label: string; href: string }
  className?: string
  centered?: boolean
}

export function SectionHeader({
  title,
  description,
  action,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 text-gray-700',
        centered && 'text-center mx-auto max-w-3xl',
        className,
      )}
    >
      <div
        className={cn(
          'flex gap-4 mb-4',
          centered ? 'flex-col items-center' : 'items-center justify-between',
        )}
      >
        <h2 className="text-3xl font-bold text-gray-950 tracking-tight">{title}</h2>
        {action && !centered && (
          <Link
            href={action.href}
            className="flex shrink-0 gap-1 text-base sm:text-lg items-center font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 group"
          >
            <span>{action.label}</span>
            <svg
              className="transform group-hover:translate-x-1 transition-transform duration-300"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
      {description && (
        <p className={cn('text-gray-600 leading-relaxed', centered ? 'max-w-2xl mx-auto' : 'max-w-3xl')}>
          {description}
        </p>
      )}
      {action && centered && (
        <Link
          href={action.href}
          className="inline-flex mt-6 gap-1 items-center font-medium text-gray-900 hover:text-blue-600 transition-colors group"
        >
          <span>{action.label}</span>
          <svg
            className="transform group-hover:translate-x-1 transition-transform"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}
