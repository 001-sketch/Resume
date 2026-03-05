import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Chege – Software Engineer",
  description: "Resume of Michael Chege, Backend-Focused Software Engineer",
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
