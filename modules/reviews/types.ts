export interface ReviewDocument {
  id: string
  authorName: string
  role?: string | null
  rating: number
  comment: string
  featured?: boolean | null
  order?: number | null
  formation?:
    | string
    | {
        id: string
        name?: string
        slug?: string
      }
    | null
  photo?:
    | string
    | {
        id: string
        url?: string | null
        alt?: string | null
      }
    | null
  createdAt: string
  updatedAt: string
}
