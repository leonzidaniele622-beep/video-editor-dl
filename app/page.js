'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  ArrowUpRight,
  Play,
  X,
  Mail,
  Linkedin,
  Instagram,
  Menu,
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
  GraduationCap,
  BookOpen,
  MapPin,
} from 'lucide-react'

/* =========================================================
   PLACEHOLDER MEDIA — facilmente sostituibili
   ========================================================= */
const HERO_VIDEO =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const PROJECT_VIDEO =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'

const IMG = {
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

const ACCENT = '#E63946'

/* =========================================================
   DATA
   ========================================================= */
const CATEGORIES = ['Tutti', 'Eventi', 'Aziende', 'Concerti', 'Social Media']

const PROJECTS = [
  {
    id: 'p1',
    title: 'Aftermovie Evento',
    category: 'Eventi',
    image: IMG.filmSet,
    span: 'tall',
    year: '2025',
    client: 'Placeholder Client',
    description:
      'Aftermovie dinamico che racconta l\u2019energia e i momenti salienti di un evento dal vivo, con un montaggio ritmato e sincronizzato sulla musica.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Lightroom'],
  },
  {
    id: 'p2',
    title: 'Spot Aziendale',
    category: 'Aziende',
    image: IMG.corporate,
    span: 'normal',
    year: '2024',
    client: 'Vigneto Sicuro',
    description:
      'Video istituzionale pensato per comunicare valori e identit\u00e0 del brand, con una fotografia curata e un tono elegante e professionale.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
  },
  {
    id: 'p3',
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
    title: 'Backstage Concerto',
    category: 'Concerti',
    image: IMG.concert2,
    span: 'normal',
    year: '2024',
    client: 'Placeholder Client',
    description:
      'Racconto dietro le quinte di un concerto: preparazione, soundcheck e atmosfera, con un montaggio narrativo che valorizza l\u2019emozione del live.',
    software: ['Adobe Premiere Pro', 'Photoshop'],
  },
  {
    id: 'p6',
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
    title: 'Recap Evento',
    category: 'Eventi',
    image: IMG.concert1,
    span: 'normal',
    year: '2023',
    client: 'Placeholder Client',
    description:
      'Recap breve e d\u2019impatto pensato per la condivisione online, che sintetizza le fasi principali dell\u2019evento mantenendo alto il coinvolgimento.',
    software: ['Adobe Premiere Pro', 'Lightroom'],
  },
  {
    id: 'p8',
    title: 'Content Verticale',
    category: 'Social Media',
    image: IMG.filmSet,
    span: 'normal',
    year: '2025',
    client: 'Placeholder Client',
    description:
      'Serie di contenuti verticali per una strategia social continuativa, con identit\u00e0 visiva coerente e un ritmo di montaggio riconoscibile.',
    software: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
  },
]

const EXPERIENCES = [
  {
    role: 'Freelance Videomaker & Video Editor',
    detail:
      'Produzione e post-produzione video per aziende, eventi e contenuti social.',
    period: 'Oggi',
  },
  {
    role: 'Tirocinio',
    detail: 'Camon Video',
    period: '',
  },
  {
    role: 'Social Media Manager',
    detail: 'Discronia Service',
    period: '',
  },
  {
    role: 'Produzione video',
    detail: 'Vigneto Sicuro',
    period: '',
  },
  {
    role: 'Produzione video',
    detail: 'Marzymona Services',
    period: '',
  },
]

const SOFTWARE = [
  { name: 'Adobe Premiere Pro', icon: Film },
  { name: 'Adobe After Effects', icon: Sparkles },
  { name: 'Adobe Photoshop', icon: Palette },
  { name: 'Adobe Illustrator', icon: Layers },
  { name: 'Adobe Lightroom', icon: Palette },
  { name: 'Adobe InDesign', icon: BookOpen },
]

const SKILLS = [
  { name: 'Video Editing', icon: Scissors },
  { name: 'Color Correction', icon: Palette },
  { name: 'Motion Graphics', icon: Sparkles },
  { name: 'Storytelling', icon: BookOpen },
  { name: 'Content Creation', icon: Smartphone },
  { name: 'Audio Editing', icon: Volume2 },
]

