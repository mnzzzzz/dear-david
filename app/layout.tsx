import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dear david.",
  description: "a little something I made for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}