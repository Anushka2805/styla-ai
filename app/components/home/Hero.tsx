"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-50">
      {/* Abstract Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[25%] -right-[10%] h-[80%] w-[50%] rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute top-[45%] -left-[10%] h-[60%] w-[40%] rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8 pt-16">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-3 py-1 shadow-sm">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-xs font-semibold uppercase tracking-wide text-purple-900">
              The Future of Retail
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
            One Seamless <br />
            <span className="bg-gradient-to-r from-[#5B2EFF] to-[#C96EFF] bg-clip-text text-transparent">
              Shopping Journey
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-lg text-xl font-light leading-relaxed text-slate-600">
            Experience the fluidity of AI-powered retail — bridging the gap
            between digital discovery and physical luxury stores for a truly
            connected shopping experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-purple-500/20">
              Start the Experience
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-900 transition-all hover:bg-gray-50">
              Watch Video
            </button>
          </div>
        </motion.div>

        {/* Right Section (Image + Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden h-[600px] w-full lg:block"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Fashion Shopping Experience"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Floating Card: Nearby User */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 max-w-xs rounded-xl bg-white/90 p-4 backdrop-blur-md shadow-lg"
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop"
                    alt="User"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Sarah is nearby</p>
                  <p className="flex items-center gap-1 text-xs text-green-600">
                    <span className="h-2 w-2 rounded-full bg-green-500" /> In-store now
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-gray-200" />
                <div className="h-2 w-2/3 rounded-full bg-gray-200" />
              </div>
            </motion.div>

            {/* Floating Card: Suggested Look */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute right-[-20px] top-12 max-w-[200px] rounded-xl bg-white p-4 shadow-xl"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500">MATCH SCORE</span>
                <span className="text-sm font-bold text-purple-600">98%</span>
              </div>

              <div className="mb-2 aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                  alt="Suggested Look"
                />
              </div>

              <p className="text-center text-xs font-medium">Suggested for you</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
