// src/components/ProductCard.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Product } from "@/src/lib/products";

type Props = {
  product: Product;
  className?: string;
};

export default function ProductCard({ product, className = "" }: Props) {
  return (
    <article
      className={`rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group ${className}`}
    >
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-purple-300 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          ★ {product.rating}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="text-purple-700 text-lg font-bold mt-1">{product.price}</p>

        <div className="flex items-center gap-2 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(product.rating) ? "fill-amber-400" : ""}
            />
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 py-2 rounded-full bg-slate-900 text-white text-sm font-medium text-center hover:bg-slate-800 transition"
          >
            View Details
          </Link>
          <button className="flex-1 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium hover:bg-purple-200 transition">
            Ask AI
          </button>
        </div>
      </div>
    </article>
  );
}
