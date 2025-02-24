import { Skeleton } from '@/components/ui/skeleton'

export default function AnalyticsLoading() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Analytics</h2>

      <div className="grid grid-cols-1 gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-20" />
        ))}
      </div>
    </div>
  )
}
