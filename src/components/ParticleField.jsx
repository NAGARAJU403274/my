import { motion } from 'framer-motion'

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: 2 + (i % 3),
  duration: 5 + (i % 5),
  delay: (i % 7) * 0.4,
}))

export default function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="particle"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [-12, 12, -12], x: [0, i % 2 ? 8 : -8, 0], opacity: [0.15, 0.75, 0.15], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
