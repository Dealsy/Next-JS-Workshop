import { StreamingLoader } from '@/components/skeletons/data-streaming-skeleton'
import { connection } from 'next/server'
import { Suspense } from 'react'

/*
 * 🎯 Exercise: Data Streaming in Next.js
 *
 * In this exercise, you'll learn how to implement data streaming using React Suspense
 * and Next.js streaming capabilities. You'll build a page that streams in different
 * components as their data becomes available.
 *
 * 🎯 Tasks:
 * 1. Implement the getData function to simulate a data fetch with the given delay
 * 2. Complete the StreamingDataCard to fetch and display the data
 * 3. Add a loading state using the provided LoadingState component
 * 4. Wrap the StreamingDataCard with Suspense to enable streaming
 *
 * 🌟 Extra Credit:
 * 1. Add different background colors to components based on their loading time
 *
 * 📚 Resources:
 * - https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 * - https://react.dev/reference/react/Suspense
 */

type Data = {
  title: string
  timestamp: number
  metadata: {
    loadTime: number
  }
}

// Task 1: Implement getData to simulate a fetch with delay
async function getData(delay: number): Promise<Data> {
  // TODO: Add a delay using setTimeout wrapped in a Promise

  await connection()
  const timestamp = Date.now()
  // You can update this to whatever you'd like
  const title = `Data loaded in ${delay}ms`

  // Simulate realistic API response
  return {
    title: title,
    timestamp: timestamp,
    metadata: {
      loadTime: delay,
    },
  }
}

// Task 2: Complete the StreamingDataCard
async function StreamingDataCard({ delay }: { delay: number }) {
  // TODO: Call getData with the delay
  const data = await getData(delay)

  // TODO: write some code to handle displaying the data based on the delay
  // You could create a config object with the different colors and labels for the different delays
  // Or extend the config below to handle the different delays

  const config = {
    label: 'Custom',
    color: 'bg-gray-500',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-700',
  }

  return (
    <div
      className={`${config.bgColor} rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors max-w-2xl`}>
      {/* TODO: Create a layout to display that data, this can be whatever you want */}
      {/* If you'd like an example, you can look at the solutions page */}
      <div>Implement the card layout here</div>
    </div>
  )
}

// You can use this for your suspense fallback
function LoadingState() {
  return (
    // You can update this to match the UI you create for the StreamingDataCard
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
      <p className="text-gray-500">Loading...</p>
    </div>
  )
}

export default function DataStreamingExercise() {
  return (
    <div className="p-4 space-y-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground  mb-4">Real-time Data Streaming</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Watch as different data sources load independently. Notice how the page loads instantly
          while data streams in progressively.
        </p>
      </div>

      <div className=" flex justify-center items-center">
        {/* Task 3 & 4: Add Suspense and loading state */}
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Fast Component</h2>
          {/* TODO: Wrap StreamingDataCard with Suspense and LoadingState fallback */}
          <StreamingDataCard delay={1000} />
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Slow Component</h2>
          {/* TODO: Wrap StreamingDataCard with Suspense and LoadingState fallback */}
          <StreamingDataCard delay={3000} />
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Very Slow Component</h2>
          {/* TODO: Wrap StreamingDataCard with Suspense and LoadingState fallback */}
          <StreamingDataCard delay={5000} />
        </div>
      </div>
    </div>
  )
}
