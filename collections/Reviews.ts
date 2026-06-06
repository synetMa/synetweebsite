import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: {
    singular: 'Avis',
    plural: 'Avis',
  },
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'rating', 'formation', 'featured', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'authorName',
      type: 'text',
      label: 'Nom affiché',
      required: true,
      admin: {
        description: 'Ex. Youssef M. — visible sur le site',
      },
    },
    {
      name: 'role',
      type: 'text',
      label: 'Fonction / parcours',
      admin: {
        description: 'Ex. Technicien réseau, Développeur junior',
      },
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Note',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
      label: 'Commentaire',
      required: true,
    },
    {
      name: 'formation',
      type: 'relationship',
      relationTo: 'formations',
      label: 'Formation concernée',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo (optionnel)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Afficher sur la page d\'accueil',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordre d\'affichage',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Plus petit = affiché en premier',
      },
    },
  ],
  timestamps: true,
}
