import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

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
    default: "Nadim — Place",
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
            <main className="flex-1 flex flex-col rounded-lg h-[95vh] max-w-6xl mx-auto overflow-y-auto scrollbar-none scrollbar-track-gray-100 bg-white/50 backdrop-blur-lg backdrop-saturate-200 backdrop-contrast-200 relative shadow-[inset_0_0_100px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.1)] border border-white/20">
              <SiteHeader />
              {children}
              {/* {children} */}
            </main>
            <div className="size-50 absolute top-60 left-20 bg-red-500 rounded-full -translate-y-1/2 -z-10" />
            <div className="size-50 absolute top-150 right-20 bg-red-500 rounded-full -translate-y-1/2 -z-10" />
            {/* <SiteFooter /> */}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
