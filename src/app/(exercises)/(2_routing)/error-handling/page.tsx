'use client'

import { useState } from 'react'

/*
 * 🏋️‍♂️ Error Handling Exercise - Page Component
 *
 * This component will be used to trigger different types of errors that will be caught
 * by our error boundary (error.tsx).
 *
 * 🎯 Tasks:
 * 1. Create a basic error trigger
 *    - Add a state to track when to throw an error
 *    - Throw a new Error when the state is true
 *    - Add a button that sets the error state to true
 *    - Head to the error.tsx file to handle the error
 *
 * 🌟 Extra Credit:
 * 1. Add support for different error types:
 *    - Create an ErrorType type with: 'network' | 'validation' | 'auth' | 'default'
 *    - Update the state to track the error type
 *    - Add different error messages for each type
 *    - Create buttons for each error type
 *
 * 💡 Tips:
 * - Use useState to track the error state
 * - Use conditional rendering to throw errors
 * - For network errors, use: throw new TypeError('Failed to fetch: network error')
 * - For validation errors, use: throw new Error('validation error: Invalid input data')
 * - For auth errors, use: throw new Error('unauthorized: User not authenticated')
 * - Style your buttons to match the error types (blue for network, yellow for validation, etc.)
 */

// TODO: Add error state
export default function Page() {
  // state to track when to throw an error
  const [error, setError] = useState(false)

  // TODO: Add error throwing logic

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-10">
      <h1 className="text-2xl font-bold text-center">Click the button below to throw an error</h1>
      <button
        className="bg-red-500 p-2 rounded-2xl text-white mx-auto w-33 justify-center flex active:bg-red-600"
        onClick={() => setError(true)}>
        Throw error
      </button>
      {/* Extra credit, add buttons for different error types */}
    </div>
  )
}
