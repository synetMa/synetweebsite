import Formations from '@/modules/formations/ui/views/formations-view'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

const page =  () => {
  prefetch(
    trpc.formations.getFormations.queryOptions({
      page: '1',
      pageSize: '10',
    }),
  )

  return (
    <HydrateClient>
      <main className="flex max-w-7xl mx-auto py-34 w-full flex-col px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mb-12 text-gray-700">
          <div className="flex justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-950">Nos formations</h1>
          </div>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Découvrez nos formations conçues pour vous aider à maîtriser les
            compétences essentielles du numérique. Que vous soyez débutant ou
            professionnel, nos cours couvrent un large éventail de sujets.
          </p>
        </div>
        <Formations />
      </main>
    </HydrateClient>
  )
}
export default page