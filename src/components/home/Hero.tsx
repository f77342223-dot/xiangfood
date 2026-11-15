import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-16 lg:py-24">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-fixed/30 blur-3xl" />
      <div className="container-site relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-7">
          <Badge tone="soft">
            <span className="material-symbols-outlined text-[15px]">science</span>
            Precision Lyophilization · B2B Ingredient Supply
          </Badge>
          <p className="font-display text-sm font-semibold tracking-[0.08em] text-primary uppercase">
            Yixiang Health Foods
          </p>
          <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-primary md:text-5xl">
            Premium Freeze-Dried Vegetables for Food Manufacturers
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Reliable ingredient supply. Consistent quality. Customized solutions
            engineered for rapid rehydration, 24-month stability, and
            clean-label formulation.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href="/products">
              Explore Products
              <span className="material-symbols-outlined text-[18px]">
                inventory_2
              </span>
            </Button>
            <Button href="/request-quote" variant="accent">
              <span className="material-symbols-outlined text-[18px]">
                request_quote
              </span>
              Request a Quote
            </Button>
            <a
              href="/request-quote?intent=sample"
              className="group inline-flex items-center gap-1.5 py-2 font-technical text-[11px] font-bold text-secondary hover:text-primary"
            >
              Order R&D Sample Kit (48h Turnaround)
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                bolt
              </span>
            </a>
          </div>
          <div className="mt-4 rounded-xl bg-surface-container-lowest/80 p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["≤ 3.0%", "Moisture Spec"],
                ["100%", "Farm Traceability"],
                ["Zero", "Artificial Additives"],
                ["GFSI / AA", "BRC & HACCP Audited"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-primary">
                    {value}
                  </span>
                  <span className="font-technical text-[11px] text-on-surface-variant">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-surface-container-lowest p-4 shadow-xl">
            <div className="relative h-80 overflow-hidden rounded-xl bg-surface-container">
              <Image
                src="/products/zucchini.png"
                alt="Macro freeze-dried zucchini slices showing cellular porosity"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between text-inverse-on-surface">
                <div>
                  <span className="font-technical text-[11px] text-primary-fixed-dim">
                    Lyophilized Crop Matrix
                  </span>
                  <p className="font-display text-base font-bold">
                    Cellular Pore Preservation
                  </p>
                </div>
                <span className="rounded bg-surface-container-lowest/20 px-2.5 py-1 font-technical text-[11px] font-bold backdrop-blur-md">
                  98.2% Retention
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-surface-container-low p-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  biotech
                </span>
                <div>
                  <p className="font-display text-base font-bold text-on-surface">
                    Aseptic Production Lot
                  </p>
                  <p className="font-technical text-[11px] text-on-surface-variant">
                    Continuous sublimation chamber curves
                  </p>
                </div>
              </div>
              <span className="rounded bg-secondary-container px-2 py-0.5 font-technical text-[11px] font-semibold text-primary">
                Validated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
