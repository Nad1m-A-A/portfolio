"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionTitle from "@/components/ui/section-title";

const sectionEase = [0.22, 1, 0.36, 1] as const;
const email = "nadim.alaa@hotmail.com";

export default function InfoSection() {
  return (
    <section id="info" className="section">
      <div className="app_container">
        <SectionTitle>Info</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: sectionEase, delay: 0.08 }}
          className="relative"
        >
          <dl className="space-y-4 relative z-10">
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${email}`}
                  className="text-base text-foreground underline-offset-4 transition-all hover:text-accent hover:underline sm:text-lg"
                >
                  {email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted">Location</dt>
              <dd className="mt-1 text-base text-foreground sm:text-lg">
                United Arab Emirates
              </dd>
            </div>
          </dl>
          <Image
            src="/Adobe Express - file.png"
            alt="United Arab Emirates"
            width={1200}
            height={600}
            className="w-100 object-cover object-center absolute top-5 -translate-y-1/2 -left-10 md:-translate-x-1/4 opacity-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
