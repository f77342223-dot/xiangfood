import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function PlaceholderPage({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="container-site py-24">
      <span className="font-technical text-[11px] font-bold text-secondary">
        Coming Next
      </span>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-primary">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">{body}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/products">Browse Products</Button>
        <Button href="/request-quote" variant="accent">
          Request a Quote
        </Button>
        <Link href="/" className="self-center text-sm font-semibold text-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
