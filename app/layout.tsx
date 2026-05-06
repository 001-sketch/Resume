import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsmikespage.tech"),
  title: {
    default: "Michael Chege | Web Designer in Kenya",
    template: "%s | Michael Chege",
  },
  description:
    "Michael Chege is a Kenya-based web designer building conversion-focused websites, landing pages, and UX systems that improve bookings and enquiries.",
  applicationName: "ItsMikesPage",
  keywords: [
    "web designer Kenya",
    "conversion-focused web design",
    "landing page design",
    "UI/UX designer",
    "service business websites",
    "Core Web Vitals optimization",
    "SEO-friendly web design",
  ],
  authors: [{ name: "Michael Chege", url: "https://itsmikespage.tech" }],
  creator: "Michael Chege",
  publisher: "Michael Chege",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://itsmikespage.tech",
    siteName: "ItsMikesPage",
    title: "Michael Chege | Web Designer in Kenya",
    description:
      "Conversion-focused web designer helping service businesses turn traffic into bookings with clear UX and fast performance.",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "Michael Chege | Web Designer in Kenya",
    description:
      "Conversion-focused web designer specializing in landing pages, UX strategy, and Core Web Vitals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
