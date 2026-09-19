import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import './Footer.css'

interface Props {
  lang: Lang
}

export function Footer({ lang }: Props) {
  const t = translations[lang]

  return (
    <footer className="footer">
      <p>{t.footerMade}</p>
      <p className="footer-org">{t.footerOrganizer}</p>
    </footer>
  )
}
