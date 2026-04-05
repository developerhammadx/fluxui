"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const features = ["Unlimited components", "Premium support", "Source code access"];

export function PricingCard() {
  const [isYearly, setIsYearly] = useState(false);
  const price = isYearly ? 290 : 29;

  return (
    <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] w-full max-w-[280px]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#888] text-sm font-medium">Pro Plan</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="w-12 h-6 rounded-full bg-[#1a1a1a] relative transition-colors"
        >
          <div
            className={`absolute top-1 w-4 h-4 rounded-full bg-[#00D9A3] transition-all ${
              isYearly ? "right-1" : "left-1"
            }`}
          />
        </button>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-[#666] text-sm">/{isYearly ? "year" : "month"}</span>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
            <Check className="w-4 h-4 text-[#00D9A3]" />
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full py-3 rounded-xl bg-[#00D9A3] text-black font-semibold hover:bg-[#00D9A3]/90 transition-all active:scale-[0.98]">
        Get Started
      </button>
    </div>
  );
}
