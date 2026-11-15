export type CutCategory = "all" | "diced" | "whole" | "flakes";

export type Product = {
  id: string;
  sku: string;
  name: string;
  latin: string;
  lot: string;
  description: string;
  moisture: string;
  rehydrate: string;
  packaging: string;
  cutSpec: string;
  badge: string;
  waterActivity: string;
  category: CutCategory[];
  image: string;
  featured?: boolean;
  focus?: boolean;
};

export const products: Product[] = [
  {
    id: "zucchini",
    sku: "FD-ZUC-882",
    name: "FD Zucchini Slices",
    latin: "Cucurbita pepo",
    lot: "ZUC-2025",
    description:
      "Uniformly cut circular discs. Retains vibrant chlorophyll exterior and crisp dry spongy interior for premium noodle bowls and dry vegetable medleys.",
    moisture: "≤ 2.5%",
    rehydrate: "1:7 (70s)",
    packaging: "10kg Carton",
    cutSpec: "3-5mm Slices",
    badge: "100% Non-GMO",
    waterActivity: "0.19",
    category: ["whole", "diced"],
    image: "/products/zucchini.png",
    featured: true,
    focus: true,
  },
  {
    id: "onion",
    sku: "FD-ONI-707",
    name: "FD Diced White Onion",
    latin: "Allium cepa",
    lot: "ONI-2025",
    description:
      "Pungent and sweet volatile retention. Low-temperature sublimation preserves genuine allium flavor without browning or sulfur oxidation.",
    moisture: "≤ 3.0%",
    rehydrate: "1:5.5 (45s)",
    packaging: "12kg Carton",
    cutSpec: "5x5mm & 10x10mm",
    badge: "High Allicin",
    waterActivity: "0.18",
    category: ["diced"],
    image: "/products/onion.png",
    featured: true,
  },
  {
    id: "garlic",
    sku: "FD-GAR-808",
    name: "FD Minced Garlic",
    latin: "Allium sativum",
    lot: "GAR-2025",
    description:
      "Potent allicin yield with non-pungent ambient handling. Ideal for dry seasoning rubs, extruded crackers, and instant dressings.",
    moisture: "≤ 2.5%",
    rehydrate: "1:4.2 (90s)",
    packaging: "10kg Carton",
    cutSpec: "Minced 2-4mm",
    badge: "High Allicin",
    waterActivity: "0.17",
    category: ["diced", "flakes"],
    image: "/products/garlic.png",
    featured: true,
  },
  {
    id: "corn",
    sku: "FD-CRN-101",
    name: "FD Sweet Corn (Super Sweet)",
    latin: "Zea mays convar",
    lot: "CRN-2025",
    description:
      "Zero structural collapse during vacuum dehydration. Crisp, sweet snackable texture with instant tenderness upon hot water contact.",
    moisture: "≤ 2.5%",
    rehydrate: "1:4 (90s)",
    packaging: "10kg Carton",
    cutSpec: "Whole Kernel",
    badge: "Brix > 14°",
    waterActivity: "0.19",
    category: ["whole"],
    image: "/products/strawberry.png",
    featured: true,
  },
  {
    id: "peas",
    sku: "FD-PEA-202",
    name: "FD Garden Green Peas",
    latin: "Pisum sativum",
    lot: "PEA-2025",
    description:
      "Carefully skin-pricked prior to freezing to facilitate instant steam penetration and rapid reconstituted chew without toughening.",
    moisture: "≤ 2.5%",
    rehydrate: "1:4.5 (80s)",
    packaging: "10kg Carton",
    cutSpec: "Whole 7-9mm",
    badge: "Tenderometer < 100",
    waterActivity: "0.20",
    category: ["whole"],
    image: "/products/zucchini.png",
    featured: true,
  },
  {
    id: "carrots",
    sku: "FD-CAR-303",
    name: "FD Diced Carrots",
    latin: "Daucus carota",
    lot: "CAR-2025",
    description:
      "High natural carotenoid retention without fading. Multi-grid laser dicing guarantees razor-sharp cube edges and clean dispersion.",
    moisture: "≤ 3.0%",
    rehydrate: "1:6 (60s)",
    packaging: "12kg Carton",
    cutSpec: "3x3mm, 5x5mm, 10x10mm",
    badge: "Beta-Carotene Rich",
    waterActivity: "0.22",
    category: ["diced"],
    image: "/products/onion.png",
    featured: true,
  },
  {
    id: "peppers",
    sku: "FD-PEP-404",
    name: "FD Bell Pepper Flakes",
    latin: "Capsicum annuum",
    lot: "PEP-2025",
    description:
      "Intense capsicum aroma with zero bitter notes. Ideal visual particulate for seasoning packets, artisan pizza toppings, and skillet packs.",
    moisture: "≤ 2.5%",
    rehydrate: "1:6.5 (50s)",
    packaging: "8kg Carton",
    cutSpec: "6x6mm / 9x9mm Flakes",
    badge: "Red & Green Blend",
    waterActivity: "0.18",
    category: ["flakes", "diced"],
    image: "/products/strawberry.png",
  },
  {
    id: "spinach",
    sku: "FD-SPN-505",
    name: "FD Spinach Flakes",
    latin: "Spinacia oleracea",
    lot: "SPN-2025",
    description:
      "High chlorophyll density. Reconstitutes within seconds, imparting deep green visual clarity in artisan pastas and smoothie packs.",
    moisture: "≤ 2.5%",
    rehydrate: "1:7.2 (60s)",
    packaging: "8kg Carton",
    cutSpec: "5-10mm Flakes / 60 Mesh",
    badge: "High Chlorophyll",
    waterActivity: "0.17",
    category: ["flakes"],
    image: "/products/zucchini.png",
  },
  {
    id: "broccoli",
    sku: "FD-BRO-606",
    name: "FD Broccoli Florets",
    latin: "Brassica oleracea",
    lot: "BRO-2025",
    description:
      "Carefully graded head florets. Retains cruciferous textures without sulfurous off-notes after rapid hot rehydration.",
    moisture: "≤ 3.0%",
    rehydrate: "1:5.0 (3.0 min)",
    packaging: "10kg Carton",
    cutSpec: "10-20mm Buds / Diced",
    badge: "Floret Graded",
    waterActivity: "0.21",
    category: ["whole", "diced"],
    image: "/products/garlic.png",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/quality", label: "Quality" },
  { href: "/supply", label: "US Supply" },
  { href: "/request-quote", label: "Contact" },
] as const;

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function filterProducts(category: CutCategory, query = "") {
  const q = query.trim().toLowerCase();
  return products.filter((p) => {
    const catOk = category === "all" || p.category.includes(category);
    const qOk =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.cutSpec.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q);
    return catOk && qOk;
  });
}
