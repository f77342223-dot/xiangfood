"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/products";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface-container-lowest/95 backdrop-blur-md">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            Yixiang Health Foods
          </span>
          <span className="font-technical text-[11px] font-semibold text-secondary">
            Industrial Lyophilized Ingredients
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-2.5 py-1.5 font-technical text-[11px] transition-colors ${
                  active
                    ? "bg-secondary-container font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/request-quote?intent=sample"
            className="font-technical text-[11px] font-semibold text-primary hover:text-primary-container"
          >
            Request a Sample
          </Link>
          <Button href="/request-quote" variant="accent" className="px-4 py-2 text-sm">
            <span className="material-symbols-outlined text-[16px]">
              request_quote
            </span>
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-primary lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-outline-variant/40 bg-surface-container-lowest px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 font-display text-sm font-semibold text-primary hover:bg-surface-container-low"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/request-quote" variant="accent" className="mt-2">
              Request a Quote
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
