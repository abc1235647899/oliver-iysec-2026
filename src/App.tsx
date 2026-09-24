import { Background } from './components/Background'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Awards } from './components/Awards'
import { DigitalArts } from './components/DigitalArts'
import { Gallery } from './components/Gallery'
import { ComingSoon } from './components/ComingSoon'
import { Media } from './components/Media'
import { About } from './components/About'
import { Share } from './components/Share'
import { Footer } from './components/Footer'
import { useLanguage } from './hooks/useLanguage'

export default function App() {
  const { lang, setLang } = useLanguage()

  return (
    <>
      <Background />
      <Nav lang={lang} onLangChange={setLang} />
      <main>
        <Hero lang={lang} />
        <Awards lang={lang} />
        <DigitalArts lang={lang} />
        <Gallery lang={lang} />
        <ComingSoon lang={lang} />
        <Media lang={lang} />
        <About lang={lang} />
        <Share lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
