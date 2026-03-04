import type { Metadata } from "next";
import { Catamaran, Salsa } from "next/font/google";
import "./globals.css";

const bodyFont = Catamaran({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Salsa({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dr. Attar Aqua Feed",
  description: "High-Quality Aqua Feed Solutions for Healthy Aquatic Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
