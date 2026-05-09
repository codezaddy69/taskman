import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskMan - AI-Powered Calendar & Todo Helper",
  description: "Productivity app with calendar, tasks, and gamification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${interMono.variable} antialiased`}
      >
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <main className="flex-1 ml-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
