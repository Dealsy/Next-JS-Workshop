import { Card } from '@/components/ui/card'

type Post = {
  id: string
  title: string
  description: string
}

async function getPosts(): Promise<Post[]> {
  // Simulate a slow API call
  await new Promise(resolve => setTimeout(resolve, 3000))

  return Array.from({ length: 6 }, (_, i) => ({
    id: `post-${i}`,
    title: `Post ${i + 1}`,
    description: `This is a description for post ${
      i + 1
    }. It contains enough text to demonstrate our loading UI.`,
  }))
}

export default async function LoadingUIPage() {
  const posts = await getPosts()

  return (
    <div className="space-y-4 p-10">
      {/* Header */}
      <div className="h-8 w-3/4">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
      </div>

      {/* Content */}
      <div className="grid gap-4">
        {/* Posts grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <Card key={post.id} className="space-y-4 py-14 px-8">
              {/* Title */}
              <h2 className="text-lg font-semibold">{post.title}</h2>
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300">{post.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
