import { Check, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface GuideItem {
  task: string
  server: boolean
  client: boolean
  code?: string
}

const guideItems: GuideItem[] = [
  {
    task: 'Fetch data',
    server: true,
    client: false,
  },
  {
    task: 'Access backend resources (directly)',
    server: true,
    client: false,
  },
  {
    task: 'Keep sensitive information on the server (access tokens, API keys, etc)',
    server: true,
    client: false,
  },
  {
    task: 'Keep large dependencies on the server / Reduce client-side JavaScript',
    server: true,
    client: false,
  },
  {
    task: 'Add interactivity and event listeners',
    server: false,
    client: true,
    code: 'onClick(), onChange()',
  },
  {
    task: 'Use State and Lifecycle Effects',
    server: false,
    client: true,
    code: 'useState(), useReducer(), useEffect()',
  },
  {
    task: 'Use browser-only APIs',
    server: false,
    client: true,
  },
  {
    task: 'Use custom hooks that depend on state, effects, or browser-only APIs',
    server: false,
    client: true,
  },
]

export default function ServerClientGuide() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">Server vs Client Components</CardTitle>
        <CardDescription>
          A guide to help you decide when to use Server and Client Components in your Next.js
          application
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[1fr_auto_auto] gap-4">
          <div className="font-medium text-sm text-muted-foreground">WHAT DO YOU NEED TO DO?</div>
          <div className="font-medium text-sm text-muted-foreground px-4">SERVER</div>
          <div className="font-medium text-sm text-muted-foreground px-4">CLIENT</div>

          {guideItems.map((item, index) => (
            <div key={index} className="contents">
              <div
                className={cn(
                  'flex items-center p-4 rounded-lg',
                  index % 2 === 0 ? 'bg-muted/50' : 'bg-background',
                )}>
                <div>
                  {item.task}
                  {item.code && (
                    <code className="ml-2 rounded bg-primary/10 text-primary px-1.5 py-0.5 text-sm font-mono">
                      {item.code}
                    </code>
                  )}
                </div>
              </div>
              <div
                className={cn(
                  'flex items-center justify-center p-4',
                  index % 2 === 0 ? 'bg-muted/50' : 'bg-background',
                )}>
                {item.server ? (
                  <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                )}
              </div>
              <div
                className={cn(
                  'flex items-center justify-center p-4',
                  index % 2 === 0 ? 'bg-muted/50' : 'bg-background',
                )}>
                {item.client ? (
                  <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
