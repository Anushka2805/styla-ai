// src/components/ProductInlineCard.tsx
"use client";
import React from "react";
import Link from "next/link";
import type { Product } from "@/src/lib/products";

type Props = {
  p: Product;
};

export default function ProductInlineCard({ p }: Props) {
  return (
    <div className="flex gap-3 items-center p-3 border rounded-xl bg-white styla-dark:bg-[#071025] shadow-sm">
      <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-sm text-slate-900 styla-dark:text-slate-100">{p.name}</h4>
          <span className="text-sm font-bold text-purple-700">{p.price}</span>
        </div>
        <p className="text-xs text-slate-500 styla-dark:text-slate-400 mt-1 line-clamp-2">{p.description}</p>

        <div className="flex gap-2 mt-2">
          <Link
            href={`/products/${p.id}`}
            className="text-xs bg-slate-900 text-white px-3 py-1 rounded-full"
          >
            Details
          </Link>
          <button className="text-xs px-3 py-1 rounded-full border border-slate-200 styla-dark:border-[#223343]">Add</button>
        </div>
      </div>
    </div>
  );
}
