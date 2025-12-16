"use client";

import Link from "next/link";

export default function ReservationPage() {
  return (
    <main className="min-h-screen w-full p-12 flex items-start justify-center">

      {/* ===== MAIN CARD ===== */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">

        {/* ===== Heading ===== */}
        <h1 className="text-2xl font-bold text-black mb-8 flex items-center gap-2">
          Try-On Reserved <span className="text-green-600">✅</span>
        </h1>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ===== LEFT: SUMMARY ===== */}
          <div className="border border-black/10 rounded-xl p-6 bg-white shadow-sm">

            <h2 className="text-lg font-semibold text-black mb-5">
              Reservation Summary
            </h2>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-black">Product</span>
                <span className="text-black font-medium">White Top</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black">Price</span>
                <span className="text-black font-medium">₹79</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black">Store</span>
                <span className="text-black font-medium">Phoenix Mall</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black">Size</span>
                <span className="text-black font-medium">M</span>
              </div>

              <hr className="my-4 border-black/20" />

              <div className="flex justify-between">
                <span className="text-black">Reservation ID</span>
                <span className="text-black font-medium">RES-984321</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black">Valid Till</span>
                <span className="text-black font-medium">Today, 6:30 PM</span>
              </div>

            </div>
          </div>

          {/* ===== RIGHT: IMAGE + QR ===== */}
          <div className="flex flex-col items-center gap-6 bg-white rounded-xl p-5 shadow-sm border border-black/10">

            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="In-store try on"
              className="w-full h-40 object-cover rounded-xl"
            />

            <div className="border border-black/10 rounded-xl p-4 bg-white shadow-sm">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=RES-984321"
                alt="Reservation QR"
                className="w-36 h-36"
              />
            </div>

            <p className="text-sm text-black/80 text-center">
              Show this QR code at the store kiosk
            </p>
          </div>

        </div>

        {/* ===== CTA ===== */}
        <div className="mt-10 bg-white rounded-xl p-2 shadow-sm">
          <Link
            href="/kiosk"
            className="block w-full text-center px-6 py-3 rounded-xl 
                       bg-purple-300 text-black font-semibold
                       hover:bg-purple-400 transition"
          >
            Continue to Kiosk
          </Link>
        </div>

      </div>
    </main>
  );
}
