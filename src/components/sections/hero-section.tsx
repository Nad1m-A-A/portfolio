"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { HeroStackVisual } from "@/components/sections/hero-stack-visual";

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
      <div className="relative mx-auto min-h-[calc(100vh-9rem)] w-full rounded-4xl bg-hero-surface p-6 text-foreground sm:p-10 border border-border">
        <div className="app_container grid min-h-[calc(100vh-13rem)] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h1
              data-hero-animate
              className="text-4xl font-thin tracking-widest sm:text-4xl text-foreground"
            >
              The Name is{" "}
              <span className="text-accent font-medium font-mono tracking-wide">{"${Nadim}"}</span>

            </h1>
            <div
              data-hero-animate
              className="space-y-2 text-5xl font-medium italic -ms-2 tracking-wide sm:space-y-4 sm:text-7xl lg:text-8xl text-foreground"
            >
              <p>Self-taught</p>
              <p>Full-stack</p>
              <p>Web-Dev</p>
            </div>
          </div>

          <HeroStackVisual />
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl">
          <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
