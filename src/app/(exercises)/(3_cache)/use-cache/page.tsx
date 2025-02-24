/**
 * 🎯 Exercise: Understanding and Implementing 'use cache' in Next.js
 *
 * In this exercise, you'll learn how to use the 'use cache' directive to optimize
 * data fetching in your Next.js application. You'll build a weather dashboard that
 * shows weather information for multiple cities, demonstrating how to cache expensive
 * data fetches.
 *
 * 🎯 Tasks:
 *
 * 1. Create WeatherCard component:
 *    - Display city name, temperature, and conditions
 *    - Use the cached weather data
 *    - Add loading state
 *    - Do task one first and watch how you get loading states each time you refresh, then do
 *      task 2 and see what happens.
 *
 * 2. Add 'use cache' directive to the getWeatherData function
 *
 *
 * 🌟 Extra Credit:
 * 1. Add a cache duration parameter - you will need to use cacheLife
 *  https://nextjs.org/docs/app/api-reference/functions/cacheLife
 *
 * 📚 Resources:
 * - https://nextjs.org/docs/app/api-reference/functions/use-cache
 */

import { Suspense } from 'react'

type WeatherData = {
  city: string
  temperature: number
  conditions: string
  humidity: number
}

const CITIES = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Dubai'] as const

const mockWeatherData: Record<string, WeatherData> = {
  London: { city: 'London', temperature: 18, conditions: 'Cloudy', humidity: 75 },
  'New York': { city: 'New York', temperature: 24, conditions: 'Sunny', humidity: 65 },
  Tokyo: { city: 'Tokyo', temperature: 27, conditions: 'Rainy', humidity: 80 },
  Paris: { city: 'Paris', temperature: 22, conditions: 'Clear', humidity: 60 },
  Sydney: { city: 'Sydney', temperature: 25, conditions: 'Partly Cloudy', humidity: 70 },
  Dubai: { city: 'Dubai', temperature: 35, conditions: 'Sunny', humidity: 45 },
}

// 💡 Add 'use cache' directive here
async function getWeatherData(city: string): Promise<WeatherData> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Simulate API call
  const data = mockWeatherData[city]
  if (!data) {
    throw new Error(`Weather data not found for ${city}`)
  }

  return data
}

export default async function UseCachePage() {
  function WeatherCard({ city }: { city: string }) {
    return (
      <Suspense
        fallback={
          <div className="p-4 border rounded-lg bg-gray-50 animate-pulse h-40">
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        }>
        <WeatherCardContent city={city} />
      </Suspense>
    )
  }

  async function WeatherCardContent({ city }: { city: string }) {
    const weather = await getWeatherData(city)

    return (
      <div className="p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
        {/* TODO: Add WeatherCardContent here */}
      </div>
    )
  }

  // TODO: Implement the weather dashboard
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* TODO: Add WeatherCard components here */}
        {/* {CITIES.map(city => (
     
  
        ))} */}
      </div>
    </div>
  )
}
