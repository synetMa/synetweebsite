import {
  MAIL_LINK,
  SITE_CONFIG,
  TEL_LINK,
  WA_DEVIS_LINK,
  WA_INSCRIPTION_LINK,
} from '@/lib/siteConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactez ${SITE_CONFIG.name} à ${SITE_CONFIG.address.city}`,
}

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-950 mb-6">Contact</h1>
      <p className="leading-relaxed mb-8">
        Une question sur nos formations, un devis entreprise ou une inscription ?
        Contactez-nous par téléphone, e-mail ou WhatsApp.
      </p>

      <ul className="space-y-4 text-sm">
        <li>
          <span className="font-medium text-gray-900">E-mail — </span>
          <a href={MAIL_LINK} className="text-blue-600 hover:underline">
            {SITE_CONFIG.email}
          </a>
        </li>
        <li>
          <span className="font-medium text-gray-900">Téléphone — </span>
          <a href={TEL_LINK} className="text-blue-600 hover:underline">
            {SITE_CONFIG.phone}
          </a>
        </li>
        <li>
          <span className="font-medium text-gray-900">Adresse — </span>
          <a
            href={SITE_CONFIG.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {SITE_CONFIG.address.full}
          </a>
        </li>
        <li>
          <span className="font-medium text-gray-900">Horaires — </span>
          {SITE_CONFIG.hours}
        </li>
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={WA_INSCRIPTION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-green-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-green-700 transition-colors"
        >
          Inscription WhatsApp
        </a>
        <a
          href={WA_DEVIS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Demander un devis
        </a>
      </div>
    </main>
  )
}
