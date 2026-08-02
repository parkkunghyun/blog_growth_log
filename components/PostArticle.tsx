"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { localizePost } from "@/lib/post-i18n";
import { MarkdownBody } from "@/components/MarkdownBody";
import {
  categoryLabel,
  formatDate,
  PLACEHOLDER_COVER,
  type Post,
} from "@/lib/posts";

export function PostArticle({ post }: { post: Post }) {
  const { lang, t } = useLang();
  const p = localizePost(post, lang);
  const cover = p.cover_image_url || PLACEHOLDER_COVER;
  const cat = categoryLabel(p.category, lang);
  const date = formatDate(p.published_at ?? p.created_at, lang);
  const mins = p.reading_minutes ?? 5;

  return (
    <article className="max-w-[760px] mx-auto px-margin-mobile">
      <header className="mb-10">
        <p className="text-[12px] uppercase tracking-[0.14em] text-on-surface-variant mb-5">
          {date}
          <span className="mx-2 text-outline">|</span>
          {cat}
          <span className="mx-2 text-outline">|</span>
          {mins} min
        </p>
        <h1 className="text-[32px] md:text-[44px] font-bold text-on-surface mb-5 leading-[1.15] tracking-tight">
          {p.title}
        </h1>
        {p.excerpt ? (
          <p className="text-[17px] text-on-surface-variant mb-6 leading-relaxed">
            {p.excerpt}
          </p>
        ) : null}
        <div className="flex items-center gap-3 border-y border-outline-variant py-4 text-sm text-on-surface">
          <span className="font-semibold">{p.author_name ?? "Growth Log"}</span>
        </div>
      </header>

      <figure className="mb-12">
        <div className="aspect-[16/10] w-full overflow-hidden bg-surface-container">
          <img src={cover} alt="" className="w-full h-full object-cover" />
        </div>
      </figure>

      <MarkdownBody content={p.content} />

      <div className="mt-16 pt-8 border-t border-outline-variant">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-on-surface font-medium text-sm hover:opacity-60 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {t("blog.back")}
        </Link>
      </div>
    </article>
  );
}
