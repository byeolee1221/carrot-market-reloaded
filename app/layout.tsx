import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const NotoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "캐롯마켓 | Carrot Market",
  description: "어서오세요. 캐롯마켓입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>{children}</body>
    </html>
  );
}
