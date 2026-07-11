"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";

const PHRASES = [
  "ERP Systems",
  "Modern UI Architectures",
  "Complex Web Applications",
] as const;

const LAST = PHRASES.length - 1;
const HOLD_S = 3;
const SHIFT_S = 0.65;

function opacityFor(dist: number) {
  if (dist === 0) return 1;
  if (dist === 1) return 0.42;
  return 0.22;
}

export function SpecialtyRotator() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const items = Array.from(track.children) as HTMLElement[];
        const h = items[0]?.offsetHeight || 28;
        gsap.set(track, { y: -LAST * h });
        items.forEach((el, i) => {
          gsap.set(el, {
            opacity: i === LAST ? 1 : 0,
            visibility: i === LAST ? "visible" : "hidden",
          });
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = Array.from(track.children) as HTMLElement[];
        const lineHeight = () => items[0]?.offsetHeight || 28;

        let active = LAST;
        let dir = -1;
        let delay: gsap.core.Tween | undefined;

        const paint = (index: number) => {
          items.forEach((el, i) => {
            gsap.set(el, { opacity: opacityFor(Math.abs(i - index)) });
          });
        };

        gsap.set(track, { y: -LAST * lineHeight() });
        paint(LAST);

        const stepTo = (index: number) => {
          const h = lineHeight();

          gsap
            .timeline({
              onComplete: () => {
                active = index;
                paint(active);
                delay = gsap.delayedCall(HOLD_S, tick);
              },
            })
            .to(track, {
              y: -index * h,
              duration: SHIFT_S,
              ease: "power2.inOut",
            })
            .to(
              items,
              {
                opacity: (i: number) => opacityFor(Math.abs(i - index)),
                duration: SHIFT_S,
                ease: "power2.inOut",
              },
              0,
            );
        };

        const tick = () => {
          let next = active + dir;

          if (next >= LAST) {
            next = LAST;
            dir = -1;
          } else if (next <= 0) {
            next = 0;
            dir = 1;
          }

          stepTo(next);
        };

        delay = gsap.delayedCall(HOLD_S, tick);

        return () => {
          delay?.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative z-10 h-[4.875rem] shrink-0 overflow-hidden text-lg leading-[1.625rem] [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
      aria-live="polite"
    >
      <div ref={trackRef} className="flex flex-col will-change-transform">
        {PHRASES.map((phrase) => (
          <p
            key={phrase}
            className="h-[1.625rem] whitespace-nowrap text-start text-foreground"
          >
            {phrase}
          </p>
        ))}
      </div>
    </div>
  );
}
