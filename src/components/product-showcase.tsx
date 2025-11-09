import Image from "next/image";

const products = [
  {
    name: "Alder Moss Runner",
    description: "Breathable knit upper dyed with forest lichens and sealed with plant-based wax.",
    price: "$218",
    material: "Organic cotton, algae foam, cork",
    image: "/assets/product-runner.svg"
  },
  {
    name: "Seagrass Loom Mule",
    description: "Hand-loomed hemp with seagrass lining for barefoot comfort through every season.",
    price: "$198",
    material: "Hemp fiber, natural latex, bio-suede",
    image: "/assets/product-mule.svg"
  },
  {
    name: "Terracotta Trail High",
    description: "Stabilized ankle support with regenerative leather and terracotta bark tanning.",
    price: "$248",
    material: "Regenerative leather, cork, wild rubber",
    image: "/assets/product-high.svg"
  }
];

export function ProductShowcase() {
  return (
    <section id="collection" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-4 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
            Crafted in small batches
          </p>
          <h2 className="font-display text-4xl text-slate-900">The Organic Essentials Collection</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Every VerdantStep pair is limited to 400 units per season, letting us hand-finish each shoe and trace every fiber
            back to its farm of origin.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                <div className="relative mx-auto mb-12 flex h-56 w-full max-w-[240px] items-center justify-center rounded-[48px] bg-gradient-to-br from-brand-100 to-brand-50">
                  <Image src={product.image} alt={product.name} width={240} height={220} className="transition duration-500 group-hover:scale-105" />
                  <div className="absolute -inset-x-6 bottom-4 h-12 rounded-full bg-brand-200/70 blur-2xl" />
                </div>
                <h3 className="font-display text-2xl text-slate-900">{product.name}</h3>
                <p className="mt-3 text-sm text-slate-600">{product.description}</p>
              </div>
              <dl className="mt-6 flex flex-col gap-4 text-sm text-slate-500">
                <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3 uppercase tracking-[0.25em]">
                  <span>Materials</span>
                  <span className="tracking-normal text-slate-700">{product.material}</span>
                </div>
                <div className="flex items-center justify-between uppercase tracking-[0.25em] text-slate-400">
                  <span>Season Price</span>
                  <span className="text-lg font-semibold tracking-[0.15em] text-brand-600">{product.price}</span>
                </div>
              </dl>
              <button className="mt-8 inline-flex items-center justify-center rounded-full border border-brand-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-600 transition hover:bg-brand-600 hover:text-white">
                Reserve Pair
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
