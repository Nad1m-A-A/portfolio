import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { HeroPerspectiveGrid } from "@/components/sections/hero-perspective-grid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
