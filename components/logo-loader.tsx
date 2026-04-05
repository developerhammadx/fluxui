"use client";

import { motion } from "framer-motion";

interface LogoLoaderProps {
  size?: number;
  className?: string;
}

export function LogoLoader({ size = 64, className = "" }: LogoLoaderProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative" style={{ width: size, height: size }}>
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00D9A3] to-[#1E3A8A] rounded-xl blur-lg"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Main icon container */}
          <div className="relative w-full h-full bg-black rounded-xl border border-[#1a1a1a] flex items-center justify-center overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D9A3]/20 to-[#1E3A8A]/20" />
            
            {/* F Logo */}
            <svg 
              viewBox="0 0 40 40" 
              className="w-2/3 h-2/3 relative z-10"
              fill="none"
            >
              <defs>
                <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9A3" />
                  <stop offset="50%" stopColor="#0080FF" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <filter id="loaderGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main F shape */}
              <motion.path
                d="M12 8 L12 32 M12 8 L28 8 M12 20 L24 20"
                stroke="url(#loaderGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#loaderGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>
        </div>
      </motion.div>
      
      {/* Loading text */}
      <motion.p
        className="mt-4 text-sm text-muted-foreground font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
