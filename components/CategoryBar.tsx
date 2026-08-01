"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { CATEGORIES } from "@/lib/categories";

export function CategoryBar({
  active = "all",
  variant = "home",
}: {
  active?: "all" | string;
  variant?: "home" | "blog";
}) {
  const { lang, t } = useLang();
  const base =
    variant === "home"
      ? "whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors"
      : "whitespace-nowrap px-4 py-2 rounded-full transition-colors";

  const activeCls =
    variant === "home"
      ? "bg-on-surface text-surface font-semibold"
      : "bg-secondary-container text-on-secondary-container font-semibold";
  const idleCls =
    variant === "home"
      ? "bg-surface-container-high text-on-surface-variant hover:bg-secondary-container"
      : "bg-surface-container hover:bg-surface-container-high";

  return (
    <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
      <Link
        href="/blog"
        className={`${base} ${active === "all" ? activeCls : idleCls}`}
      >
        {t("cat.all")}
      </Link>
      {CATEGORIES.map((c) => (
        <Link
          key={c.id}
          href={`/blog?cat=${c.id}`}
          className={`${base} ${active === c.id ? activeCls : idleCls}`}
        >
          {lang === "ko" ? c.ko : c.en}
        </Link>
      ))}
    </div>
  );
}
