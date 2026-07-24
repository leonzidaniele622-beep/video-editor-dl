'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springCfg = { stiffness: 500, damping: 40, mass: 0.3 }
  const sx = useSpring(x, springCfg)
  const sy = useSpring(y, springCfg)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const t = e.target
      setHover(!!(t && t.closest && t.closest('a, button, input, textarea, [data-cursor]')))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <span className="block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C4BA6]" />
      </motion.div>
      <motion.div
        style={{ x: sx, y: sy }}
        animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 0.7 : 0.35 }}
        transition={{ duration: 0.2 }}
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <span className="block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />
      </motion.div>
    </div>
  )
}
