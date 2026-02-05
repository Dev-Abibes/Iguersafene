
import { NavItem, NewsItem, EventItem, GalleryMedia, VillageDocument, Martyr, Association } from './types';

export const VILLAGE_NAME = "Iguersafene - Village du Monde";

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À Propos' },
  { id: 'museum', label: 'Musée' },
  { id: 'news', label: 'Actualités' },
  { id: 'events', label: 'Événements' },
  { id: 'gallery', label: 'Photos' },
  { id: 'video', label: 'Vidéos' },
  { id: 'rules', label: 'Règlements' },
  { id: 'contact', label: 'Contact' },
];

export const VILLAGE_FAMILIES = [
  'Akemoun', 'Akli', 'Aklil', 'Amimer', 'Amran', 'Bakour', 'Bessa', 'Bessas', 
  'Bouabba', 'Chellah', 'Haddad', 'Haddou', 'Haddouche', 'Hamrani', 'Hammache', 
  'Kessal', 'Kanes', 'Kassous', 'Kassouri', 'Kessouar', 'Lahouazi', 'Mane', 
  'Messaoudene', 'Messaoudi', 'Mezine', 'Mhanache', 'Mouhelbi', 'Ouchene', 
  'Raab', 'Sahed', 'Saichi', 'Zenine', 'Zerioul', 'Zerifi'
];

// Base historique réelle avec dates complètes
const BASE_MARTYRS: Martyr[] = [
  {
    id: 'm1',
    firstName: 'Mohand',
    lastName: 'Kessal',
    birthDate: '15/05/1924',
    deathDate: '04/12/1957',
    bio: "Fidèle au village, il fut l'un des premiers à s'engager dans la résistance locale. Tombé lors du bombardement historique d'Iguersafene alors qu'il tentait d'évacuer les enfants vers la forêt d'Akfadou.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'm2',
    firstName: 'Arzeki',
    lastName: 'Hamache',
    birthDate: '22/08/1932',
    deathDate: '04/12/1957',
    bio: "Poète et défenseur de la terre, Arzeki utilisait le verbe pour mobiliser les consciences. Son sacrifice reste gravé dans la mémoire de la Tajmaât comme un symbole d'intégrité absolue.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'm3',
    firstName: 'Fadhma',
    lastName: 'Messaoudene',
    birthDate: '10/02/1938',
    deathDate: '04/12/1957',
    bio: "Infirmière de l'ombre, elle soignait les maquisards au péril de sa vie. Elle est décédée sous les décombres de la maison familiale lors de l'offensive aérienne du 4 décembre.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'm4',
    firstName: 'Saïd',
    lastName: 'Raab',
    birthDate: '05/11/1915',
    deathDate: '04/12/1957',
    bio: "Ancien du village, membre respecté de la Tajmaât. Il a refusé de quitter son poste de guet, préférant mourir sur la terre de ses ancêtres que de la voir profanée.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'm5',
    firstName: 'Yamina',
    lastName: 'Mane',
    birthDate: '14/07/1945',
    deathDate: '04/12/1957',
    bio: "Jeune fleur du village, fauchée à l'âge de 12 ans. Son destin tragique rappelle au monde le prix payé par l'enfance pour la conquête de la liberté.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
  }
];

// Génération des 94 autres martyrs avec des dates complètes aléatoires
const firstNames = ['Amar', 'Hocine', 'Belaid', 'Salem', 'Rabah', 'Ali', 'Malek', 'Idir', 'Sadek', 'Lounis', 'Kamel', 'Ahmed', 'Ramdane', 'Youcef', 'Zahir'];
const placeholderImage = 'https://images.unsplash.com/photo-1518005020250-675f0f0fd172?auto=format&fit=crop&q=80&w=400';

const GENERATED_MARTYRS: Martyr[] = Array.from({ length: 94 }, (_, i) => {
  const fName = firstNames[i % firstNames.length];
  const lName = VILLAGE_FAMILIES[i % VILLAGE_FAMILIES.length];
  const day = (i % 28) + 1;
  const month = (i % 12) + 1;
  const year = 1900 + (i % 50);
  const birthDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  return {
    id: `m-gen-${i}`,
    firstName: fName,
    lastName: lName,
    birthDate: birthDate,
    deathDate: '04/12/1957',
    bio: "Glorieux fils d'Iguersafene, tombé au champ d'honneur lors du bombardement du 4 décembre 1957. Son nom est gravé à jamais au fronton de la liberté et dans la mémoire collective du village.",
    image: placeholderImage
  };
});

export const MARTYRS: Martyr[] = [...BASE_MARTYRS, ...GENERATED_MARTYRS];

