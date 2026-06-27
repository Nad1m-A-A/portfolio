"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { IconType } from "react-icons";
import { LuChevronRight, LuBot, LuShieldCheck } from "react-icons/lu";
import { SiDocker, SiGit } from "react-icons/si";

const sectionEase = [0.22, 1, 0.36, 1] as const;

type FocusItem = {
  Icon: IconType;
  title: string;
  body: string;
};

type Faq = {
  id: string;
  question: string;
} & (
    | { kind: "list"; items: FocusItem[] }
    | { kind: "text"; body: string }
  );

const faqs: Faq[] = [
  {
    id: "now",
    question: "What is keeping you busy right now?",
    kind: "list",
    items: [
      {
        Icon: SiDocker,
        title: "Production-Ready Dockerization",
        body: "Building optimized dev/prod environments using Sail, Compose, and Makefiles, tied together with robust CI/CD pipelines.",
      },
      {
        Icon: SiGit,
        title: "Advanced Git Workflows",
        body: "Implementing bulletproof branching and merge strategies to ensure seamless, conflict-free team collaboration.",
      },
      {
        Icon: LuShieldCheck,
        title: "Infrastructure & Security",
        body: "Hardening server networks and ensuring service continuity using Tailscale.",
      },
      {
        Icon: LuBot,
        title: "AI-Augmented Development",
        body: "Integrating agentic AI tooling into my daily workflow to accelerate scaffolding, code exploration, and UI iterations.",
      },
    ],
  },
  {
    id: "testing",
    question: "I don't see Unit Testing in your current stack. What's the plan?",
    kind: "text",
    body: "To be fully transparent: it's the next major milestone on my board. I am currently mapping out a dedicated phase to implement comprehensive automated testing pipelines to ensure codebases are unbreakable before they ever hit staging.",
  },
  {
    id: "goal-2027",
    question: "What is the ultimate goal for 2027?",
    kind: "text",
    body: "To ship reliable, resilient, and highly scalable SaaS products. Every piece of my current learning path—from containerization to secure networking—is intentionally chosen to bridge the gap between \"it works on my machine\" and enterprise-grade deployment.",
  },
];

export function WorkingOnSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: sectionEase }}
        >
          <p className="font-mono text-sm text-accent">
            <span className="text-muted">$</span> git status
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What I&apos;m Up To
          </h2>
          <p className="mt-3 font-mono text-xs text-muted">
            On branch{" "}
            <span className="text-foreground/70">main</span> · changes staged for
            2027
          </p>
        </motion.div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: sectionEase,
                  delay: index * 0.06,
                }}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="group flex w-full items-start gap-4 py-5 text-left transition-colors"
                  >
                    <span className="mt-0.5 font-mono text-sm font-semibold text-accent">
                      Q
                    </span>
                    <span className="flex-1 text-base font-medium text-foreground sm:text-lg">
                      {faq.question}
                    </span>
                    <LuChevronRight
                      aria-hidden
                      className={`mt-1 size-5 shrink-0 text-muted transition-transform duration-300 group-hover:text-foreground ${isOpen ? "rotate-90 text-accent" : ""
                        }`}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: sectionEase }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-8">
                        {faq.kind === "text" ? (
                          <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                            {faq.body}
                          </p>
                        ) : (
                          <ul className="grid gap-4 sm:grid-cols-2">
                            {faq.items.map(({ Icon, title, body }) => (
                              <li
                                key={title}
                                className="rounded-2xl border border-border bg-surface/50 p-4 transition-colors hover:border-accent/40"
                              >
                                <div className="flex items-center gap-2.5">
                                  <Icon
                                    aria-hidden
                                    className="size-5 shrink-0 text-accent"
                                  />
                                  <span className="text-sm font-semibold text-foreground">
                                    {title}
                                  </span>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                  {body}
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
