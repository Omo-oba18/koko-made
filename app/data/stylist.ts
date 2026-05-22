import type { Stylist } from './types';

export const STYLIST: Stylist = {
  //brand: 'Koko Made',
  name: 'Madeleine Koko',
  nameFirst: 'Madeleine',
  nameLast: 'Koko',
  title: 'Styliste-Modéliste',
  titleEn: 'Fashion Designer & Stylist',
  tagline: "Tisser l'identité africaine dans chaque création.",
  taglineEn: 'Weaving African identity into every creation.',

  shortBio: `Madeleine Koko est une styliste-modéliste béninoise dont les créations
célèbrent le patrimoine textile de l'Afrique de l'Ouest. Entre le tissu indigo
traditionnel et les coupes contemporaines, elle construit un langage de mode
singulier, ancré dans la culture béninoise et tourné vers le monde.`,

  fullBio: [
    `Originaire du Bénin, Madeleine Koko a grandi entourée des étoffes colorées
des marchés de Cotonou et des savoirs-faire ancestraux des tisserands locaux.
Cette immersion précoce dans la richesse textile de l'Afrique de l'Ouest a
forgé sa vision : une mode qui honore ses racines sans jamais renoncer à
l'innovation.`,

    `Après une formation rigoureuse en stylisme-modélisme, Madeleine se distingue
dès sa soutenance de fin de formation par la cohérence et la maturité de ses
créations. Sa collection de diplôme, entièrement construite autour du tissu
indigo du Bénin, révèle déjà sa signature : des silhouettes structurées,
une palette profonde, un respect absolu du matériau.`,

    `Reconnue au sein de la Designer Académie, elle affine sa maîtrise technique
et développe sa sensibilité éditoriale. Ses pièces sont présentées au Salon
National des Artisans du Bénin (SNAB), où l'indigo devient le fil conducteur
d'une collection saluée pour son dialogue entre artisanat traditionnel et
esthétique contemporaine.`,

    `Sur scène au FESMMA et au Chiganvy Talent Show, Madeleine franchit un cap :
ses créations sont portées, défilent, vibrent sous les projecteurs. Elle
impose une présence artistique forte et confirme que la mode béninoise a
ses propres codes, son propre éclat, sa propre voix.`,
  ],

  stats: [
    { value: '5',   label: 'Événements majeurs' },
    { value: '29',  label: 'Photos de portfolio' },
    { value: '3',   label: 'Collections présentées' },
    { value: '1',   label: 'Diplôme obtenu' },
  ],

  press: [
    'SNAB Bénin',
    'FESMMA',
    'Chiganvy Talent Show',
    'Designer Académie',
    'Mode Africaine',
    'Artisans du Bénin',
  ],

  contact: {
    email: 'madeleine.koko@kokemade.com',
    phone: '+229 01 23 45 67',
    whatsapp: '22901234567',
    whatsappMessage: "Bonjour Madeleine, je souhaite en savoir plus sur vos créations.",
    location: 'Cotonou, Bénin',
    studio: 'Studio Koko Made — Cotonou, Bénin',
  },

  social: {
    instagram: 'https://www.instagram.com/',
    pinterest:  'https://www.pinterest.com/',
    linkedin:   'https://www.linkedin.com/',
  },

  emailjs: {
    serviceId:  'YOUR_EMAILJS_SERVICE_ID',
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey:  'YOUR_EMAILJS_PUBLIC_KEY',
  },
};