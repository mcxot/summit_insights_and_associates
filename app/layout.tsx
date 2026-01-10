import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summit Insights & Associates | Research, Analysis & Training Solutions",
  description: "We turn questions into clear, actionable insights. High-quality research, data analysis, and capacity-building solutions for organisations, businesses, and individuals. Contact us for evidence-based decisions.",
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
