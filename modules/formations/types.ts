export interface ProfessorDocument {
  id: string
  fullName: string
  email: string
  phone?: string | null
  speciality: string
  bio?: string | null
  photo?:
    | string
    | {
        id: string
        url?: string | null
        alt?: string | null
      }
    | null
}

export interface FormationDocument {
  id: string
  name: string
  slug: string
  summary: string
  description: Record<string, unknown>
  price: number
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  capacity: number
  date?: string | null
  status?: 'open' | 'almost-full' | 'full' | null
  image?:
    | string
    | {
        id: string
        url?: string | null
        alt?: string | null
      }
    | null
  professor?: string | ProfessorDocument | null
  createdAt: string
  updatedAt: string
}
