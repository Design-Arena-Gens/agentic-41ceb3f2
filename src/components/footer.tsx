export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl text-brand-700">VerdantStep</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">Original organic footwear</p>
        </div>
        <div className="text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VerdantStep Cooperative. All rights reserved.</p>
          <p className="mt-1">Crafted in Porto · Compost with us · hello@verdantstep.com</p>
        </div>
      </div>
    </footer>
  );
}
