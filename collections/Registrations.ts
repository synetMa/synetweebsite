import type { CollectionConfig } from 'payload'

export const Registrations: CollectionConfig = {
  slug: 'registrations',
  labels: {
    singular: 'Inscription',
    plural: 'Inscriptions',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['lastName', 'firstName', 'formation', 'status', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'Prénom',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Nom',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Téléphone',
      required: true,
    },
    {
      name: 'formation',
      type: 'relationship',
      relationTo: 'formations',
      required: true,
      label: 'Formation',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Statut',
      defaultValue: 'pending',
      options: [
        { label: 'En attente', value: 'pending' },
        { label: 'Confirmée', value: 'confirmed' },
        { label: 'Annulée', value: 'cancelled' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
