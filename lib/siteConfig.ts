// ═══════════════════════════════════════════════════════════════════════
// SYNET — Site Configuration
// All business contact info, addresses, and social links live here.
// Update EVERY value marked with TODO before going live.
// ═══════════════════════════════════════════════════════════════════════

export const SITE_CONFIG = {
  // ── Identity ────────────────────────────────────────────────────────
  name: "SYNET",
  legalName: "SYNET Technologies SARL", // TODO: confirm legal entity name
  tagline: "Centre de formation IT à Casablanca",
  url: "https://synet.ma", // TODO: replace with real domain

  // ── Contact ─────────────────────────────────────────────────────────
  email: "contact@synet.ma", // TODO: replace with real address
  // Phone — Morocco format. Used in tel: links (no spaces) and display.
  phone: "+212 6 30 09 74 63",
  phoneE164: "+212630097463",
  // WhatsApp — number only, no +, no spaces. Used in wa.me/ links.
  whatsapp: "212774715299",
  whatsappDisplay: "+212 7 74 71 52 99",
  /** @deprecated Use WA_INSCRIPTION_LINK / WA_DEVIS_LINK from @/lib/whatsapp */
  whatsappMessage:
    "Bonjour SYNET, je souhaite avoir des informations sur vos formations.",

  // ── Legal (Morocco) — update with your real registry data ───────────
  legal: {
    rc: "RC XXXXX",           // Registre de commerce
    ice: "ICE XXXXXXXXXXXXX", // Identifiant Commun de l'Entreprise
    if: "IF XXXXXXX",         // Identifiant fiscal
    trainingAuth: "",         // N° agrément formation (if applicable)
  },

  cataloguePdf: "/catalogue-synet-2026.pdf", // PDF in /public — optional

  // ── Location ────────────────────────────────────────────────────────
  address: {
    street: "XX, Rue XXXXXXX",         // TODO: replace with real street
    neighborhood: "Maârif",            // TODO: confirm neighbourhood
    city: "Casablanca",
    region: "Grand Casablanca",
    country: "Maroc",
    countryCode: "MA",
    postalCode: "20000",               // TODO: confirm postal code
    full: "XX Rue XXXXXXX, Maârif, Casablanca 20000, Maroc", // TODO: full address
  },
  // Paste the Google Maps iframe src= value here (from maps.google.com → Share → Embed)
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Casablanca,Maroc&output=embed", // TODO: replace
  googleMapsLink:
    "https://maps.google.com/?q=SYNET+Casablanca",                  // TODO: replace

  // ── Hours ───────────────────────────────────────────────────────────
  hours: "Lun – Sam · 8h30 – 18h00",
  hoursNote: "WhatsApp répondu en moins de 2h en heures ouvrées",

  // ── Social ──────────────────────────────────────────────────────────
  social: {
    linkedin:  "https://linkedin.com/company/synet-ma",  // TODO: replace
    instagram: "https://instagram.com/synet.ma",         // TODO: replace
    facebook:  "https://facebook.com/synet.ma",          // TODO: replace
    youtube:   "https://youtube.com/@synet-ma",          // TODO: replace
  },

  // ── Class size ──────────────────────────────────────────────────────
  maxGroupSize: "8",  // TODO: confirm real max students per group

  // ── Key Numbers ─────────────────────────────────────────────────────
  // Keep these in sync with Stats.tsx and structured data
  stats: {
    yearsActive:    "12+",
    graduates:      "500+",  // TODO: confirm real number
    placementRate:  "92%",   // TODO: confirm real metric
    partners:       "30+",   // TODO: confirm real number of hiring partners
  },

  // ── Geo (for JSON-LD / meta) ─────────────────────────────────────────
  geo: {
    lat:    "33.5731",  // Casablanca approx — TODO: use real coordinates
    lng:    "-7.5898",
    region: "MA-05",
  },

  // ── Email Notifications (set via environment variables) ─────────────
  // RESEND_API_KEY  — get from resend.com (free tier = 3k emails/month)
  // NOTIFY_EMAIL    — where form submissions are forwarded
} as const;

// Phone / email helpers
export const TEL_LINK = `tel:${SITE_CONFIG.phoneE164}`;
export const MAIL_LINK = `mailto:${SITE_CONFIG.email}`;

// ── WhatsApp (inscription & devis — canal principal) ─────────────────
export const WA_MESSAGES = {
  default:
    "Bonjour SYNET, je souhaite avoir des informations sur vos formations à Casablanca.",
  inscription:
    "Bonjour SYNET,\n\nJe souhaite m'inscrire à une formation.\nMerci de m'indiquer : formation souhaitée, prochaine date, tarif et modalités d'inscription.\n\nMerci.",
  devis:
    "Bonjour SYNET,\n\nJe souhaite demander un devis (formation en entreprise ou particulier).\nMerci de me recontacter avec les détails.\n\nMerci.",
  visite:
    "Bonjour SYNET,\n\nJe souhaite visiter votre centre à Casablanca avant de m'inscrire.\nQuelles sont vos disponibilités ?\n\nMerci.",
} as const;

export function buildWaLink(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_LINK = buildWaLink(WA_MESSAGES.default);
export const WA_INSCRIPTION_LINK = buildWaLink(WA_MESSAGES.inscription);
export const WA_DEVIS_LINK = buildWaLink(WA_MESSAGES.devis);
export const WA_VISITE_LINK = buildWaLink(WA_MESSAGES.visite);

export function waProgramLink(programTitle: string): string {
  return buildWaLink(
    `Bonjour SYNET,\n\nJe suis intéressé(e) par la formation : ${programTitle}.\nMerci de m'envoyer les informations (dates, tarif, inscription).\n\nMerci.`
  );
}

export function waCorporateDevis(company?: string): string {
  const extra = company ? `\nEntreprise : ${company}` : "";
  return buildWaLink(
    `Bonjour SYNET,\n\nJe souhaite un devis pour une formation en entreprise.${extra}\nNombre de participants, formation souhaitée et dates approximatives :\n\nMerci de me recontacter.`
  );
}