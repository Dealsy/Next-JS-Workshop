import { getData } from "@/data/data";

/*
 *  💡 Solution: Understanding Server Components
 *
 *  Key Points:
 *  1. Server components are rendered on the server and can't use client-specific APIs
 *  2. Server components can't use hooks like useState, useEffect, etc.
 *  3. Client components can't import server components
 *  4. We should always fetch server data closest to the component that needs it
 *
 */

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <FetchedData />
      <Counter /> {/* Client component */}
      <Footer />
    </div>
  );
}

// Extra Credit: Fetch data from @/data/data.ts
// You could also make this a seprate component and import it in.
export async function FetchedData() {
  const info = await getData();

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-muted-foreground">{info.title}</h1>
      <p className="text-sm text-muted-foreground">{info.description}</p>
    </div>
  );
}
