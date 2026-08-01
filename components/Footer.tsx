"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-primary-container py-5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-on-primary-container/70 text-xs">
          <span className="font-semibold text-white mr-2">Growth Log</span>
          {t("footer.tagline")}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <Link
            className="text-on-primary-container/70 hover:text-secondary-fixed transition-colors text-xs"
            href="#"
          >
            {t("footer.privacy")}
          </Link>
          <Link
            className="text-on-primary-container/70 hover:text-secondary-fixed transition-colors text-xs"
            href="#"
          >
            {t("footer.terms")}
          </Link>
          <Link
            className="text-on-primary-container/70 hover:text-secondary-fixed transition-colors text-xs"
            href="#"
          >
            {t("footer.ethics")}
          </Link>
          <Link
            className="text-on-primary-container/70 hover:text-secondary-fixed transition-colors text-xs"
            href="/about"
          >
            {t("footer.contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
