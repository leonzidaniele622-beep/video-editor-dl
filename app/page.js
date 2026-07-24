'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { toast, Toaster } from 'sonner'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  Play,
  X,
  Mail,
  Linkedin,
  Instagram,
  Menu,
  GraduationCap,
  BookOpen,
  MapPin,
  Send,
  Loader2,
  Film,
  ChevronLeft,
  ChevronRight,
  Camera,
  ArrowUpRight,
  Download,
  Newspaper,
} from 'lucide-react'
import {
  ACCENT,
  CV_URL,
  HERO_VIDEO,
  IMG,
  CONTACT,
  CATEGORIES,
  CATEGORY_ORDER,
  CATEGORY_LABEL,
  CATEGORY_LABEL_EN,
  CATEGORY_COVER,
  CATEGORY_ICON,
  PROJECTS,
  GALLERY,
  GALLERY_TITLE_EN,
  SMM,
  EXPERIENCES,
  SOFTWARE,
  SKILLS,
  fadeUp,
  scaleIn,
} from '@/lib/portfolio'
import { useLang, field } from '@/lib/i18n'

/* =========================================================
   NAVBAR
   ========================================================= */
const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'gallery', href: '#gallery' },
  { key: 'social', href: '#social' },
  { key: 'about', href: '#chi-sono' },
  { key: 'skills', href: '#competenze' },
  { key: 'contact', href: '#contatti' },
]

function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 p-0.5 text-xs font-semibold ${className}`}
    >
      {['it', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === l ? 'text-white' : 'text-white/50 hover:text-white/80'
          }`}
          style={lang === l ? { background: ACCENT } : {}}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

