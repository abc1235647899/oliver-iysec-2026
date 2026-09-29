import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { photos } from '../data/awards'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Gallery.css'

interface Props {
  lang: Lang
}

export function Gallery({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="section gallery">
      <div className="section-header">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.galleryTitle}
        </motion.h2>
        <p>{t.gallerySubtitle}</p>
      </div>

      <div className="gallery-grid">
        {photos.gallery.map((photo, i) => (
          <motion.button
            key={photo.file}
            type="button"
            className="gallery-item glass"
            initial={reduced ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: reduced ? 0 : (i % 6) * 0.05 }}
            onClick={() => setActive(i)}
            aria-label={lang === 'zh' ? photo.zh : photo.en}
          >
            {(() => {
              const orig = `./photos/${photo.file}`
              const thumbBase = orig.replace('./photos/', './thumbs/').replace(/\.(jpg|jpeg|png)$/i, '')
              const thumbJpg = `${thumbBase}.jpg`
              return (
                <img
                  src={thumbJpg}
                  srcSet={`${thumbJpg} 640w, ${orig} 1600w`}
                  sizes="(min-width: 960px) 25vw, (min-width: 640px) 33vw, 50vw"
                  alt={lang === 'zh' ? photo.zh : photo.en}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
              )
            })()}
            <span className="gallery-cap">{lang === 'zh' ? photo.zh : photo.en}</span>
          </motion.button>
        ))}
      </div>

      <p className="gallery-stay-tuned">{t.galleryStayTuned}</p>

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
              key={photos.gallery[active].file}
              src={`./photos/${photos.gallery[active].file}`}
              alt={lang === 'zh' ? photos.gallery[active].zh : photos.gallery[active].en}
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
