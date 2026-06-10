import { InscriptionForm } from '@/modules/inscription/ui/inscription-form'
import { SITE_CONFIG } from '@/lib/siteConfig'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Inscription',
  description: `Inscrivez-vous à une formation ${SITE_CONFIG.name} à ${SITE_CONFIG.address.city}`,
}

export default async function InscriptionPage() {
  prefetch(
    trpc.formations.getFormations.queryOptions({
      page: '1',
      pageSize: '100',
    }),
  )

  return (
    <HydrateClient>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-950 mb-3">
            Inscription à une formation
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Remplissez le formulaire ci-dessous pour réserver votre place. Notre équipe
            vous recontactera pour confirmer les dates et les modalités de paiement.
          </p>
        </div>
        <Suspense fallback={<div className="text-gray-500">Chargement du formulaire…</div>}>
          <InscriptionForm />
        </Suspense>
      </main>
    </HydrateClient>
  )
}
