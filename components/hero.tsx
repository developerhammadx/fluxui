"use client";

import { motion } from "framer-motion";
import { Search, Download, Eye, Sparkles, Zap, Code2, Layers, LayoutGrid, X, Filter, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Component data for the grid
const componentData = [
  {
    id: 1,
    title: "Glassmorphism Chat Card",
    description: "Modern frosted glass UI component with backdrop blur effect for messaging interfaces.",
    badge: "New",
    badgeColor: "bg-[#00D9A3]",
    category: "React",
    preview: "glassmorphism",
  },
  {
    id: 2,
    title: "Neon Loading Spinner",
    description: "Dual-ring animated loader with neon green accent for modern dark interfaces.",
    badge: "Featured",
    badgeColor: "bg-purple-500",
    category: "CSS",
    preview: "spinner",
  },
  {
    id: 3,
    title: "Dark Mode Input Set",
    description: "Complete form collection with email input and subscribe button for newsletters.",
    badge: "React",
    badgeColor: "bg-blue-500",
    category: "React",
    preview: "input",
  },
  {
    id: 4,
    title: "Sidebar Navigation",
    description: "Collapsible admin sidebar with active states and user profile section.",
    badge: "Python",
    badgeColor: "bg-yellow-500",
    category: "Vue",
    preview: "sidebar",
  },
  {
    id: 5,
    title: "Pricing Toggle Card",
    description: "Interactive pricing component with monthly/yearly billing toggle switch.",
    badge: "Featured",
    badgeColor: "bg-purple-500",
    category: "React",
    preview: "pricing",
  },
  {
    id: 6,
    title: "AI Agent Dashboard",
    description: "Full-featured AI interface with chat history and prompt input area.",
    badge: "New",
    badgeColor: "bg-[#00D9A3]",
    category: "Python",
    preview: "aiagent",
  },
  {
    id: 7,
    title: "Gradient Button Set",
    description: "Collection of call-to-action buttons with hover animations and gradients.",
    badge: "React",
    badgeColor: "bg-blue-500",
    category: "React",
    preview: "buttons",
  },
  {
    id: 8,
    title: "Data Table Pro",
    description: "Sortable table component with pagination and search functionality built-in.",
    badge: "Featured",
    badgeColor: "bg-purple-500",
    category: "React",
    preview: "datatable",
  },
  {
    id: 9,
    title: "Modal Dialog",
    description: "Centered overlay modal with close button and backdrop blur effect.",
    badge: "CSS",
    badgeColor: "bg-pink-500",
    category: "CSS",
    preview: "modal",
  },
  {
    id: 10,
    title: "Toast Notifications",
    description: "Stackable notification system with success, error, and warning variants.",
    badge: "New",
    badgeColor: "bg-[#00D9A3]",
    category: "React",
    preview: "toast",
  },
  {
    id: 11,
    title: "Avatar Group",
    description: "Overlapping user avatars with hover expand effect for team displays.",
    badge: "React",
    badgeColor: "bg-blue-500",
    category: "Vue",
    preview: "avatars",
  },
  {
    id: 12,
    title: "Progress Steps",
    description: "Multi-step progress indicator with checkmarks and connecting lines.",
    badge: "Featured",
    badgeColor: "bg-purple-500",
    category: "React",
    preview: "progress",
  },
];

// Preview Components Mapper
const PreviewComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "glassmorphism":
      return (
        <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-[160px]">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00D9A3] to-[#00b382] flex items-center justify-center text-[8px] text-black font-bold">AI</div>
            <p className="text-white/80 text-[10px] leading-tight">Hello! Ready to help build stunning UI components today.</p>
          </div>
        </div>
      );
    case "spinner":
      return (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-[#222] border-t-[#00D9A3] animate-spin" />
          <div className="absolute inset-1 rounded-full border-2 border-[#222] border-b-[#00D9A3] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>
      );
    case "input":
      return (
        <div className="w-full max-w-[140px] space-y-2">
          <input type="email" placeholder="Email" className="w-full px-2 py-1.5 rounded-md bg-[#111] border border-[#222] text-white text-[10px] placeholder-[#444]" />
          <button className="w-full py-1.5 rounded-md bg-[#00D9A3] text-black text-[10px] font-medium">Subscribe</button>
        </div>
      );
    case "sidebar":
      return (
        <div className="w-full h-full flex flex-col p-2">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-5 h-5 rounded bg-[#00D9A3] flex items-center justify-center">
              <Layers className="w-3 h-3 text-black" />
            </div>
            <span className="text-white text-[10px] font-semibold">FluxUI</span>
          </div>
          <div className="space-y-0.5">
            {['Dashboard', 'Components', 'Projects'].map((item, i) => (
              <div key={item} className={`px-2 py-1 rounded text-[8px] ${i === 0 ? 'bg-[#00D9A3]/10 text-[#00D9A3]' : 'text-[#666]'}`}>{item}</div>
            ))}
          </div>
        </div>
      );
    case "pricing":
      return (
        <div className="p-3 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] w-full max-w-[140px]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#888] text-[8px]">Pro</span>
            <div className="w-6 h-3 rounded-full bg-[#1a1a1a] relative">
              <div className="absolute right-0.5 top-0.5 w-2 h-2 rounded-full bg-[#00D9A3]" />
            </div>
          </div>
          <p className="text-white text-lg font-bold">$29<span className="text-[#666] text-[10px]">/mo</span></p>
        </div>
      );
    case "aiagent":
      return (
        <div className="w-full h-full flex flex-col p-2">
          <div className="flex-1 space-y-1.5 overflow-hidden">
            <div className="flex gap-1.5">
              <div className="w-4 h-4 rounded-full bg-[#00D9A3]/20" />
              <div className="bg-[#1a1a1a] rounded-lg px-2 py-1 max-w-[80px]">
                <p className="text-[#888] text-[8px]">How can I help?</p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-1">
            <input className="flex-1 px-2 py-1 rounded bg-[#111] border border-[#222] text-white text-[8px]" placeholder="Ask anything..." />
            <button className="p-1 rounded bg-[#00D9A3]"><Zap className="w-3 h-3 text-black" /></button>
          </div>
        </div>
      );
    case "buttons":
      return (
        <div className="flex flex-col gap-2 items-center">
          <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00D9A3] to-[#00b382] text-black text-[10px] font-medium">Get Started</button>
          <button className="px-4 py-1.5 rounded-lg border border-[#333] text-white text-[10px]">Learn More</button>
        </div>
      );
    case "datatable":
      return (
        <div className="w-full">
          <div className="flex gap-2 mb-2">
            <div className="h-4 w-16 rounded bg-[#1a1a1a]" />
            <div className="h-4 w-12 rounded bg-[#1a1a1a]" />
            <div className="h-4 w-10 rounded bg-[#1a1a1a]" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2 py-1 border-b border-[#1a1a1a]/50">
              <div className="h-3 w-16 rounded bg-[#222]" />
              <div className="h-3 w-12 rounded bg-[#222]" />
              <div className="h-3 w-10 rounded bg-[#222]/50" />
            </div>
          ))}
        </div>
      );
    case "modal":
      return (
        <div className="relative p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] max-w-[140px]">
          <button className="absolute top-2 right-2 text-[#666]"><X className="w-3 h-3" /></button>
          <h4 className="text-white text-[10px] font-medium mb-1">Confirm Action</h4>
          <p className="text-[#666] text-[8px] mb-2">Are you sure?</p>
          <div className="flex gap-2">
            <button className="flex-1 py-1 rounded bg-[#00D9A3] text-black text-[8px] font-medium">Yes</button>
            <button className="flex-1 py-1 rounded border border-[#333] text-[#888] text-[8px]">No</button>
          </div>
        </div>
      );
    case "toast":
      return (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00D9A3]/10 border border-[#00D9A3]/20">
            <div className="w-3 h-3 rounded-full bg-[#00D9A3]" />
            <span className="text-[#00D9A3] text-[8px]">Success message</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-red-400 text-[8px]">Error occurred</span>
          </div>
        </div>
      );
    case "avatars":
      return (
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#222] to-[#333] border-2 border-[#0a0a0a] flex items-center justify-center">
              <span className="text-[#666] text-[10px]">{String.fromCharCode(64 + i)}</span>
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#0a0a0a] flex items-center justify-center">
            <span className="text-[#888] text-[8px]">+5</span>
          </div>
        </div>
      );
    case "progress":
      return (
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-[#00D9A3] flex items-center justify-center"><span className="text-black text-[8px] font-bold">1</span></div>
          <div className="w-4 h-0.5 bg-[#00D9A3]" />
          <div className="w-6 h-6 rounded-full bg-[#00D9A3] flex items-center justify-center"><span className="text-black text-[8px] font-bold">2</span></div>
          <div className="w-4 h-0.5 bg-[#1a1a1a]" />
          <div className="w-6 h-6 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center"><span className="text-[#666] text-[8px]">3</span></div>
        </div>
      );
    default:
      return null;
  }
};

