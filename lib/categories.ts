export const CATEGORIES = [
  { id: "corporate", en: "Corporate Training", ko: "기업교육" },
  { id: "ai", en: "AI", ko: "AI" },
  { id: "culture", en: "Org Culture", ko: "조직문화" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];
