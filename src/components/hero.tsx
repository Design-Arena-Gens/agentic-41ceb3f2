"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-16 sm:pt-24" id="hero">
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-brand-100/70 via-brand-50/50 to-transparent" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="mb-6 inline-flex max-w-max items-center gap-2 rounded-full border border-brand-300/80 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700 shadow-sm">
            New Drop · Forest Line
          </p>
          <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Original organic shoes crafted for a lighter footprint.
          </h1>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            VerdantStep shoes combine regenerative materials, precise craftsmanship, and timeless style. They breathe with
            you, move with you, and return nutrients back to the earth at the end of their journey.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#collection"
              className="rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Explore Collection
            </a>
            <a
              href="#materials"
              className="rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:border-brand-500 hover:text-brand-600"
            >
              Material Story
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 text-sm text-slate-600 sm:grid-cols-4">
            {[
              { label: "Average CO₂ savings", value: "4.6 kg" },
              { label: "Bio-based composition", value: "92%" },
              { label: "Crafted in", value: "Portugal" },
              { label: "Recycled water use", value: "78%" }
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-semibold uppercase tracking-[0.25em] text-slate-400">{item.label}</dt>
                <dd className="mt-2 text-xl font-semibold text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          <div className="relative flex w-full max-w-md flex-col items-center justify-center rounded-[2.5rem] border border-white/60 bg-[#133827] p-6 shadow-2xl shadow-brand-900/30">
            <div className="absolute inset-x-6 top-6 h-12 rounded-full bg-white/10 blur-lg" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="relative mt-10"
            >
              <Image
                src="/assets/organic-shoe.svg"
                alt="VerdantStep organic shoe"
                width={420}
                height={420}
                priority
                className="drop-shadow-[0_35px_45px_rgba(15,23,42,0.45)]"
              />
            </motion.div>
            <div className="mt-10 w-full rounded-2xl bg-white/10 p-6 text-white">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em]">
                <span>Forest Line</span>
                <span>New Arrival</span>
              </div>
              <h3 className="mt-4 font-display text-2xl">Alder Moss Runner</h3>
              <p className="mt-2 text-sm text-white/70">
                Regenerative cork outsole · Organic cotton knit · Terracotta leaf dye finish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
