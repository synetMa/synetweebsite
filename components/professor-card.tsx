import type { ProfessorDocument } from '@/modules/formations/types'
import Image from 'next/image'

export function ProfessorCard({ professor }: { professor: ProfessorDocument }) {
  const photoUrl =
    typeof professor.photo === 'object' && professor.photo?.url
      ? professor.photo.url
      : null

  return (
    <div className="flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4">
      {photoUrl ? (
        <div className="size-16 rounded-full flex items-center justify-center">
          <Image
            src={photoUrl}
            alt={professor.fullName}
            width={40}
            height={40}
            className="size-16 rounded-full object-cover flex-shrink-0"
          />
        </div>
      ) : (
        <div className="size-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-semibold flex-shrink-0">
          {professor.fullName.charAt(0)}
        </div>
      )}
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
          Formateur
        </p>
        <p className="font-semibold text-gray-900">{professor.fullName}</p>
        <p className="text-sm text-blue-600">{professor.speciality}</p>
        {professor.bio && (
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{professor.bio}</p>
        )}
      </div>
    </div>
  )
}
