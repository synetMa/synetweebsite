'use client'

import {
  formatFormationDate,
  getLevelLabel,
  getStatusConfig,
} from '@/lib/formation-utils'
import type { FormationDocument } from '@/modules/formations/types'
import { CalendarIcon, HourglassIcon } from 'lucide-react'
import Link from 'next/link'

export function FormationCard({ course }: { course: FormationDocument }) {
  const s = getStatusConfig(course.status)

  return (
    <article className="group relative bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col h-full">
      <Link href={`/formations/${course.slug}`} className="flex-1 block">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-3 bg-gray-100 text-gray-700">
          {getLevelLabel(course.level)}
        </span>
        <p className="font-medium text-gray-900 mb-1 leading-snug">{course.name}</p>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2">
          {course.summary}
        </p>

        <div className="flex flex-col gap-1.5 mb-4 text-xs text-gray-500">
          <span className="flex items-center gap-2">
            <CalendarIcon className="size-3" />
            Démarre le{' '}
            <strong className="text-gray-700">{formatFormationDate(course.date)}</strong>
          </span>
          <span className="flex items-center gap-2">
            <HourglassIcon className="size-3" />
            {course.duration}
          </span>
          <span className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full "
              style={{ background: s.dot }}
            />
            <span style={{ color: s.textColor }}>{s.text}</span>
          </span>
        </div>
      </Link>

      <hr className="border-gray-100 mb-4" />

      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-medium text-gray-900">
          {course.price}{' '}
          <span className="text-xs font-normal text-gray-400">DH</span>
        </span>
        <Link
          href={`/inscription?formation=${course.slug}`}
          className="text-xs font-medium text-blue-600 hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          S&apos;inscrire →
        </Link>
      </div>
    </article>
  )
}
