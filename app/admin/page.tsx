import Link from "next/link";
import { AdminSidebar } from "@/components/AdminSidebar";
import { getAllPosts } from "@/lib/posts-server";
import { formatDate } from "@/lib/posts";

export default async function AdminDashboard() {
  const posts = await getAllPosts();
  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.length - published;
  const recent = posts.slice(0, 5);

  return (
    <div className="flex pt-16 min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 px-5 md:px-8 py-8 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="flex items-end justify-between gap-3 border-b border-outline-variant pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mb-2">
                Overview
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-on-surface">
                Dashboard
              </h1>
            </div>
            <Link
              href="/admin/posts/new"
              className="text-sm font-medium border border-on-surface text-on-surface px-4 py-2 hover:bg-on-surface hover:text-background transition-colors"
            >
              + New post
            </Link>
          </header>

          <section className="grid grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
            {[
              { label: "All posts", value: String(posts.length) },
              { label: "Published", value: String(published) },
              { label: "Drafts", value: String(drafts) },
            ].map((s) => (
              <div key={s.label} className="bg-background p-5">
                <p className="text-[11px] uppercase tracking-[0.12em] text-on-surface-variant mb-2">
                  {s.label}
                </p>
                <p className="text-3xl font-bold text-on-surface tracking-tight">
                  {s.value}
                </p>
              </div>
            ))}
          </section>

          <section className="border border-outline-variant">
            <div className="px-5 py-4 border-b border-outline-variant">
              <h2 className="text-[12px] uppercase tracking-[0.14em] font-semibold text-on-surface">
                Recent posts
              </h2>
            </div>
            {recent.length === 0 ? (
              <p className="px-5 py-8 text-sm text-on-surface-variant">
                아직 글이 없습니다.
              </p>
            ) : (
              <ul>
                {recent.map((p, i) => (
                  <li
                    key={p.id}
                    className={`flex justify-between gap-3 px-5 py-4 text-sm ${
                      i < recent.length - 1 ? "border-b border-outline-variant" : ""
                    }`}
                  >
                    <span className="font-medium text-on-surface line-clamp-1">
                      {p.title}
                    </span>
                    <span className="text-xs text-on-surface-variant shrink-0 uppercase tracking-wide">
                      {formatDate(p.published_at ?? p.created_at)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/admin/posts"
              className="block text-center text-xs uppercase tracking-[0.14em] font-medium text-on-surface border-t border-outline-variant py-3.5 hover:bg-surface-container-low transition-colors"
            >
              View all
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
