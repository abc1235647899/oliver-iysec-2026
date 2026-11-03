import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { mediaItems } from '../data/media'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Media.css'

interface Props {
  lang: Lang
}

export function Media({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()

  return (
    <section id="media" className="section media">
      <div className="section-header">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.mediaTitle}
        </motion.h2>
      </div>

      <div className="media-grid">
        {mediaItems.map((item, i) => (
          <motion.a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="media-card glass neon-ring"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: reduced ? 0 : (i % 6) * 0.05 }}
            aria-label={`${item.outlet} — ${lang === 'zh' ? item.titleZh : item.titleEnShort ?? item.titleZh}`}
          >
            <div className="media-top">
              <span className="media-outlet">{item.outlet}</span>
              {item.date ? (
                <time className="media-date" dateTime={item.date}>
                  {item.date}
                </time>
              ) : null}
            </div>
            <h3 className="media-title-zh">{item.titleZh}</h3>
            {item.titleEnShort ? <p className="media-title-en">{item.titleEnShort}</p> : null}
            <span className="media-cta">
              {t.mediaRead} →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

