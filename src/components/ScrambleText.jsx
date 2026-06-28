import { useEffect, useState, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export default function ScrambleText({ text, className, delay = 0 }) {
  const [display, setDisplay] = useState(text)
  const frame = useRef(0)
  const raf = useRef(null)

  useEffect(() => {
    const DURATION = 800
    const START_DELAY = delay
    let startTime = null

    const tick = (now) => {
      if (!startTime) startTime = now
      const elapsed = now - startTime - START_DELAY
      if (elapsed < 0) { raf.current = requestAnimationFrame(tick); return }

      const progress = Math.min(elapsed / DURATION, 1)
      const revealedCount = Math.floor(progress * text.length)

      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < revealedCount) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (progress < 1) {
        raf.current = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [text, delay])

  return <span className={className}>{display}</span>
}
