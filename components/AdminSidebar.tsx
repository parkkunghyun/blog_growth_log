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

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    if (href === "/admin/posts/new") return pathname === "/admin/posts/new";
    return pathname === "/admin/posts";
  }

  return (
    <aside className="hidden md:flex flex-col w-52 border-r border-outline-variant px-3 py-6 sticky top-16 h-[calc(100vh-64px)] shrink-0 bg-background">
      <p className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant mb-3 px-3">
        {t("admin.menu")}
      </p>
      <div className="space-y-0.5">
        {items.map((item) => {
          const on = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                on
                  ? "flex items-center gap-2.5 px-3 py-2.5 bg-on-surface text-background font-medium text-sm transition-colors"
                  : "flex items-center gap-2.5 px-3 py-2.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low text-sm transition-colors"
              }
            >
              <span className="material-symbols-outlined text-[18px]">
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
