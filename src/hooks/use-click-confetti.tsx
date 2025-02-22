import { useState, useEffect, useCallback } from 'react'
import ReactConfetti from 'react-confetti'

type WindowDimensions = {
  width: number
  height: number
}

type UseClickConfettiOptions = {
  duration?: number
  numberOfPieces?: number
  gravity?: number
  recycle?: boolean
}

function useWindowDimensions(): WindowDimensions {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return dimensions
}

export function useClickConfetti({
  duration = 7000,
  numberOfPieces = 500,
  gravity = 0.2,
  recycle = false,
}: UseClickConfettiOptions = {}) {
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowDimensions()

  const triggerConfetti = useCallback(() => {
    if (showConfetti) return // Don't trigger if already showing
    setShowConfetti(true)
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, showConfetti])

  const confetti =
    showConfetti && width > 0 && height > 0 ? (
      <div className="fixed inset-0 pointer-events-none">
        <ReactConfetti
          width={width}
          height={height}
          recycle={recycle}
          numberOfPieces={numberOfPieces}
          gravity={gravity}
          run={showConfetti}
        />
      </div>
    ) : null

  return [confetti, triggerConfetti] as const
}
