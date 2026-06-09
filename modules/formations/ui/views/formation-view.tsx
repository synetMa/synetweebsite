'use client'

import { FormationReviews } from '@/components/formation-reviews'
import { ProfessorCard } from '@/components/professor-card'
import {
  formatFormationDate,
  getLevelLabel,
} from '@/lib/formation-utils'
import type { ProfessorDocument } from '@/modules/formations/types'
import { WA_INSCRIPTION_LINK } from '@/lib/siteConfig'
import { useTRPC } from '@/trpc/client'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import Image from 'next/image'

export const Formation = ({ slug }: { slug: string }) => {
  const trpc = useTRPC()
  const { data, isLoading, isError } = useQuery(
    trpc.formations.getFormation.queryOptions({ slug }),
  )

  if (isLoading) {
    return (
      <section className="flex flex-col text-gray-700 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <div className="w-full h-72 bg-gray-200 rounded" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="h-96 bg-gray-200 rounded" />
          </div>
        </div>
      </section>
    )
  }

  if (isError || !data?.doc) {
    return (
      <section className="flex flex-col items-center justify-center py-24 text-gray-500">
        <p className="text-xl font-semibold">Formation introuvable</p>
        <Link
          href="/formations"
          className="mt-4 text-sm underline hover:text-gray-800 transition-colors"
        >
          Retour aux formations
        </Link>
      </section>
    )
  }

  const formation = data.doc as unknown as any
  const professor =
    formation.professor && typeof formation.professor === 'object'
      ? (formation.professor as ProfessorDocument)
      : null

  const infoRows = [
    { label: 'Titre', value: formation.name },
    { label: 'Commencement', value: formatFormationDate(formation.date) },
    { label: 'Capacité', value: formation.capacity },
    { label: 'Niveau', value: getLevelLabel(formation.level) },
    { label: 'Durée', value: formation.duration },
    {
      label: 'Prix',
      value: formation.price ? `${formation.price} DH` : '—',
    },
  ]

  return (
    <section className="flex flex-col text-gray-700">
      <nav className="mb-6 text-sm text-gray-400 flex items-center gap-1 flex-wrap">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Accueil
        </Link>
        <span>/</span>
        <Link href="/formations" className="hover:text-gray-600 transition-colors">
          Formations
        </Link>
        <span>/</span>
        <span className="text-gray-600 font-medium truncate">{formation.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {formation.image.url && (
            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
              <Image
                src={formation.image.url}
                alt={formation.name}
                width={1280}
                height={720}
                className="w-full object-cover max-h-[420px]"
              />
            </div>
          )}
          {professor && <ProfessorCard professor={professor} />}
          <div className="prose prose-gray prose-lg max-w-none dark:prose-invert">
            <RichText data={formation.description} />
          </div>
          <FormationReviews formationId={formation.id} />
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Détails de la formation
              </h2>
            </div>

            <ul className="divide-y divide-gray-100">
              {infoRows.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between px-4 py-3 text-sm"
                >
                  <span className="font-medium text-gray-500">{label}</span>
                  <span className="text-gray-900 font-semibold text-right">
                    {value ?? '—'}
                  </span>
                </li>
              ))}
            </ul>
            <div className="p-4 space-y-2">
              <Link
                href={`/inscription?formation=${formation.slug}`}
                className="block w-full text-center text-sm font-semibold text-white bg-blue-500 rounded-md px-4 py-2.5 hover:bg-blue-600 transition-colors duration-200"
              >
                S&apos;inscrire en ligne
              </Link>
              <a
                href={WA_INSCRIPTION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-sm font-medium text-green-700 border border-green-200 bg-green-50 rounded-md px-4 py-2 hover:bg-green-100 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
