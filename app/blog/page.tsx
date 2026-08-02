import { Suspense } from "react";
import { CategoryBar } from "@/components/CategoryBar";
import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/posts-server";
import { BlogHeading } from "@/components/BlogHeading";

async function BlogList({ cat }: { cat: string }) {
  const posts = await getPublishedPosts(cat === "all" ? null : cat);
  const [featured, ...rest] = posts;

  if (posts.length === 0) {
    return (
      <p className="text-on-surface-variant text-center py-12 text-sm">
        이 카테고리에 게시된 글이 없습니다.
      </p>
    );
  }

  return (
    <div className="space-y-8 md:space-y-10">
      {featured ? <PostCard post={featured} featured /> : null}
      {rest.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {rest.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat: raw } = await searchParams;
  const cat = raw ?? "all";

  return (
    <main className="pt-16 pb-12 md:pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      <section className="mb-6 md:mb-8 space-y-5">
        <BlogHeading />
        <CategoryBar active={cat} />
      </section>
      <Suspense
        fallback={<p className="text-on-surface-variant py-8 text-sm">불러오는 중…</p>}
      >
        <BlogList cat={cat} />
      </Suspense>
    </main>
  );
}
