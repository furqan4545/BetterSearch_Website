export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a
            href="https://github.com/furqan4545/BetterSearch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:ali@screenshow.app"
            className="hover:text-white/80 transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-sm text-white/40">
          Made with <span className="text-red-500 text-base leading-none">&#9829;</span> in Seoul.
        </p>
      </div>
    </footer>
  );
}
