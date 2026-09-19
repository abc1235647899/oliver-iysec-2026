import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Background.css'

const PARTICLE_COUNT = 36

export function Background() {
  const reduced = useReducedMotion()

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 6,
        color: i % 3 === 0 ? 'var(--cyan)' : i % 3 === 1 ? 'var(--teal)' : 'var(--gold)',
      })),
    [],
  )

  return (
    <div className="bg-root" aria-hidden="true">
      <div className="bg-gradient" />
      <div className="bg-grid" />
      <div className="bg-orbs">
        <div className="orb orb-cyan" />
        <div className="orb orb-teal" />
        <div className="orb orb-gold" />
        <div className="orb orb-pink" />
      </div>
      {!reduced &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.85, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
    </div>
  )
}
