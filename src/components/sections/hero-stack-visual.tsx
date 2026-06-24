import {
  CicdLogo,
  DockerLogo,
  GitLogo,
  InertiaLogo,
  LaravelLogo,
  NextjsLogo,
  ReactLogo,
  TypescriptLogo,
} from "@/components/icons/tech-logos";

const stackItems = [
  { label: "React", Logo: ReactLogo },
  { label: "Next.js", Logo: NextjsLogo },
  { label: "TypeScript", Logo: TypescriptLogo },
  { label: "Laravel", Logo: LaravelLogo },
  { label: "Inertia.js", Logo: InertiaLogo },
  { label: "Docker", Logo: DockerLogo },
  { label: "Git", Logo: GitLogo },
  { label: "CI/CD", Logo: CicdLogo },
] as const;

export function HeroStackVisual() {
  return (
    <div className="relative z-10 w-full border-y border-border">
      <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4">
        {stackItems.map(({ label, Logo }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2 px-3 py-5 sm:gap-3 sm:px-4 sm:py-6 lg:px-6 lg:py-8"
          >
            <Logo color="currentColor" className="size-6 shrink-0 sm:size-7" />
            <span className="sr-only">{label}</span>
            <span className="text-xs font-medium tracking-tight text-foreground/85 sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
