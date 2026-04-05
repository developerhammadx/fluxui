"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Download, Heart, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { componentsData, getComponentById } from "@/lib/data/componentsData";
import { toast } from "sonner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  GlassmorphismChatCard,
  NeonSpinner,
  DarkSidebar,
  NeonInput,
  PricingCard,
  AIChatAgent,
} from "@/components/ui-components";

// Component mapper for live previews
const LiveComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "glassmorphism":
      return <GlassmorphismChatCard />;
    case "spinner":
      return <NeonSpinner size={80} />;
    case "sidebar":
      return <DarkSidebar />;
    case "input":
      return <NeonInput />;
    case "pricing":
      return <PricingCard />;
    case "aiagent":
      return <AIChatAgent />;
    default:
      return null;
  }
};

export function ComponentDetail() {
  const params = useParams();
  const router = useRouter();
  const [copiedReact, setCopiedReact] = useState(false);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");

  const componentId = params.id as string;
  const component = getComponentById(componentId);

  const relatedComponents = component
    ? componentsData.filter((c) => c.id !== component.id && c.category === component.category).slice(0, 3)
    : [];

  const handleCopyReact = () => {
    if (component?.reactCode) {
      navigator.clipboard.writeText(component.reactCode);
      setCopiedReact(true);
      toast.success("React code copied!");
      setTimeout(() => setCopiedReact(false), 2000);
    }
  };

  const handleCopyCSS = () => {
    if (component?.cssCode) {
      navigator.clipboard.writeText(component.cssCode);
      setCopiedCSS(true);
      toast.success("CSS code copied!");
      setTimeout(() => setCopiedCSS(false), 2000);
    }
  };

  if (!component) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Component Not Found</h1>
          <Link href="/components" className="text-[#00D9A3] hover:underline">
            Back to Components
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 217, 163, 0.08) 0%, rgba(0, 0, 0, 0) 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/components" className="p-2 rounded-xl bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-[#666] text-sm">FluxUI Components</p>
              <h1 className="text-white font-semibold">{component.name}</h1>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-[#0A1F0A] text-[#00D9A3] border border-[#1a3a1a] px-3 py-1">{component.category}</Badge>
            <Badge className="bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] px-3 py-1">React</Badge>
            <Badge className="bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] px-3 py-1">TypeScript</Badge>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">{component.description}</p>
          <div className="mt-6 flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <Eye className="w-4 h-4" />
              <span className="text-white font-semibold">{component.views.toLocaleString()}</span>
              <span>views</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Heart className="w-4 h-4" />
              <span className="text-white font-semibold">{component.likes.toLocaleString()}</span>
              <span>likes</span>
            </div>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-[#1a1a1a] border border-[#2a2a2a] p-1 inline-flex">
            <TabsTrigger value="preview" className="data-[state=active]:bg-[#00D9A3] data-[state=active]:text-black px-6 py-2.5 rounded-lg text-sm font-medium text-gray-400">
              <Eye className="w-4 h-4 mr-2" />Live Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="data-[state=active]:bg-[#00D9A3] data-[state=active]:text-black px-6 py-2.5 rounded-lg text-sm font-medium text-gray-400">
              <Copy className="w-4 h-4 mr-2" />Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-8 min-h-[500px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(45deg, #1a1a1a 25%, transparent 25%), linear-gradient(-45deg, #1a1a1a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a1a1a 75%), linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)`, backgroundSize: "20px 20px" }} />
                  <div className="relative z-10"><LiveComponent type={component.previewType} /></div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleCopyReact} className="gap-2 rounded-xl bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]">
                    {copiedReact ? <><Check className="w-4 h-4 text-[#00D9A3]" />Copied!</> : <><Copy className="w-4 h-4" />Copy React Code</>}
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">About</h3>
                  <p className="text-gray-400 text-sm">{component.longDescription}</p>
                </div>
                <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {component.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400"><span className="text-[#00D9A3]">→</span>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#1a1a1a] px-6 py-4">
                  <span className="text-sm text-gray-400">{component.slug}.tsx</span>
                  <Button onClick={handleCopyReact} size="sm" className={copiedReact ? "bg-[#00D9A3] text-black" : "bg-[#1a1a1a] text-white"}>
                    {copiedReact ? <><Check className="w-4 h-4" />Copied!</> : <><Copy className="w-4 h-4" />Copy</>}
                  </Button>
                </div>
                <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{ margin: 0, padding: "1.5rem", background: "#0a0a0a", fontSize: "13px" }} showLineNumbers>
                  {component.reactCode}
                </SyntaxHighlighter>
              </div>
              <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#1a1a1a] px-6 py-4">
                  <span className="text-sm text-gray-400">{component.slug}.css</span>
                  <Button onClick={handleCopyCSS} size="sm" className={copiedCSS ? "bg-[#00D9A3] text-black" : "bg-[#1a1a1a] text-white"}>
                    {copiedCSS ? <><Check className="w-4 h-4" />Copied!</> : <><Copy className="w-4 h-4" />Copy</>}
                  </Button>
                </div>
                <SyntaxHighlighter language="css" style={vscDarkPlus} customStyle={{ margin: 0, padding: "1.5rem", background: "#0a0a0a", fontSize: "13px" }} showLineNumbers>
                  {component.cssCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
