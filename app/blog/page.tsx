"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useLang } from "@/lib/i18n";
import { CategoryBar } from "@/components/CategoryBar";

function BlogContent() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat") ?? "all";

  return (
    <>
<main className="pt-24 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-gutter">

<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">{t("blog.title")}</h1>
<p className="text-on-surface-variant max-w-2xl">{t("blog.desc")}</p>
</div>
<CategoryBar active={cat} variant="blog" />
</div>
</section>
<div className="space-y-8">

<article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col md:flex-row h-full md:h-80 blog-card-hover transition-all">
<div className="md:w-1/2 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="A futuristic classroom setting where digital screens and holographic AI interfaces blend with tradit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlnoeWdHtaVHurqu5M3paSqzjjs6eRoJRbWg5n2jpdOCthRnG-VUD7zVXTixIls5Na9eiKD6a5lFr9yYSpV5G7NVo3DS-oHKwmTLNxTafM1azfuUIhQEaGO7zPtFq_jhowCo-5vnApO0FvL2yiBPVGcXK4GjrRUkycFcTvXXEXvr72-8uFkxbatkGWbswlgwAWTD5g3_j2fNV5zXRSUw-_McGxuKB0wzes82A6zT-9nIaKgL6LBc9OIw" />
<div className="absolute top-4 left-4">
<span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">AI</span>
</div>
</div>
<div className="md:w-1/2 p-8 flex flex-col justify-center">
<div className="flex items-center gap-4 mb-4">
<span className="text-label-sm font-label-sm text-outline flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 12 min read</span>
<span className="text-label-sm font-label-sm text-outline flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 24, 2023</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">Generative AI: The New Teaching Assistant You Didn't Hire</h2>
<p className="text-on-surface-variant line-clamp-3 mb-6">How LLMs are reducing teacher administrative load by 30% through automated lesson planning and personalized feedback loops...</p>
<a className="inline-flex items-center text-secondary font-bold hover:underline" href="/blog/algorithmic-classroom">
                            {t("blog.readArticle")} <span className="material-symbols-outlined ml-1">arrow_forward</span>
</a>
</div>
</article>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<article className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden blog-card-hover transition-all flex flex-col group">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Close up of a tablet screen showing complex mathematical equations being simplified into colorful vi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ52774fOr_9SPKnZTKDO6w5Mx8pDFhuWJ_0TKFMccqH399AyUVGKusq92tDy0G23k9Lua3OfJZxBganjTcoyhP7TIUGJRXsNwUw2FwL99Jm2ldwFrx-cc5UQIhULanbvOUK5Gbjwd5SipqPIY3QgfC6FK3Spm8rKoLiYn-dQSzo4f_TIcEfjQfyZAxfoGJqWd8_a0aSfMeNsYOXtJBBa2HdRfAHsV0Fol5G_CeQ1pC8H2lgFZH9Ybrw" />
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-label-sm font-label-sm">기업교육</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-3 text-outline text-label-sm font-label-sm">
<span>8 min read</span>
<span>•</span>
<span>조직문화</span>
</div>
<h3 className="font-headline-md text-[20px] leading-snug text-primary mb-3 group-hover:text-secondary transition-colors">Building Custom GPTs for Mathematics Curriculum</h3>
<p className="text-on-surface-variant text-body-md line-clamp-2 mb-4">A step-by-step guide on creating an AI tutor that strictly follows Socratic methods without giving away answers.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/20 pt-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container text-xs">SL</div>
<span className="text-label-sm font-medium">Sarah L.</span>
</div>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark_add</span>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden blog-card-hover transition-all flex flex-col group">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="A group of diverse university students collaborating in a high-tech lab. They are looking at a large" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhjkqz3wiphgrOu3MsBE1t-oS-JIJKHJ7v9UDEwwEiNJHsH5UIOC0d-Vz649OZSAzk5OR7cEPvJmOQtoYSECc1X38YBd3iBN_KzwwkqPvfP8uGkhSK91Z5ZvO_--1CugnVfiPNMlfZynBmyxgP5lGhavuRUGhnUeD_5QDrkT10asbgjBSeOxt1RCfen9FIjIYk9HRedTAMRIYXZdyjrOpJj7zczrMHXXU-l8viItbwmH244MgC67TPw" />
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-3 text-outline text-label-sm font-label-sm">
<span>15 min read</span>
<span>•</span>
<span>Case Study</span>
</div>
<h3 className="font-headline-md text-[20px] leading-snug text-primary mb-3 group-hover:text-secondary transition-colors">Case Study: 200% Increase in Engagement with AI-Driven Gamification</h3>
<p className="text-on-surface-variant text-body-md line-clamp-2 mb-4">How a small liberal arts college leveraged real-time data to personalize student learning paths.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/20 pt-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center font-bold text-white text-xs">MT</div>
<span className="text-label-sm font-medium">Marcus T.</span>
</div>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark_add</span>
</div>
</div>
</article>
</div>

<div className="flex items-center justify-center gap-2 pt-8">
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold">1</button>
<button className="w-10 h-10 rounded-full hover:bg-surface-container font-bold">2</button>
<button className="w-10 h-10 rounded-full hover:bg-surface-container font-bold">3</button>
<span className="px-2">...</span>
<button className="w-10 h-10 rounded-full hover:bg-surface-container font-bold">8</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</main>
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<main className="pt-24 px-gutter">Loading...</main>}>
      <BlogContent />
    </Suspense>
  );
}
