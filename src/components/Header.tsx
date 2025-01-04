import Link from "next/link";
import { GithubIcon } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Next.js Workshop
        </Link>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="hover:text-gray-300">
                  Lessons
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/nextjs-workshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <GithubIcon className="inline-block w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
