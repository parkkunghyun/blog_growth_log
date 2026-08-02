"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { CATEGORIES } from "@/lib/categories";

export function CategoryBar({
  active = "all",
}: {
  active?: "all" | string;
  variant?: "home" | "blog";
}) {
  const { lang, t } = useLang();

  const items = [
    { id: "all", href: "/blog", label: t("cat.all") },
    ...CATEGORIES.map((c) => ({
      id: c.id,
      href: `/blog?cat=${c.id}`,
      label: lang === "ko" ? c.ko : c.en,
    })),
  ];

  return (
    <nav className="flex items-center gap-5 md:gap-7 overflow-x-auto pb-1 scrollbar-hide border-b border-outline-variant">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`whitespace-nowrap pb-3 text-[12px] md:text-[13px] uppercase tracking-[0.12em] transition-colors border-b-2 -mb-px ${
              isActive
                ? "text-on-surface font-bold border-on-surface"
                : "text-on-surface-variant border-transparent hover:text-on-surface"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
