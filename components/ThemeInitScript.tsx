"use client";

import { useServerInsertedHTML } from "next/navigation";

const THEME_INIT = `(function(){try{var t=localStorage.getItem('growth-log-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

/** Injects theme FOUC script outside the client React tree (React 19 safe). */
export function ThemeInitScript() {
  useServerInsertedHTML(() => (
    <script
      id="growth-log-theme-init"
      dangerouslySetInnerHTML={{ __html: THEME_INIT }}
    />
  ));
  return null;
}
