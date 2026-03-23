import { HotkeyCard } from "./hotkey-card";

const hotkeys = [
  { keys: ["⌘", "⇧", "Space"], label: "Open BetterSearch" },
  { keys: ["⌘", "C"], label: "Copy file path" },
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {hotkeys.map((hk) => (
            <HotkeyCard key={hk.label} keys={hk.keys} label={hk.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
