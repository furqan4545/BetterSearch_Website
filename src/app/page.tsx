import { HeroSection } from "@/components/landing/hero-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { HotkeysSection } from "@/components/landing/hotkeys-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Top-left purple blob */}
        <div className="absolute -top-[300px] -left-[200px] w-[700px] h-[700px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
        {/* Top-right blue blob */}
        <div className="absolute -top-[100px] -right-[300px] w-[600px] h-[600px] rounded-full bg-blue-500/[0.06] blur-[120px]" />
        {/* Middle-left pink blob */}
        <div className="absolute top-[40%] -left-[200px] w-[500px] h-[500px] rounded-full bg-pink-500/[0.05] blur-[120px]" />
        {/* Middle-right green blob */}
        <div className="absolute top-[50%] -right-[150px] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        {/* Bottom center orange blob */}
        <div className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-orange-500/[0.05] blur-[120px]" />
      </div>

      <HeroSection />
      <ComparisonSection />
      <HotkeysSection />
      <Footer />
    </main>
  );
}
