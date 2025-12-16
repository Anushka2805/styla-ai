"use client";

import { inventory } from "@/src/lib/inventory";
import Link from "next/link";

const statusMap: Record<string, string> = {
  available: "🟢",
  low: "🟡",
  out: "❌",
};

export default function AvailabilityPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12">

      {/* ===== LANDING STYLE BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f4f1ff] via-[#eef2ff] to-white" />

      {/* Soft blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-purple-300 rounded-full blur-3xl opacity-25 -z-10" />
      <div className="absolute bottom-[-180px] right-[10%] w-[460px] h-[460px] bg-indigo-300 rounded-full blur-3xl opacity-20 -z-10" />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ===== HEADER ===== */}
        <h1 className="text-3xl font-bold text-black mb-10 text-center">
          Store Availability
        </h1>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* ===== LEFT: TABLE + LEGEND ===== */}
          <div className="lg:col-span-2">

            {/* Legend */}
            <div className="mb-5 flex gap-6 text-sm text-black items-center justify-center bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl w-fit shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">🟢</span> Available
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🟡</span> Low Stock
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">❌</span> Out of Stock
              </div>
            </div>

            {/* Table */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden">
              <table className="w-full border border-gray-200">
                <thead className="bg-purple-50 border-b border-gray-300">
                  <tr>
                    <th className="p-4 text-left text-black font-semibold">
                      Store
                    </th>
                    <th className="p-4 text-black font-semibold">S</th>
                    <th className="p-4 text-black font-semibold">M</th>
                    <th className="p-4 text-black font-semibold">L</th>
                  </tr>
                </thead>

                <tbody>
                  {inventory.map((row) => (
                    <tr
                      key={row.store}
                      className="border-t border-gray-200 bg-white hover:bg-purple-50/40 transition"
                    >
                      <td className="p-4 font-semibold text-black">
                        {row.store}
                      </td>
                      <td className="p-4 text-center text-xl">
                        {statusMap[row.S]}
                      </td>
                      <td className="p-4 text-center text-xl">
                        {statusMap[row.M]}
                      </td>
                      <td className="p-4 text-center text-xl">
                        {statusMap[row.L]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/reserve"
                className="inline-block px-10 py-3 rounded-full bg-purple-100 text-black font-medium hover:bg-purple-200 transition shadow-md"
              >
                Reserve Try-On
              </Link>
            </div>
          </div>

          {/* ===== RIGHT: LANDING STYLE IMAGE CARD ===== */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">

              {/* Image card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl w-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
                  alt="Fashion store"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating badge (landing style) */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-black">
                  In-store availability
                </p>
                <p className="text-xs text-slate-600">
                  Updated in real-time
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
