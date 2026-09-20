import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import {
  awards,
  type Award,
  type AwardPhoto,
  type AwardPhotoRole,
  type AwardTier,
} from '../data/awards'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Awards.css'

interface Props {
  lang: Lang
}

const tierClass: Record<AwardTier, string> = {
  silver: 'tier-silver',
  first: 'tier-first',
  second: 'tier-second',
  merit: 'tier-merit',
}

const roleLabel: Record<AwardPhotoRole, { en: string; zh: string }> = {
  work: { en: 'winning work', zh: '得獎作品' },
  receive: { en: 'receiving award', zh: '領獎瞬間' },
  moment: { en: 'ceremony moment', zh: '典禮瞬間' },
}

function MedalIcon({ tier }: { tier: AwardTier }) {
  const labels: Record<AwardTier, string> = {
    silver: '🥈',
    first: '🏅',
    second: '🥉',
    merit: '✨',
  }
  return <span className="award-icon" aria-hidden="true">{labels[tier]}</span>
}

function photoAlt(award: Award, photo: AwardPhoto, lang: Lang): string {
  const title = lang === 'zh' ? award.zh.title : award.en.title
  const custom = lang === 'zh' ? photo.zh : photo.en
  if (custom) return custom
  const role = roleLabel[photo.role][lang]
  return `${title} — ${role}`
}

export function Awards({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()
  const [lightbox, setLightbox] = useState<{
    award: Award
    photo: AwardPhoto
  } | null>(null)

  const tierLabel = (tier: AwardTier) => {
    switch (tier) {
      case 'silver':
        return t.tierSilver
      case 'first':
        return t.tierFirst
      case 'second':
        return t.tierSecond
      case 'merit':
        return t.tierMerit
    }
  }

  return (
    <section id="awards" className="section awards">
      <div className="section-header">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {t.awardsTitle}
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.awardsSubtitle}
        </motion.p>
      </div>

      <div className="awards-grid">
        {awards.map((award, i) => {
          const copy = lang === 'zh' ? award.zh : award.en
          const photoCount = award.photos.length
          return (
            <motion.article
              key={award.id}
              className={`award-card glass ${tierClass[award.tier]}${award.id === 1 ? ' award-featured' : ''}`}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: reduced ? 0 : i * 0.07, duration: 0.45 }}
              whileHover={reduced ? undefined : { y: -4 }}
            >
              <div className="award-body">
                <div className="award-top">
                  <MedalIcon tier={award.tier} />
                  <span className="award-num">#{String(award.id).padStart(2, '0')}</span>
                </div>
                <h3>{copy.title}</h3>
                {copy.category && <p className="award-cat">{copy.category}</p>}
                <p className="award-result">{copy.result}</p>
                <span className="award-tier-label">{tierLabel(award.tier)}</span>
              </div>

              {photoCount > 0 && (
                <div
                  className={`award-photos ${photoCount >= 3 ? 'cols-3' : 'cols-2'}`}
                  role="list"
                >
                  {award.photos.map((photo) => {
                    const alt = photoAlt(award, photo, lang)
                    return (
                      <button
                        key={photo.file}
                        type="button"
                        className="award-thumb"
                        role="listitem"
                        onClick={() => setLightbox({ award, photo })}
                        aria-label={alt}
                      >
                        <img
                          src={photo.file}
                          alt={alt}
                          loading="lazy"
                          width={320}
                          height={200}
                        />
                        <span className="award-thumb-role" aria-hidden="true">
                          {roleLabel[photo.role][lang]}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </motion.article>
          )
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t.lightboxClose}
          >
            <motion.img
              key={lightbox.photo.file}
              src={lightbox.photo.file}
              alt={photoAlt(lightbox.award, lightbox.photo, lang)}
              initial={reduced ? false : { scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button type="button" className="lightbox-close" onClick={() => setLightbox(null)}>
              {t.lightboxClose} ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
