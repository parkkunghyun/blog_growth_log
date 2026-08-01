"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";

export function AdminSidebar() {
  const pathname = usePathname();
  const { t } = useLang();

  const items = [
    { href: "/admin", label: t("admin.dashboard"), icon: "dashboard" },
    { href: "/admin/posts", label: t("admin.content"), icon: "edit_note" },
    { href: "/admin/posts/new", label: t("admin.newPost"), icon: "post_add" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-48 bg-surface border-r border-outline-variant/30 px-3 py-4 sticky top-16 h-[calc(100vh-64px)] shrink-0">
      <p className="text-[11px] font-label-sm text-outline-variant uppercase tracking-wider mb-2 px-3">
        {t("admin.menu")}
      </p>
      <div className="space-y-0.5">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/admin" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "flex items-center gap-2 px-3 py-2 bg-secondary-fixed text-on-secondary-fixed font-medium rounded-lg text-sm transition-all"
                  : "flex items-center gap-2 px-3 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg text-sm transition-all"
              }
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
