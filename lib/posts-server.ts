import { createClient } from "@/lib/supabase/server";
import type { Post } from "@/lib/posts";
import { normalizeSlug } from "@/lib/post-utils";

export async function getPublishedPosts(category?: string | null) {
  const supabase = await createClient();
  let query = supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (category && category !== "all") {
    query = query.eq("category", category);
  }

  const { data, error } = await query;
  if (error) {
    console.error("getPublishedPosts", error.message);
    return [] as Post[];
  }
  return (data ?? []) as Post[];
}

export async function getPostBySlug(slug: string) {
  const decoded = normalizeSlug(slug);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", decoded)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("getPostBySlug", error.message);
    return null;
  }
  return data as Post | null;
}

export async function getAllPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("getAllPosts", error.message);
    return [] as Post[];
  }
  return (data ?? []) as Post[];
}
