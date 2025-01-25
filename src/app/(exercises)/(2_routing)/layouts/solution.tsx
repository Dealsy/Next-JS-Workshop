import { fetchLayoutData } from "@/data/data";

async function Profile() {
  const data = await fetchLayoutData();

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
        {data.role}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{data.bio}</p>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Profile />
        <main className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-xs">
          {children}
        </main>
      </div>
    </div>
  );
}
