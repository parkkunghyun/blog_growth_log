"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangToggle, useLang } from "@/lib/i18n";
import { ThemeToggle } from "@/lib/theme";

export function Header() {
  const pathname = usePathname();
  const { t } = useLang();
  const isAdmin = pathname?.startsWith("/admin");

  const nav = [
    { href: "/", label: t("nav.home"), key: "home" },
    { href: "/blog?cat=corporate", label: t("nav.corporate"), key: "corporate" },
    { href: "/blog?cat=ai", label: t("nav.ai"), key: "ai" },
    { href: "/blog?cat=culture", label: t("nav.culture"), key: "culture" },
  ];

  return (
    <header className="site-chrome fixed top-0 w-full z-50 border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 min-w-0">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <i
              className="fi fi-sr-chart-line-up text-on-surface text-[26px] leading-none group-hover:opacity-70 transition-opacity"
              aria-hidden
            />
            <span className="text-[17px] font-bold tracking-tight text-on-surface uppercase">
              Growth Log
            </span>
          </Link>
          {!isAdmin ? (
            <nav className="hidden md:flex items-center gap-6 text-[13px] tracking-wide">
              {nav.map((item) => {
                const homeActive = item.key === "home" && pathname === "/";
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={
                      homeActive
                        ? "text-on-surface font-semibold"
                        : "text-on-surface-variant hover:text-on-surface transition-colors"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          ) : (
            <span className="hidden sm:inline text-[12px] uppercase tracking-[0.14em] text-on-surface-variant">
              Admin
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
