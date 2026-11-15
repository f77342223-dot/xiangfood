import type { Metadata } from "next";
import { Suspense } from "react";
import { RfqForm } from "@/components/rfq/RfqForm";

export const metadata: Metadata = {
  title: "Request a Quote or Sample",
  description:
    "Fast-track B2B RFQ and R&D sample kit portal for US food manufacturers and formulators.",
};

export default function RequestQuotePage() {
  return (
    <div className="bg-surface-container-low">
      <section className="container-site relative overflow-hidden py-12">
        <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-primary-fixed/40 blur-3xl" />
        <div className="relative max-w-3xl">
          <span className="font-technical text-[11px] font-bold text-secondary">
            US Procurement Portal
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Request an Industrial Quotation or R&D Sample Kit
          </h1>
          <p className="mt-3 text-lg text-on-surface-variant">
            Mandatory B2B fields tailored for target application, annual volume
            tier, and cut-size preference. Spec sheets and COA samples bundled
            with every serious inquiry.
          </p>
        </div>
      </section>
      <section className="container-site max-w-7xl pb-20">
        <Suspense
          fallback={
            <div className="rounded-xl bg-surface-container-lowest p-10 text-center text-on-surface-variant">
              Loading form…
            </div>
          }
        >
          <RfqForm />
        </Suspense>
      </section>
    </div>
  );
}
