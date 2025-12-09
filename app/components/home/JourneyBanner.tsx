"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Store, Monitor } from "lucide-react";

export default function JourneyBanner() {
  const steps = [
    {
      icon: Smartphone,
      title: "Discovery",
      desc: "Browse AI-curated looks on mobile",
      image:
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: Store,
      title: "Experience",
      desc: "Walk in, items are ready in the fitting room",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: Monitor,
      title: "Endless Aisle",
      desc: "Order out-of-stock sizes via kiosk",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            From Screen to Store
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A unified commerce experience that follows your customer wherever
            they go.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-purple-600">
                    <step.icon size={20} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-2 text-black">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