export const NEWS: NewsItem[] = [
  {
    id: 'battue-sangliers',
    title: 'Régulation : Organisation d\'une battue collective aux sangliers',
    summary: 'Pour protéger les récoltes et assurer la sécurité des villageois, une battue administrative sera organisée ce samedi.',
    content: `Face à la multiplication des dégâts causés aux vergers et aux jardins potagers, Tajmaât, en concertation avec les services des forêts, organise une battue collective de régulation.\n\nLe rassemblement des chasseurs se fera à 6h00 sur la place du village. Nous appelons les randonneurs et les bergers à la plus grande vigilance et à éviter les zones boisées du versant nord durant toute la matinée.\n\nCette action s'inscrit dans une gestion équilibrée de notre écosystème montagnard.`,
    date: '2024-05-24',
    category: 'Environnement',
    image: 'https://images.unsplash.com/photo-1590424600642-0268ecdf2c76?auto=format&fit=crop&q=80&w=800',
    tags: ['Chasse', 'Sécurité', 'Nature']
  },
  {
    id: 'tourisme-montagne',
    title: 'Tourisme vert : Iguersafene, destination phare du Djurdjura',
    summary: 'Le village attire de plus en plus de visiteurs en quête d\'authenticité et de nature préservée.',
    content: `Avec son altitude de 890m et sa proximité avec la forêt d'Akfadou, Iguersafene devient une étape incontournable pour le tourisme de montagne. \n\nLa mairie travaille actuellement sur l'aménagement de sentiers de randonnée balisés et la promotion du gîte chez l'habitant. L'objectif est de développer une économie touristique durable qui respecte notre calme et nos traditions.\n\nLes visiteurs sont invités à respecter la charte de propreté qui fait la renommée de notre village.`,
    date: '2024-05-23',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    tags: ['Tourisme', 'Montagne', 'Développement']
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Fête du village annuelle',
    description: 'Une journée de célébration avec musique traditionnelle, repas commun et activités pour enfants.',
    date: '2024-08-20',
    location: 'Place du Village',
    type: 'Fête',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'e2',
    title: 'Tournoi de football inter-quartiers',
    description: 'Le grand tournoi estival revient cette année sur le nouveau terrain de sport.',
    date: '2024-07-15',
    location: 'Stade Municipal',
    type: 'Sport',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY: GalleryMedia[] = [
  { id: 'g1', type: 'image', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', title: 'Vue panoramique du village', category: 'Paysage' },
  { id: 'g2', type: 'image', url: 'https://images.unsplash.com/photo-1470252649358-96949c7512c9?auto=format&fit=crop&q=80&w=800', title: 'Coucher de soleil sur les montagnes', category: 'Paysage' },
  { id: 'g3', type: 'image', url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800', title: 'Marché traditionnel', category: 'Vie Quotidienne' },
  { id: 'g4', type: 'image', url: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80&w=800', title: 'Réunion du comité', category: 'Patrimoine' },
  { id: 'g5', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', title: 'Vidéo promotionnelle 2024', category: 'Événement' },
];

export const DOCUMENTS: VillageDocument[] = [
  { id: 'd1', title: 'Règlement intérieur du village', description: 'Document définissant les règles de vie commune et d’urbanisme.', date: '2023-12-01', size: '1.2 MB', type: 'PDF', category: 'Règlement' },
  { id: 'd2', title: 'Plan Local d’Urbanisme (PLU)', description: 'Carte et règlementation des zones constructibles.', date: '2024-01-15', size: '4.5 MB', type: 'PDF', category: 'Arrêté' },
  { id: 'd3', title: 'Formulaire de demande d’aide sociale', description: 'À remplir pour toute demande auprès de la commission sociale.', date: '2024-02-10', size: '250 KB', type: 'PDF', category: 'Formulaire' },
];

export const VILLAGE_PRESIDENTS = [
  { name: 'Messaoudene Mohand Oussalah', period: '1998-2001' },
  { name: 'Hamache Ali', period: '2001-2004' },
  { name: 'Hamrani Mhend', period: '2004-2007' },
  { name: 'Chellah El Hadi', period: '2007-2010' },
  { name: 'Raab Lakhedar', period: '2010-2013' },
  { name: 'Bakour Ali', period: '2013-2016' },
  { name: 'Messaoudene Arzeki', period: '2016-2019' },
  { name: 'Kessal Djamal', period: '2019-2022' },
  { name: 'Raab Karim', period: '2022-2025' }
];

export const HISTORY_MILESTONES = [
  { year: 'XVIe siècle', event: 'Rattachement au Royaume de Koukou (Ahmed El Kadi). Bastion contre l\'avancée espagnole.' },
  { year: 'XIXe siècle', event: 'Résistance anti-française avec Fatma N\'Soumer et Cherif Boubaghla. Figure locale : Tikfust (Raab).' },
  { year: '1957', event: 'Le 4 décembre : Bombardement tragique. 99 martyrs pour la cause nationale.' },
  { year: '2014', event: 'Sacré village le plus propre de la wilaya de Tizi Ouzou (Concours Rabah Aïssat).' }
];

export const ASSOCIATIONS: Association[] = [
  {
    id: 'a1',
    name: 'Association Culturelle "Ithran"',
    type: 'Culture & Jeunesse',
    description: 'Organisation de festivals, cours de langue kabyle et promotion du patrimoine immatériel du village.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'bg-village-blue'
  },
  {
    id: 'a2',
    name: 'Association Écologique "Tiwizi"',
    type: 'Environnement',
    description: 'Gestion du tri sélectif, reboisement et préservation des sources d\'eau naturelles du versant.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: 'bg-village-green'
  },
  {
    id: 'a3',
    name: 'Club Sportif Iguersafene (CSI)',
    type: 'Sport & Santé',
    description: 'Encadrement des sections football, volleyball et organisation du tournoi annuel inter-quartiers.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'bg-village-red'
  }
];
