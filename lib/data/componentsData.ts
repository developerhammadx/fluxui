export interface ComponentData {
  id: string;
  slug: string;
  name: string;
  category: "UI Component" | "Navigation" | "Project" | "Animation" | "Layout";
  description: string;
  longDescription: string;
  features: string[];
  installation: string;
  reactCode: string;
  cssCode: string;
  likes: number;
  views: number;
  previewType: string;
}

export const componentsData: ComponentData[] = [
  {
    id: "1",
    slug: "glassmorphism-chat-card",
    name: "Glassmorphism Chat Card",
    category: "UI Component",
    description: "Modern glass-effect card with blur and transparency for chat interfaces",
    longDescription: "The Glassmorphism Chat Card is a sleek, modern UI component designed to bring a frosted glass aesthetic to your web applications. Inspired by the latest design trends, this component creates a stunning visual effect using backdrop blur and semi-transparent backgrounds. Perfect for dashboards, portfolios, and modern landing pages that require a sophisticated touch.",
    features: [
      "Backdrop blur effect for authentic glassmorphism",
      "Semi-transparent background with subtle border",
      "Responsive design that works on all screen sizes",
      "Smooth shadow effects for depth perception",
      "Easy to customize colors and opacity levels",
      "Lightweight and performance-optimized code"
    ],
    installation: "npm install framer-motion lucide-react",
    likes: 1234,
    views: 5678,
    previewType: "glassmorphism",
    reactCode: `import { motion } from "framer-motion";
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
}`,
    cssCode: `/* Glassmorphism Card Styles */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 1.5rem;
}`
  },
  {
    id: "2",
    slug: "neon-spinner",
    name: "Neon Spinner",
    category: "Animation",
    description: "Animated loading spinner with neon glow effect",
    longDescription: "A modern, eye-catching loading spinner with dual-ring animation and neon cyan accents. Perfect for loading states, form submissions, and async operations. Features smooth CSS animations with no JavaScript required for the base animation.",
    features: [
      "Dual-ring animation with counter-rotation",
      "Neon cyan accent color",
      "Smooth CSS keyframe animations",
      "Lightweight - no JS required for animation",
      "Customizable size and speed",
      "Accessible with ARIA attributes"
    ],
    installation: "No dependencies required",
    likes: 892,
    views: 3456,
    previewType: "spinner",
    reactCode: `export function NeonSpinner({ size = 64 }: { size?: number }) {
  return (
    <div 
      className="relative"
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    >
      <div 
        className="absolute inset-0 rounded-full border-2 border-[#222] border-t-[#00D9A3] animate-spin"
        style={{ animationDuration: '1s' }}
      />
      <div 
        className="absolute inset-1 rounded-full border-2 border-[#222] border-b-[#00D9A3] animate-spin"
        style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
      />
    </div>
  );
}`,
    cssCode: `/* Neon Spinner Keyframes */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}`
  },
  {
    id: "3",
    slug: "dark-sidebar",
    name: "Dark Sidebar",
    category: "Navigation",
    description: "Collapsible sidebar with navigation menu and active states",
    longDescription: "A professional dark-themed sidebar navigation component with collapsible sections, active state indicators, and smooth transitions. Ideal for dashboards, admin panels, and complex applications requiring organized navigation.",
    features: [
      "Collapsible sections with smooth animations",
      "Active state highlighting",
      "Icon support with Lucide icons",
      "Responsive design with mobile toggle",
      "Dark theme optimized",
      "Keyboard navigation support"
    ],
    installation: "npm install lucide-react",
    likes: 2156,
    views: 8901,
    previewType: "sidebar",
    reactCode: `import { useState } from "react";
import { Layers, Home, Settings, Users } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Layers, label: "Components" },
  { icon: Users, label: "Users" },
  { icon: Settings, label: "Settings" },
];

export function DarkSidebar() {
  const [active, setActive] = useState("Dashboard");
  
  return (
    <div className="w-64 h-full bg-[#0a0a0a] border-r border-[#1a1a1a] p-4">
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
            className={\`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all \${
              active === item.label
                ? "bg-[#00D9A3]/10 text-[#00D9A3]"
                : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
            }\`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}`,
    cssCode: `/* Dark Sidebar Styles */
.sidebar {
  background: #0a0a0a;
  border-right: 1px solid #1a1a1a;
  width: 16rem;
  height: 100%;
}

.sidebar-item {
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.sidebar-item.active {
  background: rgba(0, 217, 163, 0.1);
  color: #00D9A3;
}`
  },
  {
    id: "4",
    slug: "neon-input",
    name: "Neon Input",
    category: "UI Component",
    description: "Modern input field with neon focus state and validation",
    longDescription: "A sleek input component with animated focus states, neon cyan glow on focus, and built-in validation styling. Features placeholder transitions and error state handling for forms.",
    features: [
      "Neon glow on focus",
      "Smooth placeholder transition",
      "Error state styling",
      "Accessible with proper ARIA labels",
      "Customizable colors",
      "Dark theme optimized"
    ],
    installation: "No dependencies required",
    likes: 756,
    views: 2345,
    previewType: "input",
    reactCode: `import { useState } from "react";

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
          className={\`w-full px-4 py-3 rounded-lg bg-[#111] border outline-none transition-all duration-300 text-white placeholder-gray-500 \${
            isFocused 
              ? "border-[#00D9A3] shadow-[0_0_20px_rgba(0,217,163,0.3)]" 
              : "border-[#222] hover:border-[#333]"
          }\`}
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
}`,
    cssCode: `/* Neon Input Styles */
.neon-input {
  background: #111;
  border: 1px solid #222;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: white;
  transition: all 0.3s;
  outline: none;
}

.neon-input:focus {
  border-color: #00D9A3;
  box-shadow: 0 0 20px rgba(0, 217, 163, 0.3);
}`
  },
  {
    id: "5",
    slug: "pricing-card",
    name: "Pricing Card",
    category: "UI Component",
    description: "Elegant pricing card with toggle and feature list",
    longDescription: "A modern pricing card component featuring plan toggle, feature lists with checkmarks, and prominent CTA buttons. Includes popular plan highlighting and responsive design.",
    features: [
      "Plan toggle (Monthly/Yearly)",
      "Feature list with icons",
      "Popular plan highlighting",
      "Responsive grid layout",
      "Hover animations",
      "Price formatting"
    ],
    installation: "npm install lucide-react",
    likes: 1023,
    views: 4567,
    previewType: "pricing",
    reactCode: `import { useState } from "react";
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
          <div className={\`absolute top-1 w-4 h-4 rounded-full bg-[#00D9A3] transition-all \${
            isYearly ? "right-1" : "left-1"
          }\`} />
        </button>
      </div>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">\${price}</span>
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
      
      <button className="w-full py-3 rounded-xl bg-[#00D9A3] text-black font-semibold hover:bg-[#00D9A3]/90 transition-all">
        Get Started
      </button>
    </div>
  );
}`,
    cssCode: `/* Pricing Card Styles */
.pricing-card {
  background: #0a0a0a;
  border: 1px solid #1a1a1a;
  border-radius: 1rem;
  padding: 1.5rem;
}

.toggle-switch {
  width: 3rem;
  height: 1.5rem;
  background: #1a1a1a;
  border-radius: 9999px;
  position: relative;
}

.toggle-knob {
  width: 1rem;
  height: 1rem;
  background: #00D9A3;
  border-radius: 50%;
  position: absolute;
  top: 0.25rem;
  transition: all 0.3s;
}`
  },
  {
    id: "6",
    slug: "ai-chat-agent",
    name: "AI Chat Agent",
    category: "UI Component",
    description: "Interactive AI chat interface with message bubbles",
    longDescription: "A modern AI chat interface component featuring message bubbles, typing indicators, and an input field with send button. Perfect for chatbots, support widgets, and conversational UIs.",
    features: [
      "Message bubble styling",
      "Typing indicator animation",
      "Send button with icon",
      "Scrollable message list",
      "Auto-scroll to latest",
      "Responsive design"
    ],
    installation: "npm install lucide-react",
    likes: 1876,
    views: 6789,
    previewType: "aiagent",
    reactCode: `import { useState } from "react";
import { Send, Bot } from "lucide-react";

export function AIChatAgent() {
  const [message, setMessage] = useState("");
  const [messages] = useState([
    { id: 1, text: "Hello! How can I help you today?", isAI: true }
  ]);

  return (
    <div className="w-full max-w-[320px] h-[400px] flex flex-col bg-[#0a0a0a] rounded-xl border border-[#1a1a1a] overflow-hidden">
      <div className="flex items-center gap-2 p-4 border-b border-[#1a1a1a]">
        <div className="w-8 h-8 rounded-lg bg-[#00D9A3]/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-[#00D9A3]" />
        </div>
        <span className="font-semibold text-white">AI Assistant</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={\`flex \${msg.isAI ? "justify-start" : "justify-end"}\`}
          >
            <div
              className={\`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm \${
                msg.isAI
                  ? "bg-[#1a1a1a] text-gray-300 rounded-tl-sm"
                  : "bg-[#00D9A3] text-black rounded-tr-sm"
              }\`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-[#1a1a1a]">
        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 rounded-lg bg-[#111] border border-[#222] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00D9A3]/50"
          />
          <button className="p-2 rounded-lg bg-[#00D9A3] text-black hover:bg-[#00D9A3]/90 transition-all">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}`,
    cssCode: `/* AI Chat Agent Styles */
.chat-container {
  background: #0a0a0a;
  border: 1px solid #1a1a1a;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  height: 400px;
}

.message-bubble {
  max-width: 80%;
  padding: 0.625rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.message-bubble.ai {
  background: #1a1a1a;
  color: #d1d5db;
  border-top-left-radius: 0.25rem;
}

.message-bubble.user {
  background: #00D9A3;
  color: black;
  border-top-right-radius: 0.25rem;
}`
  }
];

export function getComponentBySlug(slug: string): ComponentData | undefined {
  return componentsData.find((component) => component.slug === slug);
}

export function getAllComponents(): ComponentData[] {
  return componentsData;
}

export function getComponentById(id: string): ComponentData | undefined {
  return componentsData.find((component) => component.id === id);
}

export function getComponentsByCategory(category: string): ComponentData[] {
  return componentsData.filter((component) => component.category === category);
}
