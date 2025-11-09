export function Newsletter() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-4xl rounded-[3rem] border border-slate-200 bg-white/80 p-10 text-center shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">Join the biome</p>
        <h2 className="mt-4 font-display text-4xl text-slate-900">Be first to reserve seasonal drops.</h2>
        <p className="mt-4 text-sm text-slate-600">
          Limited releases open quarterly. Subscribe for behind-the-scenes soil reports, journal entries, and early access codes.
        </p>
        <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full max-w-sm rounded-full border border-slate-200 bg-white px-6 py-3 text-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full max-w-[180px] rounded-full bg-brand-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Request Invite
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-400">
          We respect your inbox. Expect one journal entry per month and launch day alerts.
        </p>
      </div>
    </section>
  );
}
