// app/chat/page.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import ChatBubble from "@/src/components/ChatBubble";
import ProductInlineCard from "@/src/components/ProductInlineCard";
import { products } from "@/src/lib/products";
import { Sun, Moon } from "lucide-react";

type Message = {
  id: string;
  from: "user" | "bot";
  text?: string;
  productId?: number;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "m1",
      from: "bot",
      text: "Hi! I'm STYLA — your AI shopping assistant. What are you looking for today?",
    },
  ]);
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true); // ensures client-only logic runs after hydration
}, []);

  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement | null>(null);

  // theme
  const [dark, setDark] = useState(false); // always starts same on server + client

useEffect(() => {
  // now it is safe to read localStorage
  try {
    const stored = localStorage.getItem("styla_theme");
    if (stored) {
      setDark(stored === "dark");
    } else {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  } catch {}
}, []);



  useEffect(() => {
    // apply class to root
    if (dark) document.documentElement.classList.add("styla-dark");
    else document.documentElement.classList.remove("styla-dark");
    try {
      localStorage.setItem("styla_theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const pushMessage = (m: Message) => setMessages((p) => [...p, m]);

  // Hardcoded "AI" response logic (same as before, with same behavior)
  const aiRespond = (userText: string) => {
    const text = userText.toLowerCase();

    pushMessage({ id: `b-typing-${Date.now()}`, from: "bot", text: "..." });

    setTimeout(() => {
      setMessages((p) => p.filter((x) => !x.id.startsWith("b-typing-")));

      if (text.includes("white") || text.includes("tops") || text.includes("dress")) {
        const picks = products
          .filter((p) => /shirt|top|dress|casual|hoodie|sneaker|jacket/i.test(p.name + " " + (p.description || "")))
          .slice(0, 3);
        if (picks.length === 0) {
          pushMessage({ id: `b-${Date.now()}`, from: "bot", text: "I couldn't find white tops right now, but here are some trending picks." });
          picks.push(...products.slice(0, 2));
        } else {
          pushMessage({ id: `b-${Date.now()}`, from: "bot", text: "Here are some items you might like:" });
        }
        picks.forEach((p) => pushMessage({ id: `p-${p.id}-${Date.now()}`, from: "bot", productId: p.id }));
        return;
      }

      if (text.includes("available") || text.includes("in store") || text.includes("stock")) {
        pushMessage({ id: `b-${Date.now()}`, from: "bot", text: "Which product do you want me to check availability for? (or tell me the product name)" });
        return;
      }

      if (text.includes("recommend") || text.includes("suggest") || text.includes("party") || text.includes("date")) {
        pushMessage({ id: `b-${Date.now()}`, from: "bot", text: "For a party look, try this bundle:" });
        const bundle = [products[2], products[1]];
        bundle.forEach((p) => pushMessage({ id: `p-${p.id}-${Date.now()}`, from: "bot", productId: p.id }));
        pushMessage({ id: `b-${Date.now()}-cta`, from: "bot", text: "Would you like me to reserve any item for try-on?" });
        return;
      }

      pushMessage({ id: `b-${Date.now()}`, from: "bot", text: "Sorry, I didn't get that. Try: 'Show me white tops' or 'Suggest party wear'." });
    }, 800);
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { id: `u-${Date.now()}`, from: "user", text: input };
    pushMessage(userMsg);
    const txt = input;
    setInput("");
    setTimeout(() => aiRespond(txt), 300);
  };

  return (
    <main className="min-h-screen bg-white styla-dark:bg-[#0b1220] transition-colors">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-900 styla-dark:text-slate-100">STYLA — AI Shopping Assistant</h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark((s) => !s)}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-slate-100 styla-dark:bg-slate-800 border styla-dark:border-slate-700 shadow-sm"
            >
              {!mounted ? null : dark ? (
  <Moon size={18} className="text-slate-100" />
) : (
  <Sun size={18} className="text-slate-900" />
)}

            </button>
          </div>
        </div>

        <div
          ref={boxRef}
          className="h-[60vh] overflow-auto p-4 rounded-2xl border bg-slate-50 styla-dark:bg-[#071025] styla-dark:border-[#112033] transition"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
        >
          {messages.map((m) =>
            m.productId ? (
              <div key={m.id} className="mb-4">
                <ProductInlineCard p={products.find((x) => x.id === m.productId)!} />
              </div>
            ) : (
              <ChatBubble key={m.id} from={m.from}>
                {m.text}
              </ChatBubble>
            )
          )}
        </div>

        <form onSubmit={handleSend} className="mt-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type: 'Show me white tops' or 'Suggest party wear'..."
            className="flex-1 px-4 py-3 rounded-full border focus:outline-none bg-white styla-dark:bg-[#071025] styla-dark:border-[#132335] text-slate-900 styla-dark:text-slate-100"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800"
          >
            Send
          </button>
        </form>

        <div className="text-xs text-slate-500 styla-dark:text-slate-400 mt-3">Tip: Try “Show me white tops” to see product cards inside chat.</div>
      </div>

      {/* small styles for the dark theme variable name used above */}
      <style>{`
        :root.styla-dark, .styla-dark {
          color-scheme: dark;
        }
      `}</style>
    </main>
  );
}
