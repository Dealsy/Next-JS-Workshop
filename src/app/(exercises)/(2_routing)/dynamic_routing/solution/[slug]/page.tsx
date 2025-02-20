import { ExercisesContainer } from '@/components/exerciseContainer'
import { notFound } from 'next/navigation'
import { posts, type PostSlug } from '../../data'

/*
 * This is the dynamic route page that displays individual blog posts.
 * It demonstrates:
 * 1. How to use TypeScript for type-safe dynamic route parameters
 * 2. How to validate and handle invalid slugs
 * 3. How to use generateStaticParams for static site generation
 */

// Type-safe params interface ensures slug can only be valid values
interface BlogPostParams {
  params: {
    slug: PostSlug
  }
}

// Dynamic routes must be async functions
export default async function BlogPost({ params }: BlogPostParams) {
  // In Next 15, params must be awaited
  const param = await params

  // Find the post that matches the slug from the URL
  const post = posts.find(post => post.slug === param.slug)

  // If no post is found, show the 404 page
  // This is better than showing a broken page or throwing an error
  if (!post) {
    notFound()
  }

  return (
    <ExercisesContainer>
      <article className="prose dark:prose-invert">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </ExercisesContainer>
  )
}

// Generate static pages for all posts at build time
// This improves performance and SEO
export function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }))
}
