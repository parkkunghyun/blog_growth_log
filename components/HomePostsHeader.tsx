"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function HomePostsHeader() {
  const { t } = useLang();
  return (
    <div className="flex items-end justify-between gap-4 mb-3">
      <h2 className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-semibold text-on-surface">
        {t("home.postsTitle")}
      </h2>
      <Link
        href="/blog"
        className="text-[12px] uppercase tracking-[0.12em] text-on-surface-variant hover:text-on-surface transition-colors"
      >
        {t("home.introCta")}
      </Link>
    </div>
  );
}
