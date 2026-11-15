import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "US Supply & Logistics",
};

export default function SupplyPage() {
  return (
    <PlaceholderPage
      title="US Supply & Logistics"
      body="Port clearance, dual-coast warehousing, and packaging options (bulk bags / nitrogen flush) will be documented on this page next."
    />
  );
}
