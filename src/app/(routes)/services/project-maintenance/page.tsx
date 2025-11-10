import { Metadata } from "next";
import { projectMaintenanceFaq } from "@/constants";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import SupportHero from "@/sections/support-hero";
import SupportServices from "@/sections/support-services";

const wwwBaseUrl = "https://reframelabs.co/";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "project maintenance services",
        "software support",
        "application maintenance",
        "bug fixes",
        "performance monitoring",
    ],
    title: "Project Maintenance & Support - Reframe Labs",
    description:
        "Ensure your application runs smoothly with Reframe Labs's project maintenance and support services. We offer bug fixes, performance monitoring, and security updates.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/project-maintenance`,
    },
    openGraph: {
        title: "Project Maintenance & Support - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Ensure your application runs smoothly with Reframe Labs's project maintenance and support services. We offer bug fixes, performance monitoring, and security updates.",
        images: ["/og/support.png"],
        url: `${wwwBaseUrl}/services/project-maintenance`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Maintenance & Support - Reframe Labs",
        description:
            "Ensure your application runs smoothly with Reframe Labs's project maintenance and support services. We offer bug fixes, performance monitoring, and security updates.",
        images: ["/og/support.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const ProjectMaintenancePage = () => {
    return (
        <div>
            <SupportHero />
            <SupportServices />
            <Cta title="Let's Get You To The Top Of Search" />
            <Faqs faqs={projectMaintenanceFaq} />
        </div>
    );
}

export default ProjectMaintenancePage;