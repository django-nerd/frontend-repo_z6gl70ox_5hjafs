import { Star, Store, Navigation } from "lucide-react";

const mockShops = [
  {
    id: 1,
    name: "Green Leaf Market",
    category: "Organic Produce",
    rating: 4.7,
    distance: "0.4 mi",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1740&auto=format&fit=crop",
    tags: ["organic", "local", "seasonal"],
  },
  {
    id: 2,
    name: "Baker's Corner",
    category: "Bakery",
    rating: 4.8,
    distance: "0.8 mi",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1740&auto=format&fit=crop",
    tags: ["sourdough", "pastries", "coffee"],
  },
  {
    id: 3,
    name: "Harbor Fresh Seafood",
    category: "Fishmonger",
    rating: 4.6,
    distance: "1.2 mi",
    image:
      "https://images.unsplash.com/photo-1547514701-1cfb0c12c6b9?q=80&w=1740&auto=format&fit=crop",
    tags: ["wild-caught", "daily catch"],
  },
  {
    id: 4,
    name: "Daily Dairy",
    category: "Dairy & Eggs",
    rating: 4.5,
    distance: "1.5 mi",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1740&auto=format&fit=crop",
    tags: ["farm fresh", "cheese", "yogurt"],
  },
];

export default function ShopList({ query }) {
  const filtered = (query ? mockShops.filter((s) =>
    [s.name, s.category, ...(s.tags || [])].join(" ").toLowerCase().includes(query.toLowerCase())
  ) : mockShops);

  return (
    <section id="shops" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Nearby shops</h2>
          <p className="text-sm text-zinc-600">Handpicked local favorites around you</p>
        </div>
        <button className="text-sm px-3 py-1.5 rounded-md border border-zinc-300 hover:bg-zinc-50">View all</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((shop) => (
          <article key={shop.id} className="group rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                    <Store size={16} className="text-green-600" /> {shop.name}
                  </h3>
                  <p className="text-sm text-zinc-600">{shop.category} • {shop.distance}</p>
                </div>
                <div className="inline-flex items-center gap-1 text-amber-600 font-medium">
                  <Star size={16} fill="#F59E0B" className="text-amber-500" />
                  <span className="text-sm">{shop.rating}</span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {shop.tags?.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button className="text-sm px-3 py-1.5 rounded-md bg-green-600 text-white hover:bg-green-700">Order pickup</button>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-zinc-900">
                  <Navigation size={16} /> Directions
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-zinc-600">
          No shops found. Try another search.
        </div>
      )}
    </section>
  );
}
