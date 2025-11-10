import { mvpProcess, mvpFaq } from "@/constants";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import MvpHero from "@/sections/mvp-hero";
import MvpServices from "@/sections/mvp-services";
import MvpStats from "@/sections/mvp-stats";
import Process from "@/sections/process";
import RecentWork from "@/sections/recent-work";
import Testimonials from "@/sections/testimonials";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co/";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "saas mvp development",
        "minimum viable product",
        "startup mvp",
        "rapid prototyping",
        "market validation",
    ],
    title: "SaaS MVP Development Services - Reframe Labs",
    description:
        "Launch your SaaS idea quickly with Reframe Labs's MVP development services. We help you build, validate, and iterate on your Minimum Viable Product to achieve product-market fit.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/saas-mvp`,
    },
    openGraph: {
        title: "SaaS MVP Development Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Launch your SaaS idea quickly with Reframe Labs's MVP development services. We help you build, validate, and iterate on your Minimum Viable Product to achieve product-market fit.",
        images: ["/og/mvp.png"],
        url: `${wwwBaseUrl}/services/saas-mvp`,
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS MVP Development Services - Reframe Labs",
        description:
            "Launch your SaaS idea quickly with Reframe Labs's MVP development services. We help you build, validate, and iterate on your Minimum Viable Product to achieve product-market fit.",
        images: ["/og/mvp.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const SaasPage = () => {
    return (
        <div>
            <MvpHero />
            <MvpStats />
            <MvpServices />
            <RecentWork />
            <Cta title="Ready To Launch Your MVP Now?" />
            <Process
                headingOne="MVP"
                headingTwo="Dev"
                description="Our MVP development process is designed to get your product to market fast, with the right features and a strong foundation for growth. We validate your idea, design a user-friendly experience, build with agility, and iterate based on real user feedback."
                processSteps={mvpProcess}
            />
            <Testimonials />
            <Faqs faqs={mvpFaq} />
        </div>
    );
}

export default SaasPage;