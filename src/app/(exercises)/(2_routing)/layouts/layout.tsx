import { fetchLayoutData } from '@/data/data'
import Link from 'next/link'

/*
 * Exercise: Layouts in Next.js
 *
 * 🎯 Goal: Learn how a nested layouts work
 *
 * 📝 Tasks:
 * 1. Your first task is to add some styles to this layout
 * 2. Fetch some data and display it in the layout - you can use the fetchLayoutData from the data.ts file
 *
 * 💡 Tips:
 * - Use Tailwind to change the background color of the layout
 * - Add differnt html elements to the layout to see what happens
 *
 */

async function Profile() {
  // TODO: Fetch the data from the fetchLayoutData file, the import is already at the top of the file.
  // Expected data: { name: string; role: string; bio: string }
  // Once you have the data place it in the layout somewhere.
}

export default function Layout({ children }: { children: React.ReactNode }) {
  // You can add your styles here
  return <div>{children}</div>
}
