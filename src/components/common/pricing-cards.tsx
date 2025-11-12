"use client"

import { motion } from "framer-motion";
import { BanknoteArrowDown, CirclePause, CirclePercent, HandCoins, HeartPlus, LaptopMinimalCheck, MessageCirclePlus, PackageMinus, PackagePlus, Pause, SplinePointer, SquareChartGantt, UserStar } from "lucide-react";
import { useState } from "react";
import { BsStripe } from "react-icons/bs";
import { CustomQuoteDialog } from "./custom-quote-dialog";
import PrimaryButton from "./primary-button";
import Image from "next/image";

const PricingCards = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubscribeClick = async (plan: string, amount: number) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/subscriptions/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    plan,
                    amount,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create subscription');
            }

            const data = await response.json();

            if (data.checkoutUrl) {
                window.location.href = data.checkoutUrl;
            } else {
                throw new Error('No checkout URL returned');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            alert(error instanceof Error ? error.message : 'Failed to initiate checkout');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <motion.div
            className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4  mt-12 relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
        >

            <motion.div
                className=" bg-secondary border p-1.5 rounded-xl hover:shadow hover:bg-white/30 flex flex-col gap-2"
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 40,
                        scale: 0.95
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            duration: 0.6,
                            ease: "easeOut"
                        }
                    }
                }}
            >
                <div className=" bg-white border rounded-lg p-4 flex flex-col items-start">
                    <h4 className=" font-medium">On-Demand Product Team</h4>
                    <p className=" opacity-70 text-sm md:text-[15px] md:text-balance">
                        Perfect for startups and growing brands that need a senior design + dev team without the overhead.
                    </p>
                    <ul className=" flex flex-wrap gap-1.5 mt-2">
                        <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]">Fast-growing brands</li>
                        <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]">Startups</li>
                        <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]">Agencies</li>
                    </ul>

                    <h3 className=" font-medium text-lg md:text-xl tracking-tight mt-4">$1,999/month</h3>
                </div>
                <div
                    onClick={() => handleSubscribeClick('On-Demand Product Team', 1999)}
                    className="w-full"
                >
                    <PrimaryButton fullWidth text={isLoading ? "Processing..." : "Subscribe Now"} />
                </div>

                <div className=" p-4 bg-white border rounded-lg flex flex-col gap-2.5 items-start w-full">
                    <div className="flex items-center gap-2 text-foreground/70">
                        <LaptopMinimalCheck className=" size-4 shrink-0 md:size-5" />
                        <span className=" text-sm md:text-[15px]">2-3 tasks per week</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                        <PackagePlus className=" size-4 shrink-0 md:size-5" />
                        <span className=" text-sm md:text-[15px]">All our services into one package</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                        <Pause className=" size-4 shrink-0 md:size-5" />
                        <span className=" text-sm md:text-[15px]">No long-term commitment, pause or cancel anytime</span>
                    </div>
                    <div className="flex items-start md:items-center gap-2 text-foreground/70">
                        <MessageCirclePlus className=" size-4 shrink-0 md:size-5 mt-1 md:mt-0" />
                        <span className=" text-sm md:text-[15px]">Ongoing WhatsApp communication & optional biweekly meetings</span>
                    </div>
                    <div className="flex items-start md:items-center gap-2 text-foreground/70">
                        <UserStar className=" size-4 shrink-0 md:size-5 mt-1 md:mt-0" />
                        <span className=" text-sm md:text-[15px]">Assign as many stakeholders or brands as you need</span>
                    </div>
                </div>

                <div className=" w-full grid grid-cols-2 gap-2">
                    <div className=" bg-white border rounded-lg p-4 flex flex-col items-start">
                        <CirclePause className=" size-4 shrink-0 md:size-5" />
                        <span className=" mt-2 text-sm md:text-[15px] font-medium">Pause Anytime</span>
                        <p className=" text-sm md:text-[15px] opacity-70">Put your subscription on hold whenever you want, for up to 2 months.</p>
                    </div>

                    <div className=" bg-white border rounded-lg p-4 flex flex-col items-start">
                        <CirclePercent className=" size-4 shrink-0 md:size-5" />
                        <span className=" mt-2 text-sm md:text-[15px] font-medium">35% Discount</span>
                        <p className=" text-sm md:text-[15px] opacity-70">Limited-time launch offer for first two clients. Pay $1,299 for the first month.</p>
                    </div>
                </div>

                <div className=" mt-1 mb-1.5 w-full text-foreground/70 flex items-center justify-center gap-2">
                    <Image width={20} height={20} src="/assets/cryptomus.svg" alt="Cryptomus Logo" />
                    <span className=" text-xs md:text-sm">Checkout powered by Cryptomus</span>
                </div>
            </motion.div>

            <motion.div
                className=" bg-secondary border p-1.5 rounded-xl hover:shadow hover:bg-white/30 flex flex-col gap-2"
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 40,
                        scale: 0.95
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            duration: 0.6,
                            ease: "easeOut"
                        }
                    }
                }}
            >
                <div className=" bg-white border rounded-lg p-4 flex flex-col items-start">
                    <h4 className=" font-medium">Custom Quote</h4>
                    <p className=" opacity-70 text-sm md:text-[15px] md:text-balance">
                        Need something specific? Get a tailored solution for one-off or large-scale projects.
                    </p>
                    <ul className=" flex flex-wrap gap-1.5 mt-2">
                        <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]">Enterprises</li>
                        <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]">Product Teams</li>
                    </ul>

                    <div className=" inline-flex items-baseline gap-2 mt-4">
                        <span className=" text-sm md:text-[15px] opacity-70">Starting at: </span>
                        <h3 className=" font-medium text-lg md:text-xl tracking-tight">$2,499</h3>
                    </div>
                </div>
                <CustomQuoteDialog />
                <div className=" p-4 bg-white border rounded-lg flex flex-col gap-2.5 items-start w-full">
                    <div className="flex items-start md:items-center gap-2 text-foreground/70">
                        <SquareChartGantt className=" size-4 shrink-0 md:size-5 mt-1 md:mt-0" />
                        <span className=" text-sm md:text-[15px]">Custom scope & timeline based on your goals</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                        <HandCoins className="size-4 shrink-0 md:size-5" />
                        <span className=" text-sm md:text-[15px]">Transparent pricing before we start</span>
                    </div>
                    <div className="flex items-start md:items-center gap-2 text-foreground/70">
                        <SplinePointer className="mt-1 md:mt-0 size-4 shrink-0 md:size-5" />
                        <span className=" text-sm md:text-[15px]">Ideal for redesigns, MVPs, and enterprise builds</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                        <PackageMinus className=" size-4 shrink-0 md:size-5" />
                        <span className=" text-sm md:text-[15px]">Choose only the services you need</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                        <HeartPlus className=" size-4 shrink-0 md:size-5" />
                        <span className=" text-sm md:text-[15px]">Post-launch support available on request</span>
                    </div>
                </div>

                <div className=" w-full grid grid-cols-2 gap-2">
                    <div className=" bg-white border rounded-lg p-4 flex flex-col items-start">
                        <CirclePause className=" size-4 shrink-0 md:size-5" />
                        <span className=" mt-2 text-sm md:text-[15px] font-medium">Pause Anytime</span>
                        <p className=" text-sm md:text-[15px] opacity-70">Put your subscription on hold whenever you want, for up to 2 months.</p>
                    </div>

                    <div className=" bg-white border rounded-lg p-4 flex flex-col items-start">
                        <BanknoteArrowDown className=" size-4 shrink-0 md:size-5" />
                        <span className=" mt-2 text-sm md:text-[15px] font-medium">Try for a week</span>
                        <p className=" text-sm md:text-[15px] opacity-70 md:text-balance">Not a fit? Get 75% of the total amount billed refunded, no questions asked</p>
                    </div>
                </div>

                <div className=" mt-1 mb-1.5 w-full text-foreground/70 flex items-center justify-center gap-2">
                    <Image width={20} height={20} src="/assets/cryptomus.svg" alt="Cryptomus Logo" />
                    <span className=" text-xs md:text-sm">Checkout powered by Cryptomus</span>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default PricingCards;