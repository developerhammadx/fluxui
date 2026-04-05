"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ComponentCard } from "@/components/ComponentCard";
import { componentsData, ComponentData } from "@/lib/data/componentsData";
import { Layers, Layout, Navigation, Zap } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type Category = "All" | "UI Component" | "Navigation" | "Project" | "Animation";

const categories: { name: Category; icon: typeof Layers; count: number }[] = [
  { name: "All", icon: Layers, count: componentsData.length },
  { name: "UI Component", icon: Layout, count: componentsData.filter((c) => c.category === "UI Component").length },
  { name: "Navigation", icon: Navigation, count: componentsData.filter((c) => c.category === "Navigation").length },
  { name: "Animation", icon: Zap, count: componentsData.filter((c) => c.category === "Animation").length },
];

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredComponents =
    activeCategory === "All"
      ? componentsData
      : componentsData.filter((c) => c.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000000] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              UI <span className="text-[#00D9A3]">Components</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Browse our collection of premium, interactive components. Live
              previews - click to interact.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all ${
                  activeCategory === category.name
                    ? "border-[#00D9A3] bg-[#00D9A3]/10 text-[#00D9A3]"
                    : "border-[#1a1a1a] bg-[#0a0a0a] text-gray-300 hover:border-[#333] hover:text-white"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs text-gray-500">({category.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component, index) => (
              <ComponentCard
                key={component.id}
                component={component}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredComponents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No components found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
