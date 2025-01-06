import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Lesson } from "@/data/lessons";
import Pagination from "@/components/Pagination";
import { lessons } from "@/constants";

const LESSONS_PER_PAGE = 9;

export default async function Lessons({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;
  const startIndex = (currentPage - 1) * LESSONS_PER_PAGE;
  const endIndex = startIndex + LESSONS_PER_PAGE;
  const currentLessons = lessons.slice(startIndex, endIndex);

  // Helper function to generate lesson path
  const getLessonPath = (lesson: Lesson) => {
    const categoryPath = lesson.category.toLowerCase().replace(/[&\s]+/g, "_");
    return `/lessons/${categoryPath}/${lesson.id}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Lessons</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentLessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={getLessonPath(lesson)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800/40"
          >
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="text-gray-600 mb-4 dark:text-gray-400">
              {lesson.description}
            </p>
            <span className="text-blue-600 inline-flex items-center">
              Start Lesson <ArrowRightIcon className="ml-2 w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalItems={lessons.length}
          itemsPerPage={LESSONS_PER_PAGE}
        />
      </div>
    </div>
  );
}
