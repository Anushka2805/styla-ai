"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, CreditCard, Smartphone } from "lucide-react";
import Navbar from "../components/Navbar";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />

      {/* Decorative gradients */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative max-w-4xl mx-auto px-6 pt-36 pb-24"
      >
        {/* Header */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-2"
        >
          Secure Payment
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 mb-12"
        >
          Complete your purchase with confidence
        </motion.p>

        {/* Payment Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 space-y-8"
        >
          {/* Coupon */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Apply Coupon
            </label>
            <input
              placeholder="STYLA50"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Loyalty */}
          <label className="flex items-center gap-3 text-slate-800">
            <input type="checkbox" />
            Use loyalty points (₹50 available)
          </label>

          {/* Payment Methods */}
          <div>
            <p className="text-sm font-medium text-slate-700 mb-4">
              Choose Payment Method
            </p>

            <div className="space-y-3">
              <label className="flex items-center gap-4 p-4 border rounded-2xl cursor-pointer hover:border-purple-400 transition">
                <input type="radio" name="pay" defaultChecked />
                <Smartphone className="text-purple-600" />
                <span className="font-medium text-slate-900">
                  UPI (Recommended)
                </span>
              </label>

              <label className="flex items-center gap-4 p-4 border rounded-2xl cursor-pointer hover:border-purple-400 transition">
                <input type="radio" name="pay" />
                <CreditCard className="text-purple-600" />
                <span className="font-medium text-slate-900">
                  Credit / Debit Card
                </span>
              </label>
            </div>
          </div>

          {/* Summary */}
          <div className="pt-6 border-t space-y-2 text-slate-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹249</span>
            </div>
            <div className="flex justify-between">
              <span>Loyalty Discount</span>
              <span>- ₹50</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-slate-900">
              <span>Total Payable</span>
              <span>₹199</span>
            </div>
          </div>

          {/* Trust */}
          <div className="flex items-center gap-2 text-sm text-slate-600 pt-2">
            <ShieldCheck className="text-green-500" />
            Secured by STYLA.AI payment system
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-12"
        >
          <Link
            href="/order-success"
            className="block text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-full text-lg font-semibold hover:scale-[1.03] transition-transform shadow-lg"
          >
            Pay ₹199 Now
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
