import { HeroSection } from "@/components/landing/hero-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { HotkeysSection } from "@/components/landing/hotkeys-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ComparisonSection />
      <HotkeysSection />
      <Footer />
    </main>
  );
}
