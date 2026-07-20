"use client";

import { motion } from "motion/react";
import { HeroPerspectiveGrid } from "@/components/sections/hero-perspective-grid";
import { HeroStackVisual } from "@/components/sections/hero-stack-visual";
import { SpecialtyRotator } from "@/components/sections/specialty-rotator";
import FadeIn from "@/components/ui/fade-in";

const heroEase = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section id="intro" className="bg-background">
      <div
        className="relative overflow-hidden font-thin text-center flex flex-col gap-4 items-center justify-center flex-1 min-h-[61.5vh]"
      >
        <HeroPerspectiveGrid />
        <FadeIn duration={0.8} delay={0.12} trigger="mount">
          <h1 className="relative z-10 font-medium text-[clamp(2.25rem,5vw,3.75rem)]">
            Fullstack Developer
          </h1>
        </FadeIn>
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-center gap-2 whitespace-nowrap">
          <FadeIn duration={0.8} delay={0.20} trigger="mount">
            <p className="shrink-0 text-xl">
              Specialized in
            </p>
          </FadeIn>
          <FadeIn duration={0.8} delay={0.20} trigger="mount">
            <SpecialtyRotator />
          </FadeIn>
        </div>
      </div>

      <HeroStackVisual />
    </section>
  );
}
