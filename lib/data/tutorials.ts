export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  introduction: string;
  coreConcepts: { title: string; description: string }[];
  codeExamples: { title: string; language: string; code: string; explanation?: string }[];
  bestPractices: string[];
  relatedTutorials: string[];
}

export const tutorials: Tutorial[] = [
  {
    id: "1",
    slug: "react-hooks-masterclass",
    title: "React Hooks Masterclass",
    description: "Master useEffect and build powerful custom hooks for your React applications.",
    category: "React",
    readTime: "15 min",
    difficulty: "Intermediate",
    introduction: "React Hooks revolutionized how we write React components. useEffect is the most powerful yet misunderstood hook. In this tutorial, you'll learn advanced patterns for handling side effects, cleanup, and building reusable custom hooks that follow React best practices.",
    coreConcepts: [
      { 
        title: "The useEffect Dependency Array", 
        description: "Understanding when effects run based on dependencies is crucial for avoiding infinite loops and stale closures." 
      },
      { 
        title: "Cleanup Functions", 
        description: "Properly cleaning up subscriptions, timers, and event listeners prevents memory leaks in your applications." 
      },
      { 
        title: "Custom Hook Patterns", 
        description: "Extracting reusable logic into custom hooks promotes code reuse and separation of concerns." 
      },
    ],
    codeExamples: [
      {
        title: "useEffect with Proper Dependencies",
        language: "tsx",
        code: `import { useEffect, useState } from 'react';

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset state when userId changes
    setLoading(true);
    
    const controller = new AbortController();
    
    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Failed to fetch user:', err);
        }
      });

    // Cleanup: Abort fetch on unmount or userId change
    return () => controller.abort();
  }, [userId]); // Only re-run when userId changes

  if (loading) return <div>Loading...</div>;
  return <div>{user?.name}</div>;
}`,
        explanation: "Always include all dependencies in the array. Use AbortController for cancellable requests."
      },
      {
        title: "Custom Hook: useLocalStorage",
        language: "tsx",
        code: `import { useState, useEffect, useCallback } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // Get stored value or use initial
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>;
}`,
        explanation: "Custom hooks should start with 'use' and can call other hooks. Handle SSR gracefully."
      }
    ],
    bestPractices: [
      "Always specify all dependencies in the useEffect array to prevent stale closures",
      "Use useCallback for functions passed to child components or stored in dependencies",
      "Implement cleanup functions for subscriptions, timers, and event listeners",
      "Keep hooks pure - avoid side effects in the render phase",
      "Extract complex logic into custom hooks for reusability",
    ],
    relatedTutorials: ["nextjs-app-router", "performance-optimization"],
  },
  {
    id: "2",
    slug: "nextjs-app-router",
    title: "Next.js App Router Deep Dive",
    description: "Understanding Server Components vs Client Components in Next.js 13+",
    category: "Next.js",
    readTime: "20 min",
    difficulty: "Advanced",
    introduction: "The Next.js App Router introduces a new paradigm with React Server Components. Understanding when to use Server vs Client Components is essential for building high-performance Next.js applications with optimal bundle sizes.",
    coreConcepts: [
      { 
        title: "Server Components (RSC)", 
        description: "Run exclusively on the server, can access backend resources directly, and send zero JavaScript to the client." 
      },
      { 
        title: "Client Components", 
        description: "Traditional React components that run in the browser, can use hooks and browser APIs." 
      },
      { 
        title: "Component Boundaries", 
        description: "Strategic placement of 'use client' directives to minimize client-side JavaScript." 
      },
    ],
    codeExamples: [
      {
        title: "Server Component with Data Fetching",
        language: "tsx",
        code: `// app/page.tsx - Server Component by default
import { ProductCard } from './ProductCard';

async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    // Cache the data, revalidate every hour
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function ProductsPage() {
  // Fetch data directly in the component - no useEffect needed!
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ProductCard.tsx - Keep as Server Component
export function ProductCard({ product }) {
  // Access to server-only resources like databases
  return (
    <div className="border rounded-lg p-4">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}`,
        explanation: "Server Components can be async and fetch data directly. No useState or useEffect needed for data fetching."
      },
      {
        title: "Client Component with Interactivity",
        language: "tsx",
        code: `'use client';

import { useState } from 'react';

// Client Component for interactivity
export function AddToCartButton({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1);
  const [isPending, setIsPending] = useState(false);

  async function handleAddToCart() {
    setIsPending(true);
    try {
      await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ productId, quantity }),
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="flex gap-2">
      <input 
        type="number" 
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-20 border rounded"
      />
      <button 
        onClick={handleAddToCart}
        disabled={isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isPending ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
}`,
        explanation: "Use 'use client' only when you need browser APIs, hooks, or event handlers. Keep the boundary as low as possible."
      }
    ],
    bestPractices: [
      "Start with Server Components by default - only add 'use client' when necessary",
      "Move Client Components down the tree to minimize client JavaScript bundle",
      "Use Server Components for data fetching, database queries, and backend-only logic",
      "Pass Server Component children to Client Components for composition patterns",
      "Leverage streaming and Suspense boundaries for progressive loading",
    ],
    relatedTutorials: ["react-hooks-masterclass", "performance-optimization"],
  },
  {
    id: "3",
    slug: "ai-integration",
    title: "AI Integration with Next.js",
    description: "Build intelligent apps using OpenAI API and Vercel AI SDK",
    category: "AI/ML",
    readTime: "18 min",
    difficulty: "Intermediate",
    introduction: "Integrating AI into web applications has never been easier. With the Vercel AI SDK and OpenAI's powerful models, you can build chatbots, content generators, and intelligent assistants with streaming responses and great UX.",
    coreConcepts: [
      { 
        title: "Streaming Responses", 
        description: "Stream AI responses in real-time for better perceived performance and UX." 
      },
      { 
        title: "Prompt Engineering", 
        description: "Craft effective prompts with context, examples, and constraints for better AI outputs." 
      },
      { 
        title: "AI SDK Hooks", 
        description: "useChat and useCompletion hooks handle state management and streaming automatically." 
      },
    ],
    codeExamples: [
      {
        title: "API Route with OpenAI Streaming",
        language: "tsx",
        code: `// app/api/chat/route.ts
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful coding assistant specializing in React and Next.js.'
      },
      ...messages
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}`,
        explanation: "Use OpenAIStream to convert OpenAI responses to a web stream for real-time display."
      },
      {
        title: "Frontend with useChat Hook",
        language: "tsx",
        code: `'use client';

import { useChat } from 'ai/react';

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto">
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map(message => (
          <div 
            key={message.id}
            className={\`p-4 rounded-lg \${
              message.role === 'user' 
                ? 'bg-blue-100 ml-auto' 
                : 'bg-gray-100'
            }\`}
          >
            <p className="font-semibold text-sm">
              {message.role === 'user' ? 'You' : 'AI'}
            </p>
            <p className="mt-1">{message.content}</p>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2">
            <span className="animate-bounce">●</span>
            <span className="animate-bounce delay-100">●</span>
            <span className="animate-bounce delay-200">●</span>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about React, Next.js..."
          className="w-full p-3 border rounded-lg"
        />
      </form>
    </div>
  );
}`,
        explanation: "The useChat hook handles all state management, streaming, and message history automatically."
      }
    ],
    bestPractices: [
      "Always stream responses for better UX instead of waiting for full generation",
      "Implement rate limiting and token quotas to prevent abuse and control costs",
      "Use system prompts to constrain AI behavior and set context",
      "Store conversation history for multi-turn interactions",
      "Handle errors gracefully and provide fallback responses",
    ],
    relatedTutorials: ["nextjs-app-router", "performance-optimization"],
  },
  {
    id: "4",
    slug: "tailwind-css-mastery",
    title: "Tailwind CSS Mastery",
    description: "Professional layout techniques and complex grid systems with Tailwind",
    category: "CSS",
    readTime: "12 min",
    difficulty: "Intermediate",
    introduction: "Tailwind CSS is more than just utility classes. When mastered, it enables rapid development of complex, responsive layouts without writing custom CSS. Learn advanced patterns for grids, animations, and component composition.",
    coreConcepts: [
      { 
        title: "Grid Template Areas", 
        description: "Create complex dashboard layouts using named grid areas for semantic positioning." 
      },
      { 
        title: "Arbitrary Values", 
        description: "Use square bracket notation for one-off values: w-[123px], grid-cols-[1fr_2fr]." 
      },
      { 
        title: "Layer Directives", 
        description: "Organize styles with @layer for base, components, and utilities with proper cascade." 
      },
    ],
    codeExamples: [
      {
        title: "Complex Dashboard Grid",
        language: "html",
        code: `<!-- Dashboard with sidebar, header, and content area -->
<div class="grid h-screen grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
  <!-- Header spans full width -->
  <header class="col-span-2 bg-gray-900 text-white flex items-center px-6">
    <h1 class="font-bold">Dashboard</h1>
  </header>
  
  <!-- Sidebar -->
  <aside class="bg-gray-800 text-gray-300 p-4 overflow-y-auto">
    <nav class="space-y-2">
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-700">Analytics</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-700">Users</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
    </nav>
  </aside>
  
  <!-- Main Content with nested grid -->
  <main class="p-6 bg-gray-50 overflow-y-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Stats Cards -->
      <div class="bg-white p-6 rounded-xl shadow-sm border">
        <h3 class="text-gray-500 text-sm">Revenue</h3>
        <p class="text-2xl font-bold mt-1">$48,290</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border">
        <h3 class="text-gray-500 text-sm">Users</h3>
        <p class="text-2xl font-bold mt-1">2,420</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border">
        <h3 class="text-gray-500 text-sm">Conversion</h3>
        <p class="text-2xl font-bold mt-1">3.24%</p>
      </div>
    </div>
  </main>
</div>`,
        explanation: "Use grid-cols-[250px_1fr] for fixed-width sidebars with flexible content areas."
      },
      {
        title: "Bento Grid Layout",
        language: "html",
        code: `<!-- Modern Bento-style grid -->
<div class="grid auto-rows-[200px] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <!-- Large featured card -->
  <div class="col-span-1 md:col-span-2 row-span-2 
              bg-gradient-to-br from-purple-500 to-pink-500 
              rounded-3xl p-6 text-white">
    <h2 class="text-2xl font-bold">Featured Project</h2>
    <p class="mt-2 opacity-90">Showcase your best work here.</p>
  </div>
  
  <!-- Standard cards -->
  <div class="bg-blue-500 rounded-3xl p-6 text-white flex items-center justify-center">
    <span class="text-lg font-semibold">Analytics</span>
  </div>
  
  <div class="bg-green-500 rounded-3xl p-6 text-white flex items-center justify-center">
    <span class="text-lg font-semibold">Users</span>
  </div>
  
  <!-- Wide card -->
  <div class="col-span-1 md:col-span-2 
              bg-gray-900 rounded-3xl p-6 text-white">
    <h3 class="font-semibold">Recent Activity</h3>
    <div class="mt-4 space-y-2">
      <div class="h-2 bg-gray-700 rounded w-3/4"></div>
      <div class="h-2 bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
  
  <!-- Tall card -->
  <div class="row-span-2 
              bg-orange-500 rounded-3xl p-6 text-white">
    <h3 class="font-semibold">Quick Stats</h3>
    <ul class="mt-4 space-y-3 text-sm">
      <li>📈 +24% Growth</li>
      <li>👥 1.2k New Users</li>
      <li>💰 $12k Revenue</li>
    </ul>
  </div>
</div>`,
        explanation: "Use auto-rows and col-span/row-span to create asymmetric, visually interesting layouts."
      }
    ],
    bestPractices: [
      "Use @apply sparingly - prefer composing utilities in HTML for better maintainability",
      "Leverage Tailwind's purge system to remove unused styles in production",
      "Use arbitrary values sparingly and extract to config when reused",
      "Combine with CSS Grid for complex layouts without media queries",
      "Use aspect-ratio, object-fit, and container queries for responsive images",
    ],
    relatedTutorials: ["framer-motion-animations", "performance-optimization"],
  },
  {
    id: "5",
    slug: "framer-motion-animations",
    title: "Framer Motion Animations",
    description: "Create smooth, performant animations with AnimatePresence and Layout",
    category: "Animation",
    readTime: "16 min",
    difficulty: "Intermediate",
    introduction: "Framer Motion is the industry-standard animation library for React. Its declarative API makes complex animations simple, while features like AnimatePresence and Layout animations handle the hardest parts of UI transitions automatically.",
    coreConcepts: [
      { 
        title: "AnimatePresence", 
        description: "Handle entering and exiting animations for components that mount/unmount from the React tree." 
      },
      { 
        title: "Layout Animations", 
        description: "Automatically animate position and size changes when layout shifts occur." 
      },
      { 
        title: "Gesture Animations", 
        description: "Drag, hover, tap, and pan gestures with physics-based spring animations." 
      },
    ],
    codeExamples: [
      {
        title: "Modal with AnimatePresence",
        language: "tsx",
        code: `'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
                <h2 className="text-xl font-bold">Modal Title</h2>
                <p className="mt-2 text-gray-600">
                  This modal smoothly enters and exits using AnimatePresence.
                </p>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-4 py-2 bg-gray-200 rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}`,
        explanation: "AnimatePresence wraps components that conditionally render. It delays unmounting until exit animation completes."
      },
      {
        title: "Layout Animation - Sortable List",
        language: "tsx",
        code: `'use client';

import { motion, Reorder } from 'framer-motion';
import { useState } from 'react';

export function SortableList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  return (
    <Reorder.Group 
      axis="y" 
      values={items} 
      onReorder={setItems}
      className="space-y-2"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          className="bg-white p-4 rounded-lg shadow cursor-grab active:cursor-grabbing"
          whileDrag={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
        >
          <motion.div layout>
            {item.text}
          </motion.div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

// Simple layout shift example
export function ExpandingCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={\`bg-purple-500 rounded-2xl cursor-pointer \${
        isExpanded ? 'col-span-2 row-span-2' : ''
      }\`}
      transition={{ layout: { duration: 0.3 } }}
    >
      <motion.h3 layout="position">Card Title</motion.h3>
      {isExpanded && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="mt-4"
        >
          Expanded content that fades in smoothly.
        </motion.p>
      )}
    </motion.div>
  );
}`,
        explanation: "Add layout prop to automatically animate size/position changes. Use Reorder for drag-to-sort functionality."
      }
    ],
    bestPractices: [
      "Use AnimatePresence for any component that mounts/unmounts conditionally",
      "Add will-change: transform for GPU-accelerated animations",
      "Use layout animations sparingly - they can be expensive on complex layouts",
      "Prefer transform and opacity over layout-triggering properties",
      "Use spring physics (type: 'spring') for natural, responsive feel",
    ],
    relatedTutorials: ["tailwind-css-mastery", "react-hooks-masterclass"],
  },
  {
    id: "6",
    slug: "performance-optimization",
    title: "Performance Optimization",
    description: "Code splitting, image optimization, and React.memo for lightning-fast apps",
    category: "Performance",
    readTime: "14 min",
    difficulty: "Advanced",
    introduction: "Performance is not an afterthought - it's a feature. Learn the techniques that separate smooth, professional applications from sluggish ones. From code splitting to strategic memoization, these patterns will make your apps feel instant.",
    coreConcepts: [
      { 
        title: "Code Splitting", 
        description: "Load JavaScript on demand instead of all at once to reduce initial bundle size." 
      },
      { 
        title: "Image Optimization", 
        description: "Proper sizing, lazy loading, and modern formats (WebP/AVIF) for instant visual delivery." 
      },
      { 
        title: "Memoization Strategy", 
        description: "Strategic use of React.memo, useMemo, and useCallback to prevent unnecessary renders." 
      },
    ],
    codeExamples: [
      {
        title: "Dynamic Imports with Next.js",
        language: "tsx",
        code: `import { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Heavy component loaded only when needed
const HeavyChart = lazy(() => import('./HeavyChart'));
const DataTable = lazy(() => import('./DataTable'));

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'chart' | 'table'>('chart');

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setActiveTab('chart')}
          className={\`px-4 py-2 rounded \${
            activeTab === 'chart' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }\`}
        >
          Chart View
        </button>
        <button 
          onClick={() => setActiveTab('table')}
          className={\`px-4 py-2 rounded \${
            activeTab === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }\`}
        >
          Table View
        </button>
      </div>

      {/* Suspense shows fallback while loading */}
      <Suspense fallback={
        <div className="h-96 flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
        </div>
      }>
        {activeTab === 'chart' ? <HeavyChart /> : <DataTable />}
      </Suspense>
    </div>
  );
}

// Route-based code splitting (app router)
// app/heavy-page/page.tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR for client-only libraries
});

export default function HeavyPage() {
  return <HeavyComponent />;
}`,
        explanation: "Use dynamic imports for heavy components. Wrap in Suspense with a loading fallback for smooth UX."
      },
      {
        title: "Strategic Memoization",
        language: "tsx",
        code: `import { memo, useMemo, useCallback } from 'react';

// Memoize expensive child components
const ExpensiveListItem = memo(function ExpensiveListItem({ 
  item, 
  onSelect 
}: { 
  item: { id: number; name: string; data: any[] };
  onSelect: (id: number) => void;
}) {
  // Expensive computation
  const processedData = useMemo(() => {
    return item.data.filter(d => d.active).map(d => d.value * 2);
  }, [item.data]);

  return (
    <li 
      onClick={() => onSelect(item.id)}
      className="p-4 border rounded hover:bg-gray-50"
    >
      <h4>{item.name}</h4>
      <p className="text-sm text-gray-500">
        {processedData.length} items
      </p>
    </li>
  );
});

// Parent component
export function OptimizedList({ items }: { items: any[] }) {
  // Memoize callback so it doesn't change on every render
  const handleSelect = useCallback((id: number) => {
    console.log('Selected:', id);
    // Handle selection logic
  }, []); // Empty deps - function never changes

  // Memoize sorted items
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => b.popularity - a.popularity);
  }, [items]);

  return (
    <ul className="space-y-2">
      {sortedItems.map(item => (
        <ExpensiveListItem 
          key={item.id} 
          item={item} 
          onSelect={handleSelect}
        />
      ))}
    </ul>
  );
}

// When NOT to memoize:
// ❌ Simple components that render quickly
// ❌ Components that always receive new object/array props
// ❌ Early optimization without profiling first

// When TO memoize:
// ✅ Expensive computations with useMemo
// ✅ Stable callbacks passed to memoized children
// ✅ Large lists with React.memo + proper key usage
// ✅ Expensive re-renders identified via React DevTools Profiler`,
        explanation: "Use React.memo for expensive children, useMemo for costly calculations, useCallback for stable function references."
      }
    ],
    bestPractices: [
      "Profile first with React DevTools before optimizing - don't guess",
      "Use Next.js Image component with proper sizing and priority loading",
      "Implement virtualization for lists with thousands of items",
      "Lazy load below-the-fold content and non-critical components",
      "Use the 'useMemo' and 'useCallback' dependency arrays correctly",
    ],
    relatedTutorials: ["nextjs-app-router", "tailwind-css-mastery"],
  },
];

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}

export function getAllTutorials(): Tutorial[] {
  return tutorials;
}
