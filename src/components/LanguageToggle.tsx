import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import './LanguageToggle.css'

interface Props {
  lang: Lang
  onChange: (lang: Lang) => void
}

export function LanguageToggle({ lang, onChange }: Props) {
  return (
    <div className="lang-toggle glass" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === 'zh' ? 'active' : ''}
        onClick={() => onChange('zh')}
        aria-pressed={lang === 'zh'}
      >
        繁中
      </button>
      <motion.span
        className="lang-pill"
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{ left: lang === 'en' ? '4px' : 'calc(50% + 0px)' }}
      />
    </div>
  )
}
