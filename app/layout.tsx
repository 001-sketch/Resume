import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MICHAEL CHEGE — Full-Stack Developer",
  description:
    "Full-stack developer building usable interfaces with React, Next.js, TypeScript, and Python-backed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
