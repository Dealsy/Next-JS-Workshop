import { Lesson } from "./data/lessons";

export const EXERCISE_URLS = {
  use_server: "src/app/lessons/(exercises)/(directives)/use_server/page.tsx",
  use_client: "src/app/lessons/(exercises)/(directives)/use_client/page.tsx",
} as const;

export const categories = {
  "Client & Server": "Client & Server",
  Routing: "Routing",
  DataFetching: "Data Fetching",
  Cache: "Cache",
  Optimizations: "Optimizations",
  Rendering: "Rendering",
  SEO: "SEO",
} as const;

export const difficulties = {
  beginner: "beginner",
  intermediate: "intermediate",
  advanced: "advanced",
} as const;

export const clientServerLessons = [
  {
    id: "use-client",
    title: "Understanding 'use client'",
    description: "Learn when and how to use client-side components in Next.js",
    category: categories["Client & Server"],
    difficulty: difficulties["beginner"],
    order: 1,
  },
  {
    id: "use-server",
    title: "Using 'use server' and server actions",
    description: "Learn what 'use server' is and how to use it",
    category: categories["Client & Server"],
    difficulty: difficulties["intermediate"],
    order: 2,
  },
  {
    id: "server-components",
    title: "Server Components",
    description: "Learn how to use server components in Next.js",
    category: categories["Client & Server"],
    difficulty: difficulties["intermediate"],
    order: 3,
  },
  {
    id: "composition-patterns",
    title: "Composition Patterns",
    description: "Learn how to compose components in Next.js",
    category: categories["Client & Server"],
    difficulty: difficulties["intermediate"],
    order: 4,
  },
];

export const routingLessons = [
  {
    id: "layouts",
    title: "Layouts",
    description: "Learn how to implement layouts in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["beginner"],
    order: 1,
  },
  {
    id: "linking-and-navigating",
    title: "Linking and Navigating",
    description: "Learn how to implement linking and navigating in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["beginner"],
    order: 2,
  },
  {
    id: "loading-ui",
    title: "Loading UI",
    description: "Learn how to implement loading UI with loading.ts in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["intermediate"],
    order: 3,
  },
  {
    id: "error-handling",
    title: "Error Handling",
    description: "Learn how to handle errors with error.ts in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["intermediate"],
    order: 4,
  },
  {
    id: "data-streaming",
    title: "Data Streaming",
    description: "Learn how to stream data to the client in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["intermediate"],
    order: 5,
  },
  {
    id: "dynamic-routing",
    title: "Dynamic Routing",
    description: "Learn how to implement dynamic routes in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["beginner"],
    order: 6,
  },
  {
    id: "parallel-routes",
    title: "Parallel Routes",
    description: "Learn how to implement parallel routes in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["intermediate"],
    order: 7,
  },
];

export const cacheLessons = [
  {
    id: "use-cache",
    title: "useCache",
    description: "Learn how to use 'use cache' in Next.js",
    category: categories["Cache"],
    difficulty: difficulties["intermediate"],
    order: 1,
  },
];

export const renderingLessons = [
  {
    id: "ppr",
    title: "Partial Prerendering (PPR)",
    description: "Learn what PPR is and how it works in Next.js",
    category: categories["Rendering"],
    difficulty: difficulties["intermediate"],
    order: 1,
  },
];

export const optimizationsLessons = [
  {
    id: "image-optimization",
    title: "Image Optimization",
    description: "Learn how to optimize images in Next.js",
    category: categories["Optimizations"],
    difficulty: difficulties["intermediate"],
    order: 1,
  },
  {
    id: "font-optimization",
    title: "Font Optimization",
    description: "Learn how to optimize fonts in Next.js",
    category: categories["Optimizations"],
    difficulty: difficulties["intermediate"],
    order: 2,
  },
];

export const seoLessons = [
  {
    id: "metadata",
    title: "Metadata",
    description: "Learn how to add metadata to your Next.js app",
    category: categories["SEO"],
    difficulty: difficulties["beginner"],
    order: 1,
  },
];

export const lessons: Lesson[] = [
  ...clientServerLessons,
  ...routingLessons,
  ...optimizationsLessons,
  ...seoLessons,
  ...cacheLessons,
  ...renderingLessons,
];
