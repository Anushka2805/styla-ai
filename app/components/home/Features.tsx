"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  ShoppingCart,
  MonitorSmartphone,
  Gift,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: UserCheck,
      title: "Personalized Shopping",
      desc: "AI analyzes preferences to suggest curated outfits in real-time.",
    },
    {
      icon: ShoppingCart,
      title: "Universal Cart",
      desc: "Start a cart on mobile, add items in-store, and checkout anywhere.",
    },
    {
      icon: MonitorSmartphone,
      title: "In-Store Kiosk",
      desc: "Interactive displays that bridge physical inventory with digital catalogs.",
    },
    {
      icon: Gift,
      title: "Loyalty Rewards",
      desc: "Earn points across channels and redeem exclusive perks seamlessly.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">Intelligent Commerce Features</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Empower your retail ecosystem with tools designed for the modern luxury consumer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#5B2EFF] group-hover:to-[#C96EFF] group-hover:text-white transition-all duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-violet-800">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
