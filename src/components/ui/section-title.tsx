"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const sectionEase = [0.22, 1, 0.36, 1] as const;

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: sectionEase }}
    >
      <h2
        className={`w-fit border-b border-accent text-3xl font-semibold tracking-tight text-foreground sm:text-4xl bg-accent leading-3 pb-2 px-1 ${className}`}
      >
        {children}
      </h2>
    </motion.div>
  );
}
