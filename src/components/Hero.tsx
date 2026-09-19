import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { photos, subject } from '../data/awards'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Hero.css'

interface Props {
  lang: Lang
}

export function Hero({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()
  const name = lang === 'zh' ? subject.nameZh : subject.nameEn
  const nameAlt = lang === 'zh' ? subject.nameEn : subject.nameZh

  return (
    <section id="hero" className="hero section">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-eyebrow">{t.heroEyebrow}</span>
          <h1>
            <span className="hero-name">{name}</span>
            <span className="hero-name-alt">{nameAlt}</span>
          </h1>
          <p className="hero-sub">{t.heroSubtitle}</p>
          <p className="hero-tag">{t.heroTagline}</p>
          <div className="hero-actions">
            <a href="#awards" className="btn-primary">
              {t.heroCta}
            </a>
            <a href="#gallery" className="btn-ghost">
              {t.galleryTitle}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero-photo glass neon-ring">
            <img
              src={`./photos/${photos.hero}`}
              alt={`${subject.nameEn} with family and IYSEC trophies`}
              width={640}
              height={800}
              loading="eager"
            />
            <div className="hero-badge glass">
              <strong>7</strong>
              <span>{lang === 'zh' ? '項大獎' : 'Awards'}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#awards"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>{t.heroScroll}</span>
        <span className="scroll-chevron" />
      </motion.a>
    </section>
  )
}
