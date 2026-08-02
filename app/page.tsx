import { CategoryBar } from "@/components/CategoryBar";
import { HomeIntro } from "@/components/HomeIntro";
import { HomePostsHeader } from "@/components/HomePostsHeader";
import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/posts-server";

export default async function HomePage() {
  const posts = await getPublishedPosts();

  return (
    <main className="pt-16 pb-12 md:pb-16">
      <section className="mb-8 md:mb-10">
        <HomeIntro />
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <HomePostsHeader />
        <div className="mb-5">
          <CategoryBar active="all" />
        </div>

        {posts.length === 0 ? (
          <p className="text-on-surface-variant text-center py-12 text-sm">
            아직 게시된 글이 없습니다.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
