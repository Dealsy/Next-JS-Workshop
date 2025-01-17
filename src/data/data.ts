type Data = {
  title: string;
  description: string;
};

const data: Data = {
  title: "Server Components",
  description: "You fetched the data! Nice work.",
};

export async function getData(): Promise<Data> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
}

type Profile = {
  name: string;
  role: string;
  bio: string;
};

const layoutData: Profile = {
  name: "John Smith",
  role: "Software Engineer",
  bio: "Passionate about building great user experiences with React and Next.js",
};

export async function fetchLayoutData(): Promise<Profile> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return layoutData;
}
