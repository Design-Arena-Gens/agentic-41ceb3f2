import Link from "next/link";

const navItems = [
  { href: "#collection", label: "Collection" },
  { href: "#materials", label: "Materials" },
  { href: "#story", label: "Our Story" },
  { href: "#journal", label: "Journal" }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 bg-[#f5f7f2]/80 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="font-display text-2xl tracking-wide text-brand-700">
          VerdantStep
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.2em] text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#collection"
          className="rounded-full border border-brand-500 bg-brand-500 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-glow transition hover:-translate-y-0.5"
        >
          Shop
        </Link>
      </div>
    </header>
  );
}
