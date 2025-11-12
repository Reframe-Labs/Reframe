import CroHero from "@/sections/cro-hero";
import CroServices from "@/sections/cro-services";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import Process from "@/sections/process";
import RecentWork from "@/sections/recent-work";
import { croProcess, croFaq } from "@/constants";
import Testimonials from "@/sections/testimonials";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "conversion rate optimization",
        "cro services",
        "a/b testing",
        "funnel optimization",
        "ux/ui optimization",
    ],
    title: "Conversion Rate Optimization (CRO) Services - Reframe Labs",
    description:
        "Increase your website's conversions with Reframe Labs's CRO services. We use data-driven strategies, A/B testing, and UX improvements to turn more visitors into customers.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/cro`,
    },
    openGraph: {
        title: "Conversion Rate Optimization (CRO) Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Increase your website's conversions with Reframe Labs's CRO services. We use data-driven strategies, A/B testing, and UX improvements to turn more visitors into customers.",
        images: ["/og/cro.png"],
        url: `${wwwBaseUrl}/services/cro`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Conversion Rate Optimization (CRO) Services - Reframe Labs",
        description:
            "Increase your website's conversions with Reframe Labs's CRO services. We use data-driven strategies, A/B testing, and UX improvements to turn more visitors into customers.",
        images: ["/og/cro.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const CroPage = () => {
    return (
        <div>
            <CroHero />
            <CroServices />
            <RecentWork />
            <Cta title="Let’s Get You More Sales & Customers" />
            <Process
                headingOne="Web"
                headingTwo="CRO"
                description="Our CRO process is built to systematically increase your conversion rates. We combine deep analytics, rigorous testing, UX/UI improvements, and ongoing optimization to turn more visitors into customers at every stage of your funnel."
                processSteps={croProcess}
            />
            <Testimonials />
            <Faqs faqs={croFaq} />
        </div>
    );
}

export default CroPage;