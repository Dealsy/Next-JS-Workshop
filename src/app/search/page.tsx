import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { lessons } from "@/constants";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const params = await searchParams;

  const query = params.q?.toLowerCase() || "";
  const filteredLessons = lessons.filter(
    (lessons) =>
      lessons.title.toLowerCase().includes(query) ||
      lessons.description.toLowerCase().includes(query) ||
      lessons.category.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Search Results for "{query}"</h1>
      {filteredLessons.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
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
      ) : (
        <p>No results found. Try a different search term.</p>
      )}
    </div>
  );
}
