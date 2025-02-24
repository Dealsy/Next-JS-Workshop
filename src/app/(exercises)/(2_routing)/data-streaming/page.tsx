import { Suspense } from 'react'

/**
 * 🎯 Exercise: Data Streaming in Next.js
 *
 * In this exercise, you'll learn how to implement data streaming using React Suspense
 * and Next.js streaming capabilities. You'll build a page that streams in different
 * components as their data becomes available.
 *
 * 🎯 Tasks:
 * 1. Implement the getData function to simulate a data fetch with the given delay
 * 2. Complete the AsyncDataComponent to fetch and display the data
 * 3. Add a loading state using the provided LoadingState component
 * 4. Wrap the AsyncDataComponent with Suspense to enable streaming
 *
 * 🌟 Extra Credit:
 * 1. Add a third component with a different delay (e.g., 5 seconds)
 * 2. Add different background colors to components based on their loading time
 *
 * 📚 Resources:
 * - https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 * - https://react.dev/reference/react/Suspense
 */

type Data = {
  message: string
  timestamp: number
}

// Task 1: Implement getData to simulate a fetch with delay
async function getData(delay: number): Promise<Data> {
  // Add your code here
  return {
    message: 'Replace this with delayed data',
    timestamp: Date.now(),
  }
}

function LoadingState() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-12 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded mt-2 w-1/2"></div>
    </div>
  )
}

// Task 2: Complete the AsyncDataComponent
async function AsyncDataComponent({ delay }: { delay: number }) {
  // Add your code here
  return <div>Implement the async component</div>
}

export default function DataStreamingExercise() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Data Streaming Exercise</h1>

      <div className="space-y-4">
        {/* Task 3 & 4: Add Suspense and loading state */}
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Fast Component</h2>
          <div className="p-4 rounded">
            <AsyncDataComponent delay={1000} />
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Slow Component</h2>
          <div className="p-4 rounded">
            <AsyncDataComponent delay={3000} />
          </div>
        </div>
      </div>
    </div>
  )
}
