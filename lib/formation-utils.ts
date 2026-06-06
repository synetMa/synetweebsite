export const LEVEL_LABELS: Record<string, string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
};

export const statusConfig = {
  open: { dot: '#639922', text: 'Inscriptions ouvertes', textColor: '#3B6D11', label: "S'inscrire" },
  'almost-full': { dot: '#BA7517', text: 'Bientôt complet', textColor: '#854F0B', label: "S'inscrire" },
  full: { dot: '#E24B4A', text: 'Complet — liste d\'attente', textColor: '#A32D2D', label: "Liste d'attente" },
} as const;

export type FormationStatus = keyof typeof statusConfig;

export function getStatusConfig(status?: string | null) {
  if (status && status in statusConfig) {
    return statusConfig[status as FormationStatus];
  }
  return statusConfig.open;
}

export function formatFormationDate(date?: string | null): string {
  if (!date) return 'Date à confirmer';
  return date.slice(0, 10);
}

export function getLevelLabel(level?: string | null): string {
  if (!level) return '—';
  return LEVEL_LABELS[level] ?? level;
}
