"use client";

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { Providers } from "@/components/Providers";
import BookingModal from "@/components/BookingModal";
import { LoadingScreen } from "@/components/LoadingScreen";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-inter bg-background text-foreground transition-colors duration-300">
        <Providers>
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen key="loading" />
            ) : (
              <div key="content">
                {children}
                <BookingModal />
              </div>
            )}
          </AnimatePresence>
        </Providers>
      </body>
    </html>
  );
}
