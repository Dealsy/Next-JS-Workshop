import Link from "next/link";
import { GithubIcon } from "lucide-react";
import SearchBar from "./SearchBar";
import { SidebarTrigger } from "./ui/sidebar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 h-14 items-center gap-2 border-b flex justify-between bg-background px-8 py-5">
      <div className="flex flex-row items-center gap-4">
        <SidebarTrigger />
        <Link href="/" className="text-xl font-bold">
          Next.js Workshop
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBar />
        <ThemeToggle />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/lessons" className="hover:text-muted-foreground">
                Lessons
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/yourusername/nextjs-workshop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground"
              >
                <GithubIcon className="inline-block w-5 h-5" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
