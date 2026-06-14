import { HeroSection } from "@/components/sections/hero-section";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <PlaceholderSection
        id="work"
        eyebrow="Work"
        title="Selected projects coming soon"
        description="Replace this section with case studies, screenshots, and links to your best work. Each project can get its own detail page under the app router when you are ready."
      />

      <PlaceholderSection
        id="about"
        eyebrow="About"
        title="Your story goes here"
        description="Share your background, skills, and what kind of roles or collaborations you are looking for. Keep it concise and let the work speak for itself."
      />

      <PlaceholderSection
        id="contact"
        eyebrow="Contact"
        title="Open to new opportunities"
        description="Add your email, social links, or a contact form here. A simple mailto link or Cal.com embed is enough to start."
      />
    </>
  );
}
