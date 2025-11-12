import { Separator } from "@/components/ui/separator";
import { aiAutomationProcess, aiAutomationsFaq } from "@/constants";
import AiAutomationsServices from "@/sections/ai-services";
import AutomationHero from "@/sections/automation-hero";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import Process from "@/sections/process";
import Testimonials from "@/sections/testimonials";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "ai automation services",
        "workflow automation",
        "intelligent data analytics",
        "ai chatbots",
        "personalization engines",
    ],
    title: "AI Automations & Insights Services - Reframe Labs",
    description:
        "Leverage AI to automate workflows, gain intelligent insights, and deliver personalized experiences. Reframe Labs offers custom AI solutions to help your business grow.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/ai-automations`,
    },
    openGraph: {
        title: "AI Automations & Insights Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Leverage AI to automate workflows, gain intelligent insights, and deliver personalized experiences. Reframe Labs offers custom AI solutions to help your business grow.",
        images: ["/og/ai.png"],
        url: `${wwwBaseUrl}/services/ai-automations`,
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Automations & Insights Services - Reframe Labs",
        description:
            "Leverage AI to automate workflows, gain intelligent insights, and deliver personalized experiences. Reframe Labs offers custom AI solutions to help your business grow.",
        images: ["/og/ai.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const AiAutomationsPage = () => {
    return (
        <div>
            <AutomationHero />
            <AiAutomationsServices />
            <Process
                headingOne="AI"
                headingTwo="Automation"
                description="Our AI Automations & Insights process uncovers automation opportunities, designs and builds custom AI solutions, and ensures seamless integration and ongoing optimizations."
                processSteps={aiAutomationProcess}
            />
            <div className=" md:-mt-20" />
            <Cta title="Get Started with AI Automation" />
            <div className=" relative h-32 md:h-44">
                <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                    <Separator orientation="vertical" />
                    <Separator orientation="vertical" />
                </div>
            </div>
            <Testimonials />
            <Faqs faqs={aiAutomationsFaq} />
        </div>
    );
}

export default AiAutomationsPage;