import Link from 'next/link'
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, WA_INSCRIPTION_LINK, WA_DEVIS_LINK, TEL_LINK, MAIL_LINK } from "@/lib/siteConfig";

const footerLinks = {
    Formations: [
        { label: "Catalogue des formations", href: "/formations" },
    ],
    Entreprises: [
        { label: "Formation en entreprise", href: "/contact" },
        { label: "Demander un devis", href: "/contact" },
    ],
    SYNET: [
        { label: "À propos", href: "/about" },
        { label: "Notre équipe", href: "/about#team" },
        { label: "S'inscrire en ligne", href: "/inscription" },
        { label: "WhatsApp", href: WA_INSCRIPTION_LINK, external: true },
        { label: "Contact", href: "/contact" },
    ],
    Légal: [
        { label: "Politique de confidentialité", href: "/privacy" },
        { label: "Conditions d'utilisation", href: "/terms" },
    ],
};

export default function Footer() {
    const { legal } = SITE_CONFIG;

    return (
        <footer className="bg-slate-900 text-white" role="contentinfo">
            <div className="max-w-7xl mx-auto pt-14 pb-10 md:pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2">
                        {/* <Logo variant="light" size="md" className="mb-4" /> */}
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-body mb-6">
                            {SITE_CONFIG.legalName} — centre de formation informatique à Casablanca.
                            Présentiel, certifications, accompagnement professionnel.
                        </p>

                        <div className="space-y-2.5 text-[13px] font-body">
                            <a href={MAIL_LINK} className="flex items-center gap-2 text-slate-400 hover:text-white">
                                <Mail size={14} className="text-blue flex-shrink-0" />
                                {SITE_CONFIG.email}
                            </a>
                            <a href={TEL_LINK} className="flex items-center gap-2 text-slate-400 hover:text-white">
                                <Phone size={14} className="text-blue flex-shrink-0" />
                                Téléphone : {SITE_CONFIG.phone}
                            </a>
                            <a
                                href={WA_INSCRIPTION_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[#4ade80] hover:text-[#86efac] font-semibold"
                            >
                                WhatsApp inscription : {SITE_CONFIG.whatsappDisplay}
                            </a>
                            <a
                                href={WA_DEVIS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white text-[13px]"
                            >
                                Demander un devis sur WhatsApp
                            </a>
                            <a
                                href={SITE_CONFIG.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 text-slate-400 hover:text-white"
                            >
                                <MapPin size={14} className="text-blue flex-shrink-0 mt-0.5" />
                                {SITE_CONFIG.address.full}
                            </a>
                            <p className="text-slate-500 pt-1">{SITE_CONFIG.hours}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-3 font-body">
                                    {title}
                                </h3>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            {'external' in link && link.external ? (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[13px] text-slate-400 hover:text-white font-body"
                                                >
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-[13px] text-slate-400 hover:text-white font-body"
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {(legal.rc || legal.ice) && (
                    <div className="mt-10 pt-6 border-t border-slate-800 text-[12px] text-slate-500 font-body space-y-1">
                        {legal.rc && <p>RC : {legal.rc}</p>}
                        {legal.ice && <p>ICE : {legal.ice}</p>}
                        {legal.if && <p>IF : {legal.if}</p>}
                        {legal.trainingAuth && <p>Agrément formation : {legal.trainingAuth}</p>}
                    </div>
                )}
            </div>

            <div className="border-t border-slate-800">
                <div className="container-wide py-4 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-slate-600 font-body">
                    <p>
                        © {new Date().getFullYear()} {SITE_CONFIG.legalName} — {SITE_CONFIG.address.city},{" "}
                        {SITE_CONFIG.address.country}
                    </p>
                    <p>{SITE_CONFIG.hoursNote}</p>
                </div>
            </div>
        </footer>
    );
}