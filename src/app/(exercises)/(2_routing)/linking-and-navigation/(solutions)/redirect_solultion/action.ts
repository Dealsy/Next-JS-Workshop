'use server'

import { EXERCISE_ROUTES } from '@/constants'
import { redirect } from 'next/navigation'

export async function submitForm(formData: FormData) {
  const code = formData.get('code')

  const success = EXERCISE_ROUTES.redirect_success

  if (code === 'premium') {
    redirect(success)
  }

  return { error: 'Invalid code' }
}
