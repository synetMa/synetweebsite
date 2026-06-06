import { ModeToggle } from '@/components/mode-switch'
import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import { Toaster } from '@/components/ui/sonner'
import { TRPCReactProvider } from '@/trpc/client'
import { SITE_CONFIG } from '@/lib/siteConfig'
import type { Metadata } from 'next'
import { Bricolage_Grotesque as Bricolage } from 'next/font/google'
import '../globals.css'
import './styles.css'

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.tagline,
  metadataBase: new URL(SITE_CONFIG.url),
}

const bricolage = Bricolage({
  variable: '--font-bricolage',
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html data-scroll-behavior="smooth" lang="fr">
      <TRPCReactProvider>
        <body
          className={`${bricolage.className} antialiased relative text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
        >
          <main className="bg-white">
            <NavBar />
            <div>{children}</div>
            <Footer />
          </main>
          <Toaster richColors position="top-center" />
          <div className="fixed bottom-4 right-6 z-50">
            <ModeToggle />
          </div>
        </body>
      </TRPCReactProvider>
    </html>
  )
}
