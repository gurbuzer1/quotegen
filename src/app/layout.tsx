import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "QuoteGen — Beautiful Inspirational Quotes",
  description: "Discover and share beautiful inspirational quotes from famous people. 200+ curated quotes across motivation, success, love, life, wisdom, and humor.",
  keywords: "quotes, inspirational quotes, motivational quotes, quote generator, daily quotes, famous quotes",
  openGraph: {
    title: "QuoteGen — Beautiful Inspirational Quotes",
    description: "Discover and share beautiful inspirational quotes. 200+ curated quotes across 6 categories.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
