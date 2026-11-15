import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline" | "soft";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
  accent:
    "bg-tertiary-fixed-dim text-on-tertiary-fixed hover:bg-on-tertiary-container hover:text-tertiary shadow-sm",
  ghost: "bg-transparent text-primary hover:bg-surface-container",
  outline:
    "bg-transparent border border-outline-variant text-primary hover:bg-surface-container-low",
  soft: "bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-display text-base font-semibold transition-colors ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
