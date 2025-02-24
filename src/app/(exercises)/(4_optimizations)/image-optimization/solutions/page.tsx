import Image, { StaticImageData } from 'next/image'
// Import local images for blur-up effect (Extra Credit 3)
import ducatiImage from '../../../../../public/images/webp/v4.webp'
import bmwImage from '../../../../../public/images/jpg/bmw.jpg'
import r6Image from '../../../../../public/images/jpg/r6.jpg'

type Motorcycle = {
  id: number
  name: string
  description: string
  image: string
  importedImage: StaticImageData
  width: number
  height: number
}

const MOTORCYCLES: Motorcycle[] = [
  {
    id: 1,
    name: 'Ducati Panigale V4',
    description: 'The ultimate expression of Ducati racing DNA',
    image: '/images/webp/v4.webp',
    importedImage: ducatiImage,
    width: 800,
    height: 600,
  },
  {
    id: 2,
    name: 'BMW S1000RR',
    description: 'German precision meets raw power',
    image: '/images/jpg/bmw.jpg',
    importedImage: bmwImage,
    width: 800,
    height: 600,
  },
  {
    id: 3,
    name: 'Yamaha R6',
    description: 'Track-focused supersport excellence',
    image: '/images/jpg/r6.jpg',
    importedImage: r6Image,
    width: 800,
    height: 600,
  },
]

function HeroImage() {
  return (
    <Image
      src={ducatiImage}
      alt="Ducati Panigale V4 - Hero Image"
      fill
      priority
      className="object-cover"
      sizes="100vw"
      placeholder="blur"
    />
  )
}

function MotorcycleCard({ motorcycle }: { motorcycle: Motorcycle }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-[300px]">
        <Image
          src={motorcycle.importedImage}
          alt={motorcycle.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-black">{motorcycle.name}</h3>
        <p className="text-gray-600">{motorcycle.description}</p>
      </div>
    </div>
  )
}

function RemoteImage() {
  // Extra Credit 1: Quality variations
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">High Quality (90)</h3>
        <Image
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87"
          alt="Motorcycle on track - High Quality"
          width={800}
          height={600}
          quality={90}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDAR"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Low Quality (10)</h3>
        <Image
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87"
          alt="Motorcycle on track - Low Quality"
          width={800}
          height={600}
          quality={10}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDAR"
        />
      </div>
    </div>
  )
}

export default function ImageOptimizationExercise() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
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
        <h2 className="text-2xl font-bold mb-4">Quality Comparison</h2>
        <RemoteImage />
      </div>
    </div>
  )
}
