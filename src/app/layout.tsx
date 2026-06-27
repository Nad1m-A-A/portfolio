import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
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
  // Default color: black shadow
  const mainInsetShadowColor = "rgba(0,0,0,0.1)";
  const mainOuterShadowColor = "rgba(0,0,0,0.1)";
  // // Blue version:
  // const mainInsetShadowColor = "rgba(0,60,200,0.15)";
  // const mainOuterShadowColor = "rgba(0,60,200,0.13)";
  // // Red version:
  // const mainInsetShadowColor = "rgba(200,24,24,0.13)";
  // const mainOuterShadowColor = "rgba(200,24,24,0.11)";

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
            <main
              className="flex-1 flex flex-col rounded-lg h-[95vh] max-w-6xl mx-auto overflow-y-auto scrollbar-none scrollbar-track-gray-100 bg-background backdrop-blur-lg backdrop-saturate-200 backdrop-contrast-200 relative border border-white/20"
              style={{
                boxShadow: `inset 0 0 100px ${mainInsetShadowColor}, 0 0 10px ${mainOuterShadowColor}`,
              }}
            >
              <SiteHeader />
              {children}
            </main>
            {/* <SiteFooter /> */}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
