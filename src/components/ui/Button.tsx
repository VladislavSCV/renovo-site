import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "light";
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90",
  outline:
    "border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]",
  ghost:
    "text-foreground/70 hover:text-foreground",
  light:
    "bg-white/10 text-white border border-white/20 hover:bg-white/15 backdrop-blur-sm",
};

export function Button({
  href,
  children,
  variant = "outline",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-all duration-500 rounded-full ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm tracking-wide transition-colors duration-300 ${
        light
          ? "text-white/70 hover:text-white"
          : "text-muted hover:text-foreground"
      }`}
    >
      {children}
      <span
        className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${
          light ? "text-white/50" : "text-accent"
        }`}
      >
        →
      </span>
    </Link>
  );
}
