"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { gsap, useGSAP } from "@/lib/gsap/register";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set("[data-hero-animate]", { opacity: 1, y: 0 });
        return;
      }

      gsap.from("[data-hero-animate]", {
        opacity: 0,
        y: 48,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center px-6 pt-24 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p
          data-hero-animate
          className="mb-4 text-sm tracking-[0.35em] text-accent uppercase"
        >
          Portfolio
        </p>

        <h1
          data-hero-animate
          className="max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-7xl"
        >
          Crafting digital experiences with motion, precision, and intent.
        </h1>

        <p
          data-hero-animate
          className="mt-8 max-w-2xl text-lg leading-8 text-muted"
        >
          I&apos;m Nadim — a developer focused on polished interfaces, smooth
          interactions, and reliable web products. This site is your starting
          point for projects, process, and contact.
        </p>

        <div data-hero-animate className="mt-10 flex flex-wrap gap-4">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-background transition-colors hover:bg-accent/90"
          >
            View selected work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-white/5"
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
