'use client'

import { SectionHeader } from '@/components/landing/section-header'
import { getLevelLabel } from '@/lib/formation-utils'
import type { FormationDocument } from '@/modules/formations/types'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import hdd from '../public/HDD.png'
import Ipad from '../public/iPhone.png'

const Courses = () => {
  const trpc = useTRPC()
  const { data, isLoading } = useQuery(
    trpc.formations.getFormations.queryOptions({
      page: '1',
      pageSize: '4',
    }),
  )

  const courses = (data?.docs ?? []) as FormationDocument[]

  return (
    <section className="relative pt-12 border-b border-gray-100 overflow-hidden bg-white">
      <motion.div
        className="pointer-events-none absolute top-40 right-30 h-[200px] w-[280px] rounded-full"
        initial={{ y: 0 }}
        animate={{ y: [-18, 18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image src={Ipad.src} alt="" width={740} height={550} aria-hidden />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-10 left-10 h-[200px] w-[280px] rounded-full"
        initial={{ y: 0 }}
        animate={{ y: [-18, 18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <Image src={hdd.src} alt="" width={740} height={550} aria-hidden />
      </motion.div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Prochaines sessions"
          description="Consultez les dates, durées et tarifs de nos formations en présentiel à Casablanca."
          action={{ label: 'Toutes nos formations', href: '/formations' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-t-2xl p-6 md:p-8 shadow-inner">
          {isLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          ) : courses.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Aucune formation publiée.{' '}
              <Link href="/formations" className="underline">
                Voir le catalogue
              </Link>
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-300 text-gray-500 uppercase text-sm tracking-wider font-semibold">
                    <th className="pb-4 pl-4">Formation</th>
                    <th className="pb-4">Durée</th>
                    <th className="pb-4">Niveau</th>
                    <th className="pb-4">Prix</th>
                    <th className="pb-4 pr-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/60">
                  {courses.map((course) => (
                    <tr
                      key={course.id}
                      className="group hover:bg-white transition-all duration-300"
                    >
                      <td className="py-5 pl-4 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        <Link href={`/formations/${course.slug}`}>{course.name}</Link>
                      </td>
                      <td className="py-5 text-gray-600 font-medium">{course.duration}</td>
                      <td className="py-5 text-gray-600 font-medium">
                        {getLevelLabel(course.level)}
                      </td>
                      <td className="py-5 font-bold text-gray-900">
                        {course.price} DH
                      </td>
                      <td className="py-5 pr-4 text-right">
                        <Link
                          href={`/inscription?formation=${course.slug}`}
                          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-sm"
                        >
                          S&apos;inscrire
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Courses
