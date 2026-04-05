"use client";

import { useState } from "react";

export function NeonInput() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-[280px] space-y-3">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter your email"
          className={`w-full px-4 py-3 rounded-lg bg-[#111] border outline-none transition-all duration-300 text-white placeholder-gray-500 ${
            isFocused
              ? "border-[#00D9A3] shadow-[0_0_20px_rgba(0,217,163,0.3)]"
              : "border-[#222] hover:border-[#333]"
          }`}
        />
        {isFocused && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-2 h-2 rounded-full bg-[#00D9A3] animate-pulse" />
          </div>
        )}
      </div>
      <button className="w-full py-3 rounded-lg bg-[#00D9A3] text-black font-semibold hover:bg-[#00D9A3]/90 transition-all active:scale-[0.98]">
        Subscribe
      </button>
    </div>
  );
}
