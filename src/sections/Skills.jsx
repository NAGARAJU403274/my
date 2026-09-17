import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <SectionTitle eyebrow="02 / Skills" title="A practical full-stack toolkit." text="Technologies and engineering practices listed in the uploaded resume." />
      <div className="skill-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04} className="skill-card">
            <div className="skill-card-head"><span>0{i + 1}</span><h3>{group.title}</h3></div>
            <div className="chips">{group.items.map((item) => <motion.span key={item} whileHover={{ y: -3 }}>{item}</motion.span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
