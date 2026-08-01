"use client";

export function LogoIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <i
      className={`fi fi-sr-chart-line-up text-secondary leading-none ${className}`}
      style={{ fontSize: size, width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      aria-hidden
    />
  );
}
