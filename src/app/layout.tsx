import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
  metadataBase: new URL(wwwBaseUrl),
  keywords: [
    "product design",
    "web development",
    "saas mvp",
    "ai automation",
    "seo",
    "conversion rate optimization",
    "reframe labs",
    "software agency",
    "ui/ux design",
    "next.js development",
    "react development",
  ],
  title: "Reframe Labs - We Build, Scale & Grow Your Startup",
  description:
    "Reframe Labs is a software design and development agency that helps startups and scale-ups build high-quality products, from MVP to enterprise-grade applications. We specialize in product design, web development, AI automations, and growth.",
  alternates: {
    canonical: wwwBaseUrl,
  },
  openGraph: {
    title: "Reframe Labs - We Build, Scale & Grow Your Startup",
    siteName: "Reframe Labs",
    description:
      "Reframe Labs is a software design and development agency that helps startups and scale-ups build high-quality products, from MVP to enterprise-grade applications. We specialize in product design, web development, AI automations, and growth.",
    images: ["/og/home.png"],
    url: wwwBaseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Reframe Labs - We Build, Scale & Grow Your Startup",
    description:
      "Reframe Labs is a software design and development agency that helps startups and scale-ups build high-quality products, from MVP to enterprise-grade applications. We specialize in product design, web development, AI automations, and growth.",
    images: ["/og/home.png"],
    creator: "@bhyte_software",
  },
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased select-none font-inter`}
      >
        <Analytics />
        <main className=" w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
