import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function InteractiveExercises({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="shadow-xl dark:border-gray-400">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Interactive Exercise
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
