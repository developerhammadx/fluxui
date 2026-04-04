"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function FluxUILogo3D({ size = 120 }: { size?: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isHovered
            ? "0 0 60px 20px rgba(168, 85, 247, 0.6), 0 0 100px 40px rgba(59, 130, 246, 0.4)"
            : "0 0 30px 10px rgba(168, 85, 247, 0.3), 0 0 60px 20px rgba(59, 130, 246, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* 3D Container with perspective */}
      <div
        className="absolute inset-0"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Rotating logo */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotateY: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <svg
              width={size * 0.7}
              height={size * 0.7}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metal gradient */}
                <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="30%" stopColor="#a0a0a0" />
                  <stop offset="50%" stopColor="#d0d0d0" />
                  <stop offset="70%" stopColor="#808080" />
                  <stop offset="100%" stopColor="#c0c0c0" />
                </linearGradient>

                {/* Bevel highlight */}
                <linearGradient id="bevel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Neon gradient */}
                <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* Background circle with glow */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#neon)"
                strokeWidth="2"
                fill="none"
                filter={isHovered ? "url(#glow)" : undefined}
              />

              {/* Vertical bar - thick main stem */}
              <path
                d="M30 20 L30 80"
                stroke="url(#metal)"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Top horizontal bar - energy wave style */}
              <path
                d="M30 25 Q45 20, 55 25 T70 25"
                stroke="url(#metal)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Middle horizontal bar - energy wave style */}
              <path
                d="M30 45 Q45 40, 55 45 T65 45"
                stroke="url(#metal)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Bevel highlight on vertical bar */}
              <path
                d="M25 20 L25 80"
                stroke="url(#bevel)"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Energy flux dots */}
              <circle cx="55" cy="25" r="3" fill="#a855f7">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="65" cy="45" r="2" fill="#3b82f6">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* Back face (mirrored) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <svg
              width={size * 0.7}
              height={size * 0.7}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "scaleX(-1)" }}
            >
              <defs>
                <linearGradient id="metalBack" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#808080" />
                  <stop offset="50%" stopColor="#606060" />
                  <stop offset="100%" stopColor="#909090" />
                </linearGradient>
                <linearGradient id="neonBack" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>

              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#neonBack)"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />

              <path
                d="M30 20 L30 80"
                stroke="url(#metalBack)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M30 25 Q45 20, 55 25 T70 25"
                stroke="url(#metalBack)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M30 45 Q45 40, 55 45 T65 45"
                stroke="url(#metalBack)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Inner reflection shine */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
