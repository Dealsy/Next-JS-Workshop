import { Suspense } from 'react'

type Data = {
  message: string
  timestamp: number
}

async function getData(delay: number): Promise<Data> {
  await new Promise(resolve => setTimeout(resolve, delay))
  return {
    message: `Data loaded after ${delay}ms`,
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

async function AsyncDataComponent({ delay }: { delay: number }) {
  const data = await getData(delay)

  const bgColor = delay <= 1000 ? 'bg-green-100' : delay <= 3000 ? 'bg-blue-100' : 'bg-purple-100'

  return (
    <div className={`space-y-2 p-4 rounded ${bgColor}`}>
      <p className="font-medium text-black">{data.message}</p>
      <p className="text-sm text-gray-500">
        Timestamp: {new Date(data.timestamp).toLocaleTimeString()}
      </p>
    </div>
  )
}

export default function DataStreamingExercise() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">
        Data Streaming Exercise - Notice this HTML loads instantly
      </h1>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Fast Component - this data is streaming</h2>
          <Suspense fallback={<LoadingState />}>
            <AsyncDataComponent delay={1000} />
          </Suspense>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Slow Component</h2>
          <Suspense fallback={<LoadingState />}>
            <AsyncDataComponent delay={3000} />
          </Suspense>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-4">Very Slow Component</h2>
          <Suspense fallback={<LoadingState />}>
            <AsyncDataComponent delay={5000} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
