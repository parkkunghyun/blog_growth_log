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
  const hasLink = /<Link[\s>]/.test(s);
  const hasImport = /import Link from/.test(s);
  if (hasLink && !hasImport) {
    if (/import \{ AdminSidebar/.test(s)) {
      s = s.replace(
        /import \{ AdminSidebar/,
        'import Link from "next/link";\nimport { AdminSidebar'
      );
    } else {
      s = 'import Link from "next/link";\n' + s;
    }
    fs.writeFileSync(f, s);
    console.log("added import", f);
  } else if (!hasLink && hasImport) {
    s = s.replace(/import Link from "next\/link";\n/, "");
    fs.writeFileSync(f, s);
    console.log("removed import", f);
  } else {
    console.log("fine", f, hasLink ? "uses Link" : "");
  }
}
