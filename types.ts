
export type Page = 'home' | 'about' | 'news' | 'news-detail' | 'events' | 'gallery' | 'video' | 'rules' | 'contact' | 'museum';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: 'Administration' | 'Culture' | 'Santé' | 'Travaux' | 'Économie' | 'Sport' | 'Environnement';
  image: string;
  tags: string[];
}

export interface Martyr {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
  bio: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'Fête' | 'Réunion' | 'Culture' | 'Sport';
  image: string;
}

export interface GalleryMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description?: string;
  category: 'Paysage' | 'Événement' | 'Vie Quotidienne' | 'Patrimoine';
}

export interface VillageDocument {
  id: string;
  title: string;
  description: string;
  date: string;
  size: string;
  type: 'PDF' | 'DOC';
  category: 'Règlement' | 'Arrêté' | 'Formulaire';
}

export interface NavItem {
  id: Page;
  label: string;
}

// Added Association interface to fix missing export error in constants.tsx
export interface Association {
  id: string;
  name: string;
  type: string;
  description: string;
  icon: string;
  color: string;
}
