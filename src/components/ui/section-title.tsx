"use client";

import type { ReactNode } from "react";
import FadeIn from "@/components/ui/fade-in";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <FadeIn>
      <h2
        className={`w-fit border-b border-accent text-3xl font-semibold tracking-tight text-foreground sm:text-4xl bg-accent leading-3 pb-2 px-1 ${className}`}
      >
        {children}
      </h2>
    </FadeIn>
  );
}
