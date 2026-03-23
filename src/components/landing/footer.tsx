import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/30 text-sm">
          <Image
            src="/BetterSearch_Assets/logo_bettersearch.png"
            alt="BetterSearch"
            width={20}
            height={20}
            className="rounded opacity-50"
          />
          <span>BetterSearch</span>
          <span className="text-white/15">·</span>
          <span>Built for macOS</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/20">
          <a
            href="https://github.com/furqan4545/BetterSearch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/40 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:ali@screenshow.app"
            className="hover:text-white/40 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
