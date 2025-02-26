# Contributing to Next.js Learning Workshop

Thank you for your interest in contributing to the Next.js Learning Workshop! This document outlines the guidelines and best practices for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Adding New Lessons or Exercises](#adding-new-lessons-or-exercises)

## Code of Conduct

We expect all contributors to adhere to our Code of Conduct. Please be respectful and considerate of others when participating in this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/nextjs-workshop.git`
3. Install dependencies: `pnpm install`
4. Create a new branch for your contribution: `git checkout -b [feat]:your-feature-name`

## Development Workflow

1. Start the development server: `pnpm dev`
2. Make your changes
3. Test your changes thoroughly
4. Commit your changes with a descriptive commit message
5. Push to your fork and submit a pull request

## Coding Standards

We follow strict coding standards to maintain consistency throughout the project:

### React & Next.js

- Always use functional React components
- Always use `export default function` syntax when creating React components
- Use the latest Next.js version features and best practices
- Avoid `useEffect` unless absolutely necessary
- Create custom hooks when appropriate to promote code reuse

### TypeScript

- Always use TypeScript where possible
- Never use the `any` type unless absolutely required
- Use `Type` over `interface` unless an interface is absolutely required
- Prefer `as const` objects over unions and enums
- Don't use TypeScript enums

### Naming Conventions

- Filenames should match function names
- Use short, succinct names for folders, files, functions, and variables
- Never use abbreviations
- Use PascalCase for components and camelCase for variables and functions

### Code Quality

- Always use early returns where possible
- Avoid try/catch wherever possible and pass errors back through functions
- If try/catch is unavoidable, only use it to handle potential data fetch failures
- Remove unused imports, functions, or variables
- Use AbortController and AbortSignal where appropriate (e.g., in useEffect hooks)
- Don't duplicate code; create reusable components or functions
- Always use constants for repeated values and store them in a constants.ts file

## Pull Request Process

1. Ensure your code follows our coding standards
2. Update documentation as necessary
3. Use the appropriate prefix for your PR title based on the type of change:

   - `[lesson]:` for creating new lessons
   - `[exercise]:` for creating new exercisess
   - `[feat]:` for new features (e.g., `[feat]: Add dark mode support`)
   - `[update]:` for updates to existing features (e.g., `[update]: Improve error handling in auth flow`)
   - `[bug]:` for bug fixes (e.g., `[bug]: Fix login form validation`)

4. Include a clear description of the changes in your pull request
5. Link any related issues
6. Wait for a maintainer to review your PR
7. Address any requested changes
8. Once approved, a maintainer will merge your PR

## Adding New Lessons or Exercises

Exercises:

- When creating new exercises, make sure to create a new folder in the `src/app/(exercises)` directory
- You will also need to update `EXERCISE_URLS` and `EXERCISE_ROUTES` in the `src/constants.ts` file to give the new exercise a unique url and route

Lessons:

- When creating a new lesson, you need to add this lesson to the folder `content/lessons`
- Lessons must be mdx files
- You will also need to add your lesson to one of the existing lessons sections in the `src/constants.ts` file
- note that in the constant.ts file, the id of the lesson must exaclty match the lessons folder name, i.e a lesson folder called `use-client` must have an id of `use-client`
