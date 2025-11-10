import { Separator } from "@/components/ui/separator";
import { brandingProcess, brandingFaq } from "@/constants";
import BrandingHero from "@/sections/branding-hero";
import BrandingServices from "@/sections/branding-services";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import Process from "@/sections/process";
import Testimonials from "@/sections/testimonials";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co/";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "branding services",
        "brand strategy",
        "visual identity design",
        "brand guidelines",
        "rebranding",
    ],
    title: "Branding Services - Reframe Labs",
    description:
        "Create a strong, memorable brand with Reframe Labs's branding services. We offer brand strategy, visual identity design, and messaging to help your startup stand out.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/branding`,
    },
    openGraph: {
        title: "Branding Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Create a strong, memorable brand with Reframe Labs's branding services. We offer brand strategy, visual identity design, and messaging to help your startup stand out.",
        images: ["/og/branding.png"],
        url: `${wwwBaseUrl}/services/branding`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Branding Services - Reframe Labs",
        description:
            "Create a strong, memorable brand with Reframe Labs's branding services. We offer brand strategy, visual identity design, and messaging to help your startup stand out.",
        images: ["/og/branding.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const BrandingPage = () => {
    return (
        <div>
            <BrandingHero />
            <BrandingServices />
            <Process
                headingOne="Brand"
                headingTwo="Strategy"
                description="Our branding process helps define your unique identity, craft compelling messaging, and create a cohesive visual presence that resonates with your audience."
                processSteps={brandingProcess}
            />
            <div className=" md:-mt-20" />
            <Cta title="Brand Strategy That Paints Impact" />
            <div className=" relative h-32 md:h-44">
                <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                    <Separator orientation="vertical" />
                    <Separator orientation="vertical" />
                </div>
            </div>
            <Testimonials />
            <Faqs faqs={brandingFaq} />
        </div>
    );
}

export default BrandingPage;