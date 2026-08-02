import type { Lang } from "@/lib/i18n";
import type { Post } from "@/lib/posts";

// ponytail: EN overlay by slug; move to DB columns when admins write bilingual posts
const enBySlug: Record<
  string,
  { title: string; excerpt: string; content: string }
> = {
  "corporate-ai-playbook": {
    title: "A Practical Guide to Bringing AI into Corporate Training",
    excerpt: "An AI adoption checklist you can use in tomorrow’s workshop.",
    content: `## Getting started

When you add AI to corporate training, the most important thing isn’t the tool — it’s the **learning goal**.

## Checklist

1. Tie the work problem to a KPI
2. Pick one team for a pilot
3. Agree on success metrics

## Wrap-up

Start small, measure, then scale.`,
  },
  "culture-small-routines": {
    title: "Small Routines That Change Org Culture",
    excerpt: "Repeated routines shape culture more than big slogans.",
    content: `## Core message

Culture isn’t a poster — it’s **repeated behavior**.

## Recommended routines

- 15-minute weekly retrospective
- A channel for wins and misses
- Onboarding buddy matching`,
  },
  "ai-llm-for-learning-content": {
    title: "How to Create Learning Content with LLMs",
    excerpt: "From first draft to review — a practical workflow.",
    content: `## Why LLMs?

They can speed up drafting a lot. Still, **human review** is required.

## Workflow

1. Enter the learning goal
2. Generate a draft
3. SME review
4. Pilot release`,
  },
};

export function localizePost(post: Post, lang: Lang): Post {
  if (lang !== "en") return post;
  const t = enBySlug[post.slug];
  if (!t) return post;
  return {
    ...post,
    title: t.title,
    excerpt: t.excerpt,
    content: t.content,
  };
}
