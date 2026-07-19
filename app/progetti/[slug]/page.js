'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Film } from 'lucide-react'
import {
  PROJECTS,
  PROJECT_VIDEO,
  ACCENT,
  CATEGORY_ICON,
} from '@/lib/portfolio'

function InstagramEmbeds({ items }) {
  useEffect(() => {
    const process = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }
    if (window.instgrm) {
      process()
    } else if (!document.getElementById('instagram-embed-script')) {
      const s = document.createElement('script')
      s.id = 'instagram-embed-script'
      s.src = 'https://www.instagram.com/embed.js'
      s.async = true
      s.onload = process
      document.body.appendChild(s)
    } else {
      const t = setTimeout(process, 800)
      return () => clearTimeout(t)
    }
  }, [items])

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((code) => (
        <blockquote
          key={code}
          className="instagram-media"
          data-instgrm-permalink={`https://www.instagram.com/p/${code}/`}
          data-instgrm-version="14"
          style={{
            background: '#111',
            border: 0,
            borderRadius: 12,
            margin: 0,
            width: '100%',
            minWidth: 0,
          }}
        />
      ))}
    </div>
  )
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params?.slug
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? PROJECTS[index] : null

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0B0B0B] px-6 text-center text-white">
        <h1 className="text-3xl font-extrabold">Progetto non trovato</h1>
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          style={{ background: ACCENT }}
        >
          <ArrowLeft size={16} /> Torna al portfolio
        </Link>
      </main>
    )
  }

  const Icon = CATEGORY_ICON[project.category] || Film
  const next = PROJECTS[(index + 1) % PROJECTS.length]
  const isPortrait = project.orientation === 'portrait'

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0B0B0B]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-extrabold tracking-tight">DL</span>
            <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> Portfolio
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 lg:px-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            <Icon size={14} style={{ color: ACCENT }} />
            {project.category}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
        </motion.div>

        {/* Media */}
        {project.instagram ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10"
          >
            <InstagramEmbeds items={project.instagram} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black ${
              isPortrait ? 'mx-auto max-w-sm' : ''
            }`}
          >
            <div
              className={`relative w-full ${
                isPortrait ? 'aspect-[9/16]' : 'aspect-video'
              }`}
            >
              {project.youtube ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${project.youtube}?rel=0&modestbranding=1`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
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
                  <source src={project.video || PROJECT_VIDEO} type="video/mp4" />
                </video>
              )}
            </div>
          </motion.div>
        )}

        {/* Content grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Il progetto
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {project.description}
            </p>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
              Software utilizzati
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="space-y-6 rounded-2xl border border-white/10 bg-[#111111] p-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40">Anno</p>
              <p className="mt-1 text-lg font-semibold">{project.year}</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-wider text-white/40">Cliente</p>
              <p className="mt-1 text-lg font-semibold">{project.client}</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-wider text-white/40">Categoria</p>
              <p className="mt-1 text-lg font-semibold">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Next project */}
        <Link
          href={`/progetti/${next.slug}`}
          className="group mt-20 flex items-center justify-between rounded-3xl border border-white/10 bg-[#111111] p-8 transition-colors hover:border-white/30 sm:p-10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Prossimo progetto
            </p>
            <p className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {next.title}
            </p>
          </div>
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{ background: ACCENT }}
          >
            <ArrowUpRight size={22} className="text-white" />
          </span>
        </Link>
      </div>
    </main>
  )
}
