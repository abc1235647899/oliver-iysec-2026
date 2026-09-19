import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { awards, type AwardTier } from '../data/awards'
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

function MedalIcon({ tier }: { tier: AwardTier }) {
  const labels: Record<AwardTier, string> = {
    silver: '🥈',
    first: '🏅',
    second: '🥉',
    merit: '✨',
  }
  return <span className="award-icon" aria-hidden="true">{labels[tier]}</span>
}

export function Awards({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()

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
          return (
            <motion.article
              key={award.id}
              className={`award-card glass ${tierClass[award.tier]}`}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: reduced ? 0 : i * 0.07, duration: 0.45 }}
              whileHover={reduced ? undefined : { y: -6, scale: 1.02 }}
            >
              <div className="award-top">
                <MedalIcon tier={award.tier} />
                <span className="award-num">#{String(award.id).padStart(2, '0')}</span>
              </div>
              <h3>{copy.title}</h3>
              {copy.category && <p className="award-cat">{copy.category}</p>}
              <p className="award-result">{copy.result}</p>
              <span className="award-tier-label">{tierLabel(award.tier)}</span>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
