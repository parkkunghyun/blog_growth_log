"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangToggle, useLang } from "@/lib/i18n";
import { ThemeToggle } from "@/lib/theme";

export function Header() {
  const pathname = usePathname();
  const { t } = useLang();

  const nav = [
    { href: "/", label: t("nav.home"), key: "home" },
    { href: "/blog?cat=corporate", label: t("nav.corporate"), key: "corporate" },
    { href: "/blog?cat=ai", label: t("nav.ai"), key: "ai" },
    { href: "/blog?cat=culture", label: t("nav.culture"), key: "culture" },
    { href: "/about", label: t("nav.about"), key: "about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter h-16 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <i
              className="fi fi-sr-chart-line-up text-secondary text-[28px] leading-none"
              aria-hidden
            />
            <span className="text-lg font-bold text-primary tracking-tight">
              Growth Log
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {nav.map((item) => {
              const isActive =
                (item.key === "home" && pathname === "/") ||
                (item.key === "about" && pathname === "/about") ||
                (["corporate", "ai", "culture"].includes(item.key) &&
                  pathname?.startsWith("/blog"));
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={
                    isActive && item.key === "home"
                      ? "text-secondary font-semibold border-b-2 border-secondary pb-0.5 transition-colors duration-200"
                      : item.key === "about" && isActive
                        ? "text-secondary font-semibold border-b-2 border-secondary pb-0.5 transition-colors duration-200"
                        : "text-on-surface-variant hover:text-secondary transition-colors duration-200"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center bg-surface-container rounded-full px-3 py-1.5 border border-outline-variant/30">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-on-surface-variant/60 ml-2 w-40 outline-none"
              placeholder={t("nav.search")}
              type="text"
            />
          </div>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
