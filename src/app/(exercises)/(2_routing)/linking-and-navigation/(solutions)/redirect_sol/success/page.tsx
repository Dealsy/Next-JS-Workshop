import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Success() {
  return (
    <div className="space-y-8 p-20">
      <h1 className="text-2xl font-bold">🎉 Congratulations!</h1>

      <div className="space-y-4">
        <p className="text-muted-foreground">
          You&apos;ve successfully completed all the navigation exercises!
        </p>

        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
