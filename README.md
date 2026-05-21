# Madeleine KOKO — Portfolio Officiel

Portfolio digital de Madeleine KOKO, styliste et directrice artistique mettant en avant ses collections, défilés, projets éditoriaux et collaborations créatives.

Le site propose une expérience élégante, immersive et responsive inspirée des univers luxe, mode et direction artistique.

## Aperçu

Le portfolio permet de :

- Présenter le profil et l'univers créatif de Madeleine KOKO
- Mettre en avant les collections et projets récents
- Afficher les défilés et événements marquants
- Exposer une galerie éditoriale
- Permettre la prise de contact professionnelle
- Rediriger vers WhatsApp et réseaux sociaux
- Recevoir les demandes via EmailJS

---

## Stack technique

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- EmailJS
- Responsive Design
- Animations personnalisées
- Intersection Observer API
- Optimisations SEO

---

## Structure du projet

```bash
src/
│
├── app/
│   ├── about/
│   ├── collections/
│   ├── events/
│   ├── gallery/
│   ├── contact/
│   └── page.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── shared/
│
├── context/
│   └── AppContext.tsx
│
├── data/
│   ├── stylist.ts
│   ├── collections.ts
│   ├── events.ts
│   ├── gallery.ts
│   └── types.ts
│
├── hooks/
├── lib/
├── styles/
└── public/
    └── assets/
        └── images/
````

---

## Installation

Cloner le projet :

```bash
git clone <repository-url>
```

Accéder au dossier :

```bash
cd madeleine-koko-portfolio
```

Installer les dépendances :

```bash
npm install
```

ou

```bash
yarn
```

Lancer le serveur de développement :

```bash
npm run dev
```

Le projet sera accessible sur :

```bash
http://localhost:3000
```

---

## Variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Compléter les valeurs avec les informations EmailJS.

---

## Déploiement

Le projet peut être déployé sur :

* Vercel
* Netlify
* VPS
* Docker
* GitHub Actions CI/CD

Déploiement Vercel :

```bash
npm run build
```

Puis connecter le dépôt à Vercel.

---

## Fonctionnalités

### Accueil

* Hero section immersive
* Présentation rapide
* Collections mises en avant
* Événements sélectionnés
* Appel à l'action

### À propos

* Biographie
* Parcours
* Expériences
* Statistiques professionnelles

### Collections

* Catalogue de collections
* Filtres par catégorie
* Mise en page éditoriale

### Événements

* Défilés
* Galas
* Collaborations

### Galerie

* Affichage dynamique
* Lightbox interactive
* Catégories

### Contact

* Formulaire EmailJS
* WhatsApp
* Réseaux sociaux

---

## Responsive

Le projet est optimisé pour :

* Mobile
* Tablette
* Desktop
* Écrans larges

---

## SEO

Optimisations incluses :

* Métadonnées dynamiques
* Open Graph
* Structure sémantique
* Performance optimisée
* Images optimisées

---

## Auteur

Développé par Chablis Mahutin

Full-Stack Developer • DevOps • UI/UX Enthusiast

---

## Licence

Ce projet est destiné à l'usage du portfolio officiel de Madeleine KOKO.

Tous les contenus, images, créations et éléments graphiques restent la propriété de Madeleine KOKO.

