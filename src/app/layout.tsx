import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { TrustBanner } from "@/components/layout/TrustBanner";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SampleDock } from "@/components/layout/SampleDock";
import { SampleKitProvider } from "@/lib/sample-kit";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Yixiang Health Foods | Industrial Freeze-Dried Vegetables",
    template: "%s | Yixiang Health Foods",
  },
  description:
    "US B2B supplier of precision lyophilized vegetable ingredients. Farm-to-batch traceability, FSMA-ready compliance, and 48-hour sample dispatch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-surface text-on-surface">
        <SampleKitProvider>
          <TrustBanner />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <SampleDock />
        </SampleKitProvider>
      </body>
    </html>
  );
}
