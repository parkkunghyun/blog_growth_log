"use client";

import { useLang } from "@/lib/i18n";

export function BlogHeading() {
  const { t } = useLang();
  return (
    <div>
      <h1 className="text-[28px] md:text-[34px] font-bold tracking-tight text-on-surface mb-2">
        {t("blog.title")}
      </h1>
      <p className="text-on-surface-variant text-sm md:text-[15px] max-w-xl">
        {t("blog.desc")}
      </p>
    </div>
  );
}
