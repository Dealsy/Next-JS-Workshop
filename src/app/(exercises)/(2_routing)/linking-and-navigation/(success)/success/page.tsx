'use client'

import { useConfetti } from '@/hooks/use-confetti'

export default function SuccessPage() {
  const confetti = useConfetti()

  return (
    <div className="p-6 flex flex-col items-center justify-center overflow-x-hidden mt-32">
      {confetti}
      <h1 className="text-4xl font-bold text-green-500 mb-4">Congratulations!</h1>
      <p className="text-lg mb-4">
        You&apos;ve unlocked the premium content by entering the correct code!
      </p>
      <p className="text-md text-white mb-4 bg-green-500 p-4 rounded-md">
        You&apos;ve successfully completed the Linking and Navigation exercises.
      </p>
    </div>
  )
}
