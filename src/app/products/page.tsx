import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Products Catalog & Technical Specs",
  description:
    "Browse freeze-dried vegetable cut sizes, moisture specs, rehydration ratios, and request R&D sample kits.",
};

export default function ProductsPage() {
  return <ProductCatalog />;
}
