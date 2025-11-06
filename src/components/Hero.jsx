import { MapPin, Search } from "lucide-react";

export default function Hero({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q");
    onSearch?.(String(q || "").trim());
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-green-100 text-green-700">Fresh & local</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            All your neighborhood grocery shops in one place
          </h1>
          <p className="mt-4 text-zinc-600 md:text-lg">
            Discover nearby markets, compare offerings, and order pickup from trusted local vendors. Support small businesses with every purchase.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 bg-white/80 p-2.5 rounded-xl border border-zinc-200 shadow-sm">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50">
              <Search className="text-zinc-500" size={18} />
              <input name="q" placeholder="Search fruits, bread, milk..." className="w-full bg-transparent outline-none text-sm" />
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
              <MapPin size={18} /> Find nearby
            </button>
          </form>
          <p className="mt-3 text-xs text-zinc-500">Tip: try "organic eggs" or "bakery"</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white border border-zinc-200 shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1740&auto=format&fit=crop"
              alt="Local grocery collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
