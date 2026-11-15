"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { filterProducts, type CutCategory } from "@/lib/products";
import { useSampleKit } from "@/lib/sample-kit";

const tabs: { id: CutCategory; label: string }[] = [
  { id: "all", label: "All Ingredients" },
  { id: "diced", label: "Diced & Flakes" },
  { id: "whole", label: "Whole Crops" },
];

export function ProductLineup() {
  const [tab, setTab] = useState<CutCategory>("all");
  const { addSample } = useSampleKit();
  const items = useMemo(
    () => filterProducts(tab).filter((p) => p.featured).slice(0, 6),
    [tab],
  );

  return (
    <section id="catalog" className="bg-surface-container-low py-16 lg:py-24">
      <div className="container-site">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-technical text-[11px] font-bold text-secondary">
              Industrial Portfolio
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Standard & Precision Cut Lyophilized Ingredients
            </h2>
            <p className="mt-2 max-w-2xl text-base text-on-surface-variant">
              Available in aseptic poly-lined cartons with nitrogen injection.
              Multi-cut dimensions available upon custom milling order.
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-1 rounded-xl bg-surface-container p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`rounded-lg px-3 py-1.5 font-technical text-[11px] font-semibold transition-all ${
                  tab === t.id
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-lowest"
            >
              <div className="relative h-56 overflow-hidden bg-surface-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 rounded bg-surface-container-lowest/90 px-2.5 py-0.5 font-technical text-[11px] font-bold text-primary backdrop-blur-md">
                  SPEC: {product.cutSpec}
                </div>
                <span className="absolute top-3 right-3 rounded bg-primary px-2 py-0.5 font-technical text-[11px] font-semibold text-on-primary">
                  {product.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-technical text-[11px] text-secondary italic">
                      {product.latin}
                    </span>
                    <span className="font-technical text-[11px] text-on-surface-variant">
                      Lot: {product.lot}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-primary">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {product.description}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 rounded-lg bg-surface-container-low p-3 text-center">
                    {[
                      ["Moisture", product.moisture],
                      ["Rehydrate", product.rehydrate],
                      ["Packaging", product.packaging],
                    ].map(([label, value]) => (
                      <div key={label} className="flex flex-col">
                        <span className="font-technical text-[10px] text-outline">
                          {label}
                        </span>
                        <span className="font-technical text-[11px] font-bold text-primary">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => addSample(product.name)}
                    className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-secondary-container py-2 font-technical text-[11px] font-bold text-on-secondary-container transition-all hover:bg-primary hover:text-on-primary"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      add_circle
                    </span>
                    Request Sample
                  </button>
                  <Link
                    href="/products"
                    className="flex items-center gap-1 rounded-lg bg-surface-container px-3 py-2 font-technical text-[11px] font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      description
                    </span>
                    TDS
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-display text-base font-semibold text-primary hover:underline"
          >
            View Full Technical Catalog
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
