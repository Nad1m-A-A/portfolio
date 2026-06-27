"use client";

import { motion } from "motion/react";
import { HeroPerspectiveGrid } from "@/components/sections/hero-perspective-grid";
import { HeroStackVisual } from "@/components/sections/hero-stack-visual";

const heroEase = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section id="intro" className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.8, ease: heroEase }}
        className="relative overflow-hidden text-5xl font-thin text-center flex items-center justify-center flex-1 min-h-[59vh]"
      >
        <HeroPerspectiveGrid />
        <h1 className="relative z-10 px-2 font-medium">Full-Stack Web Developer</h1>
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
