import {
  InertiaLogo,
  LaravelLogo,
  ReactLogo,
} from "@/components/icons/tech-logos";

const stackItems = [
  { label: "REACT", Logo: ReactLogo, textColor: "#7bcff3" },
  { label: "LARAVEL", Logo: LaravelLogo, textColor: "#c7351b" },
  { label: "INERTIA.JS", Logo: InertiaLogo, textColor: "#934ee7" },
] as const;

export function HeroStackVisual() {
  return (
    <div className="relative z-10 mx-auto flex max-w-sm flex-col items-start w-fit gap-8">
      {stackItems.map(({ label, Logo, textColor }) => (
        <div
          key={label}
          className="grid grid-cols-[1fr_auto] items-center justify-center gap-1"
        >
          <div className="flex items-center justify-center rounded-full bg-hero-surface p-4 size-18 md:size-20 lg:size-22">
            <Logo className={`size-[70%] ${label === "LARAVEL" ? "grayscale invert" : "grayscale"}`} />
            <span className="sr-only">{label}</span>
          </div>
          <p
            style={{ color: textColor }}
            className="rounded-full tracking-wider bg-hero-surface text-foreground select-none py-1 px-4 text-center text-xs sm:text-sm md:text-base">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
