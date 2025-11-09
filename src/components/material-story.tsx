import { Leaf, Recycle, Droplet } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Regenerative supply",
    copy: "We work with small-scale agroforestry projects harvesting cork oak, wild rubber, and bio-based textiles without clear-cutting or monoculture tactics."
  },
  {
    icon: Droplet,
    title: "Closed-loop dyeing",
    copy: "Our terracotta pigments and plant tannins recirculate 78% of water used, reclaiming nutrients for on-site wetlands and greenhouse cultivation."
  },
  {
    icon: Recycle,
    title: "End-of-life return",
    copy: "Send your VerdantStep shoes back after two years of use and we will deconstruct them into fresh sheets for new footbeds and garden mulch."
  }
];

export function MaterialStory() {
  return (
    <section id="materials" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
            Materials
          </p>
          <h2 className="mt-6 font-display text-4xl text-slate-900">Everything begins at the forest floor.</h2>
          <p className="mt-4 text-lg text-slate-600">
            VerdantStep is built with a 92% bio-based composition. Our partners cultivate cork, algae, and hemp while restoring soil
            biodiversity. Each component is traced via QR-coded batch logs stored on an open regenerative ledger.
          </p>
          <div className="mt-10 grid gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{pillar.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-[2.5rem] border border-slate-200 bg-white/70 p-10 shadow-lg">
          <div className="rounded-3xl bg-gradient-to-br from-brand-100 via-white to-brand-200 p-8 text-slate-700">
            <h3 className="font-display text-2xl text-brand-700">Lifecycle Impact</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <span className="font-semibold text-slate-900">54%</span> less carbon than industry average running shoe.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Zero</span> petroleum foams or plastics.
              </li>
              <li>
                <span className="font-semibold text-slate-900">100%</span> traceable supply verified by Soil Regeneration Guild.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Biodegrades</span> in 180 days within commercial compost streams.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-200 bg-brand-50/70 p-8 text-sm text-brand-900">
            <p className="uppercase tracking-[0.3em] text-brand-500">Material Origins</p>
            <dl className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <dt className="font-semibold">Algarve cork</dt>
                <dd>42%</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-semibold">Hemp knit</dt>
                <dd>28%</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-semibold">Wild rubber</dt>
                <dd>17%</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-semibold">Algae foam</dt>
                <dd>13%</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-brand-700">
              *Material breakdown is updated with every micro-batch. Scan your pair to view provenance certificates and material lab
              data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
