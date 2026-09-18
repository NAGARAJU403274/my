import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          FULL STACK DEVELOPER <Sparkles size={13} />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.18, duration: 0.9 }}
        >
          Building digital <span>experiences</span> that work.
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          className="hero-summary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="hero-buttons hero-stagger"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <a className="button primary" href="#projects">
            View Projects <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href={profile.resume} download>
            Download Resume
          </a>
          <a className="button ghost" href="#contact">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="socials"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ x: 2 }}
        >
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
         <a
  className="social-placeholder"
  href="https://www.linkedin.com/in/puligadda-nagaraju-54a30825a/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <Linkedin size={18} /> LinkedIn
</a>

<a
  className="social-placeholder"
  href="https://github.com/NAGARAJU403274"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
>
  <Github size={18} /> GitHub
</a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <div className="photo-ring" />
        <img src={profile.photo} alt="Puligadda Nagaraju" className="profile-photo" />

        <motion.div
          className="floating-card card-top"
          animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <strong>2+ yrs</strong>
          <span>experience</span>
        </motion.div>

        <motion.div
          className="floating-card card-bottom"
          animate={{ y: [0, 10, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <strong>Java × MERN</strong>
          <span>full-stack toolkit</span>
        </motion.div>
      </motion.div>

      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
