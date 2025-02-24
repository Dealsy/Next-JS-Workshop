type Notification = {
  id: number
  message: string
  type: 'info' | 'success' | 'warning'
  timestamp: number
}

async function getNotifications(): Promise<Notification[]> {
  // This loads last with a 3-second delay
  await new Promise(resolve => setTimeout(resolve, 3000))
  return [
    {
      id: 1,
      message: 'New team member joined the project',
      type: 'info',
      timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
    },
    {
      id: 2,
      message: 'Successfully deployed to production',
      type: 'success',
      timestamp: Date.now() - 1000 * 60 * 30, // 30 minutes ago
    },
    {
      id: 3,
      message: 'Server load is approaching limits',
      type: 'warning',
      timestamp: Date.now() - 1000 * 60 * 60, // 1 hour ago
    },
  ]
}

function getTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000)
  if (seconds < 60) return `${seconds} seconds ago`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes} minutes ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} hours ago`
  return new Date(timestamp).toLocaleDateString()
}

export default async function NotificationsPage() {
  const notifications = await getNotifications()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Notifications</h2>

      <div className="space-y-3">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`p-4 rounded ${
              notification.type === 'info'
                ? 'bg-blue-50'
                : notification.type === 'success'
                ? 'bg-green-50'
                : 'bg-yellow-50'
            }`}>
            <p className="font-medium text-black">{notification.message}</p>
            <p className="text-sm text-gray-600 mt-1">{getTimeAgo(notification.timestamp)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
