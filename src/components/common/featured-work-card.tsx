'use client'
import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Separator } from '../ui/separator';

interface FeaturedWorkCardProps {
    i: number;
    result: string;
    width: number;
    height: number;
    metric: string;
    logo: string;
    coverImage: string;
    previewImage: string;
    metricDescription: string;
    category: string[];
    services: string[];
    link: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}


const FeaturedWorkCard = ({
    i,
    result,
    width,
    height,
    metric,
    logo,
    coverImage,
    previewImage,
    metricDescription,
    category,
    services,
    link,
    progress,
    range,
    targetScale
}: FeaturedWorkCardProps) => {

    const container = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className=" h-fit md:h-[65vh] flex flex-col items-center justify-center md:sticky md:top-88">
            <Link href={link}>
                <motion.div
                    style={{
                        scale,
                        ...(!isMobile ? { top: `calc(-5vh + ${i * 0}px)` } : {})
                    }}
                    className="flex flex-col relative md:top-[-25%] md:h-[60vh] w-full md:origin-top"
                >
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  rounded-lg md:rounded-xl overflow-hidden bg-white border hover:shadow mb-4 md:mb-0">
                        {i % 2 === 0 ? (
                            <>
                                <div className=' flex flex-col gap-4 md:gap-0 md:justify-between px-4 py-4 md:px-8 md:py-8 w-full'>
                                    <div>
                                        <Image
                                            width={width}
                                            height={height}
                                            src={`/assets/${logo}`}
                                            className="object-contain -ml-2 md:-ml-0 scale-90 md:scale-100"
                                            alt="Logo"
                                        />
                                        <h4 className="text-lg md:text-xl tracking-tight leading-tight text-balance md:text-wrap md:pr-20 font-medium mt-2">{result}</h4>

                                        {category && (
                                            <ul className=" flex flex-wrap gap-1.5 mt-4">
                                                {category.map((item) => (
                                                    <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]" key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div>
                                        <Separator orientation='horizontal' className=' w-full' />

                                        <div className='inline-flex gap-2 items-baseline mt-4'>
                                            <span className=' font-medium text-2xl tracking-tighter text-foreground'>{metric}</span>
                                            <p className=' text-[15px] md:text-base'>{metricDescription}</p>
                                        </div>
                                        {services && (
                                            <ul className=" flex flex-wrap gap-1.5 mt-2">
                                                {services.map((item) => (
                                                    <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]" key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <div className=' w-full h-[340px] md:h-full p-4'>
                                    <div className="w-full h-full relative flex items-center justify-center">
                                        <div className=" w-[80%] h-[80%] relative z-20 rounded-md overflow-clip">
                                            <Image fill className="object-cover object-top" src={`/assets/${previewImage}`} alt="Project preview" />
                                        </div>
                                        <div className=" inset-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg overflow-clip">
                                            <Image
                                                fill
                                                src={`/assets/${coverImage}`}
                                                alt="image"
                                                priority
                                                quality={50}
                                                className='object-cover'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className=' w-full h-[340px] md:h-full p-4'>
                                    <div className="w-full h-full relative flex items-center justify-center">
                                        <div className=" w-[80%] h-[80%] relative z-20 rounded-md overflow-clip">
                                            <Image fill className="object-cover object-top" src={`/assets/${previewImage}`} alt="Project preview" />
                                        </div>
                                        <div className=" inset-0 absolute top-0 left-0 right-0 bottom-0 rounded-lg overflow-clip">
                                            <Image
                                                fill
                                                src={`/assets/${coverImage}`}
                                                alt="image"
                                                priority
                                                quality={50}
                                                className='object-cover'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className=' flex flex-col justify-between px-4 py-4 md:px-8 md:py-8 w-full'>
                                    <div>
                                        <Image
                                            width={width}
                                            height={height}
                                            src={`/assets/${logo}`}
                                            className="object-contain -ml-2 md:-ml-0 scale-90 md:scale-100"
                                            alt="Logo"
                                        />
                                        <h4 className="text-lg md:text-xl tracking-tight leading-tight text-balance md:text-wrap md:pr-20 font-medium mt-2">{result}</h4>

                                        {category && (
                                            <ul className=" flex flex-wrap gap-1.5 mt-4">
                                                {category.map((item) => (
                                                    <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]" key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className=' mt-4 md:mt-0'>
                                        <Separator orientation='horizontal' className=' w-full' />

                                        <div className='inline-flex gap-2 items-baseline mt-4'>
                                            <span className=' font-medium text-2xl tracking-tighter text-foreground'>{metric}</span>
                                            <p className=' text-[15px] md:text-base'>{metricDescription}</p>
                                        </div>
                                        {services && (
                                            <ul className=" flex flex-wrap gap-1.5 mt-2">
                                                {services.map((item) => (
                                                    <li className=" bg-background border flex items-center justify-center rounded-full py-1 px-2.5 text-foreground text-xs md:text-[15px]" key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}

export default FeaturedWorkCard;