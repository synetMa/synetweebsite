import type { CollectionConfig } from 'payload'

export const Professors: CollectionConfig = {
  slug: 'professors',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'speciality', 'updatedAt'],
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Nom complet',
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
    },
    {
      name: 'speciality',
      type: 'text',
      label: 'Spécialité',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biographie',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
    },
  ],
}
