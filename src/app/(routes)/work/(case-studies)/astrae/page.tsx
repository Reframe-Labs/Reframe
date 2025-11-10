import { BusinessImpactTable } from "@/components/common/business-impact-table";
import { TransformationTable } from "@/components/common/transformation-table";
import BeforeAndAfter from "@/sections/before-after";
import CaseStudyDetails from "@/sections/case-study-details";
import CaseStudyHero from "@/sections/case-study-hero";
import KeyFeatures from "@/sections/key-features";
import RelatedCaseStudies from "@/sections/related-case-studies";
import SingleReview from "@/sections/single-review";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co/";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "astrae case study",
        "next.js migration",
        "webflow to next.js",
        "performance optimization",
        "reframe labs case study",
    ],
    title: "Astrae Case Study - Reframe Labs",
    description:
        "See how Reframe Labs migrated the Astrae Design platform from Webflow to Next.js, resulting in significant performance improvements and increased organic traffic.",
    alternates: {
        canonical: `${wwwBaseUrl}/work/astrae`,
    },
    openGraph: {
        title: "Astrae Case Study - Reframe Labs",
        siteName: "Reframe Labs",
        description:
            "See how Reframe Labs migrated the Astrae Design platform from Webflow to Next.js, resulting in significant performance improvements and increased organic traffic.",
        images: ["/og/case-study-astrae.png"],
        url: `${wwwBaseUrl}/work/astrae`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Astrae Case Study - Reframe Labs",
        description:
            "See how Reframe Labs migrated the Astrae Design platform from Webflow to Next.js, resulting in significant performance improvements and increased organic traffic.",
        images: ["/og/case-study-astrae.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const CaseStudy = () => {
    return (
        <div>
            <CaseStudyHero
                color="#0065FC"
                title="Astrae Design Platform Now Runs on Next.Js"
                imageOne="/assets/astrae-showcase.png"
                imageTwo="/assets/astrae-dashboard.png"
                imageThree="/assets/astrae-login.png"
                link="https://www.astrae.com"
                name="Radoslav Bali"
                profileImage="/assets/dino-profile.png"
                project="Astrae Design"
                role="Design Lead at Astrae"
                description="Reframe Labs allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house."
            />
            <CaseStudyDetails />
            <TransformationTable />
            <BeforeAndAfter />
            <BusinessImpactTable />
            <KeyFeatures />
            <SingleReview />
            <RelatedCaseStudies />
        </div>
    );
}

export default CaseStudy;