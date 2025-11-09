const stages = [
  {
    title: "Harvest & spin",
    description: "Farm partners hand-strip cork bark and spin hemp fibers, letting the soil rest 9 months between harvests.",
    stat: "12 micro farms"
  },
  {
    title: "Hand-knit uppers",
    description: "Organic cotton is blended with algae threads, then knit into breathable uppers on solar-powered looms.",
    stat: "32 artisans"
  },
  {
    title: "Natural dye finishing",
    description: "Terracotta bark, madder root, and indigo leaves create layered palettes sealed with plant-based wax.",
    stat: "6 dye baths"
  },
  {
    title: "Balancing & QA",
    description: "Every shoe is balanced on a cork mold for even pressure distribution, then boxed in mycelium packaging.",
    stat: "18-step check"
  }
];

export function ProcessTimeline() {
  return (
    <section id="story" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[3rem] bg-[#0d3b25] p-10 text-brand-50 shadow-2xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">Process</p>
          <h2 className="mt-4 font-display text-4xl text-white">From living soils to living shoes.</h2>
          <p className="mt-4 text-base text-white/80">
            Each VerdantStep pair is signed by the artisans responsible for its finish. Follow the timeline to see how your
            shoes come to life in under 22 days, start to finish.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold uppercase tracking-[0.35em] text-brand-100">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-display text-2xl text-white">{stage.title}</h3>
              <p className="mt-3 text-sm text-white/70">{stage.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">{stage.stat}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
