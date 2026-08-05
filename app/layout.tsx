import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AppPreferenceProvider } from "@/app/PreferenceProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://bonnie.yun"),
  title: {
    default: "Bonnie Yun | AI Native Product Manager",
    template: "%s | Bonnie Yun"
  },
  description:
    "Bonnie is an AI Native Product Manager building products from idea to launch with AI.",
  keywords: [
    "Bonnie Yun",
    "AI Native Product Manager",
    "Product Manager Portfolio",
    "AI Product",
    "Web3 Product"
  ],
  openGraph: {
    title: "Bonnie Yun | AI Native Product Manager",
    description:
      "Building products from idea to launch with AI across research, product definition, prototyping, development, testing, and launch.",
    type: "website",
    url: "https://bonnie.yun"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const preferenceScript = `
    (() => {
      try {
        const storedTheme = localStorage.getItem("bonnie-theme") || "system";
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const appliedTheme = storedTheme === "dark" || (storedTheme === "system" && prefersDark) ? "dark" : "light";
        const storedLanguage = localStorage.getItem("bonnie-language") || "en";
        document.documentElement.dataset.theme = appliedTheme;
        document.documentElement.lang = storedLanguage === "zh" ? "zh-CN" : "en";
        document.documentElement.style.colorScheme = appliedTheme;
      } catch {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
        {/* Tailwind v4 is prebuilt to avoid a local Next dev CSS chunk 404. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <AppPreferenceProvider>
          <Header />
          {children}
        </AppPreferenceProvider>
      </body>
    </html>
  );
}
