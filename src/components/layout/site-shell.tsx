"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SmoothScrollProvider } from "@/hooks/useSmoothScroll.js";

type SiteShellProps = {
  children: React.ReactNode;
  insetShadowColor: string;
  outerShadowColor: string;
};

export function SiteShell({
  children,
  insetShadowColor,
  outerShadowColor,
}: SiteShellProps) {
  return (
    <SmoothScrollProvider scrollRootId="site-main">
      <main
        id="site-main"
        className="relative mx-auto flex h-[96vh] max-w-6xl flex-1 flex-col overflow-y-auto rounded-[2px] border border-white/20 scrollbar-none"
        style={{
          boxShadow: `inset 0 0 100px ${insetShadowColor}, 0 0 10px ${outerShadowColor}`,
        }}
      >
        <SiteHeader />
        {children}
      </main>
    </SmoothScrollProvider>
  );
}
