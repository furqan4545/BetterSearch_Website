export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
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
        <p className="text-xs text-white/15">
          Made with Love in Seoul.
        </p>
      </div>
    </footer>
  );
}
