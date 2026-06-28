import { useEffect, useRef } from 'react'

export default function CursorSpotlight() {
  const spotRef = useRef(null)

  useEffect(() => {
    const el = spotRef.current
    const move = (e) => {
      el.style.setProperty('--x', `${e.clientX}px`)
      el.style.setProperty('--y', `${e.clientY}px`)
      el.style.opacity = '1'
    }
    const leave = () => { el.style.opacity = '0' }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: 0,
        background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.07), transparent 70%)',
      }}
    />
  )
}
