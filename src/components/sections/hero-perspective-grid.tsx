export function HeroPerspectiveGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-[18%] overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-x-0 bottom-0 h-full perspective-[520px] perspective-origin-[50%_0%]">
        <div className="hero-perspective-grid-plane absolute inset-x-[-40%] bottom-0 h-[220%] origin-bottom transform-[rotateX(68deg)]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[42%] bg-linear-to-b from-background via-background/80 to-transparent" />
    </div>
  );
}
