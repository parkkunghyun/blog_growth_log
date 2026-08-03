"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const IMG_SIZE: Record<string, string> = {
  sm: "max-w-[240px] md:max-w-[280px] w-full",
  md: "max-w-[400px] md:max-w-[480px] w-full",
  lg: "max-w-full w-full",
};

function imgSizeClass(title?: string | null) {
  if (title === "sm" || title === "md" || title === "lg") return IMG_SIZE[title];
  return IMG_SIZE.lg;
}

export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="markdown-body text-[17px] leading-relaxed text-on-surface-variant">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold text-on-surface mt-8 mb-3 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold text-on-surface mt-8 mb-2 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 last:mb-0 text-on-surface-variant">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-1 text-on-surface-variant">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-1 text-on-surface-variant">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-bold text-on-surface">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-on-surface underline underline-offset-2 hover:opacity-60"
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-on-surface pl-4 my-4 text-on-surface-variant italic">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const block = Boolean(className);
            if (block) {
              return (
                <code className="block font-mono text-sm bg-surface-container-low border border-outline-variant p-4 overflow-x-auto mb-4 text-on-surface">
                  {children}
                </code>
              );
            }
            return (
              <code className="font-mono text-[0.9em] bg-surface-container px-1.5 py-0.5 text-on-surface">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
          hr: () => <hr className="my-8 border-outline-variant" />,
          img: ({ src, alt, title }) => (
            <img
              src={src}
              alt={alt ?? ""}
              className={`my-4 mx-auto block ${imgSizeClass(title)}`}
            />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-outline-variant bg-surface-container-low px-3 py-2 text-left font-semibold text-on-surface">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-outline-variant px-3 py-2 text-on-surface-variant">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
