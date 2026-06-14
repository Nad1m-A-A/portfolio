export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nadim. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS, Motion, and GSAP.</p>
      </div>
    </footer>
  );
}
