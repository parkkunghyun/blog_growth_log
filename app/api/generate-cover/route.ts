import { NextResponse } from "next/server";

const MODELS = ["gemini-2.5-flash-image", "gemini-3.1-flash-image"] as const;

const CATEGORY_HINT: Record<string, string> = {
  corporate: "corporate training, workplace learning, professional development",
  ai: "artificial intelligence, education technology, modern digital tools",
  culture: "organizational culture, teamwork, workplace atmosphere",
};

function buildPrompt(title: string, category?: string, excerpt?: string) {
  const topic = CATEGORY_HINT[category ?? ""] ?? "learning, growth, professional insight";
  const summary = excerpt?.trim()
    ? `Article summary: ${excerpt.trim().slice(0, 220)}`
    : "";

  return [
    "Create a single editorial blog cover photo.",
    "Aspect mood: clean, calm, premium, documentary-editorial.",
    "Style: soft natural light, shallow depth of field, muted desaturated palette, no neon, no purple glow, no UI mockups.",
    "Composition: wide 16:9 landscape, one strong visual subject, generous negative space, suitable as a website thumbnail.",
    "Important: do NOT include any text, letters, numbers, logos, watermarks, or captions in the image.",
    `Theme keywords: ${topic}.`,
    `Article title (for mood only, do not render as text): ${title}.`,
    summary,
  ]
    .filter(Boolean)
    .join("\n");
}

type GeminiPart = {
  text?: string;
  inlineData?: { mimeType?: string; data?: string };
  inline_data?: { mime_type?: string; data?: string };
};

async function requestImage(apiKey: string, model: string, prompt: string) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const geminiRes = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    }),
  });

  const data = await geminiRes.json().catch(() => null);
  return { geminiRes, data };
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  let body: { title?: string; category?: string; excerpt?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const title = String(body.title ?? "").trim();
  if (!title) {
    return NextResponse.json(
      { error: "썸네일 생성을 위해 제목을 먼저 입력하세요." },
      { status: 400 }
    );
  }

  const prompt = buildPrompt(title, body.category, body.excerpt);

  let lastError = "이미지를 생성하지 못했습니다.";

  for (const model of MODELS) {
    const { geminiRes, data } = await requestImage(apiKey, model, prompt);

    if (!geminiRes.ok) {
      lastError =
        data?.error?.message || `Gemini 요청 실패 (${geminiRes.status})`;
      continue;
    }

    const parts: GeminiPart[] =
      data?.candidates?.[0]?.content?.parts ?? [];

    for (const part of parts) {
      const inline = part.inlineData ?? part.inline_data;
      const b64 = inline?.data;
      if (!b64) continue;

      const mimeType =
        inline?.mimeType ?? inline?.mime_type ?? "image/png";

      return NextResponse.json({
        mimeType,
        base64: b64,
      });
    }

    const blockReason =
      data?.candidates?.[0]?.finishReason ||
      data?.promptFeedback?.blockReason;
    lastError = blockReason
      ? `이미지를 생성하지 못했습니다. (${blockReason})`
      : "응답에 이미지가 없습니다. 제목을 바꿔 다시 시도해 보세요.";
  }

  return NextResponse.json({ error: lastError }, { status: 502 });
}
