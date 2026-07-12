"use client";

import { motion } from "motion/react";
import { HeroPerspectiveGrid } from "@/components/sections/hero-perspective-grid";
import { HeroStackVisual } from "@/components/sections/hero-stack-visual";
import { SpecialtyRotator } from "@/components/sections/specialty-rotator";

const heroEase = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section id="intro" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.8, ease: heroEase }}
        className="relative overflow-hidden font-thin text-center flex flex-col gap-4 items-center justify-center flex-1 min-h-[61.5vh]"
      >
        <HeroPerspectiveGrid />
        <h1 className="relative z-10 bg-linear-to-b from-muted/50 to-foreground bg-clip-text px-2 font-medium text-transparent text-[clamp(2.25rem,5vw,3.75rem)]">
          Software Engineer
        </h1>
        <div className="relative z-10 flex flex-nowrap items-start justify-center gap-2 whitespace-nowrap">
          <p className="shrink-0 text-xl">
            Specialized in
          </p>
          <SpecialtyRotator />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.8, ease: heroEase }}
        className="flex flex-1 flex-col"
      >
        <HeroStackVisual />
      </motion.div>
    </section>
  );
}
