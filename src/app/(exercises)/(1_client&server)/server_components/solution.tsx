import { getData } from '@/data/data'

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <FetchedData />
      <Counter /> {/* Client component */}
      <Footer />
    </div>
  )
}

export async function FetchedData() {
  const info = await getData()

  if (!info) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col gap-2 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-muted-foreground">{info.title}</h1>
      <p className="text-sm text-muted-foreground">{info.description}</p>
    </div>
  )
}
