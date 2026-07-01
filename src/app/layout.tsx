import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KORA - Your Local Friend in China",
  description:
    "KORA helps foreign travelers in China save time, avoid tourist traps, and find local food, nightlife, routes, payment help, and Amap-ready addresses.",
  metadataBase: new URL("https://kora-china.vercel.app"),
  openGraph: {
    title: "KORA - Your Local Friend in China",
    description:
      "A Telegram assistant for foreign travelers who want local answers in China.",
    type: "website",
    locale: "en_US"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaf2"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
