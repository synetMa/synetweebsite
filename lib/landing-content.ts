import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Headphones,
  Users,
  type LucideIcon,
} from 'lucide-react'

export const LANDING_FEATURES: {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}[] = [
  {
    icon: Users,
    title: 'Petits groupes',
    description:
      'Maximum 8 participants par session pour un suivi personnalisé et des exercices pratiques.',
    accent: 'bg-blue-100 text-blue-700',
  },
  {
    icon: GraduationCap,
    title: 'Formateurs experts',
    description:
      'Des professionnels en activité qui partagent leur expérience terrain et les bonnes pratiques du secteur.',
    accent: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Award,
    title: 'Certifications',
    description:
      'Préparation aux certifications reconnues (réseaux, cloud, bureautique, développement).',
    accent: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Briefcase,
    title: 'Accompagnement emploi',
    description:
      'CV, entretiens et mise en relation avec notre réseau d\'entreprises partenaires à Casablanca.',
    accent: 'bg-orange-100 text-orange-700',
  },
  {
    icon: BookOpen,
    title: 'Présentiel & pratique',
    description:
      'Salles équipées, labs réseau et projets concrets — pas seulement de la théorie.',
    accent: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Headphones,
    title: 'Support réactif',
    description:
      'WhatsApp et équipe pédagogique disponibles en heures ouvrées pour vos questions.',
    accent: 'bg-amber-100 text-amber-800',
  },
]

export const LANDING_STEPS = [
  {
    step: '01',
    title: 'Choisissez votre formation',
    description: 'Parcourez le catalogue ou contactez-nous pour être orienté selon votre profil.',
  },
  {
    step: '02',
    title: 'Inscrivez-vous en ligne',
    description: 'Remplissez le formulaire d\'inscription ou écrivez-nous sur WhatsApp.',
  },
  {
    step: '03',
    title: 'Confirmez votre place',
    description: 'Nous validons les dates, le tarif et les modalités de paiement avec vous.',
  },
  {
    step: '04',
    title: 'Formez-vous & certifiez-vous',
    description: 'Suivez le programme en présentiel et préparez votre certification ou votre recherche d\'emploi.',
  },
]

export const LANDING_FAQ = [
  {
    question: 'Les formations sont-elles en présentiel ?',
    answer:
      'Oui, nos parcours se déroulent principalement en présentiel à Casablanca, dans nos salles équipées. Certains modules peuvent inclure des ressources en ligne en complément.',
  },
  {
    question: 'Comment s\'inscrire ?',
    answer:
      'Vous pouvez remplir le formulaire d\'inscription sur notre site ou nous contacter via WhatsApp. Notre équipe vous confirme les dates et les modalités de paiement.',
  },
  {
    question: 'Quel est le niveau requis pour commencer ?',
    answer:
      'Chaque formation indique un niveau (débutant, intermédiaire ou avancé). En cas de doute, contactez-nous : nous vous orientons vers le parcours adapté.',
  },
  {
    question: 'Proposez-vous des formations en entreprise ?',
    answer:
      'Oui, nous organisons des sessions intra-entreprise sur mesure. Demandez un devis via la page contact ou WhatsApp.',
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer:
      'Les modalités (virement, espèces selon cas) vous sont communiquées lors de la confirmation d\'inscription par notre équipe.',
  },
]

export const LANDING_PARTNERS = [
  'Microsoft',
  'Cisco',
  'CompTIA',
  'AWS',
  'Fortinet',
  'EC-Council',
  'Oracle',
  'Google Cloud',
]

export const LANDING_DOMAIN_PILLS = [
  { label: 'Cybersécurité', accent: 'bg-blue-100 text-blue-700' },
  { label: 'Réseaux', accent: 'bg-sky-100 text-sky-700' },
  { label: 'Excel & Power BI', accent: 'bg-emerald-100 text-emerald-700' },
  { label: 'Développement web', accent: 'bg-violet-100 text-violet-700' },
  { label: 'Cloud & DevOps', accent: 'bg-orange-100 text-orange-700' },
  { label: 'Bureautique', accent: 'bg-amber-100 text-amber-800' },
]
