import { baseProcedure, createTRPCRouter } from '@/trpc/init';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const formationsRouter = createTRPCRouter({
  getFormations: baseProcedure
    .input(
      z.object({
        page: z.string().optional(),
        pageSize: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { db } = ctx;
      const page = parseInt(input.page || '1', 10);
      const pageSize = parseInt(input.pageSize || '10', 10);
      const skip = (page - 1) * pageSize;
      return db.find({
        collection: 'formations',
        limit: pageSize,
        skip,
      });
    }),
  getFormation: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const { db } = ctx;
      const result = await db.find({
        collection: 'formations',
        where: {
          slug: {
            equals: input.slug,
          },
        },
        limit: 1,
        depth: 2,
      });

      const doc = result.docs[0] ?? null;
      
      return { doc };
    }),
});
