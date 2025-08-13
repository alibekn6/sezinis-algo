import React from 'react'

type CountUpProps = {
  value: number
  durationMs?: number
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function CountUp({ value, durationMs = 500, className }: CountUpProps) {
  const [display, setDisplay] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)
  const startRef = React.useRef<number | null>(null)
  const fromRef = React.useRef(0)
  const toRef = React.useRef(value)

  React.useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(value)
      setAnimating(false)
      fromRef.current = value
      toRef.current = value
      return
    }

    startRef.current = null
    fromRef.current = 0
    toRef.current = value
    setAnimating(true)

    let rafId: number

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - (startRef.current ?? 0)
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = easeOutCubic(progress)
      const current = Math.round(fromRef.current + (toRef.current - fromRef.current) * eased)
      setDisplay(current)

      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      } else {
        setAnimating(false)
      }
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [value, durationMs])

  return (
    <span
      className={`inline-block transition-transform duration-300 ${animating ? 'scale-110' : 'scale-100'} ${className ?? ''}`}
      style={{ willChange: 'transform' }}
    >
      {display}
    </span>
  )
}
