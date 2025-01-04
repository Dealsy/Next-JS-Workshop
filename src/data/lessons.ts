export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisites?: string[];
  path: string;
}

export const lessons: Lesson[] = [
  {
    id: "use-client",
    title: "Understanding use client",
    description: "Learn when and how to use client-side components in Next.js",
    category: "Client & Server",
    difficulty: "beginner",
    path: "/lessons/1_Client_Server/use_client",
  },
  {
    id: "use-server",
    title: "Understanding use server",
    description: "Master server-side component patterns and best practices",
    category: "Client & Server",
    difficulty: "beginner",
    path: "/lessons/1_Client_Server/use_server",
  },
  // Add more lessons...
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByCategory(category: string): Lesson[] {
  return lessons.filter((lesson) => lesson.category === category);
}
