import { ParticleCanvas } from "./particle-canvas";
import { KeyboardShortcut } from "./keyboard-shortcut";

const DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
  "https://github.com/furqan4545/BetterSearch/releases/download/1.5/BetterSearch.1.5.dmg";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden min-h-[80vh] justify-center">
      {/* Particle shader background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleCanvas
          imageSrc="/BetterSearch_Assets/logo_bettersearch.png"
          className="w-full h-full opacity-30"
        />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Heading */}
        <h1 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-center max-w-3xl leading-tight">
          Spotlight,{" "}
          <span className="text-gradient">but it actually works</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up-delay-1 mt-4 sm:mt-5 text-base sm:text-lg text-white/50 text-center max-w-xl leading-relaxed">
          A lightweight macOS search that finds your files, not random{" "}
          <code className="text-white/40 text-sm bg-white/5 px-1.5 py-0.5 rounded">
            .d.ts
          </code>{" "}
          files from node_modules.
        </p>

        {/* Shortcut Key */}
        <div className="animate-fade-in-up-delay-2 mt-8 flex flex-col items-center gap-2">
          <KeyboardShortcut keys={["⌘", "⇧", "Space"]} size="lg" />
          <span className="text-xs text-white/30 mt-1">to launch</span>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-3 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-full
              bg-white text-black font-medium text-sm
              hover:bg-white/90 transition-all
              shadow-[0_0_20px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
            "
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Download for macOS
          </a>
          <a
            href="https://github.com/furqan4545/BetterSearch"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-full
              text-white/60 text-sm font-medium
              border border-white/10
              hover:text-white/80 hover:border-white/20
              transition-all
            "
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up-delay-3 mt-8 flex items-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/30">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
            3.9MB
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
            ~15MB RAM
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
            macOS 12.4+
          </div>
        </div>
      </div>
    </section>
  );
}
