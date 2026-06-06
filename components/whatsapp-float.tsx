import { WA_LINK } from '@/lib/siteConfig'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter SYNET sur WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-700 hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
