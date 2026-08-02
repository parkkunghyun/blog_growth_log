"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { localizePost } from "@/lib/post-i18n";
import {
  categoryLabel,
  formatDate,
  PLACEHOLDER_COVER,
  type Post,
} from "@/lib/posts";

const cardShell = "blog-card";

export function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  const { lang } = useLang();
  const p = localizePost(post, lang);
  const cover = p.cover_image_url || PLACEHOLDER_COVER;
  const cat = categoryLabel(p.category, lang);
  const date = formatDate(p.published_at ?? p.created_at, lang);

  if (featured) {
    return (
      <Link
        href={`/blog/${p.slug}`}
        className={`group grid grid-cols-1 lg:grid-cols-12 ${cardShell}`}
      >
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center p-6 md:p-8 lg:p-10 min-h-0">
          <p className="text-[12px] uppercase tracking-[0.14em] text-on-surface-variant mb-4">
            {date}
            <span className="mx-2 text-outline-variant">|</span>
            {cat}
          </p>
          <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-bold leading-[1.15] tracking-tight text-on-surface mb-4">
            {p.title}
          </h2>
          {p.excerpt ? (
            <p className="text-[15px] leading-relaxed text-on-surface-variant line-clamp-4 max-w-md">
              {p.excerpt}
            </p>
          ) : null}
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 aspect-[4/3] lg:aspect-auto lg:min-h-[340px] overflow-hidden bg-surface-container">
          <img
            src={cover}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${p.slug}`}
      className={`group flex flex-col h-full ${cardShell}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-container">
        <img
          src={cover}
          alt=""
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 md:p-5">
        <p className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mb-2">
          {date}
          <span className="mx-2 text-outline">|</span>
          {cat}
        </p>
        <h3 className="text-[16px] md:text-[17px] font-bold leading-snug text-on-surface mb-2 line-clamp-2">
          {p.title}
        </h3>
        {p.excerpt ? (
          <p className="text-[13px] leading-relaxed text-on-surface-variant line-clamp-3">
            {p.excerpt}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
