'use client'

import { ACCENT } from '@/lib/portfolio'
import { useLang, LANGS } from '@/lib/i18n'

export default function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 p-0.5 text-xs font-semibold ${className}`}
    >
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
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
