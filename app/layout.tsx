import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miciah Henderson (@kiahjh)",
  description:
    "Design engineer, systems programmer, and builder. Rust, Swift, React, and everything in between.",
  openGraph: {
    title: "Miciah Henderson",
    description:
      "Design engineer, systems programmer, and builder. Rust, Swift, React, and everything in between.",
    url: "https://kiahjh.com",
    siteName: "Miciah Henderson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miciah Henderson",
    description:
      "Design engineer, systems programmer, and builder. Rust, Swift, React, and everything in between.",
    creator: "@kiahjh",
  },
  metadataBase: new URL("https://kiahjh.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
