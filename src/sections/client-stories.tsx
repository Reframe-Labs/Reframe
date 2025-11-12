"use client"

import { TextAnimate } from "@/components/common/animated-text";
import StoryCard from "@/components/common/story-card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import type { EmblaEventType } from "embla-carousel";
import { useCallback, useEffect, useRef, useState } from "react";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

const ClientStories = ({ title }: { title: string; }) => {
    const [api, setApi] = useState<CarouselApi>();
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const setTweenNodes = useCallback((api: CarouselApi): void => {
        if (!api) return;
        tweenNodes.current = api.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.story-card-wrapper') as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((api: CarouselApi) => {
        if (!api) return;
        tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
    }, []);

    const tweenScale = useCallback(
        (api: CarouselApi, eventName?: EmblaEventType) => {
            if (!api) return;

            const engine = api.internalEngine();
            const scrollProgress = api.scrollProgress();
            const slidesInView = api.slidesInView();
            const isScrollEvent = eventName === 'scroll';

            api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
                    const scale = numberWithinRange(tweenValue, 0.9, 1);
                    const opacity = numberWithinRange(tweenValue, 0.8, 1);
                    const tweenNode = tweenNodes.current[slideIndex];

                    if (tweenNode) {
                        tweenNode.style.transform = `scale(${scale})`;
                        tweenNode.style.opacity = opacity.toString();
                    }
                });
            });
        },
        []
    );

    useEffect(() => {
        if (!api) return;

        setTweenNodes(api);
        setTweenFactor(api);
        tweenScale(api);

        api.on('reInit', setTweenNodes);
        api.on('reInit', setTweenFactor);
        api.on('reInit', tweenScale);
        api.on('scroll', tweenScale);
        api.on('slideFocus', tweenScale);

        return () => {
            api.off('reInit', setTweenNodes);
            api.off('reInit', setTweenFactor);
            api.off('reInit', tweenScale);
            api.off('scroll', tweenScale);
            api.off('slideFocus', tweenScale);
        };
    }, [api, tweenScale, setTweenNodes, setTweenFactor]);

    return (
        <section className=" relative h-fit w-full pt-20 md:pb-20 md:pt-20">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>

            <div className=" px-4 md:px-0 max-w-6xl mx-auto w-full flex flex-col items-start">
                <TextAnimate animation="blurIn" as="h2" startOnView className="font-montserrat font-semibold text-4xl md:text-5xl tracking-tighter text-center md:text-start capitalize md:max-w-[15ch] text-balance">
                    {title}
                </TextAnimate>
            </div>

            <div className=" w-full relative group mt-8 mb-20">
                <div className="absolute top-0 bottom-0 left-0 w-[2%] md:w-[20%] z-[1] bg-gradient-to-r from-background to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-[2%] md:w-[20%] z-[1] bg-gradient-to-l from-background to-transparent" />

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="px-3 md:px-0">
                        <CarouselItem className=" basis-[98%] md:basis-1/2">
                            <StoryCard
                                coverImage="/assets/lexos-cover.png"
                                icon="/assets/lexos-icon-2.png"
                                link="https://lexosmove.com"
                                name="Dino Talaghani"
                                profile="/assets/dino.png"
                                projectPreview="/assets/lexos-showcase.png"
                                quote="&ldquo; Reframe Labs allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house &rdquo;"
                                role="Founder, Lexos Move" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[98%] md:basis-1/2">
                            <StoryCard
                                coverImage="/assets/astrae-cover.png"
                                icon="/assets/astrae-icon.png"
                                link="https://astrae.design"
                                name="Abiola Braimah"
                                profile="/assets/abiola-profile.png"
                                projectPreview="/assets/astrae-showcase.png"
                                quote="&ldquo; Reframe Labs delivered solid work with impressive responsiveness. Their technical capabilities and quick communication made them feel like a true development partner who understood our vision. &rdquo;"
                                role="Founder, Astrae Design" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[98%] md:basis-1/2">
                            <StoryCard
                                coverImage="/assets/fetchtalent-cover.png"
                                icon="/assets/fetchtalent-icon.png"
                                link="https://fetchtalent.ai"
                                name="Prasanth Raj"
                                profile="/assets/raj-profile.png"
                                projectPreview="/assets/fetchtalent-showcase.png"
                                quote="&ldquo; Working with Reframe Labs was a fantastic experience. They are a team of young professionals who are passionate about what they do. I highly recommend them to anyone looking for a top-tier software development partner. &rdquo;"
                                role="Founder and CEO, FetchTalent AI" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[98%] md:basis-1/2">
                            <StoryCard
                                coverImage="/assets/stakenet-cover.png"
                                icon="/assets/stakenet-icon.png"
                                link="https://stakenet.com"
                                name="Alan Obeng-Peprah"
                                profile="/assets/obeng.png"
                                projectPreview="/assets/stakenet-showcase.png"
                                quote="&ldquo; Reframe Labs built us a powerful AI-driven platform that accurately predicts sports outcomes. Their expertise in AI and data analytics helped us create a platform that gives our users a real competitive advantage. &rdquo;"
                                role="Co-Founder, Stakenet" />
                        </CarouselItem>
                        <CarouselItem className=" basis-[98%] md:basis-1/2">
                            <StoryCard
                                coverImage="/assets/geny-cover.png"
                                icon="/assets/geny-icon.png"
                                link="https://genysolutions.tech"
                                name="Chris Ogbuehi"
                                profile="/assets/chris.png"
                                projectPreview="/assets/geny-showcase.png"
                                quote="&ldquo; Reframe Labs delivered an exceptional landing page that perfectly captures our agency's vision and showcases our AI capabilities. Their attention to detail and technical expertise helped us establish a strong digital presence that truly represents what we do. &rdquo;"
                                role="CEO, Gen Y Solutions" />
                        </CarouselItem>
                    </CarouselContent>
                    <div className=" hidden md:block opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 ease-in pointer-events-none">
                        <CarouselPrevious className="left-12 md:left-[26.8rem] top-1/2 -translate-y-[100%]" />

                        <CarouselNext className="right-12 md:right-[26.8rem] top-1/2 -translate-y-[100%]" />
                    </div>
                </Carousel>
            </div>
            <div className="hidden md:flex flex-wrap justify-center items-center gap-4 -mt-8">
                <p className=" text-primary font-medium cursor-pointer">Lexos Move</p>
                <p className=" text-foreground opacity-70 cursor-pointer">Astrae Design</p>
                <p className=" text-foreground opacity-70 cursor-pointer">Stakenet</p>
                <p className=" text-foreground opacity-70 cursor-pointer">Fetchtalent AI</p>
                <p className=" text-foreground opacity-70 cursor-pointer">Midas</p>
            </div>
        </section >
    );
}

export default ClientStories;