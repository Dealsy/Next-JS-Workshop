import { Skeleton } from '@/components/ui/skeleton'

export default function NotificationsLoading() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Notifications</h2>

      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-20" />
        ))}
      </div>
    </div>
  )
}
