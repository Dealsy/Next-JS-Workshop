export const posts = [
  {
    slug: "hello-world",
    title: "Hello, World!",
    content: "This is my first blog post.",
  },
  {
    slug: "nextjs-13",
    title: "Next.js 13 Features",
    content: "Exploring the new features in Next.js 13.",
  },
] as const;

export type Post = (typeof posts)[number];
export type PostSlug = Post["slug"]; 