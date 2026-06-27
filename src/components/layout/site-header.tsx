"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useActiveSection } from "@/hooks/useActiveSection.js";
import { arabicFont, logoFont } from "@/lib/fonts";

const navLinks = [
  { href: "#intro", label: "Intro" },
  { href: "#about", label: "About" },
] as const;

const sectionHashes = navLinks.map((link) => link.href);

export function SiteHeader() {
  const { activeHash, navigateToHash } = useActiveSection(sectionHashes);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border bg-background shadow-[inset_0_0_100px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.1)]"
    >
      <div className="z-10 flex h-16 items-center justify-between px-10">
        <Link
          href="/"
          className={`${logoFont.className} italic`}
        >
          Nadim Alaa - <span className={`${arabicFont.className}`}>نديم علاء</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
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
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <ThemeToggle />

          <button
            onClick={() => {
              window.open("mailto:nadim.alaa@hotmail.com", "_blank");
            }}
            className="leading-relaxed px-3 py-0.5 pt-1 bg-accent transition-all cursor-pointer text-background rounded-[2px]"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.header>
  );
}
