export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisites?: string[];
  order?: number;
}

export const lessons: Lesson[] = [
  {
    id: "use-client",
    title: "Understanding use client",
    description: "Learn when and how to use client-side components in Next.js",
    category: "Client & Server",
    difficulty: "beginner",
    order: 1,
  },
  {
    id: "use-server",
    title: "Understanding use server",
    description: "Master server-side component patterns and best practices",
    category: "Client & Server",
    difficulty: "beginner",
    order: 2,
  },
  // Add more lessons...
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByCategory(category: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.category === category)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

// Add a function to get categories in the correct order
export const orderedCategories = [
  "Client & Server",
  "Routing",
  "Data Fetching",
];

export function getCategories(): string[] {
  return orderedCategories;
}
