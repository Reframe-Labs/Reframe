import { Separator } from "@/components/ui/separator";
import { migrationProcess, platformMigrationFaq } from "@/constants";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import PlatformMigrationHero from "@/sections/migration-hero";
import MigrationServices from "@/sections/migration-services";
import Process from "@/sections/process";
import RecentWork from "@/sections/recent-work";
import Testimonials from "@/sections/testimonials";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "platform migration services",
        "react migration",
        "next.js migration",
        "legacy system upgrade",
        "data migration",
    ],
    title: "Platform Migration Services - Reframe Labs",
    description:
        "Migrate your legacy application to a modern, high-performance stack with Reframe Labs. We specialize in seamless migrations to React and Next.js with minimal downtime.",
    alternates: {
        canonical: `${wwwBaseUrl}/services/platform-migration`,
    },
    openGraph: {
        title: "Platform Migration Services - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "Migrate your legacy application to a modern, high-performance stack with Reframe Labs. We specialize in seamless migrations to React and Next.js with minimal downtime.",
        images: ["/og/migrate.png"],
        url: `${wwwBaseUrl}/services/platform-migration`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Platform Migration Services - Reframe Labs",
        description:
            "Migrate your legacy application to a modern, high-performance stack with Reframe Labs. We specialize in seamless migrations to React and Next.js with minimal downtime.",
        images: ["/og/migrate.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const PlatformMigrationPage = () => {
    return (
        <div>
            <PlatformMigrationHero />
            <MigrationServices />
            <RecentWork />
            <Process
                headingOne="React"
                headingTwo="Migration"
                description="Our migration process ensures a seamless transition from legacy platforms to modern React or Next.js. We handle everything from assessment and planning to UI/UX redesign, backend integration, SEO and security so you get a high-performance web app with zero hassle."
                processSteps={migrationProcess}
            />
            <div className=" md:-mt-20" />
            <Cta title="Move Away from Legacy Platforms to Modern React" />
            <div className=" relative h-32 md:h-44">
                <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                    <Separator orientation="vertical" />
                    <Separator orientation="vertical" />
                </div>
            </div>
            <Testimonials />
            <Faqs faqs={platformMigrationFaq} />
        </div>
    );
}

export default PlatformMigrationPage;