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
      "left-1/2 top-[6.67%] z-10 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Laravel",
    Logo: LaravelLogo,
    className:
      "left-[8%] top-[93.33%] z-10 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Inertia.js",
    Logo: InertiaLogo,
    className:
      "left-[92%] top-[93.33%] z-10 -translate-x-1/2 -translate-y-1/2",
  },
] as const;

export function HeroStackVisual() {
  return (
    <div
      data-hero-animate
      className="relative mx-auto aspect-square w-full max-w-64 sm:max-w-80 lg:max-w-96"
    >
      <svg
        viewBox="0 0 400 360"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-triangle-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <polygon
          points="200,24 32,336 368,336"
          fill="url(#hero-triangle-fill)"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>

      {stackItems.map(({ label, Logo, className }) => (
        <motion.div
          key={label}
          className={`absolute ${className}`}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="flex size-16 items-center justify-center rounded-full border border-border bg-background p-2 shadow-lg  backdrop-blur-sm sm:size-18">
            <Logo className="size-[70%]" />
            <span className="sr-only">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
