import { Skeleton } from '@/components/ui/skeleton'

export default function TeamLoading() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Team Members</h2>

      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse flex items-center gap-3 p-3 bg-gray-50 rounded">
            <Skeleton className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
              <Skeleton className="h-3 bg-gray-200 rounded w-1/3 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
