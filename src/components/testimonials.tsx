const quotes = [
  {
    name: "Ariel Tan",
    title: "Founder, Meadow Studio",
    quote: "The Alder Moss Runner is lighter than my recycled plastic trainers yet feels more supportive. The airflow is unreal on long walks." 
  },
  {
    name: "Jamal Ortega",
    title: "Trail guide",
    quote: "After six months guiding in coastal forests, the cork outsole still grips and my feet stay fresh. Compostable packaging is a bonus." 
  },
  {
    name: "Dr. Mira Patel",
    title: "Biomechanics researcher",
    quote: "VerdantStep tracked actual plantar pressure on my gait lab sensors. The natural rubber balance rivaled top performance brands." 
  }
];

export function Testimonials() {
  return (
    <section id="journal" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
            Word of mouth
          </p>
          <h2 className="mt-6 font-display text-4xl text-slate-900">Loved by trail guides, creatives, and researchers alike.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((entry) => (
            <figure
              key={entry.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm"
            >
              <blockquote className="text-sm text-slate-600">“{entry.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-slate-900">{entry.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{entry.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
