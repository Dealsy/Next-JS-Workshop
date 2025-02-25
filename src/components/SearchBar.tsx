'use client'

import Form from 'next/form'
import { SearchIcon } from 'lucide-react'

export default function SearchBar() {
  return (
    // We are using Next's Form component to handle the search form submission
    // Learn more here: https://nextjs.org/docs/app/api-reference/components/form
    <Form action="/search" className="relative">
      <input
        type="text"
        name="q"
        placeholder="Search lessons..."
        className="bg-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:placeholder:text-gray-600 text-white rounded-full py-2 px-4 pr-10 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon className="w-5 h-5 text-gray-400 dark:text-gray-800" />
      </button>
    </Form>
  )
}
