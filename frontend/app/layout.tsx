import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We Craft Code",
  description:
    "We are a small group of people who leverage learning and programming through motivation, mentoring and craftsmanship.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "We Craft Code",
    description:
      "We are a small group of people who leverage learning and programming through motivation, mentoring and craftsmanship.",
    url: "https://wecraftcode.org",
    siteName: "We Craft Code",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your App Name Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Craft Code",
    description:
      "We are a small group of people who leverage learning and programming through motivation, mentoring and craftsmanship.",
    images: ["/og-image.png"],
    creator: "@eduardovedes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} antialiased bg-gray-900 text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
