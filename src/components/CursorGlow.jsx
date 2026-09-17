import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}
