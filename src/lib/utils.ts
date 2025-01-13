import { Lesson } from "@/data/lessons";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { lessons } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to generate the correct lesson path
export function getLessonPath(lesson: Lesson) {
  const categoryPath = lesson.category.toLowerCase().replace(/[&\s]+/g, "_");
  return `/lessons/${categoryPath}/${lesson.id}`;
}

// Get the total number of exercises by counting lessons
export function getTotalExercises() {
  return lessons.length;
}
