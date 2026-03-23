export function KeyboardShortcut({
  keys,
  className,
  size = "default",
}: {
  keys: string[];
  className?: string;
  size?: "sm" | "default" | "lg";
}) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs min-w-[24px]",
    default: "px-3 py-1.5 text-sm min-w-[32px]",
    lg: "px-4 py-2 text-base min-w-[40px]",
  };

  return (
    <div className={`flex items-center gap-1.5 ${className ?? ""}`}>
      {keys.map((key, i) => (
        <span key={i} className="contents">
          <kbd
            className={`
              ${sizeClasses[size]}
              inline-flex items-center justify-center
              font-mono font-medium rounded-lg
              key-shimmer
              border border-white/10
              text-white/90
              shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]
              select-none
            `}
          >
            {key}
          </kbd>
          {i < keys.length - 1 && (
            <span className="text-white/30 text-xs">+</span>
          )}
        </span>
      ))}
    </div>
  );
}
