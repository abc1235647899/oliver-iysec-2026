import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './MidAutumn.css'

interface Props {
  lang: Lang
}

function VideoOrGif({
  srcMp4,
  srcGif,
  alt,
  reduced,
}: {
  srcMp4: string
  srcGif: string
  alt: string
  reduced: boolean
}) {
  if (reduced) {
    return (
      <video className="mid-video" src={srcMp4} controls playsInline muted />
    )
  }
  return (
    <video className="mid-video" autoPlay muted loop playsInline>
      <source src={srcMp4} type="video/mp4" />
      <img src={srcGif} alt={alt} />
    </video>
  )
}

export function MidAutumn({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()

  const cards = [
    {
      key: 'temple',
      title: t.midAutumnFromTemple,
      mp4: './mid-autumn/mid-autumn-temple.mp4',
      gif: './mid-autumn/mid-autumn-temple.gif',
    },
    {
      key: 'future',
      title: t.midAutumnFromFuture,
      mp4: './mid-autumn/mid-autumn-future.mp4',
      gif: './mid-autumn/mid-autumn-future.gif',
    },
  ]

  return (
    <section id="mid-autumn" className="section mid-autumn">
      <div className="section-header">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.midAutumnTitle}
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.midAutumnSubtitle}
        </motion.p>
      </div>

      <div className="mid-grid">
        {cards.map((c, i) => (
          <motion.article
            key={c.key}
            className="mid-card glass neon-ring"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: reduced ? 0 : (i % 4) * 0.05 }}
          >
            <h3 className="mid-title">{c.title}</h3>
            <VideoOrGif
              srcMp4={c.mp4}
              srcGif={c.gif}
              alt={c.title}
              reduced={reduced}
            />
            <div className="mid-actions">
              <a className="mid-btn" href={c.mp4} download>
                {t.midAutumnDownloadVideo}
              </a>
              <a className="mid-btn" href={c.gif} download>
                {t.midAutumnDownloadGif}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

