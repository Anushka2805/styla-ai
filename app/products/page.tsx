"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ProductsPage() {
  const [activeSort, setActiveSort] = useState("Relevance");

  const sortOptions = [
    "Relevance",
    "Price: Low to High",
    "Price: High to Low",
    "Rating",
  ];

  const products = [
    {
      id: 2,
      name: "Mens Urban Jacket",
      price: "₹129",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Luxury Handbag",
      price: "₹249",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Minimal Sneakers",
      price: "₹99",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Oversized Hoodie",
      price: "₹79",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Denim Streetwear Jacket",
      price: "₹139",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Casual Shirt",
      price: "₹69",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white pb-28">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-26">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center tracking-tight mb-10">
          Explore Our Collection
        </h1>

        {/* Sort Tabs & Filters */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-12">
          <div className="flex gap-3 flex-wrap">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveSort(option)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border 
                  ${
                    activeSort === option
                      ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-700/10"
                      : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 text-sm">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:border-purple-100 transition-all duration-500 shadow-sm group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden rounded-b-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-purple-300 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  ★ {product.rating}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="text-purple-600 text-xl font-bold">
                  {product.price}
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(product.rating)
                          ? "fill-amber-400"
                          : ""
                      }
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-3">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 py-2 rounded-full bg-slate-900 text-white text-sm font-medium text-center hover:bg-slate-800 transition shadow-sm shadow-slate-700/10"
                  >
                    View Details
                  </Link>

                  <button className="flex-1 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium flex items-center justify-center gap-2 hover:bg-purple-200 transition shadow-sm shadow-purple-300/30">
                    <Sparkles size={16} />
                    Ask AI
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
