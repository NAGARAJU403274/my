import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </Reveal>
  )
}
