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
  Heart,
} from 'lucide-react'

export const ACCENT = '#E63946'

/* Contatti reali */
export const CONTACT = {
  email: 'leonzidaniele622@gmail.com',
  linkedin: 'https://www.linkedin.com', // placeholder — inserire URL reale
  instagram: 'https://www.instagram.com', // placeholder — inserire URL reale
}

/* Video reali di Daniele (URL pubblici) */
export const VIDEOS = {
  jam1111:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/a8mobdis_17871122991465280.mp4',
  jamVhs:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/11kqdann_18065347820381251.mp4',
  liveSession:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/qmyzvovs_18087636631804441.mp4',
  reel1212:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/8e0lfqoy_18089562991807570.mp4',
  recapNight:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/oajwj0i9_18409148224139088.mp4',
  macerataJam:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/5z33exqt_17846058693636080.mp4',
  voceChitarra:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/6vduivfe_17881315395373930.mp4',
  btnEuropa:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/y824csxx_18397226608157742.mp4',
  povLive:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/cv31agvz_18409310233149947.mp4',
  storytelling:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/tltrp7ay_18537677278069609.mp4',
}

/* Video hero (orizzontale) */
export const HERO_VIDEO = VIDEOS.jam1111
/* Fallback generico */
export const PROJECT_VIDEO = VIDEOS.jam1111

/* Immagini placeholder di copertina (sostituibili) */
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
}

export const CATEGORIES = ['Tutti', 'Eventi', 'Aziende', 'Concerti', 'Social Media']

export const CATEGORY_ICON = {
  Eventi: Calendar,
  Aziende: Building2,
  Concerti: Music2,
  'Social Media': Smartphone,
  Arte: Palette,
  Matrimoni: Heart,
}

/* Ordine di visualizzazione delle categorie nel filtro */
export const CATEGORY_ORDER = [
  'Eventi',
  'Aziende',
  'Concerti',
  'Social Media',
  'Arte',
  'Matrimoni',
]

/* GALLERY fotografica — immagini placeholder sostituibili */
export const GALLERY = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1612051314545-405440dec74a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8fHxibGFja3wxNzg0NDY3Mjc3fDA&ixlib=rb-4.1.0&q=85', title: 'Evento — Live', tag: 'Eventi', span: 'tall' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1508657794088-375f2f60c581?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8fHxibGFja3wxNzg0NDY3Mjc3fDA&ixlib=rb-4.1.0&q=85', title: 'Evento — Pubblico', tag: 'Eventi', span: 'normal' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1591833330168-ddbc9ea80223?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8fHxibGFja3wxNzg0NDY3Mjc3fDA&ixlib=rb-4.1.0&q=85', title: 'Evento — Atmosfera', tag: 'Eventi', span: 'normal' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1550368566-f9cc32d7392d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fGJsYWNrfDE3ODQ0NjcyNzZ8MA&ixlib=rb-4.1.0&q=85', title: 'Matrimonio', tag: 'Matrimoni', span: 'tall' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1503508961401-4f07813e63ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fGJsYWNrfDE3ODQ0NjcyNzZ8MA&ixlib=rb-4.1.0&q=85', title: 'Matrimonio — Dettagli', tag: 'Matrimoni', span: 'normal' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1524650448000-02d0a2aeb6cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fGJsYWNrfDE3ODQ0NjcyNzZ8MA&ixlib=rb-4.1.0&q=85', title: 'Matrimonio — Emozioni', tag: 'Matrimoni', span: 'tall' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1506072751048-8fa17272bfe8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fGJsYWNrfDE3ODQ0NjcyNzZ8MA&ixlib=rb-4.1.0&q=85', title: 'Matrimonio — Ricevimento', tag: 'Matrimoni', span: 'normal' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1518611540400-6b85a0704342?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxhcnRpc3RpYyUyMHBvcnRyYWl0fGVufDB8fHxibGFja3wxNzg0NDY3Mjc3fDA&ixlib=rb-4.1.0&q=85', title: 'Ritratto Artistico', tag: 'Arte', span: 'tall' },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxhcnRpc3RpYyUyMHBvcnRyYWl0fGVufDB8fHxibGFja3wxNzg0NDY3Mjc3fDA&ixlib=rb-4.1.0&q=85', title: 'Progetto Artistico', tag: 'Arte', span: 'tall' },
]

export const PROJECTS = [
  {
    id: 'p1',
    slug: 'jam-session-11-11',
    title: 'Jam Session 11/11',
    category: 'Concerti',
    image: IMG.concert1,
    video: VIDEOS.jam1111,
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Riprese e montaggio di una jam session dal vivo: performance della band, dettagli degli strumenti e atmosfera del locale, con un montaggio ritmato sulla musica.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p2',
    slug: 'jam-session-recap-vhs',
    title: 'Jam Session — Recap VHS',
    category: 'Eventi',
    image: IMG.concert2,
    video: VIDEOS.jamVhs,
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Recap di una serata evento con estetica VHS/retrò: performance, pubblico e dettagli del locale, montati per restituire l’energia e il mood della serata.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p3',
    slug: 'live-session-discronia',
    title: 'Live Session — Discronia Service',
    category: 'Aziende',
    image: IMG.camera,
    video: VIDEOS.liveSession,
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Contenuto branded per Discronia Service: ripresa di una session live, color grading e montaggio dinamico, con chiusura sul logo del brand.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
  },
  {
    id: 'p4',
    slug: 'reel-promo-jam-12-12',
    title: 'Reel Promo — Jam Session 12/12',
    category: 'Social Media',
    image: IMG.edit,
    video: VIDEOS.reel1212,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Reel verticale promozionale per l’evento del 12/12: hook immediato, effetti glitch, testo animato e taglio serrato pensato per i social.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p5',
    slug: 'recap-because-the-night',
    title: 'Recap — Because The Night',
    category: 'Social Media',
    image: IMG.filmSet,
    video: VIDEOS.recapNight,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Reel verticale di recap dell’evento del 15/11: performance, reazioni del pubblico e testo on-screen, con alternanza di bianco/nero e colore.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p6',
    slug: 'macerata-jam-session',
    title: 'Macerata Jam Session — Recap',
    category: 'Eventi',
    image: IMG.concert2,
    video: VIDEOS.macerataJam,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Reel verticale di recap della “Macerata Jam Session”: interviste ai partecipanti, momenti live ed estetica VHS per raccontare l’energia e lo spirito di comunità dell’evento.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p7',
    slug: 'live-voce-chitarra',
    title: 'Live — Voce & Chitarra',
    category: 'Concerti',
    image: IMG.concert1,
    video: VIDEOS.voceChitarra,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Performance verticale di un artista voce e chitarra con trattamento VHS/lo-fi: montaggio essenziale e color grading per valorizzare l’intimità dell’esecuzione.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p8',
    slug: 'btn-festa-europa',
    title: 'BTN 09/05 — Festa dell’Europa',
    category: 'Eventi',
    image: IMG.corporate,
    video: VIDEOS.btnEuropa,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Recap verticale di un evento musicale all’aperto (BTN 09/05, Festa dell’Europa): performance, pubblico e atmosfera montati in stile retrò per i social.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p9',
    slug: 'pov-live-reel',
    title: 'POV — Live Reel',
    category: 'Social Media',
    image: IMG.camera,
    video: VIDEOS.povLive,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Progetto personale',
    description:
      'Reel verticale in stile “POV” con testo ironico girato durante un live all’aperto: taglio veloce e tono leggero pensato per l’engagement social.',
    software: ['Adobe Premiere Pro'],
  },
  {
    id: 'p10',
    slug: 'reel-storytelling-concept',
    title: 'Reel — Storytelling Concept',
    category: 'Social Media',
    image: IMG.portrait,
    video: VIDEOS.storytelling,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Progetto personale',
    description:
      'Reel verticale di storytelling: racconto in prima persona di un concept creativo ispirato alla mitologia, con montaggio pulito e ritmo naturale del parlato.',
    software: ['Adobe Premiere Pro'],
  },
  {
    id: 'p11',
    slug: 'vigneto-sicuro-testimonianza-1',
    title: 'Video Testimonianza — Vigneto Sicuro',
    category: 'Aziende',
    image: 'https://i.ytimg.com/vi/U3el_En1qRM/maxresdefault.jpg',
    youtube: 'U3el_En1qRM',
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Vigneto Sicuro',
    description:
      'Video intervista/testimonianza realizzato per Vigneto Sicuro: racconto autentico del cliente con riprese curate e montaggio pulito, pensato per comunicare fiducia e valore del brand.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p12',
    slug: 'vigneto-sicuro-testimonianza-2',
    title: 'Video Testimonianza — Vigneto Sicuro II',
    category: 'Aziende',
    image: 'https://i.ytimg.com/vi/h6xI4qAtL60/maxresdefault.jpg',
    youtube: 'h6xI4qAtL60',
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Vigneto Sicuro',
    description:
      'Seconda testimonianza video per Vigneto Sicuro: intervista al cliente con b-roll dedicato, color correction e un montaggio narrativo che valorizza il messaggio.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p13',
    slug: 'vigneto-sicuro-short-1',
    title: 'Short — Vigneto Sicuro',
    category: 'Aziende',
    image: 'https://i.ytimg.com/vi/wFJhfvW0erY/maxresdefault.jpg',
    youtube: 'wFJhfvW0erY',
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Vigneto Sicuro',
    description:
      'Contenuto verticale (YouTube Short) per Vigneto Sicuro: formato social breve e diretto, con un messaggio immediato e un montaggio serrato pensato per la fruizione mobile.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p14',
    slug: 'vigneto-sicuro-short-2',
    title: 'Short — Vigneto Sicuro II',
    category: 'Aziende',
    image: 'https://i.ytimg.com/vi/oSHXQqWKEcc/maxresdefault.jpg',
    youtube: 'oSHXQqWKEcc',
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Vigneto Sicuro',
    description:
      'Secondo Short verticale per Vigneto Sicuro: contenuto social d’impatto ottimizzato per YouTube Shorts/Reels, con hook iniziale e ritmo dinamico.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p15',
    slug: 'accademia-video-artistico-1',
    title: 'Video Artistico — Accademia di Belle Arti',
    category: 'Arte',
    image: 'https://i.ytimg.com/vi/_iDSFu5LL_4/maxresdefault.jpg',
    youtube: '_iDSFu5LL_4',
    orientation: 'landscape',
    span: 'normal',
    year: '2023',
    client: 'Accademia di Belle Arti di Macerata',
    description:
      'Video a carattere artistico realizzato per l’Accademia di Belle Arti di Macerata: sperimentazione visiva, ricerca estetica e montaggio creativo al servizio del linguaggio audiovisivo.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
  },
  {
    id: 'p16',
    slug: 'accademia-video-artistico-2',
    title: 'Video Artistico — Accademia di Belle Arti II',
    category: 'Arte',
    image: 'https://i.ytimg.com/vi/cohZD9O8F14/maxresdefault.jpg',
    youtube: 'cohZD9O8F14',
    orientation: 'landscape',
    span: 'normal',
    year: '2023',
    client: 'Accademia di Belle Arti di Macerata',
    description:
      'Progetto video artistico per l’Accademia di Belle Arti di Macerata: narrazione visiva e cura fotografica, con un montaggio che unisce ritmo e componente concettuale.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
  },
  {
    id: 'p17',
    slug: 'marzia-monardi',
    title: 'Marzia Monardi — Content',
    category: 'Aziende',
    image: IMG.corporate,
    instagram: ['DXuUv-CjHjM', 'DV3-Pj0jKS9', 'DXPvJwFjddK'],
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Marzia Monardi',
    description:
      'Produzione di contenuti fotografici e video per Marzia Monardi, imprenditrice: scatti e post pensati per la comunicazione social del personal brand, con uno stile curato e coerente.',
    software: ['Adobe Photoshop', 'Adobe Lightroom', 'Adobe Premiere Pro'],
  },
  {
    id: 'p18',
    slug: 'francesco-mircoli-blues-canne-mozze',
    title: 'Francesco Mircoli — Blues a Canne Mozze',
    category: 'Concerti',
    image: IMG.concert2,
    video:
      'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/s4z9dt80_blues%20a%20canne%20mozze%20%282%29.mp4',
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Francesco Mircoli',
    description:
      'Riprese e montaggio di un live blues di Francesco Mircoli: performance, dettagli degli strumenti e atmosfera del palco, con color grading cinematografico e ritmo sincronizzato sulla musica.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
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
