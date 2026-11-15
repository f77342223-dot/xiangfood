const apps = [
  {
    icon: "ramen_dining",
    title: "Instant Soups & Noodles",
    body: "Reconstitutes in cup-noodles under 90 seconds without sogginess.",
    cuts: "Best cuts: 5x5mm Diced, Slices",
  },
  {
    icon: "soup_kitchen",
    title: "Gourmet Broths & Sauces",
    body: "Pure vegetable aromatics without muddying color or moisture bloat.",
    cuts: "Best cuts: Flakes, 20-40 Mesh Powder",
  },
  {
    icon: "grain",
    title: "Dry Seasoning Blends",
    body: "Ultra-low Aw (≤ 0.25) prevents caking and hygroscopic degradation.",
    cuts: "Best cuts: Granules, 40-80 Mesh",
  },
  {
    icon: "camping",
    title: "Camping & MRE Entrees",
    body: "85–90% lighter than fresh with long sealed shelf-life stability.",
    cuts: "Best cuts: Whole Corn, Peas, 10x10mm",
  },
  {
    icon: "pets",
    title: "Clean-Label Pet Food",
    body: "Natural fiber, carotenoids, and gut-friendly prebiotic components.",
    cuts: "Best cuts: Whole Peas, Zucchini Diced",
  },
];

export function Applications() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="font-technical text-[11px] font-bold text-secondary">
            Industrial Formulary
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Formulated for High-Performance Production Lines
          </h2>
          <p className="mt-2 text-base text-on-surface-variant">
            From high-speed cup-noodle lines to pet food extrusion — uniform bulk
            density and consistent flow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {apps.map((app) => (
            <div
              key={app.title}
              className="flex flex-col justify-between rounded-xl border border-outline-variant/40 bg-surface-container-low p-4 transition-colors hover:bg-surface-container"
            >
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-[32px] text-primary">
                  {app.icon}
                </span>
                <h3 className="font-display text-base font-bold text-primary">
                  {app.title}
                </h3>
                <p className="text-sm text-on-surface-variant">{app.body}</p>
              </div>
              <p className="mt-4 pt-2 font-technical text-[11px] font-bold text-secondary">
                {app.cuts}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
