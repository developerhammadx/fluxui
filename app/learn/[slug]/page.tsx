"use client";

import { useParams, notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getTutorialBySlug, getAllTutorials, Tutorial } from "@/lib/data/tutorials";
import { motion } from "framer-motion";
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Target,
  Lightbulb,
  Zap,
  CheckCircle,
  Copy,
  Check
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function CodeBlock({ 
  title, 
  language, 
  code, 
  explanation 
}: { 
  title: string; 
  language: string; 
  code: string; 
  explanation?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageColor = (lang: string) => {
    switch (lang) {
      case 'tsx': return 'text-blue-400';
      case 'html': return 'text-orange-400';
      case 'css': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="my-8 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a1a1a] bg-[#111]">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-300">{title}</span>
          <span className={`text-xs px-2 py-1 rounded bg-[#1a1a1a] ${getLanguageColor(language)}`}>
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#00D9A3] transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
      
      {/* Explanation */}
      {explanation && (
        <div className="px-4 py-3 border-t border-[#1a1a1a] bg-[#111]/50">
          <p className="text-sm text-gray-400">
            <span className="text-[#00D9A3] font-medium">💡 Tip:</span> {explanation}
          </p>
        </div>
      )}
    </div>
  );
}

function DifficultyBadge({ level }: { level: string }) {
  const colors = {
    Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
    Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors[level as keyof typeof colors]}`}>
      {level}
    </span>
  );
}

export default function TutorialPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  // Get related tutorials
  const relatedTutorials = tutorial.relatedTutorials
    .map(slug => getAllTutorials().find(t => t.slug === slug))
    .filter((t): t is Tutorial => t !== undefined);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000000]">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link 
                href="/#master-code" 
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#00D9A3] transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Tutorials
              </Link>
            </motion.div>

            {/* Title & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm text-[#00D9A3] font-medium">
                  {tutorial.category}
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {tutorial.readTime} read
                </span>
                <DifficultyBadge level={tutorial.difficulty} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {tutorial.title}
              </h1>
              <p className="mt-4 text-xl text-gray-400 leading-relaxed">
                {tutorial.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <div className="prose prose-invert max-w-none">
                {/* Introduction */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-[#00D9A3]" />
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {tutorial.introduction}
                  </p>
                </motion.section>

                {/* Core Concepts */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Target className="h-5 w-5 text-[#00D9A3]" />
                    <h2 className="text-2xl font-bold text-white">Core Concepts</h2>
                  </div>
                  <div className="grid gap-4">
                    {tutorial.coreConcepts.map((concept, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#00D9A3]/30 transition-colors"
                      >
                        <h3 className="font-semibold text-white mb-2">{concept.title}</h3>
                        <p className="text-gray-400 text-sm">{concept.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Code Examples */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Lightbulb className="h-5 w-5 text-[#00D9A3]" />
                    <h2 className="text-2xl font-bold text-white">Code Examples</h2>
                  </div>
                  {tutorial.codeExamples.map((example, index) => (
                    <CodeBlock
                      key={index}
                      title={example.title}
                      language={example.language}
                      code={example.code}
                      explanation={example.explanation}
                    />
                  ))}
                </motion.section>

                {/* Best Practices */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Zap className="h-5 w-5 text-[#00D9A3]" />
                    <h2 className="text-2xl font-bold text-white">Best Practices</h2>
                  </div>
                  <div className="space-y-3">
                    {tutorial.bestPractices.map((practice, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#00D9A3] mt-0.5 shrink-0" />
                        <p className="text-gray-300">{practice}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>

              {/* Sidebar - Table of Contents */}
              <div className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]">
                    <h3 className="font-semibold text-white mb-4">On this page</h3>
                    <nav className="space-y-2">
                      <a href="#" className="block text-sm text-[#00D9A3]">Introduction</a>
                      <a href="#" className="block text-sm text-gray-500 hover:text-gray-300">Core Concepts</a>
                      <a href="#" className="block text-sm text-gray-500 hover:text-gray-300">Code Examples</a>
                      <a href="#" className="block text-sm text-gray-500 hover:text-gray-300">Best Practices</a>
                    </nav>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="mt-6 p-6 rounded-xl border border-[#1a1a1a] bg-gradient-to-br from-[#00D9A3]/5 to-[#1E3A8A]/5">
                    <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Get notified when new tutorials are released.
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg border border-[#1a1a1a] bg-[#111] text-white text-sm focus:border-[#00D9A3] focus:outline-none"
                    />
                    <button className="w-full mt-3 px-4 py-2 rounded-lg bg-[#00D9A3] text-black font-medium text-sm hover:bg-[#00b382] transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tutorials */}
        {relatedTutorials.length > 0 && (
          <section className="border-t border-[#1a1a1a] py-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">Related Tutorials</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedTutorials.map((related) => (
                  <Link
                    key={related.id}
                    href={`/learn/${related.slug}`}
                    className="group p-5 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#00D9A3]/50 transition-all"
                  >
                    <span className="text-xs text-[#00D9A3] font-medium">
                      {related.category}
                    </span>
                    <h3 className="font-semibold text-white mt-2 group-hover:text-[#00D9A3] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {related.description}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {related.readTime}
                      </span>
                      <span>{related.difficulty}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

// Generate static params for all tutorials
export function generateStaticParams() {
  return getAllTutorials().map((tutorial) => ({
    slug: tutorial.slug,
  }));
}
