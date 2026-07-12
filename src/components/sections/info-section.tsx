"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";
import SectionTitle from "@/components/ui/section-title";

const infoItems = [
  {
    title: "Email",
    href: "mailto:nadim.alaa@hotmail.com",
    label: "nadim.alaa@hotmail.com",
  },
  {
    title: "GitHub",
    href: "https://github.com/Nad1m-A-A",
    label: "github.com/Nad1m-A-A",
  },
  {
    title: "Location",
    label: "United Arab Emirates",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nadim-alaa-955356276/",
    label: "linkedin.com/in/nadim-alaa",
  },
] as const;

export default function InfoSection() {
  return (
    <section id="info" className="section inner-section">
      <div className="app_container min-h-[46vh] flex flex-col justify-center">
        <SectionTitle>Info</SectionTitle>

        <div className="relative">
          <dl className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {infoItems.map((item) => (
              <FadeIn key={item.title}>
                <dt className="text-sm text-muted">{item.title}</dt>
                <dd className="mt-1 text-base text-foreground sm:text-lg">
                  {"href" in item ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="underline-offset-4 transition-all hover:text-accent hover:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </dd>
              </FadeIn>
            ))}
          </dl>

          <Image
            src="/uae-map.png"
            alt="United Arab Emirates"
            width={1200}
            height={600}
            className="w-120 object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-15 md:-translate-x-1/4 opacity-10"
          />
        </div>
      </div>
    </section>
  );
}
