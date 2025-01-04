import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-100 p-4">
        <Link
          href="/lessons"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Lessons
        </Link>
      </nav>
      {children}
    </div>
  );
}