// Live Preview Component - Wraps the preview with hover effects
const LivePreview = ({ type }: { type: string }) => {
  return (
    <motion.div
      className="relative z-10"
      whileHover={{ 
        scale: 1.05,
        y: -8,
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Glow effect behind component */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10, 31, 10, 0.8) 0%, rgba(0, 217, 163, 0.3) 40%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'scale(1.5)',
        }}
      />
      {/* Asymmetric shadow */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: '0 20px 40px -10px rgba(10, 10, 10, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.5)',
          transform: 'translateY(10px) scale(0.95)',
        }}
      />
      <div className="relative">
        <PreviewComponent type={type} />
      </div>
    </motion.div>
  );
};
const SponsoredCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative group bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] border border-[#2a2a4a] rounded-xl overflow-hidden cursor-pointer"
  >
    <div className="absolute top-3 left-3 z-10">
      <span className="px-2 py-0.5 rounded-full bg-[#2a2a4a] text-[#888] text-[9px] uppercase tracking-wider">Sponsored</span>
    </div>
    <div className="h-32 w-full flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <p className="text-white text-sm font-medium">Premium UI Kit</p>
        <p className="text-[#666] text-[10px]">50% off this week</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <button className="px-4 py-2 rounded-lg bg-white text-black text-xs font-medium">View Deal</button>
    </div>
  </motion.div>
);

