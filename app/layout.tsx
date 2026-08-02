import type { Metadata } from "next";
import { Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeInitScript } from "@/components/ThemeInitScript";
import { LangProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const display = Noto_Sans_KR({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-body",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Growth Log | AI Education Blog",
  description: "Corporate training, AI, and organizational culture insights.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface selection:bg-on-surface selection:text-background">
        <ThemeInitScript />
        <ThemeProvider>
          <LangProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
