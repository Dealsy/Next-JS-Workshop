import { getLessonById, lessons } from "@/data/lessons";

export default function LessonPage({
  params,
}: {
  params: { lessonId: string };
}) {
  const lesson = getLessonById(params.lessonId);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-gray-600">{lesson.description}</p>
          <div className="mt-4 flex gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {lesson.difficulty}
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
              {lesson.category}
            </span>
          </div>
        </header>

        {/* Lesson content will be dynamically loaded here */}
        <div className="prose max-w-none">
          <p>Lesson content coming soon...</p>
        </div>
      </div>
    </div>
  );
}
export function generateStaticParams() {
  return lessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
