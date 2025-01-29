import { Lesson } from './data/lessons'

export const EXERCISE_URLS = {
  use_server: 'src/app/(exercises)/(1_client&server)/use_server/page.tsx',
  use_client: 'src/app/(exercises)/(1_client&server)/use_client/page.tsx',
  server_components: 'src/app/(exercises)/(1_client&server)/server_components/page.tsx',
  dynamic_routing: 'src/app/(exercises)/(2_routing)/dynamic_routing/page.tsx',
  layouts: 'src/app/(exercises)/(2_routing)/layouts/layout.tsx',
  linking_and_navigation: 'src/app/(exercises)/(2_routing)/linking-and-navigating/page.tsx',
  loading: 'src/app/(exercises)/(2_routing)/loading/page.tsx',
} as const

export const categories = {
  'Client & Server': 'Client & Server',
  Routing: 'Routing',
  Cache: 'Cache',
  Optimizations: 'Optimizations',
  Rendering: 'Rendering',
  SEO: 'SEO',
} as const

export const difficulties = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
} as const

export const statuses = {
  completed: 'completed',
  upcoming: 'upcoming',
} as const

export const clientServerLessons = [
  {
    id: 'server-components',
    title: 'Server Components',
    description: 'Learn how to use server components in Next.js',
    category: categories['Client & Server'],
    difficulty: difficulties['intermediate'],
    order: 1,
    featured: true,
    status: statuses.completed,
  },
  {
    id: 'use-client',
    title: "Understanding 'use client'",
    description: 'Learn when and how to use client-side components in Next.js',
    category: categories['Client & Server'],
    difficulty: difficulties['beginner'],
    order: 2,
    status: statuses.completed,
  },
  {
    id: 'use-server',
    title: "Using 'use server' and server actions",
    description: "Learn what 'use server' is and how to use it",
    category: categories['Client & Server'],
    difficulty: difficulties['intermediate'],
    order: 3,
    featured: true,
    status: statuses.completed,
  },
  {
    id: 'composition-patterns',
    title: 'Composition Patterns',
    description: 'Learn how to compose components in Next.js',
    category: categories['Client & Server'],
    difficulty: difficulties['beginner'],
    order: 4,
    status: statuses.completed,
  },
]

export const routingLessons = [
  {
    id: 'layouts',
    title: 'Layouts',
    description: 'Learn how to implement layouts in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 1,
    status: statuses.completed,
  },
  {
    id: 'linking-and-navigating',
    title: 'Linking and Navigating',
    description: 'Learn how to implement linking and navigating in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 2,
    status: statuses.completed,
  },
  {
    id: 'loading-ui',
    title: 'Loading UI',
    description: 'Learn how to implement loading UI with loading.ts in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 3,
    status: statuses.completed,
  },
  {
    id: 'error-boundary',
    title: 'Error Boundaries',
    description: 'Learn how to handle errors with error.ts in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 4,
    status: statuses.upcoming,
  },
  {
    id: 'data-streaming',
    title: 'Data Streaming',
    description: 'Learn how to stream data to the client in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['intermediate'],
    order: 5,
    featured: true,
    status: statuses.upcoming,
  },
  {
    id: 'dynamic-routing',
    title: 'Dynamic Routing',
    description: 'Learn how to implement dynamic routes in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 6,
    status: statuses.upcoming,
  },
  {
    id: 'parallel-routes',
    title: 'Parallel Routes',
    description: 'Learn what a parallel route is and  how to implement it in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['advanced'],
    order: 7,
    featured: true,
    status: statuses.upcoming,
  },
]

export const cacheLessons = [
  {
    id: 'use-cache',
    title: 'useCache',
    description: "Learn how to use 'use cache' in Next.js",
    category: categories['Cache'],
    difficulty: difficulties['intermediate'],
    order: 1,
    status: statuses.upcoming,
  },
]

export const renderingLessons = [
  {
    id: 'ppr',
    title: 'Partial Prerendering (PPR)',
    description: 'Learn what PPR is and how it works in Next.js',
    category: categories['Rendering'],
    difficulty: difficulties['intermediate'],
    order: 1,
    status: statuses.upcoming,
  },
]

export const optimizationsLessons = [
  {
    id: 'image-optimization',
    title: 'Image Optimization',
    description: 'Learn how to optimize images in Next.js',
    category: categories['Optimizations'],
    difficulty: difficulties['intermediate'],
    order: 1,
    status: statuses.upcoming,
  },
  {
    id: 'font-optimization',
    title: 'Font Optimization',
    description: 'Learn how to optimize fonts in Next.js',
    category: categories['Optimizations'],
    difficulty: difficulties['intermediate'],
    order: 2,
    status: statuses.upcoming,
  },
]

export const seoLessons = [
  {
    id: 'metadata',
    title: 'Metadata',
    description: 'Learn how to add metadata to your Next.js app',
    category: categories['SEO'],
    difficulty: difficulties['beginner'],
    order: 1,
    status: statuses.upcoming,
  },
]

export const lessons: Lesson[] = [
  ...clientServerLessons,
  ...routingLessons,
  ...optimizationsLessons,
  ...seoLessons,
  ...cacheLessons,
  ...renderingLessons,
]

export const features = [
  {
    title: 'Hands-on Learning',
    description: `Practice real-world Next.js concepts with ${lessons.length} interactive lessons and exercises.`,
  },
  {
    title: 'Latest Features',
    description: 'Stay up-to-date with the newest Next.js 15+ features and best practices.',
  },
  {
    title: 'Expert Guidance',
    description: 'Learn from carefully crafted lessons and compare with reference solutions.',
  },
] as const
