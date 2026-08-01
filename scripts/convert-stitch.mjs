import fs from "fs";

function htmlToJsx(html) {
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/\sclass=/g, " className=");
  s = s.replace(/\sfor=/g, " htmlFor=");
  s = s.replace(/<(img|input|br|hr|meta|link)([^>]*?)(?<!\/)>/gi, "<$1$2 />");
  s = s.replace(/style="([^"]*)"/g, (_, css) => {
    const obj = css
      .split(";")
      .filter(Boolean)
      .map((r) => {
        const [k, ...rest] = r.split(":");
        if (!k || !rest.length) return null;
        const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        let val = rest.join(":").trim();
        if (/^\d+$/.test(val)) val = Number(val);
        else val = JSON.stringify(val);
        return `${key}: ${val}`;
      })
      .filter(Boolean)
      .join(", ");
    return `style={{${obj}}}`;
  });
  s = s.replace(/<img([^>]*?)data-alt="([^"]*)"([^>]*?)\/>/g, (m, a, alt, b) => {
    if (/alt=/.test(a + b)) return m;
    const short = alt.slice(0, 100).replace(/"/g, "&quot;");
    return `<img${a}alt="${short}"${b} />`;
  });
  s = s.replace(/\sdata-alt="[^"]*"/g, "");
  return s.trim();
}

/** Remove first top nav/header and all footers, keep content */
function extractMain(html) {
  let s = html;
  // Match body content
  const bodyMatch = s.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) s = bodyMatch[1];

  // Remove scripts
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");

  // Remove footer(s)
  s = s.replace(/<footer[\s\S]*?<\/footer>/gi, "");

  // Remove the first fixed top header/nav only (opening to matching close)
  // Prefer <header ... fixed ...> or <nav ... fixed ...>
  const fixedMatch = s.match(
    /<(header|nav)[^>]*(?:fixed|TopNav)[^>]*>[\s\S]*?<\/\1>/i
  );
  if (fixedMatch) {
    s = s.replace(fixedMatch[0], "");
  } else {
    // fallback: first header or nav
    s = s.replace(/<(header|nav)[\s\S]*?<\/\1>/i, "");
  }

  return s.trim();
}

const map = {
  home: { name: "HomePage", path: "app/page.tsx" },
  blog: { name: "BlogPage", path: "app/blog/page.tsx" },
  post: { name: "PostPage", path: "app/blog/[slug]/page.tsx" },
  about: { name: "AboutPage", path: "app/about/page.tsx" },
  admin: { name: "AdminDashboard", path: "app/admin/page.tsx" },
  "new-post": { name: "NewPostPage", path: "app/admin/posts/new/page.tsx" },
  content: { name: "ContentPage", path: "app/admin/posts/page.tsx" },
};

fs.mkdirSync("stitch-ref/jsx", { recursive: true });

for (const [file, { name }] of Object.entries(map)) {
  const raw = fs.readFileSync(`stitch-ref/html/${file}.html`, "utf8");
  let main = extractMain(raw);
  const jsx = htmlToJsx(main);
  const out = `export default function ${name}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
  fs.writeFileSync(`stitch-ref/jsx/${file}.tsx`, out, "utf8");
  // Verify Korean
  const hasKorean = /[가-힣]/.test(out);
  console.log(file, out.length, "chars", hasKorean ? "KO ok" : "no KO");
  // Show first 200 chars of content after <>
  const snippet = jsx.slice(0, 180).replace(/\s+/g, " ");
  console.log("  ", snippet);
}
