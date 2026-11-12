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

export const ACCENT = '#6C4BA6'

/* CV scaricabile */
export const CV_URL = '/docs/cv-daniele-leonzi.pdf'

/* Contatti reali */
export const CONTACT = {
  email: 'leonzidaniele622@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daniele-leonzi-7ba8b0347/',
  instagram: null, // non inserito su richiesta
}

/* Logo brand */
export const MONARDI_LOGO =
  'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/qiws8v1r_651147527_17916346497322827_5956097932597298343_n.jpg'
export const DISCRONIA_LOGO =
  'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/em41px5l_561088425_17843433822591422_240917194721275286_n.jpg'
export const VIGNETO_LOGO =
  'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/ljcjxchf_452649266_695308976088444_8590847694659368883_n.jpg'

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
  vsl: '/videos/video-vsl.mp4',
  cambi: '/videos/versione-con-cambi.mp4',
  reelSbarbati: '/videos/reel-sbarbati.mp4',
  reelRotonda: '/videos/reel-rotonda.mp4',
  jamSpulla: '/videos/jam-spulla-1.mp4',
}

/* Video hero (orizzontale) — primo video categoria Eventi */
export const HERO_VIDEO = VIDEOS.jamVhs
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
    '/covers/daniele-portrait.jpg',
}

export const CATEGORIES = ['Tutti', 'Eventi', 'Aziende', 'Concerti', 'Social Media']

/* Social Media Management — profili gestiti */
export const SMM = [
  {
    brand: 'Discronia Service',
    handle: 'discroniaservice',
    url: 'https://www.instagram.com/discroniaservice/',
    scope: 'Gestione totale',
    full: true,
    logo: DISCRONIA_LOGO,
  },
  {
    brand: 'Vigneto Sicuro',
    handle: 'vignetosicuro.it',
    url: 'https://www.instagram.com/vignetosicuro.it/',
    scope: 'Gestione parziale',
    full: false,
    logo: VIGNETO_LOGO,
  },
  {
    brand: 'Monardi Strategies',
    handle: 'monardi_strategies',
    url: 'https://www.instagram.com/monardi_strategies/',
    scope: 'Gestione parziale',
    full: false,
    logo: MONARDI_LOGO,
  },
]

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

/* Etichette estese per le cartelle (fallback: nome categoria) */
export const CATEGORY_LABEL = {
  Arte: 'Video per l’Accademia di Belle Arti di Macerata',
}

/* Etichette estese EN */
export const CATEGORY_LABEL_EN = {
  Arte: 'Videos for the Academy of Fine Arts of Macerata',
}

