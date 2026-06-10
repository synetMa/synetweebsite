'use client'

import { Link } from '@/i18n/routing'
import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG, WA_LINK } from '@/lib/siteConfig'
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from './ui/avatar'
import folder from '../public/Folder.png'
import macbook from '../public/iMac.png'
import arrow from '../public/arrow.png'
import Image from 'next/image'
import { motion } from "motion/react"
import { useTranslations } from 'next-intl'

const avatars = [
    {
        name: "Alice Johnson",
        imageUrl: "/1.png",
        role: "Designer",
        twitterUrl: "#",
        linkedinUrl: "#"
    },
    {
        name: "Bob Smith",
        imageUrl: "/2.png",
        role: "Developer",
        twitterUrl: "#",
        linkedinUrl: "#"
    },
    {
        name: "Charlie Brown",
        imageUrl: "/3.png",
        role: "Product Manager",
        twitterUrl: "#",
        linkedinUrl: "#"
    },
    {
        name: "Diana Prince",
        imageUrl: "/4.png",
        role: "Marketing Specialist",
        twitterUrl: "#",
        linkedinUrl: "#"
    }
]

const Hero = () => {
    const t = useTranslations('Hero')

    return (
        <section className="relative overflow-hidden bg-background pt-16" >
            {/* Background Blur */}
            <div className="pointer-events-none absolute -left-90 translate-x-1/2 blur-3xl -top-20 size-120 rounded-full bg-blue-500/10 dark:bg-blue-500/5" />
            <div className="pointer-events-none absolute right-0 translate-x-1/3 blur-3xl top-40 size-100 rounded-full bg-purple-500/10 dark:bg-purple-500/5" />

            <motion.div
                className="hidden md:block pointer-events-none absolute bottom-20 left-80 h-175 w-70 rounded-full"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                {folder && <Image src={folder.src} alt="Folder" width={700} height={700} />}
            </motion.div>

            <motion.div
                className="hidden md:block pointer-events-none absolute -bottom-100 right-100 h-175 w-70 rounded-full z-5"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
                {macbook && <Image src={macbook.src} alt="Macbook" width={700} height={700} />}
            </motion.div>

            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center mb-16 gap-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                    {t('badge')}
                </div>

                <h1 className="font-bricolage text-5xl md:text-7xl max-w-xl font-bold leading-[1.1] tracking-tight text-foreground">
                    {t('title1')}{" "}
                    <span className="relative inline-block text-blue-600 dark:text-blue-400">
                        {t('title2')}
                        <span className="absolute bottom-0.5 left-0 right-0 h-1 rounded-full overflow-hidden" >
                            <Image src={arrow.src} alt="Arrow decoration" width={700} height={700} className="h-3 w-full object-cover opacity-80" />
                        </span>
                    </span>
                </h1>

                <p className="max-w-[500px] text-lg leading-relaxed text-muted-foreground">
                    {t('description')}
                </p>

                <AvatarGroup className="mb-4" >
                    {avatars.map((avatar) => (
                        <Avatar key={avatar.name} size="lg" className="border-2 border-background shadow-sm">
                            <AvatarImage
                                src={avatar.imageUrl}
                                alt={avatar.name}
                            />
                            <AvatarFallback>{avatar.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                    ))}
                    <AvatarGroupCount className="border-2 border-background font-semibold text-xs">+7</AvatarGroupCount>
                </AvatarGroup>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/formations"
                        className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                        {t('cta_discover')}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 hover:bg-muted/80 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
                    >
                        {t('cta_more')}
                    </Link>
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <MessageCircle className="size-4 fill-current text-white" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero