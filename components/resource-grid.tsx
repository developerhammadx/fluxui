"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { ResourceCard } from "./resource-card";
import { resources } from "@/lib/data/resources";
import { toast } from "sonner";

const categories = [
  { id: "all", label: "All", count: null },
  { id: "ui-component", label: "Buttons", count: 0 },
  { id: "input", label: "Inputs", count: 0 },
  { id: "loader", label: "Loaders", count: 0 },
  { id: "navigation", label: "Navigation", count: 0 },
  { id: "card", label: "Cards", count: 0 },
  { id: "animation", label: "Animations", count: 0 },
];

// Update counts based on resources
const getCategoryCount = (categoryId: string) => {
  if (categoryId === "all") return resources.length;
  return resources.filter(r => {
    const cat = r.category.toLowerCase();
    if (categoryId === "ui-component") return cat.includes("button");
    if (categoryId === "input") return cat.includes("input") || cat.includes("form");
    if (categoryId === "loader") return cat.includes("loader") || cat.includes("loading");
    if (categoryId === "navigation") return cat.includes("nav") || cat.includes("menu");
    if (categoryId === "card") return cat.includes("card");
    if (categoryId === "animation") return cat.includes("anim") || cat.includes("motion");
    return false;
  }).length;
};

export function ResourceGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(r => {
        const cat = r.category.toLowerCase();
        if (activeCategory === "ui-component") return cat.includes("button");
        if (activeCategory === "input") return cat.includes("input") || cat.includes("form");
        if (activeCategory === "loader") return cat.includes("loader") || cat.includes("loading");
        if (activeCategory === "navigation") return cat.includes("nav") || cat.includes("menu");
        if (activeCategory === "card") return cat.includes("card");
        if (activeCategory === "animation") return cat.includes("anim") || cat.includes("motion");
        return false;
      });

  const handleResourceClick = (slug: string) => {
    router.push(`/resources/${slug}`);
  };

  return (
    <section id="featured-resources" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => {
            const count = getCategoryCount(category.id);
            if (category.id !== "all" && count === 0) return null;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-black"
                    : "bg-[#111] text-[#888] hover:text-white hover:bg-[#1a1a1a] border border-[#222]"
                }`}
              >
                {category.label}
                {count !== null && (
                  <span className={`ml-2 text-xs ${activeCategory === category.id ? "text-black/60" : "text-[#666]"}`}>
                    {count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ResourceCard
                  title={resource.title}
                  category={resource.category}
                  image={resource.image}
                  slug={resource.slug}
                  code={resource.code}
                  onClick={() => handleResourceClick(resource.slug)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredResources.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <Sparkles className="h-12 w-12 text-[#333] mx-auto mb-4" />
            <p className="text-[#666]">No resources found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