/* Descrizioni progetti in inglese (chiave: id progetto) */
export const PROJECT_DESC_EN = {
  p1: 'Filming and editing of a live jam session: band performance, instrument details and venue atmosphere, with an edit paced to the music.',
  p2: 'Recap of an event night with a VHS/retro aesthetic: performances, crowd and venue details, edited to convey the energy and mood of the night.',
  p3: 'Branded content for Discronia Service: a live session shoot, color grading and dynamic editing, closing on the brand logo.',
  p4: 'Vertical promo reel for the 12/12 event: an immediate hook, glitch effects, animated text and a tight cut designed for social media.',
  p5: 'Vertical recap reel of the 15/11 event: performances, crowd reactions and on-screen text, alternating black & white and color.',
  p6: 'Documentary project “Riprendiamoci gli Spazi”: interviews with the participants of a jam session in Macerata and opinions from young people looking for spaces to play and express themselves.',
  p7: 'Vertical performance of a vocals-and-guitar artist with a VHS/lo-fi treatment: minimal editing and color grading to enhance the intimacy of the performance.',
  p8: 'Vertical recap of an open-air music event (BTN 09/05, Europe Day): performances, crowd and atmosphere edited in a retro style for social media.',
  p9: 'Vertical “POV”-style reel with witty text filmed during an open-air live show: a fast cut and a light tone designed for social engagement.',
  p10: 'Vertical storytelling reel: a first-person narration of a creative concept inspired by mythology, with clean editing and the natural rhythm of speech.',
  p11: 'Interview/testimonial video made for Vigneto Sicuro: an authentic client story with polished shooting and clean editing, designed to convey trust and brand value.',
  p12: 'Second testimonial video for Vigneto Sicuro: a client interview with dedicated b-roll, color correction and narrative editing that enhances the message.',
  p13: 'Vertical content (YouTube Short) for Vigneto Sicuro: a short, direct social format with an immediate message and a tight edit designed for mobile viewing.',
  p14: 'Second vertical Short for Vigneto Sicuro: impactful social content optimised for YouTube Shorts/Reels, with an opening hook and dynamic pacing.',
  p15: 'An artistic video made for the Academy of Fine Arts of Macerata: visual experimentation, aesthetic research and creative editing at the service of the audiovisual language.',
  p16: 'Artistic video project for the Academy of Fine Arts of Macerata: visual narration and photographic care, with editing that blends rhythm and a conceptual dimension.',
  p17: 'Photo and video content production for Marzia Monardi, entrepreneur: shots and posts designed for the personal brand’s social communication, with a polished and consistent style.',
  p18: 'Filming and editing of a Francesco Mircoli blues live show: performance, instrument details and stage atmosphere, with cinematic color grading and pacing synced to the music.',
  p19: 'Filming and editing of episode 1 of “RadioDiscronia” (Cheeseshopmusic): a multi-camera studio setup, dialogue editing and graphics for a smooth-paced podcast format.',
  p20: 'Video of the “Spulla Contest” for Discronia Service: an event recap with the highlights, participants’ reactions and dynamic editing synced to the music.',
  p21: 'Live performance by Francesco Mircoli “Carolina Bruno Vidal” (Flow Rock Live): concert filming and dynamic editing, with attention to rhythm and the rendering of the live atmosphere.',
  p22: 'High-conversion Video Sales Letter: motion graphics, animated text, transitions and effects created in After Effects to make the message dynamic and grab attention in the first seconds, guiding the viewer to the final call-to-action.',
  p23: 'Vertical reel with dynamic editing: cuts and scene changes synced to the beat of the track to amplify the emotional impact and keep the viewer engaged.',
  p24: 'Promotional video for the “Because The Night” contest on 24/07 (Macerata): energetic editing of the event highlights, synced to the music to convey the atmosphere of the night.',
  p25: 'Promotional reel for an open-air jam session: a few high-impact seconds of groove, lights and crowd, edited to the beat to build hype and fill the square.',
  p26: 'Adrenaline-fuelled promo reel for Jam Spulla: tight cuts synced to the beat, stage energy and crowd warmth, designed to invite everyone to the next live music night.',
  p27: 'Reel dedicated to indie artist Lorenzo Sbarbati: images and music breathing together, a delicate edit in tune with the track to portray the artist’s sensibility and sonic world beyond the performance.',
}

/* Titoli gallery in inglese (chiave: id) */
export const GALLERY_TITLE_EN = {
  g1: 'Night in the Square',
  g2: 'Live Duo',
  g3: 'Live Performance',
  g4: 'Europe Day',
  g5: 'DJ Set',
  g6: 'Backstage',
  g7: 'On Stage',
  g8: 'Crowd',
  g9: 'Live Set',
  g10: 'Atmosphere',
  g11: 'At the Bar',
  g12: 'The Night',
  g13: 'Drink Time',
  g14: 'Live Band',
  g15: 'Live at Sunset',
  g16: 'Posing',
  g17: 'Audience',
  g18: 'Vibes',
  g19: 'Friends',
  g20: 'Crew',
  g21: 'Golden Hour',
}

/* Copertina personalizzata per cartella (fallback: primo progetto) */
export const CATEGORY_COVER = {
  Aziende:
    'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/kfx6v7hr_VIDEO%20VSL.mov.jpg',
}