const CATEGORY_ICON = {
  Eventi: Calendar,
  Aziende: Building2,
  Concerti: Music2,
  'Social Media': Smartphone,
}

/* =========================================================
   MOTION VARIANTS
   ========================================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/* =========================================================
   NAVBAR
   ========================================================= */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Competenze', href: '#competenze' },
  { label: 'Contatti', href: '#contatti' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="group flex items-center gap-1">
            <span className="text-2xl font-extrabold tracking-tight">DL</span>
            <span
              className="h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150"
              style={{ background: ACCENT }}
            />
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contatti"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 md:inline-flex"
            style={{ background: ACCENT }}
          >
            Contattami
          </a>

          <button
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden border-t border-white/5 bg-[#0B0B0B]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* =========================================================
   HERO
   ========================================================= */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      {/* Video background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={IMG.filmSet}
          preload="metadata"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* dark & slowed cinematic feel */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-transparent to-[#0B0B0B]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/50"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Daniele Leonzi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-white/80 sm:text-base"
        >
          Video Editor <span style={{ color: ACCENT }}>•</span> Videomaker{' '}
          <span style={{ color: ACCENT }}>•</span> Content Creator
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60"
        >
          Trasformo idee e riprese in contenuti coinvolgenti attraverso
          montaggio, storytelling e attenzione ai dettagli.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            style={{ background: ACCENT }}
          >
            Guarda i lavori
            <Play size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
          >
            Contattami
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  )
}

/* =========================================================
   SECTION HEADER
   ========================================================= */
function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-14 max-w-2xl">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: ACCENT }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="text-4xl font-extrabold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-5 text-base leading-relaxed text-white/50"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

/* =========================================================
   PORTFOLIO
   ========================================================= */
function Portfolio({ onOpen }) {
  const [active, setActive] = useState('Tutti')
  const filtered =
    active === 'Tutti'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Lavori selezionati"
          description="Una raccolta di progetti tra eventi, aziende, concerti e contenuti social. Ogni lavoro nasce dalla cura del montaggio e dall’attenzione al dettaglio."
        />

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === c
                  ? 'text-white'
                  : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
              style={active === c ? { background: ACCENT } : {}}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const Icon = CATEGORY_ICON[p.category] || Film
              return (
                <motion.button
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                  onClick={() => onOpen(p)}
                  className="masonry-item group relative block w-full overflow-hidden rounded-2xl border border-white/5 bg-[#111111] text-left"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      p.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-full"
                        style={{ background: ACCENT }}
                      >
                        <Play size={20} className="text-white" />
                      </span>
                    </div>

                    {/* text */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-white/60">
                        <Icon size={13} style={{ color: ACCENT }} />
                        {p.category}
                      </div>
                      <h3 className="mt-1 text-lg font-bold leading-snug text-white">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   PROJECT MODAL
   ========================================================= */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null
  const Icon = CATEGORY_ICON[project.category] || Film

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative my-8 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
        >
          <button
            aria-label="Chiudi"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/80"
          >
            <X size={20} />
          </button>

          {/* video */}
          <div className="relative aspect-video w-full bg-black">
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster={project.image}
              preload="metadata"
            >
              <source src={PROJECT_VIDEO} type="video/mp4" />
            </video>
          </div>

          {/* content */}
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/60">
              <Icon size={14} style={{ color: ACCENT }} />
              {project.category}
            </div>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {project.description}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Anno
                </p>
                <p className="mt-1 font-semibold">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Cliente
                </p>
                <p className="mt-1 font-semibold">{project.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">
                  Categoria
                </p>
                <p className="mt-1 font-semibold">{project.category}</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-white/40">
                Software utilizzati
              </p>
              <div className="flex flex-wrap gap-2">
                {project.software.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* =========================================================
   CHI SONO
   ========================================================= */
function About() {
  return (
    <section id="chi-sono" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src={IMG.portrait}
                alt="Daniele Leonzi"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 hidden rounded-2xl px-6 py-4 sm:block"
              style={{ background: ACCENT }}
            >
              <p className="text-2xl font-extrabold leading-none">DL</p>
              <p className="mt-1 text-xs font-medium text-white/80">
                Video Editor
              </p>
            </div>
          </motion.div>

          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: ACCENT }}
            >
              Chi sono
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Ritmo, storytelling e dettaglio.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 text-base leading-relaxed text-white/60"
            >
              Laureato in Comunicazione Visiva Multimediale presso l’Accademia
              di Belle Arti di Macerata. Mi occupo di produzione e
              post-produzione video per aziende, eventi e contenuti social. La
              mia passione per la musica mi ha permesso di sviluppare un forte
              senso del ritmo e dell’attenzione ai dettagli, elementi che
              applico quotidianamente nel montaggio video.
            </motion.p>
          </div>
        </div>

        {/* ESPERIENZE — Timeline */}
        <div className="mt-28">
          <SectionHeader eyebrow="Percorso" title="Esperienze" />
          <div className="relative ml-3 border-l border-white/10 pl-8">
            {EXPERIENCES.map((e, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="relative pb-10 last:pb-0"
              >
                <span
                  className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#0B0B0B]"
                  style={{ background: ACCENT }}
                />
                {e.period && (
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    {e.period}
                  </p>
                )}
                <h4 className="mt-1 text-xl font-bold">{e.role}</h4>
                <p className="mt-1 text-white/50">{e.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   COMPETENZE
   ========================================================= */
function Skills() {
  return (
    <section id="competenze" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Competenze"
          title="Software & skill"
          description="Gli strumenti e le competenze che utilizzo ogni giorno per dare forma alle idee."
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Software */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Software
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SOFTWARE.map((s, i) => (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#111111] p-5 transition-colors duration-300 hover:border-white/20"
                >
                  <s.icon
                    size={22}
                    className="transition-colors"
                    style={{ color: ACCENT }}
                  />
                  <span className="text-sm font-medium leading-snug text-white/80">
                    {s.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Competenze
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SKILLS.map((s, i) => (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#111111] p-5 transition-colors duration-300 hover:border-white/20"
                >
                  <s.icon
                    size={22}
                    className="transition-colors"
                    style={{ color: ACCENT }}
                  />
                  <span className="text-sm font-medium leading-snug text-white/80">
                    {s.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FORMAZIONE */}
        <div className="mt-24">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Formazione
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-[#111111] p-8"
            >
              <GraduationCap size={24} style={{ color: ACCENT }} />
              <p className="mt-4 text-xs uppercase tracking-wider text-white/40">
                Laurea
              </p>
              <h4 className="mt-2 text-xl font-bold">
                Comunicazione Visiva Multimediale
              </h4>
              <p className="mt-2 flex items-center gap-2 text-white/50">
                <MapPin size={14} /> Accademia di Belle Arti di Macerata
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-[#111111] p-8"
            >
              <BookOpen size={24} style={{ color: ACCENT }} />
              <p className="mt-4 text-xs uppercase tracking-wider text-white/40">
                Diploma
              </p>
              <h4 className="mt-2 text-xl font-bold">
                Liceo Scientifico Scienze Applicate
              </h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   CONTATTI
   ========================================================= */
function Contact() {
  return (
    <section id="contatti" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Realizziamo qualcosa{' '}
          <span style={{ color: ACCENT }}>insieme.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          Sono disponibile per collaborazioni freelance, progetti creativi e
          opportunità lavorative.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:daniele.leonzi@example.com"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            style={{ background: ACCENT }}
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
          >
            <Instagram size={18} /> Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   FOOTER
   ========================================================= */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
        <a href="#home" className="flex items-center gap-1">
          <span className="text-xl font-extrabold">DL</span>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: ACCENT }}
          />
        </a>
        <p className="text-sm text-white/40">© 2026 Daniele Leonzi</p>
      </div>
    </footer>
  )
}

/* =========================================================
   APP
   ========================================================= */
function App() {
  const [selected, setSelected] = useState(null)

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />
      <Hero />
      <Portfolio onOpen={setSelected} />
      <About />
      <Skills />
      <Contact />
      <Footer />
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  )
}

export default App
