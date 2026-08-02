"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ko";

const dict = {
  en: {
    "nav.home": "Home",
    "nav.corporate": "Corporate Training",
    "nav.ai": "AI",
    "nav.culture": "Org Culture",
    "nav.about": "About",
    "nav.search": "Search posts...",
    "footer.tagline": "Records for a tomorrow better than today.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.ethics": "AI Ethics",
    "footer.contact": "Contact",
    "admin.menu": "Menu",
    "admin.dashboard": "Dashboard",
    "admin.content": "Content",
    "admin.newPost": "New Post",
    "admin.analytics": "Analytics",
    "admin.users": "Users",
    "admin.settings": "Settings",
    "admin.insight": "AI Insight",
    "admin.insightBody":
      "Visitor traffic this week is expected to rise 12% vs last week.",
    "cat.all": "All",
    "home.welcome": "Growth Log",
    "home.tagline": "Corporate training, AI, and organizational culture.",
    "home.introEyebrow": "About me",
    "home.introTitle":
      "Records leave growth behind, and growth creates the next change.",
    "home.introBody1":
      "I write down the field lessons and missteps found in corporate training, AI, and organizational culture.",
    "home.introBody2":
      "I look for methods that outlast trends, and share stories that work in real workplaces.",
    "home.introCta": "Read the posts",
    "home.postsTitle": "Latest posts",
    "home.newsletterTitle": "Stay ahead of the curve.",
    "home.newsletterDesc":
      "Get weekly insights on corporate learning, AI, and culture.",
    "home.newsletterCta": "Join Growth Log",
    "home.newsletterHint": "No spam. Just insights. Unsubscribe anytime.",
    "blog.title": "Posts",
    "blog.desc": "Browse articles by category.",
    "blog.readArticle": "Read Article",
    "blog.back": "Back to list",
    "about.story": "Our Story",
    "about.title":
      "Bridging the gap between AI innovation and classroom reality.",
    "about.desc":
      "At Growth Log, we believe technology should be the catalyst for a more personalized, efficient, and inspiring learning journey.",
    "about.stat": "Educators empowered globally",
    "about.vision": "Our Vision",
    "adminDash.title": "Admin Dashboard",
    "adminDash.subtitle": "Hello, admin. Here's today's blog activity summary.",
    "content.title": "Content Management",
    "content.subtitle": "Manage posts and monitor education statistics.",
    "content.newPost": "+ New Post",
    "content.export": "Export Data",
    "newPost.publish": "Publish",
    "newPost.preview": "Preview",
    "newPost.edit": "Edit",
  },
  ko: {
    "nav.home": "홈",
    "nav.corporate": "기업교육",
    "nav.ai": "AI",
    "nav.culture": "조직문화",
    "nav.about": "소개",
    "nav.search": "글 검색...",
    "footer.tagline": "오늘보다 더 나은 내일을 위한 기록.",
    "footer.privacy": "개인정보처리방침",
    "footer.terms": "이용약관",
    "footer.ethics": "AI 윤리",
    "footer.contact": "문의",
    "admin.menu": "메뉴",
    "admin.dashboard": "대시보드",
    "admin.content": "콘텐츠 관리",
    "admin.newPost": "새 글 작성",
    "admin.analytics": "통계 분석",
    "admin.users": "사용자 관리",
    "admin.settings": "시스템 설정",
    "admin.insight": "AI 인사이트",
    "admin.insightBody":
      "이번 주 방문자 수가 지난주 대비 12% 증가할 것으로 예상됩니다.",
    "cat.all": "전체",
    "home.welcome": "Growth Log",
    "home.tagline": "기업교육 · AI · 조직문화",
    "home.introEyebrow": "소개",
    "home.introTitle":
      "기록은 성장을 남기고, 성장은 또 다른 변화를 만듭니다.",
    "home.introBody1":
      "기업교육, AI, 조직문화 속에서 얻은 실무 경험과 시행착오를 기록합니다.",
    "home.introBody2":
      "유행보다 오래 남는 방법을 찾고, 실제 현장에서 통하는 이야기를 나눕니다.",
    "home.introCta": "글 보러가기",
    "home.postsTitle": "최근 글",
    "home.newsletterTitle": "앞서가는 인사이트를 받아보세요.",
    "home.newsletterDesc":
      "기업교육, AI, 조직문화에 대한 주간 인사이트를 받아보세요.",
    "home.newsletterCta": "Growth Log 구독",
    "home.newsletterHint": "스팸 없음. 언제든 구독 해지 가능.",
    "blog.title": "게시글",
    "blog.desc": "카테고리별로 글을 살펴보세요.",
    "blog.readArticle": "글 읽기",
    "blog.back": "목록으로",
    "about.story": "우리의 이야기",
    "about.title": "AI 혁신과 교실 현실 사이의 간극을 잇습니다.",
    "about.desc":
      "Growth Log는 기술이 교육의 단순한 부가물이 아니라, 더 개인화되고 효율적이며 영감을 주는 학습의 촉매가 되어야 한다고 믿습니다.",
    "about.stat": "전 세계 교육자 지원",
    "about.vision": "우리의 비전",
    "adminDash.title": "관리자 대시보드",
    "adminDash.subtitle": "안녕하세요, 관리자님. 오늘 블로그 활동 요약입니다.",
    "content.title": "콘텐츠 관리",
    "content.subtitle": "게시글을 관리하고 교육 통계를 모니터링하세요.",
    "content.newPost": "+ 새 게시글 작성",
    "content.export": "데이터 내보내기",
    "newPost.publish": "발행하기",
    "newPost.preview": "미리보기",
    "newPost.edit": "편집",
  },
} as const;

export type DictKey = keyof (typeof dict)["en"];

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
  mounted: boolean;
};

const LangContext = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("growth-log-lang") as Lang | null;
    if (saved === "en" || saved === "ko") setLangState(saved);
    setMounted(true);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("growth-log-lang", l);
    document.documentElement.lang = l === "ko" ? "ko" : "en";
  }, []);

  const t = useCallback((key: DictKey) => dict[lang][key] ?? dict.en[key], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, mounted }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

/** Inline bilingual text for pages */
export function T({ en, ko }: { en: string; ko: string }) {
  const { lang } = useLang();
  return <>{lang === "ko" ? ko : en}</>;
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center border border-outline-variant text-[11px] uppercase tracking-[0.12em]">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-2 transition-colors cursor-pointer ${
          lang === "en"
            ? "bg-on-surface text-background font-semibold"
            : "text-on-surface-variant hover:text-on-surface"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ko")}
        className={`px-2.5 py-2 transition-colors cursor-pointer border-l border-outline-variant ${
          lang === "ko"
            ? "bg-on-surface text-background font-semibold"
            : "text-on-surface-variant hover:text-on-surface"
        }`}
      >
        KO
      </button>
    </div>
  );
}
