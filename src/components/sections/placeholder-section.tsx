type PlaceholderSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderSection({
  id,
  eyebrow,
  title,
  description,
}: PlaceholderSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/5 bg-surface/50 p-10 sm:p-14">
        <p className="text-sm tracking-[0.3em] text-accent uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          {description}
        </p>
      </div>
    </section>
  );
}
