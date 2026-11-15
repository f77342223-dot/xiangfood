"use client";

import Link from "next/link";
import { useSampleKit } from "@/lib/sample-kit";

export function SampleDock() {
  const { items } = useSampleKit();
  if (items.length === 0) return null;

  const params = new URLSearchParams({
    intent: "sample",
    products: items.join(","),
  });

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden items-center gap-4 rounded-full bg-inverse-surface/95 p-2 pl-4 text-inverse-on-surface shadow-2xl backdrop-blur-md md:flex">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary-fixed" />
        <span className="font-technical text-[11px] font-semibold text-surface-container-high">
          R&D Sample Cart
        </span>
        <span className="rounded-full bg-primary-container px-2 py-0.5 font-technical text-[11px] font-bold text-on-primary">
          {items.length} Sample{items.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="h-4 w-px bg-surface-variant/30" />
      <Link
        href={`/request-quote?${params.toString()}`}
        className="flex items-center gap-1.5 rounded-full bg-tertiary-fixed-dim px-4 py-1.5 font-technical text-[11px] font-bold text-on-tertiary-fixed transition-colors hover:bg-on-tertiary-container"
      >
        Dispatch 48h Kit
        <span className="material-symbols-outlined text-[14px]">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
