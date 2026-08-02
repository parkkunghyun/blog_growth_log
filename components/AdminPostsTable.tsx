"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  categoryLabel,
  formatDate,
  PLACEHOLDER_COVER,
  type Post,
} from "@/lib/posts";
import { useLang } from "@/lib/i18n";

export function AdminPostsTable({ posts }: { posts: Post[] }) {
  const { lang } = useLang();
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);

  async function remove(id: string) {
    if (!confirm("이 글을 삭제할까요?")) return;
    setBusyId(id);
    const supabase = createClient();
    const { error } = await supabase.from("posts").delete().eq("id", id);
    setBusyId(null);
    if (error) {
      alert(error.message);
      return;
    }
    router.refresh();
  }

  if (posts.length === 0) {
    return (
      <div className="border border-outline-variant p-12 text-center text-on-surface-variant text-sm">
        아직 글이 없습니다.{" "}
        <Link href="/admin/posts/new" className="text-on-surface underline underline-offset-2">
          새 글 작성
        </Link>
      </div>
    );
  }

  return (
    <div className="border border-outline-variant overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="px-5 py-3.5 text-[11px] uppercase tracking-[0.12em] text-on-surface-variant font-semibold">
                Post
              </th>
              <th className="px-5 py-3.5 text-[11px] uppercase tracking-[0.12em] text-on-surface-variant font-semibold">
                Category
              </th>
              <th className="px-5 py-3.5 text-[11px] uppercase tracking-[0.12em] text-on-surface-variant font-semibold">
                Date
              </th>
              <th className="px-5 py-3.5 text-[11px] uppercase tracking-[0.12em] text-on-surface-variant font-semibold">
                Status
              </th>
              <th className="px-5 py-3.5 text-[11px] uppercase tracking-[0.12em] text-on-surface-variant font-semibold text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              const cover = post.cover_image_url || PLACEHOLDER_COVER;
              const published = post.status === "published";
              return (
                <tr
                  key={post.id}
                  className="border-b border-outline-variant last:border-0 hover:bg-surface-container-low/60 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-10 overflow-hidden bg-surface-container shrink-0">
                        <img className="w-full h-full object-cover" alt="" src={cover} />
                      </div>
                      <div className="min-w-0">
                        <Link
                          href={published ? `/blog/${post.slug}` : "#"}
                          className="font-semibold text-on-surface hover:opacity-60 transition-opacity line-clamp-1"
                        >
                          {post.title}
                        </Link>
                        <div className="text-[11px] text-on-surface-variant mt-0.5 truncate">
                          {post.slug}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs uppercase tracking-wide text-on-surface-variant">
                    {categoryLabel(post.category, lang)}
                  </td>
                  <td className="px-5 py-4 text-sm text-on-surface-variant">
                    {formatDate(post.published_at ?? post.created_at, lang)}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-[11px] uppercase tracking-[0.12em] font-semibold ${
                        published ? "text-on-surface" : "text-on-surface-variant"
                      }`}
                    >
                      {published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      className="text-on-surface-variant hover:text-error transition-colors disabled:opacity-40"
                      type="button"
                      disabled={busyId === post.id}
                      onClick={() => void remove(post.id)}
                      title="삭제"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 border-t border-outline-variant text-xs text-on-surface-variant uppercase tracking-wide">
        Total <span className="font-semibold text-on-surface">{posts.length}</span>
      </div>
    </div>
  );
}
