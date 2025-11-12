import { TextAnimate } from "@/components/common/animated-text";
import PricingCards from "@/components/common/pricing-cards";
import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import CompanyLogos from "./company-logos";

const PricingHero = () => {
    return (
        <section className=" relative w-full flex flex-col justify-center pt-40 md:pt-48">
            <div className=" px-4 md:px-0 w-full max-w-6xl mx-auto flex flex-col items-center z-50 relative cursor-pointer">
                <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
                    <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
                    <div className=" h-4 ml-2">
                        <Separator orientation="vertical" />
                    </div>
                    <span className=" ml-2 text-sm md:text-base">Pricing</span>
                </div>
                <TextAnimate animation="blurInDown" as="h1" startOnView className="mt-4 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter text-center capitalize md:max-w-[15ch] text-balance">
                    Cheaper than churned users
                </TextAnimate>
                <p className="opacity-70 max-w-prose mx-auto text-center text-balance mt-2 text-sm md:text-base">
                    From design sprints to full-scale product teams, our plans give you unlimited requests, fast delivery, and seamless communication.
                </p>

                <div className=" hidden md:inline-flex items-center gap-3 mt-6">
                    <Link href="/contact">
                        <PrimaryButton text="Book Intro Call" />
                    </Link>
                    <Link href="/work">
                        <SecondaryButton text="Our Work" />
                    </Link>
                </div>

                <div className=" md:hidden inline-flex items-center gap-2 mt-4">
                    <Link href="/contact">
                        <Button>Book Intro Call</Button>
                    </Link>
                    <Link href="/work">
                        <Button variant="secondary">Our Work</Button>
                    </Link>
                </div>
            </div>
            <div className=" px-4 md:px-0">
                <PricingCards />
            </div>
            <div className=" mt-20" />
            <CompanyLogos />
            <div className=" mt-10" />

            <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
        </section>
    );
}

export default PricingHero;