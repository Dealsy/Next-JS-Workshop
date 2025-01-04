import Link from "next/link";
import { lessons } from "@/data/lessons";

// Helper function to group lessons by category and maintain order
function getLessonsBySection() {
  const sections = [
    {
      id: "1_Client_Server",
      title: "1. Client & Server",
      category: "Client & Server",
    },
    {
      id: "2_Routing",
      title: "2. Routing",
      category: "Routing",
    },
  ];

  return sections.map((section) => ({
    ...section,
    lessons: lessons.filter((lesson) => lesson.category === section.category),
  }));
}

export default function Sidebar() {
  const lessonSections = getLessonsBySection();

  return (
    <aside className="w-64 border-r bg-gray-50 p-4 hidden md:block">
      <nav>
        {lessonSections.map((section) => (
          <div key={section.id} className="mb-6">
            <h2 className="font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={`/lessons/${lesson.id}`}
                    className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                  >
                    {lesson.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
