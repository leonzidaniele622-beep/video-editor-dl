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
      sending: 'Invio…',
      fillAll: 'Compila tutti i campi.',
      success: 'Messaggio inviato! Ti risponderò presto.',
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
      sending: 'Sending…',
      fillAll: 'Please fill in all fields.',
      success: 'Message sent! I will get back to you soon.',
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
}

/* Helper: return localized field (base_en) with fallback to base */
export function field(obj, base, lang) {
  if (!obj) return ''
  if (lang === 'en' && obj[base + '_en']) return obj[base + '_en']
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
      if (saved === 'it' || saved === 'en') setLangState(saved)
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

  const value = { lang, setLang, t: TR[lang] }
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
