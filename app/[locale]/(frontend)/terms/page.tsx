import { SITE_CONFIG } from '@/lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-gray-700 prose prose-gray">
      <h1>Conditions d&apos;utilisation</h1>
      <p>
        Cette page sera complétée avec les conditions générales de {SITE_CONFIG.legalName}.
        Pour toute question, contactez-nous à {SITE_CONFIG.email}.
      </p>
    </main>
  )
}
