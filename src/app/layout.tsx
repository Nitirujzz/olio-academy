import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olio Academy — Sommelier Path",
  description: "เรียนรู้ศาสตร์ EVOO อย่างลึกซึ้ง · 10 Modules · 87 Quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
