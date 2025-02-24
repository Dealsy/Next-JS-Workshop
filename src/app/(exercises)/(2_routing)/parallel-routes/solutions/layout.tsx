import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  analytics: ReactNode
  team: ReactNode
  notifications: ReactNode
}

export default function Layout({ children, analytics, team, notifications }: LayoutProps) {
  return (
    <div className="p-4">
      {children}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="p-4 border rounded shadow-sm">{analytics}</div>

        <div className="p-4 border rounded shadow-sm">{team}</div>
      </div>

      <div className="mt-4">
        <div className="p-4 border rounded shadow-sm">{notifications}</div>
      </div>
    </div>
  )
}
