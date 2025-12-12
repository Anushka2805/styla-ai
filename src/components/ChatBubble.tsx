// src/components/ChatBubble.tsx
"use client";
import React from "react";

type Props = {
  from: "user" | "bot";
  children: React.ReactNode;
};

export default function ChatBubble({ from, children }: Props) {
  const isUser = from === "user";
  // user bubble: rich dark glossy
  // bot bubble: light with glossy border
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[82%] px-4 py-3 rounded-2xl shadow-md ${isUser ? "bg-gradient-to-r from-[#3b0760] to-[#7b2bde] text-white ring-1 ring-white/10" : "bg-white styla-dark:bg-[#0f1724] styla-dark:text-slate-100 text-slate-900 ring-1 ring-slate-100/60"}`
        }
        style={{
          backdropFilter: !isUser ? "saturate(120%) blur(4px)" : "",
        }}
      >
        {children}
      </div>
    </div>
  );
}
