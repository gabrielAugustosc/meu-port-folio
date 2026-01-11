export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0drhun8',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_7m39ygc',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'PwGe_ip1O50AKW7TY',
} as const;

export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  progressBar: 1,
} as const;

export const ANIMATION_DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
} as const;

export const SECTION_IDS = {
  hero: 'hero',
  about: 'sobre',
  projects: 'projetos',
  skills: 'habilidades',
  contact: 'contato',
} as const;

export const SUCCESS_MESSAGE_DURATION = 5000;
