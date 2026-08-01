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

const bools = [
  "required",
  "disabled",
  "checked",
  "selected",
  "readOnly",
  "multiple",
  "autoFocus",
  "autoPlay",
  "controls",
  "loop",
  "muted",
  "defaultChecked",
  "defaultOpen",
  "open",
  "hidden",
  "defer",
  "async",
  "noValidate",
];

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const before = s;
  for (const b of bools) {
    // required="" or required="required" -> required
    s = s.replace(new RegExp(`\\b${b}="[^"]*"`, "g"), b);
  }
  if (s !== before) {
    fs.writeFileSync(f, s);
    console.log("fixed", f);
  } else {
    console.log("ok", f);
  }
}
