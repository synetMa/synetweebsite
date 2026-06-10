import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from '@/i18n/routing'

export const metadata: Metadata = {
  title: 'Blog & Actualités IT',
  description: 'Suivez les actualités de la technologie, de la cybersécurité et du développement web au Maroc.',
}

const posts = [
  {
    title: 'Les certifications cybersécurité les plus demandées en 2026',
    description: 'Découvrez quelles certifications privilégier pour booster votre carrière en sécurité informatique au Maroc.',
    date: '10 Juin 2026',
    category: 'Cybersécurité',
    readTime: '5 min'
  },
  {
    title: 'Pourquoi Power BI est devenu indispensable pour les entreprises marocaines',
    description: 'Comment la business intelligence transforme la prise de décision et comment vous y former efficacement.',
    date: '3 Juin 2026',
    category: 'Data & BI',
    readTime: '4 min'
  },
  {
    title: 'Next.js 16 et le futur du développement Web',
    description: 'Un aperçu des nouvelles fonctionnalités de Next.js et de l impact de React Server Components.',
    date: '28 Mai 2026',
    category: 'Développement Web',
    readTime: '6 min'
  }
]

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h1 className="text-4xl font-bold font-bricolage tracking-tight">Blog & Actualités</h1>
        <p className="text-lg text-muted-foreground">
          Conseils de carrière, tutoriels techniques et actualités de la tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <Card key={idx} className="flex flex-col h-full border border-border/80 bg-card/50 overflow-hidden hover:shadow-md transition-all">
            <CardHeader className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="rounded-full text-xs">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="line-clamp-2 text-xl hover:text-blue-600 transition-colors font-bold font-bricolage">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between">
              <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-6">
                {post.description}
              </CardDescription>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                <span className="text-xs text-muted-foreground">{post.readTime} de lecture</span>
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 gap-1">
                  Lire la suite
                  <ArrowRight className="size-3" />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
