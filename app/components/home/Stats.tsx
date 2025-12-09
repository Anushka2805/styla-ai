"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      label: "Switch if personalization lacking",
      value: "70%",
      color: "bg-slate-200",
      height: "70%",
    },
    {
      label: "Conversion boost via AI",
      value: "+30%",
      color: "bg-purple-400",
      height: "85%",
    },
    {
      label: "Higher Average Order Value",
      value: "+25%",
      color:
        "bg-gradient-to-t from-[#5B2EFF] to-[#C96EFF]",
      height: "100%",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Data-Driven Retail Success
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience is the new loyalty — and STYLA.AI delivers measurable impact.
          </p>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Real-time inventory synchronization
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Predictive staffing & stocking
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Unified customer profiles
            </li>
          </ul>
        </div>

        {/* Chart Side */}
        <div className="h-[400px] flex items-end justify-center gap-4 md:gap-12 pb-8 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-end items-center h-full w-24 md:w-32"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: stat.height }}
                transition={{ duration: 1 }}
                className={`w-full rounded-t-xl ${stat.color} opacity-90 relative`}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl font-bold">
                  {stat.value}
                </div>
              </motion.div>
              <p className="text-xs md:text-sm text-center mt-4 text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
