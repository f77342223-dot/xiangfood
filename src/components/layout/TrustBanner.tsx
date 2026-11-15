export function TrustBanner() {
  return (
    <div className="bg-primary text-on-primary">
      <div className="container-site flex items-center justify-between gap-4 py-1.5 font-technical text-[11px]">
        <div className="flex min-w-0 items-center gap-2">
          <span className="material-symbols-outlined text-[14px] text-primary-fixed">
            verified
          </span>
          <span className="truncate">
            Serving US Food Manufacturers & Formulators | FSMA & GFSI Audited |
            48-Hour Spec Sheet & Sample Dispatch
          </span>
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-1 text-on-primary-container">
            <span className="material-symbols-outlined text-[14px]">
              local_shipping
            </span>
            Direct US Port Warehousing (LA / NJ)
          </span>
          <span className="flex items-center gap-1 text-on-primary-container">
            <span className="material-symbols-outlined text-[14px]">call</span>
            Procurement Desk: (800) 582-9442
          </span>
        </div>
      </div>
    </div>
  );
}
