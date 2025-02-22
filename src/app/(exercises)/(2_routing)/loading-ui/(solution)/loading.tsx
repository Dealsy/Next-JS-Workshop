import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="space-y-4 p-10">
      {/* Header skeleton */}
      <div className="h-6 w-32">
        <Skeleton className="h-full w-32 bg-gray-200 dark:bg-gray-800" />
      </div>

      {/* Content */}
      <div className="grid gap-4">
        {/* Posts grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              {/* Image placeholder with shimmer */}
              <div className=" h-48 w-full rounded-md ">
                <Skeleton className="h-full w-full bg-gray-200 dark:bg-gray-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
