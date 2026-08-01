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

const attrMap = {
  onclick: "onClick",
  onchange: "onChange",
  onsubmit: "onSubmit",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onfocus: "onFocus",
  onblur: "onBlur",
  onmouseover: "onMouseOver",
  onmouseout: "onMouseOut",
  contenteditable: "contentEditable",
  autocomplete: "autoComplete",
  spellcheck: "spellCheck",
  tabindex: "tabIndex",
  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  cellphone: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  rowspan: "rowSpan",
  crossorigin: "crossOrigin",
  frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen",
};

for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const before = s;

  for (const [from, to] of Object.entries(attrMap)) {
    s = s.replace(new RegExp(`\\b${from}=`, "gi"), `${to}=`);
  }

  // Strip inline event handlers that call undefined functions (UI-only)
  s = s.replace(/\s+onClick="[^"]*"/g, "");
  s = s.replace(/\s+onChange="[^"]*"/g, "");

  // Fix broken href on span from earlier script
  s = s.replace(
    /<span className="font-semibold" href="\/admin\/posts\/new">\+ 새 게시글 작성<\/span>/g,
    `<span className="font-semibold">+ 새 게시글 작성</span>`
  );

  // Fix button wrapping new post - ensure Link
  if (f.includes("admin/posts/page")) {
    s = s.replace(
      /<button className="flex items-center gap-2 bg-secondary text-on-secondary px-6 py-2\.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm">\s*<span className="material-symbols-outlined text-\[20px\]">add<\/span>\s*<span className="font-semibold">\+ 새 게시글 작성<\/span>\s*<\/button>/,
      `<Link href="/admin/posts/new" className="flex items-center gap-2 bg-secondary text-on-secondary px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="font-semibold">+ 새 게시글 작성</span>
</Link>`
    );
  }

  if (s !== before) {
    fs.writeFileSync(f, s);
    console.log("fixed", f);
  } else {
    console.log("ok", f);
  }
}
