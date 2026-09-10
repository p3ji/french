import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./objectif.css";
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#234b3b" };

export const metadata: Metadata = {
  title: "Objectif CBC — French for the public service",
  description: "Guided French preparation for federal public servants working toward reading C, writing B, and oral C.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
