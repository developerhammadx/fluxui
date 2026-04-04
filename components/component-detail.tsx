"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Download, Heart, Share2, Eye, ExternalLink, Code, Layers, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { resources, Resource } from "@/lib/data/resources";
import { toast } from "sonner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";

// Preview Components Mapper - Same as hero.tsx for consistency
const PreviewComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "glassmorphism":
      return (
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl max-w-[200px]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D9A3] to-[#00b382] flex items-center justify-center text-xs text-black font-bold">AI</div>
            <p className="text-white/90 text-sm leading-tight">Hello! Ready to help build stunning UI components today.</p>
          </div>
        </div>
      );
    case "spinner":
      return (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-[#222] border-t-[#00D9A3] animate-spin" />
          <div className="absolute inset-1 rounded-full border-2 border-[#222] border-b-[#00D9A3] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>
      );
    case "input":
      return (
        <div className="w-full max-w-[180px] space-y-3">
          <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-[#111] border border-[#222] text-white text-sm placeholder-[#444]" />
          <button className="w-full py-2 rounded-md bg-[#00D9A3] text-black text-sm font-medium">Subscribe</button>
        </div>
      );
    case "sidebar":
      return (
        <div className="w-full max-w-[160px] h-full flex flex-col p-3 bg-[#0a0a0a] rounded-lg border border-[#1a1a1a]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-[#00D9A3] flex items-center justify-center">
              <Layers className="w-4 h-4 text-black" />
            </div>
            <span className="text-white text-xs font-semibold">FluxUI</span>
          </div>
          <div className="space-y-1">
            {['Dashboard', 'Components', 'Projects'].map((item, i) => (
              <div key={item} className={`px-2 py-1 rounded text-xs ${i === 0 ? 'bg-[#00D9A3]/10 text-[#00D9A3]' : 'text-[#666]'}`}>{item}</div>
            ))}
          </div>
        </div>
      );
    case "pricing":
      return (
        <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] w-full max-w-[160px]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#888] text-xs">Pro</span>
            <div className="w-8 h-4 rounded-full bg-[#1a1a1a] relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-[#00D9A3]" />
            </div>
          </div>
          <p className="text-white text-2xl font-bold">$29<span className="text-[#666] text-xs">/mo</span></p>
        </div>
      );
    case "aiagent":
      return (
        <div className="w-full max-w-[180px] h-full flex flex-col p-3 bg-[#0a0a0a] rounded-lg border border-[#1a1a1a]">
          <div className="flex-1 space-y-2 overflow-hidden">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#00D9A3]/20" />
              <div className="bg-[#1a1a1a] rounded-lg px-2 py-1 max-w-[100px]">
                <p className="text-[#888] text-xs">How can I help?</p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <input className="flex-1 px-2 py-1.5 rounded bg-[#111] border border-[#222] text-white text-xs" placeholder="Ask..." />
            <button className="p-1.5 rounded bg-[#00D9A3]"><Zap className="w-4 h-4 text-black" /></button>
          </div>
        </div>
      );
    case "buttons":
      return (
        <div className="flex flex-col gap-3 items-center">
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#00D9A3] to-[#00b382] text-black text-sm font-medium">Get Started</button>
          <button className="px-6 py-2 rounded-lg border border-[#333] text-white text-sm">Learn More</button>
        </div>
      );
    case "datatable":
      return (
        <div className="w-full max-w-[180px]">
          <div className="flex gap-2 mb-2">
            <div className="h-5 w-20 rounded bg-[#1a1a1a]" />
            <div className="h-5 w-16 rounded bg-[#1a1a1a]" />
            <div className="h-5 w-12 rounded bg-[#1a1a1a]" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2 py-1 border-b border-[#1a1a1a]/50">
              <div className="h-4 w-20 rounded bg-[#222]" />
              <div className="h-4 w-16 rounded bg-[#222]" />
              <div className="h-4 w-12 rounded bg-[#222]/50" />
            </div>
          ))}
        </div>
      );
    case "modal":
      return (
        <div className="relative p-5 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] w-full max-w-[160px]">
          <button className="absolute top-2 right-2 text-[#666]"><X className="w-4 h-4" /></button>
          <h4 className="text-white text-sm font-medium mb-1">Confirm Action</h4>
          <p className="text-[#666] text-xs mb-3">Are you sure?</p>
          <div className="flex gap-2">
            <button className="flex-1 py-1.5 rounded bg-[#00D9A3] text-black text-xs font-medium">Yes</button>
            <button className="flex-1 py-1.5 rounded border border-[#333] text-[#888] text-xs">No</button>
          </div>
        </div>
      );
    case "toast":
      return (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D9A3]/10 border border-[#00D9A3]/20">
            <div className="w-4 h-4 rounded-full bg-[#00D9A3]" />
            <span className="text-[#00D9A3] text-xs">Success message</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-red-400 text-xs">Error occurred</span>
          </div>
        </div>
      );
    case "avatars":
      return (
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#222] to-[#333] border-2 border-[#0a0a0a] flex items-center justify-center">
              <span className="text-[#666] text-xs">{String.fromCharCode(64 + i)}</span>
            </div>
          ))}
          <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#0a0a0a] flex items-center justify-center">
            <span className="text-[#888] text-xs">+5</span>
          </div>
        </div>
      );
    case "progress":
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#00D9A3] flex items-center justify-center"><span className="text-black text-xs font-bold">1</span></div>
          <div className="w-6 h-0.5 bg-[#00D9A3]" />
          <div className="w-8 h-8 rounded-full bg-[#00D9A3] flex items-center justify-center"><span className="text-black text-xs font-bold">2</span></div>
          <div className="w-6 h-0.5 bg-[#1a1a1a]" />
          <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center"><span className="text-[#666] text-xs">3</span></div>
        </div>
      );
    default:
      return null;
  }
};

