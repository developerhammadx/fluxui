"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Copy, Check, Download, Heart, Share2, Eye, ExternalLink, FileCode2, Code2, Palette, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resources } from "@/lib/data/resources";
import type { Resource } from "@/lib/data/resources";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Toaster, toast } from "sonner";

interface ResourceDetailProps {
  resource: Resource;
}

const reactCode = `import { motion } from "framer-motion";

export function Component() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-6"
    >
      <h3 className="text-lg font-semibold text-white">Component</h3>
      <p className="mt-2 text-[#888]">
        Beautiful UI component for your projects.
      </p>
    </motion.div>
  );
}`;

const tailwindCode = `<div class="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-6">
  <h3 class="text-lg font-semibold text-white">Component</h3>
  <p class="mt-2 text-[#888]">
    Beautiful UI component for your projects.
  </p>
</div>`;

const cssCode = `.component {
  border-radius: 1rem;
  border: 1px solid #1a1a1a;
  background-color: #0a0a0a;
  padding: 1.5rem;
}

.component h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
}

.component p {
  margin-top: 0.5rem;
  color: #888888;
}`;

export function ResourceDetail({ resource }: ResourceDetailProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const [codeTab, setCodeTab] = useState("react");
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [resource.slug]);

  const getCodeForTab = () => {
    switch (codeTab) {
      case "react": return reactCode;
      case "tailwind": return tailwindCode;
      case "css": return cssCode;
      default: return reactCode;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeForTab());
    setCopied(true);
    toast.success(`${codeTab.toUpperCase()} code copied!`, {
      icon: <Check className="h-4 w-4 text-[#00D9A3]" />,
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resource.downloadUrl;
    link.download = `${resource.title.toLowerCase().replace(/\s+/g, "-")}.zip`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRelatedResourceClick = (slug: string) => {
    router.push(`/resources/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const relatedResources = resources
    .filter(r => r.category === resource.category && r.id !== resource.id)
    .slice(0, 3);

  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            color: '#fff',
          },
        }}
      />
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-[#888] transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-[#1a1a1a] bg-[#111] hover:bg-[#1a1a1a] hover:border-[#333]"
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-[#00D9A3] text-[#00D9A3]" : ""}`} />
                {liked ? resource.likes + 1 : resource.likes}
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-[#1a1a1a] bg-[#111] hover:bg-[#1a1a1a]">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </motion.div>

          {/* Resource Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-[#00D9A3]/10 text-[#00D9A3] border-[#00D9A3]/20">{resource.category}</Badge>
              <Badge variant="secondary" className="bg-[#111] text-[#888] border-[#222]">React</Badge>
              <Badge variant="secondary" className="bg-[#111] text-[#888] border-[#222]">TypeScript</Badge>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {resource.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-[#888]">
              {resource.description}
            </p>
          </motion.div>

          {/* Preview & Code Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-[#111] border border-[#1a1a1a] p-1 rounded-xl">
                <TabsTrigger 
                  value="preview" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black rounded-lg px-6"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </TabsTrigger>
                <TabsTrigger 
                  value="code"
                  className="data-[state=active]:bg-white data-[state=active]:text-black rounded-lg px-6"
                >
                  <Code2 className="h-4 w-4 mr-2" />
                  Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-6">
                {/* Checkered Preview Background - Uiverse Style */}
                <div 
                  className="relative w-full h-[500px] rounded-2xl border border-[#1a1a1a] overflow-hidden"
                  style={{
                    backgroundColor: '#111',
                    backgroundImage: `
                      linear-gradient(45deg, #161616 25%, transparent 25%),
                      linear-gradient(-45deg, #161616 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, #161616 75%),
                      linear-gradient(-45deg, transparent 75%, #161616 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      width={600}
                      height={400}
                      className="object-contain rounded-xl shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-6">
                {/* Code Language Tabs */}
                <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden">
                  {/* Code Header with Language Tabs */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-[#1a1a1a]">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setCodeTab("react")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          codeTab === "react" 
                            ? "bg-[#00D9A3] text-black" 
                            : "text-[#888] hover:text-white hover:bg-[#1a1a1a]"
                        }`}
                      >
                        <Braces className="h-4 w-4" />
                        React
                      </button>
                      <button
                        onClick={() => setCodeTab("tailwind")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          codeTab === "tailwind" 
                            ? "bg-[#00D9A3] text-black" 
                            : "text-[#888] hover:text-white hover:bg-[#1a1a1a]"
                        }`}
                      >
                        <Palette className="h-4 w-4" />
                        Tailwind
                      </button>
                      <button
                        onClick={() => setCodeTab("css")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          codeTab === "css" 
                            ? "bg-[#00D9A3] text-black" 
                            : "text-[#888] hover:text-white hover:bg-[#1a1a1a]"
                        }`}
                      >
                        <FileCode2 className="h-4 w-4" />
                        CSS
                      </button>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-2 hover:bg-[#1a1a1a] text-[#888]"
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-[#00D9A3]" />
                          <span className="text-[#00D9A3]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {/* Code Block */}
                  <div className="relative">
                    <SyntaxHighlighter
                      language={codeTab === "react" ? "tsx" : codeTab === "css" ? "css" : "html"}
                      style={vscDarkPlus}
                      showLineNumbers
                      lineNumberStyle={{
                        minWidth: '2.5em',
                        paddingRight: '1em',
                        color: '#4a4a4a',
                        textAlign: 'right',
                      }}
                      customStyle={{
                        margin: 0,
                        padding: '2rem',
                        background: '#0a0a0a',
                        fontSize: '14px',
                        lineHeight: '1.8',
                        borderRadius: 0,
                        maxHeight: '500px',
                      }}
                    >
                      {getCodeForTab()}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* SEO Description Section */}
          {resource.longDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-12"
            >
              <div className="rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-6">
                  About This <span className="text-[#00D9A3]">Component</span>
                </h2>
                
                {/* Overview */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#00D9A3] uppercase tracking-wide mb-2">
                    Overview
                  </h3>
                  <p className="text-[#888] leading-relaxed">
                    {resource.longDescription.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#00D9A3] uppercase tracking-wide mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {resource.longDescription.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#888]">
                        <span className="text-[#00D9A3] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Use */}
                <div>
                  <h3 className="text-sm font-semibold text-[#00D9A3] uppercase tracking-wide mb-2">
                    How to Use
                  </h3>
                  <p className="text-[#888] leading-relaxed">
                    {resource.longDescription.howToUse}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <Button 
              onClick={handleDownload}
              className="w-full sm:w-auto gap-2 rounded-xl bg-[#00D9A3] py-6 px-8 text-base font-semibold text-black hover:bg-[#00D9A3]/90 shadow-[0_0_30px_rgba(0,217,163,0.3)]"
            >
              <Download className="h-5 w-5" />
              Download Resource
            </Button>
          </motion.div>

          {/* Related Resources */}
          {relatedResources.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-16 border-t border-[#1a1a1a]"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Related <span className="text-[#00D9A3]">Resources</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedResources.map((related) => (
                  <motion.div
                    key={related.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="cursor-pointer group bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden p-4 transition-colors hover:border-[#333]"
                    onClick={() => handleRelatedResourceClick(related.slug)}
                  >
                    {/* Checkered Preview */}
                    <div 
                      className="h-40 w-full rounded-xl flex items-center justify-center mb-4 overflow-hidden relative"
                      style={{
                        backgroundColor: '#111',
                        backgroundImage: `
                          linear-gradient(45deg, #161616 25%, transparent 25%),
                          linear-gradient(-45deg, #161616 25%, transparent 25%),
                          linear-gradient(45deg, transparent 75%, #161616 75%),
                          linear-gradient(-45deg, transparent 75%, #161616 75%)
                        `,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                      }}
                    >
                      <Image
                        src={related.image}
                        alt={related.title}
                        width={200}
                        height={120}
                        className="object-contain z-10"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" /> View
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-[#00D9A3] font-medium">{related.category}</span>
                    <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-[#00D9A3] transition-colors">
                      {related.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
