"use client";

import { motion } from "framer-motion";
import { Copy, Eye, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

interface ResourceCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  code?: string;
  onClick: () => void;
}

export const ResourceCard = ({ 
  title, 
  category, 
  image, 
  slug,
  code,
  onClick,
}: ResourceCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!code) {
      toast.error("No code available to copy");
      return;
    }
    
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(`${title} code copied!`, {
        icon: <Check className="h-4 w-4 text-[#00D9A3]" />,
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="relative group bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden p-3 sm:p-4 transition-colors hover:border-[#333] cursor-pointer touch-manipulation"
    >
      {/* Preview Area (Uiverse Checkered Background) */}
      <div 
        className="h-36 sm:h-48 w-full rounded-xl flex items-center justify-center mb-3 sm:mb-4 overflow-hidden relative"
        style={{
          backgroundColor: '#111',
          backgroundImage: `
            linear-gradient(45deg, #161616 25%, transparent 25%),
            linear-gradient(-45deg, #161616 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #161616 75%),
            linear-gradient(-45deg, transparent 75%, #161616 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      >
        <div className="z-10 w-full h-full relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        
        {/* Hover Overlay Buttons - Always visible on mobile, hover on desktop */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 sm:gap-3">
          <button 
            onClick={handleCopy}
            className={`p-2 sm:p-2.5 rounded-full transition-all active:scale-95 ${
              copied 
                ? "bg-[#00D9A3] text-black" 
                : "bg-white text-black hover:bg-gray-200"
            }`}
            aria-label="Copy code"
          >
            {copied ? <Check size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Copy size={16} className="sm:w-[18px] sm:h-[18px]" />}
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="bg-[#222] text-white p-2 sm:p-2.5 rounded-full hover:bg-[#333] transition-colors active:scale-95"
            aria-label="View component"
          >
            <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex justify-between items-start sm:items-center px-1">
        <div className="min-w-0 flex-1">
          <h3 className="text-white font-medium text-sm truncate">{title}</h3>
          <p className="text-[#666] text-xs mt-0.5 sm:mt-1">{category}</p>
        </div>
        <div className="bg-[#1a1a1a] px-2 py-1 rounded text-[10px] text-[#888] border border-[#222] ml-2 shrink-0">
          Tailwind
        </div>
      </div>
    </motion.div>
  );
};