/* GALLERY fotografica — immagini placeholder sostituibili */
export const GALLERY = [
  { id: 'g1', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/ejcud9bg_IMG_8078.webp', title: 'Serata in Piazza', tag: 'Eventi', span: 'normal' },
  { id: 'g2', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/yt94tk5b_IMG_8045.webp', title: 'Live Duo', tag: 'Concerti', span: 'normal' },
  { id: 'g3', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/kezm38s3_IMG_8038.webp', title: 'Live Performance', tag: 'Concerti', span: 'tall' },
  { id: 'g4', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/katv7uqx_IMG_8035.webp', title: 'Festa dell’Europa', tag: 'Eventi', span: 'normal' },
  { id: 'g5', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/psxvqqbu_IMG_8311.webp', title: 'DJ Set', tag: 'Concerti', span: 'tall' },
  { id: 'g6', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/29xrehnx_IMG_8233.webp', title: 'Backstage', tag: 'Eventi', span: 'normal' },
  { id: 'g7', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/bz8oltsj_IMG_8226.webp', title: 'On Stage', tag: 'Concerti', span: 'normal' },
  { id: 'g8', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/1eqskhbq_IMG_8214.webp', title: 'Crowd', tag: 'Eventi', span: 'normal' },
  { id: 'g9', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/44g5h0h3_IMG_8211.webp', title: 'Live Set', tag: 'Concerti', span: 'normal' },
  { id: 'g10', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/r76uhsl5_IMG_8096.webp', title: 'Atmosfera', tag: 'Eventi', span: 'normal' },
  { id: 'g11', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/wmn19of4_IMG_8326.webp', title: 'Al Bancone', tag: 'Eventi', span: 'normal' },
  { id: 'g12', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/e5vftl0p_IMG_8347.webp', title: 'Serata', tag: 'Eventi', span: 'tall' },
  { id: 'g13', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/12ef6ofy_IMG_8361.webp', title: 'Drink Time', tag: 'Eventi', span: 'tall' },
  { id: 'g14', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/916oav0h_WhatsApp%20Image%202026-06-09%20at%2011.47.20%20%284%29.webp', title: 'Live Band', tag: 'Concerti', span: 'normal' },
  { id: 'g15', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/uiobg8rx_WhatsApp%20Image%202026-06-09%20at%2011.47.12.webp', title: 'Live al Tramonto', tag: 'Concerti', span: 'normal' },
  { id: 'g16', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/916oav0h_WhatsApp%20Image%202026-06-09%20at%2011.47.20%20%284%29.webp', title: 'In Posa', tag: 'Eventi', span: 'normal' },
  { id: 'g17', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/89tpaa9b_WhatsApp%20Image%202026-06-09%20at%2011.48.00.webp', title: 'Pubblico', tag: 'Eventi', span: 'normal' },
  { id: 'g18', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/9ukh1cxj_WhatsApp%20Image%202026-06-09%20at%2011.47.57%20%283%29.webp', title: 'Vibes', tag: 'Eventi', span: 'normal' },
  { id: 'g19', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/q8etdid5_WhatsApp%20Image%202026-06-09%20at%2011.47.47.webp', title: 'Amici', tag: 'Eventi', span: 'normal' },
  { id: 'g20', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/vuwzd9jl_WhatsApp%20Image%202026-06-09%20at%2011.47.46%20%281%29.webp', title: 'Crew', tag: 'Eventi', span: 'normal' },
  { id: 'g21', src: 'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/36uksqn5_WhatsApp%20Image%202026-06-09%20at%2011.47.23%20%281%29.webp', title: 'Golden Hour', tag: 'Eventi', span: 'normal' },
]

export const PROJECTS = [
  {
    id: 'p1',
    slug: 'jam-session-11-11',
    title: 'Jam Session 11/11',
    category: 'Concerti',
    image: '/covers/p1.jpg',
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
    image: '/covers/p2.jpg',
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
    image: '/covers/p3.jpg',
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
    image: '/covers/p4.jpg',
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
    image: '/covers/p5.jpg',
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
    slug: 'riprendiamoci-gli-spazi',
    title: 'Riprendiamoci gli Spazi — Documentario',
    category: 'Eventi',
    image: '/covers/p6.jpg',
    video: VIDEOS.macerataJam,
    orientation: 'portrait',
    span: 'tall',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Progetto documentaristico “Riprendiamoci gli Spazi”: interviste ai partecipanti di una jam session a Macerata e raccolta di opinioni dei giovani che cercano spazi e hanno la necessità di suonare ed esprimersi.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p7',
    slug: 'live-voce-chitarra',
    title: 'Live — Voce & Chitarra',
    category: 'Concerti',
    image: '/covers/p7.jpg',
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
    image: '/covers/p8.jpg',
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
    image: '/covers/p9.jpg',
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
    image: '/covers/p10.jpg',
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
    image: MONARDI_LOGO,
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
    image: 'https://i.ytimg.com/vi/0eQYAAs3jTA/maxresdefault.jpg',
    youtube: '0eQYAAs3jTA',
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Francesco Mircoli',
    description:
      'Riprese e montaggio di un live blues di Francesco Mircoli: performance, dettagli degli strumenti e atmosfera del palco, con color grading cinematografico e ritmo sincronizzato sulla musica.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p19',
    slug: 'radiodiscronia-ep1',
    title: 'RadioDiscronia EP.1 — Cheeseshopmusic',
    category: 'Social Media',
    image: 'https://i.ytimg.com/vi/TkGYR_G3T80/maxresdefault.jpg',
    youtube: 'TkGYR_G3T80',
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Riprese e montaggio dell’episodio 1 di “RadioDiscronia” (Cheeseshopmusic): setup multicamera in studio, montaggio dei dialoghi e grafiche per un format podcast dal ritmo scorrevole.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Audition'],
  },
  {
    id: 'p20',
    slug: 'spulla-contest',
    title: 'Spulla Contest',
    category: 'Eventi',
    image: 'https://i.ytimg.com/vi/Zs1_NXKCS5I/maxresdefault.jpg',
    youtube: 'Zs1_NXKCS5I',
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Discronia Service',
    description:
      'Video dello “Spulla Contest” per Discronia Service: racconto dell’evento con i momenti clou, le reazioni dei partecipanti e un montaggio dinamico sincronizzato sulla musica.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p21',
    slug: 'francesco-mircoli-carolina-bruno-vidal',
    title: 'Francesco Mircoli — Carolina Bruno Vidal',
    category: 'Concerti',
    image: 'https://i.ytimg.com/vi/7bzXwK0zK2M/hqdefault.jpg',
    youtube: '7bzXwK0zK2M',
    orientation: 'landscape',
    span: 'normal',
    year: '2024',
    client: 'Francesco Mircoli',
    description:
      'Esibizione live di Francesco Mircoli “Carolina Bruno Vidal” (Flow Rock Live): ripresa del concerto e montaggio dinamico, con attenzione al ritmo e alla resa dell’atmosfera del live.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p22',
    slug: 'video-sales-letter',
    title: 'VSL Cinematica — Attenzione in 3 Secondi',
    category: 'Aziende',
    featured: true,
    image:
      'https://customer-assets-7cd3h4nn.emergentagent.net/job_videomaker-dl/artifacts/kfx6v7hr_VIDEO%20VSL.mov.jpg',
    video: VIDEOS.vsl,
    orientation: 'portrait',
    span: 'tall',
    year: '2025',
    client: 'Progetto commerciale',
    description:
      'Video Sales Letter ad alta conversione: motion graphics, testo animato, transizioni ed effetti realizzati in After Effects per rendere il messaggio dinamico e catturare l’attenzione nei primi secondi, guidando lo spettatore fino alla call-to-action finale.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p23',
    slug: 'reel-fm-instructor',
    title: 'Reel per FM Instructor',
    category: 'Social Media',
    image: '/covers/versione-con-cambi.jpg',
    video: VIDEOS.cambi,
    orientation: 'portrait',
    span: 'tall',
    year: '2025',
    client: 'Progetto personale',
    description:
      'Reel verticale dal montaggio dinamico: tagli e cambi di scena sincronizzati sul ritmo del brano per amplificare l’impatto emotivo e mantenere alta l’attenzione dello spettatore.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p24',
    slug: 'because-the-night-contest',
    title: 'Because The Night — Contest 24/07',
    category: 'Eventi',
    image: 'https://i.ytimg.com/vi/COw8hWnOBTQ/hqdefault.jpg',
    youtube: 'COw8hWnOBTQ',
    orientation: 'landscape',
    span: 'normal',
    year: '2025',
    client: 'Discronia Service',
    description:
      'Video promozionale per il contest “Because The Night” del 24/07 (Macerata): montaggio energico degli highlight dell’evento, sincronizzato sulla musica per trasmettere l’atmosfera della serata.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p25',
    slug: 'jam-in-rotonda',
    title: 'Jam in Rotonda — La Notte Prende Vita',
    category: 'Eventi',
    image: '/covers/reel-rotonda.jpg',
    video: VIDEOS.reelRotonda,
    orientation: 'portrait',
    span: 'tall',
    year: '2025',
    client: 'Evento musicale',
    description:
      'Reel pubblicitario per una jam session all’aperto: pochi secondi ad alto impatto tra groove, luci e pubblico, montati sul ritmo della musica per accendere l’hype e riempire la piazza.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p26',
    slug: 'jam-spulla-live',
    title: 'Jam Spulla — Il Ritmo Non Si Ferma',
    category: 'Eventi',
    image: '/covers/jam-spulla-1.jpg',
    video: VIDEOS.jamSpulla,
    orientation: 'portrait',
    span: 'tall',
    year: '2025',
    client: 'Evento musicale',
    description:
      'Reel promozionale adrenalinico per la Jam Spulla: tagli serrati sincronizzati al beat, energia del palco e calore del pubblico, pensato per invitare tutti alla prossima serata di musica dal vivo.',
    software: ['Adobe Premiere Pro', 'After Effects'],
  },
  {
    id: 'p27',
    slug: 'lorenzo-sbarbati-indie-reel',
    title: 'Lorenzo Sbarbati — Anima Indie',
    category: 'Concerti',
    image: '/covers/reel-sbarbati.jpg',
    video: VIDEOS.reelSbarbati,
    orientation: 'portrait',
    span: 'tall',
    year: '2025',
    client: 'Lorenzo Sbarbati',
    description:
      'Reel dedicato all’artista indie Lorenzo Sbarbati: immagini e musica che respirano insieme, un montaggio delicato e in sintonia con il brano per raccontare la sensibilità e il mondo sonoro dell’artista oltre la semplice performance.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
]

export const EXPERIENCES = [
  {
    role: 'Freelance Videomaker & Video Editor',
    role_en: 'Freelance Videomaker & Video Editor',
    detail:
      'Produzione di contenuti audiovisivi per social, campagne promozionali, eventi e spettacoli. Clienti: Vigneto Sicuro, Marzymona Services, Discronia Service, Francesco Mircoli & Lorenzo Sbarbati.',
    detail_en:
      'Production of audiovisual content for social media, promotional campaigns, events and shows. Clients: Vigneto Sicuro, Marzymona Services, Discronia Service, Francesco Mircoli & Lorenzo Sbarbati.',
    period: '2025 – Oggi',
    period_en: '2025 – Present',
  },
  {
    role: 'Reportage Giornalistico',
    role_en: 'Journalistic Reportage',
    detail:
      'Produzione foto/video del concerto di Elio e le Storie Tese, pubblicata nell’articolo di Certa Stampa.',
    detail_en:
      'Photo/video coverage of the Elio e le Storie Tese concert, published in the Certa Stampa article.',
    period: '2024',
    period_en: '2024',
    link: 'https://certastampa.it/66715-shoe.html',
    linkLabel: 'Leggi l’articolo su Certa Stampa',
    linkLabel_en: 'Read the article on Certa Stampa',
  },
  {
    role: 'Tirocinio Universitario — Camon Video',
    role_en: 'University Internship — Camon Video',
    detail:
      'Porto d’Ascoli — Supporto alla produzione audiovisiva: riprese eventi, montaggio, editing e organizzazione del workflow.',
    detail_en:
      'Porto d’Ascoli — Support in audiovisual production: event shooting, editing and workflow organisation.',
    period: '2024',
    period_en: '2024',
  },
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
