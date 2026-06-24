"use client";

import { motion } from "motion/react";
import { HeroStackVisual } from "@/components/sections/hero-stack-visual";

const heroEase = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative mx-auto w-full overflow-hidden">
        <div className="app_container grid min-h-[calc(100svh-4rem)] grid-cols-1 items-center gap-8 py-10 sm:gap-10 sm:py-14 md:gap-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: heroEase }}
              className="text-center text-[1.6875rem] leading-9 text-foreground sm:text-[2.025rem] sm:leading-10 lg:text-start lg:text-[2.7rem] lg:leading-none font-thin"
            >
              The Name is{" "}
              <span className="text-accent tracking-wider font-medium">Nadim.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: heroEase }}
              className="space-y-1 text-center text-[2.025rem] leading-10 font-thin text-foreground sm:space-y-2 sm:text-[2.7rem] sm:leading-none md:space-y-3 md:text-[3.375rem] lg:space-y-4 lg:text-start lg:text-[4.05rem] xl:text-[5.4rem]"
            >
              <p className="whitespace-nowrap">Full-Stack</p>
              <p className="whitespace-nowrap">Self-Taught</p>
              <p className="whitespace-nowrap">Web Developer</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.8, ease: heroEase }}
            className="pt-4 sm:pt-6 lg:pt-0 relative"
          >
            <HeroStackVisual />
            <div
              className="hero-grid-overlay pointer-events-none absolute size-[150%] -top-1/4 -left-1/4"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
