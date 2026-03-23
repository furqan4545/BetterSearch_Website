import { HotkeyCard } from "./hotkey-card";

const hotkeys = [
  { keys: ["⌘", "⇧", "Space"], label: "Open BetterSearch" },
  { keys: ["Esc"], label: "Close" },
];

export function HotkeysSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-gradient">Keyboard first</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/40">
            Built for speed. Every action has a shortcut.
          </p>
        </div>

        {/* Hotkey grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-lg mx-auto">
          {hotkeys.map((hk) => (
            <div key={hk.label} className="w-[calc(50%-0.5rem)] sm:w-56">
              <HotkeyCard keys={hk.keys} label={hk.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
