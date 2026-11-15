import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "soft" | "accent";
}) {
  const tones = {
    primary: "bg-primary text-on-primary",
    soft: "bg-primary-container/10 text-primary",
    accent: "bg-tertiary-fixed text-on-tertiary-fixed",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-technical text-[11px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
