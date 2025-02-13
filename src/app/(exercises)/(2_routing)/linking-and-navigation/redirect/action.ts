'use server'

import { EXERCISE_ROUTES } from '@/constants'
import { redirect } from 'next/navigation'

/*
 * 🔐 Exercise 3: Server-Side Redirects
 * --------------------------------------------
 * Continuing from the useRouter exercise, let's implement a premium code check.
 *
 * Tasks:
 * 1. Import the `redirect` function from 'next/navigation'.
 * 2. In the `submitForm` function, check if the `code` is equal to "premium".
 * 4. If the code is "premium", redirect to `EXERCISE_ROUTES.redirectSuccess`.
 * 5. If the code is not "premium", return an error message.
 *
 */

export async function submitForm(formData: FormData) {
  const code = formData.get('code')

  // use this as the redirect path
  const success = EXERCISE_ROUTES.redirect_success

  // TODO: Implement the redirect logic here
  // If code is "premium", redirect to EXERCISE_ROUTES.redirectSuccess
  // Otherwise, return an error
}
