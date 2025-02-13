import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

type WindowDimensions = {
  width: number
  height: number
}

type UseConfettiOptions = {
  duration?: number
  numberOfPieces?: number
  gravity?: number
  recycle?: boolean
}

function useWindowDimensions(): WindowDimensions {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
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

export function useConfetti({
  duration = 7000,
  numberOfPieces = 300,
  gravity = 0.2,
  recycle = false,
}: UseConfettiOptions = {}) {
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    setShowConfetti(true)

    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!showConfetti || width === 0 || height === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none">
      <ReactConfetti
        width={width}
        height={height}
        recycle={recycle}
        numberOfPieces={numberOfPieces}
        gravity={gravity}
      />
    </div>
  )
}
