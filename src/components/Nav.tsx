import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { LanguageToggle } from './LanguageToggle'
import './Nav.css'

interface Props {
  lang: Lang
  onLangChange: (lang: Lang) => void
}

export function Nav({ lang, onLangChange }: Props) {
  const t = translations[lang]

  return (
    <motion.header
      className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#hero" className="nav-brand">
        <span className="nav-dot" />
        {t.brand}
      </a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#awards">{t.navAwards}</a>
        <a href="#digital-arts">{t.navDigitalArts}</a>
        <a href="#gallery">{t.navGallery}</a>
        <a href="#coming-soon">{t.navComingSoon}</a>
        <a href="#about">{t.navAbout}</a>
      </nav>
      <LanguageToggle lang={lang} onChange={onLangChange} />
    </motion.header>
  )
}
