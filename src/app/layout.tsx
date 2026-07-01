import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kora - 来华生活 AI 助手",
  description:
    "Kora 是运行在 Telegram 里的 AI 生活助手，帮助来华外国人快速解决支付、餐饮、地点和日常生活问题。",
  metadataBase: new URL("https://kora-china.vercel.app"),
  openGraph: {
    title: "Kora - 来华生活 AI 助手",
    description:
      "一个 Telegram Bot，让来华生活问题变成可执行的步骤、地点和本地建议。",
    type: "website",
    locale: "zh_CN"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071013"
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
