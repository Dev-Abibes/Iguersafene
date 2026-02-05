
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
    id: 'tissage-tapis',
    title: 'Le Tissage n n-Azetta : Trame de notre histoire',
    summary: 'Les femmes d\'Iguersafene maintiennent vivant l\'art du tissage traditionnel des tapis et des burnous.',
    content: `Le métier à tisser vertical (Azetta) est une pièce centrale de la maison traditionnelle kabyle. À Iguersafene, l'association "Ithran" a lancé un programme de transmission pour que les jeunes filles apprennent à manipuler la laine et à créer les motifs ancestraux.\n\nChaque losange, chaque ligne brisée raconte une protection, une fertilité ou un hommage à la nature. Utiliser la laine locale, la teindre avec des extraits de plantes de l'Akfadou et passer des heures à croiser les fils est un exercice de patience et de dévotion culturelle.`,
    date: '2024-05-28',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1576016773322-80c2793d5159?auto=format&fit=crop&q=80&w=800',
    tags: ['Tissage', 'Femmes', 'Artisanat']
  },
  {
    id: 'aknari-cueillette',
    title: 'Aknari : La saison des figues de Barbarie commence',
    summary: 'Le fruit piquant de l\'été est à l\'honneur cette semaine dans les vergers entourant le village.',
    content: `C'est une tradition qui ne manque jamais de piquant. Les figues de Barbarie (Aknari) arrivent à maturité. Munis de leurs longues perches en roseau (Aqqej), les villageois cueillent les fruits dès l'aube pour éviter les piqûres.\n\nCe fruit est essentiel à notre alimentation estivale et fait l'objet de partages chaleureux entre voisins. On en profite pour rappeler l'importance de préserver les haies de cactus qui servent aussi de remparts naturels contre l'érosion du sol sur nos pentes escarpées.`,
    date: '2024-05-27',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1596384033288-0818276f5f67?auto=format&fit=crop&q=80&w=800',
    tags: ['Nature', 'Alimentation', 'Été']
  },
  {
    id: 'gastronomie-seksou',
    title: 'Gastronomie : Le secret du Seksou aux herbes sauvages',
    summary: 'Redécouvrez le couscous traditionnel préparé avec les plantes médicinales de nos montagnes.',
    content: `Le couscous d'Iguersafene ne se résume pas à la semoule. Il est l'expression de la biodiversité du Djurdjura. Les femmes ramassent avec soin le pouliot (Fliou), la menthe sauvage et d'autres herbes pour parfumer la sauce.\n\nCe plat est souvent servi lors de la Tiwizi ou des grandes réunions de Tajmaât, car il symbolise la force de la terre et la santé de ceux qui la travaillent. Une dégustation a été organisée hier pour les visiteurs, qui ont été surpris par la finesse des saveurs herbacées.`,
    date: '2024-05-26',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    tags: ['Cuisine', 'Plantes', 'Santé']
  },
  {
    id: 'lweziaa-2024',
    title: 'La Lweziâa : Un symbole millénaire de partage et d\'équité',
    summary: 'Le village d\'Iguersafene perpétue la tradition de la Lweziâa, renforçant les liens sociaux à travers le partage communautaire de viande.',
    content: `La tradition de la Lweziâa (ou Timechret) reste l'un des piliers de la solidarité à Iguersafene. Organisée par Tajmaât, cette cérémonie consiste à sacrifier des bœufs et à distribuer la viande de manière strictement égale entre tous les foyers du village, indépendamment de leur situation financière.\n\nCe rite, au-delà de son aspect nutritif, est un acte de justice sociale et de fraternité. Cette année encore, l'événement a rassemblé des centaines de villageois, y compris ceux résidant à l'étranger, venus spécialement pour l'occasion. C'est un moment où l'on oublie les différends pour ne former qu'une seule et grande famille.`,
    date: '2024-05-15',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    tags: ['Tradition', 'Solidarité', 'Kabylie']
  },
  {
    id: 'tiwizi-chemins',
    title: 'Tiwizi : Quand l\'effort collectif transforme le village',
    summary: 'Les citoyens se mobilisent pour l\'entretien des sentiers forestiers dans une ambiance de fraternité et de chants.',
    content: `L'esprit de la "Tiwizi" ne faiblit pas à Iguersafene. Ce week-end, l'appel de Tajmaât pour le nettoyage et l'aménagement des sentiers menant vers la forêt d'Akfadou a été entendu par plus de 200 volontaires de tous âges.\n\nPelles, pioches et débroussailleuses en main, les villageois ont travaillé côte à côte. Comme le veut la coutume, les femmes ont préparé un repas collectif pour les travailleurs, tandis que les chants traditionnels accompagnaient le labeur. Cette action citoyenne permet notemment de préserver notre environnement, mais aussi de préparer la saison estivale pour les randonneurs.`,
    date: '2024-05-10',
    category: 'Environnement',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    tags: ['Tiwizi', 'Écologie', 'Citoyenneté']
  },
  {
    id: 'vannerie-art',
    title: 'Vannerie : L\'art du roseau et de l\'osier renaît',
    summary: 'Un maître vannier d\'Idjeur transmet ses techniques de tressage aux jeunes du village.',
    content: `Les paniers (Icheouaryen) et les corbeilles ne sont plus délaissés pour le plastique. À Iguersafene, la tendance est au retour aux matériaux naturels. Un atelier de vannerie a été mis en place pour apprendre à tresser le roseau sauvage et l'osier.\n\nCes objets utilitaires sont devenus de véritables pièces de décoration très prisées. Le maître vannier souligne que le secret réside dans le séchage et la flexibilité de la fibre. "C'est un dialogue entre mes doigts et la tige", explique-t-il avec passion.`,
    date: '2024-05-05',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1590632313364-0738e4a9e598?auto=format&fit=crop&q=80&w=800',
    tags: ['Artisanat', 'Tradition', 'Nature']
  },
  {
    id: 'yennayer-celebration',
    title: 'Yennayer 2974 : Le village célèbre ses racines berbères',
    summary: 'Un riche programme culturel a marqué le passage au nouvel an amazigh, entre gastronomie et traditions ancestrales.',
    content: `Iguersafene a célébré le passage à l'an 2974 dans une effervescence culturelle remarquable. La place du village s'est transformée en un véritable théâtre à ciel ouvert avec des expositions de robes kabyles, de poteries et de produits du terroir.\n\nLe clou de la journée fut le concours du meilleur couscous de sept légumes ("Imensi n Yennayer"), suivi d'une soirée musicale animée par les jeunes talents locaux. "Célébrer Yennayer, c'est réaffirmer notre attachement à notre identité millénaire", a déclaré l'un des organisateurs du comité culturel Ithran.`,
    date: '2024-01-12',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800',
    tags: ['Yennayer', 'Amazigh', 'Patrimoine']
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
  { 
    id: 'g1', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', 
    title: 'Vue panoramique du village', 
    description: 'Une vue époustouflante depuis le versant nord, montrant l\'implantation harmonieuse du village sur la crête montagneuse.',
    category: 'Paysage' 
  },
  { 
    id: 'g2', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1470252649358-96949c7512c9?auto=format&fit=crop&q=80&w=800', 
    title: 'Coucher de soleil sur les montagnes', 
    description: 'Les reflets dorés de la fin de journée sur les sommets du Djurdjura, vus depuis la place principale du village.',
    category: 'Paysage' 
  },
  { 
    id: 'g3', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800', 
    title: 'Marché traditionnel', 
    description: 'L\'effervescence du marché local où les produits du terroir sont mis à l\'honneur chaque semaine.',
    category: 'Vie Quotidienne' 
  },
  { 
    id: 'g4', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80&w=800', 
    title: 'Réunion du comité', 
    description: 'La Tajmaât en pleine délibération sous le grand chêne, perpétuant une démocratie directe millénaire.',
    category: 'Patrimoine' 
  },
  { 
    id: 'g5', 
    type: 'video', 
    url: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', 
    title: 'Vidéo promotionnelle 2024', 
    description: 'Un voyage cinématographique au cœur d\'Iguersafene, entre traditions kabyles et modernité citoyenne.',
    category: 'Événement' 
  },
  { 
    id: 'g6', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', 
    title: 'Forêt d\'Akfadou', 
    description: 'Immersion dans la forêt de cèdres et de chênes zéens qui borde le village, poumon vert de la région.',
    category: 'Paysage' 
  },
  { 
    id: 'g7', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800', 
    title: 'Lac de montagne', 
    description: 'Un point d\'eau naturel au détour d\'un sentier de randonnée, lieu de calme et de méditation pour les villageois.',
    category: 'Paysage' 
  },
  { 
    id: 'g8', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', 
    title: 'Champs d\'oliviers', 
    description: 'Les oliveraies ancestrales d\'Iguersafene, source de la fameuse huile d\'olive du village réputée pour sa pureté.',
    category: 'Paysage' 
  },
  { 
    id: 'g9', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1518005020250-675f0f0fd172?auto=format&fit=crop&q=80&w=800', 
    title: 'Artisanat local', 
    description: 'Exposition de bijoux en argent émaillé et poteries façonnées à la main par les femmes du village.',
    category: 'Patrimoine' 
  },
  { 
    id: 'g10', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800', 
    title: 'Printemps au village', 
    description: 'L\'éclosion de la nature transforme les abords du village en un véritable jardin d\'Eden coloré.',
    category: 'Paysage' 
  },
  { 
    id: 'g11', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=800', 
    title: 'Rues fleuries', 
    description: 'Le soin apporté aux ruelles du village, une tradition de propreté qui a valu à Iguersafene son titre national.',
    category: 'Vie Quotidienne' 
  },
  { 
    id: 'g12', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800', 
    title: 'Jeunesse d\'Iguersafene', 
    description: 'Les enfants du village, avenir et espoir de notre communauté, fiers de leurs racines kabyles.',
    category: 'Vie Quotidienne' 
  },
  { 
    id: 'g13', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800', 
    title: 'Sages du village', 
    description: 'Portrait de nos anciens, gardiens de la mémoire collective et de la sagesse ancestrale du village.',
    category: 'Vie Quotidienne' 
  },
  { 
    id: 'g14', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', 
    title: 'Nature sauvage', 
    description: 'La biodiversité préservée autour du village, où la faune et la flore cohabitent avec l\'homme en harmonie.',
    category: 'Paysage' 
  },
  { 
    id: 'g15', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800', 
    title: 'Maison traditionnelle', 
    description: 'Détail d\'une architecture ancienne restaurée avec soin, utilisant la pierre locale et la tuile rouge kabyle.',
    category: 'Patrimoine' 
  },
  { 
    id: 'g16', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800', 
    title: 'Sentiers de randonnée', 
    description: 'Le réseau de sentiers entretenus par Tiwizi, permettant aux randonneurs de découvrir les secrets du Djurdjura.',
    category: 'Paysage' 
  },
  { 
    id: 'g17', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800', 
    title: 'Forêt ancienne', 
    description: 'Lumière filtrée à travers les cimes centenaires, un spectacle quotidien pour les habitants d\'Iguersafene.',
    category: 'Paysage' 
  },
  { 
    id: 'g18', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800', 
    title: 'Sources d\'eau', 
    description: 'L\'une des nombreuses sources d\'eau pure descendant directement des montagnes, gérées avec soin par la communauté.',
    category: 'Paysage' 
  },
  { 
    id: 'g19', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', 
    title: 'Festivités', 
    description: 'Moments de joie collective lors de la fête annuelle, où les chants et la musique traditionnels animent la place.',
    category: 'Événement' 
  },
  { 
    id: 'g20', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800', 
    title: 'Sport au village', 
    description: 'La jeunesse s\'exprime sur le terrain de sport, lieu de rencontre et de santé pour tous les quartiers.',
    category: 'Événement' 
  },
  { 
    id: 'g21', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', 
    title: 'Matinée brumeuse', 
    description: 'Quand les nuages s\'invitent dans le village, créant une atmosphère mystique propre aux hauts sommets.',
    category: 'Paysage' 
  },
  { 
    id: 'g22', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1470252649358-96949c7512c9?auto=format&fit=crop&q=80&w=800', 
    title: 'Fin de journée', 
    description: 'Le calme revient sur le village alors que le soleil disparaît derrière la ligne d\'horizon dentelée.',
    category: 'Paysage' 
  },
  { 
    id: 'g23', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800', 
    title: 'Artisanat textile', 
    description: 'Détail d\'un tissage traditionnel, chaque motif symbolisant un aspect de la vie ou de la nature kabyle.',
    category: 'Patrimoine' 
  },
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
  { year: 'XVIe siècle', event: 'Rattachement au Royaume de Koukou (sous Ahmed El Kadi). Bastion contre l\'avancée espagnole.' },
  { year: 'Après 1700', event: 'Division de Koukou Ouffela et ère des Ath Kaci. Consolidation de Tajmaât.' },
  { year: '1854 - 1857', event: 'Résistance armée avec Fatma N\'Soumer et Cherif Boubaghla. Lutte héroïque pour la terre kabyle.' },
  { year: '1871', event: 'Participation active à l\'insurrection de Mokrani et Cheikh El Haddad.' },
  { year: '1954 - 1962', event: 'Guerre de Libération. Engagement total dès la première heure pour l\'indépendance.' },
  { year: '1957', event: 'Le 4 décembre : Bombardement total. Village brûlé, décrété Zone Rouge. Exode vers Akfadou et villages voisins.' },
  { year: '1994 - 2000', event: 'Résistance citoyenne exemplaire contre le terrorisme. Le village s\'organise pour protéger sa terre et ses habitants.' },
  { year: '1999', event: 'Modernisation : Achèvement du réseau d\'adduction d\'eau potable dans chaque foyer. Fin du calvaire des fontaines publiques pour les femmes.' },
  { year: '2001', event: 'Printemps Noir : Le village se soulève pour la dignité. Le 12 mai, le jeune Slimane Raab tombe en martyr.' },
  { year: '2014', event: 'Consécration : Village le plus propre de Tizi Ouzou. Renaissance par l\'écologie.' }
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
