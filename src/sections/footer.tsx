import { TeamTooltip } from "@/components/common/team-tooltip";
import { Separator } from "@/components/ui/separator";
import { companyLinks, moreLinks, otherProjectsLinks, services } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiBehanceLine, RiDribbbleLine, RiGithubFill } from "react-icons/ri";
import { SiThreads } from "react-icons/si";

const Footer = () => {
    return (
        <footer className=" bg-white w-full pt-8 md:pt-12 relative px-6 md:px-0 2xl:h-[47rem] md:overflow-y-clip">
            <div className="absolute inset-0 h-full w-full opacity-0 md:opacity-100">
                <div className=" w-full flex items-center justify-between px-10 h-full container mx-auto">
                    <Separator orientation="vertical" />
                    <Separator orientation="vertical" />
                </div>
            </div>

            <div className="flex flex-col max-w-6xl w-full mx-auto z-20 relative">
                <div className=" hidden md:flex flex-wrap justify-between w-full">
                    <div className="flex flex-col items-start mb-6 md:mb-0">
                        <div className=" relative size-10 mb-2 hidden md:block">
                            <Image fill src="/assets/icon.png" className=" object-cover" alt="Reframe Labs Logo" />
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            <Link
                                href="https://www.google.com/maps?q=Reframe Labs+Software+LLC,+Nmai+Dzorn+Papafio+Hills+Rd,+Nanakrom"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity duration-200"
                            >
                                <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Nmai Dzorn Papaffio <br className=" hidden md:block" /> Hills Rd, Accra, Ghana</p>
                            </Link>

                            <Link
                                href="tel:+233557661362"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity duration-200"
                            >
                                <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">+233 557 661 362</p>
                            </Link>

                            <Link
                                href="mailto:contact@reframelabs.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity duration-200"
                            >
                                <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">contact@reframelabs.co</p>
                            </Link>

                            <TeamTooltip />
                        </div>

                        <div className=" md:hidden flex items-center mt-4">

                            <Link href="https://twitter.com/reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <FaXTwitter size={22} />
                                </div>
                            </Link>
                            <Link href="https://www.youtube.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <FaYoutube size={24} />
                                </div>
                            </Link>

                            <Link href="https://dribbble.com/reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <RiDribbbleLine size={24} />
                                </div>
                            </Link>
                            <Link href="https://www.threads.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <SiThreads size={22} />
                                </div>
                            </Link>
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                <RiBehanceLine size={26} />
                            </div>
                            <Link href="https://www.instagram.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <FaInstagram size={24} />
                                </div>
                            </Link>
                            <Link href="https://www.instagram.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center">
                                    <RiGithubFill size={26} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">Services</h6>
                        <div className="flex flex-col items-start gap-1">
                            {services.map((service, index) => (
                                <Link key={index} href={service.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{service.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">Company</h6>
                        <div className="flex flex-col items-start gap-1">
                            {companyLinks.map((company, index) => (
                                <Link key={index} href={company.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{company.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">Resources</h6>
                        <div className="flex flex-col items-start gap-1">
                            {moreLinks.map((resources, index) => (
                                <Link key={index} href={resources.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{resources.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">By Reframe Labs</h6>
                        <div className="flex flex-col items-start gap-1">
                            {otherProjectsLinks.map((projects, index) => (
                                <Link key={index} href={projects.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{projects.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className=" md:hidden grid grid-cols-2 w-full gap-y-6 gap-x-6">
                    <div className="flex flex-col items-start mb-6 md:mb-0 col-span-2">
                        <Link href="/" className=" mb-4">
                            <div className=" relative size-10">
                                <Image fill src="/assets/icon.png" className="object-contain" alt="Reframe Labs Logo" />
                            </div>
                        </Link>


                        <div className="flex flex-col items-start gap-2">
                            <Link
                                href="https://www.google.com/maps?q=Reframe Labs+Software+LLC,+Nmai+Dzorn+Papafio+Hills+Rd,+Nanakrom"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity duration-200"
                            >
                                <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Nmai Dzorn Papaffio <br className=" hidden md:block" /> Hills Rd, Accra, Ghana</p>
                            </Link>

                            <Link
                                href="tel:+233557661362"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity duration-200"
                            >
                                <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">+233 557 661 362</p>
                            </Link>

                            <Link
                                href="mailto:hey@bhytesoftware.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity duration-200"
                            >
                                <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">hey@bhytesoftware.com</p>
                            </Link>

                            <TeamTooltip />
                        </div>

                        <div className=" md:hidden flex items-center mt-4 -ml-3">

                            <Link href="https://twitter.com/reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <FaXTwitter size={22} />
                                </div>
                            </Link>
                            <Link href="https://www.youtube.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <FaYoutube size={24} />
                                </div>
                            </Link>

                            <Link href="https://dribbble.com/reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <RiDribbbleLine size={24} />
                                </div>
                            </Link>
                            <Link href="https://www.threads.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <SiThreads size={22} />
                                </div>
                            </Link>
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                <RiBehanceLine size={26} />
                            </div>
                            <Link href="https://www.instagram.com/reframelabsco/" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                    <FaInstagram size={24} />
                                </div>
                            </Link>
                            <Link href="https://github.com/Reframe-Labs" target="_blank" rel="noopener noreferrer">
                                <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center">
                                    <RiGithubFill size={26} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">Services</h6>
                        <div className="flex flex-col items-start gap-1">
                            {services.map((service, index) => (
                                <Link key={index} href={service.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{service.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">Company</h6>
                        <div className="flex flex-col items-start gap-1">
                            {companyLinks.map((company, index) => (
                                <Link key={index} href={company.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{company.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">Resources</h6>
                        <div className="flex flex-col items-start gap-1">
                            {moreLinks.map((resources, index) => (
                                <Link key={index} href={resources.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{resources.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h6 className=" text-[15px] md:text-base font-medium mb-2">By Reframe Labs</h6>
                        <div className="flex flex-col items-start gap-1">
                            {otherProjectsLinks.map((projects, index) => (
                                <Link key={index} href={projects.href} className="transition-opacity duration-200">
                                    <p className=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">{projects.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>




                <div className=" mt-12 md:mt-20 mb-6">
                    <Separator orientation="horizontal" />
                </div>

                <div className=" w-full flex items-center justify-center md:justify-between">
                    <span className=" text-sm md:text-[15px]">© 2025 Reframe Labs. All rights reserved.</span>
                    <div className=" hidden md:flex items-center">

                        <Link href="https://twitter.com/reframelabsco" target="_blank" rel="noopener noreferrer">
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                <FaXTwitter size={22} />
                            </div>
                        </Link>
                        <Link href="https://www.youtube.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                <FaYoutube size={24} />
                            </div>
                        </Link>

                        <Link href="https://dribbble.com/reframelabsco" target="_blank" rel="noopener noreferrer">
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                <RiDribbbleLine size={24} />
                            </div>
                        </Link>
                        <Link href="https://www.threads.com/@reframelabsco" target="_blank" rel="noopener noreferrer">
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                <SiThreads size={22} />
                            </div>
                        </Link>
                        <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                            <RiBehanceLine size={26} />
                        </div>
                        <Link href="https://www.instagram.com/reframelabsco/" target="_blank" rel="noopener noreferrer">
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                                <FaInstagram size={24} />
                            </div>
                        </Link>
                        <Link href="https://github.com/Reframe Labs-Software" target="_blank" rel="noopener noreferrer">
                            <div className=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center">
                                <RiGithubFill size={26} />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className=" w-full h-[6rem] md:h-[20rem] relative scale-105 md:scale-100 mt-12 md:mt-20">
                    <Image fill src="/assets/logo-footer.png" alt="Reframe Labs logo" className=" object-contain object-top" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;