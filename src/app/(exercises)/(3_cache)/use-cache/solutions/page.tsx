import { cacheLife } from 'next/dist/server/use-cache/cache-life'
import { Suspense } from 'react'

type WeatherData = {
  city: string
  temperature: number
  conditions: string
  humidity: number
}

const CITIES = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Dubai'] as const

// Mock weather data with realistic values
const mockWeatherData: Record<string, WeatherData> = {
  London: { city: 'London', temperature: 20, conditions: 'Cloudy', humidity: 75 },
  'New York': { city: 'New York', temperature: 24, conditions: 'Sunny', humidity: 65 },
  Tokyo: { city: 'Tokyo', temperature: 27, conditions: 'Rainy', humidity: 80 },
  Paris: { city: 'Paris', temperature: 22, conditions: 'Clear', humidity: 60 },
  Sydney: { city: 'Sydney', temperature: 25, conditions: 'Partly Cloudy', humidity: 70 },
  Dubai: { city: 'Dubai', temperature: 35, conditions: 'Sunny', humidity: 45 },
}

type CacheDuration = 'short' | 'medium' | 'long'

// Extra Credit: Cache profiles that match Next.js's expected format
const CACHE_PROFILES = {
  short: { revalidate: 60 }, // 1 minute
  medium: { revalidate: 300 }, // 5 minutes
  long: { revalidate: 900 }, // 15 minutes
} as const

async function getWeatherData(
  city: string,
  duration: CacheDuration = 'medium',
): Promise<WeatherData> {
  'use cache'
  //   Extra Credit: Use the cache profile
  cacheLife(CACHE_PROFILES[duration])

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Simulate API call
  const data = mockWeatherData[city]
  if (!data) {
    throw new Error(`Weather data not found for ${city}`)
  }

  return data
}

function WeatherCard({
  city,
  cacheDuration = 'medium',
}: {
  city: string
  cacheDuration?: CacheDuration
}) {
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
      <WeatherCardContent city={city} cacheDuration={cacheDuration} />
    </Suspense>
  )
}

async function WeatherCardContent({
  city,
  cacheDuration,
}: {
  city: string
  cacheDuration: CacheDuration
}) {
  const weather = await getWeatherData(city, cacheDuration)

  return (
    <div className="p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-black">{weather.city}</h2>
      <div className="space-y-1 text-gray-600">
        <p className="text-3xl font-bold text-black">{weather.temperature}°C</p>
        <p>{weather.conditions}</p>
        <p>Humidity: {weather.humidity}%</p>
        <p className="text-xs text-gray-400">Cache duration: {cacheDuration}</p>
      </div>
    </div>
  )
}

export default function UseCachePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
      <p className="text-gray-600 mb-8">
        This page demonstrates the use of &apos;use cache&apos; directive in Next.js with different
        cache durations. Notice how the weather data is cached and reused across components.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Demonstrates the use of the cache directive */}
        {CITIES.map(city => (
          <WeatherCard key={city} city={city} />
        ))}
        {/* Extra Credit: Demonstrate different cache durations */}
        <WeatherCard city="London" cacheDuration="short" />
        <WeatherCard city="New York" cacheDuration="medium" />
        <WeatherCard city="Tokyo" cacheDuration="long" />
        <WeatherCard city="Paris" />
        <WeatherCard city="Sydney" />
        <WeatherCard city="Dubai" />
      </div>
    </div>
  )
}
