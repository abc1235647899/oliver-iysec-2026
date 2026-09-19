import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { subject } from '../data/awards'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './About.css'

interface Props {
  lang: Lang
}

export function About({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()

  const facts = [
    {
      label: t.aboutAge,
      value: String(subject.age),
    },
    {
      label: t.aboutGrade,
      value: lang === 'zh' ? subject.gradeZh : subject.gradeEn,
    },
    {
      label: t.aboutSchool,
      value: lang === 'zh' ? subject.schoolZh : subject.schoolEn,
    },
    {
      label: t.aboutEvent,
      value: lang === 'zh' ? subject.eventZh : subject.eventEn,
    },
  ]

  return (
    <section id="about" className="section about">
      <div className="section-header">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.aboutTitle}
        </motion.h2>
      </div>

      <motion.div
        className="about-card glass neon-ring"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="about-body">{t.aboutBody}</p>
        <dl className="about-facts">
          {facts.map((f) => (
            <div key={f.label} className="about-fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}
