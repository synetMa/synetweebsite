import type { CollectionConfig } from 'payload'

export const Formations: CollectionConfig = {
    slug: 'formations',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "summary",
            type: "textarea",
            required: true,
        },
        {
            name: "description",
            type: "richText",
            required: true,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "price",
            type: "number",
            required: true,
        },
        {
            name: "duration",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
        },
        {
            name: "level",
            type: "select",
            options: [
                { label: "Débutant", value: "beginner" },
                { label: "Intermédiaire", value: "intermediate" },
                { label: "Avancé", value: "advanced" },
            ],
            required: true,
        },
        {
            name: "capacity",
            type: "number",
            required: true,

        },
        {
            name: "date",
            type: "date",
            // required : true,
        },
        {
            name: "status",
            type: "select",
            options: [
                { label: "Ouverte", value: "open" },
                { label: "Complet", value: "full" },
                { label: "Bientôt complet", value: "almost-full" },
            ],
        },
        {
            name: "professor",
            type: "relationship",
            relationTo: "professors",
            hasMany: false,
            label: "Formateur",
        },
    ],
}
