import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "VerdantStep | Organic Footwear",
  description: "Handcrafted organic shoes designed for comfort, sustainability, and style.",
  openGraph: {
    title: "VerdantStep | Organic Footwear",
    description: "Discover original organic shoes that pair timeless design with regenerative materials.",
    url: "https://agentic-41ceb3f2.vercel.app",
    siteName: "VerdantStep"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased bg-gradient-to-br from-[#f5f7f2] via-[#edf5ee] to-[#f5f7f2]">
        {children}
      </body>
    </html>
  );
}
