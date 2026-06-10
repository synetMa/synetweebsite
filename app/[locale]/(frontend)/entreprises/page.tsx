import { SITE_CONFIG, waCorporateDevis } from '@/lib/siteConfig'
import type { Metadata } from 'next'
import { Building2, Award, Users, ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Formations Entreprises (B2B)',
  description: `Formations sur-mesure et sur site pour vos équipes à Casablanca avec ${SITE_CONFIG.name}.`,
}

export default function CorporatePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <Badge variant="secondary" className="px-3 py-1 text-sm rounded-full">
          Pour les Entreprises (B2B)
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-bricolage tracking-tight">
          Accélérez la montée en compétences de vos équipes
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Formations intra-entreprise sur-mesure à Casablanca et dans tout le Maroc. Des programmes adaptés à vos objectifs et animés par des experts seniors.
        </p>
        <div className="pt-4 flex justify-center gap-4 flex-wrap">
          <a
            href={waCorporateDevis()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
              Demander un devis
              <ArrowRight className="size-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Trust & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <Card className="border-none shadow-sm bg-muted/30">
          <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
              <Building2 className="size-6" />
            </div>
            <h3 className="font-bold text-lg">Format flexible</h3>
            <p className="text-sm text-muted-foreground">Dans nos locaux tout équipés au Maârif ou directement au sein de votre entreprise.</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-muted/30">
          <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
              <Award className="size-6" />
            </div>
            <h3 className="font-bold text-lg">Sur-mesure</h3>
            <p className="text-sm text-muted-foreground">Contenus et exercices adaptés à vos technologies et à vos cas d&apos;usage réels.</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-muted/30">
          <CardContent className="pt-6 flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
              <Users className="size-6" />
            </div>
            <h3 className="font-bold text-lg">Suivi post-formation</h3>
            <p className="text-sm text-muted-foreground">Accompagnement continu de vos collaborateurs pour assurer le transfert des compétences.</p>
          </CardContent>
        </Card>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-bricolage">Nos domaines d&apos;intervention B2B</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 flex items-center justify-center size-5 rounded-full bg-blue-600/10 text-blue-600">
                <Star className="size-3 fill-current" />
              </div>
              <div>
                <h4 className="font-bold">Cybersécurité & Réseaux</h4>
                <p className="text-sm text-muted-foreground">Sensibilisation, sécurité défensive (Blue Team), administration systèmes & réseaux.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 flex items-center justify-center size-5 rounded-full bg-blue-600/10 text-blue-600">
                <Star className="size-3 fill-current" />
              </div>
              <div>
                <h4 className="font-bold">Développement d&apos;applications</h4>
                <p className="text-sm text-muted-foreground">Next.js, Tailwind CSS, TypeScript, architectures modernes et pratiques devops.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 flex items-center justify-center size-5 rounded-full bg-blue-600/10 text-blue-600">
                <Star className="size-3 fill-current" />
              </div>
              <div>
                <h4 className="font-bold">Bureautique avancée & Data</h4>
                <p className="text-sm text-muted-foreground">Excel expert, automatisation VBA, Power BI, SQL et outils collaboratifs.</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="border border-border/80 dark:bg-card">
          <CardHeader>
            <CardTitle>Discutons de votre projet</CardTitle>
            <CardDescription>
              Nous vous recontactons sous 24h avec une proposition adaptée.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                🚀 <strong>Besoin rapide ?</strong> Contactez directement notre responsable B2B par WhatsApp au <strong>{SITE_CONFIG.whatsappDisplay}</strong> ou par email à <strong>{SITE_CONFIG.email}</strong>.
              </p>
            </div>
            <div className="pt-2 flex justify-center">
              <a
                href={waCorporateDevis()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full rounded-full bg-stone-900 dark:bg-white dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-100">
                  Contacter par WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
