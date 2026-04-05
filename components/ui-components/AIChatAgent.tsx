"use client";

import { useState } from "react";
import { Send, Bot } from "lucide-react";

export function AIChatAgent() {
  const [message, setMessage] = useState("");
  const [messages] = useState([
    { id: 1, text: "Hello! How can I help you today?", isAI: true }
  ]);

  return (
    <div className="w-full max-w-[320px] h-[320px] flex flex-col bg-[#0a0a0a] rounded-xl border border-[#1a1a1a] overflow-hidden">
      <div className="flex items-center gap-2 p-4 border-b border-[#1a1a1a]">
        <div className="w-8 h-8 rounded-lg bg-[#00D9A3]/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-[#00D9A3]" />
        </div>
        <span className="font-semibold text-white text-sm">AI Assistant</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isAI ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                msg.isAI
                  ? "bg-[#1a1a1a] text-gray-300 rounded-tl-sm"
                  : "bg-[#00D9A3] text-black rounded-tr-sm"
              }`}
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
          <button className="p-2 rounded-lg bg-[#00D9A3] text-black hover:bg-[#00D9A3]/90 transition-all active:scale-[0.98]">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
