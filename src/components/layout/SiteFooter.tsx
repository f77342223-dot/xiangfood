import Link from "next/link";
import { navLinks } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-inverse-surface pt-16 pb-8 text-inverse-on-surface">
      <div className="container-site grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-6">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <span className="font-display text-xl font-bold tracking-tight text-surface">
            Yixiang Health Foods
          </span>
          <span className="font-technical text-[11px] font-semibold text-primary-fixed-dim">
            Industrial Lyophilized Ingredients
          </span>
          <p className="max-w-sm text-sm leading-relaxed text-surface-variant">
            Primary global manufacturer of high-purity freeze-dried vegetable
            ingredients for aseptic industrial formulation across North America.
          </p>
          <div className="mt-2 flex flex-col gap-1 text-sm text-surface-container-high">
            <span>US Warehouses: Edison, NJ · Ontario, CA</span>
            <span>Procurement: (800) 582-9442</span>
            <span>b2b@yixianghealth.com</span>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-technical text-[11px] font-bold text-primary-fixed">
            Navigate
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary-fixed">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-technical text-[11px] font-bold text-primary-fixed">
            Capabilities
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-surface-variant">
            <li>Custom Cut & Mesh</li>
            <li>Private Label Blends</li>
            <li>Nitrogen-Flush Bulk Bags</li>
            <li>48h Sample Dispatch</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-3 font-technical text-[11px] font-bold text-primary-fixed">
            Compliance
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-surface-variant">
            <li>BRCGS Grade AA · GFSI</li>
            <li>FSMA / FSVP Ready</li>
            <li>HACCP & ISO 22000</li>
            <li>Kosher · Halal · Non-GMO</li>
          </ul>
        </div>
      </div>

      <div className="container-site border-t border-surface/10 pt-6 text-xs text-surface-variant">
        © 2026 Yixiang Health Foods. All rights reserved.
      </div>
    </footer>
  );
}
