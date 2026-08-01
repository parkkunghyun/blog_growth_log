import fs from "fs";

const files = [
  "app/page.tsx",
  "app/blog/page.tsx",
  "app/blog/[slug]/page.tsx",
  "app/about/page.tsx",
  "app/admin/page.tsx",
  "app/admin/posts/page.tsx",
  "app/admin/posts/new/page.tsx",
];

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const before = s;
  s = s.replace(
    /\b(rows|cols|tabIndex|maxLength|minLength|size|span|colSpan|rowSpan)="(\d+)"/g,
    "$1={$2}"
  );
  // Remove unused Link import if Link not used
  if (/^import Link from "next\/link";\n\n/.test(s) && !/<Link[\s>]/.test(s)) {
    s = s.replace(/^import Link from "next\/link";\n\n/, "");
  }
  if (s !== before) {
    fs.writeFileSync(f, s);
    console.log("fixed", f);
  } else {
    console.log("ok", f);
  }
}
