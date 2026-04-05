"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export function GlassmorphismChatCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl max-w-[280px]"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D9A3] to-[#00b382] flex items-center justify-center">
          <User className="w-5 h-5 text-black" />
        </div>
        <div className="flex-1">
          <p className="text-white/90 text-sm leading-relaxed">
            Hello! Ready to help build stunning UI components today.
          </p>
          <span className="text-white/40 text-xs mt-2 block">Just now</span>
        </div>
      </div>
    </motion.div>
  );
}
