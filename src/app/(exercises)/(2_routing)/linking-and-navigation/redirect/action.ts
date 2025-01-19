"use server";

/*
 * 📚 Exercise 3: Server-Side Redirects
 * --------------------------------------------
 * In this exercise, you'll learn how to redirect users to a different page using server actions.
 *
 * Tasks:
 * 1. Import the redirect function from 'next/navigation'
 * 2. Create a server action that redirects, you can redirect to anywhere
 *
 *  Extra Credit:
 *  - Create a success page in redirect/success/page.tsx and redirect to it. - You'll need to setup the folder
 *
 */

export async function submitForm(formData: FormData) {
  const code = formData.get("code");

  if (code === "nextjs") {
    // setup the redirect function here, you can redirect to anywhere
  }

  return { error: "Invalid code" };
}
