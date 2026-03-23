export function GradientBorder({
  children,
  className,
  animated = true,
}: {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}) {
  return (
    <div
      className={`gradient-border-wrapper ${className ?? ""}`}
      style={!animated ? { animation: "none" } : undefined}
    >
      <div className="gradient-border-inner">{children}</div>
    </div>
  );
}
