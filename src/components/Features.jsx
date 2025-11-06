import { Clock, Leaf, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Support local",
    desc: "Keep your community thriving by shopping small and seasonal.",
  },
  {
    icon: Clock,
    title: "Same‑day pickup",
    desc: "Reserve items online and pick them up in minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted vendors",
    desc: "Verified shops with transparent ratings and reviews.",
  },
];

export default function Features() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 grid place-items-center">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{title}</h3>
            <p className="mt-1 text-sm text-zinc-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
