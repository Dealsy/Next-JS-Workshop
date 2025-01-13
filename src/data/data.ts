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
