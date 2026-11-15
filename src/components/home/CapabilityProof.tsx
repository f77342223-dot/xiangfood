const pillars = [
  {
    icon: "water_drop",
    title: "Cellular Integrity & Rapid Rehydration",
    body: "Sublimation at -40°C prevents crystallization collapse. Open porous micro-structures reconstitute in 60–90 seconds.",
    metric: "Rehydration Ratio: 1:6 – 1:8",
  },
  {
    icon: "ac_unit",
    title: "Cold-Chain Farm-to-Chamber Integrity",
    body: "Dedicated acreage harvested at peak Brix and micro-blanched within 4 hours. Flash-frozen before moisture removal.",
    metric: "Harvest-to-Freeze < 4 Hours",
  },
  {
    icon: "verified_user",
    title: "Strict Micro & Allergen Controls",
    body: "ISO Class 8 clean rooms for cubing and packing. Independent PCR panels for Salmonella, Listeria, and heavy metals.",
    metric: "TPC < 10,000 CFU/g Guaranteed",
  },
  {
    icon: "pallet",
    title: "Scalable Contract Volume (FCL/LCL)",
    body: "Annual capacity exceeding 8,500 MT. Dual-coast US forward inventory for steady pallet shipments and buffer runs.",
    metric: "FCL Contracts & 3-Day LCL US Depots",
  },
];

export function CapabilityProof() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container-site">
        <div className="mb-10 max-w-3xl">
          <span className="font-technical text-[11px] font-bold text-secondary">
            Industrial Quality Assurance
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Your Trusted Partner for Industrial Freeze-Dried Vegetable
            Ingredients
          </h2>
          <p className="mt-3 text-base text-on-surface-variant">
            Built for North American procurement officers, QC teams, and
            formulation scientists demanding batch-to-batch reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-xl border border-outline-variant/60 bg-surface-container-low p-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-container text-primary">
                  <span className="material-symbols-outlined text-[26px]">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {pillar.body}
                </p>
              </div>
              <p className="mt-4 flex items-center gap-1 pt-3 font-technical text-[11px] font-semibold text-primary">
                {pillar.metric}
                <span className="material-symbols-outlined text-[14px]">
                  check
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
