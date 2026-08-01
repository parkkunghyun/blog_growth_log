import fs from "fs";
import path from "path";

function wrapPublic(name, jsx) {
  // Remove outer main's pt-24 if present - keep as-is since Header is fixed
  return `import Link from "next/link";

export default function ${name}() {
  return (
    <>
${jsx}
    </>
  );
}
`;
}

function stripAdminAside(jsx) {
  // Remove the aside block - we'll use AdminSidebar component
  return jsx.replace(
    /<aside className="hidden md:flex[\s\S]*?<\/aside>/,
    ""
  );
}

const pages = {
  home: {
    name: "HomePage",
    out: "app/page.tsx",
    transform: (jsx) => {
      // Wire CTA buttons and featured post
      return jsx
        .replace(
          /Start Exploring\s*<\/button>/,
          `Start Exploring</button>`
        )
        .replace(
          `<button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                            Start Exploring
                        </button>`,
          `<Link href="/blog" className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform inline-block">
                            Start Exploring
                        </Link>`
        )
        .replace(
          `<button className="border border-outline-variant/50 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-colors">
                            Read Latest
                        </button>`,
          `<Link href="/blog/algorithmic-classroom" className="border border-outline-variant/50 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-colors inline-block">
                            Read Latest
                        </Link>`
        )
        .replace(
          `className="bento-item-large group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm border border-outline-variant/30 flex flex-col"`,
          `className="bento-item-large group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm border border-outline-variant/30 flex flex-col"`
        );
    },
  },
  blog: { name: "BlogPage", out: "app/blog/page.tsx" },
  post: { name: "PostPage", out: "app/blog/[slug]/page.tsx" },
  about: { name: "AboutPage", out: "app/about/page.tsx" },
  admin: {
    name: "AdminDashboard",
    out: "app/admin/page.tsx",
    admin: true,
  },
  "new-post": {
    name: "NewPostPage",
    out: "app/admin/posts/new/page.tsx",
    admin: true,
  },
  content: {
    name: "ContentPage",
    out: "app/admin/posts/page.tsx",
    admin: true,
  },
};

for (const [file, cfg] of Object.entries(pages)) {
  let raw = fs.readFileSync(`stitch-ref/jsx/${file}.tsx`, "utf8");
  // Extract inner JSX between <> and </>
  const m = raw.match(/return \(\s*<>\s*([\s\S]*)\s*<\/>\s*\);/);
  if (!m) {
    console.error("parse fail", file);
    continue;
  }
  let jsx = m[1].trim();

  if (cfg.transform) jsx = cfg.transform(jsx);

  // Wire common blog links
  jsx = jsx.replace(
    /href="#"/g,
    'href="/blog/algorithmic-classroom"'
  );

  // Fix Read Article links already covered
  // Wire new post button
  jsx = jsx.replace(
    />\s*\+?\s*새 게시글 작성\s*</,
    ' href="/admin/posts/new">+ 새 게시글 작성<'
  );

  let out;
  if (cfg.admin) {
    // admin dashboard has flex wrapper with aside - strip aside
    if (file === "admin") {
      jsx = stripAdminAside(jsx);
      // Ensure flex wrapper still works - replace opening flex div
      jsx = jsx.replace(
        '<div className="flex pt-16 min-h-screen">',
        '<div className="flex pt-16 min-h-screen">\n<AdminSidebar />'
      );
    } else {
      // content and new-post don't have sidebar in original - wrap them
      jsx = `<div className="flex pt-16 min-h-screen">
<AdminSidebar />
<div className="flex-1 overflow-auto">
${jsx.replace('className="pt-24', 'className="pt-8').replace('pt-24 ', 'pt-8 ')}
</div>
</div>`;
    }

    out = `import Link from "next/link";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function ${cfg.name}() {
  return (
    <>
${jsx}
    </>
  );
}
`;
  } else {
    out = wrapPublic(cfg.name, jsx);
  }

  fs.mkdirSync(path.dirname(cfg.out), { recursive: true });
  fs.writeFileSync(cfg.out, out, "utf8");
  console.log("wrote", cfg.out, out.length);
}
