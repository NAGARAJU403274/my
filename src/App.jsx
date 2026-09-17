import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import ParticleField from './components/ParticleField'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <div className="app-shell">
      <ScrollProgress />
      <CursorGlow />
      <ParticleField />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer><span>© {new Date().getFullYear()} Puligadda Nagaraju</span><span>Full Stack Developer</span></footer>
    </div>
  )
}
