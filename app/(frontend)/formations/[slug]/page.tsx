import { Formation } from '@/modules/formations/ui/views/formation-view'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'
import type { Metadata } from 'next'
import { Suspense } from 'react'


interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug} | SYNET Formations`,
    description: 'Détail de la formation SYNET à Casablanca',
  }
}



const page = async ({ params }: Props) => {
  const { slug } = await params
  prefetch(trpc.formations.getFormation.queryOptions({ slug }))

  return (
    <HydrateClient>
      <main className="flex max-w-7xl mx-auto py-34 w-full flex-col px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Formation slug={slug} />
        </Suspense>
      </main>
    </HydrateClient>
  )
}

export default page