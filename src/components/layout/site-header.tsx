"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/fade-in";
import { useActiveSection } from "@/hooks/useActiveSection.js";

const navLinks = [
  { href: "#intro", label: "Intro" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#info", label: "Info" },
] as const;

const sectionHashes = navLinks.map((link) => link.href);

export function SiteHeader() {
  const { activeHash, navigateToHash } = useActiveSection(sectionHashes);

  return (
    <FadeIn
      as="header"
      trigger="mount"
      duration={0.6}
      className="sticky top-0 z-50 border-b border-border bg-background shadow-[inset_0_0_100px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.1)]"
    >
      <div className="z-10 flex h-16 items-center justify-between px-10">
        <Link
          className="text-lg font-medium"
          href="/"
        >
          Nadim Alaa
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <FadeIn
              key={link.href}
              trigger="mount"
              delay={0.1 + index * 0.08}
            >
              <a
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  navigateToHash(link.href);
                }}
                className={`border-b pb-1 px-1 transition-[color,border-color] hover:text-foreground ${activeHash === link.href
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted"
                  }`}
              >
                {link.label}
              </a>
            </FadeIn>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {/* <ThemeToggle /> */}

          <button
            onClick={() => {
              window.open("mailto:nadim.alaa@hotmail.com", "_blank");
            }}
            className="leading-relaxed px-3 py-0.5 pt-1 bg-accent transition-all cursor-pointer rounded-[2px]"
          >
            Contact
          </button>
        </div>
      </div>
    </FadeIn>
  );
}
