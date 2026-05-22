import type { Collection } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'indigo-racines',
    title: 'Indigo & Racines',
    season: 'Collection Diplôme 2024',
    client: 'Soutenance de fin de formation',
    category: 'Collection Diplôme',
    description: `Collection de fin de formation construite autour du tissu indigo du Bénin.
Chaque pièce dialogue entre la tradition des teinturiers de l'Atacora et une
coupe résolument contemporaine. L'indigo, symbole de profondeur et de sagesse,
structure des silhouettes sobres et fortes qui témoignent d'un savoir-faire
maîtrisé et d'une vision artistique affirmée.`,
    coverImage: '/assets/images/collections/indigo-racines-cover.jpg',
    images: [
      '/assets/images/collections/indigo-racines-01.jpg',
      '/assets/images/collections/indigo-racines-02.jpg',
    ],
    featured: true,
    tags: ['Indigo', 'Diplôme', 'Artisanat', 'Bénin'],
    year: 2024,
  },
  {
    id: 'snab-indigo',
    title: 'Tissu Indigo — SNAB',
    season: 'Salon National des Artisans du Bénin',
    client: 'SNAB — Cotonou',
    category: 'Exposition',
    description: `Présentation au Salon National des Artisans du Bénin d'une série de créations
entièrement réalisées en tissu indigo traditionnel. Un hommage aux artisans
béninois qui perpétuent l'art de la teinture naturelle, réinterprété à travers
des pièces portables, élégantes et ancrées dans le présent.`,
    coverImage: '/assets/images/collections/snab-indigo-cover.jpg',
    images: [
      '/assets/images/collections/snab-indigo-01.jpg',
      '/assets/images/collections/snab-indigo-02.jpg',
      '/assets/images/collections/snab-indigo-03.jpg',
    ],
    featured: true,
    tags: ['SNAB', 'Indigo', 'Artisanat', 'Exposition'],
    year: 2024,
  },
  {
    id: 'chiganvy-scene',
    title: 'Chiganvy — En Scène',
    season: 'Chiganvy Talent Show',
    client: 'Chiganvy Talent Show',
    category: 'Défilé',
    description: `Vingt-deux regards sur une mode béninoise vivante, portée sur scène lors du
Chiganvy Talent Show. Dix-neuf photos qui capturent l'énergie du défilé, la
précision des finitions et l'audace des silhouettes. Un tournant dans le
parcours de Madeleine Koko : ses pièces ne sont plus seulement vues, elles
sont ressenties.`,
    coverImage: '/assets/images/collections/chiganvy-cover.jpg',
    images: [
      '/assets/images/collections/chiganvy-01.jpg',
      '/assets/images/collections/chiganvy-02.jpg',
      '/assets/images/collections/chiganvy-03.jpg',
      '/assets/images/collections/chiganvy-04.jpg',
      '/assets/images/collections/chiganvy-05.jpg',
    ],
    featured: true,
    tags: ['Défilé', 'Scène', 'Chiganvy', 'Cotonou'],
    year: 2024,
  },
  {
    id: 'fesmma-creation',
    title: 'FESMMA — Création',
    season: 'Festival FESMMA',
    client: 'FESMMA',
    category: 'Festival',
    description: `Participation au FESMMA (Festival de la Mode et des Métiers d'Art) avec une
sélection de pièces qui explorent la rencontre entre les textiles traditionnels
béninois et les codes du prêt-à-porter contemporain. Une vitrine internationale
pour un savoir-faire profondément local.`,
    coverImage: '/assets/images/collections/fesmma-cover.jpg',
    images: [
      '/assets/images/collections/fesmma-01.jpg',
      '/assets/images/collections/fesmma-02.jpg',
      '/assets/images/collections/fesmma-03.jpg',
    ],
    featured: false,
    tags: ['FESMMA', 'Festival', 'Mode', 'Bénin'],
    year: 2024,
  },
  {
    id: 'designer-academie',
    title: 'Designer Académie',
    season: 'Programme Designer Académie',
    client: 'Designer Académie',
    category: 'Formation',
    description: `Travaux réalisés dans le cadre de la Designer Académie — un programme intensif
qui forge les créateurs de demain. Madeleine y développe sa rigueur technique,
son sens du patronage et une approche plus architecturale de la silhouette,
tout en approfondissant son identité stylistique propre.`,
    coverImage: '/assets/images/collections/academie-cover.jpg',
    images: [
      '/assets/images/collections/academie-01.jpg',
      '/assets/images/collections/academie-02.jpg',
    ],
    featured: false,
    tags: ['Formation', 'Académie', 'Technique', 'Stylisme'],
    year: 2024,
  },
];

export const COLLECTION_CATEGORIES: string[] = [
  'Tous',
  'Collection Diplôme',
  'Exposition',
  'Défilé',
  'Festival',
  'Formation',
];