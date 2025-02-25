import { Lesson } from './data/lessons'

export const EXERCISE_URLS = {
  use_server: 'src/app/(exercises)/(1_client&server)/use_server/page.tsx',
  use_client: 'src/app/(exercises)/(1_client&server)/use_client/page.tsx',
  server_components: 'src/app/(exercises)/(1_client&server)/server_components/page.tsx',
  dynamic_routing: 'src/app/(exercises)/(2_routing)/dynamic_routing/page.tsx',
  layouts: 'src/app/(exercises)/(2_routing)/layouts/layout.tsx',
  linking_and_navigation: 'src/app/(exercises)/(2_routing)/linking-and-navigation/page.tsx',
  use_router: 'src/app/(exercises)/(2_routing)/linking-and-navigation/useRouter/page.tsx',
  redirect: 'src/app/(exercises)/(2_routing)/linking-and-navigation/redirect/page.tsx',
  redirect_success: 'src/app/(exercises)/(2_routing)/linking-and-navigation/success/page.tsx',
  loading_ui: 'src/app/(exercises)/(2_routing)/loading-ui/page.tsx',
  error_handling: 'src/app/(exercises)/(2_routing)/error-handling/page.tsx',
  data_streaming: 'src/app/(exercises)/(2_routing)/data-streaming/page.tsx',
  parallel_routes: 'src/app/(exercises)/(2_routing)/parallel-routes/page.tsx',
  use_cache: 'src/app/(exercises)/(3_cache)/use-cache/page.tsx',
  image_optimization: 'src/app/(exercises)/(4_optimizations)/image-optimization/page.tsx',
} as const

export const EXERCISE_ROUTES = {
  use_server: '/use_server',
  use_client: '/use_client',
  server_components: '/server_components',
  dynamic_routing: '/dynamic_routing',
  layouts: '/layouts',
  linking_and_navigation: '/linking-and-navigation',
  use_router: '/linking-and-navigation/useRouter',
  redirect: '/linking-and-navigation/redirect',
  redirect_success: '/linking-and-navigation/success',
  loading_ui: '/loading-ui',
  error_handling: '/error-handling',
  data_streaming: '/data-streaming',
  parallel_routes: '/parallel-routes',
  use_cache: '/use-cache',
  image_optimization: '/image-optimization',
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

export const isDisplayed = {
  true: true,
  false: false,
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
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'use-client',
    title: "Understanding 'use client'",
    description: 'Learn when and how to use client-side components in Next.js',
    category: categories['Client & Server'],
    difficulty: difficulties['beginner'],
    order: 2,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
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
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'composition-patterns',
    title: 'Composition Patterns',
    description: 'Learn how to compose components in Next.js',
    category: categories['Client & Server'],
    difficulty: difficulties['beginner'],
    order: 4,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
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
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'linking-and-navigating',
    title: 'Linking and Navigating',
    description: 'Learn how to implement linking and navigating in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 2,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'loading-ui',
    title: 'Loading UI',
    description: 'Learn how to implement loading UI with loading.ts in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 3,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'error-boundary',
    title: 'Error Boundaries',
    description: 'Learn how to handle errors with error.ts in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 4,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'data-streaming',
    title: 'Data Streaming',
    description: 'Learn how to stream data to the client in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['intermediate'],
    order: 5,
    featured: true,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'dynamic-routing',
    title: 'Dynamic Routing',
    description: 'Learn how to implement dynamic routes in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['beginner'],
    order: 6,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'parallel-routes',
    title: 'Parallel Routes',
    description: 'Learn what a parallel route is and  how to implement it in Next.js',
    category: categories['Routing'],
    difficulty: difficulties['advanced'],
    order: 7,
    featured: true,
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
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
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
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
    featured: true,
    status: statuses.upcoming,
    isDisplayed: isDisplayed.false,
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
    status: statuses.completed,
    isDisplayed: isDisplayed.true,
  },
  {
    id: 'font-optimization',
    title: 'Font Optimization',
    description: 'Learn how to optimize fonts in Next.js',
    category: categories['Optimizations'],
    difficulty: difficulties['intermediate'],
    order: 2,
    status: statuses.upcoming,
    isDisplayed: isDisplayed.false,
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
    isDisplayed: isDisplayed.false,
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
    description: `Practice real-world Next.js concepts with ${lessons.length} interactive lessons and exercises, with more on the way!`,
  },
  {
    title: 'Latest Features',
    description: 'Stay up-to-date with the newest Next.js 15+ features and best practices.',
  },
  {
    title: 'Roadmap',
    description:
      'See planned upcoming lessons in the roadmap section. ( You can view this from the roadmap button in the header )',
  },
] as const

export const DEPARTURE_CITIES = ['Melbourne', 'Sydney', 'Brisbane', 'Perth'] as const
export type DepartureCities = (typeof DEPARTURE_CITIES)[number]

export const DESTINATION_CITIES = ['London', 'Paris', 'Tokyo', 'Sydney'] as const
export type DestinationCities = (typeof DESTINATION_CITIES)[number]
