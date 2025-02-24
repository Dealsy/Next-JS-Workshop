'use client'

export default function AnalyticsError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-4 bg-red-50 rounded space-y-4">
      <h2 className="text-xl font-semibold text-red-600">Analytics Error</h2>
      <p className="text-red-500">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
        Try again
      </button>
    </div>
  )
}
