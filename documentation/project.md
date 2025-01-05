# Next.js Learning Workshop Project

## Project Overview

This is an interactive workshop project designed to teach Next.js 15+ through practical, hands-on lessons. Each topic consists of two parts:

1. A concept explanation in MDX format
2. An interactive lesson with exercises to solve

## Learning Structure

Each topic follows this two-part structure:

### 1. Concept Explanation (MDX)

Located in: `src/content/lessons/[category]/[topic]/index.mdx`

- Detailed concept explanation
- Code examples
- Best practices
- Interactive demos
- Link to practical exercise

### 2. Interactive Lesson

Located in: `src/app/lessons/(exercises)/[category]/[topic]/page.tsx`

- Starter code with comments
- Clear objectives
- Problem to solve
- Tests to validate solution
- Reference solution (hidden)

## Implementation Checklist

### 1. Project Setup ✅

- [x] Create basic folder structure
- [x] Define learning path order
- [x] Setup development environment
- [x] MDX rendering with syntax highlighting
- [x] Dynamic lesson routing
- [x] Sidebar navigation

### 2. Lesson Structure

- [ ] Create template for concept MDX files
- [ ] Create template for interactive lessons
- [ ] Setup testing infrastructure
- [ ] Create solution validation system

### 3. Core Lessons Implementation

#### 1_Client_Server

- [ ] use_client
  - [x] Concept MDX
  - [ ] Interactive lesson
  - [ ] Solution
- [ ] use_server
  - [x] Concept MDX
  - [ ] Interactive lesson
  - [ ] Solution

[... rest of lessons structure ...]

> Note: For detailed folder structure, see [folder_structure.md](./folder_structure.md)

## Lesson Development Guidelines

1. Concept MDX Files:

   - Clear explanations
   - Code examples with syntax highlighting
   - Interactive demos where applicable
   - Link to practical exercise
   - Best practices and common pitfalls

2. Interactive Lessons:

   - Clear problem statement in comments
   - Starter code that needs completion
   - Clear success criteria
   - Helpful hints in comments
   - Hidden solution file
   - Tests to validate implementation

3. Code Quality:
   - TypeScript throughout
   - Proper error handling
   - Clear commenting
   - Follow Next.js best practices

## Next Steps

1. Create templates for both MDX and interactive lessons
2. Implement first complete lesson (use_client)
3. Setup testing infrastructure
4. Create solution validation system

## Contributing

- Follow the two-part lesson structure
- Include both concept MDX and interactive lesson
- Provide clear problem statements
- Include tests and solutions
- Document any special requirements
