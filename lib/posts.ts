import type { CategoryId } from "@/lib/categories";
import { CATEGORIES } from "@/lib/categories";

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  category: CategoryId;
  status: "draft" | "published";
  author_name: string | null;
  reading_minutes: number | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export const PLACEHOLDER_COVER =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80";

export function categoryLabel(id: string, lang: "en" | "ko" = "ko") {
  const found = CATEGORIES.find((c) => c.id === id);
  if (!found) return id;
  return lang === "ko" ? found.ko : found.en;
}

export function formatDate(iso: string | null, lang: "en" | "ko" = "ko") {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  // Deterministic (avoid Node vs browser Intl hydration mismatch)
  if (lang === "ko") return `${y}. ${m}. ${day}.`;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[d.getMonth()]} ${day}, ${y}`;
}
