export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 items-center gap-6 text-sm">
        <p className="text-zinc-600">© {new Date().getFullYear()} LocalGrocer. Built for your neighborhood.</p>
        <div className="md:justify-self-end flex items-center gap-4 text-zinc-700">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>
    </footer>
  );
}
