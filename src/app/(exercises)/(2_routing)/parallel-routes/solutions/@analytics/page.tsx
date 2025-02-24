type AnalyticsData = {
  totalUsers: number
  activeUsers: number
  growthRate: number
}

async function getAnalyticsData(): Promise<AnalyticsData> {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return {
    totalUsers: 12543,
    activeUsers: 8273,
    growthRate: 12.5,
  }
}

export default async function AnalyticsPage() {
  const data = await getAnalyticsData()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Analytics</h2>

      <div className="grid grid-cols-1 gap-4 text-black">
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-sm text-blue-600">Total Users</p>
          <p className="text-2xl font-bold">{data.totalUsers.toLocaleString()}</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="text-sm text-green-600">Active Users</p>
          <p className="text-2xl font-bold">{data.activeUsers.toLocaleString()}</p>
        </div>

        <div className="bg-purple-50 p-4 rounded">
          <p className="text-sm text-purple-600">Growth Rate</p>
          <p className="text-2xl font-bold">{data.growthRate}%</p>
        </div>
      </div>
    </div>
  )
}
