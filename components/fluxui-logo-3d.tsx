"use client";

import { motion } from "framer-motion";

export function FluxUILogo3D({ className }: { className?: string }) {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative w-10 h-10">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D9A3] to-[#1E3A8A] rounded-xl blur-lg opacity-50" />
        
        {/* Main icon container */}
        <div className="relative w-full h-full bg-black rounded-xl border border-[#1a1a1a] flex items-center justify-center overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D9A3]/20 to-[#1E3A8A]/20" />
          
          {/* F Logo */}
          <svg 
            viewBox="0 0 40 40" 
            className="w-6 h-6 relative z-10"
            fill="none"
          >
            <defs>
              <linearGradient id="fGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D9A3" />
                <stop offset="50%" stopColor="#0080FF" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main F shape */}
            <path
              d="M12 8 L12 32 M12 8 L28 8 M12 20 L24 20"
              stroke="url(#fGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
            />
            
            {/* Inner glow line */}
            <path
              d="M14 10 L14 30 M14 10 L26 10 M14 20 L22 20"
              stroke="#00FFCC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>
        </div>
        
        {/* Corner accent */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00D9A3] rounded-full blur-sm" />
      </div>
    </motion.div>
  );
}
