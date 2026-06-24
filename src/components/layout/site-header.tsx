"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white bg-red-500"
    >
      <div className="flex h-16 items-center justify-between px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-white uppercase"
        >
          Nad1m-A-A
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
              <Link
                href={link.href}
                className="text-sm text-white transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-border px-4 py-2 text-sm text-white transition-colors hover:border-accent/40 hover:bg-accent/10"
          >
            Let&apos;s talk
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
