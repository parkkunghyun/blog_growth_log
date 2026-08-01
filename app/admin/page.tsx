"use client";

import Link from "next/link";
import { AdminSidebar } from "@/components/AdminSidebar";
import { useLang } from "@/lib/i18n";

export default function AdminDashboard() {
  const { t } = useLang();
  return (
    <div className="flex pt-16 min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 px-5 py-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-5">
          <header className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold text-on-surface">
                {t("adminDash.title")}
              </h1>
              <p className="text-sm text-on-surface-variant">
                {t("adminDash.subtitle")}
              </p>
            </div>
            <Link
              href="/admin/posts/new"
              className="text-sm font-medium bg-primary text-on-primary px-3 py-1.5 rounded-lg hover:opacity-90"
            >
              {t("content.newPost")}
            </Link>
          </header>

          <section className="grid grid-cols-3 gap-3">
            {[
              { label: "총 방문자", value: "12,482", delta: "+5.2%" },
              { label: "게시글", value: "158", delta: "+2" },
              { label: "댓글", value: "1,240", delta: "-1.5%" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20"
              >
                <p className="text-xs text-on-surface-variant mb-1">{s.label}</p>
                <p className="text-2xl font-bold text-on-surface">{s.value}</p>
                <p className="text-xs text-secondary mt-1">{s.delta}</p>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold">블로그 활동 추이</h2>
                <div className="flex gap-1 text-xs">
                  <span className="px-2 py-0.5 bg-surface-container-highest rounded">
                    7일
                  </span>
                  <span className="px-2 py-0.5 text-on-surface-variant rounded">
                    30일
                  </span>
                </div>
              </div>
              <div className="h-36 flex items-end justify-between gap-1.5">
                {[50, 33, 60, 25, 66, 80, 50].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-secondary/15 rounded-t relative"
                    style={{ height: `${h + 20}%` }}
                  >
                    <div
                      className="absolute inset-x-0 bottom-0 bg-secondary rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-outline">
                <span>월</span>
                <span>화</span>
                <span>수</span>
                <span>목</span>
                <span>금</span>
                <span>토</span>
                <span>일</span>
              </div>
            </div>

            <div className="lg:col-span-2 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20">
              <h2 className="text-sm font-semibold mb-3">최근 작성된 글</h2>
              <ul className="space-y-3">
                {[
                  { title: "AI와 교육의 미래", meta: "2시간 전" },
                  { title: "2024 에듀테크 툴", meta: "5시간 전" },
                  { title: "LLM 튜닝 가이드", meta: "어제" },
                ].map((p) => (
                  <li key={p.title} className="flex justify-between gap-2 text-sm">
                    <span className="font-medium line-clamp-1">{p.title}</span>
                    <span className="text-xs text-outline shrink-0">{p.meta}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/admin/posts"
                className="block mt-4 text-center text-xs font-medium text-secondary border border-secondary/40 rounded-lg py-2 hover:bg-secondary/5"
              >
                전체 목록 보기
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
