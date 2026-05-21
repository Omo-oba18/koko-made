// ─── Shared Domain Types ──────────────────────────────────────────────────────

export interface StylistStat {
    value: string;
    label: string;
}

export interface StylistContact {
    email: string;
    phone: string;
    whatsapp: string;
    whatsappMessage: string;
    location: string;
    studio: string;
}

export interface StylistSocial {
    instagram: string;
    pinterest: string;
    linkedin: string;
}

export interface EmailJSConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
}

export interface Stylist {
    name: string;
    nameFirst: string;
    nameLast: string;
    title: string;
    titleEn: string;
    tagline: string;
    taglineEn: string;
    shortBio: string;
    fullBio: string[];
    stats: StylistStat[];
    press: string[];
    contact: StylistContact;
    social: StylistSocial;
    emailjs: EmailJSConfig;
}

export interface Collection {
    id: string;
    title: string;
    season: string;
    client: string;
    category: string;
    description: string;
    coverImage: string;
    images: string[];
    featured: boolean;
    tags: string[];
    year: number;
}

export type EventType =
    | 'Défilé Gala'
    | 'Présentation Collection'
    | 'Défilé Privé'
    | 'Gala de Mode'
    | 'Lancement de Collection';

export interface FashionEvent {
    id: string;
    title: string;
    venue: string;
    location: string;
    date: string;
    type: EventType;
    role: string;
    description: string;
    highlights: string[];
    coverImage: string;
    images: string[];
    featured: boolean;
    tag: string;
}

export type GallerySize = 'tall' | 'wide' | 'square';

export interface GalleryItem {
    id: string;
    src: string;
    alt: string;
    caption: string;
    category: string;
    size: GallerySize;
    year: number;
}