"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { LuChevronLeft, LuChevronRight, LuExternalLink } from "react-icons/lu";
import SectionTitle from "@/components/ui/section-title";

const sectionEase = [0.22, 1, 0.36, 1] as const;
const fadeDuration = 0.3;

type Project = {
    name: string;
    highlights: string[] | null;
    url: string | null;
    repo: string | null;
    image: string | null;
    available: boolean;
};

const projects: Project[] = [
    {
        name: "Multi-Business Dashboard",
        highlights: [
            "Aggregates separate ERPs into one authenticated surface Using Inertia.js",
            "Credentials and ERP URLs never reach the browser; all fetches go through an authorized server proxy",
            "Role-based passcode auth with request auditing for non-admin roles",
            "Layered permissions (views / actions / businesses) enforced on the API and mirrored in the UI",
            "Same API contract in demo and production — synthetic data swaps in without changing the frontend",
            "Fully documented — bilingual user guide and in-app developer guide for contributors",
        ],
        url: "http://dashboards.nadimweb.com",
        repo: "https://github.com/Nad1m-A-A/dashboards-demo",
        image: "/dashboards-mockup.png",
        available: true,
    },
    {
        name: "Gold Factory ERP",
        highlights: [
            "End-to-end ERP for gold manufacturing with dedicated modules for inventory, HR, production, and order tracking",
            "Minimizes mistakes by automating complex and repetitive workflows",
            "Delivers precise material tracking and real-time metrics across all production stages",
            "Seamless, secure in-app subscription payments and renewals"
        ],
        url: null,
        repo: null,
        image: "/erp-mockup.jpeg",
        available: true,
    },
    {
        name: "POS System",
        highlights: [
            "High-throughput checkout system with native scanner, printer, and cash drawer integration",
            "Built for high-volume retail environments to minimize queue friction and transaction lag",
            "Real-time inventory synchronization across multi-terminal setups",
        ],
        url: null,
        repo: null,
        image: "/pos-mockup.png",
        available: false,
    }
];

export default function ProjectsSection() {
    const [active, setActive] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const project = projects[active];
    const showArrows = projects.length > 1;

    const goTo = (index: number) => {
        if (isAnimating || index === active) return;
        setIsAnimating(true);
        setActive(index);
    };

    const goPrev = () => {
        goTo((active - 1 + projects.length) % projects.length);
    };

    const goNext = () => {
        goTo((active + 1) % projects.length);
    };

    return (
        <section id="projects" className="section">
            <div className="app_container">
                <SectionTitle>Projects</SectionTitle>

                <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: sectionEase, delay: 0.08 }}
                    className="relative mt-10"
                >
                    {showArrows && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous project"
                                disabled={isAnimating}
                                onClick={goPrev}
                                className="absolute left-0 top-[150px] z-10 -translate-y-1/2 cursor-pointer p-2 text-accent transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <LuChevronLeft className="size-6" aria-hidden />
                            </button>
                            <button
                                type="button"
                                aria-label="Next project"
                                disabled={isAnimating}
                                onClick={goNext}
                                className="absolute right-0 top-[150px] z-10 -translate-y-1/2 cursor-pointer p-2 text-accent transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <LuChevronRight className="size-6" aria-hidden />
                            </button>
                        </>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: fadeDuration, ease: sectionEase }}
                            onAnimationComplete={() => setIsAnimating(false)}
                            className="space-y-4"
                        >
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={1200}
                                    height={600}
                                    className={`max-w-[600px] mx-auto w-full object-cover${project.available ? "" : " opacity-30 blur-[6px]"}`}
                                />
                            ) : (
                                <div
                                    className="min-h-[300px] w-full mb-4"
                                    aria-hidden
                                />
                            )}

                            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl mt-10">
                                {
                                    project.url ? (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                                        >
                                            {project.name}
                                            <LuExternalLink className="size-5 shrink-0" aria-hidden />
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-2">
                                            {project.name}
                                        </span>
                                    )
                                }
                            </h3>

                            {project.highlights && project.highlights.length > 0 && (
                                <ul className="list-disc space-y-4 pl-4">
                                    {project.highlights.map((item) => (
                                        <li
                                            key={item}
                                            className="leading-6 text-muted sm:text-base sm:leading-7"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block cursor-pointer rounded-[2px] bg-accent px-3 py-2 pt-2.5 leading-relaxed transition-all"
                                >
                                    View on GitHub
                                </a>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.article>
            </div>
        </section>
    );
}
