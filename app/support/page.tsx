"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function SupportPage() {
  const actions = [
    {
      title: "Track Order",
      desc: "Live delivery & pickup updates in real time.",
      icon: "📦",
      color: "from-indigo-500 to-purple-500",
      action: "Track Now",
    },
    {
      title: "Return / Exchange",
      desc: "Easy and hassle-free 7-day return policy.",
      icon: "🔄",
      color: "from-rose-500 to-pink-500",
      action: "Start Return",
    },
    {
      title: "Feedback",
      desc: "Help us improve your future experiences.",
      icon: "💬",
      color: "from-amber-400 to-orange-500",
      action: "Give Feedback",
    },
    {
      title: "Chat with AI",
      desc: "Instant help from STYLA.AI assistant.",
      icon: "🤖",
      color: "from-emerald-400 to-teal-500",
      action: "Chat Now",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Post-Purchase Support
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 max-w-2xl mx-auto"
        >
          We’re here to help you at every step — from tracking your order to
          resolving issues instantly with AI.
        </motion.p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-8">
          {actions.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all p-8 overflow-hidden group"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${a.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}
              >
                {a.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {a.title}
              </h3>

              <p className="text-slate-600 mb-6">{a.desc}</p>

              <button className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition">
                {a.action}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
