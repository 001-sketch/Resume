import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Chege — Portfolio",
  description: "Software Engineer | Backend-Focused Developer",
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
