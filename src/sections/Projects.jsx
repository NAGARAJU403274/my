import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <SectionTitle eyebrow="04 / Projects" title="Selected work from the resume." text="Production-oriented projects across multiple domains and full-stack stacks." />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <motion.article className="project-card" whileHover={{ y: -8 }}>
              <div className="project-index">0{i + 1}</div>
              <div className="project-icon"><ArrowUpRight size={22} /></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chips">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Open live project <ExternalLink size={15} /></a>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
