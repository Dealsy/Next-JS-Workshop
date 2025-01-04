import Link from "next/link";

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-100 p-4">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Lessons
        </Link>
      </nav>
      {children}
    </div>
  );
}
