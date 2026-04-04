"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, FileCode, Brain, Rocket, Layers, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

// Learning Academy data
const learningResources = [
  {
    id: "learn-1",
    icon: FileCode,
    title: "Mastering React Hooks",
    summary: "Deep dive into useState, useEffect, and custom hooks. Learn advanced patterns for state management and side effects in modern React applications with real-world examples.",
    slug: "mastering-react-hooks",
    category: "React",
  },
  {
    id: "learn-2",
    icon: Rocket,
    title: "Next.js App Router Guide",
    summary: "Explore the new App Router in Next.js 14. Learn about server components, parallel routes, intercepting routes, and building full-stack applications with the latest features.",
    slug: "nextjs-app-router-guide",
    category: "Next.js",
  },
  {
    id: "learn-3",
    icon: Brain,
    title: "AI Integration for Developers",
    summary: "Learn how to integrate OpenAI, LangChain, and other AI tools into your web applications. Build intelligent chatbots, content generators, and automated workflows.",
    slug: "ai-integration-developers",
    category: "AI",
  },
  {
    id: "learn-4",
    icon: Layers,
    title: "Tailwind CSS Mastery",
    summary: "From basics to advanced utility classes. Master responsive design, dark mode, custom animations, and component styling with the world's most popular CSS framework.",
    slug: "tailwind-css-mastery",
    category: "CSS",
  },
  {
    id: "learn-5",
    icon: Sparkles,
    title: "Framer Motion Animations",
    summary: "Create stunning animations and micro-interactions. Learn about gestures, variants, AnimatePresence, and building fluid UI transitions that delight users.",
    slug: "framer-motion-animations",
    category: "Animation",
  },
  {
    id: "learn-6",
    icon: Zap,
    title: "Performance Optimization",
    summary: "Speed up your React apps with code splitting, lazy loading, memoization techniques. Learn Core Web Vitals, image optimization, and build lightning-fast experiences.",
    slug: "performance-optimization",
    category: "Performance",
  },
];

export function LearningAcademy() {
  return (
    <section id="learning-academy" className="relative z-10 max-w-[90%] mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#00D9A3]/10">
            <BookOpen className="w-6 h-6 text-[#00D9A3]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Master the Code</h2>
        </div>
        <p className="text-[#888] text-lg max-w-2xl">
          Deep dive into React, Next.js, and AI development with our expert-led tutorials.
        </p>
      </motion.div>

      {/* 3-Column Learning Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningResources.map((tutorial, index) => {
          const IconComponent = tutorial.icon;
          return (
            <motion.article
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111111] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-300"
              style={{
                borderLeftWidth: "3px",
                borderLeftColor: "#00D9A3",
              }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Top: Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-[#1a1a1a] group-hover:bg-[#252525] transition-colors">
                    <IconComponent
                      className="w-6 h-6 text-[#00D9A3]"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] text-[#666] text-xs font-medium">
                    {tutorial.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00D9A3] transition-colors">
                  {tutorial.title}
                </h3>

                {/* 3-line Summary */}
                <p className="text-[#888] text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                  {tutorial.summary}
                </p>

                {/* Read Link */}
                <Link
                  href={`/learn/${tutorial.slug}`}
                  aria-label={`Read full tutorial: ${tutorial.title}`}
                  className="inline-flex items-center gap-2 text-[#00D9A3] text-sm font-medium hover:underline underline-offset-4 transition-all group/link mt-auto"
                >
                  Read Full Tutorial
                  <ArrowRight
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
