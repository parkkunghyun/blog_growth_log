# Growth Log

기업교육 · AI · 조직문화를 다루는 AI 교육 블로그 프론트엔드입니다.  
UI는 Google Stitch 디자인(Growth Log)을 기반으로 Next.js로 구성했습니다.

## Stack

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- Flaticon Uicons (`fi-sr-chart-line-up`)

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint |

## Routes

| 경로 | 설명 |
|------|------|
| `/` | 홈 (카테고리 + 글 카드) |
| `/blog` | 글 목록 (`?cat=corporate\|ai\|culture`) |
| `/blog/[slug]` | 글 상세 |
| `/admin` | 관리자 대시보드 *(헤더에 노출되지 않음, URL 직접 접근)* |
| `/admin/posts` | 콘텐츠 관리 |
| `/admin/posts/new` | 새 글 작성 |

## Features

- **카테고리**: 기업교육 / AI / 조직문화
- **한·영 전환**: 헤더 `EN | 한글` (localStorage 저장)
- **다크/라이트 모드**: 헤더 토글 (localStorage + `prefers-color-scheme`)
- **관리자 UI**: 대시보드 · 글 목록 · 작성 화면 (목업, DB 연동 없음)

## Project Structure

```
frontend/
├── app/                 # App Router 페이지
│   ├── page.tsx         # 홈
│   ├── blog/            # 목록 · 상세
│   └── admin/           # 관리자
├── components/          # Header, Footer, CategoryBar, AdminSidebar …
├── lib/                 # i18n, theme, categories
└── public/              # favicon.svg, logo.svg, 이미지 자산
```

## Notes

- 현재는 **UI 목업**입니다. DB·API·인증은 아직 없습니다.
- 관리자 진입은 추후 **Google 로그인**으로 연결할 예정입니다.
- 관리자 화면은 내비에 숨겨 두었으며 `/admin`으로만 접근합니다.

## License

Private project.
