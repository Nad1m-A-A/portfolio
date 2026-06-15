"use client";

import { motion } from "motion/react";
import {
  InertiaLogo,
  LaravelLogo,
  ReactLogo,
} from "@/components/icons/tech-logos";

const stackItems = [
  {
    label: "React",
    Logo: ReactLogo,
    className:
      "left-1/2 top-[20%] z-10 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Laravel",
    Logo: LaravelLogo,
    className:
      "left-1/2 top-[50%] z-10 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Inertia.js",
    Logo: InertiaLogo,
    className:
      "left-1/2 top-[80%] z-10 -translate-x-1/2 -translate-y-1/2",
  },
] as const;

export function HeroStackVisual() {
  return (
    <div
      data-hero-animate
      className="relative mx-auto max-w-sm aspect-square"
    >
      {stackItems.map(({ label, Logo, className }) => (
        <motion.div
          key={label}
          className={`absolute ${className}`}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="flex size-20 items-center justify-center rounded-full border border-border bg-background p-2 shadow-lg backdrop-blur-sm">
            <Logo className="size-[70%]" />
            <span className="sr-only">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
