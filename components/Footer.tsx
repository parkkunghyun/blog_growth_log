"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-chrome border-t border-outline-variant mt-auto py-5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-on-surface-variant text-xs leading-relaxed">
          {t("footer.tagline")}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            t("footer.privacy"),
            t("footer.terms"),
            t("footer.ethics"),
            t("footer.contact"),
          ].map((label) => (
            <Link
              key={label}
              className="text-on-surface-variant hover:text-on-surface transition-colors text-xs"
              href="#"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
