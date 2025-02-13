'use client'

import { submitForm } from './action'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Redirect() {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    const result = await submitForm(formData)
    if (result?.error) {
      setError(result.error)
    } else {
      setError(null)
    }
  }

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Special Offer!</h1>

      <div className="space-y-4">
        <p className="text-muted-foreground">
          Enter the premium code to unlock exclusive benefits!
        </p>

        <form action={handleSubmit}>
          <input
            type="text"
            name="code"
            placeholder="Premium Code"
            className="border p-2 rounded"
          />
          <Button type="submit">Unlock</Button>
        </form>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  )
}
