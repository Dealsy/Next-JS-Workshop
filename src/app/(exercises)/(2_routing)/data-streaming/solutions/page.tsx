import { StreamingLoader } from '@/components/skeletons/data-streaming-skeleton'
import { Suspense } from 'react'
import { connection } from 'next/server'

type Data = {
  title: string
  timestamp: number
  metadata: {
    loadTime: number
  }
}

function LoadingState() {
  return <StreamingLoader />
}

export default function DataStreamingExercise() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground  mb-4">Real-time Data Streaming</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Watch as different data sources load independently. Notice how the page loads instantly
            while data streams in progressively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                Fast Component
              </h2>
              <Suspense fallback={<LoadingState />}>
                <StreamingDataCard delay={1000} />
              </Suspense>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                Medium Component
              </h2>
              <Suspense fallback={<LoadingState />}>
                <StreamingDataCard delay={3000} />
              </Suspense>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
                Slow Component
              </h2>
              <Suspense fallback={<LoadingState />}>
                <StreamingDataCard delay={5000} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

async function getData(delay: number): Promise<Data> {
  // Simulate network delay (deterministic for server components)
  await new Promise(resolve => setTimeout(resolve, delay))

  // Wait for connection to allow reading current time in server component
  await connection()
  const timestamp = Date.now()

  // Generate realistic titles based on delay (simulating different data sources)
  const titles = {
    1000: 'User Profile',
    3000: 'Analytics Dashboard',
    5000: 'AI Recommendations',
  }

  const title = titles[delay as keyof typeof titles] || 'Custom Data'

  // Simulate realistic API response
  return {
    title,
    timestamp,
    metadata: {
      loadTime: delay,
    },
  }
}

async function StreamingDataCard({ delay }: { delay: number }) {
  // Call the getData function inside of the StreamingDataCard component
  // This will initalize the data streaming
  const data = await getData(delay)

  const speedConfig = {
    1000: {
      label: 'Fast',
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      icon: '⚡',
    },
    3000: {
      label: 'Medium',
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      icon: '📊',
    },
    5000: {
      label: 'Slow',
      color: 'bg-rose-500',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-700',
      icon: '🤖',
    },
  }

  const config = speedConfig[delay as keyof typeof speedConfig] || {
    label: 'Custom',
    color: 'bg-gray-500',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-700',
  }

  return (
    <div
      className={`${config.bgColor} rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md max-w-2xl`}>
      {/* Header with icon and title */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{config.icon}</span>
        <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
      </div>

      {/* Badge */}
      <div className="mb-6">
        <span
          className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${config.textColor} ${config.bgColor} border border-current border-opacity-20 shadow-sm`}>
          <div className={`w-2 h-2 ${config.color} rounded-full mr-2 animate-pulse`}></div>
          {config.label}
        </span>
      </div>

      {/* Metrics with better styling */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between py-2 px-3 bg-white bg-opacity-50 rounded-lg">
          <span className="text-gray-600 font-medium">Loaded at:</span>
          <span className="font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded text-xs">
            {new Date(data.timestamp).toLocaleTimeString()}
          </span>
        </div>
        <div className="flex items-center justify-between py-2 px-3 bg-white bg-opacity-50 rounded-lg">
          <span className="text-gray-600 font-medium">Response time:</span>
          <span
            className={`font-mono font-semibold ${config.textColor} bg-white px-2 py-1 rounded text-xs`}>
            {data.metadata.loadTime}ms
          </span>
        </div>
      </div>
    </div>
  )
}
