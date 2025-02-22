'use client'

/*
 * 🏋️‍♂️ Error Handling Exercise
 *
 * In Next.js, error.tsx is a special file that creates a UI boundary for runtime errors.
 * When an error occurs in your route segments, Next.js will show this error UI instead of the failed segment.
 *
 * 🎯 Tasks:
 * 1. Create an Error component that accepts error and reset props
 *    - Add the ErrorProps type with error: Error and reset: () => void
 *    - Make sure to use the 'use client' directive (already added above)
 *
 * 2. Display the error message to the user
 *    - Show a title for the error
 *    - Display the error.message
 *    - Style the error message appropriately
 *
 * 3. Add a "Try Again" button that calls the reset function
 *    - Add an onClick handler that calls reset()
 *    - Style the button to match the design
 *
 * 🌟 Extra Credit:
 * 1. Add error logging (console.log the error)
 *
 * 2. Show different UI for different error types:
 *    - Create an ErrorType type with: 'NetworkError' | 'ValidationError' | 'AuthError' | 'DefaultError'
 *    - Add a function getErrorType(error: Error) to determine the error type
 *    - Add a function getErrorContent(type: ErrorType) to get the appropriate UI content
 *    - Show different:
 *      - Titles
 *      - Messages
 *      - Button text
 *      - Button styles
 *    Hint: Check for error instanceof TypeError for network errors
 *    Hint: Use error.message.includes() to check for specific error types
 *
 * 3. Add a fallback UI while recovering from an error
 *
 *
 * 📝 Resources:
 * - Next.js Error Handling: https://nextjs.org/docs/app/building-your-application/routing/error-handling
 * - Error Component API: https://nextjs.org/docs/app/api-reference/file-conventions/error
 */

// TODO: Add the 'use client' directive
// Tip: Error components must be Client Components

// TODO: Define the props type for the Error component
// Tip: It should include both error and reset props

// TODO: Implement the Error component
export default function Error() {
  // Extra credit: Add error logging

  // Extra credit, add logic for different error types

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center">
      <div className="text-center">
        {/* TODO: Display the error message */}
        <h2 className="text-2xl font-bold text-destructive">Something went wrong!</h2>
      </div>
      {/* TODO: Add a reset button */}
    </div>
  )
}
