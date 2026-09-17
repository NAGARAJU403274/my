import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    const sections = links.map((link) => document.getElementById(link.toLowerCase())).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.05, 0.25, 0.5] })
    sections.forEach((section) => observer.observe(section))
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#home" className="brand">NAGARAJU PULIGADDA<span>.</span></a>
      <div className="desktop-nav">
        {links.map((link) => <a className={active === link.toLowerCase() ? 'active' : ''} key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
      </div>
      <div className="nav-actions">
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {links.map((link) => (
              <a className={active === link.toLowerCase() ? 'active' : ''} key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
