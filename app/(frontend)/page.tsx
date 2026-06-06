import Courses from '@/components/courses'
import Hero from '@/components/hero'
import { CtaSection } from '@/components/landing/cta-section'
import { DomainsSection } from '@/components/landing/domains-section'
import { FaqSection } from '@/components/landing/faq-section'
import { FeaturedFormations } from '@/components/landing/featured-formations'
import { FeaturesSection } from '@/components/landing/features-section'
import { HowItWorksSection } from '@/components/landing/how-it-works-section'
import { LocationSection } from '@/components/landing/location-section'
import { PartnersSection } from '@/components/landing/partners-section'
import { StatsSection } from '@/components/landing/stats-section'
import { ReviewsSection } from '@/components/landing/reviews-section'
import Smoker from '@/components/smoker'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

export default async function Home() {
  prefetch(
    trpc.formations.getFormations.queryOptions({
      page: '1',
      pageSize: '6',
    }),
  )
  prefetch(trpc.reviews.getFeatured.queryOptions({ limit: '6' }))

  return (
    <HydrateClient>
      <div className="pb-24">
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <DomainsSection />
        <Courses />
        <FeaturedFormations />
        <HowItWorksSection />
        <PartnersSection />
        <ReviewsSection />
        <FaqSection />
        <CtaSection />
        <LocationSection />
        <Smoker />
        <WhatsAppFloat />
      </div>
    </HydrateClient>
  )
}
