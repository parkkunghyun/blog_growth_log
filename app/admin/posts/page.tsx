"use client";

import Link from "next/link";
import { AdminSidebar } from "@/components/AdminSidebar";
import { useLang } from "@/lib/i18n";

export default function ContentPage() {
  const { t } = useLang();
  return (
    <>
<div className="flex pt-16 min-h-screen bg-background">
<AdminSidebar />
<div className="flex-1 overflow-auto">
<main className="px-5 py-6 max-w-4xl mx-auto">

<div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div>
<h2 className="text-xl font-bold text-primary mb-0.5">{t("content.title")}</h2>
<p className="text-sm text-on-surface-variant">{t("content.subtitle")}</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-1.5 bg-surface-container-high border border-outline-variant px-3 py-1.5 rounded-lg text-sm hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[18px]">upload</span>
<span className="font-medium text-on-surface">{t("content.export")}</span>
</button>
<Link href="/admin/posts/new" className="flex items-center gap-1.5 bg-secondary text-on-secondary px-3 py-1.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
<span className="font-medium">{t("content.newPost")}</span>
</Link>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl mb-4 border border-outline-variant/30">
<div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
<div className="relative w-full lg:max-w-sm">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="w-full pl-10 pr-3 py-2 rounded-lg border border-outline-variant bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="게시글 제목, 태그 또는 작성자 검색..." type="text"/>
</div>
<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
<select className="flex-1 lg:flex-none px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-on-surface-variant">
<option>전체 상태</option>
<option>공개됨</option>
<option>비공개</option>
<option>예약됨</option>
</select>
<select className="flex-1 lg:flex-none px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-on-surface-variant">
<option>최신순</option>
<option>조회수 높은순</option>
<option>조회수 낮은순</option>
</select>
<button className="p-3 border border-outline-variant rounded-xl hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">tune</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">

<div className="px-6 py-4 bg-surface-container-low border-b border-outline-variant/30 flex items-center justify-between hidden" id="bulk-actions">
<div className="flex items-center gap-4">
<span className="text-on-surface font-semibold"><span id="selected-count">0</span>개 항목 선택됨</span>
<div className="h-4 w-[1px] bg-outline-variant"></div>
<button className="text-error flex items-center gap-1 hover:bg-error-container/20 px-3 py-1.5 rounded-lg transition-colors">
<span className="material-symbols-outlined text-[18px]">delete</span>
<span className="text-sm font-bold">삭제</span>
</button>
<button className="text-secondary flex items-center gap-1 hover:bg-secondary-fixed/20 px-3 py-1.5 rounded-lg transition-colors">
<span className="material-symbols-outlined text-[18px]">visibility</span>
<span className="text-sm font-bold">공개 설정 변경</span>
</button>
</div>
<button className="text-on-surface-variant hover:underline text-sm font-medium">선택 해제</button>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high/30">
<th className="px-6 py-4 w-12">
<input className="rounded border-outline-variant text-secondary focus:ring-secondary transition-all" id="master-checkbox" type="checkbox"/>
</th>
<th className="px-6 py-4 text-on-surface-variant font-semibold text-sm">게시글 정보</th>
<th className="px-6 py-4 text-on-surface-variant font-semibold text-sm">카테고리</th>
<th className="px-6 py-4 text-on-surface-variant font-semibold text-sm">작성일</th>
<th className="px-6 py-4 text-on-surface-variant font-semibold text-sm text-center">조회수</th>
<th className="px-6 py-4 text-on-surface-variant font-semibold text-sm">상태</th>
<th className="px-6 py-4 text-on-surface-variant font-semibold text-sm text-right">관리</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-5">
<input className="row-checkbox rounded border-outline-variant text-secondary focus:ring-secondary transition-all" type="checkbox"/>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-16 h-10 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" alt="A professional, high-quality photograph of a futuristic AI learning interface displayed on a sleek t" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbM_u7NkuMQ0IbmQh7eZ5VJt8pXVzC93_3WuGGULJskmkuqXWbjS-JI5MaB-KFOCH2vFyGyDCk3pdmBZMQyXyfcWrI5T4f6NYeJnzhVM0dA9Q1h1jss-357lj1vZVUuN9QDOWjGoIn-qWn-mxvAW6JhAkvqh21yqtD8Qa9i_PK1T0fJIGLfWSAQei31qhqE1Q4215XZhtZJww_M6tkJW89FdU8TjXVJoZhZU9_pfdBT5ni8dkmNAhhOA" />
</div>
<div>
<div className="font-bold text-on-surface mb-0.5 group-hover:text-secondary transition-colors cursor-pointer">AI가 바꾸는 2024년 미래 교육 트렌드</div>
<div className="text-xs text-on-surface-variant">작성자: 김민준 연구원</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed-variant text-[11px] font-bold">AI Explained</span>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant font-medium">2024-05-15</td>
<td className="px-6 py-5 text-center font-label-sm text-on-surface-variant">1,245</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-xs font-bold">공개됨</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<div className="flex justify-end gap-2">
<button className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-5">
<input className="row-checkbox rounded border-outline-variant text-secondary focus:ring-secondary transition-all" type="checkbox"/>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-16 h-10 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" alt="A minimalist architectural scene of a modern university library, featuring clean white lines, large " src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR_FmBzVAyfiuJVNGKaHZ0cIbZSA2c_R_0hHOl9VtmwS8FOb1WHAfwt3KMw-RWT1YhiEgmbSDpsB4ExpUyVBHtNKRmIfGLoDSS14Dti11xXuYjQeu1y6JBaBjs8KZYDtDOD-vgKEzxKuL03lMT-B6D40Y_dUVShw4qaIM-CDq0j5hHdYYIJF2nZ27lYdwYVgOg-Jf7C_m5AhRduuKtZFz1g8GpbfC-QWOfDCYWWQ-JI7T1yFyVgq0X-w" />
</div>
<div>
<div className="font-bold text-on-surface mb-0.5 group-hover:text-secondary transition-colors cursor-pointer">초등학생을 위한 생성형 AI 입문 가이드</div>
<div className="text-xs text-on-surface-variant">작성자: 이지은 팀장</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px] font-bold">Tutorials</span>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant font-medium">2024-05-12</td>
<td className="px-6 py-5 text-center font-label-sm text-on-surface-variant">892</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-on-surface-variant/60">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span className="text-xs font-bold">비공개</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<div className="flex justify-end gap-2">
<button className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-5">
<input className="row-checkbox rounded border-outline-variant text-secondary focus:ring-secondary transition-all" type="checkbox"/>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-16 h-10 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" alt="A clean and sophisticated data visualization dashboard showing interactive educational progress char" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGgxj5NclP-rYFzay0KqzTvMWbugLUUHaN10eD1wAnYHtPuiTTqvDJ7i_cO1CaTuhNrnyQlDjMRpDHrqxf-adhsmEOOGUNP-7k9eU83mXlhmLGKrQLKY1SgNB-plvKJOpXOPNp1ZkLcS40kaHw5ZY2vqy5POgLXlfTzu2Zj6SFPj4pFm4MBjPJFzel8rvyO9iBYTY90yxUsIb8YFjlgxFBaHffWTguhXL5uolXlwDJdSEZBR_Jlya-9g" />
</div>
<div>
<div className="font-bold text-on-surface mb-0.5 group-hover:text-secondary transition-colors cursor-pointer">데이터로 본 1분기 학습 성취도 분석 리포트</div>
<div className="text-xs text-on-surface-variant">작성자: 최요한 매니저</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed-variant text-[11px] font-bold">Analytics</span>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant font-medium">2024-05-10</td>
<td className="px-6 py-5 text-center font-label-sm text-on-surface-variant">2,103</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-xs font-bold">공개됨</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<div className="flex justify-end gap-2">
<button className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-5">
<input className="row-checkbox rounded border-outline-variant text-secondary focus:ring-secondary transition-all" type="checkbox"/>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-16 h-10 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" alt="An abstract digital background with floating geometric translucent shapes in shades of deep navy and" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_deyPUHx3SmgHzlCxiSsXgNXHGh8voXEg4d2UTIpGxsyk_y24bdagpwbLuLRAK3r3uSlGkQo-IUxBUxlDPPkKqA0yL2bojAraw3gl5DdJakR-XtuF0HuJkQXzkQMfzzKDnpCAjntAmJgXUkzjjg62J5zuXCE66-p2VOM5JrGMwFA1DSV-7wHKhPLzeBzvxbckbuubPzBkkfkziTcCeEZu_jPm9DK7_DjU-hp5wtOnyZoqgWcpI4YjpA" />
</div>
<div>
<div className="font-bold text-on-surface mb-0.5 group-hover:text-secondary transition-colors cursor-pointer">교육용 AI 윤리 가이드라인 업데이트</div>
<div className="text-xs text-on-surface-variant">작성자: 김민준 연구원</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px] font-bold">AI Ethics</span>
</td>
<td className="px-6 py-5 text-sm text-on-surface-variant font-medium">2024-05-08</td>
<td className="px-6 py-5 text-center font-label-sm text-on-surface-variant">542</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-on-surface-variant/60">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span className="text-xs font-bold">비공개</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<div className="flex justify-end gap-2">
<button className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-all">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low/20">
<div className="text-sm text-on-surface-variant">
                    총 <span className="font-bold text-on-surface">124</span>개 게시글 중 1-4 표시 중
                </div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-30" disabled>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary text-on-secondary font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container text-on-surface-variant font-bold transition-colors">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container text-on-surface-variant font-bold transition-colors">3</button>
<div className="px-2 text-on-surface-variant font-bold">...</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container text-on-surface-variant font-bold transition-colors">12</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
</div>
    </>
  );
}
