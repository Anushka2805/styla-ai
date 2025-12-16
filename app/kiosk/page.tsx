"use client";

import Link from "next/link";

export default function KioskPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* ===== Background Image (Faded) ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521334884684-d80222895322)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ===== MAIN GRID ===== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full max-w-6xl">

        {/* ===== LEFT: CONTENT CARD ===== */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-2xl">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-8 text-black">
            In-Store Kiosk
          </h1>

          {/* Status Card */}
          <div className="bg-purple-100 rounded-xl p-6 text-center mb-10 border border-black/10">
            <p className="text-lg mb-2 text-black">
              Reservation Detected
            </p>
            <p className="text-2xl font-semibold text-black">
              Ready for Try-On
            </p>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="w-full py-4 rounded-xl bg-purple-100 text-black text-lg font-semibold hover:bg-purple-200 transition shadow-md">
              Call Store Staff
            </button>

            <button className="w-full py-4 rounded-xl bg-purple-100 text-black text-lg font-semibold hover:bg-purple-200 transition shadow-md">
              Start Try-On
            </button>
          </div>

          {/* Exit */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-black transition"
            >
              Exit Kiosk
            </Link>
          </div>
        </div>

        {/* ===== RIGHT: IMAGE COLLAGE (LANDING STYLE) ===== */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-[300px] h-[420px]">

            {/* Main image */}
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              className="absolute top-0 left-0 w-[240px] h-[340px] object-cover rounded-3xl shadow-xl"
              alt=""
            />

            {/* Top small image */}
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              className="absolute top-16 left-55 w-[160px] h-[200px] object-cover rounded-2xl shadow-lg"
              alt=""
            />

            {/* Bottom small image */}
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop"
              className="absolute top-60 right-6 w-[180px] h-[250px] object-cover rounded-2xl shadow-lg"
              alt=""
            />
          </div>
        </div>

      </div>
    </main>
  );
}
