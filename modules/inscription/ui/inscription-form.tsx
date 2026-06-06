'use client'

import type { FormationDocument } from '@/modules/formations/types'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { WA_INSCRIPTION_LINK } from '@/lib/siteConfig'
import { useTRPC } from '@/trpc/client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'

export function InscriptionForm() {
  const trpc = useTRPC()
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedSlug = searchParams.get('formation')

  const { data: formationsData, isLoading: loadingFormations } = useQuery(
    trpc.formations.getFormations.queryOptions({
      page: '1',
      pageSize: '100',
    }),
  )

  const formations = (formationsData?.docs ?? []) as FormationDocument[]

  const defaultFormationId = useMemo(() => {
    if (!preselectedSlug || formations.length === 0) return ''
    const match = formations.find((f) => f.slug === preselectedSlug)
    return match?.id ?? ''
  }, [preselectedSlug, formations])

  const [formationId, setFormationId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (defaultFormationId) {
      setFormationId(defaultFormationId)
    }
  }, [defaultFormationId])

  const createRegistration = useMutation(
    trpc.registrations.create.mutationOptions({
      onSuccess: () => {
        toast.success('Inscription enregistrée', {
          description:
            'Notre équipe vous contactera sous peu pour confirmer votre place.',
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        router.push('/formations')
      },
      onError: (error) => {
        toast.error('Erreur', {
          description: error.message || "Impossible d'enregistrer l'inscription.",
        })
      },
    }),
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createRegistration.mutate({
      firstName,
      lastName,
      email,
      phone,
      formationId,
      message: message || undefined,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <form onSubmit={handleSubmit} className="lg:col-span-2">
        <FieldGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field>
              <FieldLabel htmlFor="firstName">Prénom</FieldLabel>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                autoComplete="given-name"
                placeholder="Prénom"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">Nom</FieldLabel>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                autoComplete="family-name"
                placeholder="Nom"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="email">E-mail</FieldLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="vous@exemple.com"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="phone">Téléphone</FieldLabel>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="tel"
              placeholder="+212 6 00 00 00 00"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="formation">Formation</FieldLabel>
            <select
              id="formation"
              value={formationId}
              onChange={(e) => setFormationId(e.target.value)}
              required
              disabled={loadingFormations}
              className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="">
                {loadingFormations
                  ? 'Chargement des formations…'
                  : 'Sélectionnez une formation'}
              </option>
              {formations.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} — {f.price} DH
                </option>
              ))}
            </select>
            <FieldDescription>
              Vous pouvez aussi{' '}
              <Link href="/formations" className="text-blue-600 underline">
                parcourir le catalogue
              </Link>
              .
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="message">Message (optionnel)</FieldLabel>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Questions, disponibilités, entreprise…"
            />
          </Field>

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800"
            disabled={createRegistration.isPending || loadingFormations}
          >
            {createRegistration.isPending ? 'Envoi en cours…' : "Envoyer l'inscription"}
          </Button>
        </FieldGroup>
      </form>

      <aside className="rounded-xl border border-gray-100 bg-gray-50 p-6 h-fit">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Besoin d&apos;aide ?
        </h2>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Pour une réponse rapide, contactez-nous sur WhatsApp. Vous pouvez aussi
          remplir le formulaire : nous traitons chaque demande sous 24–48 h ouvrées.
        </p>
        <a
          href={WA_INSCRIPTION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
      </aside>
    </div>
  )
}
