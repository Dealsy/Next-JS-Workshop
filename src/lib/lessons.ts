import fs from "fs/promises";
import path from "path";
import { cache } from "react";

export const getLessonContent = cache(async (lessonId: string) => {
  const contentPath = path.join(
    process.cwd(),
    "src/content/lessons",
    lessonId,
    "index.mdx"
  );

  try {
    const source = await fs.readFile(contentPath, "utf-8");
    return { source };
  } catch (e) {
    if (e instanceof Error && "code" in e && e.code === "ENOENT") {
      console.error(
        `Lesson content not found for ${lessonId}. Path: ${contentPath}`
      );
      return {
        source:
          "# Lesson Under Construction\n\nThe content for this lesson is currently being developed. Please check back later.",
      };
    }
    console.error(`Error loading lesson ${lessonId}:`, e);
    throw e;
  }
});
