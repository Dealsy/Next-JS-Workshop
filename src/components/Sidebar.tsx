import Link from "next/link";

const lessonSections = [
  {
    title: "1. Client & Server",
    lessons: [
      { title: "Use Client", path: "/lessons/1_Client_Server/use_client" },
      { title: "Use Server", path: "/lessons/1_Client_Server/use_server" },
    ],
  },
  {
    title: "2. Routing",
    lessons: [
      { title: "Nested Routing", path: "/lessons/2_Routing/nested_routing" },
      { title: "Dynamic Routing", path: "/lessons/2_Routing/dynamic_routing" },
      {
        title: "Parallel Routing",
        path: "/lessons/2_Routing/parallel_routing",
      },
    ],
  },
  // Add more sections as needed
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-gray-50 p-4 hidden md:block">
      <nav>
        {lessonSections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex}>
                  <Link
                    href={lesson.path}
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
