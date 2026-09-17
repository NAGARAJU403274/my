import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionTitle eyebrow="06 / Contact" title="Let’s build something useful." text="Professional contact details available in the uploaded resume." />
      <div className="contact-grid">
        <Reveal className="contact-card">
          <a href={`mailto:${profile.email}`}><Mail size={19} /><span>{profile.email}</span><ArrowUpRight size={16} /></a>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={19} /><span>{profile.phone}</span><ArrowUpRight size={16} /></a>
          <div><MapPin size={19} /><span>{profile.location}</span></div>
          <div className="resume-note"><span>LinkedIn, GitHub and Portfolio are listed in the resume, but their URLs are not present in the extracted resume text, so no links were invented.</span></div>
        </Reveal>
        <Reveal className="contact-cta">
          <p className="eyebrow">AVAILABLE FOR DEVELOPMENT OPPORTUNITIES</p>
          <h3>Java + Spring Boot on one side. React + MERN on the other.</h3>
          <p>Reach out by email to discuss full-stack development opportunities, projects, or collaboration.</p>
          <a className="button primary" href={`mailto:${profile.email}?subject=Full%20Stack%20Developer%20Opportunity`}>Send an Email <ArrowUpRight size={18} /></a>
          <div className="mini-social"><Mail size={17} /><span>Direct email contact</span><Linkedin size={17} /><Github size={17} /></div>
        </Reveal>
      </div>
    </section>
  )
}
