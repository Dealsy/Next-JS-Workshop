import Link from "next/link";
import { ArrowRightIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js Learning Workshop</h1>
        <p className="text-xl text-gray-600 mb-8">
          Master Next.js 15+ through hands-on, interactive lessons
        </p>
        <Link
          href="/lessons"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Start Learning
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why This Workshop?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Hands-on Learning",
              description: "Practice real-world Next.js concepts through interactive exercises.",
            },
            {
              title: "Latest Features",
              description: "Stay up-to-date with the newest Next.js 15+ features and best practices.",
            },
            {
              title: "Expert Guidance",
              description: "Learn from carefully crafted lessons and compare with reference solutions.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Lessons</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Client & Server Components",
              description: "Learn when and how to use client-side and server-side rendering effectively.",
              href: "/lessons/1_Client_Server/use_client",
            },
            {
              title: "Data Fetching",
              description: "Master the art of efficient data fetching in Next.js applications.",
              href: "/lessons/data_fetching",
            },
          ].map((lesson, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
              <p className="text-gray-600 mb-4">{lesson.description}</p>
              <Link
                href={lesson.href}
                className="text-blue-600 font-semibold hover:underline inline-flex items-center"
              >
                Start Lesson <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

