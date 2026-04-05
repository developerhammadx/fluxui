export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  readTime: string;
  difficulty: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

// Blog posts data derived from tutorials
export const posts: Post[] = [
  {
    id: "1",
    title: "Mastering React Hooks: Advanced Patterns",
    slug: "mastering-react-hooks",
    content: "React Hooks revolutionized how we write React components. In this comprehensive tutorial, you'll learn advanced patterns for handling side effects, cleanup, and building reusable custom hooks that follow React best practices. We'll cover useState, useEffect, useMemo, useCallback, and creating your own custom hooks.",
    excerpt: "Deep dive into useState, useEffect, and custom hooks. Learn advanced patterns for state management and side effects in modern React applications.",
    image: "/images/posts/react-hooks.jpg",
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    readTime: "15 min",
    difficulty: "Intermediate",
    author: "FluxUI Team",
    createdAt: "2026-04-01",
    updatedAt: "2026-04-01"
  },
  {
    id: "2",
    title: "Next.js App Router: The Complete Guide",
    slug: "nextjs-app-router-guide",
    content: "The Next.js App Router represents a paradigm shift in how we build React applications. Learn about server components, client components, dynamic routes, and how to leverage the full power of the new routing system.",
    excerpt: "Master the new App Router in Next.js 13+. Understand server components, routing patterns, and data fetching strategies.",
    image: "/images/posts/nextjs-router.jpg",
    category: "Next.js",
    tags: ["Next.js", "React", "Routing", "Fullstack"],
    readTime: "20 min",
    difficulty: "Advanced",
    author: "FluxUI Team",
    createdAt: "2026-04-02",
    updatedAt: "2026-04-02"
  },
  {
    id: "3",
    title: "Tailwind CSS Mastery: From Zero to Hero",
    slug: "tailwind-css-mastery",
    content: "Tailwind CSS has transformed how we style web applications. This tutorial takes you from basic utility classes to advanced customization, creating responsive designs, and building your own design system with Tailwind.",
    excerpt: "Master utility-first CSS with Tailwind. Learn responsive design, custom configurations, and component extraction patterns.",
    image: "/images/posts/tailwind.jpg",
    category: "CSS",
    tags: ["Tailwind", "CSS", "Design", "Styling"],
    readTime: "12 min",
    difficulty: "Beginner",
    author: "FluxUI Team",
    createdAt: "2026-04-03",
    updatedAt: "2026-04-03"
  },
  {
    id: "4",
    title: "TypeScript Best Practices for React Developers",
    slug: "typescript-best-practices",
    content: "TypeScript brings type safety to JavaScript development. Learn the best practices for using TypeScript with React: proper typing for components, hooks, context, and generic patterns that will make your code more maintainable.",
    excerpt: "Learn TypeScript patterns for React development. Types for props, state, events, and building type-safe applications.",
    image: "/images/posts/typescript.jpg",
    category: "TypeScript",
    tags: ["TypeScript", "React", "JavaScript", "Types"],
    readTime: "18 min",
    difficulty: "Intermediate",
    author: "FluxUI Team",
    createdAt: "2026-04-04",
    updatedAt: "2026-04-04"
  },
  {
    id: "5",
    title: "Building Accessible UI Components",
    slug: "accessible-ui-components",
    content: "Accessibility is not optional. Learn how to build UI components that work for everyone. Covering ARIA labels, keyboard navigation, focus management, and testing with screen readers.",
    excerpt: "Create inclusive web experiences. Learn ARIA patterns, keyboard navigation, and accessibility testing techniques.",
    image: "/images/posts/accessibility.jpg",
    category: "Accessibility",
    tags: ["Accessibility", "ARIA", "WCAG", "Inclusive Design"],
    readTime: "14 min",
    difficulty: "Intermediate",
    author: "FluxUI Team",
    createdAt: "2026-04-05",
    updatedAt: "2026-04-05"
  },
  {
    id: "6",
    title: "Framer Motion: Animation Patterns",
    slug: "framer-motion-patterns",
    content: "Add life to your React applications with Framer Motion. Learn animation patterns, gestures, layout animations, and how to create smooth, performant animations that delight users.",
    excerpt: "Master animations in React with Framer Motion. Learn transitions, gestures, and performant animation patterns.",
    image: "/images/posts/framer-motion.jpg",
    category: "Animation",
    tags: ["Framer Motion", "Animation", "React", "UX"],
    readTime: "16 min",
    difficulty: "Intermediate",
    author: "FluxUI Team",
    createdAt: "2026-03-30",
    updatedAt: "2026-03-30"
  },
  {
    id: "7",
    title: "Modern State Management in 2026",
    slug: "modern-state-management",
    content: "State management in React has evolved significantly. Compare Redux, Zustand, Jotai, and React Context. Learn when to use each solution and how to structure your state for scalability.",
    excerpt: "Compare modern state management solutions. Redux, Zustand, Jotai, and React Context patterns for scalable apps.",
    image: "/images/posts/state-management.jpg",
    category: "React",
    tags: ["React", "Redux", "Zustand", "State Management"],
    readTime: "22 min",
    difficulty: "Advanced",
    author: "FluxUI Team",
    createdAt: "2026-03-28",
    updatedAt: "2026-03-28"
  },
  {
    id: "8",
    title: "API Design Best Practices",
    slug: "api-design-best-practices",
    content: "Designing great APIs is an art. Learn RESTful principles, GraphQL patterns, authentication strategies, versioning, and documentation techniques that make your APIs developer-friendly.",
    excerpt: "Design robust APIs with REST and GraphQL. Authentication, versioning, and documentation best practices.",
    image: "/images/posts/api-design.jpg",
    category: "Backend",
    tags: ["API", "REST", "GraphQL", "Backend"],
    readTime: "19 min",
    difficulty: "Intermediate",
    author: "FluxUI Team",
    createdAt: "2026-03-25",
    updatedAt: "2026-03-25"
  }
];

// Helper functions
export function getAllPosts(): Post[] {
  return posts;
}

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getLatestPosts(count: number = 5): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category === category);
}
