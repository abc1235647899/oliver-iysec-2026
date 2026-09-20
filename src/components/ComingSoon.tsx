import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './ComingSoon.css'

interface Props {
  lang: Lang
}

export function ComingSoon({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()

  return (
    <section id="coming-soon" className="section coming-soon">
      <div className="section-header">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {t.comingSoonTitle}
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.comingSoonSubtitle}
        </motion.p>
      </div>

      <motion.article
        className="coming-soon-card glass neon-ring"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="coming-soon-badge">{t.comingSoonBadge}</span>
        <p className="coming-soon-headline">{t.comingSoonHeadline}</p>
        <h3 className="coming-soon-event">{t.comingSoonEvent}</h3>
        <p className="coming-soon-result">{t.comingSoonResult}</p>
        <p className="coming-soon-note">{t.comingSoonNote}</p>
      </motion.article>
    </section>
  )
}
