import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/lib/data/resources";
import { Layers, Layout, Navigation, MousePointer, FormInput, CreditCard, Bell, Search, Loader2, Image as ImageIcon, Table, Bot, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Components | FluxUI",
  description: "Browse all UI components - Buttons, Inputs, Modals, Cards, and more. Copy-paste ready for your next project.",
};

const categories = [
  { name: "All", icon: Layers, count: resources.length },
  { name: "UI Component", icon: Layout, count: resources.filter(r => r.category === "UI Component").length },
  { name: "Navigation", icon: Navigation, count: resources.filter(r => r.category === "Navigation").length },
  { name: "Project", icon: Sparkles, count: resources.filter(r => r.category === "Project").length },
];

export default function ComponentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000000] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              UI <span className="text-[#00D9A3]">Components</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Browse our collection of premium, copy-paste ready components. 
              Built with React, Tailwind CSS, and modern best practices.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a1a1a] bg-[#0a0a0a] text-gray-300 hover:border-[#00D9A3] hover:text-[#00D9A3] transition-all"
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs text-gray-500">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Link
                key={resource.id}
                href={`/resources/${resource.slug}`}
                className="group relative rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-6 hover:border-[#00D9A3]/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon based on category */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] group-hover:bg-[#00D9A3]/10 transition-colors">
                  {resource.category === "UI Component" && <Layout className="h-6 w-6 text-[#00D9A3]" />}
                  {resource.category === "Navigation" && <Navigation className="h-6 w-6 text-[#00D9A3]" />}
                  {resource.category === "Project" && <Sparkles className="h-6 w-6 text-[#00D9A3]" />}
                  {!resource.category && <Layers className="h-6 w-6 text-[#00D9A3]" />}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00D9A3] transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                  {resource.description}
                </p>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                  <span>{resource.likes} likes</span>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-[#1a1a1a] text-gray-400">
                  {resource.category}
                </span>
              </Link>
            ))}
          </div>

          {/* Load More / Coming Soon */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              More components coming soon. Follow us on Twitter for updates.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
