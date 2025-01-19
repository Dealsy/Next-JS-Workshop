import { submitForm } from "./action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RedirectSolution() {
  return (
    <div className="space-y-8 p-20">
      <h1 className="text-2xl font-bold">Server-Side Redirect</h1>

      <div className="space-y-4">
        <p className="text-muted-foreground">
          Enter the secret code to complete the navigation exercises!
        </p>

        <form action={submitForm} className="space-y-4 max-w-sm">
          <Input
            type="text"
            name="code"
            placeholder="Enter the secret code..."
            className="w-full p-2 border rounded"
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
