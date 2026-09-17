import { Code2, Database, Layers3, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/portfolio'

const stats = [
  ['2+', 'years experience', Code2],
  ['Java', 'Spring Boot', Layers3],
  ['MERN', 'full-stack', ShieldCheck],
  ['SQL + NoSQL', 'databases', Database],
]

export default function About() {
  return (
    <section className="section" id="about">
      <SectionTitle eyebrow="01 / About" title="Engineering with a product mindset." text="A developer profile shaped by hands-on delivery, full-stack systems, and technical mentoring." />
      <div className="about-grid">
        <Reveal className="about-panel">
          <p>{profile.summary}</p>
          <p>Across EdTech, healthcare, real estate, cybersecurity, and business platforms, the focus has been on dependable APIs, responsive interfaces, database design, authentication, testing, and deployment.</p>
        </Reveal>
        <div className="stats-grid">
          {stats.map(([value, label, Icon], i) => (
            <Reveal key={label} delay={i * 0.06} className="stat-card">
              <Icon size={21} /><strong>{value}</strong><span>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
