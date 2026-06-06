import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

const registrationInput = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse e-mail invalide'),
  phone: z
    .string()
    .min(8, 'Numéro de téléphone invalide')
    .regex(/^[\d\s+()-]+$/, 'Format de téléphone invalide'),
  formationId: z.string().min(1, 'Veuillez choisir une formation'),
  message: z.string().max(2000).optional(),
})

export const registrationsRouter = createTRPCRouter({
  create: baseProcedure.input(registrationInput).mutation(async ({ ctx, input }) => {
    const { db } = ctx

    try {
      await db.findByID({
        collection: 'formations',
        id: input.formationId,
      })
    } catch {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Formation sélectionnée introuvable',
      })
    }

    const registration = await db.create({
      collection: 'registrations',
      data: {
        firstName: input.firstName.trim(),
        lastName: input.lastName.trim(),
        email: input.email.trim().toLowerCase(),
        phone: input.phone.trim(),
        formation: input.formationId,
        message: input.message?.trim() ?? '',
        status: 'pending',
      },
    })

    return {
      success: true,
      id: registration.id,
    }
  }),
})
