import ClientStories from "@/sections/client-stories";
import Cta from "@/sections/cta";
import FeaturedWork from "@/sections/featured-work";
import Hero from "@/sections/hero";
import Pricing from "@/sections/pricing";
import Services from "@/sections/services";
import { Metadata } from "next";

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

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ClientStories title="Powering ambitious teams worldwide" />
      <Services />
      <FeaturedWork />
      <div className=" -mt-0 md:-mt-14 mb-12">
        <Cta title="Explore all projects" description="Join over 20+ startups already growing with us with premium design and development services." />
      </div>
      <Pricing />
    </div>
  );
}

export default HomePage;