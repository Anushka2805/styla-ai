// app/products/[id]/page.tsx
import { products as data } from "@/src/lib/products";
import ProductCard from "@/src/components/ProductCard";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;
  const productId = Number(id);

  const product = data.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Product not found</h2>
          <Link href="/products" className="text-purple-600 underline mt-4 block">
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const similar = data.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Large two-column layout: left image occupies visual half */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: full-height image block (visually covers left half) */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden border bg-gray-50">
              {/* Use a tall container so image visually fills left half */}
              <div className="h-[72vh] lg:h-[88vh] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* color swatches (subtle) */}
            <div className="mt-4 flex gap-3">
              {product.colors?.slice(0, 6).map((c) => (
                <div
                  key={c}
                  className="w-12 h-12 border rounded-md flex items-center justify-center text-xs text-slate-700 bg-white"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: product meta */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-purple-700 text-2xl font-bold mt-4">{product.price}</p>

            <div className="mt-6 text-base text-slate-700">{product.description}</div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-slate-800">Select Size</h4>

              <div className="flex gap-3">
                {product.sizes && product.sizes.length > 0 ? (
                  product.sizes.map((s) => (
                    <button
                      key={s}
                      className="px-3 py-2 border rounded-md text-sm text-slate-800 hover:bg-slate-50 transition"
                    >
                      {s}
                    </button>
                  ))
                ) : (
                  <div className="text-sm text-slate-600">One size</div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <Link
                href="/chat"
                className="px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 shadow-md transition"
              >
                Ask AI about this
              </Link>

              <Link
                href="/availability"
                className="px-6 py-3 rounded-full font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
              >
                Check Store Availability
              </Link>
            </div>

            <section className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-slate-900">You may also like</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {similar.map((s) => (
                  <ProductCard key={s.id} product={s} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
