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

export default function ProjectsSection() {
    return (
        <section id="projects" className="section pt-0!">
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
                        // src="/Screenshot 2026-07-11 030728.png"
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
            </div>
        </section>
    );
}
