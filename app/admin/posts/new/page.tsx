"use client";

import { AdminSidebar } from "@/components/AdminSidebar";
import { useLang } from "@/lib/i18n";

export default function NewPostPage() {
  const { t } = useLang();
  return (
    <>
<div className="flex pt-16 min-h-screen bg-background">
<AdminSidebar />
<div className="flex-1 overflow-auto">
<main className="px-5 py-6 max-w-4xl mx-auto">
<form className="grid grid-cols-1 lg:grid-cols-12 gap-4" id="editor-form">

<div className="lg:col-span-8 space-y-4">

<div className="space-y-3">
<input className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold placeholder:opacity-30 p-0 outline-none" placeholder="제목을 입력하세요..." required type="text"/>
<div className="flex flex-wrap items-center gap-3">
<select className="bg-surface-container-low border-outline-variant text-on-surface-variant rounded-lg px-3 py-1.5 text-sm focus:border-secondary transition-all">
<option value="">카테고리 선택</option>
<option value="corporate">기업교육</option>
<option value="ai">AI</option>
<option value="culture">조직문화</option>
</select>
<div className="flex-1 flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-1">
<span className="material-symbols-outlined text-outline">sell</span>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-body-md py-1" placeholder="태그 입력 (엔터로 구분)" type="text"/>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden shadow-sm">

<div className="border-b border-outline-variant bg-surface-container-low p-2 flex flex-wrap gap-1">
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="굵게" type="button"><span className="material-symbols-outlined">format_bold</span></button>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="기울임꼴" type="button"><span className="material-symbols-outlined">format_italic</span></button>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="제목 1" type="button"><span className="material-symbols-outlined">title</span></button>
<div className="w-px h-6 bg-outline-variant mx-1 my-auto"></div>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="목록" type="button"><span className="material-symbols-outlined">format_list_bulleted</span></button>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="숫자 목록" type="button"><span className="material-symbols-outlined">format_list_numbered</span></button>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="인용구" type="button"><span className="material-symbols-outlined">format_quote</span></button>
<div className="w-px h-6 bg-outline-variant mx-1 my-auto"></div>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="이미지 삽입" type="button"><span className="material-symbols-outlined">image</span></button>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="코드 블록" type="button"><span className="material-symbols-outlined">code</span></button>
<button className="p-2 hover:bg-surface-variant rounded-lg transition-colors" title="링크" type="button"><span className="material-symbols-outlined">link</span></button>
<div className="flex-1"></div>
<button className="flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-lg text-label-sm font-bold hover:brightness-95 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">psychology</span>
                            AI 초안 생성
                        </button>
</div>

<div
  className="p-4 min-h-[320px] bg-surface-container-lowest rounded-b-xl"
>
  <textarea
    className="w-full min-h-[288px] resize-y bg-transparent border-none outline-none text-body-md text-on-surface placeholder:text-on-surface-variant/40"
    placeholder="이곳에 교육적인 통찰력을 담아내세요..."
  />
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">
<div className="sidebar-sticky space-y-6">

<div className="glass-panel rounded-xl p-6 shadow-sm space-y-6">
<h4 className="font-headline-md text-[18px] text-primary">발행 설정</h4>
<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<span className="font-body-md text-on-surface-variant">공개 여부</span>
<div className="relative inline-flex items-center">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</div>
</label>
<div className="space-y-2">
<span className="block font-body-md text-on-surface-variant">발행 일정</span>
<div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2">
<span className="material-symbols-outlined text-outline text-[20px]">calendar_today</span>
<input className="bg-transparent border-none focus:ring-0 text-label-sm w-full outline-none" type="datetime-local" defaultValue="2024-11-20T14:00"/>
</div>
</div>
<div className="pt-4 border-t border-outline-variant flex flex-col gap-3">
<button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:shadow-lg transition-all active:scale-[0.98]" type="submit">{t("newPost.publish")}</button>
<button className="w-full bg-surface-container text-on-surface-variant py-3 rounded-xl font-bold hover:bg-surface-variant transition-all" type="button">{t("newPost.draft")}</button>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 shadow-sm space-y-4">
<h4 className="font-headline-md text-[18px] text-primary">대표 이미지 (썸네일)</h4>
<div className="relative group cursor-pointer aspect-video rounded-lg overflow-hidden border-2 border-dashed border-outline-variant hover:border-secondary transition-colors flex flex-col items-center justify-center bg-surface-container-low">
<div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUXIhB300IxSupM2OIEQji1YdGaiEFDjZ-gNRllkPXYdWjDMhrI5P890GYEycJDwdTAkOejksE0WOw9ECqaBEfRkxl6Nz--iFPjYdU9e6WbjYgWuXEcO6tRcCHa3gAwxogRBbEOQv8c-qZDM3F0jXIYa-dvQKy1ud8TBqcQhEB9IyW317R_WdNO_ZzBHi9JNwydmRHj6o3CGnUKGH8gC1FS7noI687pOEwRdlR7E_kHxeNUGkSWC7gJA')"}}></div>
<div className="relative z-10 flex flex-col items-center pointer-events-none">
<span className="material-symbols-outlined text-4xl text-secondary mb-2">upload_file</span>
<span className="font-label-sm text-on-surface-variant">이미지 업로드 또는 드래그</span>
</div>
</div>
<p className="font-label-sm text-outline-variant text-center">권장 사이즈: 1200 x 630px (16:9)</p>
</div>
</div>
</div>
</form>
</main>
</div>
</div>
    </>
  );
}
