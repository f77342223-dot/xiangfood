"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { filterProducts, products, type CutCategory } from "@/lib/products";
import { useSampleKit } from "@/lib/sample-kit";

const filters: { id: CutCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "diced", label: "Diced" },
  { id: "whole", label: "Whole" },
  { id: "flakes", label: "Flakes" },
];

export function ProductCatalog() {
  const [tab, setTab] = useState<"deepdive" | "catalog">("catalog");
  const [category, setCategory] = useState<CutCategory>("all");
  const [query, setQuery] = useState("");
  const [lotCode, setLotCode] = useState("YX-2025Q1-FD84");
  const [lotChecked, setLotChecked] = useState(false);
  const { items, addSample } = useSampleKit();

  const filtered = useMemo(
    () => filterProducts(category, query),
    [category, query],
  );

  const focus = products.find((p) => p.focus) ?? products[0];

  return (
    <div className="pb-24">
      <section className="bg-surface-container-low px-4 py-4 shadow-sm">
        <div className="container-site flex flex-wrap items-center gap-2 font-technical text-[11px] text-on-surface-variant">
          <Link href="/" className="hover:text-primary">
            Portal
          </Link>
          <span>/</span>
          <span className="font-semibold text-primary">Catalog</span>
        </div>
      </section>

      <section className="container-site pt-10 pb-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <span className="font-technical text-[11px] font-bold text-secondary">
              Active Formulator Ingredient Catalog
            </span>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Technical Spec Freeze-Dried Vegetables
            </h1>
            <p className="mt-2 max-w-2xl text-base text-on-surface-variant">
              Instant access to cut sizes, moisture specs, rehydration ratios,
              and COA-ready lot documentation for US procurement teams.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-surface-container p-1">
            <button
              type="button"
              onClick={() => setTab("deepdive")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 font-display text-sm font-semibold transition-all ${
                tab === "deepdive"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">science</span>
              Deep Dive
            </button>
            <button
              type="button"
              onClick={() => setTab("catalog")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 font-display text-sm font-semibold transition-all ${
                tab === "catalog"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
              Full Catalog
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-outline">
              search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cut size (diced, sliced, powder) or mesh..."
              className="h-11 w-full rounded-lg bg-surface-container-lowest pl-10 pr-3 text-sm shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCategory(f.id)}
                className={`rounded-full px-4 py-2 font-technical text-[11px] font-semibold transition-colors ${
                  category === f.id
                    ? "bg-primary text-on-primary"
                    : "border border-outline-variant text-primary hover:bg-surface-container"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {tab === "deepdive" && focus ? (
        <section className="container-site py-6">
          <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container-lowest lg:grid-cols-12">
            <div className="relative h-80 lg:col-span-5 lg:h-auto">
              <Image
                src={focus.image}
                alt={focus.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="flex flex-col gap-4 p-6 lg:col-span-7 lg:p-10">
              <span className="font-technical text-[11px] font-bold text-secondary">
                {focus.sku} · Aw {focus.waterActivity}
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary">
                {focus.name}
              </h2>
              <p className="text-base text-on-surface-variant">
                {focus.description}
              </p>
              <div className="overflow-hidden rounded-lg border border-outline-variant">
                <table className="w-full text-sm">
                  <thead className="bg-surface-container-low">
                    <tr className="font-technical text-[11px] text-on-surface-variant">
                      <th className="px-4 py-3 text-left">Parameter</th>
                      <th className="px-4 py-3 text-right">Spec</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Moisture", focus.moisture],
                      ["Rehydration", focus.rehydrate],
                      ["Cut Size", focus.cutSpec],
                      ["Packaging", focus.packaging],
                      ["Lot Series", focus.lot],
                    ].map(([k, v]) => (
                      <tr
                        key={k}
                        className="border-t border-outline-variant/60"
                      >
                        <td className="px-4 py-3 text-on-surface-variant">{k}</td>
                        <td className="px-4 py-3 text-right font-semibold text-primary">
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => addSample(focus.name)}
                  className="rounded-lg bg-primary px-5 py-2.5 font-display text-sm font-semibold text-on-primary"
                >
                  Add to Sample Kit
                </button>
                <Link
                  href="/request-quote"
                  className="rounded-lg border border-outline-variant px-5 py-2.5 font-display text-sm font-semibold text-primary"
                >
                  Request Container RFQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {tab === "catalog" ? (
        <section className="container-site py-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <span className="font-technical text-[11px] font-bold text-secondary">
                High Purity Catalog
              </span>
              <h2 className="font-display text-2xl font-bold text-primary">
                Full Freeze-Dried Vegetable Matrix
              </h2>
            </div>
            <p className="font-technical text-[11px] text-on-surface-variant">
              Showing{" "}
              <span className="font-bold text-primary">
                {filtered.length} of {products.length}
              </span>{" "}
              Active Formulations
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <article
                key={product.id}
                className="flex flex-col justify-between rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-4"
              >
                <div>
                  <div className="relative mb-3 h-48 overflow-hidden rounded-lg bg-surface-container-high">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {product.focus ? (
                      <span className="absolute top-2 left-2 rounded bg-tertiary px-2 py-0.5 font-technical text-[11px] font-bold text-on-tertiary">
                        Current Focus
                      </span>
                    ) : null}
                    <span className="absolute right-2 bottom-2 rounded bg-surface/90 px-2 py-0.5 font-technical text-[11px] font-semibold text-primary">
                      Aw: {product.waterActivity}
                    </span>
                  </div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-technical text-[11px] font-bold text-secondary">
                      {product.sku}
                    </span>
                    <span className="rounded-full bg-secondary-container px-2 py-0.5 font-technical text-[11px] font-semibold text-on-secondary-container">
                      Moisture {product.moisture}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-primary">
                    {product.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-on-surface-variant">
                    {product.description}
                  </p>
                  <div className="my-3 grid grid-cols-2 gap-2 rounded-lg bg-surface-container-low p-2 text-sm">
                    <div>
                      <span className="block font-technical text-[10px] text-on-surface-variant">
                        Cut Sizes
                      </span>
                      <strong className="text-on-surface">{product.cutSpec}</strong>
                    </div>
                    <div>
                      <span className="block font-technical text-[10px] text-on-surface-variant">
                        Rehydration
                      </span>
                      <strong className="text-on-surface">
                        {product.rehydrate}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => addSample(product.name)}
                    className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-surface-container py-2 font-technical text-[11px] font-bold text-primary uppercase transition-colors hover:bg-surface-container-high"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      add_box
                    </span>
                    Sample
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-surface-container p-2 text-primary hover:bg-surface-container-high"
                    title="Download TDS (placeholder)"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      description
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-surface-container-low px-4 py-10">
        <div className="container-site rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px] text-primary">
                  verified
                </span>
                <span className="font-technical text-[11px] font-bold text-secondary">
                  Lot Traceability & Verification Desk
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-primary">
                Look Up Pallet Batch Documentation
              </h2>
              <p className="text-sm text-on-surface-variant">
                Enter a pallet lot code to retrieve harvest origin, freeze-drying
                cycle logs, and lab micro-clearances.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative">
                <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-[20px] text-outline">
                  qr_code_2
                </span>
                <input
                  value={lotCode}
                  onChange={(e) => {
                    setLotCode(e.target.value);
                    setLotChecked(false);
                  }}
                  className="h-12 w-full rounded-lg bg-surface-container pl-10 pr-28 font-technical text-[12px] font-bold text-primary shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter Pallet Lot Code..."
                />
                <button
                  type="button"
                  onClick={() => setLotChecked(true)}
                  className="absolute top-1.5 right-1.5 rounded-lg bg-primary px-4 py-2 font-technical text-[11px] font-bold text-on-primary"
                >
                  Verify
                </button>
              </div>
              {lotChecked ? (
                <div className="mt-4 flex flex-col justify-between gap-4 rounded-lg bg-surface-container p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display text-base font-bold text-primary">
                      Lot {lotCode || "YX-2025Q1-FD84"} Cleared
                    </p>
                    <p className="font-technical text-[11px] text-on-surface-variant normal-case tracking-normal">
                      Farm origin: Shandong Contract Acreage · Sublimation cycle
                      validated · Salmonella / Listeria ND
                    </p>
                  </div>
                  <span className="rounded-full bg-primary-fixed px-3 py-1 font-technical text-[11px] font-bold text-on-primary-fixed">
                    COA Ready
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {items.length > 0 ? (
        <div className="fixed bottom-4 left-1/2 z-40 flex w-11/12 max-w-4xl -translate-x-1/2 flex-col items-center justify-between gap-4 rounded-xl bg-inverse-surface/95 p-4 text-inverse-on-surface shadow-xl backdrop-blur-md sm:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-technical text-[11px] font-bold">
                Sample Kit Tray
              </span>
              <span className="rounded-full bg-tertiary-fixed px-2 py-0.5 font-technical text-[11px] font-bold text-on-tertiary-fixed">
                {items.length} of 5 Added
              </span>
            </div>
            <p className="mt-1 max-w-md truncate text-sm text-surface-variant">
              {items.join(" · ")}
            </p>
          </div>
          <Link
            href={`/request-quote?intent=sample&products=${encodeURIComponent(items.join(","))}`}
            className="rounded-lg bg-tertiary-fixed-dim px-5 py-2.5 font-display text-sm font-bold text-on-tertiary-fixed"
          >
            Checkout Sample Kit
          </Link>
        </div>
      ) : null}
    </div>
  );
}
