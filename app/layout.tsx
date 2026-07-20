import type { Metadata } from "next";
import { Geist, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "eplog",
    template: "%s | eplog",
  },
  description: "一卓、一ページ。TRPGの思い出を未来へ残す場所。",
  applicationName: "eplog",
  keywords: [
    "TRPG",
    "CoC",
    "クトゥルフ",
    "セッション",
    "TRPGログ",
    "卓ログ",
    "eplog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geist.variable} ${notoSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}