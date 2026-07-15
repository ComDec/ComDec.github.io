import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://comdec.github.io"),
  title: {
    default: "Xi Wang — Generative Models & AI for Science",
    template: "%s — Xi Wang",
  },
  description:
    "Xi Wang is a PhD student at New York University working on generative models, including LLM post-training, diffusion models for drug discovery, and foundation models for biomolecules.",
  authors: [{ name: "Xi Wang" }],
  openGraph: {
    title: "Xi Wang — Generative Models & AI for Science",
    description:
      "Research on LLM post-training, diffusion models for drug discovery, and foundation models for RNA, proteins, and antibodies.",
    url: "https://comdec.github.io",
    siteName: "Xi Wang",
    images: [{ url: "/profile-anime.jpg", width: 1000, height: 1000 }],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1eb" },
    { media: "(prefers-color-scheme: dark)", color: "#151714" },
  ],
};

const themeScript = `
  try {
    const stored = localStorage.getItem('theme');
    const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
