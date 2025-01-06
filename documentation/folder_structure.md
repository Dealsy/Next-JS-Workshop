This is the folder structure for the project, with numbered sections indicating recommended learning order.

```
src/
├── app/
│   └── lessons/
│       ├── (config)/
│       │   └── [...slug]/           # Dynamic route handler for lessons
│       └── (exercises)/             # Interactive exercises
│           └── (directives)/        # Current exercise implementations
│
├── content/
│   └── lessons/                     # MDX content for lessons
│       ├── 1_client_server/         # Client & Server concepts
│       │   ├── use-client/
│       │   └── use-server/
│       └── 2_routing/               # Routing concepts
│           └── dynamic-routing/
│
├── components/                      # Shared components
│   ├── LessonContent.tsx           # MDX content renderer
│   └── Sidebar.tsx                 # Navigation sidebar
│
└── data/
    └── lessons.ts                  # Lesson metadata and configuration
```

Key Changes:

1. Standardized numbered category folders (1_client_server, 2_routing)
2. Consistent URL structure matching content organization
3. Clear separation between content and exercises
4. Updated navigation components to handle new structure
