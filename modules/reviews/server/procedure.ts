import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { z } from 'zod'

export const reviewsRouter = createTRPCRouter({
  getFeatured: baseProcedure
    .input(
      z.object({
        limit: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = parseInt(input.limit || '6', 10)
      return ctx.db.find({
        collection: 'reviews',
        where: {
          featured: {
            equals: true,
          },
        },
        sort: 'order',
        limit,
        depth: 1,
      })
    }),

  getByFormation: baseProcedure
    .input(z.object({ formationId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.find({
        collection: 'reviews',
        where: {
          formation: {
            equals: input.formationId,
          },
        },
        sort: '-createdAt',
        limit: 10,
        depth: 1,
      })
    }),
})
