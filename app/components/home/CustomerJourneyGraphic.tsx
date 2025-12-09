"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  MessageSquare,
  Shirt,
  Store,
  Repeat,
} from "lucide-react";

export default function CustomerJourneyGraphic() {
  const steps = [
    { icon: Smartphone, label: "Social Ad" },
    { icon: MessageSquare, label: "AI Chat" },
    { icon: Shirt, label: "Curated Looks" },
    { icon: Store, label: "Store Pickup" },
    { icon: Repeat, label: "Loyalty Loop" },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
            The Connected Journey
          </h2>
          <p className="text-slate-600">How STYLA.AI orchestrates every touchpoint.</p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-purple-50 shadow-lg flex items-center justify-center mb-6 group hover:border-purple-200 transition-colors">
                  <step.icon
                    size={32}
                    className="text-purple-600 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-bold text-lg text-slate-800">{step.label}</h4>

                {/* Mobile Connector */}
                <div className="md:hidden h-8 w-0.5 bg-purple-100 mt-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
