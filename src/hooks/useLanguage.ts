import { useCallback, useEffect, useState } from 'react'
import type { Lang } from '../data/i18n'
import { translations } from '../data/i18n'

const STORAGE_KEY = 'oliver-iysec-lang'

function readStored(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'zh') return v
  } catch {
    /* ignore */
  }
  return 'en'
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window !== 'undefined' ? readStored() : 'en',
  )

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
  }, [])

  const toggle = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'zh' : 'en'))
  }, [])

  const t = translations[lang]

  return { lang, setLang, toggle, t }
}
