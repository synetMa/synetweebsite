import { ModeToggle } from '@/components/mode-switch'
import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import { Toaster } from '@/components/ui/sonner'
import { TRPCReactProvider } from '@/trpc/client'
import { SITE_CONFIG } from '@/lib/siteConfig'
import type { Metadata } from 'next'
import { Bricolage_Grotesque as Bricolage } from 'next/font/google'
import '../../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  return {
    title: {
      default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.tagline,
    metadataBase: new URL(SITE_CONFIG.url),
  }
}

const bricolage = Bricolage({
  variable: '--font-bricolage',
  subsets: ['latin'],
})

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { children, params } = props
  const { locale } = await params
  const messages = await getMessages()
  const direction = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html data-scroll-behavior="smooth" lang={locale} dir={direction}>
      <TRPCReactProvider>
        <NextIntlClientProvider messages={messages}>
          <body
            className={`${bricolage.className} antialiased relative text-foreground bg-background`}
          >
            <main className="bg-background min-h-screen flex flex-col justify-between">
              <div>
                <NavBar />
                <div className="pt-24">{children}</div>
              </div>
              <Footer />
            </main>
            <Toaster richColors position="top-center" />
            <div className="fixed bottom-4 right-6 z-50">
              <ModeToggle />
            </div>
          </body>
        </NextIntlClientProvider>
      </TRPCReactProvider>
    </html>
  )
}

