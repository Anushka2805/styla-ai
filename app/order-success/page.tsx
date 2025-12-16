"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, MapPin, Package } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />

      {/* Decorative gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative max-w-3xl mx-auto px-6 pt-36 pb-24 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl scale-150" />
          <CheckCircle size={96} className="relative text-green-500 mx-auto" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mt-6"
        >
          Order Confirmed 🎉
        </motion.h1>

        {/* Order ID */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-slate-600 mt-3"
        >
          Order ID{" "}
          <span className="font-semibold text-slate-800">#STY12345</span>
        </motion.p>

        {/* Order Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-10 bg-white border border-slate-200 rounded-3xl shadow-lg p-8 text-left"
        >
          <div className="space-y-4 text-slate-700">
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-500" />
              <span>
                Pickup Location:{" "}
                <strong className="text-slate-900">
                  DLF Mall, Delhi
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Package className="text-purple-500" />
              <span>
                Reserved Item:{" "}
                <strong className="text-slate-900">
                  Luxury Handbag
                </strong>
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t text-sm text-slate-600">
            You’ll receive a notification when your item is ready for pickup.
          </div>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-10"
        >
          <p className="font-medium text-slate-800 mb-3">
            Rate your experience
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={28}
                className="cursor-pointer text-yellow-400 hover:scale-110 transition-transform"
                fill="currentColor"
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/support"
            className="px-10 py-4 bg-slate-900 text-white rounded-full text-lg hover:bg-slate-800 hover:scale-[1.02] transition"
          >
            Track Order
          </Link>

          <Link
            href="/products"
            className="px-10 py-4 bg-white border border-slate-300 text-slate-900 rounded-full text-lg hover:bg-slate-50 hover:scale-[1.02] transition"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
