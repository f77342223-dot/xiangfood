import { Hero } from "@/components/home/Hero";
import { CapabilityProof } from "@/components/home/CapabilityProof";
import { ProductLineup } from "@/components/home/ProductLineup";
import { Manufacturing } from "@/components/home/Manufacturing";
import { Applications } from "@/components/home/Applications";
import { Compliance } from "@/components/home/Compliance";
import { SampleCta } from "@/components/home/SampleCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityProof />
      <ProductLineup />
      <Manufacturing />
      <Applications />
      <Compliance />
      <SampleCta />
    </>
  );
}
