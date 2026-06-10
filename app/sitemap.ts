import { getPayload } from 'payload'
import config from '@payload-config'
import { SITE_CONFIG } from '@/lib/siteConfig'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let formations: { docs: Array<{ slug?: string; updatedAt?: string }> } = { docs: [] }
  try {
    const payload = await getPayload({ config })
    formations = await payload.find({
      collection: 'formations',
      limit: 100,
    }) as any
  } catch (error) {
    console.error('Failed to generate sitemap routes from payload:', error)
  }

  const locales = ['fr', 'en', 'ar']
  const staticPaths = ['', '/formations', '/about', '/contact', '/inscription', '/entreprises', '/blog']

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const path of staticPaths) {
      const url = `${SITE_CONFIG.url}/${locale}${path}`
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1.0 : 0.8,
      })
    }

    for (const doc of formations.docs) {
      if (doc.slug) {
        const url = `${SITE_CONFIG.url}/${locale}/formations/${doc.slug}`
        sitemapEntries.push({
          url,
          lastModified: doc.updatedAt ? new Date(doc.updatedAt) : new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        })
      }
    }
  }

  return sitemapEntries
}
