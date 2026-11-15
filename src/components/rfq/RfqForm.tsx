"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";

const volumeTiers = [
  "Benchtop Trials (< 250 kg)",
  "Pilot Run (250 kg - 1 MT)",
  "LCL Commercial (1 - 5 MT)",
  "FCL Contract (> 10 MT)",
];

export function RfqForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") ?? "quote";
  const prefillEmail = searchParams.get("email") ?? "";
  const prefillProducts = searchParams.get("products") ?? "";
  const prefillVolume = searchParams.get("volume") ?? volumeTiers[0];

  const initialSelected = useMemo(() => {
    if (!prefillProducts) return [] as string[];
    return prefillProducts
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }, [prefillProducts]);

  const [selected, setSelected] = useState<string[]>(initialSelected);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function toggleProduct(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-10 text-center shadow-sm">
        <span className="material-symbols-outlined text-[48px] text-primary">
          mark_email_read
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold text-primary">
          Inquiry Received
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-base text-on-surface-variant">
          Our US procurement desk will respond within one business day with
          pricing guidance, COA samples, and {intent === "sample" ? "48-hour sample dispatch options" : "lead-time confirmation"}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm lg:p-10"
    >
      <div>
        <span className="font-technical text-[11px] font-bold text-secondary">
          {intent === "sample" ? "R&D Sample Request" : "Industrial Quotation"}
        </span>
        <h2 className="mt-1 font-display text-xl font-bold text-primary">
          Corporate Contact & Facility Profile
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Full Name *" name="fullName" required placeholder="e.g. Dr. Marcus Vance" />
          <Field label="Company / Enterprise Name *" name="company" required placeholder="e.g. Apex Global Foods LLC" />
          <Field
            label="Corporate Email *"
            name="email"
            type="email"
            required
            defaultValue={prefillEmail}
            placeholder="name@companydomain.com"
          />
          <Field label="Direct Desk / Mobile *" name="phone" type="tel" required placeholder="+1 (555) 019-2831" />
          <div>
            <label className="mb-1 block font-technical text-[11px] font-semibold text-on-surface">
              Delivery Country / State *
            </label>
            <select
              required
              name="region"
              className="h-11 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-sm focus:border-primary focus:outline-none"
              defaultValue="US-NJ"
            >
              <option value="US-NJ">United States — New Jersey</option>
              <option value="US-CA">United States — California</option>
              <option value="US-TX">United States — Texas</option>
              <option value="US-IL">United States — Illinois</option>
              <option value="US-OTHER">United States — Other</option>
              <option value="CA">Canada</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block font-technical text-[11px] font-semibold text-on-surface">
              Department / Role *
            </label>
            <select
              required
              name="role"
              className="h-11 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-sm focus:border-primary focus:outline-none"
              defaultValue="Procurement"
            >
              <option>Procurement / Purchasing</option>
              <option>R&D / Formulation</option>
              <option>Quality Assurance</option>
              <option>Supply Chain</option>
              <option>Executive / Owner</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display text-xl font-bold text-primary">
          Ingredient Scope & Engineering Specifications
        </h2>
        <p className="mt-3 mb-2 font-technical text-[11px] font-semibold text-on-surface">
          Products of Interest (Multi-Select)
        </p>
        <div className="flex flex-wrap gap-2">
          {products.map((p) => {
            const active = selected.includes(p.name);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => toggleProduct(p.name)}
                className={`rounded-full px-3 py-1.5 font-technical text-[11px] font-semibold transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "border border-outline-variant text-primary hover:bg-surface-container"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Select
            label="Desired Cut Style / Particle Size *"
            name="cutStyle"
            options={[
              "Whole / Intact",
              "Diced 3x3mm",
              "Diced 5x5mm",
              "Diced 10x10mm",
              "Slices / Flakes",
              "Powder / Mesh",
              "Custom Mill Spec",
            ]}
          />
          <Select
            label="Estimated Annual Volume *"
            name="volume"
            options={volumeTiers}
            defaultValue={prefillVolume}
          />
          <Select
            label="Packaging Preference *"
            name="packaging"
            options={[
              "10–12kg Cartons (N2 Flush)",
              "25kg Bulk Bags",
              "Tote / Super Sack",
              "Custom Private Label",
            ]}
          />
          <Select
            label="Target Product Application *"
            name="application"
            options={[
              "Instant Soups & Noodles",
              "Seasoning Blends",
              "Ready Meals / MRE",
              "Pet Nutrition",
              "Snack / Bar Inclusion",
              "Other / Proprietary",
            ]}
          />
        </div>

        <fieldset className="mt-4">
          <legend className="mb-2 font-technical text-[11px] font-semibold text-on-surface">
            Target Delivery / First Production Batch Timeline *
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              ["immediate", "Immediate / Spot Buy"],
              ["30-days", "Within 30 Days"],
              ["60-90-days", "60–90 Day Planning"],
              ["annual-contract", "Annual Contract"],
            ].map(([value, label], i) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-surface-container-low p-2.5 transition-colors hover:bg-surface-container"
              >
                <input
                  type="radio"
                  name="timeline"
                  value={value}
                  defaultChecked={i === 0}
                  className="accent-primary"
                  required
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <h2 className="font-display text-xl font-bold text-primary">
          Technical Specifications & Quality Parameters
        </h2>
        <label className="mt-4 mb-1 block font-technical text-[11px] font-semibold text-on-surface">
          Special Formulation Notes, Target Moisture & Rehydration Ratio
        </label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Detail specific limits (e.g. moisture ≤ 2.5%, Aw ≤ 0.20, custom blend ratios)..."
          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-4 text-sm focus:border-primary focus:outline-none"
        />
        <div className="mt-4">
          <span className="mb-2 block font-technical text-[11px] font-semibold text-on-surface">
            Upload Specs, RFP, or Formulation Sheet (PDF, DOCX, XLSX up to 25MB)
          </span>
          <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-surface-container-low/70 p-8 text-center transition-all hover:bg-surface-container">
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name ?? "")
              }
            />
            <span className="material-symbols-outlined text-[32px] text-primary">
              upload_file
            </span>
            <span className="font-display text-base font-semibold text-primary">
              {fileName || "Drag & drop specification sheets or click to browse"}
            </span>
            <span className="font-technical text-[11px] text-on-surface-variant normal-case tracking-normal">
              Local preview only — files are not uploaded in this build
            </span>
          </label>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-outline-variant/50 pt-6 sm:flex-row sm:items-center">
        <p className="text-sm text-on-surface-variant">
          By submitting, you agree to be contacted by our US B2B procurement
          desk regarding this inquiry.
        </p>
        <button
          type="submit"
          className="rounded-lg bg-tertiary-fixed-dim px-8 py-3 font-display text-base font-bold text-on-tertiary-fixed shadow-sm transition-colors hover:bg-on-tertiary-container hover:text-tertiary"
        >
          {intent === "sample" ? "Submit Sample Request" : "Submit RFQ"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="mb-1 block font-technical text-[11px] font-semibold text-on-surface">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="h-11 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="mb-1 block font-technical text-[11px] font-semibold text-on-surface">
        {label}
      </label>
      <select
        name={name}
        required
        defaultValue={defaultValue ?? options[0]}
        className="h-11 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-sm focus:border-primary focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
