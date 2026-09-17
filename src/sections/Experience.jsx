import { BriefcaseBusiness } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle eyebrow="03 / Experience" title="From APIs to end-to-end products." />
      <div className="timeline">
        {experiences.map((item, i) => (
          <Reveal key={`${item.company}-${item.date}`} className="timeline-item" delay={i * 0.05}>
            <div className="timeline-dot"><BriefcaseBusiness size={15} /></div>
            <div className="experience-card">
              <div className="experience-meta"><span>{item.date}</span><span>{item.company}</span></div>
              <h3>{item.role}</h3>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
