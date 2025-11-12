import { parallaxProducts, webDevelopmentProcess, webDevelopmentFaq } from "@/constants";
import { Metadata } from "next";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import { HeroParallax } from "@/sections/hero-parallax";
import Process from "@/sections/process";
import RecentWork from "@/sections/recent-work";
import Testimonials from "@/sections/testimonials";
import WebDevelopmentServices from "@/sections/web-dev-services";
import WhyUsWebDevelopment from "@/sections/why-us-web-dev";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "web development services",
        "custom web applications",
        "next.js development",
        "react development",
        "full-stack development",
    ],
    title: "Web Development Services - Reframe Labs",
    description:
        "Build high-performance, scalable web applications with Reframe Labs. Our expert developers specialize in Next.js, React, and modern web technologies to bring your vision to life.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/web-development`,
    },
    openGraph: {
        title: "Web Development Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Build high-performance, scalable web applications with Reframe Labs. Our expert developers specialize in Next.js, React, and modern web technologies to bring your vision to life.",
        images: ["/og/web-dev.png"],
        url: `${wwwBaseUrl}/services/web-development`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services - Reframe Labs",
        description:
            "Build high-performance, scalable web applications with Reframe Labs. Our expert developers specialize in Next.js, React, and modern web technologies to bring your vision to life.",
        images: ["/og/web-dev.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const WebDevelopmentPage = () => {
    return (
        <div>
            <HeroParallax products={parallaxProducts} />
            <WebDevelopmentServices />
            <RecentWork />
            <Cta title="We Design Products That People Can’t Ignore" />
            <WhyUsWebDevelopment />
            <Process
                headingOne="Web"
                headingTwo="Development"
                description="We follow industry best practices to build scalable, performant web applications at scale..."
                processSteps={webDevelopmentProcess}
            />
            <Testimonials />
            <Faqs faqs={webDevelopmentFaq} />
        </div>
    );
}

export default WebDevelopmentPage;