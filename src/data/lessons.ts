import {
  categories,
  difficulties,
  lessons,
} from "@/constants";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: keyof typeof categories;
  difficulty: keyof typeof difficulties;
  prerequisites?: string[];
  order?: number;
}

// Combine all lessons

export type Category = keyof typeof categories;
export type Difficulty = keyof typeof difficulties;

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByCategory(category: Category): Lesson[] {
  return lessons
    .filter((lesson) => lesson.category === category)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

// Add a function to get categories in the correct order
export const orderedCategories = Object.keys(categories);

export function getCategories(): Category[] {
  return orderedCategories as Category[];
}

// Add helper functions for type safety
export function getDifficulties(): Difficulty[] {
  return Object.keys(difficulties) as Difficulty[];
}

export function isValidDifficulty(
  difficulty: string
): difficulty is Difficulty {
  return difficulty in difficulties;
}

export function isValidCategory(category: string): category is Category {
  return category in categories;
}
