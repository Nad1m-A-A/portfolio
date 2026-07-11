"use client";

import Image from "next/image";
import { motion } from "motion/react";

const sectionEase = [0.22, 1, 0.36, 1] as const;
const email = "nadim.alaa@hotmail.com";

export default function InfoSection() {
  return (
    <section id="info" className="section pt-0!">
      <div className="app_container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: sectionEase }}
        >
          <h2 className="mt-3 w-fit border-b border-accent pb-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Info
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: sectionEase, delay: 0.08 }}
          className="mt-10 space-y-8 grid grid-cols-2 items-center"
        >
          <dl className="space-y-5">
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${email}`}
                  className="text-base text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline sm:text-lg"
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
            className="max-w-200 w-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
