import type { FashionEvent, EventType } from './types';

export const EVENTS: FashionEvent[] = [
  {
    id: 'chiganvy-talent-show',
    title: 'Chiganvy Talent Show',
    venue: 'Chiganvy — Scène principale',
    location: 'Cotonou, Bénin',
    date: '2024',
    type: 'Défilé Gala',
    role: 'Styliste-Modéliste — Créations originales en défilé',
    description: `Le Chiganvy Talent Show est l'une des scènes mode les plus fédératrices
du Bénin. Madeleine Koko y présente dix-neuf looks qui révèlent l'étendue
de son vocabulaire créatif : des pièces structurées, des matières mêlées,
des silhouettes qui parlent d'une femme contemporaine ancrée dans sa culture.
Un défilé qui marque un tournant dans son parcours.`,
    highlights: [
      '19 looks originaux présentés en défilé',
      'Créations entièrement conçues et réalisées par Madeleine Koko',
      'Forte présence scénique et identité visuelle marquée',
      'Reconnaissance du public et des professionnels présents',
    ],
    coverImage: '/assets/images/events/chiganvy-cover.jpg',
    images: [
      '/assets/images/events/chiganvy-01.jpg',
      '/assets/images/events/chiganvy-02.jpg',
      '/assets/images/events/chiganvy-03.jpg',
    ],
    featured: true,
    tag: 'Défilé — Cotonou',
  },
  {
    id: 'snab-indigo',
    title: 'Salon National des Artisans du Bénin',
    venue: 'SNAB — Pavillon Mode',
    location: 'Cotonou, Bénin',
    date: '2024',
    type: 'Présentation Collection',
    role: 'Créatrice exposante — Collection tissu indigo',
    description: `Le Salon National des Artisans du Bénin (SNAB) est la plus grande vitrine
de l'artisanat béninois. Madeleine Koko y expose une collection de créations
en tissu indigo traditionnel, valorisant le savoir-faire des teinturiers
locaux dans des pièces contemporaines. Une rencontre entre héritage et modernité
qui attire l'attention des visiteurs, acheteurs et médias présents.`,
    highlights: [
      'Collection 3 pièces en tissu indigo du Bénin',
      'Dialogue entre artisanat traditionnel et coupe contemporaine',
      'Rencontres avec acheteurs et professionnels du secteur',
      'Valorisation des artisans teinturiers béninois',
    ],
    coverImage: '/assets/images/events/snab-cover.jpg',
    images: [
      '/assets/images/events/snab-01.jpg',
      '/assets/images/events/snab-02.jpg',
      '/assets/images/events/snab-03.jpg',
    ],
    featured: true,
    tag: 'Salon Artisanat — Bénin',
  },
  {
    id: 'fesmma',
    title: 'FESMMA',
    venue: 'Festival de la Mode et des Métiers d\'Art',
    location: 'Bénin',
    date: '2024',
    type: 'Gala de Mode',
    role: 'Styliste participante — Présentation de créations',
    description: `Le FESMMA est un festival dédié à la mode et aux métiers d'art qui rassemble
créateurs, artisans et passionnés autour d'une vision commune : promouvoir
l'excellence du made in Bénin. Madeleine Koko y présente ses créations et
confirme sa place parmi les voix émergentes de la mode béninoise, avec des
pièces qui allient maîtrise technique et sensibilité artistique.`,
    highlights: [
      'Présentation de 3 créations sélectionnées',
      'Visibilité auprès du public mode béninois',
      'Échanges avec d\'autres créateurs et artisans',
      'Couverture par les médias locaux spécialisés mode',
    ],
    coverImage: '/assets/images/events/fesmma-cover.jpg',
    images: [
      '/assets/images/events/fesmma-01.jpg',
      '/assets/images/events/fesmma-02.jpg',
      '/assets/images/events/fesmma-03.jpg',
    ],
    featured: true,
    tag: 'Festival Mode — Bénin',
  },
  {
    id: 'soutenance-formation',
    title: 'Soutenance de Fin de Formation',
    venue: 'École de stylisme-modélisme',
    location: 'Cotonou, Bénin',
    date: '2024',
    type: 'Présentation Collection',
    role: 'Diplômée — Présentation de collection de fin de formation',
    description: `La soutenance de fin de formation est le moment charnière où Madeleine Koko
présente officiellement sa collection diplôme devant un jury de professionnels.
Deux photos témoignent de cet instant décisif : la collection autour du tissu
indigo béninois reçoit un accueil chaleureux et confirme une maîtrise technique
et une vision artistique déjà abouties.`,
    highlights: [
      'Collection diplôme autour du tissu indigo du Bénin',
      'Présentation devant jury de professionnels',
      'Validation des compétences en patronage et confection',
      'Premier jalon officiel du parcours professionnel',
    ],
    coverImage: '/assets/images/events/soutenance-cover.jpg',
    images: [
      '/assets/images/events/soutenance-01.jpg',
      '/assets/images/events/soutenance-02.jpg',
    ],
    featured: false,
    tag: 'Diplôme — Formation',
  },
  {
    id: 'designer-academie',
    title: 'Designer Académie',
    venue: 'Designer Académie',
    location: 'Bénin',
    date: '2024',
    type: 'Lancement de Collection',
    role: 'Étudiante créatrice — Programme intensif stylisme',
    description: `La Designer Académie est un programme de formation qui accompagne les
créateurs béninois dans le développement de leur identité et de leurs
compétences. Madeleine Koko y affine sa technique et structure son univers
créatif. Les deux photos issues de ce programme montrent une créatrice
en pleine construction, déjà consciente de sa singularité.`,
    highlights: [
      'Programme intensif en stylisme et modélisme',
      'Développement de l\'identité créative',
      'Maîtrise approfondie du patronage et de la confection',
      'Intégration dans un réseau de créateurs béninois',
    ],
    coverImage: '/assets/images/events/academie-cover.jpg',
    images: [
      '/assets/images/events/academie-01.jpg',
      '/assets/images/events/academie-02.jpg',
    ],
    featured: false,
    tag: 'Formation — Académie',
  },
];

export const EVENT_TYPES: string[] = [
  'Tous',
  'Défilé Gala',
  'Présentation Collection',
  'Gala de Mode',
  'Lancement de Collection',
] satisfies (string | EventType)[];