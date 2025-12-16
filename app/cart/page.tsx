"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CartPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#faf9ff] via-white to-[#f5f3ff]">
      <Navbar />

      {/* Decorative gradients */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[120px]" />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative max-w-5xl mx-auto px-6 pt-36 pb-24"
      >
        {/* Header */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-2"
        >
          Your Cart
        </motion.h1>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 mb-14"
        >
          Almost there — review your items before checkout
        </motion.p>

        {/* Cart Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl p-8 space-y-10"
        >
          {/* Product */}
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-48 h-56 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80&auto=format&fit=crop"
                alt="Luxury Handbag"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-slate-900">
                Luxury Handbag
              </h3>
              <p className="text-slate-600 mt-2">
                Premium leather · Reserved in-store
              </p>

              <p className="text-slate-700 mt-3">Quantity: 1</p>

              <button className="mt-4 text-red-500 text-sm hover:underline">
                Remove item
              </button>
            </div>

            {/* Price */}
            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.35 }}
              className="text-3xl font-bold text-slate-900"
            >
              ₹249
            </motion.p>
          </div>

          {/* Summary */}
          <div className="border-t pt-6 space-y-3 text-slate-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹249</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-slate-900">
              <span>Total</span>
              <span>₹249</span>
            </div>
          </div>

          {/* Trust */}
          <div className="flex items-center gap-2 text-sm text-slate-600 pt-2">
            <ShieldCheck className="text-green-500" />
            Secure checkout powered by <strong>STYLA.AI</strong>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-16"
        >
          <Link
            href="/payment"
            className="block text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white py-4 rounded-full text-lg font-semibold hover:scale-[1.04] transition-transform shadow-xl"
          >
            Proceed to Secure Checkout
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
