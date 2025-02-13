'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import * as React from 'react'
import { format } from 'date-fns'
import { CalendarIcon, Plane } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import {
  DEPARTURE_CITIES,
  DepartureCities,
  DESTINATION_CITIES,
  DestinationCities,
  EXERCISE_ROUTES,
} from '@/constants'

export default function Page() {
  const router = useRouter()

  const [departure, setDeparture] = useState<DepartureCities>(DEPARTURE_CITIES[0])
  const [destination, setDestination] = useState<DestinationCities>(DESTINATION_CITIES[0])
  const [loading, setLoading] = useState<boolean>(false)
  const [date, setDate] = React.useState<Date>()

  const handleNavigation = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push(EXERCISE_ROUTES.redirect)
    }, 2000)
  }

  return (
    <div className="container mx-auto p-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Plane className="h-6 w-6" />
            Flight Booking
          </CardTitle>
          <CardDescription>Book a flight to unlock a special offer!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="departure">Departure City</Label>
              <Select
                value={departure}
                onValueChange={value => setDeparture(value as DepartureCities)}>
                <SelectTrigger id="departure">
                  <SelectValue placeholder="Select departure city" />
                </SelectTrigger>
                <SelectContent>
                  {DEPARTURE_CITIES.map(city => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination City</Label>
              <Select
                value={destination}
                onValueChange={value => setDestination(value as DestinationCities)}>
                <SelectTrigger id="destination">
                  <SelectValue placeholder="Select destination city" />
                </SelectTrigger>
                <SelectContent>
                  {DESTINATION_CITIES.map(city => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <Button
            onClick={handleNavigation}
            className="w-full"
            disabled={loading || !departure || !destination || !date}>
            {loading ? 'Booking...' : 'Book Flight'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
