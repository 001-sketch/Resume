import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Chege — Web Designer",
  description: "Web designer crafting clean, high-converting digital experiences.",
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
