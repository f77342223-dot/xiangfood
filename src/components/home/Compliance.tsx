const certs = [
  ["verified", "BRCGS Grade AA", "Global Food Safety Initiative (GFSI) audit rating."],
  ["policy", "FSMA Compliant", "FDA Food Safety Modernization Act preventive controls."],
  ["fact_check", "HACCP & ISO 22000", "Automated CCP thermal curves and pathogen kill logs."],
  ["spa", "USDA Organic Available", "NOP audited supply runs upon demand."],
  ["check_box", "OU Kosher & Halal", "Clean pareve equipment certification."],
  ["shield", "Non-GMO Verified", "PCR tested seed lines, 100% agricultural ingredients."],
];

export function Compliance() {
  return (
    <section className="bg-surface-container-low py-16 lg:py-24">
      <div className="container-site">
        <div className="rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-4">
              <span className="font-technical text-[11px] font-bold text-secondary">
                Compliance Standard
              </span>
              <h2 className="font-display text-3xl font-bold text-primary">
                North American Regulatory Readiness
              </h2>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Every shipment undergoes FSMA FSVP review. Pallets enter via US
                Customs bonded warehouses with complete batch documentation.
              </p>
              <a
                href="/request-quote"
                className="inline-flex items-center gap-1.5 pt-2 font-technical text-[11px] font-bold text-primary hover:underline"
              >
                Request Sample Full COA & Micro-Audit Pack
                <span className="material-symbols-outlined text-[16px]">
                  download
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-8">
              {certs.map(([icon, title, body]) => (
                <div
                  key={title}
                  className="flex flex-col gap-1 rounded-xl bg-surface-container p-4"
                >
                  <span className="material-symbols-outlined text-[28px] text-primary">
                    {icon}
                  </span>
                  <span className="font-display text-base font-bold text-primary">
                    {title}
                  </span>
                  <span className="font-technical text-[11px] text-on-surface-variant normal-case tracking-normal">
                    {body}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
