import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Md. Shahnewaz Zaman (Shanto) - Sherpur-2 Constituency",
  description: "Political campaign website for Md. Shahnewaz Zaman, candidate for Sherpur-2 (Nakla-Nalitabari), Bangladesh Parliament - Upcoming..",
  keywords: "Sherpur-2, Nakla, Nalitabari, Bangladesh Parliament, Political Campaign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

