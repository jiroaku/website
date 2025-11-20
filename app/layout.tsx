import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { CRTOverlay } from "./components/CRTOverlay";
import { ConditionalNav } from "./components/ConditionalNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jiroaku.dev";
const siteTitle = "jiroaku — web dev & software engineer, voice actor";
const siteDescription =
  "Personal site & blog of Jiroaku: CS / systems engineering student focused on backend automation, Co-founder of Tridnio Studios, founder of EuxoraSoft, sharing projects, blog posts, and voice acting work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | jiroaku",
  },
  description: siteDescription,
  keywords: [
    "jiroaku",
    "voice actor",
    "minecraft narration",
    "web developer",
    "backend developer",
    "Tridnio Studios",
    "EuxoraSoft",
    "CCNA student",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "jiroaku",
    images: [
      {
        url: "/@banner.jpg",
        width: 1200,
        height: 630,
        alt: "jiroaku banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jiroaku",
    creator: "@jiroaku",
    title: siteTitle,
    description: siteDescription,
    images: ["/@banner.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider>
          <ConditionalNav />
          <main className="relative z-10">{children}</main>
          <CRTOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}
