export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.2em] font-medium ${
        light ? "text-white/50" : "text-muted"
      }`}
    >
      {children}
    </p>
  );
}
