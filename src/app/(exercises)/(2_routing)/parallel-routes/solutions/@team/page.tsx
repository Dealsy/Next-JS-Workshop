type TeamMember = {
  id: number
  name: string
  role: string
  avatar: string
}

async function getTeamData(): Promise<TeamMember[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { id: 1, name: 'Sarah Wilson', role: 'Product Manager', avatar: '👩‍💼' },
    { id: 2, name: 'Michael Chen', role: 'Senior Developer', avatar: '👨‍💻' },
    { id: 3, name: 'Emma Rodriguez', role: 'UX Designer', avatar: '👩‍🎨' },
    { id: 4, name: 'James Taylor', role: 'Marketing Lead', avatar: '👨‍💼' },
  ]
}

export default async function TeamPage() {
  const team = await getTeamData()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Team Members</h2>

      <div className="space-y-3">
        {team.map(member => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded text-black">
            <div className="text-2xl">{member.avatar}</div>
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
