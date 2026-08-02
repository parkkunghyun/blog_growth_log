"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MarkdownBody } from "@/components/MarkdownBody";
import { useLang } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";
import {
  estimateReadingMinutes,
  nowLocalInput,
  toSlug,
} from "@/lib/post-utils";
import type { CategoryId } from "@/lib/categories";

export default function NewPostPage() {
  const { t } = useLang();
  const router = useRouter();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const bodyImageInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<CategoryId | "">("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [publishAt, setPublishAt] = useState(nowLocalInput);
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingBodyImage, setUploadingBodyImage] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const slugPreview = useMemo(() => (title ? toSlug(title) : ""), [title]);

  function validateImage(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("이미지 파일만 업로드할 수 있습니다.");
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("이미지는 5MB 이하만 가능합니다.");
      return false;
    }
    return true;
  }

  function onCoverPick(file: File | null) {
    if (coverPreview) URL.revokeObjectURL(coverPreview);
    if (!file) {
      setCoverFile(null);
      setCoverPreview(null);
      return;
    }
    if (!validateImage(file)) return;
    setError(null);
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  }

  function insertAtCursor(snippet: string) {
    const el = contentRef.current;
    if (!el) {
      setContent(
        (prev) => `${prev}${prev && !prev.endsWith("\n") ? "\n" : ""}${snippet}`
      );
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const next = `${content.slice(0, start)}${snippet}${content.slice(end)}`;
    setContent(next);
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + snippet.length;
      el.setSelectionRange(pos, pos);
    });
  }

  async function uploadImage(file: File, folder: string) {
    const supabase = createClient();
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${folder}/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("covers")
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      });
    if (uploadError) throw new Error(uploadError.message);
    return supabase.storage.from("covers").getPublicUrl(path).data.publicUrl;
  }

  async function onBodyImagePick(file: File | null) {
    if (!file) return;
    if (!validateImage(file)) return;
    setError(null);
    setUploadingBodyImage(true);
    try {
      const url = await uploadImage(file, "content");
      insertAtCursor(`\n![이미지](${url})\n`);
      setPreview(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "이미지 업로드에 실패했습니다.");
    } finally {
      setUploadingBodyImage(false);
      if (bodyImageInputRef.current) bodyImageInputRef.current.value = "";
    }
  }

  async function publish() {
    setError(null);
    if (!title.trim()) {
      setError("제목을 입력하세요.");
      return;
    }
    if (!category) {
      setError("카테고리를 선택하세요.");
      return;
    }
    if (!content.trim()) {
      setError("본문을 입력하세요.");
      return;
    }

    setSaving(true);
    const supabase = createClient();
    const slug = toSlug(title);
    const publishedAt = new Date(publishAt || Date.now()).toISOString();

    let coverImageUrl: string | null = null;
    try {
      if (coverFile) {
        coverImageUrl = await uploadImage(coverFile, "covers");
      }
    } catch (e) {
      setSaving(false);
      setError(e instanceof Error ? e.message : "썸네일 업로드에 실패했습니다.");
      return;
    }

    const { error: insertError } = await supabase.from("posts").insert({
      title: title.trim(),
      slug,
      excerpt: excerpt.trim() || content.trim().slice(0, 120),
      content: content.trim(),
      cover_image_url: coverImageUrl,
      category,
      status: "published",
      author_name: "Growth Log",
      reading_minutes: estimateReadingMinutes(content),
      published_at: publishedAt,
    });

    setSaving(false);
    if (insertError) {
      setError(
        insertError.code === "23505"
          ? "같은 슬러그의 글이 이미 있습니다. 제목을 바꿔 주세요."
          : insertError.message
      );
      return;
    }

    router.push("/admin/posts");
    router.refresh();
  }

  return (
    <div className="flex pt-16 min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <main className="px-5 py-6 max-w-4xl mx-auto">
          <form
            className="grid grid-cols-1 lg:grid-cols-12 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              void publish();
            }}
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-3">
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold placeholder:opacity-30 p-0 outline-none"
                  placeholder="제목을 입력하세요..."
                  required
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {slugPreview ? (
                  <p className="text-xs text-outline">slug: {slugPreview}</p>
                ) : null}
                <div className="flex flex-wrap items-center gap-3">
                  <select
                    className="bg-surface-container-low border-outline-variant text-on-surface-variant rounded-lg px-3 py-1.5 text-sm focus:border-secondary transition-all"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value as CategoryId | "")
                    }
                    required
                  >
                    <option value="">카테고리 선택</option>
                    <option value="corporate">기업교육</option>
                    <option value="ai">AI</option>
                    <option value="culture">조직문화</option>
                  </select>
                </div>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-sm outline-none focus:border-secondary"
                  placeholder="요약 (비우면 본문 앞부분 사용)"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
              </div>

              <div className="border border-outline-variant overflow-hidden">
                <div className="border-b border-outline-variant bg-surface-container-low px-3 py-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-on-surface-variant">
                      Markdown
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-[12px] px-2.5 py-1.5 border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-on-surface transition-colors disabled:opacity-50"
                      disabled={uploadingBodyImage || preview}
                      onClick={() => bodyImageInputRef.current?.click()}
                      title="본문에 이미지 삽입"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        image
                      </span>
                      {uploadingBodyImage ? "업로드 중…" : "이미지"}
                    </button>
                    <input
                      ref={bodyImageInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      className="sr-only"
                      onChange={(e) =>
                        void onBodyImagePick(e.target.files?.[0] ?? null)
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className={`text-[12px] uppercase tracking-[0.12em] font-semibold px-3 py-1.5 border transition-colors ${
                      preview
                        ? "bg-on-surface text-background border-on-surface"
                        : "border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-on-surface"
                    }`}
                    onClick={() => setPreview((v) => !v)}
                  >
                    {preview ? t("newPost.edit") : t("newPost.preview")}
                  </button>
                </div>
                <div className="p-4 min-h-80 bg-surface-container-lowest">
                  {preview ? (
                    content.trim() ? (
                      <MarkdownBody content={content} />
                    ) : (
                      <p className="text-on-surface-variant/50 text-sm">
                        미리볼 내용이 없습니다.
                      </p>
                    )
                  ) : (
                    <textarea
                      ref={contentRef}
                      className="w-full min-h-72 resize-y bg-transparent border-none outline-none text-body-md text-on-surface placeholder:text-on-surface-variant/40 font-mono text-sm"
                      placeholder={
                        "## 제목\n\n본문을 **마크다운**으로 작성하세요.\n\n툴바의 이미지 버튼으로 사진을 넣을 수 있습니다."
                      }
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="border border-outline-variant p-6 space-y-6">
                <h4 className="text-[12px] uppercase tracking-[0.14em] font-semibold text-on-surface">
                  발행 설정
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="block font-body-md text-on-surface-variant">
                      발행 일정
                    </span>
                    <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2">
                      <span className="material-symbols-outlined text-outline text-[20px]">
                        calendar_today
                      </span>
                      <input
                        className="bg-transparent border-none focus:ring-0 text-label-sm w-full outline-none"
                        type="datetime-local"
                        value={publishAt}
                        onChange={(e) => setPublishAt(e.target.value)}
                      />
                    </div>
                  </div>
                  {error ? (
                    <p className="text-sm text-error">{error}</p>
                  ) : null}
                  <div className="pt-4 border-t border-outline-variant">
                    <button
                      className="w-full bg-on-surface text-background py-3 font-semibold text-sm uppercase tracking-[0.12em] hover:opacity-80 transition-opacity disabled:opacity-50"
                      type="submit"
                      disabled={saving || uploadingBodyImage}
                    >
                      {saving ? "…" : t("newPost.publish")}
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-outline-variant p-6 space-y-4">
                <h4 className="text-[12px] uppercase tracking-[0.14em] font-semibold text-on-surface">
                  대표 이미지 (썸네일)
                </h4>
                <label className="relative group cursor-pointer aspect-video overflow-hidden border border-dashed border-outline-variant hover:border-on-surface transition-colors flex flex-col items-center justify-center bg-surface-container-low">
                  {coverPreview ? (
                    <img
                      src={coverPreview}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : null}
                  <div
                    className={`relative z-10 flex flex-col items-center pointer-events-none ${
                      coverPreview ? "opacity-0 group-hover:opacity-100" : ""
                    }`}
                  >
                    <span className="material-symbols-outlined text-4xl text-on-surface mb-2">
                      upload_file
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-on-surface-variant bg-background/80 px-2 py-1">
                      {coverPreview
                        ? "다른 이미지 선택"
                        : "이미지 업로드 또는 클릭"}
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="sr-only"
                    onChange={(e) =>
                      onCoverPick(e.target.files?.[0] ?? null)
                    }
                  />
                </label>
                {coverFile ? (
                  <button
                    type="button"
                    className="w-full text-sm text-on-surface-variant hover:text-error"
                    onClick={() => onCoverPick(null)}
                  >
                    이미지 제거
                  </button>
                ) : (
                  <p className="font-label-sm text-outline-variant text-center">
                    JPG/PNG/WebP · 최대 5MB · 없으면 기본 이미지
                  </p>
                )}
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
