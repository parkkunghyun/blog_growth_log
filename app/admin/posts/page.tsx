import Link from "next/link";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminPostsTable } from "@/components/AdminPostsTable";
import { getAllPosts } from "@/lib/posts-server";

export default async function ContentPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex pt-16 min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <main className="px-5 md:px-8 py-8 max-w-5xl mx-auto">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-outline-variant pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mb-2">
                Content
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-on-surface">
                Posts
              </h2>
            </div>
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-1.5 text-sm font-medium border border-on-surface text-on-surface px-4 py-2 hover:bg-on-surface hover:text-background transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              New post
            </Link>
          </div>
          <AdminPostsTable posts={posts} />
        </main>
      </div>
    </div>
  );
}
