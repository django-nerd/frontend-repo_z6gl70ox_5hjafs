import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ShopList from "./components/ShopList";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero onSearch={setQuery} />
        <Features />
        <ShopList query={query} />
      </main>
      <Footer />
    </div>
  );
}
