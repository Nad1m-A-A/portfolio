"use client";

import Image from "next/image";
import { motion } from "motion/react";

const sectionEase = [0.22, 1, 0.36, 1] as const;

const highlights = [
    "Aggregates separate ERPs into one authenticated surface Using Inertia.js",
    "Credentials and ERP URLs never reach the browser; all fetches go through an authorized server proxy",
    "Role-based passcode auth with request auditing for non-admin roles",
    "Layered permissions (views / actions / businesses) enforced on the API and mirrored in the UI",
    "Same API contract in demo and production — synthetic data swaps in without changing the frontend",
    "Fully documented — bilingual user guide and in-app developer guide for contributors",
] as const;

// const oldProjects = [
//     {
//         name: "Carne Media Training Center",
//         url: "https://carnemedia.ae/en",
//         src: "/carne.png",
//     },
//     {
//         name: "American Aesthetic Medical Center",
//         url: "https://americanaestheticmc.com",
//         src: "/american.webp",
//     },
//     {
//         name: "Arya Clinic",
//         url: "https://aryaclinic.ae",
//         src: "/arya.webp",
//     },
//     {
//         name: "Abd-Albaset Bali Architecture",
//         url: "https://www.designerab.com/",
//         src: "/architect.webp",
//     },
// ] as const;

export default function ProjectsSection() {
    return (
        <section id="projects" className="section">
            <div className="app_container">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: sectionEase }}
                >
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl border-b border-accent w-fit pb-2">
                        Projects
                    </h2>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: sectionEase, delay: 0.08 }}
                    className="mt-10 space-y-6"
                >
                    <Image
                        src="/dashboards.png"
                        alt="Multi-Business Analytics Dashboard"
                        width={1200}
                        height={600}
                        className="max-h-[300px] w-full object-cover"
                    />

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                            Multi-Business Analytics Dashboard
                        </h3>
                    </div>

                    <ul className="space-y-2">
                        {highlights.map((item) => (
                            <li
                                key={item}
                                className="text-sm leading-6 text-muted sm:text-base sm:leading-7"
                            >
                                <span className="font-mono text-accent">— </span>{" "}
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://github.com/Nad1m-A-A/dashboards-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-relaxed px-3 py-2 pt-2.5 bg-accent transition-all cursor-pointer rounded-[2px]"
                    >
                        View on GitHub
                    </a>
                </motion.article>

                {/* <div className="mt-10 grid grid-cols-2 gap-4 overflow-x-clip border-t border-border pt-10 sm:grid-cols-4">
                    {oldProjects.map((project, index) => {
                        // Keep hover tooltips inside the viewport: pin edges left/right, center the middle.
                        const tooltipAlign =
                            index === 0
                                ? "left-0"
                                : index === oldProjects.length - 1
                                    ? "right-0"
                                    : index % 2 === 1
                                        ? "right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2"
                                        : "left-0 sm:left-1/2 sm:-translate-x-1/2";

                        return (
                            <div key={project.src} className="group relative min-w-0">
                                <Image
                                    src={project.src}
                                    alt={project.name}
                                    width={1200}
                                    height={600}
                                    className="max-h-[80px] w-full rounded-[2px] object-cover grayscale"
                                />
                                <div
                                    className={`pointer-events-none absolute bottom-full z-10 w-max max-w-[min(300px,100%)] pb-3 opacity-0 transition-opacity duration-700 delay-100 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:delay-0 group-hover:duration-150 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:delay-0 group-focus-within:duration-150 ${tooltipAlign}`}
                                >
                                    <div
                                        role="tooltip"
                                        className="rounded-[2px] border border-border bg-background px-5 py-4 shadow-sm"
                                    >
                                        <p className="text-base font-medium text-foreground">
                                            {project.name}
                                        </p>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 block truncate text-sm text-accent underline-offset-2 hover:underline"
                                        >
                                            {project.url.replace(/^https?:\/\//, "")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </section>
    );
}