function Navbar() {
  const { t } = useLang()
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
                {t.nav[l.key]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LangToggle />
            <a
              href="#contatti"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
              style={{ background: ACCENT }}
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LangToggle />
            <button
              aria-label={t.nav.menu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                  {t.nav[l.key]}
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
  const { t } = useLang()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

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
          {t.hero.eyebrow}
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
          {t.hero.roles[0]} <span style={{ color: ACCENT }}>•</span>{' '}
          {t.hero.roles[1]} <span style={{ color: ACCENT }}>•</span>{' '}
          {t.hero.roles[2]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60"
        >
          {t.hero.tagline}
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
            {t.hero.ctaWork}
            <Play size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
          >
            {t.hero.ctaContact}
          </a>
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
          >
            <Download size={16} /> {t.hero.ctaCV}
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/60"
          />
        </div>
      </div>
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
function Portfolio() {
  const { t, lang } = useLang()
  const catLabel = (c) =>
    lang === 'en'
      ? CATEGORY_LABEL_EN[c] || t.categories[c] || c
      : CATEGORY_LABEL[c] || c
  const catName = (c) => t.categories[c] || c
  const [openCat, setOpenCat] = useState(null)
  const cats = CATEGORY_ORDER.filter((c) =>
    PROJECTS.some((p) => p.category === c)
  )
  const folders = cats.map((c) => {
    const items = PROJECTS.filter((p) => p.category === c)
    return { category: c, count: items.length, cover: CATEGORY_COVER[c] || items[0].image }
  })
  const activeItems = openCat
    ? PROJECTS.filter((p) => p.category === openCat)
    : []

  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.desc}
        />

        <AnimatePresence mode="wait">
          {!openCat ? (
            <motion.div
              key="folders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {folders.map((f, i) => {
                const Icon = CATEGORY_ICON[f.category] || Film
                return (
                  <motion.button
                    key={f.category}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    onClick={() => setOpenCat(f.category)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-white/5 bg-[#111111] text-left"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={f.cover}
                        alt={f.category}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
                        <Icon size={14} style={{ color: ACCENT }} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                          {t.portfolio.folder}
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
                          {catLabel(f.category)}
                        </h3>
                        <div className="mt-1 flex items-center gap-3 text-sm text-white/60">
                          <span>{f.count} {t.portfolio.videos}</span>
                          <span
                            className="inline-flex items-center gap-1 font-semibold"
                            style={{ color: ACCENT }}
                          >
                            {t.portfolio.open} <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              key="cat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setOpenCat(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5"
                  >
                    <ChevronLeft size={16} /> {t.portfolio.categories}
                  </button>
                  <h3 className="text-xl font-extrabold leading-tight sm:text-2xl">
                    {catLabel(openCat)}
                  </h3>
                </div>
                <span className="text-sm text-white/40">
                  {activeItems.length} {t.portfolio.videos}
                </span>
              </div>

              <div className="masonry">
                {activeItems.map((p, i) => {
                  const Icon = CATEGORY_ICON[p.category] || Film
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                      className="masonry-item"
                    >
                      <Link
                        href={`/progetti/${p.slug}`}
                        className="group relative block w-full overflow-hidden rounded-2xl border border-white/5 bg-[#111111] text-left"
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
                            className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.06]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <span
                              className="flex h-14 w-14 items-center justify-center rounded-full"
                              style={{ background: ACCENT }}
                            >
                              <Play size={20} className="text-white" />
                            </span>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-5">
                            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-white/60">
                              <Icon size={13} style={{ color: ACCENT }} />
                              {catName(p.category)}
                            </div>
                            <h3 className="mt-1 text-lg font-bold leading-snug text-white">
                              {p.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

/* =========================================================
   GALLERY (fotografia) + LIGHTBOX
   ========================================================= */
function GalleryLightbox({ index, onClose, onPrev, onNext }) {
  const { t, lang } = useLang()
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const item = GALLERY[index]
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      >
        <button
          aria-label="Chiudi"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80"
        >
          <X size={22} />
        </button>
        <button
          aria-label="Precedente"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80 sm:left-6"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          aria-label="Successivo"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80 sm:right-6"
        >
          <ChevronRight size={24} />
        </button>

        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[85vh] max-w-4xl"
        >
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[85vh] w-auto rounded-2xl object-contain"
          />
          <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent p-5">
            <p className="text-xs uppercase tracking-wider text-white/60">
              {t.categories[item.tag] || item.tag}
            </p>
            <p className="text-lg font-bold text-white">
              {lang === 'en' ? GALLERY_TITLE_EN[item.id] || item.title : item.title}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Gallery() {
  const { t, lang } = useLang()
  const [index, setIndex] = useState(null)
  const open = index !== null
  const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length)
  const next = () => setIndex((i) => (i + 1) % GALLERY.length)

  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          description={t.gallery.desc}
        />

        <div className="masonry">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => setIndex(i)}
              className="masonry-item group relative block w-full overflow-hidden rounded-2xl border border-white/5 bg-[#111111]"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  g.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: ACCENT }}
                  >
                    <Camera size={18} className="text-white" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">
                    {t.categories[g.tag] || g.tag}
                  </p>
                  <p className="text-sm font-bold text-white">
                    {lang === 'en' ? GALLERY_TITLE_EN[g.id] || g.title : g.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {open && (
        <GalleryLightbox
          index={index}
          onClose={() => setIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}


/* =========================================================
   SOCIAL MEDIA MANAGEMENT
   ========================================================= */
function SocialManagement() {
  const { t } = useLang()
  return (
    <section id="social" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={t.social.eyebrow}
          title={t.social.title}
          description={t.social.desc}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SMM.map((s, i) => (
            <motion.a
              key={s.handle}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="group rounded-2xl border border-white/5 bg-[#111111] p-8 transition-colors duration-300 hover:border-white/20"
            >
              <div className="flex items-start justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl"
                  style={{ background: 'rgba(124,58,237,0.16)' }}
                >
                  {s.logo ? (
                    <img
                      src={s.logo}
                      alt={s.brand}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Instagram size={22} style={{ color: ACCENT }} />
                  )}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                />
              </div>
              <p className="mt-6 text-xl font-bold">{s.brand}</p>
              <p className="mt-1 text-sm text-white/40">@{s.handle}</p>
              <span
                className="mt-5 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                style={
                  s.full
                    ? { background: ACCENT, color: '#fff' }
                    : {
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.7)',
                      }
                }
              >
                {s.full ? t.social.full : t.social.partial}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   CHI SONO + ESPERIENZE
   ========================================================= */
function About() {
  const { t, lang } = useLang()
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
                {t.about.badge}
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
              {t.about.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              {t.about.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 text-base leading-relaxed text-white/60"
            >
              {t.about.paragraph}
            </motion.p>
          </div>
        </div>

        {/* ESPERIENZE — Timeline */}
        <div className="mt-28">
          <SectionHeader eyebrow={t.experience.eyebrow} title={t.experience.title} />
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
                {field(e, 'period', lang) && (
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    {field(e, 'period', lang)}
                  </p>
                )}
                <h4 className="mt-1 text-xl font-bold">{field(e, 'role', lang)}</h4>
                <p className="mt-1 text-white/50">{field(e, 'detail', lang)}</p>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
                    style={{ background: ACCENT }}
                  >
                    <Newspaper size={15} />
                    {field(e, 'linkLabel', lang)}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   COMPETENZE + FORMAZIONE
   ========================================================= */
function Skills() {
  const { t } = useLang()
  return (
    <section id="competenze" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.desc}
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Software */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              {t.skills.software}
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
                  <s.icon size={22} style={{ color: ACCENT }} />
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
              {t.skills.skills}
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
                  <s.icon size={22} style={{ color: ACCENT }} />
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
            {t.skills.education}
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
                {t.skills.degree} · 2020 – 2024 · 104/110
              </p>
              <h4 className="mt-2 text-xl font-bold">
                {t.skills.degreeTitle}
              </h4>
              <p className="mt-2 flex items-center gap-2 text-white/50">
                <MapPin size={14} /> {t.skills.degreeSchool}
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
                {t.skills.diploma} · 2014 – 2020
              </p>
              <h4 className="mt-2 text-xl font-bold">
                {t.skills.diplomaTitle}
              </h4>
              <p className="mt-2 flex items-center gap-2 text-white/50">
                <MapPin size={14} /> {t.skills.diplomaSchool}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   CONTATTI + FORM
   ========================================================= */
function ContactForm() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error(t.form.fillAll)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        toast.success(t.form.success)
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error(data.error || t.form.errorSend)
      }
    } catch (err) {
      toast.error(t.form.errorNet)
    } finally {
      setLoading(false)
    }
  }

  const inputCls =
    'w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#7C3AED]'

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onSubmit={submit}
      className="mx-auto mt-14 max-w-xl space-y-4 text-left"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={t.form.name}
          className={inputCls}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder={t.form.email}
          className={inputCls}
        />
      </div>
      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder={t.form.message}
        rows={4}
        className={inputCls + ' resize-none'}
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
        style={{ background: ACCENT }}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> {t.form.sending}
          </>
        ) : (
          <>
            {t.form.send} <Send size={16} />
          </>
        )}
      </button>
    </motion.form>
  )
}

function Contact() {
  const { t } = useLang()
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
          {t.contact.title1}{' '}
          <span style={{ color: ACCENT }}>{t.contact.title2}</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          {t.contact.desc}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            style={{ background: ACCENT }}
          >
            <Mail size={18} /> {t.contact.email}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
          >
            <Linkedin size={18} /> {t.contact.linkedin}
          </a>
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
          >
            <Download size={18} /> {t.contact.cv}
          </a>
          {CONTACT.instagram && (
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5"
            >
              <Instagram size={18} /> {t.contact.instagram}
            </a>
          )}
        </motion.div>

        <ContactForm />
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
  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-white">
      <Toaster theme="dark" position="bottom-right" richColors />
      <Navbar />
      <Hero />
      <Portfolio />
      <Gallery />
      <SocialManagement />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
