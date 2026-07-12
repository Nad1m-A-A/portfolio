"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

const fadeEase = "easeIn" as const;

type FadeInProps = {
  children: ReactNode;
  /** Fade duration in seconds. */
  duration?: number;
  delay?: number;
  className?: string;
  /**
   * `inView` — lazy scroll reveal (sections).
   * `mount` — fade on first render (sticky chrome).
   */
  trigger?: "inView" | "mount";
  as?: "div" | "header";
} & Omit<
  HTMLMotionProps<"div">,
  | "children"
  | "initial"
  | "whileInView"
  | "animate"
  | "transition"
  | "viewport"
>;

/**
 * Opacity-only reveal — no y/x motion.
 * Use `delay` for stagger; `duration` for pace.
 */
export default function FadeIn({
  children,
  duration = 0.2,
  delay = 0.2,
  className,
  trigger = "inView",
  as = "div",
  ...rest
}: FadeInProps) {
  const Component = as === "header" ? motion.header : motion.div;
  const transition = { duration, ease: fadeEase, delay };

  if (trigger === "mount") {
    return (
      <Component
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        className={className}
        {...rest}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
