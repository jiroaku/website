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

export const metadata: Metadata = {
  title: "jiroaku — cs student · web dev · gamer · voice actor",
  description: "cs student learning backend dev & networking (ccna in progress). web dev, gamer (minecraft • valorant), and voice actor for many minecraft events. cofounder @ Tridnio Studios. founder @ EuxoraSoft.",
  keywords: ["jiroaku", "web developer", "voice actor", "game developer", "Tridnio Studios", "EuxoraSoft"],
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
