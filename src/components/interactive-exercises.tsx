import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export function InteractiveExercises({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className={cn("block group no-underline")}>
      <Card
        className={cn(
          "relative overflow-hidden shadow-lg",
          "border-2 border-transparent dark:border-gray-800",
          "transition-all duration-300 ease-in-out",
          "group-hover:border-primary/50 group-hover:shadow-2xl",
          "dark:group-hover:border-primary/30"
        )}
      >
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0",
            "dark:from-primary/0 dark:via-primary/10 dark:to-primary/0",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300 ease-in-out"
          )}
          style={{
            transform: "translateX(-100%)",
            animation: "shimmer 2s infinite",
          }}
        />
        <CardHeader>
          <CardTitle
            className={cn(
              "text-2xl font-bold",
              "transition-colors duration-300 ease-in-out"
            )}
          >
            Interactive Exercise
          </CardTitle>
        </CardHeader>
        <CardContent
          className={cn("transition-colors duration-300 ease-in-out")}
        >
          {children}
        </CardContent>
      </Card>
    </Link>
  );
}