// Main Component Card - Uiverse.io Style
const ComponentCard = ({ item, index }: { item: typeof componentData[0]; index: number }) => {
  // Generate random but consistent view/like counts based on id
  const views = (item.id * 1234) % 5000 + 500;
  const likes = (item.id * 567) % 800 + 100;
  
  return (
    <Link href={`/component/${item.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="relative group bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer hover:border-[#2a2a2a] transition-all duration-300"
      >
        {/* Badge - Top Left */}
        <div className="absolute top-2 left-2 z-20">
          <span className={`px-1.5 py-0.5 rounded-full ${item.badgeColor} text-black text-[8px] font-semibold uppercase tracking-wider`}>
            {item.badge}
          </span>
        </div>
        
        {/* Dark Stage with Checkered Pattern */}
        <div 
          className="h-28 w-full flex items-center justify-center p-3 relative bg-black"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #1a1a1a 25%, transparent 25%),
              linear-gradient(-45deg, #1a1a1a 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
              linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)
            `,
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px'
          }}
        >
          <LivePreview type={item.preview} />
        </div>
        
        {/* Card Info */}
        <div className="p-3">
          <h3 className="text-white text-sm font-semibold mb-1 line-clamp-1 group-hover:text-[#00D9A3] transition-colors">
            {item.title}
          </h3>
          
          {/* Bottom Row - Metadata aligned right */}
          <div className="flex items-center justify-between">
            <span className="text-[#555] text-[10px]">
              {item.category}
            </span>
            
            {/* Metadata - Bottom Right */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-[#666]">
                <Eye className="w-3 h-3" />
                <span className="text-[10px]">{views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1 text-[#666]">
                <Heart className="w-3 h-3" />
                <span className="text-[10px]">{likes.toLocaleString()}</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-[#0A1F0A] text-[#4ade80] text-[8px] border border-[#1a3a1a]">
                {item.category === 'React' ? 'React' : item.category === 'CSS' ? 'CSS' : 'UI'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Top Sticky Header Component
const StickyHeader = ({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery 
}: { 
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => {
  const tabs = ["All", "Buttons", "AI Agents", "Dashboards", "Forms", "Navigation"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1a1a1a]">
        <div className="max-w-[90%] mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-[#00D9A3] flex items-center justify-center">
                <Layers className="w-5 h-5 text-black" />
              </div>
              <span className="text-white font-bold text-lg hidden sm:block">FluxUI</span>
            </div>
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                <input
                  type="text"
                  placeholder="Search components, templates, resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111] border border-[#222] text-white text-sm placeholder-[#555] focus:border-[#00D9A3]/50 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button className="p-2.5 rounded-xl bg-[#111] border border-[#222] text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-colors">
                <Filter className="w-4 h-4" />
              </button>
              <Button className="rounded-xl bg-[#00D9A3] text-black hover:bg-[#00D9A3]/90 px-4 py-2.5 text-sm font-medium">
                <Code2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Submit</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-[#111] text-[#888] hover:text-white hover:bg-[#1a1a1a] border border-[#222]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Hero() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = componentData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All" || 
                      (activeTab === "Buttons" && item.title.toLowerCase().includes("button")) ||
                      (activeTab === "AI Agents" && (item.title.toLowerCase().includes("ai") || item.category === "Python")) ||
                      (activeTab === "Dashboards" && item.title.toLowerCase().includes("dashboard")) ||
                      (activeTab === "Forms" && (item.title.toLowerCase().includes("input") || item.title.toLowerCase().includes("form"))) ||
                      (activeTab === "Navigation" && item.title.toLowerCase().includes("navigation"));
    return matchesSearch && matchesTab;
  });

  const gridItems: (typeof componentData[0] | { type: 'ad' })[] = [];
  filteredComponents.forEach((item, index) => {
    gridItems.push(item);
    if ((index + 1) % 6 === 0) {
      gridItems.push({ type: 'ad' });
    }
  });

  return (
    <section className="relative min-h-screen bg-black">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%),
              radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%),
              radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%),
              radial-gradient(at 0% 50%, hsla(340,50%,20%,1) 0, transparent 50%),
              radial-gradient(at 50% 50%, hsla(240,30%,10%,1) 0, transparent 50%),
              radial-gradient(at 100% 50%, hsla(280,40%,15%,1) 0, transparent 50%),
              radial-gradient(at 0% 100%, hsla(220,40%,15%,1) 0, transparent 50%),
              radial-gradient(at 50% 100%, hsla(240,30%,10%,1) 0, transparent 50%),
              radial-gradient(at 100% 100%, hsla(260,30%,15%,1) 0, transparent 50%)
            `,
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Intro Section */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        {/* Dark Green Radial Gradient Spotlight */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(10, 31, 10, 0.6) 0%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(60px)'
          }}
        />
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Build Faster with{" "}
            <span className="text-[#00FFCC]">FluxUI</span>{" "}
            Components.
          </motion.h1>
          
          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A premium collection of open-source UI components and coding tutorials designed for modern developers. Copy, paste, and ship your next big idea.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#components-grid">
              <Button 
                className="bg-[#00D9A3] text-black hover:bg-[#00D9A3]/90 rounded-xl px-8 py-6 text-base font-semibold"
              >
                Browse Components
              </Button>
            </Link>
            <Link href="#learning-academy">
              <Button 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl px-8 py-6 text-base font-semibold"
              >
                Start Learning
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Sticky Header */}
      <StickyHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[90%] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#666] text-sm">
            Showing <span className="text-white font-medium">{filteredComponents.length}</span> components
          </p>
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-4 h-4 text-[#666]" />
            <span className="text-[#666] text-sm">Grid View</span>
          </div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {gridItems.map((item, index) => (
            'type' in item ? (
              <SponsoredCard key={`ad-${index}`} />
            ) : (
              <ComponentCard key={item.id} item={item} index={index} />
            )
          ))}
        </div>

        {/* Empty State */}
        {filteredComponents.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
              <Search className="w-8 h-8 text-[#444]" />
            </div>
            <p className="text-white text-lg font-medium mb-2">No components found</p>
            <p className="text-[#666] text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <div className="h-20" />
    </section>
  );
}
