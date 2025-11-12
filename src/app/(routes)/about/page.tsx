import About from "@/sections/about";
import AboutHero from "@/sections/about-hero";
import Faqs from "@/sections/faqs";
import Stats from "@/sections/stats";
import WhyUs from "@/sections/why-us";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "about reframe labs",
        "software development team",
        "expert developers",
        "design and development agency",
        "startup partner",
    ],
    title: "About Reframe Labs - Our Mission, Team, and Story",
    description:
        "Learn about Reframe Labs, a design and development agency dedicated to helping startups succeed. Meet our team of experts and discover our mission to build exceptional digital products.",
    alternates: {
        canonical: `${wwwBaseUrl}/about`,
    },
    openGraph: {
        title: "About Reframe Labs - Our Mission, Team, and Story",
        siteName: "Reframe Labs",
        description:
            "Learn about Reframe Labs, a design and development agency dedicated to helping startups succeed. Meet our team of experts and discover our mission to build exceptional digital products.",
        images: ["/og/about.png"],
        url: `${wwwBaseUrl}/about`,
    },
    twitter: {
        card: "summary_large_image",
        title: "About Reframe Labs - Our Mission, Team, and Story",
        description:
            "Learn about Reframe Labs, a design and development agency dedicated to helping startups succeed. Meet our team of experts and discover our mission to build exceptional digital products.",
        images: ["/og/about.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const AboutPage = () => {
    return (
        <div>
            <AboutHero />
            <About />
            <Stats />
            <WhyUs />
            <Faqs />
        </div>
    );
}

export default AboutPage;