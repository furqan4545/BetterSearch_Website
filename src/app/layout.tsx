import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://bettersearch.0to-1.com";

export const metadata: Metadata = {
  title: "BetterSearch — Smarter Spotlight Replacement for macOS",
  description:
    "A lightweight 3.9MB macOS Spotlight replacement that actually finds your files. 5-layer AI search engine, real thumbnails, fuzzy matching, semantic search, and instant results. Press ⌘⇧Space to search.",
  keywords: [
    "BetterSearch",
    "macOS Spotlight replacement",
    "Spotlight alternative",
    "macOS search",
    "AI search",
    "file search mac",
    "fuzzy search",
    "semantic search macOS",
    "Spotlight better",
    "mac productivity",
  ],
  authors: [{ name: "Furqan Ali", url: "https://github.com/furqan4545" }],
  creator: "Furqan Ali",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "BetterSearch",
    title: "BetterSearch — Smarter Spotlight Replacement for macOS",
    description:
      "A lightweight macOS Spotlight replacement with 5-layer AI search. Finds actual apps, not random .d.ts files. Press ⌘⇧Space.",
    images: [
      {
        url: "/BetterSearch_Assets/comparison.png",
        width: 2392,
        height: 912,
        alt: "BetterSearch vs macOS Spotlight comparison — BetterSearch finds actual apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterSearch — Smarter Spotlight Replacement for macOS",
    description:
      "A lightweight macOS Spotlight replacement with 5-layer AI search. Finds actual apps, not random .d.ts files.",
    images: ["/BetterSearch_Assets/comparison.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BetterSearch",
              description:
                "A lightweight macOS Spotlight replacement that actually finds your files. 5-layer AI search engine with fuzzy matching, semantic search, and real thumbnails.",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "macOS 12.4+",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              fileSize: "3.9MB",
              softwareVersion: "1.5",
              downloadUrl:
                process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
                "https://github.com/furqan4545/BetterSearch/releases/download/1.5/BetterSearch.1.5.dmg",
              screenshot: `${siteUrl}/BetterSearch_Assets/comparison.png`,
              url: siteUrl,
              author: {
                "@type": "Person",
                name: "Furqan Ali",
                url: "https://github.com/furqan4545",
              },
              aggregateRating: undefined,
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
