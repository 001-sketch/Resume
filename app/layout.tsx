import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Chege | Full-Stack Developer in Nairobi",
  description:
    "Portfolio of Michael Chege, a Nairobi-based full-stack developer building clear, reliable digital products with React, Next.js, TypeScript, and Python.",
  keywords: [
    "Michael Chege",
    "full-stack developer Nairobi",
    "React developer Kenya",
    "Next.js developer",
    "TypeScript developer",
    "web developer portfolio",
  ],
  authors: [{ name: "Michael Chege" }],
  creator: "Michael Chege",
  openGraph: {
    title: "Michael Chege | Full-Stack Developer",
    description:
      "Nairobi-based full-stack developer building clear, reliable digital products.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "Michael Chege | Full-Stack Developer",
    description:
      "Nairobi-based full-stack developer building clear, reliable digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
