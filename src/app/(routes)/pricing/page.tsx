import ClientStories from "@/sections/client-stories";
import Faqs from "@/sections/faqs";
import PricingHero from "@/sections/pricing-hero";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co/";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "reframe labs pricing",
        "software development cost",
        "agency subscription",
        "product design pricing",
        "web development pricing",
    ],
    title: "Pricing - Reframe Labs",
    description:
        "Explore pricing options for Reframe Labs's design and development services. We offer flexible subscription plans to fit your startup's needs, from MVP to full-scale product development.",
    alternates: {
        canonical: `${wwwBaseUrl}/pricing`,
    },
    openGraph: {
        title: "Pricing - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Explore pricing options for Reframe Labs's design and development services. We offer flexible subscription plans to fit your startup's needs, from MVP to full-scale product development.",
        images: ["/og/pricing.png"],
        url: `${wwwBaseUrl}/pricing`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing - Reframe Labs",
        description:
            "Explore pricing options for Reframe Labs's design and development services. We offer flexible subscription plans to fit your startup's needs, from MVP to full-scale product development.",
        images: ["/og/pricing.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const PricingPage = () => {
    return (
        <div>
            <PricingHero />
            <ClientStories title="What our clients said about us" />
            <Faqs />
        </div>
    );
}

export default PricingPage;