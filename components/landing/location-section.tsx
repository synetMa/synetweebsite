import { SectionHeader } from './section-header'
import { SITE_CONFIG, TEL_LINK, MAIL_LINK } from '@/lib/siteConfig'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function LocationSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nous trouver"
          description={`Notre centre de formation est situé à ${SITE_CONFIG.address.city}. Venez nous rencontrer avant de vous inscrire.`}
          action={{ label: 'Planifier une visite', href: '/contact' }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-gray-100 bg-gray-100 min-h-[280px]">
            <iframe
              title={`Carte ${SITE_CONFIG.name}`}
              src={SITE_CONFIG.googleMapsEmbedUrl}
              className="w-full h-full min-h-[280px] lg:min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5">
              <div className="flex gap-3">
                <MapPin className="size-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Adresse</p>
                  <a
                    href={SITE_CONFIG.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-blue-600 leading-relaxed"
                  >
                    {SITE_CONFIG.address.full}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5">
              <div className="flex gap-3">
                <Clock className="size-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Horaires</p>
                  <p className="text-sm text-gray-600">{SITE_CONFIG.hours}</p>
                  <p className="text-xs text-gray-500 mt-1">{SITE_CONFIG.hoursNote}</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 space-y-3">
              <a href={TEL_LINK} className="flex gap-3 text-sm text-gray-600 hover:text-gray-900">
                <Phone className="size-5 text-blue-600 shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={MAIL_LINK} className="flex gap-3 text-sm text-gray-600 hover:text-gray-900">
                <Mail className="size-5 text-blue-600 shrink-0" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <Link
              href="/inscription"
              className="inline-flex justify-center items-center rounded-full bg-blue-500 text-white px-6 py-3 text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Réserver ma place
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
