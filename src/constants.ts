export const EXERCISE_URLS = {
  use_server: "src/app/lessons/(exercises)/(directives)/use_server/page.tsx",
  use_client: "src/app/lessons/(exercises)/(directives)/use_client/page.tsx",
} as const;

export const categories = {
  "Client & Server": "Client & Server",
  Routing: "Routing",
  DataFetching: "Data Fetching",
} as const;

export const difficulties = {
  beginner: "beginner",
  intermediate: "intermediate",
  advanced: "advanced",
} as const;

export const clientServerLessons = [
  {
    id: "use-client",
    title: "Understanding use client",
    description: "Learn when and how to use client-side components in Next.js",
    category: categories["Client & Server"],
    difficulty: difficulties["beginner"],
    order: 1,
  },
  {
    id: "use-server",
    title: "Understanding use server",
    description: "Master server-side component patterns and best practices",
    category: categories["Client & Server"],
    difficulty: difficulties["intermediate"],
    order: 2,
  },
];

export const routingLessons = [
  {
    id: "dynamic-routing",
    title: "Dynamic Routing",
    description: "Learn how to implement dynamic routes in Next.js",
    category: categories["Routing"],
    difficulty: difficulties["beginner"],
    order: 1,
  },
];