// Interactive Counter Hook
const useCounter = (target: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);
  
  return count;
};

// Map resource slug to preview type
const getPreviewTypeFromSlug = (slug: string): string => {
  const mappings: Record<string, string> = {
    "glassmorphism-card": "glassmorphism",
    "animated-navbar": "sidebar",
    "dashboard-layout": "sidebar",
    "login-modal": "modal",
    "e-commerce-template": "buttons",
    "pricing-table": "pricing",
  };
  return mappings[slug] || "glassmorphism";
};

// Interactive Stage Component - 60% width with centered live component
const InteractiveStage = ({ resource }: { resource: Resource }) => {
  const previewType = getPreviewTypeFromSlug(resource.slug);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-[60%] min-h-[500px] rounded-2xl border border-[#1a1a1a] flex items-center justify-center p-8 relative overflow-hidden bg-black"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #1a1a1a 25%, transparent 25%),
          linear-gradient(-45deg, #1a1a1a 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
          linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
      }}
    >
      {/* Forest Green Radial Glow Behind Component */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10, 31, 10, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Live Component Render with Hover Effects */}
      <motion.div 
        className="relative z-10"
        whileHover={{ 
          scale: 1.05,
          y: -8,
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Glow effect behind component */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(10, 31, 10, 0.8) 0%, rgba(0, 217, 163, 0.3) 40%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'scale(1.5)',
          }}
        />
        {/* Asymmetric shadow */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 hover:opacity-60 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: '0 20px 40px -10px rgba(10, 10, 10, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.5)',
            transform: 'translateY(10px) scale(0.95)',
          }}
        />
        <div className="relative">
          <PreviewComponent type={previewType} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export function ComponentDetail() {
  const params = useParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");

  const resourceId = params.id as string;
  const resource = resources.find(r => r.id === resourceId);
  
  // Interactive counters
  const viewCount = useCounter(resource?.downloads || 0, 1500);
  const downloadCount = useCounter(Math.floor((resource?.downloads || 0) * 0.4), 1200);
  const likeCount = useCounter(resource?.likes || 0, 1000);
  
  // Get related resources
  const relatedResources = resource 
    ? resources.filter(r => r.id !== resource.id && r.category === resource.category).slice(0, 3)
    : [];

  const handleCopy = () => {
    if (resource?.code) {
      navigator.clipboard.writeText(resource.code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!resource) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Forest Green Radial Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(10, 31, 10, 0.3) 0%, rgba(0, 0, 0, 0) 60%)',
            filter: 'blur(60px)'
          }}
        />
      </div>

      {/* Sticky Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()}
              className="p-2 rounded-xl bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="hidden sm:block">
              <p className="text-[#666] text-sm">FluxUI Components</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2.5 rounded-xl border transition-all ${
                liked ? "bg-red-500/10 border-red-500/50 text-red-500" : "bg-[#1a1a1a] border-[#2a2a2a] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
            </button>
            <Button className="bg-[#00D9A3] text-black hover:bg-[#00D9A3]/90 rounded-xl px-6">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Component Header with Title and Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {resource.title}
          </h1>
          
          {/* Monochromatic Green Tags Below Title */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className="bg-[#0A1F0A] text-[#4ade80] border border-[#1a3a1a] px-3 py-1">
              {resource.category}
            </Badge>
            <Badge className="bg-[#0A1F0A] text-[#4ade80] border border-[#1a3a1a] px-3 py-1">
              React
            </Badge>
            <Badge className="bg-[#0A1F0A] text-[#4ade80] border border-[#1a3a1a] px-3 py-1">
              Tailwind
            </Badge>
            <Badge className="bg-[#0A1F0A] text-[#4ade80] border border-[#1a3a1a] px-3 py-1">
              TypeScript
            </Badge>
          </div>
          
          <p className="text-lg text-[#888] max-w-3xl">
            {resource.description}
          </p>
          
          {/* Interactive Metrics */}
          <div className="mt-6 flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-[#666]">
              <Eye className="w-4 h-4" />
              <span className="text-white font-semibold">{viewCount.toLocaleString()}</span>
              <span>views</span>
            </div>
            <div className="flex items-center gap-2 text-[#666]">
              <Download className="w-4 h-4" />
              <span className="text-white font-semibold">{downloadCount.toLocaleString()}</span>
              <span>downloads</span>
            </div>
            <div className="flex items-center gap-2 text-[#666]">
              <Heart className="w-4 h-4" />
              <span className="text-white font-semibold">{likeCount.toLocaleString()}</span>
              <span>likes</span>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-[#1a1a1a] border border-[#2a2a2a] p-1 inline-flex">
              <TabsTrigger 
                value="preview" 
                className="data-[state=active]:bg-white data-[state=active]:text-black px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </TabsTrigger>
              <TabsTrigger 
                value="code" 
                className="data-[state=active]:bg-white data-[state=active]:text-black px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
              >
                <Code className="w-4 h-4 mr-2" />
                Code
              </TabsTrigger>
            </TabsList>

            {/* Preview Tab - Asymmetric Layout */}
            <TabsContent value="preview" className="mt-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Interactive Stage - 60% */}
                <InteractiveStage resource={resource} />
                
                {/* Sidebar Documentation - 40% */}
                <div className="w-full lg:w-[40%] space-y-6">
                  {resource.longDescription ? (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm p-6"
                      >
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00D9A3]" />
                          Overview
                        </h3>
                        <p className="text-[#888] leading-relaxed">
                          {resource.longDescription.overview}
                        </p>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm p-6"
                      >
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00D9A3]" />
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {resource.longDescription.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-[#888]">
                              <span className="text-[#00D9A3] mt-0.5">→</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm p-6"
                      >
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00D9A3]" />
                          How to Use
                        </h3>
                        <p className="text-[#888] leading-relaxed">
                          {resource.longDescription.howToUse}
                        </p>
                      </motion.div>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm p-6">
                      <p className="text-[#888]">{resource.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Code Tab - Full Width Bottom */}
            <TabsContent value="code" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-[#1a1a1a] px-6 py-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#666]">{resource.slug}.tsx</span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-[#1a1a1a] text-[#888] text-xs">JSX</span>
                      <span className="px-2 py-1 rounded bg-[#1a1a1a] text-[#888] text-xs">Tailwind</span>
                      <span className="px-2 py-1 rounded bg-[#1a1a1a] text-[#888] text-xs">CSS</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleCopy}
                    className={`gap-2 rounded-xl transition-all ${
                      copied 
                        ? "bg-[#00D9A3] text-black" 
                        : "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </div>
                <div className="max-h-[600px] overflow-auto">
                  <SyntaxHighlighter
                    language="tsx"
                    style={synthwave84}
                    customStyle={{
                      margin: 0,
                      padding: '2rem',
                      background: '#0a0a0a',
                      fontSize: '14px',
                      lineHeight: '1.6',
                    }}
                    showLineNumbers
                    lineNumberStyle={{
                      color: '#444',
                      paddingRight: '1rem',
                    }}
                  >
                    {resource.code || "// No code available"}
                  </SyntaxHighlighter>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Related Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 mb-24"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Related Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedResources.length > 0 ? (
              relatedResources.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-5 transition-all hover:border-[#2a2a2a]"
                  onClick={() => router.push(`/component/${related.id}`)}
                >
                  <div 
                    className="aspect-video rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: '#0d0d0d',
                      backgroundImage: `
                        linear-gradient(45deg, #111 25%, transparent 25%),
                        linear-gradient(-45deg, #111 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, #111 75%),
                        linear-gradient(-45deg, transparent 75%, #111 75%)
                      `,
                      backgroundSize: '16px 16px',
                      backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px'
                    }}
                  >
                    <ExternalLink className="w-8 h-8 text-[#444]" />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-[#00D9A3] transition-colors">{related.title}</h3>
                  <p className="text-sm text-[#666] mt-1">{related.category}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-[#666]">No related components found.</p>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
