"use client";

import { useState } from "react";
import { Layers, Home, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: Layers, label: "Components" },
  { icon: Users, label: "Users" },
  { icon: Settings, label: "Settings" },
];

export function DarkSidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-64 h-full bg-[#0a0a0a] border-r border-[#1a1a1a] p-4 rounded-xl">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 rounded-lg bg-[#00D9A3] flex items-center justify-center">
          <Layers className="w-5 h-5 text-black" />
        </div>
        <span className="font-bold text-white">FluxUI</span>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
              active === item.label
                ? "bg-[#00D9A3]/10 text-[#00D9A3]"
                : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
