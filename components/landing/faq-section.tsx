'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LANDING_FAQ } from '@/lib/landing-content'
import { SectionHeader } from './section-header'

export function FaqSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          title="Questions fréquentes"
          description="Tout ce qu'il faut savoir avant de vous inscrire."
        />
        <Accordion type="single" collapsible className="rounded-xl border border-gray-100 bg-white px-4">
          {LANDING_FAQ.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
