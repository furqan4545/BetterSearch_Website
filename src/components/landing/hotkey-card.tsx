import { KeyboardShortcut } from "./keyboard-shortcut";

export function HotkeyCard({
  keys,
  label,
}: {
  keys: string[];
  label: string;
}) {
  return (
    <div className="gradient-border-wrapper group cursor-default">
      <div className="gradient-border-inner">
        <div className="glass rounded-[15px] p-4 sm:p-6 flex flex-col items-center gap-3 transition-transform duration-200 group-hover:scale-[1.02] overflow-hidden">
          <KeyboardShortcut keys={keys} size="sm" />
          <span className="text-sm text-white/50 text-center">{label}</span>
        </div>
      </div>
    </div>
  );
}
