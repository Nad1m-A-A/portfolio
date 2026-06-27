import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { HeroPerspectiveGrid } from "@/components/sections/hero-perspective-grid";
import { appFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Nadim — Web Developer",
    template: "%s | Nadim",
  },
  description:
    "Portfolio of Nadim — developer crafting polished web experiences with Next.js, Motion, and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainInsetShadowColor = "rgba(0,0,0,0.1)";
  const mainOuterShadowColor = "rgba(0,0,0,0.1)";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${appFont.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <div className="p-4 relative overflow-hidden">
            <HeroPerspectiveGrid />
            <SiteShell
              insetShadowColor={mainInsetShadowColor}
              outerShadowColor={mainOuterShadowColor}
            >
              {children}
            </SiteShell>
            {/* <SiteFooter /> */}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
