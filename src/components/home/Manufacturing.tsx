import Image from "next/image";

const specs = [
  {
    icon: "filter_alt",
    title: "Multi-Stage Optical Sorting",
    body: "Bühler SORTEX cameras strip discolorations, foreign matter, and undersized cuts.",
  },
  {
    icon: "radar",
    title: "In-Line Metal & X-Ray",
    body: "Dual-aperture detection rejects ferrous <0.6mm, non-ferrous <0.8mm, and stainless <1.0mm.",
  },
  {
    icon: "air",
    title: "Clean-Room Nitrogen Flush",
    body: "Packaging in Class 100,000 zones with <1.5% residual oxygen for 24-month stability.",
  },
  {
    icon: "layers",
    title: "Heavy Moisture Barrier Liners",
    body: "Multi-ply aluminum foil or 100μm high-barrier polyamide liners seal against humidity.",
  },
];

export function Manufacturing() {
  return (
    <section className="relative overflow-hidden bg-inverse-surface py-24 text-inverse-on-surface">
      <div className="container-site relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="rounded-2xl bg-surface-container-lowest/10 p-2 backdrop-blur-sm">
            <div className="relative h-96 overflow-hidden rounded-xl bg-primary-container">
              <Image
                src="/products/garlic.png"
                alt="Freeze-dried garlic in industrial production context"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 rounded-lg bg-inverse-surface/85 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between font-technical text-[11px] text-primary-fixed">
                  <span>Chamber #04 Status</span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 animate-ping rounded-full bg-primary-fixed" />
                    Sublimating
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 border-t border-surface/10 pt-2 font-technical text-[11px] text-surface">
                  <div>Vac: 0.08 mbar</div>
                  <div>Temp: -38.5°C</div>
                  <div>Dew: -55°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-surface-container-lowest/10 px-3 py-1 text-primary-fixed-dim">
            <span className="material-symbols-outlined text-[15px]">
              precision_manufacturing
            </span>
            <span className="font-technical text-[11px] font-bold">
              Engineering Rigor
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-surface md:text-4xl">
            Continuous Vacuum Sublimation & Zero-Contamination Sorting
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-surface-variant">
            Pharmaceutical-grade lyophilization protocols extract water via
            solid-to-gas sublimation, maintaining cellular nutrient geometry and
            volatile profiles.
          </p>
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specs.map((spec) => (
              <div key={spec.title} className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-surface/10 text-primary-fixed">
                  <span className="material-symbols-outlined text-[20px]">
                    {spec.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-surface">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-surface-variant">{spec.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
