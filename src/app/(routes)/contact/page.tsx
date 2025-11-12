import OfferBanner from "@/components/common/offer-banner";
import ContactHero from "@/sections/contact-hero";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const wwwBaseUrl = "https://reframelabs.co";

export const metadata: Metadata = {
    metadataBase: new URL(wwwBaseUrl),
    keywords: [
        "contact reframe labs",
        "software development inquiry",
        "get a quote",
        "book a call",
        "startup consultation",
    ],
    title: "Contact Reframe Labs - Let's Build Together",
    description:
        "Get in touch with Reframe Labs to discuss your project. Whether you need product design, web development, or an MVP, our team is ready to help you build and scale your startup.",
    alternates: {
        canonical: `${wwwBaseUrl}/contact`,
    },
    openGraph: {
        title: "Contact Reframe Labs - Let's Build Together",
        siteName: "Reframe Labs",
        description:
            "Get in touch with Reframe Labs to discuss your project. Whether you need product design, web development, or an MVP, our team is ready to help you build and scale your startup.",
        images: ["/og/contact.png"],
        url: `${wwwBaseUrl}/contact`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Reframe Labs - Let's Build Together",
        description:
            "Get in touch with Reframe Labs to discuss your project. Whether you need product design, web development, or an MVP, our team is ready to help you build and scale your startup.",
        images: ["/og/contact.png"],
        creator: "@bhyte_software",
    },
    icons: "/favicon.ico",
};

const ContactPage = () => {
    return (
        <div>
            <header className=" hidden md:block w-full h-fit fixed top-0 bg-background z-[99999] border-b">
                <OfferBanner />
                <nav className=" w-full py-2 rounded-lg z-50 relative flex items-center justify-center">
                    <Link href="/">
                        <div className=" relative md:h-10 md:w-[8rem]">
                            <Image fill src="/assets/logo.svg" className=" object-contain" alt="Reframe Labs Logo" />
                        </div>
                    </Link>
                </nav>
            </header>
            <ContactHero />
        </div>
    );
}

export default ContactPage;