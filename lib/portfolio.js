import {
  Calendar,
  Building2,
  Music2,
  Smartphone,
  Film,
  Palette,
  Sparkles,
  Layers,
  Scissors,
  Volume2,
  BookOpen,
} from 'lucide-react'

export const ACCENT = '#E63946'

/* PLACEHOLDER MEDIA — facilmente sostituibili */
export const HERO_VIDEO =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
export const PROJECT_VIDEO =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'

export const IMG = {
  filmSet:
    'https://images.unsplash.com/photo-1535540878298-a155c6d065ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MHx8fGJsYWNrfDE3ODQxMjc5NzR8MA&ixlib=rb-4.1.0&q=85',
  camera:
    'https://images.unsplash.com/photo-1496559249665-c7e2874707ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MHx8fGJsYWNrfDE3ODQxMjc5NzR8MA&ixlib=rb-4.1.0&q=85',
  edit:
    'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MHx8fGJsYWNrfDE3ODQxMjc5NzR8MA&ixlib=rb-4.1.0&q=85',
  concert1:
    'https://images.unsplash.com/photo-1549046701-6bd11cf71796?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MHx8fGJsYWNrfDE3ODQxMjc5NzN8MA&ixlib=rb-4.1.0&q=85',
  concert2:
    'https://images.unsplash.com/photo-1573339887617-d674bc961c31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MHx8fGJsYWNrfDE3ODQxMjc5NzN8MA&ixlib=rb-4.1.0&q=85',
  corporate:
    'https://images.unsplash.com/photo-1619473667737-b3abeb860aa1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxjb3Jwb3JhdGUlMjBmaWxtbWFraW5nfGVufDB8fHxibGFja3wxNzg0MTI3OTc0fDA&ixlib=rb-4.1.0&q=85',
  portrait:
    'https://images.unsplash.com/photo-1587050253308-b91a9f7b8c4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwzfHx2aWRlb2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwwfHx8YmxhY2t8MTc4NDEyNzk4NXww&ixlib=rb-4.1.0&q=85',
  portrait2:
    'https://images.unsplash.com/photo-1596483941347-068cde1f38df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwyfHx2aWRlb2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwwfHx8YmxhY2t8MTc4NDEyNzk4NXww&ixlib=rb-4.1.0&q=85',
}

export const CATEGORIES = ['Tutti', 'Eventi', 'Aziende', 'Concerti', 'Social Media']

export const CATEGORY_ICON = {
  Eventi: Calendar,
  Aziende: Building2,
  Concerti: Music2,
  'Social Media': Smartphone,
}

export const PROJECTS = [
  {
    id: 'p1',
    slug: 'aftermovie-evento',
    title: 'Aftermovie Evento',
    category: 'Eventi',
    image: IMG.filmSet,
    span: 'tall',
    year: '2025',
    client: 'Placeholder Client',
    description:
      'Aftermovie dinamico che racconta l’energia e i momenti salienti di un evento dal vivo, con un montaggio ritmato e sincronizzato sulla musica.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p2',
    slug: 'spot-aziendale',
    title: 'Spot Aziendale',
    category: 'Aziende',
    image: IMG.corporate,
    span: 'normal',
    year: '2024',
    client: 'Vigneto Sicuro',
    description:
      'Video istituzionale pensato per comunicare valori e identità del brand, con una fotografia curata e un tono elegante e professionale.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
  },
  {
    id: 'p3',
    slug: 'live-session',
    title: 'Live Session',
    category: 'Concerti',
    image: IMG.concert1,
    span: 'tall',
    year: '2025',
    client: 'Placeholder Client',
    description:
      'Ripresa e montaggio di una live session musicale, con attenzione al ritmo, al color grading cinematografico e alla resa del suono.',
    software: ['Adobe Premiere Pro', 'Audition', 'Lightroom'],
  },
  {
    id: 'p4',
    slug: 'reel-verticale',
    title: 'Reel Verticale',
    category: 'Social Media',
    image: IMG.edit,
    span: 'normal',
    year: '2025',
    client: 'Marzymona Services',
    description:
      'Contenuto verticale ottimizzato per i social, con hook immediato, testo animato e un montaggio serrato pensato per massimizzare la retention.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p5',
    slug: 'backstage-concerto',
    title: 'Backstage Concerto',
    category: 'Concerti',
    image: IMG.concert2,
    span: 'normal',
    year: '2024',
    client: 'Placeholder Client',
    description:
      'Racconto dietro le quinte di un concerto: preparazione, soundcheck e atmosfera, con un montaggio narrativo che valorizza l’emozione del live.',
    software: ['Adobe Premiere Pro', 'Photoshop'],
  },
  {
    id: 'p6',
    slug: 'video-corporate',
    title: 'Video Corporate',
    category: 'Aziende',
    image: IMG.camera,
    span: 'tall',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Produzione e post-produzione di un video corporate: interviste, riprese b-roll e motion graphics per una comunicazione chiara ed efficace.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Illustrator'],
  },
  {
    id: 'p7',
    slug: 'recap-evento',
    title: 'Recap Evento',
    category: 'Eventi',
    image: IMG.concert1,
    span: 'normal',
    year: '2023',
    client: 'Placeholder Client',
    description:
      'Recap breve e d’impatto pensato per la condivisione online, che sintetizza le fasi principali dell’evento mantenendo alto il coinvolgimento.',
    software: ['Adobe Premiere Pro', 'Lightroom'],
  },
  {
    id: 'p8',
    slug: 'content-verticale',
    title: 'Content Verticale',
    category: 'Social Media',
    image: IMG.filmSet,
    span: 'normal',
    year: '2025',
    client: 'Placeholder Client',
    description:
      'Serie di contenuti verticali per una strategia social continuativa, con identità visiva coerente e un ritmo di montaggio riconoscibile.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
  },
]

export const EXPERIENCES = [
  {
    role: 'Freelance Videomaker & Video Editor',
    detail:
      'Produzione e post-produzione video per aziende, eventi e contenuti social.',
    period: 'Oggi',
  },
  { role: 'Tirocinio', detail: 'Camon Video', period: '' },
  { role: 'Social Media Manager', detail: 'Discronia Service', period: '' },
  { role: 'Produzione video', detail: 'Vigneto Sicuro', period: '' },
  { role: 'Produzione video', detail: 'Marzymona Services', period: '' },
]

export const SOFTWARE = [
  { name: 'Adobe Premiere Pro', icon: Film },
  { name: 'Adobe After Effects', icon: Sparkles },
  { name: 'Adobe Photoshop', icon: Palette },
  { name: 'Adobe Illustrator', icon: Layers },
  { name: 'Adobe Lightroom', icon: Palette },
  { name: 'Adobe InDesign', icon: BookOpen },
]

export const SKILLS = [
  { name: 'Video Editing', icon: Scissors },
  { name: 'Color Correction', icon: Palette },
  { name: 'Motion Graphics', icon: Sparkles },
  { name: 'Storytelling', icon: BookOpen },
  { name: 'Content Creation', icon: Smartphone },
  { name: 'Audio Editing', icon: Volume2 },
]

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}
