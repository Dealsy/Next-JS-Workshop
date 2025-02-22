'use client'

import { useState } from 'react'

type ErrorType = 'network' | 'validation' | 'auth' | 'default'

export default function Page() {
  const [errorType, setErrorType] = useState<ErrorType | null>(null)

  if (errorType === 'network') {
    throw new TypeError('Failed to fetch: network error')
  }

  if (errorType === 'validation') {
    throw new Error('validation error: Invalid input data')
  }

  if (errorType === 'auth') {
    throw new Error('unauthorized: User not authenticated')
  }

  if (errorType === 'default') {
    throw new Error('Test error')
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-6">
      <h1 className="text-2xl font-bold text-center">
        Click a button below to throw different types of errors
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          className="bg-blue-500 p-2 rounded-2xl text-white hover:bg-blue-600 min-w-32"
          onClick={() => setErrorType('network')}>
          Network Error
        </button>
        <button
          className="bg-yellow-500 p-2 rounded-2xl text-white hover:bg-yellow-600 min-w-32"
          onClick={() => setErrorType('validation')}>
          Validation Error
        </button>
        <button
          className="bg-red-500 p-2 rounded-2xl text-white hover:bg-red-600 min-w-32"
          onClick={() => setErrorType('auth')}>
          Auth Error
        </button>
        <button
          className="bg-gray-500 p-2 rounded-2xl text-white hover:bg-gray-600 min-w-32"
          onClick={() => setErrorType('default')}>
          Default Error
        </button>
      </div>
    </div>
  )
}
