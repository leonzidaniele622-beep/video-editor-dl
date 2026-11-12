'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'

/* =========================================================
   TRANSLATIONS
   ========================================================= */
export const TR = {
  it: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      gallery: 'Gallery',
      social: 'Social',
      about: 'Chi sono',
      skills: 'Competenze',
      contact: 'Contatti',
      cta: 'Contattami',
      menu: 'Apri menu',
    },
    hero: {
      eyebrow: 'Portfolio',
      roles: ['Video Editor', 'Videomaker', 'Content Creator'],
      tagline:
        'Trasformo idee e riprese in contenuti coinvolgenti attraverso montaggio, storytelling e attenzione ai dettagli.',
      ctaWork: 'Guarda i lavori',
      ctaContact: 'Contattami',
      ctaCV: 'Scarica CV',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Lavori selezionati',
      desc: 'I lavori sono organizzati per categoria. Scegli una cartella per esplorare i progetti al suo interno.',
      folder: 'Cartella',
      open: 'Apri',
      videos: 'video',
      categories: 'Categorie',
    },
    gallery: {
      eyebrow: 'Fotografia',
      title: 'Gallery',
      desc: 'Una selezione di scatti tra eventi, matrimoni e progetti artistici. Clicca su una foto per aprirla.',
      folderTitle: 'Foto di eventi musicali',
      openFolder: 'Apri la cartella',
      back: 'Gallery',
      photos: 'foto',
    },
    social: {
      eyebrow: 'Gestione social',
      title: 'Social Media Management',
      desc: 'Oltre alla produzione video, gestisco la creazione e la pubblicazione di contenuti social per brand e realtà del territorio.',
      full: 'Gestione totale',
      partial: 'Gestione parziale',
    },
    about: {
      eyebrow: 'Chi sono',
      title: 'Ritmo, storytelling e dettaglio.',
      paragraph:
        'Laureato in Comunicazione Visiva Multimediale presso l’Accademia di Belle Arti di Macerata. Mi occupo di produzione e post-produzione video per aziende, eventi e contenuti social. La mia passione per la musica mi ha permesso di sviluppare un forte senso del ritmo e dell’attenzione ai dettagli, elementi che applico quotidianamente nel montaggio video.',
      badge: 'Video Editor',
    },
    experience: { eyebrow: 'Percorso', title: 'Esperienze' },
    skills: {
      eyebrow: 'Competenze',
      title: 'Software & skill',
      desc: 'Gli strumenti e le competenze che utilizzo ogni giorno per dare forma alle idee.',
      software: 'Software',
      skills: 'Competenze',
      education: 'Formazione',
      degree: 'Laurea',
      diploma: 'Diploma',
      degreeTitle: 'Comunicazione Visiva Multimediale',
      degreeSchool: 'Accademia di Belle Arti di Macerata',
      diplomaTitle: 'Liceo Scientifico Scienze Applicate',
      diplomaSchool: 'Liceo “G. Peano” — Nereto',
    },
    contact: {
      title1: 'Realizziamo qualcosa',
      title2: 'insieme.',
      desc: 'Sono disponibile per collaborazioni freelance, progetti creativi e opportunità lavorative.',
      email: 'Email',
      linkedin: 'LinkedIn',
      cv: 'Scarica CV',
      instagram: 'Instagram',
    },
    form: {
      name: 'Nome',
      email: 'Email',
      message: 'Raccontami il tuo progetto…',
      send: 'Invia messaggio',
      sending: 'Apertura email…',
      fillAll: 'Compila tutti i campi.',
      success: 'Si sta aprendo la tua app email: premi Invia per spedire il messaggio.',
      subject: 'Contatto dal portfolio',
      note: 'Il messaggio si aprirà nella tua app email, già pronto da inviare.',
      errorSend: 'Errore nell’invio.',
      errorNet: 'Errore di rete. Riprova.',
    },
    project: {
      notFound: 'Progetto non trovato',
      back: 'Torna al portfolio',
      portfolio: 'Portfolio',
      theProject: 'Il progetto',
      softwareUsed: 'Software utilizzati',
      year: 'Anno',
      client: 'Cliente',
      category: 'Categoria',
      next: 'Prossimo progetto',
    },
    categories: {
      Eventi: 'Eventi',
      Aziende: 'Aziende',
      Concerti: 'Concerti',
      'Social Media': 'Social Media',
      Arte: 'Arte',
      Matrimoni: 'Matrimoni',
    },
  },
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      gallery: 'Gallery',
      social: 'Social',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
      cta: 'Get in touch',
      menu: 'Open menu',
    },
    hero: {
      eyebrow: 'Portfolio',
      roles: ['Video Editor', 'Videomaker', 'Content Creator'],
      tagline:
        'I turn ideas and footage into engaging content through editing, storytelling and attention to detail.',
      ctaWork: 'View work',
      ctaContact: 'Contact me',
      ctaCV: 'Download CV',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Selected work',
      desc: 'Projects are organised by category. Pick a folder to explore the projects inside.',
      folder: 'Folder',
      open: 'Open',
      videos: 'videos',
      categories: 'Categories',
    },
    gallery: {
      eyebrow: 'Photography',
      title: 'Gallery',
      desc: 'A selection of shots from events, weddings and artistic projects. Click a photo to open it.',
      folderTitle: 'Music event photos',
      openFolder: 'Open folder',
      back: 'Gallery',
      photos: 'photos',
    },
    social: {
      eyebrow: 'Social management',
      title: 'Social Media Management',
      desc: 'Beyond video production, I handle the creation and publishing of social content for brands and local businesses.',
      full: 'Full management',
      partial: 'Partial management',
    },
    about: {
      eyebrow: 'About',
      title: 'Rhythm, storytelling & detail.',
      paragraph:
        'Graduated in Multimedia Visual Communication at the Academy of Fine Arts of Macerata. I work on video production and post-production for companies, events and social content. My passion for music has helped me develop a strong sense of rhythm and attention to detail, which I apply daily in video editing.',
      badge: 'Video Editor',
    },
    experience: { eyebrow: 'Career', title: 'Experience' },
    skills: {
      eyebrow: 'Skills',
      title: 'Software & skills',
      desc: 'The tools and skills I use every day to bring ideas to life.',
      software: 'Software',
      skills: 'Skills',
      education: 'Education',
      degree: "Bachelor's Degree",
      diploma: 'High School Diploma',
      degreeTitle: 'Multimedia Visual Communication',
      degreeSchool: 'Academy of Fine Arts of Macerata',
      diplomaTitle: 'Scientific High School — Applied Sciences',
      diplomaSchool: '“G. Peano” High School — Nereto',
    },
    contact: {
      title1: "Let's create something",
      title2: 'together.',
      desc: 'I am available for freelance collaborations, creative projects and job opportunities.',
      email: 'Email',
      linkedin: 'LinkedIn',
      cv: 'Download CV',
      instagram: 'Instagram',
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Tell me about your project…',
      send: 'Send message',
      sending: 'Opening email…',
      fillAll: 'Please fill in all fields.',
      success: 'Your email app is opening: press Send to deliver the message.',
      subject: 'Portfolio enquiry',
      note: 'Your message will open in your email app, ready to send.',
      errorSend: 'Error while sending.',
      errorNet: 'Network error. Please try again.',
    },
    project: {
      notFound: 'Project not found',
      back: 'Back to portfolio',
      portfolio: 'Portfolio',
      theProject: 'The project',
      softwareUsed: 'Software used',
      year: 'Year',
      client: 'Client',
      category: 'Category',
      next: 'Next project',
    },
    categories: {
      Eventi: 'Events',
      Aziende: 'Business',
      Concerti: 'Concerts',
      'Social Media': 'Social Media',
      Arte: 'Art',
      Matrimoni: 'Weddings',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      portfolio: 'Portafolio',
      gallery: 'Galería',
      social: 'Redes',
      about: 'Sobre mí',
      skills: 'Habilidades',
      contact: 'Contacto',
      cta: 'Contáctame',
      menu: 'Abrir menú',
    },
    hero: {
      eyebrow: 'Portafolio',
      roles: ['Editor de Vídeo', 'Videomaker', 'Creador de Contenido'],
      tagline:
        'Transformo ideas y grabaciones en contenidos atractivos a través del montaje, el storytelling y la atención al detalle.',
      ctaWork: 'Ver trabajos',
      ctaContact: 'Contáctame',
      ctaCV: 'Descargar CV',
    },
    portfolio: {
      eyebrow: 'Portafolio',
      title: 'Trabajos seleccionados',
      desc: 'Los trabajos están organizados por categoría. Elige una carpeta para explorar los proyectos que contiene.',
      folder: 'Carpeta',
      open: 'Abrir',
      videos: 'vídeos',
      categories: 'Categorías',
    },
    gallery: {
      eyebrow: 'Fotografía',
      title: 'Galería',
      desc: 'Una selección de fotos de eventos, bodas y proyectos artísticos. Haz clic en una foto para abrirla.',
      folderTitle: 'Fotos de eventos musicales',
      openFolder: 'Abrir la carpeta',
      back: 'Galería',
      photos: 'fotos',
    },
    social: {
      eyebrow: 'Gestión de redes',
      title: 'Social Media Management',
      desc: 'Además de la producción de vídeo, me encargo de crear y publicar contenidos para redes sociales de marcas y negocios locales.',
      full: 'Gestión completa',
      partial: 'Gestión parcial',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Ritmo, storytelling y detalle.',
      paragraph:
        'Licenciado en Comunicación Visual Multimedia por la Academia de Bellas Artes de Macerata. Me dedico a la producción y postproducción de vídeo para empresas, eventos y contenidos para redes sociales. Mi pasión por la música me ha permitido desarrollar un gran sentido del ritmo y de la atención al detalle, elementos que aplico cada día en el montaje de vídeo.',
      badge: 'Editor de Vídeo',
    },
    experience: { eyebrow: 'Trayectoria', title: 'Experiencia' },
    skills: {
      eyebrow: 'Habilidades',
      title: 'Software y habilidades',
      desc: 'Las herramientas y habilidades que uso cada día para dar forma a las ideas.',
      software: 'Software',
      skills: 'Habilidades',
      education: 'Formación',
      degree: 'Licenciatura',
      diploma: 'Bachillerato',
      degreeTitle: 'Comunicación Visual Multimedia',
      degreeSchool: 'Academia de Bellas Artes de Macerata',
      diplomaTitle: 'Bachillerato Científico — Ciencias Aplicadas',
      diplomaSchool: 'Instituto “G. Peano” — Nereto',
    },
    contact: {
      title1: 'Creemos algo',
      title2: 'juntos.',
      desc: 'Estoy disponible para colaboraciones freelance, proyectos creativos y oportunidades laborales.',
      email: 'Email',
      linkedin: 'LinkedIn',
      cv: 'Descargar CV',
      instagram: 'Instagram',
    },
    form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Cuéntame tu proyecto…',
      send: 'Enviar mensaje',
      sending: 'Abriendo correo…',
      fillAll: 'Rellena todos los campos.',
      success: 'Se está abriendo tu app de correo: pulsa Enviar para mandar el mensaje.',
      subject: 'Contacto desde el portafolio',
      note: 'El mensaje se abrirá en tu app de correo, listo para enviar.',
      errorSend: 'Error al enviar.',
      errorNet: 'Error de red. Inténtalo de nuevo.',
    },
    project: {
      notFound: 'Proyecto no encontrado',
      back: 'Volver al portafolio',
      portfolio: 'Portafolio',
      theProject: 'El proyecto',
      softwareUsed: 'Software utilizado',
      year: 'Año',
      client: 'Cliente',
      category: 'Categoría',
      next: 'Siguiente proyecto',
    },
    categories: {
      Eventi: 'Eventos',
      Aziende: 'Empresas',
      Concerti: 'Conciertos',
      'Social Media': 'Redes Sociales',
      Arte: 'Arte',
      Matrimoni: 'Bodas',
    },
  },
}

export const LANGS = ['it', 'en', 'es']

/* Helper: return localized field (base_en / base_es) with fallback to base */
export function field(obj, base, lang) {
  if (!obj) return ''
  if (lang && lang !== 'it' && obj[base + '_' + lang]) return obj[base + '_' + lang]
  return obj[base]
}

/* =========================================================
   CONTEXT
   ========================================================= */
const LanguageContext = createContext({
  lang: 'it',
  setLang: () => {},
  t: TR.it,
})

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('it')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang')
      let initial = LANGS.includes(saved) ? saved : null
      if (!initial) {
        // Prima visita: usa la lingua del browser del visitatore
        const prefs = (navigator.languages && navigator.languages.length
          ? navigator.languages
          : [navigator.language || 'it']
        ).map((l) => String(l).toLowerCase().slice(0, 2))
        initial = prefs.find((l) => LANGS.includes(l)) || 'en'
      }
      setLangState(initial)
      document.documentElement.lang = initial
    } catch (e) {}
  }, [])

  const setLang = useCallback((l) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch (e) {}
    try {
      document.documentElement.lang = l
    } catch (e) {}
  }, [])

  const value = { lang, setLang, t: TR[lang] || TR.it }
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
