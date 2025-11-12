import AllWork from "@/sections/all-work";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "reframe labs portfolio",
        "software development projects",
        "case studies",
        "ui/ux design work",
        "saas mvp examples",
    ],
    title: "Our Work - Reframe Labs Portfolio",
    description:
        "Explore the portfolio of Reframe Labs. See our case studies and recent projects in product design, web development, and AI automation for startups and scale-ups.",
    alternates: {
        canonical: `${wwwBaseUrl}/work`,
    },
    openGraph: {
        title: "Our Work - Reframe Labs Portfolio",
        siteName: "Reframe Labs",
        description:
            "Explore the portfolio of Reframe Labs. See our case studies and recent projects in product design, web development, and AI automation for startups and scale-ups.",
        images: ["/og/work.png"],
        url: `${wwwBaseUrl}/work`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Work - Reframe Labs Portfolio",
        description:
            "Explore the portfolio of Reframe Labs. See our case studies and recent projects in product design, web development, and AI automation for startups and scale-ups.",
        images: ["/og/work.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const WorkPage = () => {
    return (
        <div>
            <AllWork />
        </div>
    );
}

export default WorkPage;