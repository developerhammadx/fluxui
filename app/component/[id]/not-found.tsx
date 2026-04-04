import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
          <Search className="w-10 h-10 text-[#444]" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Component Not Found</h1>
        <p className="text-[#666] text-lg mb-8 max-w-md mx-auto">
          The component you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00D9A3] text-black font-semibold hover:bg-[#00D9A3]/90 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Components
        </Link>
      </div>
    </div>
  );
}
