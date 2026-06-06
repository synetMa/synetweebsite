import { createTRPCRouter } from '../init';
import { formationsRouter } from '@/modules/formations/server/procedure';
import { registrationsRouter } from '@/modules/registrations/server/procedure';
import { reviewsRouter } from '@/modules/reviews/server/procedure';

export const appRouter = createTRPCRouter({
  formations: formationsRouter,
  registrations: registrationsRouter,
  reviews: reviewsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;