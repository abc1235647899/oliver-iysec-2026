import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './DigitalArts.css'

interface Props {
  lang: Lang
}

const artworks = [
  {
    id: 'future-society',
    src: './art/digital-arts-future-society.jpg',
    variant: 'future' as const,
    titleKey: 'artFutureTitle' as const,
    captionKey: 'artFutureCaption' as const,
  },
  {
    id: 'temple-culture',
    src: './art/digital-arts-temple-culture.png',
    variant: 'heritage' as const,
    titleKey: 'artTempleTitle' as const,
    captionKey: 'artTempleCaption' as const,
  },
]

export function DigitalArts({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()

  return (
    <section id="digital-arts" className="section digital-arts">
      <div className="section-header">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {t.digitalArtsTitle}
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.digitalArtsSubtitle}
        </motion.p>
      </div>

      <div className="da-art-grid">
        {artworks.map((art, i) => (
          <motion.article
            key={art.id}
            className={`da-art-card glass neon-ring da-${art.variant}`}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: reduced ? 0 : i * 0.08, duration: 0.45 }}
          >
            <div className="da-art-frame">
              <img
                src={art.src}
                alt={t[art.titleKey]}
                loading="lazy"
                width={640}
                height={480}
              />
            </div>
            <div className="da-art-meta">
              <h3>{t[art.titleKey]}</h3>
              <p>{t[art.captionKey]}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="da-videos">
        <motion.article
          className="da-video-card glass neon-ring"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>{t.videoFutureTitle}</h3>
          <p className="da-video-cap">{t.videoFutureCaption}</p>
          <div className="da-video-wrap">
            <video
              controls
              playsInline
              poster="./art/digital-arts-future-society.jpg"
              preload="metadata"
            >
              <source src="./videos/Oliver_Future_v1.mp4" type="video/mp4" />
              {lang === 'zh' ? '您的瀏覽器不支援影片播放。' : 'Your browser does not support video playback.'}
            </video>
          </div>
        </motion.article>

        <motion.article
          className="da-video-card glass neon-ring da-heritage"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reduced ? 0 : 0.1 }}
        >
          <h3>{t.videoTempleTitle}</h3>
          <p className="da-video-cap">{t.videoTempleCaption}</p>
          <div className="da-video-wrap da-embed">
            <iframe
              src="https://www.youtube.com/embed/FI-RXc6kbKE"
              title={t.videoTempleTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </motion.article>
      </div>
    </section>
  )
}
