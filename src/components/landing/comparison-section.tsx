import { GradientBorder } from "./gradient-border";
import { PixelatedImage } from "./pixelated-image";

export function ComparisonSection() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white/80">
            See the difference
          </h2>
          <p className="mt-2 text-sm text-white/30">
            Hover to reveal
          </p>
        </div>

        {/* Comparison image with pixelated-to-clear effect */}
        <GradientBorder>
          <div className="p-1 sm:p-2">
            <PixelatedImage
              src="/BetterSearch_Assets/comparison.png"
              alt="BetterSearch finds apps like Screen Studio and Xnapper when searching 'screenshot', while Spotlight returns .d.ts files"
              width={1600}
              height={600}
            />

            {/* Labels */}
            <div className="flex justify-between px-4 sm:px-8 py-3 text-xs sm:text-sm text-white/40">
              <span>
                <span className="text-green-400/80">BetterSearch</span> — finds
                actual apps
              </span>
              <span>
                <span className="text-red-400/80">Spotlight</span> — finds .d.ts
                files
              </span>
            </div>
          </div>
        </GradientBorder>
      </div>
    </section>
  );
}
