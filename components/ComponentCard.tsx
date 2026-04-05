"use client";

import { motion } from "framer-motion";
import { Eye, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComponentData } from "@/lib/data/componentsData";
import {
  GlassmorphismChatCard,
  NeonSpinner,
  DarkSidebar,
  NeonInput,
  PricingCard,
  AIChatAgent,
} from "@/components/ui-components";

// Component mapper for live previews
const PreviewComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "glassmorphism":
      return <GlassmorphismChatCard />;
    case "spinner":
      return <NeonSpinner size={48} />;
    case "sidebar":
      return (
        <div className="scale-[0.6] origin-left">
          <DarkSidebar />
        </div>
      );
    case "input":
      return (
        <div className="scale-[0.8]">
          <NeonInput />
        </div>
      );
    case "pricing":
      return (
        <div className="scale-[0.8]">
          <PricingCard />
        </div>
      );
    case "aiagent":
      return (
        <div className="scale-[0.7]">
          <AIChatAgent />
        </div>
      );
    default:
      return null;
  }
};

interface ComponentCardProps {
  component: ComponentData;
  index: number;
}

export function ComponentCard({ component, index }: ComponentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#000000] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#00D9A3]/50 transition-all duration-500"
    >
      {/* Live Preview Area */}
      <div className="relative h-[200px] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #1a1a1a 25%, transparent 25%),
              linear-gradient(-45deg, #1a1a1a 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
              linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)
            `,
            backgroundSize: "16px 16px",
            backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px",
          }}
        />

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00D9A3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Live Component */}
        <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
          <PreviewComponent type={component.previewType} />
        </div>

        {/* Hover Overlay with View Details Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Link
            href={`/component/${component.id}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00D9A3] text-black font-semibold hover:bg-[#00D9A3]/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,217,163,0.4)]"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Card Info */}
      <div className="p-5 border-t border-[#1a1a1a]">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-[#00D9A3] transition-colors">
              {component.name}
            </h3>
            <span className="text-xs text-gray-500 mt-1 inline-block px-2 py-1 rounded-full bg-[#1a1a1a]">
              {component.category}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {component.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>{component.views.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            <span>{component.likes.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
