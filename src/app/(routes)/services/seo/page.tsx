import { seoGeoProcess, webSeoFaq } from "@/constants";
import { Metadata } from "next";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import Process from "@/sections/process";
import SeoHero from "@/sections/seo-hero";
import SeoServices from "@/sections/seo-services";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "seo services",
        "search engine optimization",
        "technical seo",
        "local seo",
        "link building",
    ],
    title: "Web SEO Services - Reframe Labs",
    description:
        "Improve your search engine rankings and drive organic traffic with Reframe Labs's SEO services. We offer technical SEO, content strategy, and link building to help you grow.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/seo`,
    },
    openGraph: {
        title: "Web SEO Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Improve your search engine rankings and drive organic traffic with Reframe Labs's SEO services. We offer technical SEO, content strategy, and link building to help you grow.",
        images: ["/og/seo.png"],
        url: `${wwwBaseUrl}/services/seo`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Web SEO Services - Reframe Labs",
        description:
            "Improve your search engine rankings and drive organic traffic with Reframe Labs's SEO services. We offer technical SEO, content strategy, and link building to help you grow.",
        images: ["/og/seo.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const SeoPage = () => {
    return (
        <div>
            <SeoHero />
            <SeoServices />
            <Process
                headingOne="SEO"
                headingTwo="& GEO"
                description="Our SEO & GEO process is designed to maximize your visibility, authority, and conversions. From in-depth keyword research to technical optimization and ongoing analytics, we ensure your brand stands out locally and globally."
                processSteps={seoGeoProcess}
            />
            <div className=" -mt-20" />
            <Cta title="Let's Get You To The Top Of Search" />
            <Faqs faqs={webSeoFaq} />
        </div>
    );
}

export default SeoPage;