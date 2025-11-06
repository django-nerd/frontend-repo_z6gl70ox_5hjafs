import { ShoppingBasket } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-green-100 text-green-700">
            <ShoppingBasket size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight">LocalGrocer</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
          <a href="#shops" className="hover:text-zinc-900 transition">Shops</a>
          <a href="#categories" className="hover:text-zinc-900 transition">Categories</a>
          <a href="#about" className="hover:text-zinc-900 transition">About</a>
          <a href="#contact" className="hover:text-zinc-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-md text-sm border border-zinc-300 hover:bg-zinc-50">Log in</button>
          <button className="px-3 py-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-700">List your shop</button>
        </div>
      </div>
    </header>
  );
}
