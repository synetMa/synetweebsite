'use client'
// import { Layers2, Share2, ShieldBan, SquareCode } from 'lucide-react'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG, WA_LINK } from '@/lib/siteConfig'
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from './ui/avatar'
import folder from '../public/Folder.png'
import macbook from '../public/iMac.png'
import arrow from '../public/arrow.png'
import Image from 'next/image'
import { motion } from "motion/react"

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
    return (
        <section className="relative overflow-hidden" >
            <div className="pointer-events-none absolute -left-90 translate-x-1/2 blur-3xl -top-20 size-120 rounded-full bg-sky-700/10 " >

            </div>
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
            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-30 text-center mb-32 gap-y-5 ">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-gray-100/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {SITE_CONFIG.tagline}
                </div>


                <h1 className="font-bricolage  text-7xl max-w-lg font-bold leading-[1.08] tracking-tight text-stone-900 md:text-8xl leading-0.9 ">
                    Bienvenue sur{" "}
                    <span className="relative inline-block text-blue-500 ">
                        {SITE_CONFIG.name.toLowerCase()}
                        <span className="absolute bottom-0.5 left-0 right-0 h-0.75 rounded-full " >
                            <Image src={arrow.src} alt="Folder" width={700} height={700} className="h-3" />
                        </span>
                    </span>
                </h1>

                <p className=" max-w-[460px] text-[18px] leading-relaxed text-stone-500">
                    Formez-vous en cybersécurité, réseaux, Excel, Power BI ou développement web — avec des certifications reconnues et un accompagnement à l&apos;emploi.
                </p>

                <AvatarGroup className="mb-10" >
                    {avatars.map((avatar) => (
                        <Avatar key={avatar.name} size="lg">
                            <AvatarImage
                                src={avatar.imageUrl}
                                alt={avatar.name}
                                className=""
                            />
                            <AvatarFallback>{avatar.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                    ))}
                    <AvatarGroupCount>+7</AvatarGroupCount>
                </AvatarGroup>

                {/* CTAs */}
                <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/formations"
                        className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-[#f6f4f2] transition-all hover:-translate-y-px hover:bg-stone-700"
                    >
                        Découvrir les formations
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm dark:bg-white font-medium transition-all hover:-translate-y-px hover:border-black/25 text-black bg-gray-100"
                    >
                        En savoir plus
                    </Link>
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-green-700"
                    >
                        <MessageCircle className="size-4" />
                        WhatsApp
                    </a>
                </div>

                {/* Stats */}
                {/* <div className="mb-12 flex items-center justify-center">
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="flex items-center">
                            <div className="text-center">
                                <div className="font-bricolage text-xl font-bold tracking-tight text-stone-900">
                                    {stat.number}
                                </div>
                                <div className="mt-0.5 text-xs text-stone-400">{stat.label}</div>
                            </div>
                            {i < stats.length - 1 && (
                                <div className="mx-7 h-8 w-px bg-black/10" />
                            )}
                        </div>
                    ))}
                </div> */}

                {/* Course pills */}
                {/* <div className="flex flex-wrap justify-center gap-2">
                    {courses.map((course) => (
                        <div
                            key={course.label}
                            className={cn("flex items-center gap-2 rounded-full border border-black/8 bg-white/60 px-4 py-1.5 text-sm font-medium text-stone-600", course.bg)}
                        >
                            <span className={`flex h-5 w-5 items-center justify-center rounded  text-[10px]`}>
                                {course.icon}
                            </span>
                            {course.label}
                        </div>
                    ))}
                </div> */}

            </div>
        </section>
    )
}

export default Hero