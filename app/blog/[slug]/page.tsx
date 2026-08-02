import { notFound } from "next/navigation";
import { PostArticle } from "@/components/PostArticle";
import { getPostBySlug } from "@/lib/posts-server";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="pt-16 pb-12 md:pb-16">
      <PostArticle post={post} />
    </main>
  );
}
