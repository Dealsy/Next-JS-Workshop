import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { lessons } from "@/data/lessons";
import Pagination from "@/components/Pagination";

const LESSONS_PER_PAGE = 6;

export default function Lessons({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const startIndex = (currentPage - 1) * LESSONS_PER_PAGE;
  const endIndex = startIndex + LESSONS_PER_PAGE;
  const currentLessons = lessons.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Lessons</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentLessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/lessons/${lesson.id}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <span className="text-blue-600 inline-flex items-center">
              Start Lesson <ArrowRightIcon className="ml-2 w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={lessons.length}
        itemsPerPage={LESSONS_PER_PAGE}
      />
    </div>
  );
}
