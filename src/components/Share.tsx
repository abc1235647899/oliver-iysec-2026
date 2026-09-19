import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Share.css'

interface Props {
  lang: Lang
}

export function Share({ lang }: Props) {
  const t = translations[lang]
  const reduced = useReducedMotion()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      const input = document.createElement('input')
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="share" className="section share">
      <motion.div
        className="share-card glass neon-ring"
        initial={reduced ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t.shareTitle}</h2>
        <p>{t.shareSubtitle}</p>
        <button type="button" className="btn-primary share-btn" onClick={handleCopy}>
          {copied ? t.shareCopied : t.shareCopy}
        </button>
      </motion.div>
    </section>
  )
}
