import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { shippingPhotos } from '../data/shipping'
import './ComingSoon.css'

interface Props {
  lang: Lang
}

export function ComingSoon({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()
  const [active, setActive] = useState<number | null>(null)

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
        <img
          className="coming-soon-banner"
          src="./coming-soon/shipping-banner.jpg"
          alt={t.comingSoonBannerAlt}
          loading="lazy"
          decoding="async"
          width={1024}
          height={270}
        />
        <span className="coming-soon-badge">{t.comingSoonBadge}</span>
        <p className="coming-soon-headline">{t.comingSoonHeadline}</p>
        <h3 className="coming-soon-event">{t.comingSoonEvent}</h3>
        <p className="coming-soon-result">{t.comingSoonResult}</p>
        <p className="coming-soon-note">{t.comingSoonNote}</p>
      </motion.article>

      <div className="coming-soon-photos">
        {shippingPhotos.map((p, i) => {
          const orig = `./photos/shipping/${p.file}`
          const thumb = `./thumbs/shipping/${p.file.replace(/\.(jpg|jpeg|png)$/i, '')}.jpg`
          const alt = lang === 'zh' ? p.zh : p.en
          return (
            <motion.button
              key={p.file}
              type="button"
              className="coming-photo glass"
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: reduced ? 0 : (i % 6) * 0.05 }}
              onClick={() => setActive(i)}
              aria-label={alt}
            >
              <img
                src={thumb}
                srcSet={`${thumb} 640w, ${orig} 1600w`}
                sizes="(min-width: 900px) 30vw, (min-width: 640px) 45vw, 90vw"
                alt={alt}
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
              />
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t.lightboxClose}
          >
            <motion.img
              key={shippingPhotos[active].file}
              src={`./photos/shipping/${shippingPhotos[active].file}`}
              alt={lang === 'zh' ? shippingPhotos[active].zh : shippingPhotos[active].en}
              initial={reduced ? false : { scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              decoding="async"
              onClick={(e) => e.stopPropagation()}
            />
            <button type="button" className="lightbox-close" onClick={() => setActive(null)}>
              {t.lightboxClose} ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
