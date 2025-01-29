# Next.js MDX Documentation System Implementation Guide

## 1. Project Structure

```
src/
├── content/
│   └── lessons/
│       └── (category_name)/
│           └── lesson-id/
│               └── index.mdx
├── components/
│   ├── LessonContent.tsx    # Main MDX renderer
│   ├── CodeBlock.tsx        # Code block styling
│   └── ThemeImage.tsx       # Theme-aware images
└── app/
    └── lessons/
        └── (config)/
            └── [...slug]/
                └── page.tsx  # Dynamic lesson routes
```

## 2. Core Components

### MDX Configuration (mdx-components.tsx)

```typescript
// Custom components available in MDX files
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    Demo: Demo,
    Alert: Alert,
    InteractiveExercises: InteractiveExercises,
    ServerClientGuide: ServerClientGuide,
    ThemeImage: ThemeImage,
    ...components,
  }
}
```

### Lesson Content Renderer (LessonContent.tsx)

```typescript
export default async function LessonContent({ lessonId }: { lessonId: string }) {
  // 1. Find lesson in lessons directory
  const lessonsDir = path.join(process.cwd(), 'src/content/lessons')

  // 2. Dynamically import MDX content
  const Content = await import(`@/content/lessons/${categoryFolder}/${lessonId}/index.mdx`)

  // 3. Render with prose styling
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <Content />
    </div>
  )
}
```

## 3. Routing System

### Dynamic Routes (page.tsx)

```typescript
export default async function LessonPage({ params }: { params: { slug: string[] } }) {
  const [category, lessonId] = params.slug

  return (
    <Card>
      <CardHeader>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
        <Badge>{lesson.category}</Badge>
      </CardHeader>
      <CardContent>
        <LessonContent lessonId={lesson.id} />
      </CardContent>
    </Card>
  )
}
```

## 4. MDX Content Structure

````markdown
# Lesson Title

Content goes here...

<ThemeImage
  darkSrc="/dark-image.svg"
  lightSrc="/light-image.svg"
  alt="Description"
/>

<Alert type="info">
  Important information here
</Alert>

## Code Examples

```tsx
// Code blocks with syntax highlighting
```
````

<InteractiveExercises href="/exercise-link">
  Exercise instructions here...
</InteractiveExercises>
```

## 5. Implementation Steps

1. **Setup Dependencies**

   ```json
   {
     "dependencies": {
       "@mdx-js/react": "^3.0.0",
       "@next/mdx": "^14.0.0",
       "next-mdx-remote": "^4.0.0"
     }
   }
   ```

2. **Configure Next.js**

   - Add MDX support in next.config.js
   - Configure content directory

3. **Create Base Components**

   - MDX components wrapper
   - Lesson content renderer
   - Custom MDX components (CodeBlock, ThemeImage, etc.)

4. **Setup Routing**

   - Dynamic routes for lessons
   - Category-based organization
   - Static path generation

5. **Content Organization**
   - Organize content by categories
   - Use consistent naming conventions
   - Include metadata in lesson files

## 6. Features

- ✅ Dynamic routing based on categories and lessons
- ✅ Custom MDX components
- ✅ Syntax highlighting for code blocks
- ✅ Theme-aware images
- ✅ Interactive exercises integration
- ✅ Fallback for under construction lessons
- ✅ Proper TypeScript support
- ✅ SEO metadata generation

## 7. Best Practices

1. Keep MDX files in a dedicated content directory
2. Use consistent naming conventions
3. Implement proper error handling
4. Provide fallback UI for missing content
5. Use TypeScript for type safety
6. Implement proper metadata for SEO
7. Keep components modular and reusable
