import { HeroSection } from "@/components/sections/hero-section";
import { WorkingOnSection } from "@/components/sections/working-on-section";
import ProjectsSection from "@/components/sections/projects-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <WorkingOnSection />

      <ProjectsSection />
    </>
  );
}
