import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Industrial Applications",
};

export default function ApplicationsPage() {
  return (
    <PlaceholderPage
      title="Industrial Applications"
      body="Detailed application guides for soups, seasonings, MRE, and pet nutrition are next. Browse the catalog or request samples today."
    />
  );
}
