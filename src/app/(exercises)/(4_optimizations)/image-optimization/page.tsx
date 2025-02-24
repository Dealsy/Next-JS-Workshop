/**
 * 🎯 Exercise: Image Optimization in Next.js
 *
 * In this exercise, you'll learn how to implement image optimization using Next.js's
 * powerful Image component. You'll build a motorcycle showcase page that demonstrates
 * various image optimization techniques.
 *
 * You can use the motorbike images in folder in the public/images/motorbikes or
 * just use your own images
 *
 * 🎯 Tasks:
 * 1. Implement the HeroImage component:
 *    - Use the Image component with fill property
 *    - Add proper sizing and object-fit
 *    - Enable priority loading (it's above the fold!)
 *    - use the v4.webp image
 *
 * 2. Create the MotorcycleCard component:
 *    - Display motorcycle image with fixed dimensions
 *    - Add proper alt text
 *    - Show name and description below the image
 *    - use the bmw.jpg and r6.jpg images
 *
 * 3. Implement the RemoteImage component:
 *    - The next.config.ts has been configured for the remote domain (unsplash.com)
 *    - use an image from unsplash.com
 *    - Add proper error handling for remote images
 *    - Implement blur-up placeholder
 *
 * 🌟 Extra Credit:
 * 1. Add image quality variations to compare file sizes
 * 2. Implement responsive images using sizes prop
 * 3. Add blur-up effect for local images using imported images
 *
 * 📚 Resources:
 * - https://nextjs.org/docs/app/building-your-application/optimizing/images
 */

import Image from 'next/image'

type Motorcycle = {
  id: number
  name: string
  description: string
  image: string
  width: number
  height: number
}

const MOTORCYCLES: Motorcycle[] = [
  {
    id: 1,
    name: 'Ducati Panigale V4',
    description: 'The ultimate expression of Ducati racing DNA',
    image: '/images/webp/v4.webp',
    width: 800,
    height: 600,
  },
  {
    id: 2,
    name: 'BMW S1000RR',
    description: 'German precision meets raw power',
    image: '/images/jpg/bmw.jpg',
    width: 800,
    height: 600,
  },
  {
    id: 3,
    name: 'Yamaha R6',
    description: 'Track-focused supersport excellence',
    image: '/images/jpg/r6.jpg',
    width: 800,
    height: 600,
  },
]

function HeroImage() {
  // TODO: Implement the hero image component
  return null
}

function MotorcycleCard({ motorcycle }: { motorcycle: Motorcycle }) {
  // TODO: Implement the motorcycle card component
  return null
}

function RemoteImage() {
  // TODO: Implement the remote image component with blur placeholder
  return null
}

export default function ImageOptimizationExercise() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <HeroImage />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Motorcycle Showcase</h1>
        </div>
      </div>

      {/* Motorcycle Grid */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Featured Motorcycles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOTORCYCLES.map(motorcycle => (
            <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
          ))}
        </div>
      </div>

      {/* Remote Image Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Photo</h2>
        <RemoteImage />
      </div>
    </div>
  )
}
