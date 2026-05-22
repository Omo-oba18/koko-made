import type { GalleryItem } from './types';

// ─── Gallery Static Data ──────────────────────────────────────────────────────
// 29 photos réparties en 5 événements :
//
//  g-01 → g-02   Soutenance de fin de formation     (2 photos)
//  g-03 → g-04   Designer Académie                  (2 photos)
//  g-05 → g-07   SNAB — Tissu Indigo                (3 photos)
//  g-08 → g-10   FESMMA                             (3 photos)
//  g-11 → g-29   Chiganvy Talent Show               (19 photos)
//
// Fichiers à placer dans : /public/assets/images/gallery/
// Format recommandé : JPG ou WebP, min. 1200px sur le grand côté.

export const GALLERY_ITEMS: GalleryItem[] = [

  // ── Soutenance de fin de formation ───────────────────────────────
  {
    id: 'g-01',
    src: '/assets/images/gallery/g-01.jpg',
    alt: 'Soutenance de fin de formation — Collection diplôme indigo, Madeleine Koko',
    caption: 'Soutenance — Collection Diplôme',
    category: 'Formation',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-02',
    src: '/assets/images/gallery/g-02.jpg',
    alt: 'Soutenance de fin de formation — Présentation devant jury, Madeleine Koko',
    caption: 'Soutenance — Jury',
    category: 'Formation',
    size: 'wide',
    year: 2024,
  },

  // ── Designer Académie ─────────────────────────────────────────────
  {
    id: 'g-03',
    src: '/assets/images/gallery/g-03.jpg',
    alt: 'Designer Académie — Atelier de création, Madeleine Koko',
    caption: 'Designer Académie — Atelier',
    category: 'Formation',
    size: 'square',
    year: 2024,
  },
  {
    id: 'g-04',
    src: '/assets/images/gallery/g-04.jpg',
    alt: 'Designer Académie — Présentation de pièce, Madeleine Koko',
    caption: 'Designer Académie — Présentation',
    category: 'Formation',
    size: 'tall',
    year: 2024,
  },

  // ── SNAB — Salon National des Artisans du Bénin ───────────────────
  {
    id: 'g-05',
    src: '/assets/images/gallery/g-05.jpg',
    alt: 'SNAB — Création tissu indigo du Bénin, Madeleine Koko',
    caption: 'SNAB — Indigo I',
    category: 'Salon',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-06',
    src: '/assets/images/gallery/g-06.jpg',
    alt: 'SNAB — Détail tissu indigo traditionnel béninois, Madeleine Koko',
    caption: 'SNAB — Indigo II',
    category: 'Salon',
    size: 'square',
    year: 2024,
  },
  {
    id: 'g-07',
    src: '/assets/images/gallery/g-07.jpg',
    alt: 'SNAB — Silhouette en tissu indigo, Salon National des Artisans du Bénin',
    caption: 'SNAB — Indigo III',
    category: 'Salon',
    size: 'wide',
    year: 2024,
  },

  // ── FESMMA ────────────────────────────────────────────────────────
  {
    id: 'g-08',
    src: '/assets/images/gallery/g-08.jpg',
    alt: 'FESMMA — Présentation de création, Festival de la Mode et des Métiers d\'Art',
    caption: 'FESMMA — Création I',
    category: 'Festival',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-09',
    src: '/assets/images/gallery/g-09.jpg',
    alt: 'FESMMA — Défilé et mise en scène, Madeleine Koko',
    caption: 'FESMMA — Création II',
    category: 'Festival',
    size: 'wide',
    year: 2024,
  },
  {
    id: 'g-10',
    src: '/assets/images/gallery/g-10.jpg',
    alt: 'FESMMA — Look complet en création originale, Madeleine Koko',
    caption: 'FESMMA — Création III',
    category: 'Festival',
    size: 'square',
    year: 2024,
  },

  // ── Chiganvy Talent Show — 19 photos ─────────────────────────────
  {
    id: 'g-11',
    src: '/assets/images/gallery/g-11.jpg',
    alt: 'Chiganvy Talent Show — Ouverture du défilé, Madeleine Koko',
    caption: 'Chiganvy — Ouverture',
    category: 'Défilé',
    size: 'wide',
    year: 2024,
  },
  {
    id: 'g-12',
    src: '/assets/images/gallery/g-12.jpg',
    alt: 'Chiganvy Talent Show — Look 1, silhouette structurée',
    caption: 'Chiganvy — Look 01',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-13',
    src: '/assets/images/gallery/g-13.jpg',
    alt: 'Chiganvy Talent Show — Look 2, drapé contemporain',
    caption: 'Chiganvy — Look 02',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-14',
    src: '/assets/images/gallery/g-14.jpg',
    alt: 'Chiganvy Talent Show — Look 3, pièce en tissu africain',
    caption: 'Chiganvy — Look 03',
    category: 'Défilé',
    size: 'square',
    year: 2024,
  },
  {
    id: 'g-15',
    src: '/assets/images/gallery/g-15.jpg',
    alt: 'Chiganvy Talent Show — Look 4, coupe architecturale',
    caption: 'Chiganvy — Look 04',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-16',
    src: '/assets/images/gallery/g-16.jpg',
    alt: 'Chiganvy Talent Show — Look 5, création originale Koko Made',
    caption: 'Chiganvy — Look 05',
    category: 'Défilé',
    size: 'wide',
    year: 2024,
  },
  {
    id: 'g-17',
    src: '/assets/images/gallery/g-17.jpg',
    alt: 'Chiganvy Talent Show — Look 6',
    caption: 'Chiganvy — Look 06',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-18',
    src: '/assets/images/gallery/g-18.jpg',
    alt: 'Chiganvy Talent Show — Look 7, finitions soignées',
    caption: 'Chiganvy — Look 07',
    category: 'Défilé',
    size: 'square',
    year: 2024,
  },
  {
    id: 'g-19',
    src: '/assets/images/gallery/g-19.jpg',
    alt: 'Chiganvy Talent Show — Look 8',
    caption: 'Chiganvy — Look 08',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-20',
    src: '/assets/images/gallery/g-20.jpg',
    alt: 'Chiganvy Talent Show — Look 9, milieu de défilé',
    caption: 'Chiganvy — Look 09',
    category: 'Défilé',
    size: 'wide',
    year: 2024,
  },
  {
    id: 'g-21',
    src: '/assets/images/gallery/g-21.jpg',
    alt: 'Chiganvy Talent Show — Look 10',
    caption: 'Chiganvy — Look 10',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-22',
    src: '/assets/images/gallery/g-22.jpg',
    alt: 'Chiganvy Talent Show — Look 11, textures et matières',
    caption: 'Chiganvy — Look 11',
    category: 'Défilé',
    size: 'square',
    year: 2024,
  },
  {
    id: 'g-23',
    src: '/assets/images/gallery/g-23.jpg',
    alt: 'Chiganvy Talent Show — Look 12',
    caption: 'Chiganvy — Look 12',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-24',
    src: '/assets/images/gallery/g-24.jpg',
    alt: 'Chiganvy Talent Show — Look 13, pièce de soirée',
    caption: 'Chiganvy — Look 13',
    category: 'Défilé',
    size: 'wide',
    year: 2024,
  },
  {
    id: 'g-25',
    src: '/assets/images/gallery/g-25.jpg',
    alt: 'Chiganvy Talent Show — Look 14',
    caption: 'Chiganvy — Look 14',
    category: 'Défilé',
    size: 'tall',
    year: 2024,
  },
  {
    id: 'g-26',
    src: '/assets/images/gallery/g-26.jpg',
    alt: 'Chiganvy Talent Show — Look 15, détail broderie',
    caption: 'Chiganvy — Look 15',
    category: 'Défilé',
    size: 'square',
    year: 2024,
  },
];

export const GALLERY_CATEGORIES: string[] = [
  'Tous',
  'Défilé',
  'Salon',
  'Festival',
  'Formation',
];