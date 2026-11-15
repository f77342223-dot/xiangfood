"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";

export function SampleCta() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(products[0]?.name ?? "");
  const [volume, setVolume] = useState("Benchtop Trials (< 250 kg)");

  function handleQuickSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({
      intent: "sample",
      email,
      products: product,
      volume,
    });
    router.push(`/request-quote?${params.toString()}`);
  }

  return (
    <section id="sample-kit" className="bg-surface py-24">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-on-primary shadow-2xl lg:p-16">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-7">
              <span className="font-technical text-[11px] font-bold text-primary-fixed-dim">
                Fast-Track Formulator Portal
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Looking for a Reliable Freeze-Dried Vegetable Supplier?
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-on-primary-container">
                Tell us your requirements. Complimentary benchtop samples
                dispatch from Edison, NJ within 48 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/request-quote?intent=sample" variant="accent">
                  Request Free Sample Kit
                  <span className="material-symbols-outlined text-[18px]">
                    package_2
                  </span>
                </Button>
                <Button
                  href="/request-quote"
                  variant="ghost"
                  className="bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20"
                >
                  Submit RFQ Details
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-surface-container-lowest p-6 text-on-surface shadow-xl lg:col-span-5">
              <h3 className="font-display text-xl font-bold text-primary">
                Rapid Spec Dispatch
              </h3>
              <p className="mt-1 text-sm text-on-surface-variant">
                Direct to R&D Food Scientists and Sourcing Agents
              </p>
              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={handleQuickSubmit}
              >
                <div>
                  <label className="mb-1 block font-technical text-[11px] font-semibold text-on-surface-variant">
                    Your Business Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@foodbrand.com"
                    className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-technical text-[11px] font-semibold text-on-surface-variant">
                    Ingredient of Interest
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom Matrix / Proprietary Cut">
                      Custom Matrix / Proprietary Cut
                    </option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-technical text-[11px] font-semibold text-on-surface-variant">
                    Estimated Annual Volume
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  >
                    <option>Benchtop Trials (&lt; 250 kg)</option>
                    <option>Pilot Run (250 kg - 1 MT)</option>
                    <option>LCL Commercial (1 - 5 MT)</option>
                    <option>FCL Contract (&gt; 10 MT)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-1 w-full rounded-lg bg-primary py-2.5 font-display text-base font-bold text-on-primary shadow-sm transition-colors hover:bg-primary-container"
                >
                  Get Benchtop Samples Dispatched
                </button>
                <span className="text-center font-technical text-[11px] text-on-surface-variant">
                  NDA & FSMA COA automatically bundled
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
