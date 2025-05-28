export function StreamingLoader() {
  return (
    <div className="bg-gray-50 rounded-lg p-4.5 h-full border border-gray-200 w-full animate-pulse flex flex-col gap-4">
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>

      {/* Badge skeleton */}
      <div className="mb-4">
        <div className="inline-flex items-center px-3 py-3 rounded-full border border-gray-200 bg-gray-100">
          <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
          <div className="h-3 bg-gray-200 rounded w-12"></div>
        </div>
      </div>

      {/* Metrics skeleton */}
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3">
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-3 bg-gray-200 rounded w-12"></div>
        </div>
      </div>
    </div>
  )
}
