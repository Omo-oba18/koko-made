// ─── Collections Static Data ─────────────────────────────────────────────────
// Images: place your photos in /public/assets/images/collections/
// Format recommended: WebP, min 1200px wide

export const COLLECTIONS = [
  {
    id: "lumiere-blanche",
    title: "Lumière Blanche",
    season: "Printemps–Été 2024",
    client: "Maison Delacroix",
    category: "Éditorial",
    description: `Une exploration de la pureté à travers des silhouettes flottantes en lin
    blanchi, photographiées dans les salles de marbre du Musée des Arts Décoratifs.
    Chaque look explore la tension entre architecture et mouvement.`,
    coverImage: "/assets/images/collections/lumiere-blanche-cover.jpg",
    images: [
      "/assets/images/collections/lumiere-blanche-01.jpg",
      "/assets/images/collections/lumiere-blanche-02.jpg",
      "/assets/images/collections/lumiere-blanche-03.jpg",
      "/assets/images/collections/lumiere-blanche-04.jpg",
    ],
    featured: true,
    tags: ["Minimalisme", "Lin", "Architecture", "Paris"],
    year: 2024,
  },
  {
    id: "nuit-de-velours",
    title: "Nuit de Velours",
    season: "Automne–Hiver 2023",
    client: "Studio NV Paris",
    category: "Campagne",
    description: `La nuit parisienne comme décor. Des velours profonds, des coupes architecturées
    et une palette de noirs et de bordeaux sombres. Campagne réalisée aux abords
    de l'Opéra Garnier.`,
    coverImage: "/assets/images/collections/nuit-velours-cover.jpg",
    images: [
      "/assets/images/collections/nuit-velours-01.jpg",
      "/assets/images/collections/nuit-velours-02.jpg",
      "/assets/images/collections/nuit-velours-03.jpg",
    ],
    featured: true,
    tags: ["Soirée", "Velours", "Opéra", "Paris"],
    year: 2023,
  },
  {
    id: "terra-rossa",
    title: "Terra Rossa",
    season: "Croisière 2024",
    client: "Atelier Bianchi",
    category: "Look Book",
    description: `Inspiré des terres ocre de la Toscane, ce lookbook capsule réunit des
    pièces artisanales en cuir naturel et en soie brute. Une ode à l'héritage
    de la maroquinerie florentine.`,
    coverImage: "/assets/images/collections/terra-rossa-cover.jpg",
    images: [
      "/assets/images/collections/terra-rossa-01.jpg",
      "/assets/images/collections/terra-rossa-02.jpg",
      "/assets/images/collections/terra-rossa-03.jpg",
      "/assets/images/collections/terra-rossa-04.jpg",
    ],
    featured: false,
    tags: ["Cuir", "Toscane", "Artisanat", "Terre"],
    year: 2024,
  },
  {
    id: "eclat-mineral",
    title: "Éclat Minéral",
    season: "Printemps–Été 2023",
    client: "Bijoux Hoffmann",
    category: "Éditorial",
    description: `Une série éditorial autour de la bijouterie haute couture et du corps féminin.
    Minéral, brut, sophistiqué. Réalisé dans un studio parisien avec une
    lumière naturelle rasante.`,
    coverImage: "/assets/images/collections/eclat-mineral-cover.jpg",
    images: [
      "/assets/images/collections/eclat-mineral-01.jpg",
      "/assets/images/collections/eclat-mineral-02.jpg",
    ],
    featured: false,
    tags: ["Bijoux", "Minéral", "Corps", "Lumière"],
    year: 2023,
  },
  {
    id: "ombre-et-grace",
    title: "Ombre & Grâce",
    season: "Automne–Hiver 2024",
    client: "Collectif Artiste",
    category: "Collaboration Artistique",
    description: `Collaboration avec la photographe Léa Moreau pour un éditorial à la frontière
    de la mode et de la danse contemporaine. Corps, drapés, shadows. Publié dans
    Numéro Magazine.`,
    coverImage: "/assets/images/collections/ombre-grace-cover.jpg",
    images: [
      "/assets/images/collections/ombre-grace-01.jpg",
      "/assets/images/collections/ombre-grace-02.jpg",
      "/assets/images/collections/ombre-grace-03.jpg",
    ],
    featured: true,
    tags: ["Danse", "Drapé", "Ombre", "Numéro"],
    year: 2024,
  },
  {
    id: "jardin-secret",
    title: "Jardin Secret",
    season: "Printemps 2025",
    client: "Maison Céleste",
    category: "Campagne",
    description: `Une campagne printanière dans les jardins privés du Château de Vaux-le-Vicomte.
    Dentelles, broderies florales et silhouettes romantiques dans un écrin de
    verdure classique.`,
    coverImage: "/assets/images/collections/jardin-secret-cover.jpg",
    images: [
      "/assets/images/collections/jardin-secret-01.jpg",
      "/assets/images/collections/jardin-secret-02.jpg",
      "/assets/images/collections/jardin-secret-03.jpg",
    ],
    featured: false,
    tags: ["Romantique", "Dentelle", "Château", "Printemps"],
    year: 2025,
  },
];

export const COLLECTION_CATEGORIES = [
  "Tous",
  "Éditorial",
  "Campagne",
  "Look Book",
  "Collaboration Artistique",
];
