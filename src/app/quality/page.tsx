import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Quality, Safety & Certifications",
};

export default function QualityPage() {
  return (
    <PlaceholderPage
      title="Quality, Safety & Certifications"
      body="Full certification dossiers (BRCGS, FSMA, HACCP, Kosher, Organic) will live here. Request a COA pack from the RFQ portal in the meantime."
    />
  );
}
