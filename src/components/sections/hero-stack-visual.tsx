import {
  InertiaLogo,
  LaravelLogo,
  ReactLogo,
} from "@/components/icons/tech-logos";

const stackItems = [
  { label: "React", Logo: ReactLogo },
  { label: "Laravel", Logo: LaravelLogo },
  { label: "Inertia.js", Logo: InertiaLogo },
] as const;

export function HeroStackVisual() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
      {stackItems.map(({ label, Logo }) => (
        <div
          key={label}
          className="grid grid-cols-2 items-center justify-center gap-2 sm:gap-3"
        >
          <div className="flex size-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 p-2 shadow-lg backdrop-blur-sm sm:size-16 md:size-18 lg:size-20">
            <Logo className="size-[70%] grayscale-50" />
            <span className="sr-only">{label}</span>
          </div>
          <p className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-center text-xs italic backdrop-blur-lg sm:px-5 sm:text-sm md:px-6 md:text-base">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
