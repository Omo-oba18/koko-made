// ─── Events & Fashion Shows Static Data ──────────────────────────────────────
// Images: place your photos in /public/assets/images/events/

import { FashionEvent } from "./types";

export const EVENTS : FashionEvent[] = [
  {
    id: "gala-ritz-2024",
    title: "Gala Couture — Automne 2024",
    venue: "Hôtel Ritz Paris",
    location: "Place Vendôme, Paris",
    date: "Octobre 2024",
    type: "Défilé Gala",
    role: "Direction Artistique & Stylisme Complet",
    description: `Un défilé intime pour dix maisons de couture dans la Grande Galerie du
    Ritz Paris. Quarante looks, une mise en scène épurée baignée de lumière
    dorée. L'événement était réservé aux acheteurs et presse internationale.`,
    highlights: [
      "12 créateurs invités",
      "200 guests presse & acheteurs",
      "Couverture Vogue France & Harper's Bazaar",
      "Direction artistique complète : scénographie, casting, styling",
    ],
    coverImage: "/assets/images/events/gala-ritz-cover.jpg",
    images: [
      "/assets/images/events/gala-ritz-01.jpg",
      "/assets/images/events/gala-ritz-02.jpg",
      "/assets/images/events/gala-ritz-03.jpg",
    ],
    featured: true,
    tag: "Paris Fashion Week",
  },
  {
    id: "soiree-plaza-milan",
    title: "Soirée Capsule — Printemps 2024",
    venue: "Four Seasons Hotel Milano",
    location: "Via Gesù, Milan",
    date: "Février 2024",
    type: "Présentation Collection",
    role: "Stylisme & Production",
    description: `Présentation de collection dans l'intimité des suites et couloirs du Four
    Seasons Milan. Un événement sur invitation, mêlant art de vivre, mode et
    gastronomie pour une clientèle privée VIP.`,
    highlights: [
      "Présentation en 3 espaces distincts",
      "Collaboration avec le chef étoilé Luca Bianchi",
      "Clientèle privée internationale",
    ],
    coverImage: "/assets/images/events/plaza-milan-cover.jpg",
    images: [
      "/assets/images/events/plaza-milan-01.jpg",
      "/assets/images/events/plaza-milan-02.jpg",
    ],
    featured: true,
    tag: "Milan Fashion Week",
  },
  {
    id: "defile-bristol-2023",
    title: "Défilé Hors-Saison",
    venue: "Le Bristol Paris",
    location: "Rue du Faubourg Saint-Honoré, Paris",
    date: "Juin 2023",
    type: "Défilé Privé",
    role: "Direction Artistique",
    description: `Un défilé hors-saison commandité par Le Bristol pour célébrer la rénovation
    de ses suites historiques. Trente looks créés en partenariat avec des artisans
    français, dans l'esprit de la French Riviera des années 50.`,
    highlights: [
      "30 looks exclusifs",
      "Artisans français — sellerie, broderie, plissé",
      "Reportage dans Madame Figaro",
    ],
    coverImage: "/assets/images/events/bristol-cover.jpg",
    images: [
      "/assets/images/events/bristol-01.jpg",
      "/assets/images/events/bristol-02.jpg",
      "/assets/images/events/bristol-03.jpg",
    ],
    featured: false,
    tag: "Événement Privé",
  },
  {
    id: "gala-cannes-2023",
    title: "Gala Croisette",
    venue: "Hôtel du Cap-Eden-Roc",
    location: "Antibes, Côte d'Azur",
    date: "Mai 2023",
    type: "Gala de Mode",
    role: "Stylisme Red Carpet & Direction Artistique",
    description: `Direction artistique du stylisme pour un gala organisé en marge du Festival
    de Cannes. Vingt personnalités habillées pour la soirée sur la terrasse
    iconique de l'Eden-Roc.`,
    highlights: [
      "20 personnalités stylisées",
      "Couverture presse internationale",
      "Sunset show face à la Méditerranée",
    ],
    coverImage: "/assets/images/events/cannes-cover.jpg",
    images: [
      "/assets/images/events/cannes-01.jpg",
      "/assets/images/events/cannes-02.jpg",
    ],
    featured: true,
    tag: "Festival de Cannes",
  },
  {
    id: "launch-costes-2025",
    title: "Lancement Capsule Couture",
    venue: "Hôtel Costes Paris",
    location: "Rue Saint-Honoré, Paris",
    date: "Mars 2025",
    type: "Lancement de Collection",
    role: "Styling & Set Design",
    description: `Lancement d'une collection capsule 12 pièces dans l'atmosphère unique de
    l'Hôtel Costes. Une soirée cocktail-défilé mêlant influenceurs sélectifs,
    presse lifestyle et clientèle VIP.`,
    highlights: [
      "12 pièces capsule exclusives",
      "Presse et influenceurs triés sur le volet",
      "Set design : fleurs noires et bougies ambre",
    ],
    coverImage: "/assets/images/events/costes-cover.jpg",
    images: [
      "/assets/images/events/costes-01.jpg",
      "/assets/images/events/costes-02.jpg",
    ],
    featured: false,
    tag: "Paris",
  },
];

export const EVENT_TYPES = [
  "Tous",
  "Défilé Gala",
  "Présentation Collection",
  "Défilé Privé",
  "Gala de Mode",
  "Lancement de Collection",
];
