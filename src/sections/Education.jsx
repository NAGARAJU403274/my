import { Award, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { certifications, education } from '../data/portfolio'

export default function Education() {
  return (
    <section className="section" id="education">
      <SectionTitle eyebrow="05 / Education" title="Academic foundation & certifications." />
      <div className="education-grid">
        <div className="education-list">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.07} className="education-card">
              <div className="education-icon"><GraduationCap size={21} /></div>
              <div><span>{item.year}</span><h3>{item.degree}</h3><p>{item.institution} · {item.score}</p></div>
            </Reveal>
          ))}
        </div>
        <Reveal className="cert-card">
          <div className="cert-head"><Award size={22} /><span>Certifications</span></div>
          <ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
        </Reveal>
      </div>
    </section>
  )
}
