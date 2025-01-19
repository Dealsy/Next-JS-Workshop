import { submitForm } from "./action";

/*
 * 📚 Exercise 3: Server-Side Redirects
 * ---------------------------------
 * Let's learn how to handle redirects on the server using Server Actions!
 *
 * Tasks:
 * 1. Create a form that submits to the server action
 * 2. Add a text input for a "secret code"
 * 3. Submit the form to trigger the server action
 * 4. Go to the server action file action.ts for next steps.
 *
 * 💡 Tips:
 * - The secret code should be "nextjs"
 * - Use the formAction prop on the form element
 */

export default function Redirect() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Server-Side Redirect</h1>

      <div className="space-y-4">
        <p className="text-muted-foreground">
          Enter the secret code to complete the navigation exercises!
        </p>
        {/* Add your form here */}
      </div>
    </div>
  );
}
