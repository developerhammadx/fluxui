"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  title: string;
  language: string;
  code: string;
  explanation?: string;
}

export function CodeBlock({ title, language, code, explanation }: CodeBlockProps) {
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
      
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
      
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
